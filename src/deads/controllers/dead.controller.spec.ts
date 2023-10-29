import { Test, TestingModule } from '@nestjs/testing';
import { DeadsController } from './dead.controller';

describe('DeadController', () => {
  let controller: DeadsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeadsController],
    }).compile();

    controller = module.get<DeadsController>(DeadsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
