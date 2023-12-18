/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ItemsController } from './controllers/item.controller';
import { ItemsService } from './services/item.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  controllers: [ItemsController],
  providers: [ItemsService]
})
export class ItemsModule {}