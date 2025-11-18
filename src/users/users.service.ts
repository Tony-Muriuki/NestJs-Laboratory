//Users Service
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  users: {
    id: number;
    name: string;
    email: string;
    gender: string;
    isMarried: boolean;
    password: string;
  }[] = [
    {
      id: 1,
      name: 'John',
      email: 'john@gmail.com',
      gender: 'Male',
      isMarried: false,
      password: 'john1234',
    },
    {
      id: 2,
      name: 'Mark',
      email: 'mark@gmail.com',
      gender: 'Male',
      isMarried: true,
      password: 'mark2024',
    },
  ];

  //Returns all Users
  getAllUsers() {}

  //Create User
  createUser(user: {
    id: number;
    name: string;
    email: string;
    gender: string;
    isMarried: boolean;
    password: string;
  }) {
    return this.users.push(user);
  }
}
