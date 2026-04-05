import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { belgia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/108_belgia";
import { belgia_armada } from "@/app/database/data/semua_fitur_negara/4_pertahanan/2_armada_militer/eropa/108_belgia";
import { belgia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/108_belgia";
import { belgia_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/108_belgia";
import { belgia_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/4_hukum/eropa/108_belgia";
import { belgia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_infrastruktur/eropa/108_belgia";
import { belgia_kepolisian } from "@/app/database/data/semua_fitur_negara/4_pertahanan/4_armada_kepolisian/eropa/108_belgia";
import { belgia_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/3_kesehatan/eropa/108_belgia";
import { belgia_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/108_belgia";
import { belgia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/108_belgia";
import { belgia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/108_belgia";
import { belgia_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/5_olahraga/eropa/108_belgia";
import { belgia_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/108_belgia";
import { belgia_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_pendidikan/eropa/108_belgia";
import { belgia_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/108_belgia";
import { belgia_pertahanan } from "@/app/database/data/semua_fitur_negara/4_pertahanan/1_manajemen_pertahanan/1_sektor_pertahanan/eropa/108_belgia";
import { belgia_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/108_belgia";
import { belgia_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/eropa/108_belgia";
import { belgia_strategis } from "@/app/database/data/semua_fitur_negara/4_pertahanan/3_militer_strategis/eropa/108_belgia";
const belgia_geopolitik = {
    "un_vote": 189,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 39,
      "kekuatan_keras": 2,
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

export const belgia: CountryData = {
  ...belgia_profile,
  "sektor_listrik": belgia_listrik,
  "infrastruktur": belgia_infrastruktur,
  "sektor_ekstraksi": belgia_ekstraksi,
  "sektor_manufaktur": belgia_manufaktur,
  "sektor_peternakan": belgia_peternakan,
  "sektor_agrikultur": belgia_agrikultur,
  "sektor_perikanan": belgia_perikanan,
  "sektor_olahan_pangan": belgia_olahan_pangan,
  "sektor_farmasi": belgia_farmasi,
  "sektor_pertahanan": belgia_pertahanan,
  "armada_militer": belgia_armada,
  "militer_strategis": belgia_strategis,
  "armada_kepolisian": belgia_kepolisian,
  "pabrik_militer": belgia_pabrik,
    "pendidikan": belgia_pendidikan,
  "kesehatan": belgia_kesehatan,
  "hukum": belgia_hukum,
  "sektor_olahraga": belgia_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 11,
      "kepuasan": 67,
      "pendapatan": 101
    },
    "korporasi": {
      "tarif": 27,
      "kepuasan": 52,
      "pendapatan": 194
    },
    "penghasilan": {
      "tarif": 8,
      "kepuasan": 61,
      "pendapatan": 83
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 555
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 71
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 31 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 92 },
    "lainnya": {
      "tarif": 12,
      "kepuasan": 93,
      "pendapatan": 146
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 10400,
    "harga_obat": 78950,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": belgia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 20,
    "pendidikan": 26,
    "keamanan": 34,
    "keuangan": 20,
    "lingkungan": 60
  }
};

