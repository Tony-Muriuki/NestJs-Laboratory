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
    {
      id: 8,
      name: 'Emma',
      email: 'emma@gmail.com',
      gender: 'Female',
      isMarried: true,
      password: 'emma#2025',
    },
    {
      id: 9,
      name: 'Luke',
      email: 'luke@gmail.com',
      gender: 'Male',
      isMarried: false,
      password: 'luke4321',
    },
    {
      id: 10,
      name: 'Olivia',
      email: 'olivia@gmail.com',
      gender: 'Female',
      isMarried: false,
      password: 'olivia22',
    },
    {
      id: 11,
      name: 'Benjamin',
      email: 'benjamin@gmail.com',
      gender: 'Male',
      isMarried: true,
      password: 'ben@jam1n',
    },
    {
      id: 12,
      name: 'Chloe',
      email: 'chloe@gmail.com',
      gender: 'Female',
      isMarried: false,
      password: 'chloe!pw',
    },
    {
      id: 13,
      name: 'Nathan',
      email: 'nathan@gmail.com',
      gender: 'Male',
      isMarried: true,
      password: 'nathan@89',
    },
    {
      id: 14,
      name: 'Hannah',
      email: 'hannah@gmail.com',
      gender: 'Female',
      isMarried: false,
      password: 'han_2025',
    },
    {
      id: 15,
      name: 'Ethan',
      email: 'ethan@gmail.com',
      gender: 'Male',
      isMarried: true,
      password: 'ethan999',
    },
    {
      id: 16,
      name: 'Isabella',
      email: 'isabella@gmail.com',
      gender: 'Female',
      isMarried: false,
      password: 'isabella*01',
    },
    {
      id: 17,
      name: 'Michael',
      email: 'michael@gmail.com',
      gender: 'Male',
      isMarried: true,
      password: 'mike@777',
    },
    {
      id: 18,
      name: 'Lily',
      email: 'lily@gmail.com',
      gender: 'Female',
      isMarried: false,
      password: 'lily_love',
    },
    {
      id: 19,
      name: 'Matthew',
      email: 'matthew@gmail.com',
      gender: 'Male',
      isMarried: true,
      password: 'matthew!23',
    },
    {
      id: 20,
      name: 'Sophia',
      email: 'sophia@gmail.com',
      gender: 'Female',
      isMarried: false,
      password: 'sophia123',
    },
    {
      id: 21,
      name: 'James',
      email: 'james@gmail.com',
      gender: 'Male',
      isMarried: true,
      password: 'james_007',
    },
    {
      id: 22,
      name: 'Ella',
      email: 'ella@gmail.com',
      gender: 'Female',
      isMarried: false,
      password: 'ella@pw',
    },
    {
      id: 23,
      name: 'Henry',
      email: 'henry@gmail.com',
      gender: 'Male',
      isMarried: true,
      password: 'henry@king',
    },
    {
      id: 24,
      name: 'Mia',
      email: 'mia@gmail.com',
      gender: 'Female',
      isMarried: true,
      password: 'mia@2024',
    },
    {
      id: 25,
      name: 'Samuel',
      email: 'samuel@gmail.com',
      gender: 'Male',
      isMarried: false,
      password: 'sam!rule',
    },
    {
      id: 26,
      name: 'Charlotte',
      email: 'charlotte@gmail.com',
      gender: 'Female',
      isMarried: false,
      password: 'char123',
    },
    {
      id: 27,
      name: 'Logan',
      email: 'logan@gmail.com',
      gender: 'Male',
      isMarried: true,
      password: 'logan#pw',
    },
    {
      id: 28,
      name: 'Amelia',
      email: 'amelia@gmail.com',
      gender: 'Female',
      isMarried: true,
      password: 'amelia*22',
    },
    {
      id: 29,
      name: 'Jacob',
      email: 'jacob@gmail.com',
      gender: 'Male',
      isMarried: false,
      password: 'jacob_88',
    },
    {
      id: 30,
      name: 'Aria',
      email: 'aria@gmail.com',
      gender: 'Female',
      isMarried: false,
      password: 'aria@123',
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
