import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Query,
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
  findThreats(
    @Param('id', ParseIntPipe) id: number,
    @Query('page') qPage: number,
    @Query('pageSize') qPageSize: number,
  ): Threat[] {
    const category = this.categoriesService.findOne(id);
    if (category === undefined) {
      throw new NotFoundException(`Category with id: ${id} does not exist`);
    }

    const page = qPage == undefined ? 1 : qPage;
    const pageSize = qPageSize == undefined ? 20 : qPageSize;

    return this.threatsService.findForCategoryPaginated(
      category.id,
      page,
      pageSize,
    );
  }
}
