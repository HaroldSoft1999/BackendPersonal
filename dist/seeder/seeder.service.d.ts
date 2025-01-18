import { Repository } from 'typeorm';
import { Usuario } from '../usuarios/usuarios.entity';
import { Rol } from '../roles/rol.entity';
import { Permiso } from '../permisos/permiso.entity';
export declare class SeederService {
    private readonly usuarioRepository;
    private readonly rolRepository;
    private readonly permisoRepository;
    constructor(usuarioRepository: Repository<Usuario>, rolRepository: Repository<Rol>, permisoRepository: Repository<Permiso>);
    seed(): Promise<void>;
}
