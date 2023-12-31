/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dead } from 'src/typeorm';

import { Repository } from 'typeorm';
import { DeadDto } from 'src/deads/dto/dead.dto';

@Injectable()
export class DeadsService {
  constructor(
    @InjectRepository(Dead) private readonly deadRepository: Repository<Dead>,
  ) {}

  createDead(createDeadDto: DeadDto) {
    const newDead = this.deadRepository.create(createDeadDto);
    return this.deadRepository.save(newDead);
  }

  getDeads() {
    return this.deadRepository.find();
  }

  findDeadById(id: number) {
    return this.deadRepository.findOne({where: {id}});
  }

  async getItemsByDeadId(id: number) {
    const groupedPeople = await this.deadRepository
    
  .createQueryBuilder('dead')
  .leftJoinAndSelect('dead.items', 'item')
  .select(['dead.id', 'item.dead_id_item', 'item.comment', 'item.duration', 'item.customer'])
  .getMany();
  console.log('Grouped People:', groupedPeople);

  const result = groupedPeople.filter((dead) => +dead.id === id); // Convert id to number

  console.log('Filtered Result:', result);

  return result.length > 0 ? result[0] : null;
    // const groupedObject = {};

    // groupedPeople.forEach((item) => {
    //   const deadIdItem = item.dead_id_item;
    
    //   if (!groupedObject[deadIdItem]) {
    //     groupedObject[deadIdItem] = [];
    //   }
    
    //   groupedObject[deadIdItem].push({
    //     id: item.id,
    //     dead_id_item: item.dead_id_item,
    //     comment: item.comment,
    //     duration: item.duration,
    //     customer: item.customer,
    //   });
    // });
    
    
      // const people = await this.deadRepository
      //   .createQueryBuilder('dead')
      //   .leftJoinAndSelect('dead.items', 'item')
      //   .getMany()
  
      // const dead = people.find(person => person.id === id);
      // return people
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