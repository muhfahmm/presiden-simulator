import { NewsItem } from "./newsData";
import { newsStorage } from "./newsStorage";
import { unVotingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/1_PBB/1_pemungutan_suara/logika_pemungutan_suara/unVotingStorage";

// Replacing date-fns with a native formatter to avoid dependency issues
const formatDate = (date: Date) => {
  const d = String(date.getDate()).padStart(2, '0');
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const y = date.getFullYear();
  return `${d}-${m}-${y}`;
};


// News Templates for Realistic Generation
const NEWS_TEMPLATES = {
  Produksi: [
    {
      title: "Panen Raya di [NEGARA] Membuat Stok [KOMODITAS] Melimpah",
      content: "Produksi [KOMODITAS] di [NEGARA] mencapai rekor tertinggi tahun ini, memicu penurunan harga ekspor di pasar global.",
      impactLabel: "Harga [KOMODITAS] Turun",
      impactType: "positive",
      affectedCommodities: ["[KOMODITAS]"]
    },
    {
      title: "Krisis Produksi [KOMODITAS] di [NEGARA] Akibat Cuaca Ekstrem",
      content: "Gangguan iklim di [NEGARA] menyebabkan gagal panen [KOMODITAS] secara masif, mengancam rantai pasok internasional.",
      impactLabel: "Pasokan [KOMODITAS] Terancam",
      impactType: "negative",
      affectedCommodities: ["[KOMODITAS]"]
    }
  ],
  Kebijakan: [
    {
      title: "[NEGARA] Menetapkan Tarif Impor Baru untuk [KOMODITAS]",
      content: "Pemerintah [NEGARA] resmi menaikkan tarif impor sebesar 15% guna melindungi produsen domestik dari persaingan global.",
      impactLabel: "Biaya Impor Naik",
      impactType: "negative",
      affectedCommodities: ["[KOMODITAS]"]
    }
  ],
  Logistik: [
    {
      title: "Blokade Jalur Laut di [LOKASI] Mengganggu Arus Kapal Kargo",
      content: "Ketegangan militer di sekitar [LOKASI] memaksa kapal pengangkut [KOMODITAS] untuk memutar jalur lebih jauh.",
      impactLabel: "Biaya Logistik Membengkak",
      impactType: "negative",
      affectedCommodities: ["[KOMODITAS]", "Barang Manufaktur"]
    },
    {
      title: "Peluncuran Infrastruktur Baru di [NEGARA] Percepat Distribusi",
      content: "Kanal dan pelabuhan baru resmi beroperasi, memangkas waktu pengiriman barang hingga 30% untuk wilayah regional.",
      impactLabel: "Efisiensi Logistik Meningkat",
      impactType: "positive",
      affectedCommodities: ["Logistik Global"]
    }
  ],
  Teknologi: [
    {
      title: "Terobosan Teknologi Ekstraksi [KOMODITAS] di [NEGARA]",
      content: "Metode baru yang lebih efisien ditemukan oleh peneliti di [NEGARA], memungkinkan produksi massal dengan biaya rendah.",
      impactLabel: "Biaya Produksi Turun",
      impactType: "positive",
      affectedCommodities: ["[KOMODITAS]"]
    }
  ],
  Penawaran: [
    {
      title: "PENAWARAN IMPOR: [NEGARA] Siap Memasok [KOMODITAS]",
      content: "Pemerintah [NEGARA] mengirimkan proposal kerja sama perdagangan untuk memasok [KOMODITAS] ke pasar internasional dengan harga diskon.",
      impactLabel: "Tawaran Impor Murah",
      impactType: "positive",
      affectedCommodities: ["[KOMODITAS]"]
    },
    {
      title: "PERMINTAAN EKSPOR: [NEGARA] Mencari Suplai [KOMODITAS]",
      content: "[NEGARA] sedang mencari mitra strategis untuk memenuhi kebutuhan stok nasional [KOMODITAS]. Ini merupakan peluang ekspor yang besar.",
      impactLabel: "Peluang Ekspor Terbuka",
      impactType: "positive",
      affectedCommodities: ["[KOMODITAS]"]
    },
    {
      title: "KONTRAK DAGANG: [KOMODITAS] DARI [NEGARA]",
      content: "[NEGARA] mengajak kontrak dagang [KOMODITAS] selama [DURASI] bulan ([JUMLAH] unit/bulan) dengan harga tetap [HARGA] EM/unit.",
      impactLabel: "Kontrak Jangka Panjang",
      impactType: "neutral",
      affectedCommodities: ["[KOMODITAS]"]
    }
  ]
};

const NEGARA_LIST = ["Vietnam", "Australia", "Brasil", "Jerman", "China", "Amerika Serikat", "Indonesia", "Chile", "Argentina"];
const KOMODITAS_LIST = ["Beras", "Nikel", "Minyak Mentah", "Gandum", "Semikonduktor", "Litium", "Baterai", "Kakao"];
const LOKASI_LIST = ["Terusan Suez", "Selat Malaka", "Laut Merah", "Selat Hormuz"];

export const NewsEngine = {
  generateRandomNews: (currentDate: Date): NewsItem => {
    const categories = Object.keys(NEWS_TEMPLATES) as (keyof typeof NEWS_TEMPLATES)[];
    const category = categories[Math.floor(Math.random() * categories.length)];
    const templates = NEWS_TEMPLATES[category];
    const template = templates[Math.floor(Math.random() * templates.length)];
    
    const negara = NEGARA_LIST[Math.floor(Math.random() * NEGARA_LIST.length)];
    const komoditas = KOMODITAS_LIST[Math.floor(Math.random() * KOMODITAS_LIST.length)];
    const lokasi = LOKASI_LIST[Math.floor(Math.random() * LOKASI_LIST.length)];

    const formatText = (text: string) => {
      return text
        .replace(/\[NEGARA\]/g, negara)
        .replace(/\[KOMODITAS\]/g, komoditas)
        .replace(/\[LOKASI\]/g, lokasi)
        .replace(/\[DURASI\]/g, Math.floor(Math.random() * 12 + 3).toString())
        .replace(/\[JUMLAH\]/g, (Math.floor(Math.random() * 50 + 5) * 100).toString())
        .replace(/\[HARGA\]/g, (Math.floor(Math.random() * 1000 + 100)).toString());
    };

    return {
      id: Math.random().toString(36).substr(2, 9),
      title: formatText(template.title),
      date: formatDate(currentDate),
      category: category === "Produksi" ? "Ekonomi" : (category === "Penawaran" ? "Logistik" : category as any),
      content: formatText(template.content),
      impactLabel: formatText(template.impactLabel),
      impactType: template.impactType as any,
      affectedCommodities: template.affectedCommodities.map(c => formatText(c)),
      timestamp: currentDate.getTime()
    };
  },

  // Process lifecycle: generate news every few days or on specific events
  updateNewsSystem: (currentDate: Date) => {
    const news = newsStorage.getNews();
    
    // 1. Cleanup: Remove news older than 30 days
    const filteredNews = news.filter(item => {
      const itemDateParts = item.date.split("-");
      const itemDate = new Date(
        parseInt(itemDateParts[2]),
        parseInt(itemDateParts[1]) - 1,
        parseInt(itemDateParts[0])
      );
      const diffTime = Math.abs(currentDate.getTime() - itemDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays <= 30;
    });

    let updatedNews = [...filteredNews];
    let hasChanges = filteredNews.length !== news.length;

    // 2. Real-time PBB Sync: Check for passed resolutions that aren't reported yet
    const unData = unVotingStorage.getData();
    const passedResolutions = unData.votingHistory.filter(res => res.status === "DITERIMA");

    passedResolutions.forEach(res => {
      // Check if this resolution is already in our news (by ID or exact title)
      const isAlreadyReported = updatedNews.some(n => 
        n.title.includes(res.targetCountry || "") && n.title.includes(res.name)
      );

      if (!isAlreadyReported) {
        const newsItem: NewsItem = {
          id: `un-res-${res.id}`,
          title: `${res.name}: PBB RESMI JATUHKAN SANKSI TERHADAP ${res.targetCountry?.toUpperCase()}`,
          date: formatDate(currentDate),
          category: "Geopolitik",
          content: res.description,
          impactLabel: "Hubungan Dagang Terputus",
          impactType: "negative",
          affectedCommodities: ["Minyak Mentah", "Batu Bara", "Gas Alam"], // Standard sanction commodities
          timestamp: currentDate.getTime()
        };
        updatedNews = [newsItem, ...updatedNews];
        hasChanges = true;
      }
    });

    // 3. Generation: Randomly generate news (e.g., 20% chance every update)
    if (Math.random() < 0.2) {
      const newItem = NewsEngine.generateRandomNews(currentDate);
      updatedNews = [newItem, ...updatedNews];
      hasChanges = true;

      // NEW: If it's a Penawaran/Kontrak, also add to inboxStorage so it appears in Inbox
      if (newItem.title.includes("PENAWARAN") || newItem.title.includes("PERMINTAAN") || newItem.title.includes("KONTRAK")) {
        try {
          const { inboxStorage } = require("@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage");
          
          // Determine partner country from title if possible
          const countryMatch = newItem.title.match(/DARI (.*)/);
          const source = countryMatch ? `Pemerintah ${countryMatch[1]}` : "Global Trade Hub";

          inboxStorage.addMessage({
            source: source,
            subject: newItem.title.toLowerCase(),
            content: newItem.content,
            time: newItem.date,
            priority: "medium",
            category: "trade",
            isProposal: true,
            proposalLabel: newItem.title.includes("KONTRAK") ? "KONTRAK" : "PROPOSAL",
            metadata: {
              type: newItem.title.includes("KONTRAK") ? "contract" : "offer",
              commodity: newItem.affectedCommodities[0]
            }
          });
        } catch (e) {
          console.error("Failed to sync news to inbox", e);
        }
      }
    }

    if (hasChanges) {
      newsStorage.saveNews(updatedNews);
    }
  }
};
