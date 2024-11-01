import { PartialType } from '@nestjs/swagger';
import { CreateColunmDto } from './create-colunm.dto';

export class UpdateColunmDto extends PartialType(CreateColunmDto) {}
