import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from 'src/profile/profile.entity';
// import { AuthModule } from 'src/auth/auth.module';

@Module({
  // imports: [forwardRef(() => AuthModule)], // 👈 handle circular reference
  imports: [TypeOrmModule.forFeature([User, Profile])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService], // 👈 make UserService available outside
})
export class UsersModule {}
