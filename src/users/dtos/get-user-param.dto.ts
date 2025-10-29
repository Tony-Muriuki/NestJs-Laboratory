import { IsBoolean } from 'class-validator';

export class GetUserParamDto {
  @IsBoolean()
  isMarried: boolean;
}
