import {
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  //Get Request--> https://localhost:3000/users
  @Get()
  getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    const usersService = new UsersService();
    console.log(limit, page);
    return usersService.getAllUsers(); //Without Dependency Injection(DI)
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const usersService = new UsersService();
    return usersService.getUserById(id);
  }
  // Create User
  @Post()
  createUser() {
    const userService = new UsersService(); //Instantiating Manually
    const user = {
      id: 3,
      name: 'Mary',
      email: 'mary@gmail.com',
      gender: 'Female',
      isMarried: false,
    };
    userService.createUser(user);
    return 'New User Created!!!!';
  }
}
