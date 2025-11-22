//User DTO(Data Transfer Object)
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  IsOptional,
} from 'class-validator';
import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(100, { message: 'Email should have a maximum of 100 characters' })
  email: string;

  @IsNotEmpty()
  @MaxLength(24, {
    message: 'UserName should have a maximum of 24 characters',
  })
  username: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100, {
    message: 'Password should have a maximum of 100 characters',
  })
  @MinLength(8, {
    message: 'Password should have a minimum of Eight charcters',
  })
  password: string;
  @IsOptional()
  profile: CreateProfileDto | null;
}
