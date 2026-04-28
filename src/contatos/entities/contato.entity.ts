import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Pessoa } from '../../pessoas/entities/pessoa.entity';

@Entity('CONTATOS')
export class Contato {
  @PrimaryGeneratedColumn({ name: 'ID_CONTATO' })
  ID_CONTATO: number;

  @Column({ name: 'tipo_contato', type: 'varchar', length: 255 })
  TIPO_CONTATO: string;

  @Column({ name: 'valor_contato', type: 'varchar', length: 255 })
  VALOR_CONTATO: string;

  @ManyToOne(() => Pessoa, pessoa => pessoa.CONTATOS)
  @JoinColumn({ name: 'ID_PESSOA' })
  ID_PESSOA: Pessoa;
  PESSOA: any;
}
