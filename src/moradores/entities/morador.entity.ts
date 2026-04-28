import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Pessoa } from '../../pessoas/entities/pessoa.entity';
import { Unidade } from '../../unidades/entities/unidade.entity';
import { Reserva } from '../../reservas/entities/reserva.entity';
import { Boleto } from '../../boletos/entities/boleto.entity';
import { Visita } from '../../visitas/entities/visita.entity';
import { ContaReceber } from '../../contas-receber/entities/conta-receber.entity';

@Entity('MORADORES')
export class Morador {
  @PrimaryGeneratedColumn({ name: 'ID_MORADOR' })
  ID_MORADOR: number;

  @ManyToOne(() => Pessoa, pessoa => pessoa.ID_MORADORES)
  @JoinColumn({ name: 'ID_PESSOA' })
  ID_PESSOA: Pessoa;

  @ManyToOne(() => Unidade, unidade => unidade.ID_MORADORES)
  @JoinColumn({ name: 'ID_UNIDADE' })
  ID_UNIDADE: Unidade;

  @OneToMany(() => Reserva, reserva => reserva.ID_MORADOR)
  ID_RESERVAS: Reserva[];

  @OneToMany(() => Boleto, boleto => boleto.ID_MORADOR)
  ID_BOLETOS: Boleto[];

  @OneToMany(() => Visita, visita => visita.ID_MORADOR)
  ID_VISITAS_AUTORIZADAS: Visita[];

  @OneToMany(() => ContaReceber, contaReceber => contaReceber.ID_MORADOR)
  ID_CONTA_RECEBER: ContaReceber[];
  PESSOA: any;
  unidade: any;
}
