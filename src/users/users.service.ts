import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  Users: { id: number;email:string ;gender:string; name: string; age: number; isMarried: boolean }[] = [
    {
      id: 1,
      name: 'nitheesh',
      email:"male",
      age: 21,
      isMarried: false,
      gender:'male'
    },
    {
      id: 2,
      name: 'harish',
      email:"male",
      age: 21,
      isMarried: true,
      gender:'male'
    },
    {
        id:3,
        name:"sri",
        email:"female",
        age:21,
        isMarried:false,
        gender:'female'
    }
  ];

  getusers(){
    return this.Users
  }

  getUserById (){
    return this.Users;
  }
  
}
