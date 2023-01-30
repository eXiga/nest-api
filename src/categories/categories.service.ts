import { Injectable } from '@nestjs/common';
import { Category } from './category.interface';

@Injectable()
export class CategoriesService {
  private readonly categories: Category[] = [
    { id: 1, type: 'Network', notifications: 420 },
    { id: 2, type: 'Browsing', notifications: 69 },
  ];

  findOne(id: number): Category | undefined {
    return this.categories.find((category) => category.id == id);
  }

  findAll(): Category[] {
    return this.categories;
  }
}
