import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Morador } from '../../moradores/entities/morador.entity';
import { Visita } from '../../visitas/entities/visita.entity';

@Entity('UNIDADES')
export class Unidade {
  @PrimaryGeneratedColumn({ name: 'ID_UNIDADE' })
  ID_UNIDADE: number;

  @Column({ name: 'NUM_UNIDADE', type: 'int' })
  NUM_UNIDADE: number;

  @Column({ name: 'BLOCO', type: 'int' })
  BLOCO: number;

  @Column({ name: 'TIPO', type: 'varchar', length: 255 })
  TIPO: string;

  @Column({ name: 'AREA_TOTAL', type: 'float', nullable: true })
  AREA_TOTAL: number;

  @OneToMany(() => Morador, morador => morador.unidade)
  ID_MORADORES: Morador[];

  @OneToMany(() => Visita, visita => visita.ID_MORADOR)
  ID_VISITAS: Visita[];
}
