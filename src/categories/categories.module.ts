import { Module } from '@nestjs/common';
import { ThreatsModule } from 'src/threats/threats.module';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [ThreatsModule],
})
export class CategoriesModule {}
