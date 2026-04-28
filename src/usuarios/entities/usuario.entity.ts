import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('USUARIOS') // Coloque em maiúsculo para bater com seu SQL
export class Usuario {
  
  @PrimaryGeneratedColumn({ name: 'ID_USUARIO' }) // A PK real do banco
  ID_USUARIO: number;

  @Column({ name: 'ID_PESSOA' }) // ID_PESSOA é apenas uma coluna comum/FK
  ID_PESSOA: number;

  @Column({ name: 'NOME' })
  NOME: string;

  @Column({ name: 'CPF_CNPJ', unique: true })
  CPF_CNPJ: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'ATIVO', default: 1 })
  ATIVO: number;
}