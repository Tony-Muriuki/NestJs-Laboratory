import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TweetsService } from './tweets.service';

@Controller('tweets')
export class TweetsController {
  constructor(private tweetsService: TweetsService) {}

  //Get all Tweets
  getAllTweets() {
    return this.tweetsService.getAllTweets();
  }

  @Get(':userid') // https://localhost:3000/tweets/101 This get route should get all the tweets which this userid has made.
  public GetTweets(@Param('userId', ParseIntPipe) userId: number) {
    console.log(userId);
    return this.tweetsService.getTweets(userId);
  }
}
