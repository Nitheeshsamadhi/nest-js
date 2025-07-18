import { Body, Controller,DefaultValuePipe,Get, Param, ParseIntPipe, Post, Query, ValidationPipe } from '@nestjs/common';
import { userService } from './users.service';
import { CreateUser } from './dto/create-user.dto';

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

    @Get()
    getUserById(@Query('limit',  new DefaultValuePipe(10),ParseIntPipe) limit:number ,
               @Query ('page',new DefaultValuePipe(1), ParseIntPipe) page:number )
                
    {
        console.log(limit , page)
        const user = new userService()
        
        return user.getUserById

    }

    @Post()
    postuser(@Body(new ValidationPipe()) body:CreateUser){
        return ' user created successfully'
    }
}
