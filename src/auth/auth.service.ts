import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  isAuthenticated: boolean = false;

  login(email: string, pswd: string) {
    const user = this.userService.users.find(
      (u) => u.email === email && u.password === pswd,
    );
    if (user) {
      this.isAuthenticated = true;
      return 'MY_TOKEN';
    }
    return 'User Does Not Exist';
  }
}
