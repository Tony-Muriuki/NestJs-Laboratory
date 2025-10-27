import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  users: {
    id: number;
    name: string;
    email: string;
    gender: string;
    isMarried: boolean;
  }[] = [
    {
      id: 1,
      name: 'John',
      email: 'john@gmail.com',
      gender: 'Male',
      isMarried: false,
    },
    {
      id: 2,
      name: 'Mark',
      email: 'mark@gmail.com',
      gender: 'Male',
      isMarried: true,
    },
    {
      id: 3,
      name: 'Alice',
      email: 'alice@gmail.com',
      gender: 'Female',
      isMarried: false,
    },
    {
      id: 4,
      name: 'Grace',
      email: 'grace@gmail.com',
      gender: 'Female',
      isMarried: true,
    },
    {
      id: 5,
      name: 'Daniel',
      email: 'daniel@gmail.com',
      gender: 'Male',
      isMarried: true,
    },
    {
      id: 6,
      name: 'Sophie',
      email: 'sophie@gmail.com',
      gender: 'Female',
      isMarried: false,
    },
    {
      id: 7,
      name: 'David',
      email: 'david@gmail.com',
      gender: 'Male',
      isMarried: true,
    },
    {
      id: 8,
      name: 'Emma',
      email: 'emma@gmail.com',
      gender: 'Female',
      isMarried: true,
    },
    {
      id: 9,
      name: 'Luke',
      email: 'luke@gmail.com',
      gender: 'Male',
      isMarried: false,
    },
    {
      id: 10,
      name: 'Olivia',
      email: 'olivia@gmail.com',
      gender: 'Female',
      isMarried: false,
    },
    {
      id: 11,
      name: 'Benjamin',
      email: 'benjamin@gmail.com',
      gender: 'Male',
      isMarried: true,
    },
    {
      id: 12,
      name: 'Chloe',
      email: 'chloe@gmail.com',
      gender: 'Female',
      isMarried: false,
    },
    {
      id: 13,
      name: 'Nathan',
      email: 'nathan@gmail.com',
      gender: 'Male',
      isMarried: true,
    },
    {
      id: 14,
      name: 'Hannah',
      email: 'hannah@gmail.com',
      gender: 'Female',
      isMarried: false,
    },
    {
      id: 15,
      name: 'Ethan',
      email: 'ethan@gmail.com',
      gender: 'Male',
      isMarried: true,
    },
    {
      id: 16,
      name: 'Isabella',
      email: 'isabella@gmail.com',
      gender: 'Female',
      isMarried: false,
    },
    {
      id: 17,
      name: 'Michael',
      email: 'michael@gmail.com',
      gender: 'Male',
      isMarried: true,
    },
    {
      id: 18,
      name: 'Lily',
      email: 'lily@gmail.com',
      gender: 'Female',
      isMarried: false,
    },
    {
      id: 19,
      name: 'Matthew',
      email: 'matthew@gmail.com',
      gender: 'Male',
      isMarried: true,
    },
    {
      id: 20,
      name: 'Sophia',
      email: 'sophia@gmail.com',
      gender: 'Female',
      isMarried: false,
    },
    {
      id: 21,
      name: 'James',
      email: 'james@gmail.com',
      gender: 'Male',
      isMarried: true,
    },
    {
      id: 22,
      name: 'Ella',
      email: 'ella@gmail.com',
      gender: 'Female',
      isMarried: false,
    },
    {
      id: 23,
      name: 'Henry',
      email: 'henry@gmail.com',
      gender: 'Male',
      isMarried: true,
    },
    {
      id: 24,
      name: 'Mia',
      email: 'mia@gmail.com',
      gender: 'Female',
      isMarried: true,
    },
    {
      id: 25,
      name: 'Samuel',
      email: 'samuel@gmail.com',
      gender: 'Male',
      isMarried: false,
    },
    {
      id: 26,
      name: 'Charlotte',
      email: 'charlotte@gmail.com',
      gender: 'Female',
      isMarried: false,
    },
    {
      id: 27,
      name: 'Logan',
      email: 'logan@gmail.com',
      gender: 'Male',
      isMarried: true,
    },
    {
      id: 28,
      name: 'Amelia',
      email: 'amelia@gmail.com',
      gender: 'Female',
      isMarried: true,
    },
    {
      id: 29,
      name: 'Jacob',
      email: 'jacob@gmail.com',
      gender: 'Male',
      isMarried: false,
    },
    {
      id: 30,
      name: 'Aria',
      email: 'aria@gmail.com',
      gender: 'Female',
      isMarried: false,
    },
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
    email: string;
    gender: string;
    isMarried: boolean;
  }) {
    return this.users.push(user);
  }
}
