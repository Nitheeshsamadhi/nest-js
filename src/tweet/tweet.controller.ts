import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TweetService } from './tweet.service';

@Controller('tweet')
export class TweetController {
    constructor (private TweetService:TweetService){}

    @Get(':id')
    getTweet(@Param('id' ,ParseIntPipe) id:number){
        return this.TweetService.getTweet(id);
    }


}
