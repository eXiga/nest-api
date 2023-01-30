import { Injectable } from '@nestjs/common';
import { Threat, ThreatTypes, SeverityTypes } from './threat.interface';
import { randomDate, random } from '../utils/random';

@Injectable()
export class ThreatsService {
  private readonly threats: Threat[] = [];

  constructor() {
    for (let i = 0; i < 40; i++) {
      const threat = {
        id: i + 1,
        categoryId: random(1, 2),
        type: ThreatTypes[random(0, 2)],
        severity: SeverityTypes[random(0, 2)],
        date: randomDate(),
      };

      this.threats.push(threat);
    }
  }

  findAll(): Threat[] {
    return this.threats;
  }

  findPaginated(page: number, pageSize: number): Threat[] {
    return this.threats.slice((page - 1) * pageSize, page * pageSize);
  }

  findOne(id: number): Threat | undefined {
    return this.threats.find((threat) => threat.id == id);
  }
}
