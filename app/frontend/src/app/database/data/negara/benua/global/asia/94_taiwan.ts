import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { taiwan_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/asia/94_taiwan";
import { taiwan_armada } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/2_armada_militer/asia/94_taiwan";
import { taiwan_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/asia/94_taiwan";
import { taiwan_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/asia/94_taiwan";
import { taiwan_hukum } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/3_hukum/asia/94_taiwan";
import { taiwan_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/asia/94_taiwan";
import { taiwan_kepolisian } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/4_armada_kepolisian/asia/94_taiwan";
import { taiwan_kesehatan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/2_kesehatan/asia/94_taiwan";
import { taiwan_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/asia/94_taiwan";
import { taiwan_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/asia/94_taiwan";
import { taiwan_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/asia/94_taiwan";
import { taiwan_olahraga } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/4_olahraga/asia/94_taiwan";
import { taiwan_pabrik } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/5_pabrik_militer/asia/94_taiwan";
import { taiwan_pendidikan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/1_pendidikan/asia/94_taiwan";
import { taiwan_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/asia/94_taiwan";
import { taiwan_pertahanan } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/1_sektor_pertahanan/asia/94_taiwan";
import { taiwan_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/asia/94_taiwan";
import { taiwan_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/94_taiwan";
import { taiwan_strategis } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/3_militer_strategis/asia/94_taiwan";
const taiwan_geopolitik = {
    "un_vote": 75,
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 14,
      "kekuatan_keras": 27,
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

export const taiwan: CountryData = {
  ...taiwan_profile,
  "sektor_listrik": taiwan_listrik,
  "infrastruktur": taiwan_infrastruktur,
  "sektor_ekstraksi": taiwan_ekstraksi,
  "sektor_manufaktur": taiwan_manufaktur,
  "sektor_peternakan": taiwan_peternakan,
  "sektor_agrikultur": taiwan_agrikultur,
  "sektor_perikanan": taiwan_perikanan,
  "sektor_olahan_pangan": taiwan_olahan_pangan,
  "sektor_farmasi": taiwan_farmasi,
  "sektor_pertahanan": taiwan_pertahanan,
  "armada_militer": taiwan_armada,
  "militer_strategis": taiwan_strategis,
  "armada_kepolisian": taiwan_kepolisian,
  "pabrik_militer": taiwan_pabrik,
    "pendidikan": taiwan_pendidikan,
  "kesehatan": taiwan_kesehatan,
  "hukum": taiwan_hukum,
  "sektor_olahraga": taiwan_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 207
    },
    "korporasi": {
      "tarif": 12,
      "kepuasan": 52,
      "pendapatan": 98
    },
    "penghasilan": {
      "tarif": 8,
      "kepuasan": 61,
      "pendapatan": 155
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 667
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 594
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 39 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 116 },
    "lainnya": {
      "tarif": 39,
      "kepuasan": 93,
      "pendapatan": 523
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 83280,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 24880,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 157900,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": taiwan_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 40,
    "pendidikan": 25,
    "keamanan": 26,
    "keuangan": 1,
    "lingkungan": 60
  }
};

