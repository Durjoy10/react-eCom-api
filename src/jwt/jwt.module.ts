import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from '../config/jwt.config';

@Global()
@Module({
    imports: [JwtModule.register(jwtConfig)],
    exports: [JwtModule],
})
export class JwtGlobalModule { } 