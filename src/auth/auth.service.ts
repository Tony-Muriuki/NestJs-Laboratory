import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  login(email: string, pswd: string) {
    const user = this.userService.users.find(
      (u) => u.email === email && u.password === pswd,
    );
    if (user) {
      return 'MY_TOKEN';
    }
    return 'User Does Not Exist';
  }
}
