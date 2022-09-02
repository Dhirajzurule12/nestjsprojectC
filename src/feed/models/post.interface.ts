/* eslint-disable prettier/prettier */

import { Address } from '../address/entities/address.entity';
import { Role } from '../role/entities/role.entity';

// import { IsNumber } from "class-validator";

export interface FeedPost {
  user_id?: number;
  name?: string;
  gender?: string;
  address: Address; //working one
  mobile_number?: number;
  email: string;
}
