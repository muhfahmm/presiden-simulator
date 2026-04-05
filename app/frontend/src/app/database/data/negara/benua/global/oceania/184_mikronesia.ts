import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { mikronesia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/oceania/184_mikronesia";
import { mikronesia_armada } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/2_armada_militer/oceania/184_mikronesia";
import { mikronesia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/oceania/184_mikronesia";
import { mikronesia_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/oceania/184_mikronesia";
import { mikronesia_hukum } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/3_hukum/oceania/184_mikronesia";
import { mikronesia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/oceania/184_mikronesia";
import { mikronesia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/4_armada_kepolisian/oceania/184_mikronesia";
import { mikronesia_kesehatan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/2_kesehatan/oceania/184_mikronesia";
import { mikronesia_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/oceania/184_mikronesia";
import { mikronesia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/oceania/184_mikronesia";
import { mikronesia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/oceania/184_mikronesia";
import { mikronesia_olahraga } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/4_olahraga/oceania/184_mikronesia";
import { mikronesia_pabrik } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/5_pabrik_militer/oceania/184_mikronesia";
import { mikronesia_pendidikan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/1_pendidikan/oceania/184_mikronesia";
import { mikronesia_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/oceania/184_mikronesia";
import { mikronesia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/1_sektor_pertahanan/oceania/184_mikronesia";
import { mikronesia_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/oceania/184_mikronesia";
import { mikronesia_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/oceania/184_mikronesia";
import { mikronesia_strategis } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/3_militer_strategis/oceania/184_mikronesia";
const mikronesia_geopolitik = {
    "un_vote": 14,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 9,
      "kekuatan_keras": 29,
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

export const mikronesia: CountryData = {
  ...mikronesia_profile,
  "sektor_listrik": mikronesia_listrik,
  "infrastruktur": mikronesia_infrastruktur,
  "sektor_ekstraksi": mikronesia_ekstraksi,
  "sektor_manufaktur": mikronesia_manufaktur,
  "sektor_peternakan": mikronesia_peternakan,
  "sektor_agrikultur": mikronesia_agrikultur,
  "sektor_perikanan": mikronesia_perikanan,
  "sektor_olahan_pangan": mikronesia_olahan_pangan,
  "sektor_farmasi": mikronesia_farmasi,
  "sektor_pertahanan": mikronesia_pertahanan,
  "armada_militer": mikronesia_armada,
  "militer_strategis": mikronesia_strategis,
  "armada_kepolisian": mikronesia_kepolisian,
  "pabrik_militer": mikronesia_pabrik,
    "pendidikan": mikronesia_pendidikan,
  "kesehatan": mikronesia_kesehatan,
  "hukum": mikronesia_hukum,
  "sektor_olahraga": mikronesia_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 19,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 12,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 7,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 6,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 15,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 27,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 80,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 30800,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 126320,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": mikronesia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 5,
    "pendidikan": 4,
    "keamanan": 24,
    "keuangan": 19,
    "lingkungan": 60
  }
};

