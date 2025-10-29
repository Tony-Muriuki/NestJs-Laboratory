import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  //Get Request--> https://localhost:3000/users
  @Get(':isMarried')
  getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(limit, page);
    return this.usersService.getAllUsers(); //Without Dependency Injection(DI)
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUserById(id);
  }
  // Create User
  @Post()
  createUser(@Body() user: CreateUserDto) {
    // this.usersService.createUser(user);
    console.log(typeof user, user);
    console.log(user instanceof CreateUserDto);
    return 'A new user Has Been Created';
  }
}
