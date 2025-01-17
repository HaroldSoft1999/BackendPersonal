import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'super-secret-key', // Cambia esto por tu clave secreta real
      passReqToCallback: true, // Habilitar para pasar la solicitud
    });
  }

  async validate(payload: any) {
    return { id: payload.id, email: payload.email }; // Retornar los datos validados del usuario
  }
}
