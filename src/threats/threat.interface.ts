export const ThreatTypes = ['DDOS', 'PhishingSite', 'FraudSite'] as const;
type ThreatType = (typeof ThreatTypes)[number];

export const SeverityTypes = ['Low', 'Medium', 'High', 'Critical'] as const;
type SeverityType = (typeof SeverityTypes)[number];

export interface Threat {
  id: number;
  categoryId: number;
  type: ThreatType;
  severity: SeverityType;
  date: Date;
}
