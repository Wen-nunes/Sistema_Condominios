import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Pessoa } from '../../pessoas/entities/pessoa.entity';
import { Visita } from '../../visitas/entities/visita.entity';

@Entity('VISITANTES')
export class Visitante {
  @PrimaryGeneratedColumn({ name: 'ID_VISITANTE' })
  ID_VISITANTE: number;

  @ManyToOne(() => Pessoa, pessoa => pessoa.ID_VISITANTES)
  @JoinColumn({ name: 'id_pessoa' })
  PESSOA: Pessoa;

  @Column({ name: 'documento', type: 'varchar', length: 255, nullable: true })
  DOCUMENTO: string;

  @OneToMany(() => Visita, visita => visita.ID_MORADOR_AUTORIZACAO)
  VISITAS: Visita[];
}
