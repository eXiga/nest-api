import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { Category } from './category.interface';
import { CategoriesService } from './categories.service';
import { ThreatsService } from 'src/threats/threats.service';
import { Threat } from 'src/threats/threat.interface';

@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly threatsService: ThreatsService,
  ) {}

  @Get()
  findAll(): Category[] {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Category {
    const category = this.categoriesService.findOne(id);
    if (category === undefined) {
      throw new NotFoundException(`Category with id: ${id}  does not exist`);
    }

    return category;
  }

  @Get(':id/threats')
  findThreats(@Param('id', ParseIntPipe) id: number): Threat[] {
    const category = this.categoriesService.findOne(id);
    if (category === undefined) {
      throw new NotFoundException(`Category with id: ${id} does not exist`);
    }

    return this.threatsService.findForCategory(category.id);
  }
}
