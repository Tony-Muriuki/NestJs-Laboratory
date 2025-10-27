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
    { id: 3, name: 'Alice', age: 25, gender: 'Female', isMarried: false },
    { id: 4, name: 'Grace', age: 29, gender: 'Female', isMarried: true },
    { id: 5, name: 'Daniel', age: 35, gender: 'Male', isMarried: true },
    { id: 6, name: 'Sophie', age: 22, gender: 'Female', isMarried: false },
    { id: 7, name: 'David', age: 40, gender: 'Male', isMarried: true },
    { id: 8, name: 'Emma', age: 30, gender: 'Female', isMarried: true },
    { id: 9, name: 'Luke', age: 27, gender: 'Male', isMarried: false },
    { id: 10, name: 'Olivia', age: 26, gender: 'Female', isMarried: false },
    { id: 11, name: 'Benjamin', age: 33, gender: 'Male', isMarried: true },
    { id: 12, name: 'Chloe', age: 24, gender: 'Female', isMarried: false },
    { id: 13, name: 'Nathan', age: 31, gender: 'Male', isMarried: true },
    { id: 14, name: 'Hannah', age: 23, gender: 'Female', isMarried: false },
    { id: 15, name: 'Ethan', age: 38, gender: 'Male', isMarried: true },
    { id: 16, name: 'Isabella', age: 28, gender: 'Female', isMarried: false },
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

  //Create User
  createUser(user: {
    id: number;
    name: string;
    age: number;
    gender: string;
    isMarried: boolean;
  }) {
    return this.users.push(user);
  }
}
