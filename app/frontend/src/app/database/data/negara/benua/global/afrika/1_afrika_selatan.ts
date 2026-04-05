import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { afrika_selatan_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/1_afrika_selatan";

import { afrika_selatan_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/1_afrika_selatan";
import { afrika_selatan_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/1_afrika_selatan";
import { afrika_selatan_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/1_afrika_selatan";
import { afrika_selatan_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/1_afrika_selatan";
import { afrika_selatan_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/4_hukum/afrika/1_afrika_selatan";
import { afrika_selatan_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_infrastruktur/afrika/1_afrika_selatan";
import { afrika_selatan_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/1_afrika_selatan";
import { afrika_selatan_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/3_kesehatan/afrika/1_afrika_selatan";
import { afrika_selatan_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/1_afrika_selatan";
import { afrika_selatan_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/1_afrika_selatan";
import { afrika_selatan_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/1_afrika_selatan";
import { afrika_selatan_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/5_olahraga/afrika/1_afrika_selatan";
import { afrika_selatan_komersial } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/6_komersial/afrika/1_afrika_selatan";
import { afrika_selatan_hiburan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/7_hiburan/afrika/1_afrika_selatan";
import { afrika_selatan_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/1_afrika_selatan";
import { afrika_selatan_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_pendidikan/afrika/1_afrika_selatan";
import { afrika_selatan_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/1_afrika_selatan";
import { afrika_selatan_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/1_afrika_selatan";
import { afrika_selatan_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/1_afrika_selatan";
import { afrika_selatan_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/1_afrika_selatan";
import { afrika_selatan_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/1_afrika_selatan";
const afrika_selatan_geopolitik = {
    "un_vote": 188,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 34,
      "kekuatan_keras": 7,
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

export const afrika_selatan: CountryData = {
  ...afrika_selatan_profile,
  "sektor_listrik": afrika_selatan_listrik,
  "infrastruktur": afrika_selatan_infrastruktur,
  "sektor_ekstraksi": afrika_selatan_ekstraksi,
  "sektor_manufaktur": afrika_selatan_manufaktur,
  "sektor_peternakan": afrika_selatan_peternakan,
  "sektor_agrikultur": afrika_selatan_agrikultur,
  "sektor_perikanan": afrika_selatan_perikanan,
  "sektor_olahan_pangan": afrika_selatan_olahan_pangan,
  "sektor_farmasi": afrika_selatan_farmasi,
  "sektor_pertahanan": afrika_selatan_pertahanan,
  "armada_militer": afrika_selatan_armada,
  "militer_strategis": afrika_selatan_strategis,
  "armada_kepolisian": afrika_selatan_kepolisian,
  "pabrik_militer": afrika_selatan_pabrik,
  "intelijen": afrika_selatan_intelijen,
    "pendidikan": afrika_selatan_pendidikan,
  "kesehatan": afrika_selatan_kesehatan,
  "hukum": afrika_selatan_hukum,
  "sektor_olahraga": afrika_selatan_olahraga,
  "sektor_komersial": afrika_selatan_komersial,
  "sektor_hiburan": afrika_selatan_hiburan,
  // =============================================================
  // 11. Ã°Å¸â€™Â° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 1,
      "kepuasan": 67,
      "pendapatan": 9
    },
    "korporasi": {
      "tarif": 18,
      "kepuasan": 52,
      "pendapatan": 157
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 367
    },
    "bea_cukai": {
      "tarif": 6,
      "kepuasan": 86,
      "pendapatan": 64
    },
    "lingkungan": {
      "tarif": 12,
      "kepuasan": 88,
      "pendapatan": 83
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 20 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 60 },
    "lainnya": {
      "tarif": 13,
      "kepuasan": 93,
      "pendapatan": 134
    }
  },
  // =============================================================
  // 12. Ã°Å¸â€™Â° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 30,
    "gaji_guru": 50,
    "gaji_medis": 60,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. Ã°Å¸â€ºâ€™ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 221060,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. Ã°Å¸Å’Â GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": afrika_selatan_geopolitik,
  // =============================================================
  // 16. Ã°Å¸Ââ€ºÃ¯Â¸Â KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 13,
    "pendidikan": 24,
    "keamanan": 40,
    "keuangan": 37,
    "lingkungan": 60
  }
};



