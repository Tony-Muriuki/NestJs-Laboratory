/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString } from 'class-validator';

export class createUserDto {
  id: number;
  @IsString()
  name: string;
  @IsString()
  gender: string;
  @IsString()
  email: string;
  isMarried: boolean;
}
