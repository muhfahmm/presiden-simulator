import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { amerika_serikat_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/na/152_amerika_serikat";

import { amerika_serikat_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/na/152_amerika_serikat";
import { amerika_serikat_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/na/152_amerika_serikat";
import { amerika_serikat_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/na/152_amerika_serikat";
import { amerika_serikat_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/na/152_amerika_serikat";
import { amerika_serikat_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/na/152_amerika_serikat";
import { amerika_serikat_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/na/152_amerika_serikat";
import { amerika_serikat_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/na/152_amerika_serikat";
import { amerika_serikat_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/na/152_amerika_serikat";
import { amerika_serikat_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/na/152_amerika_serikat";
import { amerika_serikat_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/na/152_amerika_serikat";
import { amerika_serikat_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/na/152_amerika_serikat";
import { amerika_serikat_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/na/152_amerika_serikat";
import { amerika_serikat_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/na/152_amerika_serikat";
import { amerika_serikat_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/na/152_amerika_serikat";
import { amerika_serikat_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/na/152_amerika_serikat";
import { amerika_serikat_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/na/152_amerika_serikat";
import { amerika_serikat_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/na/152_amerika_serikat";
import { amerika_serikat_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/na/152_amerika_serikat";
import { amerika_serikat_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/na/152_amerika_serikat";
import { amerika_serikat_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/na/152_amerika_serikat";
const amerika_serikat_geopolitik = {
    "un_vote": 203,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 25,
      "kekuatan_keras": 15,
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

export const amerika_serikat: CountryData = {
  ...amerika_serikat_profile,
  "sektor_listrik": amerika_serikat_listrik,
  "hunian": amerika_serikat_hunian,
  "infrastruktur": amerika_serikat_infrastruktur,
  "sektor_ekstraksi": amerika_serikat_ekstraksi,
  "sektor_manufaktur": amerika_serikat_manufaktur,
  "sektor_peternakan": amerika_serikat_peternakan,
  "sektor_agrikultur": amerika_serikat_agrikultur,
  "sektor_perikanan": amerika_serikat_perikanan,
  "sektor_olahan_pangan": amerika_serikat_olahan_pangan,
  "sektor_farmasi": amerika_serikat_farmasi,
  "sektor_pertahanan": amerika_serikat_pertahanan,
  "armada_militer": amerika_serikat_armada,
  "militer_strategis": amerika_serikat_strategis,
  "armada_kepolisian": amerika_serikat_kepolisian,
  "pabrik_militer": amerika_serikat_pabrik,
  "intelijen": amerika_serikat_intelijen,
    "pendidikan": amerika_serikat_pendidikan,
  "kesehatan": amerika_serikat_kesehatan,
  "hukum": amerika_serikat_hukum,
  "sektor_olahraga": amerika_serikat_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 35,
      "kepuasan": 67,
      "pendapatan": 28175
    },
    "korporasi": {
      "tarif": 28,
      "kepuasan": 52,
      "pendapatan": 19391
    },
    "penghasilan": {
      "tarif": 21,
      "kepuasan": 61,
      "pendapatan": 5914
    },
    "bea_cukai": {
      "tarif": 4,
      "kepuasan": 86,
      "pendapatan": 2690
    },
    "lingkungan": {
      "tarif": 18,
      "kepuasan": 88,
      "pendapatan": 7054
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1401 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 4201 },
    "lainnya": {
      "tarif": 13,
      "kepuasan": 93,
      "pendapatan": 4046
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 5350,
    "harga_listrik": 800,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 967800
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": amerika_serikat_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 6,
    "pendidikan": 13,
    "keamanan": 35,
    "keuangan": 32,
    "lingkungan": 60
  }
};


