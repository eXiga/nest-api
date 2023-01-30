import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { CategoriesModule } from './categories/categories.module';
import { XRequestIdGuard } from './common/guards/xrid.guard';
import { ThreatsModule } from './threats/threats.module';

@Module({
  imports: [CategoriesModule, ThreatsModule],
  providers: [{ provide: APP_GUARD, useClass: XRequestIdGuard }],
})
export class AppModule {}
