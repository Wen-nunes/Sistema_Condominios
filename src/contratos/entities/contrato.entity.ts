import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Fornecedor } from '../../fornecedores/entities/fornecedor.entity';

@Entity('CONTRATOS')
export class Contrato {
  @PrimaryGeneratedColumn({ name: 'ID_CONTRATO' })
  ID_CONTRATO: number;

  @ManyToOne(() => Fornecedor, fornecedor => fornecedor.CONTRATOS)
  @JoinColumn({ name: 'ID_FORNECEDOR' })
  ID_FORNECEDOR: Fornecedor;

  @Column({ name: 'DESCRICAO', type: 'text', nullable: true })
  DESCRICAO: string;

  @Column({ name: 'DATA_INICIO', type: 'date', nullable: true })
  DATA_INICIO: Date;

  @Column({ name: 'DATA_FIM', type: 'date', nullable: true })
  DATA_FIM: Date;

  @Column({ name: 'VALOR', type: 'decimal', precision: 10, scale: 2, nullable: true })
  VALOR: number;
}
