import { PartialType } from '@nestjs/mapped-types';
import { CreateBookCategoryDto } from './create-bookcategory.dto';

export class UpdateBookcategoryDto extends PartialType(CreateBookCategoryDto) {
  book_id?: number;
  book_author:string;
  book_category:string;
}