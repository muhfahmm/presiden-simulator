import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { rusia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/140_rusia";
import { rusia_armada } from "@/app/database/data/semua_fitur_negara/4_pertahanan/2_armada_militer/eropa/140_rusia";
import { rusia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/140_rusia";
import { rusia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/140_rusia";
import { rusia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/4_hukum/eropa/140_rusia";
import { rusia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_infrastruktur/eropa/140_rusia";
import { rusia_kepolisian } from "@/app/database/data/semua_fitur_negara/4_pertahanan/4_armada_kepolisian/eropa/140_rusia";
import { rusia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/3_kesehatan/eropa/140_rusia";
import { rusia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/140_rusia";
import { rusia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/140_rusia";
import { rusia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/140_rusia";
import { rusia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/5_olahraga/eropa/140_rusia";
import { rusia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/140_rusia";
import { rusia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_pendidikan/eropa/140_rusia";
import { rusia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/140_rusia";
import { rusia_pertahanan } from "@/app/database/data/semua_fitur_negara/4_pertahanan/1_manajemen_pertahanan/1_sektor_pertahanan/eropa/140_rusia";
import { rusia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/140_rusia";
import { rusia_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/eropa/140_rusia";
import { rusia_strategis } from "@/app/database/data/semua_fitur_negara/4_pertahanan/3_militer_strategis/eropa/140_rusia";
const rusia_geopolitik = {
    "un_vote": 150,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 2,
      "kekuatan_keras": 12,
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

export const rusia: CountryData = {
  ...rusia_profile,
  "sektor_listrik": rusia_listrik,
  "infrastruktur": rusia_infrastruktur,
  "sektor_ekstraksi": rusia_ekstraksi,
  "sektor_manufaktur": rusia_manufaktur,
  "sektor_peternakan": rusia_peternakan,
  "sektor_agrikultur": rusia_agrikultur,
  "sektor_perikanan": rusia_perikanan,
  "sektor_olahan_pangan": rusia_olahan_pangan,
  "sektor_farmasi": rusia_farmasi,
  "sektor_pertahanan": rusia_pertahanan,
  "armada_militer": rusia_armada,
  "militer_strategis": rusia_strategis,
  "armada_kepolisian": rusia_kepolisian,
  "pabrik_militer": rusia_pabrik,
    "pendidikan": rusia_pendidikan,
  "kesehatan": rusia_kesehatan,
  "hukum": rusia_hukum,
  "sektor_olahraga": rusia_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 40,
      "kepuasan": 67,
      "pendapatan": 1161
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 241
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 1042
    },
    "bea_cukai": {
      "tarif": 25,
      "kepuasan": 86,
      "pendapatan": 983
    },
    "lingkungan": {
      "tarif": 33,
      "kepuasan": 88,
      "pendapatan": 1412
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 99 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 295 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 1274
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
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
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 15550,
    "harga_bbm": 21400,
    "harga_listrik": 1280,
    "harga_air": 4160,
    "harga_obat": 126320,
    "harga_pendidikan": 677460
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": rusia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 7,
    "pendidikan": 14,
    "keamanan": 20,
    "keuangan": 1,
    "lingkungan": 60
  }
};

