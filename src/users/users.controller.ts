import { Controller,Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
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

    @Get(':id')
    getUserById(@Param ('id', ParseIntPipe) id:number){
        const user = new userService()
        console.log(id)
        return user.getUserById(id)

    }

    @Post()
    postuser(){
        return ' user created successfully'
    }
}
