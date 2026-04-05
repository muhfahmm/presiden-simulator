import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { jerman_agrikultur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/5_sektor_agrikultur/eropa/121_jerman";
import { jerman_armada } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer/eropa/121_jerman";
import { jerman_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/2_sektor_mineral_kritis/eropa/121_jerman";
import { jerman_farmasi } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/8_sektor_farmasi/eropa/121_jerman";
import { jerman_hukum } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/4_hukum/eropa/121_jerman";
import { jerman_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/1_infrastruktur/eropa/121_jerman";
import { jerman_kepolisian } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi/eropa/121_jerman";
import { jerman_kesehatan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/3_kesehatan/eropa/121_jerman";
import { jerman_listrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/1_sektor_listrik_nasional/eropa/121_jerman";
import { jerman_manufaktur } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/3_manufaktur/eropa/121_jerman";
import { jerman_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/7_sektor_olahan_pangan/eropa/121_jerman";
import { jerman_olahraga } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/5_olahraga/eropa/121_jerman";
import { jerman_pabrik } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer/1_pabrik_militer/eropa/121_jerman";
import { jerman_pendidikan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/3_tempat_umum/2_pendidikan/eropa/121_jerman";
import { jerman_perikanan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/6_sektor_perikanan/eropa/121_jerman";
import { jerman_pertahanan } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan/1_sektor_pertahanan/eropa/121_jerman";
import { jerman_peternakan } from "@/app/database/data/semua_fitur_negara/1_pembangunan/1_produksi/4_sektor_peternakan/eropa/121_jerman";
import { jerman_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/eropa/121_jerman";
import { jerman_strategis } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan/eropa/121_jerman";
const jerman_geopolitik = {
    "un_vote": 197,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 30,
      "kekuatan_keras": 18,
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

export const jerman: CountryData = {
  ...jerman_profile,
  "sektor_listrik": jerman_listrik,
  "infrastruktur": jerman_infrastruktur,
  "sektor_ekstraksi": jerman_ekstraksi,
  "sektor_manufaktur": jerman_manufaktur,
  "sektor_peternakan": jerman_peternakan,
  "sektor_agrikultur": jerman_agrikultur,
  "sektor_perikanan": jerman_perikanan,
  "sektor_olahan_pangan": jerman_olahan_pangan,
  "sektor_farmasi": jerman_farmasi,
  "sektor_pertahanan": jerman_pertahanan,
  "armada_militer": jerman_armada,
  "militer_strategis": jerman_strategis,
  "armada_kepolisian": jerman_kepolisian,
  "pabrik_militer": jerman_pabrik,
    "pendidikan": jerman_pendidikan,
  "kesehatan": jerman_kesehatan,
  "hukum": jerman_hukum,
  "sektor_olahraga": jerman_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 1299
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 283
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 1963
    },
    "bea_cukai": {
      "tarif": 9,
      "kepuasan": 86,
      "pendapatan": 775
    },
    "lingkungan": {
      "tarif": 33,
      "kepuasan": 88,
      "pendapatan": 1581
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 224 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 670 },
    "lainnya": {
      "tarif": 12,
      "kepuasan": 93,
      "pendapatan": 931
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
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 145740,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 10400,
    "harga_obat": 157900,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": jerman_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 30,
    "pendidikan": 35,
    "keamanan": 12,
    "keuangan": 17,
    "lingkungan": 60
  }
};


