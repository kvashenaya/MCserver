/* eslint-disable prettier/prettier */
import { Body, Controller, Put, Get, Param, Delete, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ItemDto } from 'src/items/dto/item.dto';
import { ItemsService } from 'src/items/services/item.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get()
  getItems() {
    return this.itemService.getItems();
  }

  @Get('struct')
  getItemsStructured() {
    return this.itemService.getItemsStructured();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createItems(@Body() createItemDto: ItemDto) {
    return this.itemService.createItem(createItemDto);
  }

  // @Delete('delete/:id')
  //  remove(@Param('id') id: number) {
  //   return this.deadService.delete(id);
  // }

  // @Put('update/:id')
  // async updateUser(@Param('id') id: number, @Body() body: { author: string, posttitle: string, postcontent: string }): Promise<void> {
  //   await this.deadService.updateUser(id, body.author, body.posttitle, body.postcontent);
  // }

}


