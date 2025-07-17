import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
   postHello():string{
    return 'hello nitheesh from post';
  }
  
  getHello(): string {
    return 'Hello Nitheesh!';
  }
 
}
