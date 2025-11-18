import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,
  ) {}

  isAuthenticated: boolean = false;

  //Login Method
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login(email: string, pswd: string) {}
}
