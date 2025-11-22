//Users Service
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { Profile } from 'src/profile/profile.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  //Returns all Users
  getAllUsers() {
    return this.userRepository.find();
  }

  //Create User
  public async createUser(userDto: CreateUserDto) {
    //Create A Profile & Save
    userDto.profile = userDto.profile ?? {};
    const profile = this.profileRepository.create(userDto.profile);
    await this.profileRepository.save(profile);
    //Create User Object
    //Set The Profile
    //Save The User Object
  }
}
