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
  @MaxLength(100, {
    message: 'First Name should have a maximum of hundred charcters',
  })
  firstName: string;

  @IsNotEmpty({ message: 'Invalid. Last Name should be string' }) //This validators can also take an error message or thedefault built-in  message will be displayed
  @IsString()
  @MinLength(3, { message: 'Name should have a minimum of Three charcters' })
  @MaxLength(100, {
    message: 'Last Name should have a maximum of hundred charcters',
  })
  lastName: string;

  @IsString()
  @IsOptional()
  @MaxLength(10, { message: 'Gender should have a maximum of Ten characters' })
  gender: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(100, { message: 'Email should have a maximum of 100 characters' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100, {
    message: 'Password should have a maximum of 100 characters',
  })
  @MinLength(8, {
    message: 'Password should have a minimum of Eight charcters',
  })
  password: string;
}
