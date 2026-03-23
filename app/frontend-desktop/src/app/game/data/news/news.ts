export interface NewsItem {
  id: string;
  date: string;
  category: "Ekonomi" | "Politik" | "Sosial" | "Internasional" | "Pertahanan";
  title: string;
  content: string;
  priority: "High" | "Medium" | "Low";
}

export const mockNews: NewsItem[] = [
  {
    id: "1",
    date: "23 Maret 2026",
    category: "Ekonomi",
    title: "Pertumbuhan Ekonomi Nasional Meningkat Pesat",
    content: "Laporan terbaru menunjukkan bahwa kebijakan hilirisasi industri mulai membuahkan hasil, dengan pertumbuhan PDB mencapai 5.8% di kuartal terakhir.",
    priority: "High"
  },
  {
    id: "2",
    date: "22 Maret 2026",
    category: "Internasional",
    title: "Ketegangan di Pasifik Selatan Menurun",
    content: "Setelah serangkaian pertemuan diplomatik, negara-negara di kawasan Pasifik Selatan sepakat untuk menahan diri dan meningkatkan kerja sama maritim.",
    priority: "Medium"
  },
  {
    id: "3",
    date: "21 Maret 2026",
    category: "Pertahanan",
    title: "Modernisasi Alutsista Tahap II Dimulai",
    content: "Kementerian Pertahanan mengumumkan dimulainya proses pengadaan teknologi radar canggih untuk memperkuat pengawasan wilayah perbatasan.",
    priority: "High"
  },
  {
    id: "4",
    date: "20 Maret 2026",
    category: "Politik",
    title: "Survey Menunjukkan Kepercayaan Publik Tetap Stabil",
    content: "Lembaga survei independen melaporkan bahwa tingkat kepuasan masyarakat terhadap kinerja pemerintah berada di level yang positif.",
    priority: "Low"
  },
  {
    id: "5",
    date: "19 Maret 2026",
    category: "Sosial",
    title: "Program Kesejahteraan Rakyat Diperluas",
    content: "Pemerintah mengalokasikan dana tambahan untuk memperlancar distribusi bantuan sosial di wilayah-wilayah yang terdampak cuaca ekstrem.",
    priority: "Medium"
  }
];
