import { Repository } from 'typeorm';
import { Permiso } from './permiso.entity';
export declare class PermisosService {
    private readonly permisoRepository;
    constructor(permisoRepository: Repository<Permiso>);
    crearPermiso(nombre: string): Promise<Permiso>;
    obtenerPermisos(): Promise<Permiso[]>;
    obtenerPermisoPorId(id: number): Promise<Permiso>;
    actualizarPermiso(id: number, nombre: string): Promise<Permiso>;
    eliminarPermiso(id: number): Promise<void>;
}
