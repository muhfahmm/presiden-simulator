import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { aljazair_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/2_aljazair";

import { aljazair_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/2_aljazair";
import { aljazair_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/2_aljazair";
import { aljazair_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/2_aljazair";
import { aljazair_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/2_aljazair";
import { aljazair_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/4_hukum/afrika/2_aljazair";
import { aljazair_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_infrastruktur/afrika/2_aljazair";
import { aljazair_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/2_aljazair";
import { aljazair_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/3_kesehatan/afrika/2_aljazair";
import { aljazair_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/2_aljazair";
import { aljazair_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/2_aljazair";
import { aljazair_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/2_aljazair";
import { aljazair_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/5_olahraga/afrika/2_aljazair";
import { aljazair_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/2_aljazair";
import { aljazair_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_pendidikan/afrika/2_aljazair";
import { aljazair_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/2_aljazair";
import { aljazair_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/2_aljazair";
import { aljazair_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/2_aljazair";
import { aljazair_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/2_aljazair";
import { aljazair_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/2_aljazair";
const aljazair_geopolitik = {
    "un_vote": 84,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 5,
      "kekuatan_keras": 14,
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

export const aljazair: CountryData = {
  ...aljazair_profile,
  "sektor_listrik": aljazair_listrik,
  "infrastruktur": aljazair_infrastruktur,
  "sektor_ekstraksi": aljazair_ekstraksi,
  "sektor_manufaktur": aljazair_manufaktur,
  "sektor_peternakan": aljazair_peternakan,
  "sektor_agrikultur": aljazair_agrikultur,
  "sektor_perikanan": aljazair_perikanan,
  "sektor_olahan_pangan": aljazair_olahan_pangan,
  "sektor_farmasi": aljazair_farmasi,
  "sektor_pertahanan": aljazair_pertahanan,
  "armada_militer": aljazair_armada,
  "militer_strategis": aljazair_strategis,
  "armada_kepolisian": aljazair_kepolisian,
  "pabrik_militer": aljazair_pabrik,
  "intelijen": aljazair_intelijen,
    "pendidikan": aljazair_pendidikan,
  "kesehatan": aljazair_kesehatan,
  "hukum": aljazair_hukum,
  "sektor_olahraga": aljazair_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 36,
      "kepuasan": 67,
      "pendapatan": 214
    },
    "korporasi": {
      "tarif": 13,
      "kepuasan": 52,
      "pendapatan": 49
    },
    "penghasilan": {
      "tarif": 33,
      "kepuasan": 61,
      "pendapatan": 196
    },
    "bea_cukai": {
      "tarif": 15,
      "kepuasan": 86,
      "pendapatan": 104
    },
    "lingkungan": {
      "tarif": 36,
      "kepuasan": 88,
      "pendapatan": 249
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 12 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 36 },
    "lainnya": {
      "tarif": 21,
      "kepuasan": 93,
      "pendapatan": 126
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 30,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 5350,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": aljazair_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 21,
    "pendidikan": 5,
    "keamanan": 10,
    "keuangan": 12,
    "lingkungan": 60
  }
};


