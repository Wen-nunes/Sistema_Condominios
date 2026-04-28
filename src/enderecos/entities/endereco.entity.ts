import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Pessoa } from '../../pessoas/entities/pessoa.entity';

@Entity('ENDERECOS')
export class Endereco {
  @PrimaryGeneratedColumn({ name: 'ID_ENDERECO' })
  ID_ENDERECO: number;

  @ManyToOne(() => Pessoa, pessoa => pessoa.ID_ENDERECOS)
  @JoinColumn({ name: 'ID_PESSOA' })
  ID_PESSOA: Pessoa;

  @Column({ name: 'logradouro', type: 'varchar', length: 255 })
  LOGRADOURO: string;

  @Column({ name: 'numero', type: 'int' })
  NUMERO: number;

  @Column({ name: 'bairro', type: 'varchar', length: 255 })
  BAIRRO: string;

  @Column({ name: 'cidade', type: 'varchar', length: 255 })
  CIDADE: string;

  @Column({ name: 'uf', type: 'char', length: 2 })
  UF: string;

  @Column({ name: 'cep', type: 'char', length: 8 })
  CEP: string;
  PESSOA: any;
}
