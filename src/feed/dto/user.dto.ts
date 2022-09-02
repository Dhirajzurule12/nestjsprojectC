/* eslint-disable prettier/prettier */
// import { IsDefined, IsEmail, IsNumber, IsString } from 'class-validator';

import { IsDefined, IsEmail, IsNumber, IsString } from 'class-validator';
import { Address } from '../address/entities/address.entity';

import { Role } from '../role/entities/role.entity';

/* eslint-disable prettier/prettier */
export class UserDto {
  @IsEmail()
  @IsDefined()
  email: string;

  @IsDefined()
  @IsString()
  name: string;

  address: Address;

  @IsDefined()
  @IsString()
  gender: string; //used

  @IsNumber()
  mobile_number: number; //used

  user_id: number;
}
