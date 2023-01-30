const ThreatTypes = ['DDOS', 'PhishingSite', 'FraudSite'] as const;
type ThreatType = (typeof ThreatTypes)[number];

const SeverityTypes = ['Low', 'Medium', 'High'] as const;
type SeverityType = (typeof SeverityTypes)[number];

export interface Threat {
  id: number;
  categoryId: number;
  type: ThreatType;
  severity: SeverityType;
  date: Date;
}
