import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsModule } from './tweets/tweets.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './users/user.entity';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    TweetsModule,
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true, // Makes the config available everywhere
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres', // Database type — tells TypeORM to use PostgreSQL
        host: configService.get<string>('DB_HOST'), // Hostname or IP where PostgreSQL runs (usually 'localhost')
        port: configService.get<number>('DB_PORT'), // Port PostgreSQL listens on (default: 5432)
        username: configService.get<string>('DB_USERNAME'), // Database username (e.g., 'nestjs' or custom user)
        password: configService.get<string>('DB_PASSWORD'), // Password for the database user
        database: configService.get<string>('DB_NAME'), // Name of the database to connect to
        entities: [User], // List of entities (tables) managed by TypeORM — here we include the User entity
        synchronize: true, // Automatically sync entities with the DB — great for dev, but disable in production
      }),
    }),
    ProfileModule,
  ], //Registering Other User Defined Modules
  controllers: [AppController], //Register Contollers
  providers: [AppService],
})
export class AppModule {}
