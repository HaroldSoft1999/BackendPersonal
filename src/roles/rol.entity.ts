import { Entity, PrimaryGeneratedColumn, Column,ManyToMany, JoinTable  } from 'typeorm';
import { Usuario } from '../usuarios/usuarios.entity';
import { Permiso } from './permiso.entity';


@Entity()
export class Rol {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nombre: string;

  @ManyToMany(() => Usuario, (usuario) => usuario.roles)
  usuarios: Usuario[];

  @ManyToMany(() => Permiso, (permiso) => permiso.roles)
  @JoinTable() // Tabla intermedia para Rol y Permiso
  permisos: Permiso[];
}