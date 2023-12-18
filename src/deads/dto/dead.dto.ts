/* eslint-disable prettier/prettier */
import { IsNotEmpty, MinLength, IsNumber, IsOptional } from "class-validator";
export class DeadDto {

    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @MinLength(2)
    firstname: string;
        
    @MinLength(2)
    secondname: string;
    
    @IsNotEmpty()
    @MinLength(2) 
    lastname: string;
    
    dayBirth: number;
      
    @MinLength(3)
    monthBirth: string;

    @IsNotEmpty()
    yearBirth: number;
    
    dayDeath: number;
    
    monthDeath: string;

    @IsNotEmpty()
    yearDeath: number;

    placeBirth: string;
    placeDeath: string;

    @MinLength(5)
    bioMain: string;

    @MinLength(20)
    bioGeneral: string;

    @IsOptional()
    epitaph?: string;

    @IsOptional()
    grounded?: string;

    @IsOptional()
    knownFor?: string;   
    
}