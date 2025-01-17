import { Usuario } from './usuarios.entity';
import { Repository } from 'typeorm';
import { Rol } from '../roles/rol.entity';
export declare class UsuariosService {
    private readonly usuarioRepository;
    private readonly rolRepository;
    constructor(usuarioRepository: Repository<Usuario>, rolRepository: Repository<Rol>);
    crearUsuario(data: Partial<Usuario>): Promise<Usuario>;
    obtenerUsuarios(): Promise<Usuario[]>;
    obtenerUsuarioPorId(id: number): Promise<Usuario>;
    actualizarUsuario(id: number, data: Partial<Usuario>): Promise<Usuario>;
    eliminarUsuario(id: number): Promise<void>;
    asignarRolesAUsuario(usuarioId: number, rolesIds: number[]): Promise<Usuario>;
    obtenerUsuarioPorEmail(email: string): Promise<Usuario>;
}
