import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { afganistan_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/54_afganistan";

import { afganistan_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/54_afganistan";
import { afganistan_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/54_afganistan";
import { afganistan_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/54_afganistan";
import { afganistan_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/54_afganistan";
import { afganistan_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/4_hukum/asia/54_afganistan";
import { afganistan_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_infrastruktur/asia/54_afganistan";
import { afganistan_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/54_afganistan";
import { afganistan_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/3_kesehatan/asia/54_afganistan";
import { afganistan_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/54_afganistan";
import { afganistan_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/54_afganistan";
import { afganistan_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/54_afganistan";
import { afganistan_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/5_olahraga/asia/54_afganistan";
import { afganistan_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/54_afganistan";
import { afganistan_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_pendidikan/asia/54_afganistan";
import { afganistan_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/54_afganistan";
import { afganistan_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/54_afganistan";
import { afganistan_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/54_afganistan";
import { afganistan_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/54_afganistan";
import { afganistan_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/54_afganistan";
const afganistan_geopolitik = {
    "un_vote": 126,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 25,
      "kekuatan_keras": 22,
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

export const afganistan: CountryData = {
  ...afganistan_profile,
  "sektor_listrik": afganistan_listrik,
  "infrastruktur": afganistan_infrastruktur,
  "sektor_ekstraksi": afganistan_ekstraksi,
  "sektor_manufaktur": afganistan_manufaktur,
  "sektor_peternakan": afganistan_peternakan,
  "sektor_agrikultur": afganistan_agrikultur,
  "sektor_perikanan": afganistan_perikanan,
  "sektor_olahan_pangan": afganistan_olahan_pangan,
  "sektor_farmasi": afganistan_farmasi,
  "sektor_pertahanan": afganistan_pertahanan,
  "armada_militer": afganistan_armada,
  "militer_strategis": afganistan_strategis,
  "armada_kepolisian": afganistan_kepolisian,
  "pabrik_militer": afganistan_pabrik,
  "intelijen": afganistan_intelijen,
    "pendidikan": afganistan_pendidikan,
  "kesehatan": afganistan_kesehatan,
  "hukum": afganistan_hukum,
  "sektor_olahraga": afganistan_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 15,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 12
    },
    "lingkungan": {
      "tarif": 12,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 38,
      "kepuasan": 93,
      "pendapatan": 11
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 60,
    "gaji_medis": 60,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 24880,
    "harga_bbm": 5350,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 677460
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": afganistan_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 33,
    "pendidikan": 28,
    "keamanan": 19,
    "keuangan": 39,
    "lingkungan": 60
  }
};


