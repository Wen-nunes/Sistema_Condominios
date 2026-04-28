import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { MovContaCorrente } from '../../mov-conta-corrente/entities/mov-conta-corrente.entity';

@Entity('CONTA_CORRENTE')
export class ContaCorrente {
  @PrimaryGeneratedColumn({ name: 'ID_CONTA_CORRENTE' })
  ID_CONTA_CORRENTE: number;

  @Column({ name: 'banco', type: 'varchar', length: 50, nullable: true })
  BANCO: string;

  @Column({ name: 'agencia', type: 'varchar', length: 20, nullable: true })
  AGENCIA: string;

  @Column({ name: 'num_conta', type: 'varchar', length: 20, nullable: true })
  NUM_CONTA: string;

  @Column({ name: 'saldo_atual', type: 'decimal', precision: 12, scale: 2, nullable: true })
  SALDO_ATUAL: number;

  @OneToMany(() => MovContaCorrente, movContaCorrente => movContaCorrente.ID_MOVIMENTO)
  ID_MOVIMENTO: MovContaCorrente[];
}
