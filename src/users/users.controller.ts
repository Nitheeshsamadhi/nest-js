import { Body, Controller,DefaultValuePipe,Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUser } from './dto/create-user.dto';
import { UpdateUser } from './dto/update-user.dto';


@Controller('users')
export class UsersController {

    constructor(private user:UserService){}
    // @Get()
    // getuser(@Query() query:any){
        
        
    //     if(query.gender){
            
    //         return this.user.getusers().filter(u => u.gender === query.gender)
    //     }
    //     return this.user.getusers();
    // }

    @Get(':Id')
    getUserById(@Param('id', ParseIntPipe) Id:number)
                
    {
       
        
        
        return this.user.getUserById(Id);

    }

    @Post()
    postuser(@Body() user:CreateUser,
           
){
       
        return user;
    }
    @Patch()
    updateuser(@Body() user:UpdateUser){
        console.log(user)
        return "user updated successfully"
    }


    
}
