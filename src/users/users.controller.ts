import { Controller,Get, Param, Post, Query } from '@nestjs/common';
import { userService } from './users.service';

@Controller('users')
export class UsersController {
    @Get()
    getuser(@Query() query:any){
        const user = new userService()
        
        if(query.gender){
            
            return user.getusers().filter(u => u.gender === query.gender)
        }
        return user.getusers();
    }
    @Get(':id/:name/:gender')
    getUserById(@Param('id') id:any){
        const user = new userService
        return user.getUserById(+id)

    }
    @Post()
    postuser(){
        return ' user created successfully'
    }
}
