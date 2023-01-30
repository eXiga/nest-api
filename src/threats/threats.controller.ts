import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ThreatsService } from './threats.service';
import { Threat } from './threat.interface';

@Controller('threats')
export class ThreatsController {
  constructor(private readonly threatsService: ThreatsService) {}

  @Get()
  findAll(): Threat[] {
    return this.threatsService.findAll();
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
