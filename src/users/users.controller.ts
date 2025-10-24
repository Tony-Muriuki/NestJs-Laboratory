import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  //Get Request--> https://localhost:3000/users
  @Get()
  getUsers() {
    return 'You made a GET REQUEST';
  }

  // Create User
  @Post()
  createUser() {
    return 'New User Created';
  }
}
