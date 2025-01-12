import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Rol } from '../roles/rol.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  activo: boolean;

  @ManyToMany(() => Rol, (rol) => rol.usuarios)
  @JoinTable() // Relación con tabla intermedia para Usuario y Rol
  roles: Rol[];
}