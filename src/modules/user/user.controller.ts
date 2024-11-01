import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('users')
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @ApiBearerAuth()
    @Get()
    findAll() {
        return this.userService.findAll();
    }
    @Post()
    @ApiCreatedResponse({
        description: 'User has been successfully created.',
        type: CreateUserDto,
    })
    createUser(@Body() user: CreateUserDto) {
        return this.userService.create(user);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(+id, updateUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userService.remove(+id);
    }
}
