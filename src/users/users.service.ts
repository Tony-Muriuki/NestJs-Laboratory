//Users Service
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor() {}
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
  createUser() {}
}
