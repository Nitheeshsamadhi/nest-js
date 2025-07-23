import { IsString } from "@nestjs/class-validator";
import { IsEnum, IsNotEmpty, IsNumber } from "class-validator";

enum category {
    action="action",
    drama = "drama",
    comic="comic",
    fantasy="fantasy"
}

export class CreateBookDto {
    @IsString({message:"Book name must be a string"})
    @IsNotEmpty({message:"Book name should not empty"})
    title:string;

    @IsString()
    author:string;

    @IsNumber()
    price:number;

    @IsEnum(category,{message:"category must be classic, drama, fantasy,comic"})
    category:string;
}