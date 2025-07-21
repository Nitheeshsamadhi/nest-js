import { Injectable,Inject, forwardRef } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class UserService {
  Users: {
    id: number;
    email: string;
    gender: string;
    name: string;
    age: number;
    isMarried: boolean;
    password:string;
  }[] = [
    {
      id: 1,
      name: 'nitheesh',
      email: "nitheesh@example.com",
      age: 21,
      isMarried: false,
      gender: 'male',
      password:"test123"
    },
    {
      id: 2,
      name: 'harish',
      email: "harish@example.com",
      age: 21,
      isMarried: true,
      gender: 'male',
      password:"test123"
    },
    {
      id: 3,
      name: "sri",
      email: "sri@example.com",
      age: 21,
      isMarried: false,
      gender: 'female',
      password:"test123"
    },
  ];
  constructor(@Inject(forwardRef(()=>AuthService)) private readonly AuthService : AuthService) {}

  getUsers() {

    if(this.AuthService.isAuthenticated){
       return this.Users;
    }
    return "please login" 
    
    
  }


  getUserById(id: number) {
    return this.Users.find(k => k.id === id); 
  }
}
