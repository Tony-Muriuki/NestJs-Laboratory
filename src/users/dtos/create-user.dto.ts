/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  id: number;
  @IsNotEmpty({ message: 'Invalid.Name should be string' }) //This validators can also take an error message or thedefault built-in  message will be displayed
  @IsString()
  @MinLength(3, { message: 'Name should have a minimum of Three charcters' })
  name: string;
  @IsEmail()
  email: string;
  @IsString()
  @IsOptional()
  gender: string;
  isMarried: boolean;
}
