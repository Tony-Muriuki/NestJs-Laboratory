import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsModule } from './tweets/tweets.module';
// import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TweetsModule, UsersModule], //Registering Other User Defined Modules
  controllers: [AppController], //Register Contollers
  providers: [AppService],
})
export class AppModule {}
