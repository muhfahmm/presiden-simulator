export type SecurityEventSeverity = 'Low' | 'Medium' | 'High' | 'Crisis';

export interface SecurityEvent {
  id: string;
  title: string;
  description: string;
  severity: SecurityEventSeverity;
  durationInDays: number;
  
  // Dampak Statistik Nasional
  securityScorePenalty: number; // Pengurangan Skor Keamanan (/100)
  crimeRateIncrease: number;   // Kenaikan angka kriminalitas (%)
  stabilityPenalty: number;     // Pengurangan stabilitas nasional
  economicLoss: number;        // Kerugian finansial total (estimasi)
  
  // Ambang Batas Mitigasi
  requiredSecurityImpactScore: number; // Skor (%) minimal dari securityLogic untuk meredam
  
  // Integrasi Inbox
  inboxTemplate: {
    subject: string;
    content: string;
    priority: 'medium' | 'high';
  };
}
