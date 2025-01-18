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
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const usuarios_entity_1 = require("./usuarios.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const rol_entity_1 = require("../roles/rol.entity");
const bcrypt = require("bcrypt");
let UsuariosService = class UsuariosService {
    constructor(usuarioRepository, rolRepository) {
        this.usuarioRepository = usuarioRepository;
        this.rolRepository = rolRepository;
    }
    async crearUsuario(data) {
        const salt = await bcrypt.genSalt(10);
        data.password = await bcrypt.hash(data.password, salt);
        const usuario = this.usuarioRepository.create(data);
        return this.usuarioRepository.save(usuario);
    }
    async obtenerUsuarios() {
        return this.usuarioRepository.find();
    }
    async obtenerUsuarioPorId(id) {
        return this.usuarioRepository.findOne({ where: { id } });
    }
    async actualizarUsuario(id, data) {
        await this.usuarioRepository.update(id, data);
        return this.obtenerUsuarioPorId(id);
    }
    async eliminarUsuario(id) {
        await this.usuarioRepository.delete(id);
    }
    async asignarRolesAUsuario(usuarioId, rolesIds) {
        const usuario = await this.usuarioRepository.findOne({
            where: { id: usuarioId },
            relations: ['roles'],
        });
        if (!usuario) {
            throw new Error('Usuario no encontrado');
        }
        const roles = await this.rolRepository.findByIds(rolesIds);
        usuario.roles = roles;
        return this.usuarioRepository.save(usuario);
    }
    async obtenerUsuarioPorEmail(email, relations = []) {
        return this.usuarioRepository.findOne({
            where: { email },
            relations,
        });
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuarios_entity_1.Usuario)),
    __param(1, (0, typeorm_1.InjectRepository)(rol_entity_1.Rol)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map