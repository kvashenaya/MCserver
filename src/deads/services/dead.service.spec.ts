/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { DeadsService } from './dead.service';

describe('DeadsService', () => {
  let service: DeadsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeadsService],
    }).compile();

    service = module.get<DeadsService>(DeadsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});