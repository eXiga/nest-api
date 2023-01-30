import { Test, TestingModule } from '@nestjs/testing';
import { Category } from './category.interface';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { NotFoundException } from '@nestjs/common';

describe('CategoriesController', () => {
  let controller: CategoriesController;
  let service: CategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesController],
      providers: [CategoriesService],
    }).compile();

    controller = module.get<CategoriesController>(CategoriesController);
    service = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('root/findAll', () => {
    it('should return list of categories', () => {
      const result: Category[] = [
        { id: 69, type: 'Network', notifications: 420 },
      ];
      jest.spyOn(service, 'findAll').mockImplementation(() => result);

      expect(controller.findAll()).toBe(result);
    });
  });

  describe(':id', () => {
    it('should return valid category if exists', () => {
      const result: Category = { id: 69, type: 'Network', notifications: 420 };
      jest.spyOn(service, 'findOne').mockImplementation(() => result);

      expect(controller.findOne(69)).toBe(result);
    });

    it('should return 404 if category does not exist', () => {
      const spy = jest
        .spyOn(service, 'findOne')
        .mockImplementation((_) => undefined);

      expect(() => {
        controller.findOne(420);
      }).toThrow(new NotFoundException('Category with this id does not exist'));
      expect(spy).toHaveBeenCalledWith(420);
    });
  });
});
