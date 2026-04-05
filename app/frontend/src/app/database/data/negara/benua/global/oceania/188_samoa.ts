import { CountryData } from "@/app/database/data/types";
import { samoa_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/oceania/188_samoa";
import { samoa_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/oceania/188_samoa";
import { samoa_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/oceania/188_samoa";
import { samoa_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/oceania/188_samoa";
import { samoa_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/oceania/188_samoa";
import { samoa_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/oceania/188_samoa";
import { samoa_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/oceania/188_samoa";
import { samoa_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/oceania/188_samoa";
import { samoa_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/oceania/188_samoa";
import { samoa_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/oceania/188_samoa";
import { samoa_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/oceania/188_samoa";
import { samoa_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/oceania/188_samoa";
import { samoa_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/oceania/188_samoa";
import { samoa_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/oceania/188_samoa";
import { samoa_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/oceania/188_samoa";
import { samoa_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/oceania/188_samoa";
import { samoa_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/oceania/188_samoa";
import { samoa_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/oceania/188_samoa";
import { samoa_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/oceania/188_samoa";
import { samoa_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/oceania/188_samoa";

export const samoa: CountryData = {
  ...samoa_profile,
  "sektor_listrik": samoa_listrik,
  "infrastruktur": samoa_infrastruktur,
  "sektor_ekstraksi": samoa_ekstraksi,
  "sektor_manufaktur": samoa_manufaktur,
  "sektor_peternakan": samoa_peternakan,
  "sektor_agrikultur": samoa_agrikultur,
  "sektor_perikanan": samoa_perikanan,
  "sektor_olahan_pangan": samoa_olahan_pangan,
  "sektor_farmasi": samoa_farmasi,
  "sektor_pertahanan": samoa_pertahanan,
  "armada_militer": samoa_armada,
  "militer_strategis": samoa_strategis,
  "armada_kepolisian": samoa_kepolisian,
  "pabrik_militer": samoa_pabrik,
    "pendidikan": samoa_pendidikan,
  "kesehatan": samoa_kesehatan,
  "hukum": samoa_hukum,
  "sektor_olahraga": samoa_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 3,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 29,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 27,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 24,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 19,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 80,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 7700,
    "harga_gula": 28800,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 4160,
    "harga_obat": 126320,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": samoa_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 14,
    "pendidikan": 27,
    "keamanan": 33,
    "keuangan": 8,
    "lingkungan": 60
  }
};

