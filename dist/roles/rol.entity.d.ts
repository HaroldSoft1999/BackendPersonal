import { Usuario } from '../usuarios/usuarios.entity';
import { Permiso } from '../permisos/permiso.entity';
export declare class Rol {
    id: number;
    nombre: string;
    usuarios: Usuario[];
    permisos: Permiso[];
}
