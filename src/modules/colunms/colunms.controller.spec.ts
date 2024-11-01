import { Test, TestingModule } from '@nestjs/testing';
import { ColunmsController } from './colunms.controller';
import { ColunmsService } from './colunms.service';

describe('ColunmsController', () => {
  let controller: ColunmsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColunmsController],
      providers: [ColunmsService],
    }).compile();

    controller = module.get<ColunmsController>(ColunmsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
