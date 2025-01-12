import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuarios.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  // Crear un usuario
  @Post()
  async crearUsuario(@Body() data: Partial<Usuario>): Promise<Usuario> {
    return this.usuariosService.crearUsuario(data);
  }

  // Obtener todos los usuarios
  @Get()
  async obtenerUsuarios(): Promise<Usuario[]> {
    return this.usuariosService.obtenerUsuarios();
  }

  // Obtener un usuario por ID
  @Get(':id')
  async obtenerUsuarioPorId(@Param('id') id: number): Promise<Usuario> {
    return this.usuariosService.obtenerUsuarioPorId(id);
  }

  // Actualizar un usuario
  @Put(':id')
  async actualizarUsuario(
    @Param('id') id: number,
    @Body() data: Partial<Usuario>,
  ): Promise<Usuario> {
    return this.usuariosService.actualizarUsuario(id, data);
  }

  // Eliminar un usuario
  @Delete(':id')
  async eliminarUsuario(@Param('id') id: number): Promise<void> {
    return this.usuariosService.eliminarUsuario(id);
  }

  @Patch(':id/roles')
  async asignarRolesAUsuario(
    @Param('id') usuarioId: number,
    @Body('rolesIds') rolesIds: number[],
  ): Promise<Usuario> {
    return this.usuariosService.asignarRolesAUsuario(usuarioId, rolesIds);
  }
}
