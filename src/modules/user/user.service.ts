import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { log } from 'console';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {}
    async create(data: CreateUserDto) {
        log(1231231);
        const findExistUser = this.findByEmail(data.email);

        if (findExistUser) throw new ConflictException('Email already exist');

        return this.userRepository.create(data);
    }

    findAll() {
        return `This action returns all user`;
    }
    findByEmail(email: string) {
        return this.userRepository.findOneBy({ email });
    }
    findOne(id: number) {
        return `This action returns a #${id} user`;
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}
