/* eslint-disable prettier/prettier */
import { Body, Controller, Put, Get, Param, Delete, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { DeadDto } from 'src/deads/dto/dead.dto';
import { DeadsService } from 'src/deads/services/dead.service';

@Controller('deads')
export class DeadsController {
  constructor(private readonly deadService: DeadsService) {}

  @Get()
  getDeads() {
    return this.deadService.getDeads();
  }

  @Get(':id')
  findDeadById(@Param('id', ParseIntPipe) id: number) {
    return this.deadService.findDeadById(id);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createPosts(@Body() createDeadDto: DeadDto) {
    return this.deadService.createDead(createDeadDto);
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


