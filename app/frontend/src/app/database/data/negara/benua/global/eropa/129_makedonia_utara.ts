import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { makedonia_utara_intelijen } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen/eropa/129_makedonia_utara";

import { makedonia_utara_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/129_makedonia_utara";
import { makedonia_utara_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/129_makedonia_utara";
import { makedonia_utara_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/129_makedonia_utara";
import { makedonia_utara_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/129_makedonia_utara";
import { makedonia_utara_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/4_hukum/eropa/129_makedonia_utara";
import { makedonia_utara_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_infrastruktur/eropa/129_makedonia_utara";
import { makedonia_utara_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/129_makedonia_utara";
import { makedonia_utara_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/3_kesehatan/eropa/129_makedonia_utara";
import { makedonia_utara_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/129_makedonia_utara";
import { makedonia_utara_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/129_makedonia_utara";
import { makedonia_utara_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/129_makedonia_utara";
import { makedonia_utara_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/5_olahraga/eropa/129_makedonia_utara";
import { makedonia_utara_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/129_makedonia_utara";
import { makedonia_utara_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_pendidikan/eropa/129_makedonia_utara";
import { makedonia_utara_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/129_makedonia_utara";
import { makedonia_utara_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/129_makedonia_utara";
import { makedonia_utara_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/129_makedonia_utara";
import { makedonia_utara_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/eropa/129_makedonia_utara";
import { makedonia_utara_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/129_makedonia_utara";
const makedonia_utara_geopolitik = {
    "un_vote": 172,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 32,
      "kekuatan_keras": 37,
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

export const makedonia_utara: CountryData = {
  ...makedonia_utara_profile,
  "sektor_listrik": makedonia_utara_listrik,
  "infrastruktur": makedonia_utara_infrastruktur,
  "sektor_ekstraksi": makedonia_utara_ekstraksi,
  "sektor_manufaktur": makedonia_utara_manufaktur,
  "sektor_peternakan": makedonia_utara_peternakan,
  "sektor_agrikultur": makedonia_utara_agrikultur,
  "sektor_perikanan": makedonia_utara_perikanan,
  "sektor_olahan_pangan": makedonia_utara_olahan_pangan,
  "sektor_farmasi": makedonia_utara_farmasi,
  "sektor_pertahanan": makedonia_utara_pertahanan,
  "armada_militer": makedonia_utara_armada,
  "militer_strategis": makedonia_utara_strategis,
  "armada_kepolisian": makedonia_utara_kepolisian,
  "pabrik_militer": makedonia_utara_pabrik,
  "intelijen": makedonia_utara_intelijen,
    "pendidikan": makedonia_utara_pendidikan,
  "kesehatan": makedonia_utara_kesehatan,
  "hukum": makedonia_utara_hukum,
  "sektor_olahraga": makedonia_utara_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 16,
      "kepuasan": 67,
      "pendapatan": 6
    },
    "korporasi": {
      "tarif": 35,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 3,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 33,
      "kepuasan": 86,
      "pendapatan": 13
    },
    "lingkungan": {
      "tarif": 15,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 12,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
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
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": makedonia_utara_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 14,
    "pendidikan": 38,
    "keamanan": 4,
    "keuangan": 40,
    "lingkungan": 60
  }
};


