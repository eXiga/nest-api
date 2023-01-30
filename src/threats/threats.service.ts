import { Injectable } from '@nestjs/common';
import { Threat } from './threat.interface';

function randomDate(): Date {
  const from = new Date(2023, 0, 1);
  const to = new Date();

  return new Date(
    from.getTime() + Math.random() * (to.getTime() - from.getTime()),
  );
}

@Injectable()
export class ThreatsService {
  private readonly threats: Threat[] = [
    {
      id: 1,
      categoryId: 1,
      type: 'DDOS',
      severity: 'High',
      date: randomDate(),
    },
    {
      id: 2,
      categoryId: 2,
      type: 'FraudSite',
      severity: 'Low',
      date: randomDate(),
    },
    {
      id: 3,
      categoryId: 2,
      type: 'PhishingSite',
      severity: 'Medium',
      date: randomDate(),
    },
  ];

  findAll(): Threat[] {
    return this.threats;
  }

  findOne(id: number): Threat | undefined {
    return this.threats.find((threat) => threat.id == id);
  }
}
