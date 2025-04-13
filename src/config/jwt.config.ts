import { JwtModuleOptions } from '@nestjs/jwt';

export const jwtConfig: JwtModuleOptions = {
    secret: 'your-secret-key', // In production, use environment variable
    signOptions: { expiresIn: '1d' },
}; 