import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { grenada_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/na/163_grenada";

import { grenada_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/na/163_grenada";
import { grenada_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/na/163_grenada";
import { grenada_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/na/163_grenada";
import { grenada_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/na/163_grenada";
import { grenada_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/na/163_grenada";
import { grenada_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/na/163_grenada";
import { grenada_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/na/163_grenada";
import { grenada_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/na/163_grenada";
import { grenada_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/na/163_grenada";
import { grenada_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/na/163_grenada";
import { grenada_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/na/163_grenada";
import { grenada_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/na/163_grenada";
import { grenada_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/na/163_grenada";
import { grenada_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/na/163_grenada";
import { grenada_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/na/163_grenada";
import { grenada_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/na/163_grenada";
import { grenada_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/na/163_grenada";
import { grenada_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/na/163_grenada";
import { grenada_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/na/163_grenada";
import { grenada_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/na/163_grenada";
const grenada_geopolitik = {
    "un_vote": 63,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 23,
      "kekuatan_keras": 18,
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

export const grenada: CountryData = {
  ...grenada_profile,
  "sektor_listrik": grenada_listrik,
  "hunian": grenada_hunian,
  "infrastruktur": grenada_infrastruktur,
  "sektor_ekstraksi": grenada_ekstraksi,
  "sektor_manufaktur": grenada_manufaktur,
  "sektor_peternakan": grenada_peternakan,
  "sektor_agrikultur": grenada_agrikultur,
  "sektor_perikanan": grenada_perikanan,
  "sektor_olahan_pangan": grenada_olahan_pangan,
  "sektor_farmasi": grenada_farmasi,
  "sektor_pertahanan": grenada_pertahanan,
  "armada_militer": grenada_armada,
  "militer_strategis": grenada_strategis,
  "armada_kepolisian": grenada_kepolisian,
  "pabrik_militer": grenada_pabrik,
  "intelijen": grenada_intelijen,
    "pendidikan": grenada_pendidikan,
  "kesehatan": grenada_kesehatan,
  "hukum": grenada_hukum,
  "sektor_olahraga": grenada_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 6,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 22,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 36,
      "kepuasan": 61,
      "pendapatan": 10
    },
    "bea_cukai": {
      "tarif": 12,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 18,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 33,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 315800,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": grenada_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 8,
    "pendidikan": 35,
    "keamanan": 12,
    "keuangan": 9,
    "lingkungan": 60
  }
};


