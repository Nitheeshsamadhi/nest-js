import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(@Inject(forwardRef(()=>UserService))  private readonly UserService:UserService){}

    isAuthenticated:boolean = false;
    
    userAuth(email:string,password:string) {
        const login = this.UserService.Users.find(u=> u.email === email && u.password === password)
        if(login){
            this.isAuthenticated = true
            return "login success";
        }
        return "does not exists";
    }

}
