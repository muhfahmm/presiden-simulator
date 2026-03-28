export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: "Ekonomi" | "Geopolitik" | "Energi" | "Logistik";
  content: string;
  impactLabel: string;
  impactType: "positive" | "negative" | "neutral";
  affectedCommodities: string[];
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "Ketegangan di Terusan Suez Meningkat, Biaya Logistik Global Melonjak",
    date: "25-06-2026",
    category: "Logistik",
    content: "Gangguan navigasi di jalur perdagangan utama menyebabkan penundaan pengiriman barang manufaktur dan energi ke pasar Eropa dan Asia.",
    impactLabel: "Biaya Pengiriman Naik 15%",
    impactType: "negative",
    affectedCommodities: ["Minyak Mentah", "Barang Manufaktur", "Gas Alam"]
  },
  {
    id: "2",
    title: "Penemuan Cadangan Litium Masif di Amerika Selatan",
    date: "24-06-2026",
    category: "Ekonomi",
    content: "Eksplorasi baru di Chile dan Argentina mengungkap potensi cadangan litium yang dapat menurunkan harga baterai global dalam jangka menengah.",
    impactLabel: "Harga Baterai Diprediksi Turun",
    impactType: "positive",
    affectedCommodities: ["Litium", "Baterai Kendaraan Listrik"]
  },
  {
    id: "3",
    title: "Gelombang Panas Ekstrem Mengancam Ketahanan Pangan Asia Tenggara",
    date: "23-06-2026",
    category: "Geopolitik",
    content: "Produksi beras dan gandum di kawasan mengalami penurunan signifikan, memaksa negara-negara untuk meningkatkan kuota impor pangan.",
    impactLabel: "Krisis Pangan Global",
    impactType: "negative",
    affectedCommodities: ["Beras", "Gandum", "Kedelai"]
  },
  {
    id: "4",
    title: "Aliansi Perdagangan Baru di Afrika Barat Resmi Beroperasi",
    date: "22-06-2026",
    category: "Geopolitik",
    content: "Blok perdagangan baru ini bertujuan untuk memfasilitasi ekspor bahan mentah secara langsung antar anggota tanpa perantara global.",
    impactLabel: "Peningkatan Ekspor Regional",
    impactType: "positive",
    affectedCommodities: ["Kakao", "Kopi", "Bijih Besi"]
  },
  {
    id: "5",
    title: "Harga Minyak Dunia Stabil di Tengah Penurunan Permintaan Industri",
    date: "21-06-2026",
    category: "Energi",
    content: "Meskipun ada ketidakpastian politik, pelambatan manufaktur di negara-negara besar menjaga harga energi tetap terkendali.",
    impactLabel: "Stagnasi Harga Energi",
    impactType: "neutral",
    affectedCommodities: ["Minyak Mentah", "Batu Bara"]
  }
];
