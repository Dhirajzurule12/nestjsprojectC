/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import FeedPostEntity from '../models/post.entity';
import { Role } from './entities/role.entity';
import { Address } from '../address/entities/address.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from '../address/address.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([FeedPostEntity, Role, Address]),

    AddressModule,
  ],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
