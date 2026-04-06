import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { bhutan_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/60_bhutan";

import { bhutan_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/60_bhutan";
import { bhutan_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/60_bhutan";
import { bhutan_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/60_bhutan";
import { bhutan_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/60_bhutan";
import { bhutan_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/60_bhutan";
import { bhutan_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/60_bhutan";
import { bhutan_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/60_bhutan";
import { bhutan_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/60_bhutan";
import { bhutan_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/60_bhutan";
import { bhutan_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/60_bhutan";
import { bhutan_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/60_bhutan";
import { bhutan_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/60_bhutan";
import { bhutan_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/60_bhutan";
import { bhutan_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/60_bhutan";
import { bhutan_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/60_bhutan";
import { bhutan_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/60_bhutan";
import { bhutan_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/60_bhutan";
import { bhutan_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/60_bhutan";
import { bhutan_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/60_bhutan";
import { bhutan_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/60_bhutan";
const bhutan_geopolitik = {
    "un_vote": 149,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 37,
      "kekuatan_keras": 33,
      "prestise_diplomatik": 57
    },
    "organisasi_internasional": [
      {
        "name": "PBB (UN)",
        "role": "Anggota"
      },
      {
        "name": "WHO",
        "role": "Anggota"
      },
      {
        "name": "WTO",
        "role": "Anggota"
      }
    ]
  } as const;

export const bhutan: CountryData = {
  ...bhutan_profile,
  "sektor_listrik": bhutan_listrik,
  "hunian": bhutan_hunian,
  "infrastruktur": bhutan_infrastruktur,
  "sektor_ekstraksi": bhutan_ekstraksi,
  "sektor_manufaktur": bhutan_manufaktur,
  "sektor_peternakan": bhutan_peternakan,
  "sektor_agrikultur": bhutan_agrikultur,
  "sektor_perikanan": bhutan_perikanan,
  "sektor_olahan_pangan": bhutan_olahan_pangan,
  "sektor_farmasi": bhutan_farmasi,
  "sektor_pertahanan": bhutan_pertahanan,
  "armada_militer": bhutan_armada,
  "militer_strategis": bhutan_strategis,
  "armada_kepolisian": bhutan_kepolisian,
  "pabrik_militer": bhutan_pabrik,
  "intelijen": bhutan_intelijen,
    "pendidikan": bhutan_pendidikan,
  "kesehatan": bhutan_kesehatan,
  "hukum": bhutan_hukum,
  "sektor_olahraga": bhutan_olahraga,
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
      "tarif": 28,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 24,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 83280,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 14400,
    "harga_telur": 62200,
    "harga_bbm": 8560,
    "harga_listrik": 3200,
    "harga_air": 10400,
    "harga_obat": 126320,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": bhutan_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 35,
    "pendidikan": 29,
    "keamanan": 10,
    "keuangan": 7,
    "lingkungan": 60
  }
};


