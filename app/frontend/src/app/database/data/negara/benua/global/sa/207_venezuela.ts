import { CountryData } from "@/app/database/data/types";
import { venezuela_agrikultur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/5_sektor_agrikultur/sa/207_venezuela";
import { venezuela_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/sa/207_venezuela";
import { venezuela_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/2_sektor_mineral_kritis/sa/207_venezuela";
import { venezuela_farmasi } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/8_sektor_farmasi/sa/207_venezuela";
import { venezuela_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/sa/207_venezuela";
import { venezuela_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/9_infrastruktur/sa/207_venezuela";
import { venezuela_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/sa/207_venezuela";
import { venezuela_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/sa/207_venezuela";
import { venezuela_listrik } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/1_sektor_listrik_nasional/sa/207_venezuela";
import { venezuela_manufaktur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/3_manufaktur/sa/207_venezuela";
import { venezuela_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/7_sektor_olahan_pangan/sa/207_venezuela";
import { venezuela_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/sa/207_venezuela";
import { venezuela_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/sa/207_venezuela";
import { venezuela_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/sa/207_venezuela";
import { venezuela_perikanan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/6_sektor_perikanan/sa/207_venezuela";
import { venezuela_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/sa/207_venezuela";
import { venezuela_peternakan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/4_sektor_peternakan/sa/207_venezuela";
import { venezuela_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/sa/207_venezuela";
import { venezuela_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/sa/207_venezuela";
import { venezuela_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/sa/207_venezuela";

export const venezuela: CountryData = {
  ...venezuela_profile,
  "sektor_listrik": venezuela_listrik,
  "infrastruktur": venezuela_infrastruktur,
  "sektor_ekstraksi": venezuela_ekstraksi,
  "sektor_manufaktur": venezuela_manufaktur,
  "sektor_peternakan": venezuela_peternakan,
  "sektor_agrikultur": venezuela_agrikultur,
  "sektor_perikanan": venezuela_perikanan,
  "sektor_olahan_pangan": venezuela_olahan_pangan,
  "sektor_farmasi": venezuela_farmasi,
  "sektor_pertahanan": venezuela_pertahanan,
  "armada_militer": venezuela_armada,
  "militer_strategis": venezuela_strategis,
  "armada_kepolisian": venezuela_kepolisian,
  "pabrik_militer": venezuela_pabrik,
    "pendidikan": venezuela_pendidikan,
  "kesehatan": venezuela_kesehatan,
  "hukum": venezuela_hukum,
  "sektor_olahraga": venezuela_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 37,
      "kepuasan": 67,
      "pendapatan": 75
    },
    "korporasi": {
      "tarif": 8,
      "kepuasan": 52,
      "pendapatan": 19
    },
    "penghasilan": {
      "tarif": 4,
      "kepuasan": 61,
      "pendapatan": 10
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 85
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 41
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 5 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 14 },
    "lainnya": {
      "tarif": 4,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 21560,
    "harga_gula": 20160,
    "harga_telur": 15550,
    "harga_bbm": 8560,
    "harga_listrik": 3200,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 241950
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": venezuela_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 28,
    "pendidikan": 26,
    "keamanan": 11,
    "keuangan": 8,
    "lingkungan": 60
  }
};

