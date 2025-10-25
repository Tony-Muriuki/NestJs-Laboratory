import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  users: {
    id: number;
    name: string;
    age: number;
    gender: string;
    isMarried: boolean;
  }[] = [
    { id: 1, name: 'John', age: 28, gender: 'Male', isMarried: false },
    { id: 2, name: 'Mark', age: 32, gender: 'Male', isMarried: true },
  ];

  //Returns all Users
  getAllUsers() {
    return this.users;
  }
  //Returns user based on Id :.find(...)
}
