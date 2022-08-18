/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './studentmanagement/student.module';
import { BookModule } from './book/book.module';
import { ProductModule } from './product/product.module';

<<<<<<< HEAD
import { FeedModule } from './feed/feed.module';
import { EmployeeModule } from './employee/employee.module';
=======

import { FeedModule } from './feed/feed.module';
import { EmployeeModule } from './employee/employee.module';

>>>>>>> 28e95345824a1bd80ecad999a1c27786d6d7a4bb
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      
    }),
    StudentModule,
    BookModule,
    ProductModule,
<<<<<<< HEAD
 
=======
 ],
>>>>>>> 28e95345824a1bd80ecad999a1c27786d6d7a4bb
    FeedModule,
    EmployeeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
