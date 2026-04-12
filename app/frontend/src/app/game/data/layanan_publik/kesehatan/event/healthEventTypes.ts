export type HealthEventSeverity = 'Low' | 'Medium' | 'High' | 'Catastrophic';

export interface HealthEvent {
  id: string;
  title: string;
  description: string;
  severity: HealthEventSeverity;
  durationInDays: number; // Berapa lama event berlangsung
  
  // Dampak Statistik Nasional
  lifeExpectancyPenalty: number; // Pengurangan Harapan Hidup (THN)
  dailyBudgetCost: number; // Biaya harian dari kas negara
  mortalityRange: { min: number, max: number }; // Perkiraan laju kematian harian (JIWA)
  
  // Ambang Batas Mitigasi
  requiredHealthImpactScore: number; // Skor (%) minimal dari healthLogic untuk meredam efek
  
  // Integrasi Inbox
  inboxTemplate: {
    subject: string;
    content: string;
    priority: 'medium' | 'high';
  };
}
