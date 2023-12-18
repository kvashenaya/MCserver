/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/typeorm';
import { Repository } from 'typeorm';
import { ItemDto } from 'src/items/dto/item.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private readonly itemRepository: Repository<Item>,
  ) {}

  getItems() {
    return this.itemRepository.find();
  }

  async getItemsStructured() {
    const items = await this.itemRepository
      .createQueryBuilder('item')
      .select([
        'item.dead_id_item AS dead_id_item',
        'item.id AS id',
        'item.item_id AS item_id',
        'item.item_text AS item_text',
        'item.comment AS comment',
        'item.duration AS duration',
        'item.customer AS customer',
      ])
      .getRawMany();
  
    console.log('All Items:', items);
  
    const structuredResult: Record<string, { id: number; item_id: number; item_text: number; comment: string; duration: string; customer: string }[]> = {};
  
    items.forEach((item) => {
      const { dead_id_item, id, item_id, item_text, comment, duration, customer } = item;
      
      if (!structuredResult[dead_id_item]) {
        structuredResult[dead_id_item] = [];
      }
  
      structuredResult[dead_id_item].push({ id, item_id, item_text, comment, duration, customer });
    });
  
    console.log('Structured Result:', structuredResult);
  
    return structuredResult;
  }
  

  createItem(createItemDto: ItemDto) {
    const newItem = this.itemRepository.create(createItemDto);
    return this.itemRepository.save(newItem);
  }
  // async delete(id: number){
  //   const user = await this.deadRepository.findOne({where: {id}});
  //   if (!user) {
  //     throw new Error('User not found');
  //   }
  //   await this.deadRepository.remove(user);
  // }
//   async update(id: number, data: PostDto) {
//     const post = await this.data
//       .findByIdAndUpdate(id, data)
//       .setOptions({ overwrite: true, new: true })
//       .populate('author')
//       .populate('posttitle')
//       .populate('postcontent');
//     if (!post) {
//       throw new Error();
//     }
//     return post;
//   }
}