import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { sudan_selatan_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/afrika/50_sudan_selatan";
import { sudan_selatan_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/afrika/50_sudan_selatan";
import { sudan_selatan_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/afrika/50_sudan_selatan";
import { sudan_selatan_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/afrika/50_sudan_selatan";
import { sudan_selatan_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/afrika/50_sudan_selatan";
import { sudan_selatan_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/afrika/50_sudan_selatan";
import { sudan_selatan_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/afrika/50_sudan_selatan";
import { sudan_selatan_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/afrika/50_sudan_selatan";
import { sudan_selatan_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/afrika/50_sudan_selatan";
import { sudan_selatan_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/afrika/50_sudan_selatan";
import { sudan_selatan_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/afrika/50_sudan_selatan";
import { sudan_selatan_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/afrika/50_sudan_selatan";
import { sudan_selatan_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/afrika/50_sudan_selatan";
import { sudan_selatan_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/afrika/50_sudan_selatan";
import { sudan_selatan_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/afrika/50_sudan_selatan";
import { sudan_selatan_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/afrika/50_sudan_selatan";
import { sudan_selatan_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/afrika/50_sudan_selatan";
import { sudan_selatan_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/50_sudan_selatan";
import { sudan_selatan_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/afrika/50_sudan_selatan";
import { sudan_selatan_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/afrika/50_sudan_selatan";

export const sudan_selatan: CountryData = {
  ...sudan_selatan_profile,
  "sektor_listrik": sudan_selatan_listrik,
  "infrastruktur": sudan_selatan_infrastruktur,
  "sektor_ekstraksi": sudan_selatan_ekstraksi,
  "sektor_manufaktur": sudan_selatan_manufaktur,
  "sektor_peternakan": sudan_selatan_peternakan,
  "sektor_agrikultur": sudan_selatan_agrikultur,
  "sektor_perikanan": sudan_selatan_perikanan,
  "sektor_olahan_pangan": sudan_selatan_olahan_pangan,
  "sektor_farmasi": sudan_selatan_farmasi,
  "sektor_pertahanan": sudan_selatan_pertahanan,
  "armada_militer": sudan_selatan_armada,
  "militer_strategis": sudan_selatan_strategis,
  "armada_kepolisian": sudan_selatan_kepolisian,
  "pabrik_militer": sudan_selatan_pabrik,
    "pendidikan": sudan_selatan_pendidikan,
  "kesehatan": sudan_selatan_kesehatan,
  "hukum": sudan_selatan_hukum,
  "sektor_olahraga": sudan_selatan_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 19,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 8,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 15,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 21,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 30,
    "gaji_guru": 40,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 677460
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": sudan_selatan_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 33,
    "pendidikan": 12,
    "keamanan": 20,
    "keuangan": 26,
    "lingkungan": 60
  }
};

