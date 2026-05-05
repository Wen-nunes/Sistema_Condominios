import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Morador } from './moradores/entities/morador.entity';
import { Boleto } from './boletos/entities/boleto.entity';
import { Reserva } from './reservas/entities/reserva.entity';
import { Comunicado } from './comunicados/entities/comunicado.entity';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(Morador) 
    private readonly moradorRepo: Repository<Morador>,
    @InjectRepository(Boleto) 
    private readonly boletoRepo: Repository<Boleto>,
    @InjectRepository(Reserva) private reservaRepo: Repository<Reserva>,
    @InjectRepository(Comunicado) private comunicadoRepo: Repository<Comunicado>,
  ) {}

  async getStats() {
    // Executa as contagens em paralelo para não travar o banco
    const [totalMoradores, boletosAberto, reservasHoje, comunicadosAtivos] = await Promise.all([
      this.moradorRepo.count(),
      this.boletoRepo.count({ where: { BOLETO_STATUS: 'PENDENTE' } }),
      this.reservaRepo.count(), 
      this.comunicadoRepo.count({ where: { TITULO: 'COMUNICADO' } }), 
      
    ]);
    
    return {
      totalMoradores,
      boletosAberto,
      reservasHoje,   
      comunicadosAtivos,
    };
  }
}