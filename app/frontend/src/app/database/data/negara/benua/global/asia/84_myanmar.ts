import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { myanmar_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/84_myanmar";

import { myanmar_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/84_myanmar";
import { myanmar_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/84_myanmar";
import { myanmar_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/84_myanmar";
import { myanmar_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/84_myanmar";
import { myanmar_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/asia/84_myanmar";
import { myanmar_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/asia/84_myanmar";
import { myanmar_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/84_myanmar";
import { myanmar_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/asia/84_myanmar";
import { myanmar_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/84_myanmar";
import { myanmar_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/84_myanmar";
import { myanmar_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/84_myanmar";
import { myanmar_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/asia/84_myanmar";
import { myanmar_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/84_myanmar";
import { myanmar_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/asia/84_myanmar";
import { myanmar_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/84_myanmar";
import { myanmar_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/84_myanmar";
import { myanmar_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/84_myanmar";
import { myanmar_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/84_myanmar";
import { myanmar_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/84_myanmar";
import { myanmar_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/asia/84_myanmar";
const myanmar_geopolitik = {
    "un_vote": 55,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 15,
      "kekuatan_keras": 2,
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

export const myanmar: CountryData = {
  ...myanmar_profile,
  "sektor_listrik": myanmar_listrik,
  "hunian": myanmar_hunian,
  "infrastruktur": myanmar_infrastruktur,
  "sektor_ekstraksi": myanmar_ekstraksi,
  "sektor_manufaktur": myanmar_manufaktur,
  "sektor_peternakan": myanmar_peternakan,
  "sektor_agrikultur": myanmar_agrikultur,
  "sektor_perikanan": myanmar_perikanan,
  "sektor_olahan_pangan": myanmar_olahan_pangan,
  "sektor_farmasi": myanmar_farmasi,
  "sektor_pertahanan": myanmar_pertahanan,
  "armada_militer": myanmar_armada,
  "militer_strategis": myanmar_strategis,
  "armada_kepolisian": myanmar_kepolisian,
  "pabrik_militer": myanmar_pabrik,
  "intelijen": myanmar_intelijen,
    "pendidikan": myanmar_pendidikan,
  "kesehatan": myanmar_kesehatan,
  "hukum": myanmar_hukum,
  "sektor_olahraga": myanmar_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 12
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 43
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 19
    },
    "bea_cukai": {
      "tarif": 29,
      "kepuasan": 86,
      "pendapatan": 45
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 24
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 9 },
    "lainnya": {
      "tarif": 12,
      "kepuasan": 93,
      "pendapatan": 17
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 4160,
    "harga_obat": 78950,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": myanmar_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 15,
    "pendidikan": 35,
    "keamanan": 2,
    "keuangan": 13,
    "lingkungan": 60
  }
};


