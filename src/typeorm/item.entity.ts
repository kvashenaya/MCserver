/* eslint-disable prettier/prettier */
import { ManyToOne, JoinColumn, Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Dead } from './dead.entity';

@Entity()
export class Item {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({
    nullable: false,
  })
  dead_id_item: number;

  @Column({
    nullable: false,
  })
  item_id: number;

  @Column({
    nullable: false,
  })
  item_text: string;

  @Column()
  comment: string;


  @Column({
    nullable: false,
  })
  duration: string;

  @Column()
  customer: string;

  // @ManyToOne(() => Dead, dead => dead.items)
  // dead: Dead;
}
