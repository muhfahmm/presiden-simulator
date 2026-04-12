import { HealthEvent } from "./healthEventTypes";

export const healthEventScenarios: Record<string, HealthEvent> = {
  "PANDEMI_FLU_BARU": {
    id: "PANDEMI_FLU_BARU",
    title: "Pandemi Flu Global Tipe-Z",
    description: "Virus flu jenis baru menyebar dengan cepat melalui udara. Rumah sakit mulai kewalahan menangani pasien.",
    severity: "Catastrophic",
    durationInDays: 60,
    lifeExpectancyPenalty: -8.5, // Penalti besar ke Harapan Hidup
    dailyBudgetCost: 50000000,   // Biaya penanganan medis harian
    mortalityRange: { min: 5000, max: 12500 },     // Standar Pandemi (>5000)
    requiredHealthImpactScore: 15.0, // Butuh banyak RS & Diagnostik untuk meredam
    inboxTemplate: {
      subject: "DARURAT KESEHATAN: Pandemi Flu Tipe-Z!",
      content: "Laporan medis menunjukkan lonjakan kasus Flu Tipe-Z di seluruh provinsi. Jika kapasitas rumah sakit tidak ditingkatkan, Harapan Hidup nasional akan anjlok drastis.",
      priority: "high"
    }
  },
  "EPIDEMI_DEMAM_BERDARAH": {
    id: "EPIDEMI_DEMAM_BERDARAH",
    title: "Epidemi Demam Berdarah Musiman",
    description: "Musim hujan yang panjang meningkatkan populasi nyamuk pembawa virus. Kasus DB meningkat di daerah perkotaan.",
    severity: "Medium",
    durationInDays: 30,
    lifeExpectancyPenalty: -1.2,
    dailyBudgetCost: 15000000,
    mortalityRange: { min: 500, max: 1000 },     // Standar Epidemi (500-1000)
    requiredHealthImpactScore: 5.0,
    inboxTemplate: {
      subject: "Peringatan Kesehatan: Lonjakan Kasus DB",
      content: "Kementerian Kesehatan melaporkan kenaikan kasus Demam Berdarah. Fasilitas kesehatan tingkat pertama (Puskesmas/Diagnostik) diperlukan untuk penanganan dini.",
      priority: "medium"
    }
  },
  "KRISIS_STUNTING_NASIONAL": {
    id: "KRISIS_STUNTING_NASIONAL",
    title: "Krisis Gizi Buruk & Stunting",
    description: "Kombinasi harga pangan mahal dan kurangnya edukasi gizi menyebabkan peningkatan angka stunting pada anak.",
    severity: "High",
    durationInDays: 180, // Event jangka panjang
    lifeExpectancyPenalty: -4.0,
    dailyBudgetCost: 25000000,
    mortalityRange: { min: 2, max: 8 },
    requiredHealthImpactScore: 10.0,
    inboxTemplate: {
      subject: "Laporan Sosial: Ancaman Stunting Meningkat",
      content: "Angka stunting nasional melampaui batas aman. Hal ini akan berdampak permanen pada kualitas sumber daya manusia jika tidak segera ditangani dengan infrastruktur kesehatan yang memadai.",
      priority: "high"
    }
  },
  "POLUSI_UDARA_EKSTRIM": {
    id: "POLUSI_UDARA_EKSTRIM",
    title: "Polusi Udara & Kabut Asap Ekstrem",
    description: "Kadar polusi udara (PM2.5) melampaui ambang batas aman akibat kebakaran hutan dan emisi industri.",
    severity: "High",
    durationInDays: 45,
    lifeExpectancyPenalty: -3.5,
    dailyBudgetCost: 35000000,
    mortalityRange: { min: 10, max: 40 },
    requiredHealthImpactScore: 12.0,
    inboxTemplate: {
      subject: "Peringatan Udara: Langit Menghitam!",
      content: "Kualitas udara nasional berada dalam kategori Tidak Sehat hingga Berbahaya. Penyakit ISPA melonjak tajam. Perlu percepatan fasilitas diagnostik dan pemurnian udara.",
      priority: "high"
    }
  },
  "KRISIS_MENTAL_NASIONAL": {
    id: "KRISIS_MENTAL_NASIONAL",
    title: "Krisis Kesehatan Mental Remaja",
    description: "Tekanan sosial dan ekonomi menyebabkan peningkatan drastis kasus depresi dan kecemasan pada usia produktif.",
    severity: "Medium",
    durationInDays: 120,
    lifeExpectancyPenalty: -1.5,
    dailyBudgetCost: 10000000,
    mortalityRange: { min: 1, max: 5 },
    requiredHealthImpactScore: 8.0,
    inboxTemplate: {
      subject: "Laporan Sosial: Darurat Kesehatan Mental",
      content: "Angka kesejahteraan emosional rakyat menurun. Diperlukan investasi besar pada pusat layanan kesehatan mental dan konseling nasional.",
      priority: "medium"
    }
  },
  "WABAH_ZOONOSIS": {
    id: "WABAH_ZOONOSIS",
    title: "Wabah Penyakit Zoonosis (Virus Hewan)",
    description: "Mutasi virus dari sektor peternakan yang melompat ke manusia. Tingkat kematian sangat tinggi jika tidak terdeteksi dini.",
    severity: "Catastrophic",
    durationInDays: 90,
    lifeExpectancyPenalty: -12.0,
    dailyBudgetCost: 100000000,
    mortalityRange: { min: 6500, max: 18000 },    // Standar Pandemi (>5000)
    requiredHealthImpactScore: 20.0,
    inboxTemplate: {
      subject: "ANCAMAN GLOBAL: Virus Zoonosis Terdeteksi!",
      content: "Virus mematikan dari peternakan mulai menyerang warga. Karantina wilayah dan fasilitas rumah sakit besar sangat krusial untuk mencegah kepunahan massal.",
      priority: "high"
    }
  }
};
