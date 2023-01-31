import { Module } from '@nestjs/common';
import { ThreatsService } from 'src/threats/threats.service';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, ThreatsService],
})
export class CategoriesModule {}
