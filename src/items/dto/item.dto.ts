/* eslint-disable prettier/prettier */
import { IsNotEmpty, MinLength, IsNumber, IsOptional, IsNumberString, Min} from "class-validator";
export class ItemDto {
    
    @IsNotEmpty({ message: 'id is required' })
    @Min(0, { message: 'id must be greater than or equal to 0' })
    id: number;

    
    @IsNotEmpty()
    dead_id_item: number;
    
   
    @IsNotEmpty()
    item_id: number;

    @IsNotEmpty()
    item_text: string;

    comment: string;
        
    @IsNotEmpty()
    @MinLength(1)
    duration: string;
    
    customer: string;
}