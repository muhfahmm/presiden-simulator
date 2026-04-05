import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { turki_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/148_turki";
import { turki_armada } from "@/app/database/data/semua_fitur_negara/4_pertahanan/2_armada_militer/eropa/148_turki";
import { turki_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/148_turki";
import { turki_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/148_turki";
import { turki_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/4_hukum/eropa/148_turki";
import { turki_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_infrastruktur/eropa/148_turki";
import { turki_kepolisian } from "@/app/database/data/semua_fitur_negara/4_pertahanan/4_armada_kepolisian/eropa/148_turki";
import { turki_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/3_kesehatan/eropa/148_turki";
import { turki_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/148_turki";
import { turki_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/148_turki";
import { turki_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/148_turki";
import { turki_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/5_olahraga/eropa/148_turki";
import { turki_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/148_turki";
import { turki_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_pendidikan/eropa/148_turki";
import { turki_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/148_turki";
import { turki_pertahanan } from "@/app/database/data/semua_fitur_negara/4_pertahanan/1_manajemen_pertahanan/1_sektor_pertahanan/eropa/148_turki";
import { turki_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/148_turki";
import { turki_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/eropa/148_turki";
import { turki_strategis } from "@/app/database/data/semua_fitur_negara/4_pertahanan/3_militer_strategis/eropa/148_turki";
const turki_geopolitik = {
    "un_vote": 83,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 35,
      "kekuatan_keras": 28,
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

export const turki: CountryData = {
  ...turki_profile,
  "sektor_listrik": turki_listrik,
  "infrastruktur": turki_infrastruktur,
  "sektor_ekstraksi": turki_ekstraksi,
  "sektor_manufaktur": turki_manufaktur,
  "sektor_peternakan": turki_peternakan,
  "sektor_agrikultur": turki_agrikultur,
  "sektor_perikanan": turki_perikanan,
  "sektor_olahan_pangan": turki_olahan_pangan,
  "sektor_farmasi": turki_farmasi,
  "sektor_pertahanan": turki_pertahanan,
  "armada_militer": turki_armada,
  "militer_strategis": turki_strategis,
  "armada_kepolisian": turki_kepolisian,
  "pabrik_militer": turki_pabrik,
    "pendidikan": turki_pendidikan,
  "kesehatan": turki_kesehatan,
  "hukum": turki_hukum,
  "sektor_olahraga": turki_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 22,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 26,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 33,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 29,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 25,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 38,
      "kepuasan": 93,
      "pendapatan": 9
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
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 28800,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 3200,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 241950
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": turki_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 27,
    "pendidikan": 22,
    "keamanan": 26,
    "keuangan": 28,
    "lingkungan": 60
  }
};

