import { IsString, MaxLength, MinLength } from 'class-validator';

export class AuthCredtentialDTO {
  @IsString()
  @MaxLength(20)
  @MinLength(8)
  username: string;

  @IsString()
  @MaxLength(20)
  @MinLength(8)
  password: string;
}
