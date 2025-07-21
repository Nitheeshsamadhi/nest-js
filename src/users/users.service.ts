import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  Users: {
    id: number;
    email: string;
    gender: string;
    name: string;
    age: number;
    isMarried: boolean;
  }[] = [
    {
      id: 1,
      name: 'nitheesh',
      email: "nitheesh@example.com",
      age: 21,
      isMarried: false,
      gender: 'male',
    },
    {
      id: 2,
      name: 'harish',
      email: "harish@example.com",
      age: 21,
      isMarried: true,
      gender: 'male',
    },
    {
      id: 3,
      name: "sri",
      email: "sri@example.com",
      age: 21,
      isMarried: false,
      gender: 'female',
    },
  ];

  getUsers() {
    return this.Users;
  }

  getUserById(id: number) {
    return this.Users.find(k => k.id === id); 
  }
}
