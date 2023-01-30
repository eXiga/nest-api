import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { Category } from './category.interface';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  findAll(): Category[] {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Category {
    const category = this.categoriesService.findOne(id);
    if (category === undefined) {
      throw new NotFoundException('Category with this id does not exist');
    }

    return category;
  }
}
