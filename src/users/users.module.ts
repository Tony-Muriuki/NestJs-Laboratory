import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [forwardRef(() => AuthModule)], // 👈 handle circular reference
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService], // 👈 make UserService available outside
})
export class UsersModule {}
