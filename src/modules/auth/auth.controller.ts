import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @Post('login')
    async login(@Body() body: LoginUserDto, res: Response) {
        const data = await this.authService.login(body);
        return data;
    }
    @Post('register')
    async register(@Body() body: CreateUserDto) {
        const data = await this.authService.register(body);
        return data;
    }
}
