import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { guinea_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/afrika/16_guinea";
import { guinea_armada } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/2_armada_militer/afrika/16_guinea";
import { guinea_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/afrika/16_guinea";
import { guinea_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/afrika/16_guinea";
import { guinea_hukum } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/3_hukum/afrika/16_guinea";
import { guinea_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/afrika/16_guinea";
import { guinea_kepolisian } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/4_armada_kepolisian/afrika/16_guinea";
import { guinea_kesehatan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/2_kesehatan/afrika/16_guinea";
import { guinea_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/afrika/16_guinea";
import { guinea_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/afrika/16_guinea";
import { guinea_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/afrika/16_guinea";
import { guinea_olahraga } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/4_olahraga/afrika/16_guinea";
import { guinea_pabrik } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/5_pabrik_militer/afrika/16_guinea";
import { guinea_pendidikan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/1_pendidikan/afrika/16_guinea";
import { guinea_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/afrika/16_guinea";
import { guinea_pertahanan } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/1_sektor_pertahanan/afrika/16_guinea";
import { guinea_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/afrika/16_guinea";
import { guinea_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/16_guinea";
import { guinea_strategis } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/3_militer_strategis/afrika/16_guinea";
const guinea_geopolitik = {
    "un_vote": 49,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 18,
      "kekuatan_keras": 5,
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

export const guinea: CountryData = {
  ...guinea_profile,
  "sektor_listrik": guinea_listrik,
  "infrastruktur": guinea_infrastruktur,
  "sektor_ekstraksi": guinea_ekstraksi,
  "sektor_manufaktur": guinea_manufaktur,
  "sektor_peternakan": guinea_peternakan,
  "sektor_agrikultur": guinea_agrikultur,
  "sektor_perikanan": guinea_perikanan,
  "sektor_olahan_pangan": guinea_olahan_pangan,
  "sektor_farmasi": guinea_farmasi,
  "sektor_pertahanan": guinea_pertahanan,
  "armada_militer": guinea_armada,
  "militer_strategis": guinea_strategis,
  "armada_kepolisian": guinea_kepolisian,
  "pabrik_militer": guinea_pabrik,
    "pendidikan": guinea_pendidikan,
  "kesehatan": guinea_kesehatan,
  "hukum": guinea_hukum,
  "sektor_olahraga": guinea_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 33,
      "kepuasan": 67,
      "pendapatan": 15
    },
    "korporasi": {
      "tarif": 35,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 3,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 20,
      "kepuasan": 86,
      "pendapatan": 9
    },
    "lingkungan": {
      "tarif": 25,
      "kepuasan": 88,
      "pendapatan": 5
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 21,
      "kepuasan": 93,
      "pendapatan": 8
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 43540,
    "harga_bbm": 14980,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 126320,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": guinea_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 4,
    "pendidikan": 16,
    "keamanan": 12,
    "keuangan": 31,
    "lingkungan": 60
  }
};

