import { BadRequestException, Injectable } from '@nestjs/common';

import { CreateUserDto } from 'src/modules/user/dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UserService } from 'src/modules/user/user.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthEntity } from './entities/auth.entity';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        @InjectRepository(AuthEntity)
        private readonly authRepository: Repository<AuthEntity>,
    ) {}
    register(data: CreateUserDto) {
        return this.userService.create(data);
    }
    async login(data: LoginUserDto) {
        const user = await this.userService.findByEmail(data.email);
        if (!user) throw new BadRequestException('User not found!');
    }
}
