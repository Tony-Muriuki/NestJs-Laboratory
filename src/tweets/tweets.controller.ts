import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TweetsService } from './tweets.service';

@Controller('tweets')
export class TweetsController {
  constructor(private tweetsService: TweetsService) {}

  @Get(':userid') // https://localhost:3000/tweets/101
  public GetTweets(@Param('userid', ParseIntPipe) userid?: number) {
    console.log(userid);
  }
}
