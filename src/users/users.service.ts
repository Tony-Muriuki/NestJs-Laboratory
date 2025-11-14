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
    {
      id: 3,
      name: 'Alice',
      email: 'alice@gmail.com',
      gender: 'Female',
      isMarried: false,
      password: 'alice!pass',
    },
    {
      id: 4,
      name: 'Grace',
      email: 'grace@gmail.com',
      gender: 'Female',
      isMarried: true,
      password: 'grace789',
    },
    {
      id: 5,
      name: 'Daniel',
      email: 'daniel@gmail.com',
      gender: 'Male',
      isMarried: true,
      password: 'daniel321',
    },
    {
      id: 6,
      name: 'Sophie',
      email: 'sophie@gmail.com',
      gender: 'Female',
      isMarried: false,
      password: 'sophie@12',
    },
    {
      id: 7,
      name: 'David',
      email: 'david@gmail.com',
      gender: 'Male',
      isMarried: true,
      password: 'david007',
    },
  ];

  //Returns all Users
  getAllUsers() {
    if (this.authService.isAuthenticated) {
      return this.users;
    }
    return 'YOU ARE NOT LOGGED IN';
  }
  //Returns user based on Id :.find(...)
  // .find() is a JavaScript array method that goes through each element in the array one by one, and returns the first element that matches a given condition (the “test”).
  getUserById(id: number) {
    return this.users.find((x) => x.id === id);
  }

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
