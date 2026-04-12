import { SecurityEvent } from "./securityEventTypes";

export const securityEventScenarios: Record<string, SecurityEvent> = {
  "GELOMBANG_BEGAL_MOTOR": {
    id: "GELOMBANG_BEGAL_MOTOR",
    title: "Gelombang Begal Motor Jalanan",
    description: "Munculnya komplotan pembegalan motor di jalan-jalan utama pada malam hari. Warga merasa tidak aman untuk keluar rumah.",
    severity: "Medium",
    durationInDays: 30,
    securityScorePenalty: -12.5, // Penalti ke Skor Keamanan
    crimeRateIncrease: 8.0,      // +8% Kriminalitas
    stabilityPenalty: -2.0,      // -2 Stabilitas
    economicLoss: 250000000,
    requiredSecurityImpactScore: 5.0, // Butuh lebih banyak Pos Polisi/Bantuan Hukum
    inboxTemplate: {
      subject: "LAPORAN KRIMINAL: Maraknya Aksi Begal!",
      content: "Laporan dari berbagai wilayah menunjukkan adanya peningkatan drastis dalam aksi pembegalan motor di jalanan. Rakyat menuntut tindakan tegas dari aparat keamanan.",
      priority: "high"
    }
  },
  "KERUSUHAN_MASSA": {
    id: "KERUSUHAN_MASSA",
    title: "Kerusuhan Massa & Penjarahan",
    description: "Protes yang awalnya damai berubah menjadi anarkis. Terjadi penjarahan di pusat-pusat komersial.",
    severity: "Crisis",
    durationInDays: 14,
    securityScorePenalty: -30.0,
    crimeRateIncrease: 25.0,
    stabilityPenalty: -15.0,
    economicLoss: 1500000000,
    requiredSecurityImpactScore: 15.0, // Sangat butuh Kejaksaan & Keamanan yang kuat
    inboxTemplate: {
      subject: "DARURAT KEAMANAN: Kerusuhan Nasional!",
      content: "Stabilitas nasional berada dalam titik kritis akibat kerusuhan massa. Penjarahan terjadi di mana-mana. Perlu percepatan pembangunan fasilitas hukum untuk memitigasi anarki.",
      priority: "high"
    }
  },
  "SERANGAN_SIBER_NASIONAL": {
    id: "SERANGAN_SIBER_NASIONAL",
    title: "Serangan Siber Infrastruktur Kritis",
    description: "Peretas asing menyerang database kementerian dan sistem perbankan nasional.",
    severity: "High",
    durationInDays: 45,
    securityScorePenalty: -10.0,
    crimeRateIncrease: 12.0,
    stabilityPenalty: -8.0,
    economicLoss: 5000000000,
    requiredSecurityImpactScore: 10.0,
    inboxTemplate: {
      subject: "ANCAMAN SIBER: Kebocoran Data Nasional!",
      content: "Keamanan data nasional terancam oleh serangan siber terorganisir. Tingkat kepercayaan publik menurun drastis. Perlu penguatan sistem hukum dan perlindungan data.",
      priority: "high"
    }
  },
  "TERORISME_AKTIF": {
    id: "TERORISME_AKTIF",
    title: "Eskalasi Serangan Terorisme",
    description: "Serangkaian serangan bom dan ancaman teror terorganisir di pusat-pusat keramaian nasional.",
    severity: "Crisis",
    durationInDays: 21,
    securityScorePenalty: -25.0,
    crimeRateIncrease: 15.0,
    stabilityPenalty: -20.0,
    economicLoss: 2500000000,
    requiredSecurityImpactScore: 20.0,
    inboxTemplate: {
      subject: "DARURAT NASIONAL: Ancaman Terorisme!",
      content: "Keamanan nasional terancam oleh serangan teror yang melumpuhkan aktivitas publik. Stabilitas negara berada dalam bahaya besar. Perlu penguatan hukum dan kepolisian segera.",
      priority: "high"
    }
  },
  "SINDIKAT_JUDI_PINJOL": {
    id: "SINDIKAT_JUDI_PINJOL",
    title: "Sindikat Judi Online & Pinjol Ilegal",
    description: "Ledakan kasus penipuan daring dan pinjaman ilegal yang menjerat ribuan warga, menyebabkan kerugian masif.",
    severity: "High",
    durationInDays: 60,
    securityScorePenalty: -8.0,
    crimeRateIncrease: 12.0,
    stabilityPenalty: -5.0,
    economicLoss: 8000000000,
    requiredSecurityImpactScore: 10.0,
    inboxTemplate: {
      subject: "Peringatan Ekonomi: Kejahatan Keuangan Siber",
      content: "Sindikat judi online dan pinjaman ilegal telah merusak tatanan ekonomi warga. Tingkat kriminalitas siber meningkat. Dibutuhkan intervensi hukum nasional untuk perlindungan konsumen.",
      priority: "high"
    }
  },
  "KONFLIK_AGRARIA": {
    id: "KONFLIK_AGRARIA",
    title: "Konflik Agraria & Sengketa Lahan",
    description: "Perselisihan tanah yang meluas antara warga dan korporasi, memicu bentrokan fisik di pedesaan.",
    severity: "Medium",
    durationInDays: 45,
    securityScorePenalty: -5.0,
    crimeRateIncrease: 5.0,
    stabilityPenalty: -8.0,
    economicLoss: 450000000,
    requiredSecurityImpactScore: 7.0,
    inboxTemplate: {
      subject: "Laporan Lapangan: Konflik Lahan Memanas",
      content: "Bentrokan sengketa lahan dilaporkan di beberapa wilayah. Hal ini mengancam stabilitas sosial dan kepastian hukum. Perlu kehadiran lembaga bantuan hukum nasional.",
      priority: "medium"
    }
  }
};
