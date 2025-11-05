import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TweetsService } from './tweets.service';

@Controller('tweets')
export class TweetsController {
  constructor(private tweetsService: TweetsService) {}

  @Get(':userid') // https://localhost:3000/tweets/101 This get route should get all the tweets which this userid has made.
  public GetTweets(@Param('userid', ParseIntPipe) userid?: number) {
    console.log(userid);
  }
}
