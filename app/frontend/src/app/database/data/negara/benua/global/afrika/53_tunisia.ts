import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { tunisia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/afrika/53_tunisia";
import { tunisia_armada } from "@/app/database/data/semua_fitur_negara/4_pertahanan/2_armada_militer/afrika/53_tunisia";
import { tunisia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/afrika/53_tunisia";
import { tunisia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/afrika/53_tunisia";
import { tunisia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/4_hukum/afrika/53_tunisia";
import { tunisia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_infrastruktur/afrika/53_tunisia";
import { tunisia_kepolisian } from "@/app/database/data/semua_fitur_negara/4_pertahanan/4_armada_kepolisian/afrika/53_tunisia";
import { tunisia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/3_kesehatan/afrika/53_tunisia";
import { tunisia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/afrika/53_tunisia";
import { tunisia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/afrika/53_tunisia";
import { tunisia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/afrika/53_tunisia";
import { tunisia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/5_olahraga/afrika/53_tunisia";
import { tunisia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/afrika/53_tunisia";
import { tunisia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_pendidikan/afrika/53_tunisia";
import { tunisia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/afrika/53_tunisia";
import { tunisia_pertahanan } from "@/app/database/data/semua_fitur_negara/4_pertahanan/1_manajemen_pertahanan/1_sektor_pertahanan/afrika/53_tunisia";
import { tunisia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/afrika/53_tunisia";
import { tunisia_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/53_tunisia";
import { tunisia_strategis } from "@/app/database/data/semua_fitur_negara/4_pertahanan/3_militer_strategis/afrika/53_tunisia";
const tunisia_geopolitik = {
    "un_vote": 59,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 1,
      "kekuatan_keras": 26,
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

export const tunisia: CountryData = {
  ...tunisia_profile,
  "sektor_listrik": tunisia_listrik,
  "infrastruktur": tunisia_infrastruktur,
  "sektor_ekstraksi": tunisia_ekstraksi,
  "sektor_manufaktur": tunisia_manufaktur,
  "sektor_peternakan": tunisia_peternakan,
  "sektor_agrikultur": tunisia_agrikultur,
  "sektor_perikanan": tunisia_perikanan,
  "sektor_olahan_pangan": tunisia_olahan_pangan,
  "sektor_farmasi": tunisia_farmasi,
  "sektor_pertahanan": tunisia_pertahanan,
  "armada_militer": tunisia_armada,
  "militer_strategis": tunisia_strategis,
  "armada_kepolisian": tunisia_kepolisian,
  "pabrik_militer": tunisia_pabrik,
    "pendidikan": tunisia_pendidikan,
  "kesehatan": tunisia_kesehatan,
  "hukum": tunisia_hukum,
  "sektor_olahraga": tunisia_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 24,
      "kepuasan": 67,
      "pendapatan": 24
    },
    "korporasi": {
      "tarif": 3,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 2,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 15,
      "kepuasan": 86,
      "pendapatan": 11
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 4
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 50,
    "gaji_medis": 50,
    "gaji_militer": 40
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 15400,
    "harga_gula": 7200,
    "harga_telur": 43540,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 221060,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": tunisia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 19,
    "pendidikan": 39,
    "keamanan": 14,
    "keuangan": 16,
    "lingkungan": 60
  }
};

