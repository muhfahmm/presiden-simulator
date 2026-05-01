export const ukraina_profile = {
  "name_en": "Ukraine",
  "capital": "Kyiv",
  "name_id": "Ukraina",
  "lon": 30.52,
  "lat": 50.45,
  "flag": "🇺🇦",
  "jumlah_penduduk": 44622516,
  "anggaran": 1556,
  "pendapatan_nasional": "4445",
  "religion": "Kristen Ortodoks",
  "ideology": "Demokrasi"
} as const;

import { ukraina_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/6_komersial/eropa/149_ukraina";
import { ukraina_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/7_hiburan/eropa/149_ukraina";
import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { ukraina_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/149_ukraina";

import { ukraina_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/149_ukraina";
import { ukraina_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/149_ukraina";
import { ukraina_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/149_ukraina";
import { ukraina_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/149_ukraina";
import { ukraina_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/eropa/149_ukraina";
import { ukraina_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/eropa/149_ukraina";
import { ukraina_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/149_ukraina";
import { ukraina_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/eropa/149_ukraina";
import { ukraina_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/149_ukraina";
import { ukraina_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/149_ukraina";
import { ukraina_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/149_ukraina";
import { ukraina_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/eropa/149_ukraina";
import { ukraina_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/149_ukraina";
import { ukraina_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/eropa/149_ukraina";
import { ukraina_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/149_ukraina";
import { ukraina_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/149_ukraina";
import { ukraina_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/149_ukraina";
import { ukraina_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/149_ukraina";
import { ukraina_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/eropa/149_ukraina";
const ukraina_geopolitik = {
    "un_vote": 205,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 36,
      "kekuatan_keras": 39,
      "prestise_diplomatik": 57
    }
  } as const;

export const ukraina: CountryData = {
  ...ukraina_profile,
  "sektor_listrik": ukraina_listrik,
  "hunian": ukraina_hunian,
  "infrastruktur": ukraina_infrastruktur,
  "sektor_ekstraksi": ukraina_ekstraksi,
  "sektor_manufaktur": ukraina_manufaktur,
  "sektor_peternakan": ukraina_peternakan,
  "sektor_agrikultur": ukraina_agrikultur,
  "sektor_perikanan": ukraina_perikanan,
  "sektor_olahan_pangan": ukraina_olahan_pangan,
  "sektor_farmasi": ukraina_farmasi,
  "sektor_pertahanan": ukraina_pertahanan,
  "armada_militer": ukraina_armada,
  "militer_strategis": ukraina_strategis,
  "armada_kepolisian": ukraina_kepolisian,
  "pabrik_militer": ukraina_pabrik,
  "intelijen": ukraina_intelijen,
    "pendidikan": ukraina_pendidikan,
  "kesehatan": ukraina_kesehatan,
  "hukum": ukraina_hukum,
  "sektor_olahraga": ukraina_olahraga,
  "sektor_komersial": ukraina_komersial,
  "sektor_hiburan": ukraina_hiburan,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 2,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 13,
      "kepuasan": 52,
      "pendapatan": 20
    },
    "penghasilan": {
      "tarif": 19,
      "kepuasan": 61,
      "pendapatan": 34
    },
    "bea_cukai": {
      "tarif": 30,
      "kepuasan": 86,
      "pendapatan": 85
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 8 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 24 },
    "lainnya": {
      "tarif": 2,
      "kepuasan": 93,
      "pendapatan": 5
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 7280,
    "harga_obat": 315800,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": ukraina_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 16,
    "pendidikan": 6,
    "keamanan": 1,
    "keuangan": 28,
    "lingkungan": 60
  }
};


