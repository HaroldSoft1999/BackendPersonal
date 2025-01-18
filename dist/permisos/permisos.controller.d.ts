import { PermisosService } from './permisos.service';
export declare class PermisosController {
    private readonly permisosService;
    constructor(permisosService: PermisosService);
    crearPermiso(nombre: string): Promise<import("./permiso.entity").Permiso>;
    obtenerPermisos(): Promise<import("./permiso.entity").Permiso[]>;
    obtenerPermisoPorId(id: number): Promise<import("./permiso.entity").Permiso>;
    actualizarPermiso(id: number, nombre: string): Promise<import("./permiso.entity").Permiso>;
    eliminarPermiso(id: number): Promise<void>;
}
