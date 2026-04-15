"use client"

import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { 
  X, 
  Newspaper, 
  Globe, 
  ChevronRight, 
  Search, 
  TrendingUp, 
  Shield, 
  Activity,
  Zap,
  Info,
  Calendar
} from 'lucide-react';
import { newsStorage, NewsItem } from './newsStorage';
import { 
  BUILDING_NAME_LOOKUP, 
  resolveNestedValue, 
  detectConstructionDetails 
} from './buildingLookupUtility';
import { countries } from '@/app/database/data/negara/benua/index';

interface BeritaModalProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveMenu: (menu: string) => void;
}

export default function BeritaModal({ isOpen, onClose, setActiveMenu }: BeritaModalProps) {
  const router = useRouter();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setNews(newsStorage.getNews());
    }
    
    const handleUpdate = () => setNews(newsStorage.getNews());
    window.addEventListener('news_updated', handleUpdate);
    return () => window.removeEventListener('news_updated', handleUpdate);
  }, [isOpen]);



  const filteredNews = news.filter(item => {
    const matchesSearch = item.subject.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTab = (() => {
        if (!activeTab || activeTab === 'SEMUA') return true;

        const subjectLower = item.subject.toLowerCase();
        
        switch(activeTab) {
            case 'PEMBANGUNAN': 
                return item.category === 'construction';
            case 'KEUANGAN': 
                return item.category === 'economy' || 
                       (item.category === 'global' && /(dana|hibah|anggaran|pajak|ekonomi|utang|hutang)/.test(subjectLower));
            case 'PERDAGANGAN': 
                return item.category === 'economy' || 
                       /(dagang|ekspor|impor|tarif|logistik|pasar)/.test(subjectLower);
            case 'KEDUTAAN': 
                return (item.category === 'diplomacy' && !/(pakta|perjanjian|aliansi|sekutu)/.test(subjectLower)) || 
                       /(diplomatik|hubungan|kedutaan|dubes|perwakilan|konsulat)/.test(subjectLower);
            case 'PAKTA': 
                return /(pakta|perjanjian|mou|kesepakatan|traktat)/.test(subjectLower);
            case 'ALIANSI': 
                return /(aliansi|sekutu|koalisi|blok|pertahanan)/.test(subjectLower);
            default: 
                return true;
        }
    })();

    return matchesSearch && matchesTab;
  });

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'global': return { 
        bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', text: 'text-indigo-400', 
        glow: 'shadow-[0_0_20px_rgba(99,102,241,0.15)]', icon: <Globe size={18} /> 
      };
      case 'diplomacy': return { 
        bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400', 
        glow: 'shadow-[0_0_20px_rgba(168,85,247,0.15)]', icon: <Shield size={18} /> 
      };
      case 'economy': return { 
        bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', 
        glow: 'shadow-[0_0_20px_rgba(16,185,129,0.15)]', icon: <TrendingUp size={18} /> 
      };
      case 'construction': return { 
        bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400', 
        glow: 'shadow-[0_0_20px_rgba(245,158,11,0.15)]', icon: <Zap size={18} /> 
      };
      default: return { 
        bg: 'bg-sky-500/10', border: 'border-sky-500/20', text: 'text-sky-400', 
        glow: 'shadow-[0_0_20px_rgba(14,165,233,0.15)]', icon: <Newspaper size={18} /> 
      };
    }
  };

  // ══════════════════════════════════════════════════════════
  // DATABASE-ACCURATE News Enrichment:
  // Detects country + building from news text, looks up actual count from database,
  // and injects "(X ke X+1)" transition text.
  // ══════════════════════════════════════════════════════════
  const enrichNewsItem = (item: NewsItem): NewsItem => {
    if (item.category !== 'construction') return item;

    const { country, building } = detectConstructionDetails(item.subject, item.content, item.source);
    if (!country || !building) return item;

    // Resolve accurate count
    const baseline = resolveNestedValue(country, building.sectorPath);
    const target = baseline + 1;
    const transitionText = `(${baseline} ke ${target})`;

    // Strip old and inject new
    const cleanSubject = item.subject.replace(/\s?\(\d+ ke \d+\)/g, '');
    const cleanContent = item.content.replace(/\s?\(\d+ ke \d+\)/g, '');

    return {
      ...item,
      subject: cleanSubject,
      content: cleanContent.replace(
        /proyek konstruksi ([\w\s\-\/()&]+?)(\s+di sektor|\.|$|\s)/i,
        `proyek konstruksi $1 ${transitionText}$2`
      ).trim()
    };
  };


  const detectNavigationTargets = (item: NewsItem) => {
    const textToSearch = (item.source + " " + item.subject + " " + item.content).toLowerCase();
    
    // 1. Detect Country
    let targetCountry = null;
    for (const country of countries) {
      const nameId = country.name_id.toLowerCase();
      const nameEn = country.name_en.toLowerCase();
      const regexId = new RegExp(`\\b${nameId.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'i');
      const regexEn = new RegExp(`\\b${nameEn.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'i');
      if (regexId.test(textToSearch) || regexEn.test(textToSearch)) {
        targetCountry = country;
        break;
      }
    }

    if (!targetCountry) return null;

    // 2. Detect Smart Sector & Card deep-links
    let sector = getTabSlug(item.category);
    let cardId = "";

    const smartDictionary = [
      // Detailed Education
      { keys: ["pendidikan menengah", "smp", "sekolah menengah"], sector: "layanan_publik", card: "menengah", slug: "pendidikan_menengah" },
      { keys: ["pendidikan dasar", "sd", "sekolah dasar"], sector: "layanan_publik", card: "dasar", slug: "pendidikan_dasar" },
      { keys: ["paud", "prasekolah", "usia dini"], sector: "layanan_publik", card: "prasekolah", slug: "pendidikan_anak_usia_dini" },
      { keys: ["pendidikan tinggi", "sma", "smk", "sekolah atas", "pendidikan lanjutan"], sector: "layanan_publik", card: "lanjutan", slug: "pendidikan_lanjutan" },
      { keys: ["universitas", "kampus", "perguruan tinggi"], sector: "layanan_publik", card: "universitas", slug: "universitas" },
      { keys: ["observatorium", "astronomi", "antariksa"], sector: "layanan_publik", card: "8_observatorium", slug: "observatorium" },
      { keys: ["laboratorium", "sains", "lab medik"], sector: "layanan_publik", card: "7_laboratorium", slug: "laboratorium" },
      { keys: ["penelitian", "pusat riset", "riset strategis"], sector: "layanan_publik", card: "9_pusat_penelitian", slug: "pusat_penelitian" },
      { keys: ["pusat inovasi", "teknologi", "pusat pengembangan"], sector: "layanan_publik", card: "10_pusat_pengembangan", slug: "pusat_pengembangan" },
      
      // Detailed Sports & Leisure
      { keys: ["e-sports", "esports", "arena e-sports"], sector: "layanan_publik", card: "esports", slug: "esports" },
      { keys: ["stadiun", "lapangan bola", "sepak bola", "stadion nasional"], sector: "layanan_publik", card: "stadion", slug: "stadion_nasional" },
      { keys: ["stadion internasional", "sirkuit", "akuatik"], sector: "layanan_publik", card: "stadion_internasional", slug: "stadion_internasional" },
      
      // Commercial & Retail
      { keys: ["mall", "perbelanjaan", "pusat belanja"], sector: "layanan_publik", card: "pusat_belanja", slug: "pusat_belanja" },
      { keys: ["hotel", "resort", "penginapan"], sector: "layanan_publik", card: "hotel", slug: "hotel" },
      { keys: ["pusat grosir", "tekstil", "grosir tekstil"], sector: "layanan_publik", card: "pusat_grosir_tekstil", slug: "pusat_grosir_tekstil" },
      
      // Entertainment & Arts
      { keys: ["bioskop", "cinema", "layar lebar"], sector: "layanan_publik", card: "bioskop", slug: "bioskop" },
      { keys: ["teater", "seni pertunjukan", "gedung seni"], sector: "layanan_publik", card: "gedung_teater", slug: "gedung_teater" },
      
      // Residential
      { keys: ["mansion", "mewah", "eksklusif"], sector: "hunian_sosial", card: "mansion", slug: "mansion" },
      { keys: ["rumah subsidi", "subsidi", "terjangkau"], sector: "hunian_sosial", card: "rumah_subsidi", slug: "rumah_subsidi" },
      { keys: ["apartemen", "vertikal", "high-rise", "urban"], sector: "hunian_sosial", card: "apartemen", slug: "apartemen" },

      // Infrastructure & Logistics
      { keys: ["jalan raya", "tol", "jalan tol", "jalan"], sector: "layanan_publik", card: "jalan_raya", slug: "jalan_raya" },
      { keys: ["pelabuhan laut", "pelabuhan", "dermaga"], sector: "layanan_publik", card: "pelabuhan", slug: "pelabuhan" },
      { keys: ["bandara", "pesawat", "penerbangan", "lapangan terbang"], sector: "layanan_publik", card: "bandara", slug: "bandara" },
      { keys: ["stasiun kereta", "jalur kereta", "kereta api"], sector: "layanan_publik", card: "stasiun_kereta_api", slug: "stasiun_kereta_api" },
      { keys: ["kereta bawah tanah", "subway", "krl bawah"], sector: "layanan_publik", card: "kereta_bawah_tanah", slug: "kereta_bawah_tanah" },
      { keys: ["terminal bus", "bus", "halte"], sector: "layanan_publik", card: "terminal_bus", slug: "terminal_bus" },
      { keys: ["jalur sepeda", "sepeda"], sector: "layanan_publik", card: "jalur_sepeda", slug: "jalur_sepeda" },
      { keys: ["helipad", "helikopter"], sector: "layanan_publik", card: "helipad", slug: "helipad" },
      { keys: ["infrastruktur", "logistik", "jembatan"], sector: "layanan_publik", card: "infrastruktur", slug: "infrastruktur" }, // Fallback      
      // Generic Healthcare
      { keys: ["rumah sakit daerah", "rsud", "rumah sakit kecil"], sector: "layanan_publik", card: "rumah_sakit_kecil", slug: "rumah_sakit_daerah" },
      { keys: ["rumah sakit pusat", "rsup", "rumah sakit besar", "rumah sakit umum"], sector: "layanan_publik", card: "rumah_sakit_besar", slug: "rumah_sakit_pusat" },
      { keys: ["diagnostik", "laboratorium medik", "lab medik"], sector: "layanan_publik", card: "pusat_diagnostik", slug: "laboratorium_medik" },
      { keys: ["rumah sakit", "klinik", "kesehatan", "medis"], sector: "layanan_publik", card: "rumah_sakit_besar", slug: "rumah_sakit_pusat" },
      
      // Security & Law
      { keys: ["hukum", "bantuan hukum", "legal aid"], sector: "layanan_publik", card: "pusat_bantuan_hukum", slug: "pusat_bantuan_hukum" },
      { keys: ["pengadilan", "mahkamah", "hakim"], sector: "layanan_publik", card: "pengadilan", slug: "pengadilan" },
      { keys: ["kejaksaan", "jaksa"], sector: "layanan_publik", card: "kejaksaan", slug: "kejaksaan" },
      { keys: ["keamanan", "polisi", "pos polisi"], sector: "layanan_publik", card: "pos_polisi", slug: "pos_polisi" },
      
      // AGRIKULTUR (Sector: Produksi)
      { keys: ["padi", "beras", "sawah"], sector: "produksi", card: "padi", slug: "pertanian_padi" },
      { keys: ["gandum", "sereal"], sector: "produksi", card: "gandum", slug: "pertanian_gandum" },
      { keys: ["jagung"], sector: "produksi", card: "jagung", slug: "pertanian_jagung" },
      { keys: ["umbi", "singkong", "kentang"], sector: "produksi", card: "umbi", slug: "pertanian_umbi" },
      { keys: ["kedelai", "tempe", "tahu"], sector: "produksi", card: "kedelai", slug: "pertanian_kedelai" },
      { keys: ["sawit", "kelapa sawit"], sector: "produksi", card: "kelapa_sawit", slug: "pertanian_kelapa_sawit" },
      { keys: ["tebu"], sector: "produksi", card: "tebu", slug: "pertanian_tebu" },
      { keys: ["teh"], sector: "produksi", card: "teh", slug: "pertanian_teh" },
      { keys: ["kopi"], sector: "produksi", card: "kopi", slug: "pertanian_kopi" },
      { keys: ["kakao", "cokelat"], sector: "produksi", card: "kakao", slug: "pertanian_kakao" },
      { keys: ["karet"], sector: "produksi", card: "karet", slug: "pertanian_karet" },
      { keys: ["kapas"], sector: "produksi", card: "kapas", slug: "pertanian_kapas" },
      { keys: ["tembakau", "rokok"], sector: "produksi", card: "tembakau", slug: "pertanian_tembakau" },
      { keys: ["sayur", "sayuran", "kebun"], sector: "produksi", card: "sayur", slug: "pertanian_sayur" },

      // PETERNANKAN (Sector: Produksi)
      { keys: ["ayam", "unggas", "telur"], sector: "produksi", card: "ayam_unggas", slug: "peternakan_ayam_unggas" },
      { keys: ["sapi perah", "produksi susu"], sector: "produksi", card: "sapi_perah", slug: "peternakan_sapi_perah" },
      { keys: ["sapi potong", "daging sapi"], sector: "produksi", card: "sapi_potong", slug: "peternakan_sapi_potong" },
      { keys: ["kambing", "domba", "daging kambing"], sector: "produksi", card: "domba_kambing", slug: "peternakan_domba_kambing" },

      // OLAHAN PANGAN (Sector: Produksi)
      { keys: ["air mineral", "air minum"], sector: "produksi", card: "air_mineral", slug: "pabrik_air_mineral" },
      { keys: ["pabrik gula"], sector: "produksi", card: "gula", slug: "pabrik_gula" },
      { keys: ["roti", "bakery"], sector: "produksi", card: "roti", slug: "pabrik_roti" },
      { keys: ["mie instan", "ramen"], sector: "produksi", card: "mie_instan", slug: "pabrik_mie_instan" },
      { keys: ["minyak goreng"], sector: "produksi", card: "minyak_goreng", slug: "pabrik_minyak_goreng" },
      { keys: ["pengolahan daging", "sosis", "kornet"], sector: "produksi", card: "pengolahan_daging", slug: "pabrik_pengolahan_daging" },
      { keys: ["pengolahan susu", "yogurt", "keju"], sector: "produksi", card: "susu", slug: "pabrik_susu" },
      { keys: ["pakan ternak"], sector: "produksi", card: "pakan_ternak", slug: "pabrik_pakan_ternak" },
      { keys: ["pengalengan ikan", "sarden", "ikan kaleng"], sector: "produksi", card: "ikan_kaleng", slug: "pabrik_ikan_kaleng" },

      // PERIKANAN (Sector: Produksi)
      { keys: ["udang", "tambak udang"], sector: "produksi", card: "udang", slug: "perikanan_udang" },
      { keys: ["budidaya ikan", "ikan air tawar"], sector: "produksi", card: "ikan", slug: "perikanan_ikan" },
      { keys: ["mutiara", "kerang"], sector: "produksi", card: "mutiara", slug: "perikanan_mutiara" },

      // FARMASI (Sector: Produksi)
      { keys: ["obat", "farmasi", "medis"], sector: "produksi", card: "farmasi", slug: "farmasi_farmasi" },

      // SEKTOR ENERGI (Sector: Produksi)
      { keys: ["nuklir", "pltn", "pembangkit nuklir"], sector: "produksi", card: "pembangkit_listrik_tenaga_nuklir", slug: "energi_pembangkit_listrik_tenaga_nuklir" },
      { keys: ["hidroelektrik", "plta", "pembangkit air"], sector: "produksi", card: "pembangkit_listrik_tenaga_air", slug: "energi_pembangkit_listrik_tenaga_air" },
      { keys: ["surya", "plts", "panel surya"], sector: "produksi", card: "pembangkit_listrik_tenaga_surya", slug: "energi_pembangkit_listrik_tenaga_surya" },
      { keys: ["uap", "pltu", "pembangkit uap"], sector: "produksi", card: "pembangkit_listrik_tenaga_uap", slug: "energi_pembangkit_listrik_tenaga_uap" },
      { keys: ["gas alam", "pltg", "pembangkit gas"], sector: "produksi", card: "pembangkit_listrik_tenaga_gas", slug: "energi_pembangkit_listrik_tenaga_gas" },
      { keys: ["angin", "pltb", "pembangkit angin"], sector: "produksi", card: "pembangkit_listrik_tenaga_angin", slug: "energi_pembangkit_listrik_tenaga_angin" },

      // MINERAL KRITIS & EKSTRAKSI (Sector: Produksi)
      { keys: ["emas", "tambang emas"], sector: "produksi", card: "emas", slug: "tambang_emas" },
      { keys: ["uranium", "tambang uranium"], sector: "produksi", card: "uranium", slug: "tambang_uranium" },
      { keys: ["batu bara", "tambang batu bara"], sector: "produksi", card: "batu_bara", slug: "tambang_batu_bara" },
      { keys: ["minyak bumi", "kilang minyak", "sumur minyak"], sector: "produksi", card: "minyak_bumi", slug: "tambang_minyak_bumi" },
      { keys: ["gas alam", "sumur gas"], sector: "produksi", card: "gas_alam", slug: "tambang_gas_alam" },
      { keys: ["garam", "tambang garam"], sector: "produksi", card: "garam", slug: "tambang_garam" },
      { keys: ["nikel", "tambang nikel"], sector: "produksi", card: "nikel", slug: "tambang_nikel" },
      { keys: ["litium", "lithium"], sector: "produksi", card: "litium", slug: "tambang_litium" },
      { keys: ["tembaga", "tambang tembaga"], sector: "produksi", card: "tembaga", slug: "tambang_tembaga" },
      { keys: ["aluminium", "tambang aluminium"], sector: "produksi", card: "aluminium", slug: "tambang_aluminium" },
      { keys: ["tanah jarang", "ltj"], sector: "produksi", card: "logam_tanah_jarang", slug: "tambang_logam_tanah_jarang" },
      { keys: ["besi", "bijih besi"], sector: "produksi", card: "bijih_besi", slug: "tambang_bijih_besi" },

      // MANUFAKTUR (Sector: Produksi)
      { keys: ["semikonduktor", "elektronik", "pabrik chip"], sector: "produksi", card: "semikonduktor", slug: "pabrik_semikonduktor" },
      { keys: ["mobil", "otomotif"], sector: "produksi", card: "mobil", slug: "pabrik_mobil" },
      { keys: ["sepeda motor", "pabrik motor"], sector: "produksi", card: "sepeda_motor", slug: "pabrik_sepeda_motor" },
      { keys: ["smelter", "pengolahan logam"], sector: "produksi", card: "smelter", slug: "pabrik_smelter" },
      { keys: ["semen", "beton"], sector: "produksi", card: "semen_beton", slug: "pabrik_semen_beton" },
      { keys: ["kayu", "pabrik kayu"], sector: "produksi", card: "kayu", slug: "pabrik_kayu" },
      { keys: ["pupuk", "pabrik pupuk"], sector: "produksi", card: "pupuk", slug: "pabrik_pupuk" },

      // --- INTELIJEN ---
      { keys: ["intelijen strategis", "analisis intelijen"], sector: "intelijen", card: "intelijen", slug: "intelijen" },
      { keys: ["operasi siber", "hacker", "peretasan", "keamanan siber", "digital warfare"], sector: "intelijen", card: "operasi_siber", slug: "operasi_siber" },
      { keys: ["satelit intelijen", "satelit mata-mata", "citra satelit", "spy satellite"], sector: "intelijen", card: "sistem_satelit", slug: "sistem_satelit" },
      { keys: ["jaringan radar", "early warning", "radar nasional", "deteksi udara"], sector: "intelijen", card: "jaringan_radar", slug: "jaringan_radar" },

      // --- ARMADA MILITER: DARAT ---
      { keys: ["barak militer", "konstruksi barak", "asrama tentara"], sector: "armada_militer", card: "barak", slug: "barak" },
      { keys: ["tank tempur", "mbt", "main battle tank", "panzer"], sector: "armada_militer", card: "tank_tempur_utama", slug: "tank_tempur_utama" },
      { keys: ["apc", "ifv", "anoa", "panser angkut"], sector: "armada_militer", card: "apc_ifv", slug: "apc_ifv" },
      { keys: ["artileri berat", "meriam", "howitzer"], sector: "armada_militer", card: "artileri_berat", slug: "artileri_berat" },
      { keys: ["roket", "mlrs", "peluncur roket"], sector: "armada_militer", card: "sistem_peluncur_roket", slug: "sistem_peluncur_roket" },
      { keys: ["sam system", "rudal darat-ke-udara", "pertahanan udara mobile"], sector: "armada_militer", card: "pertahanan_udara_mobile", slug: "pertahanan_udara_mobile" },
      { keys: ["kendaraan taktis", "jeep militer", "humvee"], sector: "armada_militer", card: "kendaraan_taktis", slug: "kendaraan_taktis" },

      // --- ARMADA MILITER: LAUT ---
      { keys: ["kapal induk", "aircraft carrier"], sector: "armada_militer", card: "kapal_induk", slug: "kapal_induk" },
      { keys: ["kapal induk nuklir"], sector: "armada_militer", card: "kapal_induk_nuklir", slug: "kapal_induk_nuklir" },
      { keys: ["destroyer", "kapal perusak"], sector: "armada_militer", card: "kapal_destroyer", slug: "kapal_destroyer" },
      { keys: ["korvet", "kapal korvet"], sector: "armada_militer", card: "kapal_korvet", slug: "kapal_korvet" },
      { keys: ["kapal selam nuklir"], sector: "armada_militer", card: "kapal_selam_nuklir", slug: "kapal_selam_nuklir" },
      { keys: ["kapal selam reguler", "diesel submarine"], sector: "armada_militer", card: "kapal_selam_regular", slug: "kapal_selam_regular" },
      { keys: ["penyapu ranjau", "mine sweeper"], sector: "armada_militer", card: "kapal_ranjau", slug: "kapal_ranjau" },
      { keys: ["kapal logistik", "tanker laut"], sector: "armada_militer", card: "kapal_logistik", slug: "kapal_logistik" },

      // --- ARMADA MILITER: UDARA ---
      { keys: ["jet tempur siluman", "stealth fighter", "f-35", "su-57", "j-20"], sector: "armada_militer", card: "jet_tempur_siluman", slug: "jet_tempur_siluman" },
      { keys: ["jet pencegat", "interceptor", "f-15", "su-30"], sector: "armada_militer", card: "jet_tempur_interceptor", slug: "jet_tempur_interceptor" },
      { keys: ["pembom strategis", "bomber", "b-2", "tu-160"], sector: "armada_militer", card: "pesawat_pengebom", slug: "pesawat_pengebom" },
      { keys: ["helikopter serang", "apache", "mi-28"], sector: "armada_militer", card: "helikopter_serang", slug: "helikopter_serang" },
      { keys: ["pesawat intai", "awacs"], sector: "armada_militer", card: "pesawat_pengintai", slug: "pesawat_pengintai" },
      { keys: ["drone intai", "uav", "predator"], sector: "armada_militer", card: "drone_intai_uav", slug: "drone_intai_uav" },
      { keys: ["drone kamikaze", "loitering munition"], sector: "armada_militer", card: "drone_kamikaze", slug: "drone_kamikaze" },
      { keys: ["pesawat angkut", "hercules"], sector: "armada_militer", card: "pesawat_angkut", slug: "pesawat_angkut" },

      // --- ARMADA POLISI ---
      { keys: ["mabes polri", "markas besar polisi"], sector: "armada_polisi", card: "markas_besar_polri", slug: "markas_besar_polri" },
      { keys: ["akademi kepolisian", "akpol"], sector: "armada_polisi", card: "akademi_kepolisian", slug: "akademi_kepolisian" },
      { keys: ["lab forensik", "identifikasi"], sector: "armada_polisi", card: "pusat_forensik", slug: "pusat_forensik" },
      { keys: ["cctv kota", "surveillance city"], sector: "armada_polisi", card: "network_cctv", slug: "network_cctv" },
      { keys: ["mobil polisi", "patroli polisi"], sector: "armada_polisi", card: "armada_mobil_polisi", slug: "armada_mobil_polisi" },
      { keys: ["pasukan swat", "brimob", "anti teror"], sector: "armada_polisi", card: "pasukan_swat", slug: "pasukan_swat" },
      { keys: ["samapta", "anti huru-hara"], sector: "armada_polisi", card: "samapta", slug: "samapta" },

      // --- MANAJEMEN PERTAHANAN ---
      { keys: ["penjara", "lapas", "lembaga pemasyarakatan"], sector: "manajemen_pertahanan", card: "penjara", slug: "penjara" },
      { keys: ["gudang senjata", "armory"], sector: "manajemen_pertahanan", card: "gudang_senjata", slug: "gudang_senjata" },
      { keys: ["hangar tank", "garasi militer"], sector: "manajemen_pertahanan", card: "hangar_tank", slug: "hangar_tank" },
      { keys: ["pangkalan udara", "airbase"], sector: "manajemen_pertahanan", card: "pangkalan_udara", slug: "pangkalan_udara" },
      { keys: ["pangkalan laut", "naval base"], sector: "manajemen_pertahanan", card: "pangkalan_laut", slug: "pangkalan_laut" },
      { keys: ["program luar angkasa", "antariksa"], sector: "manajemen_pertahanan", card: "program_luar_angkasa", slug: "program_luar_angkasa" },
      { keys: ["pertahanan siber nasional"], sector: "manajemen_pertahanan", card: "pertahanan_siber", slug: "pertahanan_siber" },
    ];

    let cardSlug = "";

    // Priority: Try most specific matches first by checking longer keys first
    for (const entry of smartDictionary) {
      if (entry.keys.some(k => {
        // Use regex for whole-word matching to avoid bug 'kapas' in 'kapasitas'
        const regex = new RegExp(`\\b${k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
        return regex.test(textToSearch);
      })) {
        sector = entry.sector;
        cardId = entry.card;
        cardSlug = (entry as any).slug || entry.card.replace(/^\d+_/, '');
        break;
      }
    }

    return { country: targetCountry, sector, cardId, cardSlug };
  };

  const getTabSlug = (category: string) => {
    switch (category) {
      case 'construction': 
      case 'economy': 
        // These should map to the 'produksi' sector inside the full modal
        return 'produksi';
      case 'diplomacy': 
        return 'diplomasi_hubungan';
      default: 
        return 'produksi';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-black/85 z-[110] flex items-center justify-center animate-in fade-in duration-300 p-4 md:p-8 no-scrollbar">
      <div className="bg-zinc-950 border border-zinc-800 rounded-[40px] w-full max-w-[95vw] h-[82vh] overflow-hidden shadow-2xl flex flex-col relative">
        
        {/* Header Section - Same as Inbox and Production Modals */}
        <div className="px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-500/10 rounded-xl">
              <Newspaper className="h-6 w-6 text-indigo-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight italic uppercase">Pusat Informasi Global</h2>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-0.5">Global Intelligence & World Report</p>
            </div>
          </div>
          <button onClick={onClose} className="p-3 rounded-2xl bg-rose-600 border border-rose-500 hover:bg-rose-500 text-white transition-all cursor-pointer shadow-[0_0_15px_rgba(225,29,72,0.3)] active:scale-95 group flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest pl-1">Tutup</span>
              <X className="h-6 w-6 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Dashboard/Filter Section */}
        <div className="px-8 py-6 bg-zinc-900/20 border-b border-zinc-800/50 flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-6">
             <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-500/10 rounded-lg"><Activity size={16} className="text-indigo-400" /></div>
                <div>
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-none text-nowrap">Total Berita Dunia</p>
                    <p className="text-xl font-black text-white mt-1">{news.length} <span className="text-[10px] opacity-40 font-normal">LAPORAN</span></p>
                </div>
             </div>
             <div className="h-10 w-[1px] bg-zinc-800 self-center"></div>
             <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-500/10 rounded-lg"><Zap size={16} className="text-amber-400" /></div>
                <div>
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-none text-nowrap">Status Global</p>
                    <p className="text-xl font-black text-emerald-500 mt-1">STABIL</p>
                </div>
             </div>
          </div>
          
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
            <input 
              type="text" 
              placeholder="CARI BERITA DUNIA..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-zinc-950/50 border border-zinc-800 rounded-2xl pl-12 pr-6 py-2.5 text-[11px] font-bold text-white placeholder:text-zinc-700 focus:outline-none focus:border-zinc-700 w-80 transition-all"
            />
          </div>
        </div>

        {/* Categories Tabs Section */}
        <div className="px-8 py-4 border-b border-zinc-800/30 bg-zinc-950/30 flex items-center justify-center">
            <div className="flex items-center bg-zinc-900/50 border border-zinc-800/50 p-1.5 rounded-[20px] gap-1 overflow-x-auto no-scrollbar max-w-full">
                {['SEMUA', 'PEMBANGUNAN', 'KEUANGAN', 'PERDAGANGAN', 'KEDUTAAN', 'PAKTA', 'ALIANSI'].map((tab) => {
                    const isActive = (tab === 'SEMUA' && !activeTab) || activeTab === tab;
                    return (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab === 'SEMUA' ? null : tab)}
                            className={`px-6 py-2 rounded-[15px] text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer whitespace-nowrap ${
                                isActive 
                                ? 'bg-zinc-800 text-white shadow-lg' 
                                : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/30'
                            }`}
                        >
                            {tab}
                        </button>
                    )
                })}
            </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 overflow-y-auto p-8 no-scrollbar bg-zinc-950/20">
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredNews.length === 0 ? (
              <div className="h-64 flex flex-col items-center justify-center text-zinc-600">
                <Globe className="h-12 w-12 mb-4 opacity-20" />
                <p className="text-xs font-black uppercase tracking-[0.3em]">Cakrawala Dunia Masih Tenang</p>
              </div>
            ) : (
              // Final deduplication gate to ensure no duplicate keys ever reach the renderer
              Array.from(new Map(filteredNews.map(item => [item.id, item])).values()).map((rawItem) => {
                const item = enrichNewsItem(rawItem);
                const theme = getCategoryTheme(item.category);
                const isExpanded = expandedId === item.id;

                return (
                  <div 
                    key={item.id}
                    className={`group relative bg-zinc-900/30 border border-zinc-800/50 rounded-[32px] overflow-hidden transition-all duration-300 ${
                      isExpanded ? 'ring-1 ring-zinc-700 bg-zinc-900/50' : 'hover:border-zinc-700 hover:bg-zinc-900/40'
                    }`}
                  >
                    <div 
                      className="p-6 cursor-pointer flex items-center justify-between"
                      onClick={() => setExpandedId(isExpanded ? null : item.id)}
                    >
                      <div className="flex items-center gap-6">
                        <div className={`p-4 rounded-2xl bg-zinc-950 border ${theme.border} ${theme.text} ${theme.glow}`}>
                          {theme.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-3">
                            <span className={`text-[9px] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded-md ${theme.bg} ${theme.text}`}>
                              NEWS / {item.category}
                            </span>
                            <span className="text-[10px] text-zinc-500 font-medium flex items-center gap-1.5">
                                <Calendar size={12} /> {item.time}
                            </span>
                          </div>
                          <h4 className="text-lg font-black text-white mt-1 group-hover:text-indigo-400 transition-colors uppercase italic tracking-tight">
                            {item.subject}
                          </h4>
                          <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-widest mt-0.5 underline underline-offset-4 decoration-zinc-800">{item.source}</p>
                        </div>
                      </div>
                      <ChevronRight className={`h-5 w-5 text-zinc-700 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                    </div>

                    {isExpanded && (
                      <div className="px-8 pb-8 pt-2 animate-in slide-in-from-top-4 duration-500">
                        <div className="bg-zinc-950/50 rounded-[24px] p-6 border border-zinc-800/50 relative overflow-hidden">
                          {/* Jurnalistic Quote Style */}
                          <div className="absolute top-0 right-0 p-4 opacity-5">
                             <Newspaper size={120} />
                          </div>
                          
                          <p className="text-zinc-300 text-sm leading-relaxed font-medium whitespace-pre-line relative z-10 border-l-2 border-indigo-500/30 pl-6 py-2">
                            {item.content}
                          </p>

                          <div className="mt-8 pt-6 border-t border-zinc-900 flex items-center justify-between">
                             <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
                                <Info size={14} /> ID: INTEL-{item.id.toUpperCase()}
                             </div>
                              <button
                                 onClick={() => newsStorage.markAsRead(item.id)}
                                 className="text-[10px] font-black uppercase tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors"
                              >
                                 Tandai Telah Dibaca
                              </button>
                              
                              {(() => {
                                const targets = detectNavigationTargets(item);
                                if (!targets) return null;
                                
                                return (
                                  <button
                                    onClick={() => {
                                      onClose();
                                      const countryId = targets.country.name_id.toLowerCase();
                                      // Standardize to info_strategis tab for all detailed views to prevent URL redundancy
                                      const tab = "info_strategis";
                                      const subTab = "detail_lengkap";
                                      const sector = targets.sector;
                                      const cardId = targets.cardId;
                                      const cardSlug = (targets as any).cardSlug || cardId.replace(/^\d+_/, '');

                                      // Update internal state for modal triggering
                                      const fullMenuPath = `CountryModal:${countryId}:${tab}:${subTab}:${sector}:${cardId}`;
                                      setActiveMenu(fullMenuPath);

                                      // Push to browser historical URL
                                      // Pattern: /game/[country]/[tab]/[subtab]/[sector]/[slug]
                                      router.push(`/game/${countryId}/${tab}/${subTab}/${sector}/${cardSlug}`);
                                    }}
                                    className="flex items-center gap-2 group/btn cursor-pointer py-2 px-4 bg-amber-500/10 hover:bg-amber-500 border border-amber-500/30 hover:border-amber-400 rounded-xl transition-all"
                                  >
                                    <TrendingUp size={14} className="text-amber-500 group-hover/btn:text-black transition-colors" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-500 group-hover/btn:text-black transition-colors">
                                      Lihat Detail Negara {targets.country.name_id}
                                    </span>
                                  </button>
                                );
                              })()}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Footer info */}
        <div className="px-8 py-4 bg-zinc-900/30 border-t border-zinc-800/50 flex items-center justify-center text-[10px] text-zinc-600 font-bold uppercase tracking-[0.3em] gap-8">
            <span className="flex items-center gap-1.5"><div className="h-1.5 w-1.5 rounded-full bg-indigo-500"></div> Global Stream Active</span>
            <div className="h-3 w-[1px] bg-zinc-800"></div>
            <span>World Report Surveillance System © 2026 v2.4</span>
        </div>

      </div>
    </div>
  );
}
