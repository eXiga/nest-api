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
    @Query('page') qPage: number,
    @Query('pageSize') qPageSize: number,
  ): Threat[] {
    const page = qPage == undefined ? 1 : qPage;
    const pageSize = qPageSize == undefined ? 20 : qPageSize;

    return this.threatsService.findPaginated(page, pageSize);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Threat {
    const threat = this.threatsService.findOne(id);
    if (threat === undefined) {
      throw new NotFoundException('Threat with this id does not exist');
    }

    return threat;
  }
}
