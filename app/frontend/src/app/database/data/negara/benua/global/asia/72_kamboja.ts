import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { kamboja_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/72_kamboja";

import { kamboja_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/72_kamboja";
import { kamboja_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/72_kamboja";
import { kamboja_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/72_kamboja";
import { kamboja_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/72_kamboja";
import { kamboja_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/72_kamboja";
import { kamboja_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/72_kamboja";
import { kamboja_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/72_kamboja";
import { kamboja_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/72_kamboja";
import { kamboja_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/72_kamboja";
import { kamboja_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/72_kamboja";
import { kamboja_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/72_kamboja";
import { kamboja_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/72_kamboja";
import { kamboja_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/72_kamboja";
import { kamboja_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/72_kamboja";
import { kamboja_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/72_kamboja";
import { kamboja_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/72_kamboja";
import { kamboja_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/72_kamboja";
import { kamboja_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/72_kamboja";
import { kamboja_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/72_kamboja";
import { kamboja_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/72_kamboja";
const kamboja_geopolitik = {
    "un_vote": 166,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 28,
      "kekuatan_keras": 29,
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

export const kamboja: CountryData = {
  ...kamboja_profile,
  "sektor_listrik": kamboja_listrik,
  "hunian": kamboja_hunian,
  "infrastruktur": kamboja_infrastruktur,
  "sektor_ekstraksi": kamboja_ekstraksi,
  "sektor_manufaktur": kamboja_manufaktur,
  "sektor_peternakan": kamboja_peternakan,
  "sektor_agrikultur": kamboja_agrikultur,
  "sektor_perikanan": kamboja_perikanan,
  "sektor_olahan_pangan": kamboja_olahan_pangan,
  "sektor_farmasi": kamboja_farmasi,
  "sektor_pertahanan": kamboja_pertahanan,
  "armada_militer": kamboja_armada,
  "militer_strategis": kamboja_strategis,
  "armada_kepolisian": kamboja_kepolisian,
  "pabrik_militer": kamboja_pabrik,
  "intelijen": kamboja_intelijen,
    "pendidikan": kamboja_pendidikan,
  "kesehatan": kamboja_kesehatan,
  "hukum": kamboja_hukum,
  "sektor_olahraga": kamboja_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 40,
      "kepuasan": 67,
      "pendapatan": 17
    },
    "korporasi": {
      "tarif": 25,
      "kepuasan": 52,
      "pendapatan": 18
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 10
    },
    "bea_cukai": {
      "tarif": 19,
      "kepuasan": 86,
      "pendapatan": 13
    },
    "lingkungan": {
      "tarif": 30,
      "kepuasan": 88,
      "pendapatan": 12
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 18
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 315800,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kamboja_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 35,
    "pendidikan": 16,
    "keamanan": 14,
    "keuangan": 39,
    "lingkungan": 60
  }
};


