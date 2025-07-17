import { Controller,Get, Param, Post } from '@nestjs/common';
import { userService } from './users.service';

@Controller('users')
export class UsersController {
    @Get()
    getuser(){
        const user = new userService
        return user.getusers();
    }
    @Get(':id')
    getUserById(@Param('id') id:any){
        const user = new userService
        return user.getUserById(+id)

    }
    @Post()
    postuser(){
        return ' user created successfully'
    }
}
