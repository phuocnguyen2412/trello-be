import { Module } from '@nestjs/common';
import { ColunmsService } from './colunms.service';
import { ColunmsController } from './colunms.controller';

@Module({
  controllers: [ColunmsController],
  providers: [ColunmsService],
})
export class ColunmsModule {}
