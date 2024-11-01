import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthEntity } from './entities/auth.entity';
import { UserService } from 'src/modules/user/user.service';
import { UserModule } from 'src/modules/user/user.module';
import { UserEntity } from 'src/modules/user/entities/user.entity';

@Module({
    imports: [TypeOrmModule.forFeature([AuthEntity, UserEntity]), UserModule],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [AuthService],
})
export class AuthModule {}
