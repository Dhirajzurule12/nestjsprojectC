/* eslint-disable prettier/prettier */
import { Module, Post } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedController } from './controllers/feed.controller';

import FeedPostEntity from './models/post.entity';

import { FeedService } from './services/feed.service';
import { AddressModule } from './address/address.module';
import { Address } from './address/entities/address.entity';
import { Role } from './role/entities/role.entity';
import { RoleModule } from './role/role.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([FeedPostEntity, Role, Address]),
    MulterModule.register({ dest: './uploads' }),
    AddressModule,

    RoleModule,

    // PostModule,
  ],
  providers: [FeedService],
  controllers: [FeedController],
})
export class FeedModule {}
