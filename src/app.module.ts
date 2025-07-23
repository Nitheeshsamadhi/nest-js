import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { TweetModule } from './tweet/tweet.module';
import { AuthModule } from './auth/auth.module';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [ConfigModule.forRoot({
      envFilePath:".env",
      isGlobal:true,
    }),
    MongooseModule.forRoot("mongodb://localhost:27017/nest-library"),
    
    BookModule,UsersModule, TweetModule, AuthModule, 
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
