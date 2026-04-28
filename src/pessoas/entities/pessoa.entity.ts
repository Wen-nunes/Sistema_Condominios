import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Morador } from '../../moradores/entities/morador.entity';
import { Contato } from '../../contatos/entities/contato.entity';
import { Endereco } from '../../enderecos/entities/endereco.entity';
import { Funcionario } from '../../funcionarios/entities/funcionario.entity';
import { Fornecedor } from '../../fornecedores/entities/fornecedor.entity';
import { Visitante } from '../../visitantes/entities/visitante.entity';

@Entity('PESSOAS')
export class Pessoa {
  @PrimaryGeneratedColumn({ name: 'ID_PESSOA' })
  ID_PESSOA: number;

  @Column({ name: 'NOME', type: 'varchar', length: 255 })
  NOME: string;

  @Column({ name: 'TIPO_PESSOA', type: 'varchar', length: 255 })
  TIPO_PESSOA: string;

  @Column({ name: 'CPF_CNPJ', type: 'varchar', length: 14 })
  CPF_CNPJ: string;

  @Column({ name: 'DATA_CADASTRO', type: 'date', nullable: true })
  DATA_CADASTRO: Date;

  @OneToMany(() => Morador, morador => morador.PESSOA)
  ID_MORADORES: Morador[];

  @OneToMany(() => Contato, contato => contato.PESSOA)
  ID_CONTATOS: Contato[];

  @OneToMany(() => Endereco, endereco => endereco.PESSOA)
  ID_ENDERECOS: Endereco[];

  @OneToMany(() => Funcionario, funcionario => funcionario.PESSOA)
  ID_FUNCIONARIOS: Funcionario[];

  @OneToMany(() => Fornecedor, fornecedor => fornecedor.PESSOA)
  ID_FORNECEDORES: Fornecedor[];

  @OneToMany(() => Visitante, visitante => visitante.PESSOA)
  ID_VISITANTES: Visitante[];
  CONTATOS: any;
}
