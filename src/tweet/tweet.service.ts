import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';

@Injectable()
export class TweetService {

    constructor(private readonly userService:UserService){}

    tweet : {text:string; date:Date;id:number}[]=[

   {
      text: 'tweet 1',
      date: new Date('2025-07-22'), 
      id:1
    },
    {
        text:'tweet 2',
        date : new Date('25-07-25'),
        id:2
    },
    {
        text:'tweet 3',
        date : new Date('23-07-25'),
        id:3
    }
      
    ]


   getTweet(id: number) {
  const tweet = this.tweet.filter(k => k.id === id);
  const user = this.userService.getUserById(id);

  if (!user) {
    throw new Error('User not found');
  }

  const response = tweet.map(k => ({
    text: k.text,
    date: k.date,
    name: user.name,
  }));

  return response;
}

}
