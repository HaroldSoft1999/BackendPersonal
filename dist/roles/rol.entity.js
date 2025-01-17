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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rol = void 0;
const typeorm_1 = require("typeorm");
const usuarios_entity_1 = require("../usuarios/usuarios.entity");
const permiso_entity_1 = require("./permiso.entity");
let Rol = class Rol {
};
exports.Rol = Rol;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Rol.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Rol.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => usuarios_entity_1.Usuario, (usuario) => usuario.roles),
    __metadata("design:type", Array)
], Rol.prototype, "usuarios", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => permiso_entity_1.Permiso, (permiso) => permiso.roles),
    (0, typeorm_1.JoinTable)({
        name: 'rol_permisos',
        joinColumn: { name: 'rol_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'permiso_id', referencedColumnName: 'id' },
    }),
    __metadata("design:type", Array)
], Rol.prototype, "permisos", void 0);
exports.Rol = Rol = __decorate([
    (0, typeorm_1.Entity)()
], Rol);
//# sourceMappingURL=rol.entity.js.map