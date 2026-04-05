import { CountryData } from "@/app/database/data/types";
import { israel_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/asia/70_israel";
import { israel_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/asia/70_israel";
import { israel_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/asia/70_israel";
import { israel_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/asia/70_israel";
import { israel_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/asia/70_israel";
import { israel_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/asia/70_israel";
import { israel_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/asia/70_israel";
import { israel_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/asia/70_israel";
import { israel_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/asia/70_israel";
import { israel_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/asia/70_israel";
import { israel_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/asia/70_israel";
import { israel_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/asia/70_israel";
import { israel_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/asia/70_israel";
import { israel_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/asia/70_israel";
import { israel_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/asia/70_israel";
import { israel_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/asia/70_israel";
import { israel_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/asia/70_israel";
import { israel_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/70_israel";
import { israel_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/asia/70_israel";
import { israel_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/asia/70_israel";

export const israel: CountryData = {
  ...israel_profile,
  "sektor_listrik": israel_listrik,
  "infrastruktur": israel_infrastruktur,
  "sektor_ekstraksi": israel_ekstraksi,
  "sektor_manufaktur": israel_manufaktur,
  "sektor_peternakan": israel_peternakan,
  "sektor_agrikultur": israel_agrikultur,
  "sektor_perikanan": israel_perikanan,
  "sektor_olahan_pangan": israel_olahan_pangan,
  "sektor_farmasi": israel_farmasi,
  "sektor_pertahanan": israel_pertahanan,
  "armada_militer": israel_armada,
  "militer_strategis": israel_strategis,
  "armada_kepolisian": israel_kepolisian,
  "pabrik_militer": israel_pabrik,
    "pendidikan": israel_pendidikan,
  "kesehatan": israel_kesehatan,
  "hukum": israel_hukum,
  "sektor_olahraga": israel_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 6,
      "kepuasan": 67,
      "pendapatan": 40
    },
    "korporasi": {
      "tarif": 14,
      "kepuasan": 52,
      "pendapatan": 160
    },
    "penghasilan": {
      "tarif": 17,
      "kepuasan": 61,
      "pendapatan": 97
    },
    "bea_cukai": {
      "tarif": 4,
      "kepuasan": 86,
      "pendapatan": 58
    },
    "lingkungan": {
      "tarif": 17,
      "kepuasan": 88,
      "pendapatan": 139
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 26 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 76 },
    "lainnya": {
      "tarif": 37,
      "kepuasan": 93,
      "pendapatan": 383
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 145740,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 12320,
    "harga_gula": 28800,
    "harga_telur": 62200,
    "harga_bbm": 10700,
    "harga_listrik": 800,
    "harga_air": 7280,
    "harga_obat": 126320,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": israel_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 11,
    "pendidikan": 16,
    "keamanan": 39,
    "keuangan": 31,
    "lingkungan": 60
  }
};

