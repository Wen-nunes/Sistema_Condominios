import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Morador } from '../../moradores/entities/morador.entity';
import { AreaComum } from '../../areas-comuns/entities/area-comum.entity';

@Entity('RESERVAS')
export class Reserva {
  @PrimaryGeneratedColumn({ name: 'ID_RESERVA' })
  ID_RESERVA: number;

  @Column({ name: 'DATA_RESERVA', type: 'date', nullable: true })
  DATA_RESERVA: Date;

  @Column({ name: 'HR_INICIO', type: 'date', nullable: true })
  HR_INICIO: Date;

  @Column({ name: 'HR_FIM', type: 'date', nullable: true })
  HR_FIM: Date;

  @ManyToOne(() => Morador, morador => morador.ID_RESERVAS)
  @JoinColumn({ name: 'ID_MORADOR' })
  ID_MORADOR: Morador;

  @ManyToOne(() => AreaComum, areaComum => areaComum.ID_RESERVA)
  @JoinColumn({ name: 'ID_AREA_COMUM' })
  ID_AREA_COMUM: AreaComum;
}
