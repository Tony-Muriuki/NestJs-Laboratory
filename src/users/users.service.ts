//Users Service
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  //Returns all Users
  getAllUsers() {
    return this.userRepository.find();
  }

  //Create User
  public async createUser(userDto: CreateUserDto) {
    //Validate if a user exists with a given email(if exists do not insert)
    const user = await this.userRepository.findOne({
      where: { email: userDto.email },
    });
    //Handle the error or exception
    if (user) {
      return 'The user with the given email already exists';
    }
    //If no user found with the same email Create User
    let newUser = this.userRepository.create(userDto);
    newUser = await this.userRepository.save(newUser);
    return newUser;
  }
}
