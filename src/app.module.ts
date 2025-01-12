import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importar TypeOrmModule
import { UsuariosModule } from './usuarios/usuarios.module';
import { RolesModule } from './roles/roles.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'DESKTOP-PMROK9D', // Servidor SQL
      port: 1433, // Puerto configurado
      username: 'sa', // Usuario de SQL Server
      password: 'root', // Contraseña de SQL Server
      database: 'backendpersonal', // Base de datos
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Entidades
      synchronize: true, // ¡Solo usar en desarrollo!
      logging: true, // Opcional: habilita logs para depuración
      options: {
        trustServerCertificate: true, // Confía en el certificado del servidor
      },
    }),
    UsuariosModule,
    RolesModule,
  ],
})
export class AppModule {}
