import { Rol } from './rol.entity';
import { Repository } from 'typeorm';
import { Permiso } from './permiso.entity';
export declare class RolesService {
    private readonly rolRepository;
    private readonly permisoRepository;
    constructor(rolRepository: Repository<Rol>, permisoRepository: Repository<Permiso>);
    crearRol(nombre: string): Promise<Rol>;
    obtenerRoles(): Promise<Rol[]>;
    obtenerRolPorId(id: number): Promise<Rol>;
    actualizarRol(id: number, nombre: string): Promise<Rol>;
    eliminarRol(id: number): Promise<void>;
    asignarPermisosARol(rolId: number, permisosIds: number[]): Promise<Rol>;
}
