/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
@Entity()
export class Dead {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'dead_id',
  })
  id: number;

  @Column({
    nullable: false,
    
  })
  firstname: string;

  @Column({
    nullable: false,
    
  })
  secondname: string;

  @Column({
    nullable: false,
    
  })
  lastname: string;

  @Column()
  dayBirth: number;

  @Column({
    nullable: false,
    
  }) 
  monthBirth: string;

  @Column({
    nullable: false,
  })
  yearBirth: number;
  
  @Column()    
  dayDeath: number;
  
  @Column({
    nullable: false,
    
  })    
  monthDeath: string;

  @Column({
    nullable: false,
  })
  yearDeath: number;

  @Column({
    nullable: false,
    
  })       
  placeBirth: string;

  @Column({
    nullable: false,
    
  })      
  placeDeath: string;

  @Column({
    nullable: false,

  })      
  bioMain: string;

  @Column({
    nullable: false,

  })      
  bioGeneral: string;

  @Column({
    nullable: false,

  })      
  epitaph: string;

  @Column({
    nullable: false,
    
  })       
  grounded: string;

  @Column({
    nullable: false,
    
  })      
  knownFor: string;   
}
