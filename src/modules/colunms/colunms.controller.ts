import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColunmsService } from './colunms.service';
import { CreateColunmDto } from './dto/create-colunm.dto';
import { UpdateColunmDto } from './dto/update-colunm.dto';

@Controller('colunms')
export class ColunmsController {
  constructor(private readonly colunmsService: ColunmsService) {}

  @Post()
  create(@Body() createColunmDto: CreateColunmDto) {
    return this.colunmsService.create(createColunmDto);
  }

  @Get()
  findAll() {
    return this.colunmsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.colunmsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateColunmDto: UpdateColunmDto) {
    return this.colunmsService.update(+id, updateColunmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.colunmsService.remove(+id);
  }
}
