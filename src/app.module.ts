/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';

// import { ProductModule } from './product/product.module';
//import { ProductModule } from './product/product.module';
import { StudentModule } from './studentmanagement/student.module';

import { BookCategoryModule } from './book/bookcategory.module';
import { EmployeeModule } from './employee/employee.module';

import { SubjectModule } from './studentmanagement/Subjects/subject.module';

import { FeedModule } from './feed/feed.module';
//import { EmployeeModule } from './employee/employee.module';
//import FeedPostEntity from './feed/models/post.entity';
//import { Address } from './feed/address/entities/address.entity';
// import { Role } from './feed/role/entities/role.entity';
// import { RoleController } from './role/role.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      // entities: [FeedPostEntity, Address],
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    StudentModule,
    BookModule,
    // ProductModule,
    FeedModule,
    EmployeeModule,
    BookCategoryModule,
    // ProductModule,
    FeedModule,
    FeedModule,
    EmployeeModule,
    SubjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
