import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { nigeria_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/afrika/35_nigeria";

import { nigeria_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/35_nigeria";
import { nigeria_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/afrika/35_nigeria";
import { nigeria_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/35_nigeria";
import { nigeria_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/35_nigeria";
import { nigeria_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/4_hukum/afrika/35_nigeria";
import { nigeria_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/1_infrastruktur/afrika/35_nigeria";
import { nigeria_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/afrika/35_nigeria";
import { nigeria_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/3_kesehatan/afrika/35_nigeria";
import { nigeria_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/35_nigeria";
import { nigeria_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/35_nigeria";
import { nigeria_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/35_nigeria";
import { nigeria_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/5_olahraga/afrika/35_nigeria";
import { nigeria_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/35_nigeria";
import { nigeria_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_Layanan Publik/2_pendidikan/afrika/35_nigeria";
import { nigeria_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/35_nigeria";
import { nigeria_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/afrika/35_nigeria";
import { nigeria_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/35_nigeria";
import { nigeria_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/35_nigeria";
import { nigeria_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/afrika/35_nigeria";
import { nigeria_hunian } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_hunian_permukiman/afrika/35_nigeria";
const nigeria_geopolitik = {
    "un_vote": 175,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 37,
      "kekuatan_keras": 1,
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

export const nigeria: CountryData = {
  ...nigeria_profile,
  "sektor_listrik": nigeria_listrik,
  "hunian": nigeria_hunian,
  "infrastruktur": nigeria_infrastruktur,
  "sektor_ekstraksi": nigeria_ekstraksi,
  "sektor_manufaktur": nigeria_manufaktur,
  "sektor_peternakan": nigeria_peternakan,
  "sektor_agrikultur": nigeria_agrikultur,
  "sektor_perikanan": nigeria_perikanan,
  "sektor_olahan_pangan": nigeria_olahan_pangan,
  "sektor_farmasi": nigeria_farmasi,
  "sektor_pertahanan": nigeria_pertahanan,
  "armada_militer": nigeria_armada,
  "militer_strategis": nigeria_strategis,
  "armada_kepolisian": nigeria_kepolisian,
  "pabrik_militer": nigeria_pabrik,
  "intelijen": nigeria_intelijen,
    "pendidikan": nigeria_pendidikan,
  "kesehatan": nigeria_kesehatan,
  "hukum": nigeria_hukum,
  "sektor_olahraga": nigeria_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 10,
      "kepuasan": 67,
      "pendapatan": 99
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 255
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 323
    },
    "bea_cukai": {
      "tarif": 17,
      "kepuasan": 86,
      "pendapatan": 131
    },
    "lingkungan": {
      "tarif": 10,
      "kepuasan": 88,
      "pendapatan": 58
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 24 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 70 },
    "lainnya": {
      "tarif": 21,
      "kepuasan": 93,
      "pendapatan": 236
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 40,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 30800,
    "harga_gula": 7200,
    "harga_telur": 43540,
    "harga_bbm": 14980,
    "harga_listrik": 2240,
    "harga_air": 10400,
    "harga_obat": 78950,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": nigeria_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 34,
    "pendidikan": 15,
    "keamanan": 26,
    "keuangan": 21,
    "lingkungan": 60
  }
};


