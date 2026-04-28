import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('COMUNICADOS')
export class Comunicado {
  @PrimaryGeneratedColumn({ name: 'ID_COMUNICADO' })
  ID_COMUNICADO: number;

  @Column({ name: 'TITULO', type: 'varchar', length: 255 })
  TITULO: string;

  @Column({ name: 'MENSAGEM', type: 'text' })
  MENSAGEM: string;

  @Column({ name: 'DT_COMUNICADO', type: 'date' })
  DT_COMUNICADO: Date;

  @Column({ name: 'HR_COMUNICADO', type: 'time', nullable: true })
  HR_COMUNICADO: string;

  @Column({ name: 'TIPO', type: 'varchar', length: 30, nullable: true })
  TIPO: string;
}
