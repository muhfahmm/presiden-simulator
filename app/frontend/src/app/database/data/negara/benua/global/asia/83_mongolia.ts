import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { mongolia_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/asia/83_mongolia";

import { mongolia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/asia/83_mongolia";
import { mongolia_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/asia/83_mongolia";
import { mongolia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/asia/83_mongolia";
import { mongolia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/asia/83_mongolia";
import { mongolia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/4_hukum/asia/83_mongolia";
import { mongolia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_infrastruktur/asia/83_mongolia";
import { mongolia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/asia/83_mongolia";
import { mongolia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/3_kesehatan/asia/83_mongolia";
import { mongolia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/asia/83_mongolia";
import { mongolia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/asia/83_mongolia";
import { mongolia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/asia/83_mongolia";
import { mongolia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/5_olahraga/asia/83_mongolia";
import { mongolia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/asia/83_mongolia";
import { mongolia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_pendidikan/asia/83_mongolia";
import { mongolia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/asia/83_mongolia";
import { mongolia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/asia/83_mongolia";
import { mongolia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/asia/83_mongolia";
import { mongolia_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/83_mongolia";
import { mongolia_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/asia/83_mongolia";
const mongolia_geopolitik = {
    "un_vote": 134,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 34,
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

export const mongolia: CountryData = {
  ...mongolia_profile,
  "sektor_listrik": mongolia_listrik,
  "infrastruktur": mongolia_infrastruktur,
  "sektor_ekstraksi": mongolia_ekstraksi,
  "sektor_manufaktur": mongolia_manufaktur,
  "sektor_peternakan": mongolia_peternakan,
  "sektor_agrikultur": mongolia_agrikultur,
  "sektor_perikanan": mongolia_perikanan,
  "sektor_olahan_pangan": mongolia_olahan_pangan,
  "sektor_farmasi": mongolia_farmasi,
  "sektor_pertahanan": mongolia_pertahanan,
  "armada_militer": mongolia_armada,
  "militer_strategis": mongolia_strategis,
  "armada_kepolisian": mongolia_kepolisian,
  "pabrik_militer": mongolia_pabrik,
  "intelijen": mongolia_intelijen,
    "pendidikan": mongolia_pendidikan,
  "kesehatan": mongolia_kesehatan,
  "hukum": mongolia_hukum,
  "sektor_olahraga": mongolia_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 25,
      "kepuasan": 67,
      "pendapatan": 10
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 13
    },
    "penghasilan": {
      "tarif": 23,
      "kepuasan": 61,
      "pendapatan": 11
    },
    "bea_cukai": {
      "tarif": 26,
      "kepuasan": 86,
      "pendapatan": 7
    },
    "lingkungan": {
      "tarif": 37,
      "kepuasan": 88,
      "pendapatan": 16
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 75,
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
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 30800,
    "harga_gula": 28800,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 2600,
    "harga_obat": 157900,
    "harga_pendidikan": 677460
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": mongolia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 31,
    "pendidikan": 6,
    "keamanan": 23,
    "keuangan": 32,
    "lingkungan": 60
  }
};


