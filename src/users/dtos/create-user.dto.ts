/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class createUserDto {
  id: number;
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;
  @IsString()
  @IsOptional()
  gender?: string;
  @IsString()
  @IsEmail()
  email: string;
  isMarried: boolean;
}
