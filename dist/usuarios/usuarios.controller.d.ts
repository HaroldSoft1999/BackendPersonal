import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuarios.entity';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    crearUsuario(data: Partial<Usuario>): Promise<Usuario>;
    obtenerUsuarios(): Promise<Usuario[]>;
    obtenerUsuarioPorId(id: number): Promise<Usuario>;
    actualizarUsuario(id: number, data: Partial<Usuario>): Promise<Usuario>;
    eliminarUsuario(id: number): Promise<void>;
    asignarRolesAUsuario(usuarioId: number, rolesIds: number[]): Promise<Usuario>;
}
