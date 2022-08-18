/* eslint-disable prettier/prettier */
import { IsDefined, IsEmail, IsNumber, IsString } from 'class-validator';

/* eslint-disable prettier/prettier */
export class UserDto {
  @IsEmail()
  @IsDefined()
  readonly email: string;
  @IsDefined()
  @IsString()
  readonly name: string;
  @IsDefined()
  @IsString()
  readonly state: string;
  @IsDefined()
  @IsString()
  readonly country: string;
  @IsDefined()
  @IsString()
  readonly role: string;
  @IsDefined()
  @IsString()
  readonly gender: string;
  @IsNumber()
  @IsString()
  readonly mobile_number: number;
  @IsDefined()
  @IsString()
  readonly address: string;

  readonly user_id: number;
}
