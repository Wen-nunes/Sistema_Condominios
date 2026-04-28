import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ContaPagar } from '../../contas-pagar/entities/conta-pagar.entity';

@Entity('pagamentos')
export class Pagamento {
  @PrimaryGeneratedColumn({ name: 'ID_PAGAMENTO' })
  ID_PAGAMENTO: number;

  @ManyToOne(() => ContaPagar, contaPagar => contaPagar.ID_CONTA_PAGAR)
  @JoinColumn({ name: 'ID_CONTA_PAGAR' })
  ID_CONTA_PAGAR: ContaPagar;

  @Column({ name: 'ID_DATA_PAGAMENTO', type: 'date', nullable: true })
  ID_DATA_PAGAMENTO: Date;

  @Column({ name: 'ID_VALOR_PAGO', type: 'decimal', precision: 10, scale: 2, nullable: true })
  ID_VALOR_PAGO: number;

  @Column({ name: 'ID_FORMA_PAGAMENTO', type: 'varchar', length: 30, nullable: true })
  ID_FORMA_PAGAMENTO: string;
}
