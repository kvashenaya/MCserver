/* eslint-disable prettier/prettier */
import { IsNotEmpty, MinLength } from "class-validator";
//import { CommentDto } from './comment.dto';
export class PostDto {
    @IsNotEmpty()
    @MinLength(1)
    firstname: string;

    
    @IsNotEmpty()
    @MinLength(1)
    lastname: string;

    @IsNotEmpty()
    email: string;

    telephone: string;
}