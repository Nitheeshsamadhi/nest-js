import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString } from "@nestjs/class-validator";

export class CreateUser {
    @IsNumber()
    id:number;

    @IsString({message:'should be a string'})
    @IsNotEmpty()
    name:string;

    @IsEmail()
    email:string;

    @IsString()
    gender?:string;
    
    @IsBoolean()
    isMarried:boolean;

    @IsNumber()
    age:number;

}