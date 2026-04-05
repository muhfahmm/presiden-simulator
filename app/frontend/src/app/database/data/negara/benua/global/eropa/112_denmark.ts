import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { denmark_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/112_denmark";
import { denmark_armada } from "@/app/database/data/semua_fitur_negara/4_pertahanan/2_armada_militer/eropa/112_denmark";
import { denmark_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/112_denmark";
import { denmark_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/112_denmark";
import { denmark_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/4_hukum/eropa/112_denmark";
import { denmark_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_infrastruktur/eropa/112_denmark";
import { denmark_kepolisian } from "@/app/database/data/semua_fitur_negara/4_pertahanan/4_armada_kepolisian/eropa/112_denmark";
import { denmark_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/3_kesehatan/eropa/112_denmark";
import { denmark_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/112_denmark";
import { denmark_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/112_denmark";
import { denmark_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/112_denmark";
import { denmark_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/5_olahraga/eropa/112_denmark";
import { denmark_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/112_denmark";
import { denmark_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_pendidikan/eropa/112_denmark";
import { denmark_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/112_denmark";
import { denmark_pertahanan } from "@/app/database/data/semua_fitur_negara/4_pertahanan/1_manajemen_pertahanan/1_sektor_pertahanan/eropa/112_denmark";
import { denmark_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/112_denmark";
import { denmark_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/eropa/112_denmark";
import { denmark_strategis } from "@/app/database/data/semua_fitur_negara/4_pertahanan/3_militer_strategis/eropa/112_denmark";
const denmark_geopolitik = {
    "un_vote": 184,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 32,
      "kekuatan_keras": 20,
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

export const denmark: CountryData = {
  ...denmark_profile,
  "sektor_listrik": denmark_listrik,
  "infrastruktur": denmark_infrastruktur,
  "sektor_ekstraksi": denmark_ekstraksi,
  "sektor_manufaktur": denmark_manufaktur,
  "sektor_peternakan": denmark_peternakan,
  "sektor_agrikultur": denmark_agrikultur,
  "sektor_perikanan": denmark_perikanan,
  "sektor_olahan_pangan": denmark_olahan_pangan,
  "sektor_farmasi": denmark_farmasi,
  "sektor_pertahanan": denmark_pertahanan,
  "armada_militer": denmark_armada,
  "militer_strategis": denmark_strategis,
  "armada_kepolisian": denmark_kepolisian,
  "pabrik_militer": denmark_pabrik,
    "pendidikan": denmark_pendidikan,
  "kesehatan": denmark_kesehatan,
  "hukum": denmark_hukum,
  "sektor_olahraga": denmark_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 10,
      "kepuasan": 67,
      "pendapatan": 72
    },
    "korporasi": {
      "tarif": 9,
      "kepuasan": 52,
      "pendapatan": 56
    },
    "penghasilan": {
      "tarif": 21,
      "kepuasan": 61,
      "pendapatan": 107
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 272
    },
    "lingkungan": {
      "tarif": 29,
      "kepuasan": 88,
      "pendapatan": 273
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 20 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 60 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 180
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 100,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 5350,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 78950,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": denmark_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 33,
    "pendidikan": 32,
    "keamanan": 28,
    "keuangan": 36,
    "lingkungan": 60
  }
};

