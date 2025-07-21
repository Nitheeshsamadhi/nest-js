import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly AuthServie:AuthService) {}
    
    @Post()
    auth(@Body() user:{email:string,password:string}){
        return this.AuthServie.userAuth(user.email,user.password);
    }

}
