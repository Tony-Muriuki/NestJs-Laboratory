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
  // .find() is a JavaScript array method that goes through each element in the array one by one, and returns the first element that matches a given condition (the “test”).
  getUserById(id: number) {
    return this.users.find((x) => x.id === id);
  }
}
