import { CountryData } from "@/app/database/data/types";
import { republik_zambia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/afrika/42_republik_zambia";
import { republik_zambia_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/afrika/42_republik_zambia";
import { republik_zambia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/afrika/42_republik_zambia";
import { republik_zambia_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/afrika/42_republik_zambia";
import { republik_zambia_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/afrika/42_republik_zambia";
import { republik_zambia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/afrika/42_republik_zambia";
import { republik_zambia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/afrika/42_republik_zambia";
import { republik_zambia_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/afrika/42_republik_zambia";
import { republik_zambia_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/afrika/42_republik_zambia";
import { republik_zambia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/afrika/42_republik_zambia";
import { republik_zambia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/afrika/42_republik_zambia";
import { republik_zambia_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/afrika/42_republik_zambia";
import { republik_zambia_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/afrika/42_republik_zambia";
import { republik_zambia_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/afrika/42_republik_zambia";
import { republik_zambia_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/afrika/42_republik_zambia";
import { republik_zambia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/afrika/42_republik_zambia";
import { republik_zambia_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/afrika/42_republik_zambia";
import { republik_zambia_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/42_republik_zambia";
import { republik_zambia_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/afrika/42_republik_zambia";
import { republik_zambia_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/afrika/42_republik_zambia";

export const republik_zambia: CountryData = {
  ...republik_zambia_profile,
  "sektor_listrik": republik_zambia_listrik,
  "infrastruktur": republik_zambia_infrastruktur,
  "sektor_ekstraksi": republik_zambia_ekstraksi,
  "sektor_manufaktur": republik_zambia_manufaktur,
  "sektor_peternakan": republik_zambia_peternakan,
  "sektor_agrikultur": republik_zambia_agrikultur,
  "sektor_perikanan": republik_zambia_perikanan,
  "sektor_olahan_pangan": republik_zambia_olahan_pangan,
  "sektor_farmasi": republik_zambia_farmasi,
  "sektor_pertahanan": republik_zambia_pertahanan,
  "armada_militer": republik_zambia_armada,
  "militer_strategis": republik_zambia_strategis,
  "armada_kepolisian": republik_zambia_kepolisian,
  "pabrik_militer": republik_zambia_pabrik,
    "pendidikan": republik_zambia_pendidikan,
  "kesehatan": republik_zambia_kesehatan,
  "hukum": republik_zambia_hukum,
  "sektor_olahraga": republik_zambia_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 20,
      "kepuasan": 67,
      "pendapatan": 12
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 15
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 3
    },
    "bea_cukai": {
      "tarif": 24,
      "kepuasan": 86,
      "pendapatan": 10
    },
    "lingkungan": {
      "tarif": 22,
      "kepuasan": 88,
      "pendapatan": 10
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 19,
      "kepuasan": 93,
      "pendapatan": 8
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 40,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 25,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 208200,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 28800,
    "harga_telur": 24880,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 157900,
    "harga_pendidikan": 967800
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": republik_zambia_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 38,
    "pendidikan": 14,
    "keamanan": 32,
    "keuangan": 31,
    "lingkungan": 60
  }
};

