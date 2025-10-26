import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  //Get Request--> https://localhost:3000/users
  @Get()
  getUsers(@Query() query: any) {
    const usersService = new UsersService();
    if (query.gender) {
      return usersService
        .getAllUsers()
        .filter((u) => u.gender === query.gender);
    }

    return usersService.getAllUsers(); //Without Dependency Injection(DI)
  }

  @Get(':id')
  getUserById(@Param('id') id: any) {
    console.log('Route Param:', id);
    const usersService = new UsersService();
    return usersService.getUserById(+id);
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
