import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Visitante } from '../../visitantes/entities/visitante.entity';
import { Unidade } from '../../unidades/entities/unidade.entity';
import { Morador } from '../../moradores/entities/morador.entity';

@Entity('VISITAS')
export class Visita {
  @PrimaryGeneratedColumn({ name: 'ID_VISITA' })
  ID_VISITA: number;

  @ManyToOne(() => Visitante, visitante => visitante.VISITAS)
  @JoinColumn({ name: 'ID_VISITANTE' })
  ID_VISITANTE: Visitante;

  @ManyToOne(() => Unidade, unidade => unidade.ID_VISITAS)
  @JoinColumn({ name: 'ID_UNIDADE' })
  ID_UNIDADE: Unidade;

  @ManyToOne(() => Morador, morador => morador.ID_VISITAS_AUTORIZADAS)
  @JoinColumn({ name: 'ID_MORADOR_AUTORIZACAO' })
  ID_MORADOR_AUTORIZACAO: Morador;

  @Column({ name: 'PLACA_VEICULO', type: 'varchar', length: 10, nullable: true })
  PLACA_VEICULO: string;

  @Column({ name: 'DATA_ENTRADA', type: 'timestamp', nullable: true })
  DATA_ENTRADA: Date;

  @Column({ name: 'DATA_SAIDA', type: 'timestamp', nullable: true })
  DATA_SAIDA: Date;
  ID_MORADOR: any;
}
