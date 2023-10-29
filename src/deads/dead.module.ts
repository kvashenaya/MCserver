/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DeadsController } from './controllers/dead.controller';
import { DeadsService } from './services/dead.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dead } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Dead])],
  controllers: [DeadsController],
  providers: [DeadsService]
})
export class DeadsModule {}