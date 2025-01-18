"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeederService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const usuarios_entity_1 = require("../usuarios/usuarios.entity");
const rol_entity_1 = require("../roles/rol.entity");
const bcrypt = require("bcrypt");
const permiso_entity_1 = require("../permisos/permiso.entity");
let SeederService = class SeederService {
    constructor(usuarioRepository, rolRepository, permisoRepository) {
        this.usuarioRepository = usuarioRepository;
        this.rolRepository = rolRepository;
        this.permisoRepository = permisoRepository;
    }
    async seed() {
        const permisosNombres = ['Crear', 'ListarTodo', 'Editar', 'Eliminar', 'ObtenerById'];
        const permisos = [];
        for (const nombre of permisosNombres) {
            let permiso = await this.permisoRepository.findOneBy({ nombre });
            if (!permiso) {
                permiso = this.permisoRepository.create({ nombre });
                permiso = await this.permisoRepository.save(permiso);
            }
            permisos.push(permiso);
        }
        const rolesConfig = [
            { nombre: 'SuperAdmin', permisos: permisos },
            { nombre: 'Admin', permisos: permisos.filter((p) => p.nombre !== 'Eliminar' && p.nombre !== 'ObtenerById') },
            { nombre: 'Usuario', permisos: permisos.filter((p) => p.nombre === 'ObtenerById') },
        ];
        const roles = [];
        for (const { nombre, permisos: rolPermisos } of rolesConfig) {
            let rol = await this.rolRepository.findOne({
                where: { nombre },
                relations: ['permisos'],
            });
            if (!rol) {
                rol = this.rolRepository.create({ nombre, permisos: rolPermisos });
                rol = await this.rolRepository.save(rol);
            }
            else {
                rol.permisos = rolPermisos;
                rol = await this.rolRepository.save(rol);
            }
            roles.push(rol);
        }
        const usuariosConfig = [
            {
                nombre: 'superadmin',
                email: 'superadmin@superadmin.com',
                password: '123456789',
                roles: [roles.find((r) => r.nombre === 'SuperAdmin')],
            },
            {
                nombre: 'admin',
                email: 'admin@admin.com',
                password: '123456789',
                roles: [roles.find((r) => r.nombre === 'Admin')],
            },
            {
                nombre: 'usuario',
                email: 'usuario@usuario.com',
                password: '123456789',
                roles: [roles.find((r) => r.nombre === 'Usuario')],
            },
        ];
        for (const { nombre, email, password, roles: usuarioRoles } of usuariosConfig) {
            let usuario = await this.usuarioRepository.findOneBy({ email });
            if (!usuario) {
                const hashedPassword = await bcrypt.hash(password, 10);
                usuario = this.usuarioRepository.create({
                    nombre,
                    email,
                    password: hashedPassword,
                    roles: usuarioRoles,
                });
                await this.usuarioRepository.save(usuario);
            }
        }
        console.log('Datos iniciales cargados correctamente.');
    }
};
exports.SeederService = SeederService;
exports.SeederService = SeederService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuarios_entity_1.Usuario)),
    __param(1, (0, typeorm_1.InjectRepository)(rol_entity_1.Rol)),
    __param(2, (0, typeorm_1.InjectRepository)(permiso_entity_1.Permiso)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], SeederService);
//# sourceMappingURL=seeder.service.js.map