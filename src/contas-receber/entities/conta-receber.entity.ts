import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Morador } from '../../moradores/entities/morador.entity';
import { Recebimento } from '../../recebimentos/entities/recebimento.entity';

@Entity('CONTAS_RECEBER')
export class ContaReceber {
  @PrimaryGeneratedColumn({ name: 'ID_CONTA_RECEBER' })
  ID_CONTA_RECEBER: number;

  @ManyToOne(() => Morador, morador => morador.ID_CONTA_RECEBER)
  @JoinColumn({ name: 'ID_MORADOR' })
  ID_MORADOR: Morador;

  @Column({ name: 'DESCRICAO', type: 'text', nullable: true })
  DESCRICAO: string;

  @Column({ name: 'VALOR', type: 'decimal', precision: 10, scale: 2, nullable: true })
  VALOR: number;

  @Column({ name: 'DATA_VENCIMENTO', type: 'date', nullable: true })
  DATA_VENCIMENTO: Date;

  @Column({ 
    name: 'STATUS', 
    type: 'enum', 
    enum: ['PAGO', 'PENDENTE', 'ATRASADO', 'EXPIRADO'], 
    nullable: true 
  })
  STATUS: string;

  @OneToMany(() => Recebimento, recebimento => recebimento.ID_CONTA_RECEBER)
  ID_RECEBIMENTO: Recebimento[]; 
}
