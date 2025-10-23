// A Module is mothing but a Typescript class

import { Module } from '@nestjs/common';
import { TweetsModule } from './tweets/tweets.module';

@Module({
  imports: [TweetsModule],
})
export class UserModule {}
