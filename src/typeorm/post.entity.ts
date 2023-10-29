/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
@Entity()
export class Post {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'post_id',
  })
  id: number;

  @Column({
    nullable: false,
  })
  firstname: string;

  @Column({
    nullable: false,
  })
  lastname: string;

  @Column({
    nullable: false,
  })
  email: string;

  @Column()
  telephone: string;
}
