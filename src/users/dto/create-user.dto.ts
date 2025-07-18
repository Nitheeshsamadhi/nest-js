import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "@nestjs/class-validator";

export class CreateUser {

    id:number;

    @IsString()
    @IsNotEmpty()
    name:string;

    @IsEmail()
    email:string;
    
    @IsBoolean()
    isMarried:boolean;

}