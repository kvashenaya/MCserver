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