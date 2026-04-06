import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { guinea_bissau_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/17_guinea_bissau";

import { guinea_bissau_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/17_guinea_bissau";
import { guinea_bissau_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/17_guinea_bissau";
import { guinea_bissau_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/17_guinea_bissau";
import { guinea_bissau_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/17_guinea_bissau";
import { guinea_bissau_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/17_guinea_bissau";
import { guinea_bissau_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/17_guinea_bissau";
import { guinea_bissau_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/17_guinea_bissau";
import { guinea_bissau_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/17_guinea_bissau";
import { guinea_bissau_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/17_guinea_bissau";
import { guinea_bissau_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/17_guinea_bissau";
import { guinea_bissau_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/17_guinea_bissau";
import { guinea_bissau_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/17_guinea_bissau";
import { guinea_bissau_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/17_guinea_bissau";
import { guinea_bissau_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/17_guinea_bissau";
import { guinea_bissau_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/17_guinea_bissau";
import { guinea_bissau_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/17_guinea_bissau";
import { guinea_bissau_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/17_guinea_bissau";
import { guinea_bissau_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/17_guinea_bissau";
import { guinea_bissau_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/17_guinea_bissau";
import { guinea_bissau_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/17_guinea_bissau";
const guinea_bissau_geopolitik = {
    "un_vote": 100,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 28,
      "kekuatan_keras": 30,
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

export const guinea_bissau: CountryData = {
  ...guinea_bissau_profile,
  "sektor_listrik": guinea_bissau_listrik,
  "hunian": guinea_bissau_hunian,
  "infrastruktur": guinea_bissau_infrastruktur,
  "sektor_ekstraksi": guinea_bissau_ekstraksi,
  "sektor_manufaktur": guinea_bissau_manufaktur,
  "sektor_peternakan": guinea_bissau_peternakan,
  "sektor_agrikultur": guinea_bissau_agrikultur,
  "sektor_perikanan": guinea_bissau_perikanan,
  "sektor_olahan_pangan": guinea_bissau_olahan_pangan,
  "sektor_farmasi": guinea_bissau_farmasi,
  "sektor_pertahanan": guinea_bissau_pertahanan,
  "armada_militer": guinea_bissau_armada,
  "militer_strategis": guinea_bissau_strategis,
  "armada_kepolisian": guinea_bissau_kepolisian,
  "pabrik_militer": guinea_bissau_pabrik,
  "intelijen": guinea_bissau_intelijen,
    "pendidikan": guinea_bissau_pendidikan,
  "kesehatan": guinea_bissau_kesehatan,
  "hukum": guinea_bissau_hukum,
  "sektor_olahraga": guinea_bissau_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 31,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 21,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 12,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 16,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 126320,
    "harga_pendidikan": 967800
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": guinea_bissau_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 21,
    "pendidikan": 25,
    "keamanan": 25,
    "keuangan": 32,
    "lingkungan": 60
  }
};


