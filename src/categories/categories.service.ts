import { Injectable } from '@nestjs/common';
import { Category } from './category.interface';
import { ThreatsService } from 'src/threats/threats.service';

@Injectable()
export class CategoriesService {
  private readonly categories: Category[];

  constructor(private readonly threatsService: ThreatsService) {
    this.categories = [
      {
        id: 1,
        type: 'Network',
        notifications: this.threatsService.findForCategory(1).length,
      },
      {
        id: 2,
        type: 'Browsing',
        notifications: this.threatsService.findForCategory(2).length,
      },
    ];
  }

  findOne(id: number): Category | undefined {
    return this.categories.find((category) => category.id == id);
  }

  findAll(): Category[] {
    return this.categories;
  }
}
