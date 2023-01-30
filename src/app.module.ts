import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { CategoriesModule } from './categories/categories.module';
import { XRequestIdGuard } from './common/guards/xrid.guard';

@Module({
  imports: [CategoriesModule],
  providers: [{ provide: APP_GUARD, useClass: XRequestIdGuard }],
})
export class AppModule {}
