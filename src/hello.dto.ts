import { IsDefined, IsEmail } from 'class-validator';

export class HelloDto {
  @IsDefined()
  @IsEmail()
  email: string;
}
