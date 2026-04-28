import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Pessoa } from '../../pessoas/entities/pessoa.entity';
import { ContratoRH } from '../../contratos-rh/entities/contrato-rh.entity';

@Entity('FUNCIONARIOS')
export class Funcionario {
  @PrimaryGeneratedColumn({ name: 'ID_FUNCIONARIO' })
  ID_FUNCIONARIO: number;

  @ManyToOne(() => Pessoa, pessoa => pessoa.ID_FUNCIONARIOS)
  @JoinColumn({ name: 'ID_PESSOA' })
  ID_PESSOA: Pessoa;

  @Column({ name: 'funcao', type: 'varchar', length: 255 })
  FUNCAO: string;

  @Column({ name: 'data_admissao', type: 'date', nullable: true })
  DATA_ADMISSAO: Date;

  @Column({ name: 'salario', type: 'decimal', precision: 10, scale: 2, nullable: true })
  SALARIO: number;

  @OneToMany(() => ContratoRH, contratoRh => contratoRh.ID_FUNCIONARIO)
  ID_CONTRATOS: ContratoRH[];
  PESSOA: any;
}
