import { Controller, Get, Post } from "@nestjs/common";

@Controller('users')
export class UserController{
    @Get()
    getUsers(){
        return 'you made a get method to get users';
    }

    @Post()
    createUsers(){
        return 'you made post url to post data'
    }
}
