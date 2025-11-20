import {
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  IsOptional,
} from 'class-validator';

export class CreateProfileDto {
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
}
