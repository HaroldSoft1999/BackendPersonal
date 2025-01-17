import { Rol } from '../roles/rol.entity';
export declare class Usuario {
    id: number;
    nombre: string;
    email: string;
    password: string;
    activo: boolean;
    roles: Rol[];
}
