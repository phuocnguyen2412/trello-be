import { Test, TestingModule } from '@nestjs/testing';
import { ColunmsService } from './colunms.service';

describe('ColunmsService', () => {
  let service: ColunmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColunmsService],
    }).compile();

    service = module.get<ColunmsService>(ColunmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
