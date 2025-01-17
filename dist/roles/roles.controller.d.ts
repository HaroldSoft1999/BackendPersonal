import { RolesService } from './roles.service';
import { Rol } from './rol.entity';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    crearRol(nombre: string): Promise<Rol>;
    obtenerRoles(): Promise<Rol[]>;
    obtenerRolPorId(id: number): Promise<Rol>;
    actualizarRol(id: number, nombre: string): Promise<Rol>;
    eliminarRol(id: number): Promise<void>;
    asignarPermisosARol(rolId: number, permisosIds: number[]): Promise<Rol>;
}
