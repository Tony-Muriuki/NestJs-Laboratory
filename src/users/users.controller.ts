import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  //Get Request--> https://localhost:3000/users
  @Get()
  getUsers() {
    const usersService = new UsersService();
    usersService.getAllUsers(); //Without Dependency Injection(DI)
  }

  // Create User
  @Post()
  createUser() {
    return 'New User Created';
  }
}
