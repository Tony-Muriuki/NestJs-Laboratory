/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class createUserDto {
  id: number;
  @IsString()
  name: string;
  @IsString()
  @IsOptional()
  gender?: string;
  @IsString()
  @IsEmail()
  email: string;
  isMarried: boolean;
}
