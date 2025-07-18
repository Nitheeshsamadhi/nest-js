export class userService {
  Users: { id: number;email:string ,name: string; age: number; isMarried: boolean }[] = [
    {
      id: 1,
      name: 'nitheesh',
      email:"male",
      age: 21,
      isMarried: false,
    },
    {
      id: 2,
      name: 'harish',
      email:"male",
      age: 21,
      isMarried: true,
    },
    {
        id:3,
        name:"sri",
        email:"female",
        age:21,
        isMarried:false
    }
  ];

  getusers(){
    return this.Users
  }

  getUserById (){
    return this.Users;
  }
  
}
