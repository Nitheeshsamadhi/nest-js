import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { TweetModule } from './tweet/tweet.module';


@Module({
  imports: [UsersModule, TweetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
