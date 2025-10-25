import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  //Get Request--> https://localhost:3000/users
  @Get()
  getUsers() {
    const usersService = new UsersService();
    return usersService.getAllUsers(); //Without Dependency Injection(DI)
  }

  // Create User
  @Post()
  createUser() {
    const userService = new UsersService(); //Instantiating Manually
    const user = {
      id: 3,
      name: 'Mary',
      age: 23,
      gender: 'Female',
      isMarried: false,
    };
    userService.createUser(user);
    return 'New User Created!!!!';
  }
}
