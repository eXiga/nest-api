import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ThreatsService } from './threats.service';
import { Threat } from './threat.interface';

@Controller('threats')
export class ThreatsController {
  constructor(private readonly threatsService: ThreatsService) {}

  @Get()
  findAll(
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ): Threat[] {
    if (page == undefined || pageSize == undefined) {
      return this.threatsService.findAll();
    } else {
      return this.threatsService.findPaginated(page, pageSize);
    }
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Threat {
    const threat = this.threatsService.findOne(id);
    if (threat === undefined) {
      throw new NotFoundException('Category with this id does not exist');
    }

    return threat;
  }
}
