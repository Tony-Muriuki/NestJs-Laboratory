import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsModule } from './tweets/tweets.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TweetsModule, UsersModule, AuthModule, TypeOrmModule.forRoot()], //Registering Other User Defined Modules
  controllers: [AppController], //Register Contollers
  providers: [AppService],
})
export class AppModule {}
