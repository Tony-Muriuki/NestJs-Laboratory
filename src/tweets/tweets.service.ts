//Tweets Service
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TweetsService {
  constructor(private readonly userService: UsersService) {}

  //Methods

  //Get All Tweets
  getAllTweets() {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getTweets(userId: number) {}
}
