import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { AdminRole } from '../schemas/admin.schema';

@Injectable()
export class AdminAuthGuard implements CanActivate {
    constructor(
        private jwtService: JwtService,
        private configService: ConfigService,
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new UnauthorizedException('Authentication token not found');
        }
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: this.configService.get<string>('JWT_SECRET'),
            });

            // Verify that this is an admin user
            if (!payload.role || (payload.role !== AdminRole.ADMIN && payload.role !== AdminRole.SUPER_ADMIN)) {
                throw new UnauthorizedException('Not authorized as admin');
            }

            request['user'] = payload;
        } catch (error) {
            throw new UnauthorizedException('Invalid authentication token');
        }
        return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
} 