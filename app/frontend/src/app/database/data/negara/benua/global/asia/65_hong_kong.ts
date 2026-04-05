import { CountryData } from "@/app/database/data/types";
import { hong_kong_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/asia/65_hong_kong";
import { hong_kong_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/asia/65_hong_kong";
import { hong_kong_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/asia/65_hong_kong";
import { hong_kong_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/asia/65_hong_kong";
import { hong_kong_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/asia/65_hong_kong";
import { hong_kong_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/asia/65_hong_kong";
import { hong_kong_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/asia/65_hong_kong";
import { hong_kong_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/asia/65_hong_kong";
import { hong_kong_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/asia/65_hong_kong";
import { hong_kong_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/asia/65_hong_kong";
import { hong_kong_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/asia/65_hong_kong";
import { hong_kong_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/asia/65_hong_kong";
import { hong_kong_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/asia/65_hong_kong";
import { hong_kong_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/asia/65_hong_kong";
import { hong_kong_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/asia/65_hong_kong";
import { hong_kong_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/asia/65_hong_kong";
import { hong_kong_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/asia/65_hong_kong";
import { hong_kong_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/65_hong_kong";
import { hong_kong_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/asia/65_hong_kong";
import { hong_kong_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/asia/65_hong_kong";

export const hong_kong: CountryData = {
  ...hong_kong_profile,
  "sektor_listrik": hong_kong_listrik,
  "infrastruktur": hong_kong_infrastruktur,
  "sektor_ekstraksi": hong_kong_ekstraksi,
  "sektor_manufaktur": hong_kong_manufaktur,
  "sektor_peternakan": hong_kong_peternakan,
  "sektor_agrikultur": hong_kong_agrikultur,
  "sektor_perikanan": hong_kong_perikanan,
  "sektor_olahan_pangan": hong_kong_olahan_pangan,
  "sektor_farmasi": hong_kong_farmasi,
  "sektor_pertahanan": hong_kong_pertahanan,
  "armada_militer": hong_kong_armada,
  "militer_strategis": hong_kong_strategis,
  "armada_kepolisian": hong_kong_kepolisian,
  "pabrik_militer": hong_kong_pabrik,
    "pendidikan": hong_kong_pendidikan,
  "kesehatan": hong_kong_kesehatan,
  "hukum": hong_kong_hukum,
  "sektor_olahraga": hong_kong_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 3
    },
    "korporasi": {
      "tarif": 14,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 2,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 6,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 16,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 60,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 15550,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": hong_kong_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 14,
    "pendidikan": 4,
    "keamanan": 15,
    "keuangan": 35,
    "lingkungan": 60
  }
};

