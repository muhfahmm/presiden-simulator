import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { bosnia_dan_hercegovina_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/4_hukum/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_infrastruktur/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/3_kesehatan/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/5_olahraga/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_pendidikan/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/109_bosnia_dan_hercegovina";
const bosnia_dan_hercegovina_geopolitik = {
    "un_vote": 144,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 39,
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

export const bosnia_dan_hercegovina: CountryData = {
  ...bosnia_dan_hercegovina_profile,
  "sektor_listrik": bosnia_dan_hercegovina_listrik,
  "infrastruktur": bosnia_dan_hercegovina_infrastruktur,
  "sektor_ekstraksi": bosnia_dan_hercegovina_ekstraksi,
  "sektor_manufaktur": bosnia_dan_hercegovina_manufaktur,
  "sektor_peternakan": bosnia_dan_hercegovina_peternakan,
  "sektor_agrikultur": bosnia_dan_hercegovina_agrikultur,
  "sektor_perikanan": bosnia_dan_hercegovina_perikanan,
  "sektor_olahan_pangan": bosnia_dan_hercegovina_olahan_pangan,
  "sektor_farmasi": bosnia_dan_hercegovina_farmasi,
  "sektor_pertahanan": bosnia_dan_hercegovina_pertahanan,
  "armada_militer": bosnia_dan_hercegovina_armada,
  "militer_strategis": bosnia_dan_hercegovina_strategis,
  "armada_kepolisian": bosnia_dan_hercegovina_kepolisian,
  "pabrik_militer": bosnia_dan_hercegovina_pabrik,
    "pendidikan": bosnia_dan_hercegovina_pendidikan,
  "kesehatan": bosnia_dan_hercegovina_kesehatan,
  "hukum": bosnia_dan_hercegovina_hukum,
  "sektor_olahraga": bosnia_dan_hercegovina_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 28,
      "kepuasan": 67,
      "pendapatan": 18
    },
    "korporasi": {
      "tarif": 8,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 27,
      "kepuasan": 61,
      "pendapatan": 17
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 12
    },
    "lingkungan": {
      "tarif": 25,
      "kepuasan": 88,
      "pendapatan": 7
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 4 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 6
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 28800,
    "harga_telur": 62200,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 677460
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": bosnia_dan_hercegovina_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 15,
    "pendidikan": 19,
    "keamanan": 36,
    "keuangan": 24,
    "lingkungan": 60
  }
};


