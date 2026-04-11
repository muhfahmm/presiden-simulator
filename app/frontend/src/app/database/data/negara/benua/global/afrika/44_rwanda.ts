import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { rwanda_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/44_rwanda";

import { rwanda_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/44_rwanda";
import { rwanda_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/44_rwanda";
import { rwanda_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/44_rwanda";
import { rwanda_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/44_rwanda";
import { rwanda_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/44_rwanda";
import { rwanda_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/44_rwanda";
import { rwanda_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/44_rwanda";
import { rwanda_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/44_rwanda";
import { rwanda_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/44_rwanda";
import { rwanda_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/44_rwanda";
import { rwanda_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/44_rwanda";
import { rwanda_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/44_rwanda";
import { rwanda_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/44_rwanda";
import { rwanda_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/44_rwanda";
import { rwanda_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/44_rwanda";
import { rwanda_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/44_rwanda";
import { rwanda_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/44_rwanda";
import { rwanda_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/44_rwanda";
import { rwanda_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/44_rwanda";
import { rwanda_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/44_rwanda";
const rwanda_geopolitik = {
    "un_vote": 50,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 12,
      "kekuatan_keras": 15,
      "prestise_diplomatik": 57
  }
  } as const;

export const rwanda: CountryData = {
  ...rwanda_profile,
  "sektor_listrik": rwanda_listrik,
  "hunian": rwanda_hunian,
  "infrastruktur": rwanda_infrastruktur,
  "sektor_ekstraksi": rwanda_ekstraksi,
  "sektor_manufaktur": rwanda_manufaktur,
  "sektor_peternakan": rwanda_peternakan,
  "sektor_agrikultur": rwanda_agrikultur,
  "sektor_perikanan": rwanda_perikanan,
  "sektor_olahan_pangan": rwanda_olahan_pangan,
  "sektor_farmasi": rwanda_farmasi,
  "sektor_pertahanan": rwanda_pertahanan,
  "armada_militer": rwanda_armada,
  "militer_strategis": rwanda_strategis,
  "armada_kepolisian": rwanda_kepolisian,
  "pabrik_militer": rwanda_pabrik,
  "intelijen": rwanda_intelijen,
    "pendidikan": rwanda_pendidikan,
  "kesehatan": rwanda_kesehatan,
  "hukum": rwanda_hukum,
  "sektor_olahraga": rwanda_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 31,
      "kepuasan": 67,
      "pendapatan": 8
    },
    "korporasi": {
      "tarif": 2,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 1,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 11,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 33,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 78950,
    "harga_pendidikan": 967800
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": rwanda_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 5,
    "pendidikan": 19,
    "keamanan": 24,
    "keuangan": 34,
    "lingkungan": 60
  }
};


