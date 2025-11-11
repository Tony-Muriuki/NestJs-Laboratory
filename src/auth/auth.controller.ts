/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  login(email: string, password: string) {}
}
