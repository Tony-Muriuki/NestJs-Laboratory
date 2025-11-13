import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  IsOptional,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Invalid.First Name should be string' }) //This validators can also take an error message or thedefault built-in  message will be displayed
  @IsString()
  @MinLength(3, { message: 'Name should have a minimum of Three charcters' })
  @MaxLength(100)
  firstName: string;

  @IsNotEmpty({ message: 'Invalid. Last Name should be string' }) //This validators can also take an error message or thedefault built-in  message will be displayed
  @IsString()
  @MinLength(3, { message: 'Name should have a minimum of Three charcters' })
  lastName: string;

  @IsString()
  @IsOptional()
  gender: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8, {
    message: 'Password should have a minimum of Eight charcters',
  })
  password: string;
}
