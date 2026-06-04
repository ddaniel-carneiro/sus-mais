import { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    export interface AuthUser {
      id: number,
      ability: string,
      iat?: number,
      exp?: number
    }

    export interface Request {
      user?: AuthUser
    }
  }
}

