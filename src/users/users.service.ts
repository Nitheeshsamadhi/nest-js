export class userService {
  Users: { id: number;gender:string ,name: string; age: number; isMarried: boolean }[] = [
    {
      id: 1,
      name: 'nitheesh',
      gender:"male",
      age: 21,
      isMarried: false,
    },
    {
      id: 2,
      name: 'harish',
      gender:"male",
      age: 21,
      isMarried: true,
    },
    {
        id:3,
        name:"sri",
        gender:"female",
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
