import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { burundi_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/7_burundi";
import { burundi_armada } from "@/app/database/data/semua_fitur_negara/4_pertahanan/2_armada_militer/afrika/7_burundi";
import { burundi_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/7_burundi";
import { burundi_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/7_burundi";
import { burundi_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/4_hukum/afrika/7_burundi";
import { burundi_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_infrastruktur/afrika/7_burundi";
import { burundi_kepolisian } from "@/app/database/data/semua_fitur_negara/4_pertahanan/4_armada_kepolisian/afrika/7_burundi";
import { burundi_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/3_kesehatan/afrika/7_burundi";
import { burundi_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/7_burundi";
import { burundi_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/7_burundi";
import { burundi_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/7_burundi";
import { burundi_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/5_olahraga/afrika/7_burundi";
import { burundi_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/7_burundi";
import { burundi_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_pendidikan/afrika/7_burundi";
import { burundi_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/7_burundi";
import { burundi_pertahanan } from "@/app/database/data/semua_fitur_negara/4_pertahanan/1_manajemen_pertahanan/1_sektor_pertahanan/afrika/7_burundi";
import { burundi_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/7_burundi";
import { burundi_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/7_burundi";
import { burundi_strategis } from "@/app/database/data/semua_fitur_negara/4_pertahanan/3_militer_strategis/afrika/7_burundi";
const burundi_geopolitik = {
    "un_vote": 37,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 9,
      "kekuatan_keras": 23,
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

export const burundi: CountryData = {
  ...burundi_profile,
  "sektor_listrik": burundi_listrik,
  "infrastruktur": burundi_infrastruktur,
  "sektor_ekstraksi": burundi_ekstraksi,
  "sektor_manufaktur": burundi_manufaktur,
  "sektor_peternakan": burundi_peternakan,
  "sektor_agrikultur": burundi_agrikultur,
  "sektor_perikanan": burundi_perikanan,
  "sektor_olahan_pangan": burundi_olahan_pangan,
  "sektor_farmasi": burundi_farmasi,
  "sektor_pertahanan": burundi_pertahanan,
  "armada_militer": burundi_armada,
  "militer_strategis": burundi_strategis,
  "armada_kepolisian": burundi_kepolisian,
  "pabrik_militer": burundi_pabrik,
    "pendidikan": burundi_pendidikan,
  "kesehatan": burundi_kesehatan,
  "hukum": burundi_hukum,
  "sektor_olahraga": burundi_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 5,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 27,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 50,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 25,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 21400,
    "harga_listrik": 1280,
    "harga_air": 10400,
    "harga_obat": 221060,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": burundi_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 2,
    "pendidikan": 9,
    "keamanan": 23,
    "keuangan": 37,
    "lingkungan": 60
  }
};

