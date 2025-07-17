export class userService {
  Users: { id: number; name: string; age: number; isMarried: boolean }[] = [
    {
      id: 1,
      name: 'nitheesh',
      age: 21,
      isMarried: false,
    },
    {
      id: 2,
      name: 'harish',
      age: 21,
      isMarried: true,
    },
  ];

  getusers(){
    return this.Users
  }

  getUserById (id:number){
    return this.Users.find(user => user.id == id)
  }
  
}
