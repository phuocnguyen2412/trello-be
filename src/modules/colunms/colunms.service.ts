import { Injectable } from '@nestjs/common';
import { CreateColunmDto } from './dto/create-colunm.dto';
import { UpdateColunmDto } from './dto/update-colunm.dto';

@Injectable()
export class ColunmsService {
  create(createColunmDto: CreateColunmDto) {
    return 'This action adds a new colunm';
  }

  findAll() {
    return `This action returns all colunms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} colunm`;
  }

  update(id: number, updateColunmDto: UpdateColunmDto) {
    return `This action updates a #${id} colunm`;
  }

  remove(id: number) {
    return `This action removes a #${id} colunm`;
  }
}
