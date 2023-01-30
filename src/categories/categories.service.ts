import { Injectable } from '@nestjs/common';
import { Category } from './category.interface';
import { random } from '@utils/random';

@Injectable()
export class CategoriesService {
  private readonly categories: Category[];

  constructor() {
    this.categories = [
      { id: 1, type: 'Network', notifications: random(0, 69) },
      { id: 2, type: 'Browsing', notifications: random(69, 420) },
    ];
  }

  findOne(id: number): Category | undefined {
    return this.categories.find((category) => category.id == id);
  }

  findAll(): Category[] {
    return this.categories;
  }
}
