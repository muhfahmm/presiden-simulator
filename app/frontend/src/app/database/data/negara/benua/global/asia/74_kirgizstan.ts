import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { kirgizstan_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/asia/74_kirgizstan";
import { kirgizstan_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/asia/74_kirgizstan";
import { kirgizstan_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/asia/74_kirgizstan";
import { kirgizstan_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/asia/74_kirgizstan";
import { kirgizstan_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/asia/74_kirgizstan";
import { kirgizstan_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/asia/74_kirgizstan";
import { kirgizstan_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/asia/74_kirgizstan";
import { kirgizstan_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/asia/74_kirgizstan";
import { kirgizstan_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/asia/74_kirgizstan";
import { kirgizstan_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/asia/74_kirgizstan";
import { kirgizstan_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/asia/74_kirgizstan";
import { kirgizstan_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/asia/74_kirgizstan";
import { kirgizstan_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/asia/74_kirgizstan";
import { kirgizstan_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/asia/74_kirgizstan";
import { kirgizstan_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/asia/74_kirgizstan";
import { kirgizstan_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/asia/74_kirgizstan";
import { kirgizstan_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/asia/74_kirgizstan";
import { kirgizstan_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/74_kirgizstan";
import { kirgizstan_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/asia/74_kirgizstan";
import { kirgizstan_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/asia/74_kirgizstan";

export const kirgizstan: CountryData = {
  ...kirgizstan_profile,
  "sektor_listrik": kirgizstan_listrik,
  "infrastruktur": kirgizstan_infrastruktur,
  "sektor_ekstraksi": kirgizstan_ekstraksi,
  "sektor_manufaktur": kirgizstan_manufaktur,
  "sektor_peternakan": kirgizstan_peternakan,
  "sektor_agrikultur": kirgizstan_agrikultur,
  "sektor_perikanan": kirgizstan_perikanan,
  "sektor_olahan_pangan": kirgizstan_olahan_pangan,
  "sektor_farmasi": kirgizstan_farmasi,
  "sektor_pertahanan": kirgizstan_pertahanan,
  "armada_militer": kirgizstan_armada,
  "militer_strategis": kirgizstan_strategis,
  "armada_kepolisian": kirgizstan_kepolisian,
  "pabrik_militer": kirgizstan_pabrik,
    "pendidikan": kirgizstan_pendidikan,
  "kesehatan": kirgizstan_kesehatan,
  "hukum": kirgizstan_hukum,
  "sektor_olahraga": kirgizstan_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 34,
      "kepuasan": 67,
      "pendapatan": 6
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 38,
      "kepuasan": 61,
      "pendapatan": 9
    },
    "bea_cukai": {
      "tarif": 9,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 5,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 800,
    "harga_air": 5200,
    "harga_obat": 315800,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kirgizstan_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 16,
    "pendidikan": 1,
    "keamanan": 37,
    "keuangan": 26,
    "lingkungan": 60
  }
};

