import { CountryData } from "@/app/database/data/types";
import { republik_timor_leste_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/asia/90_republik_timor_leste";
import { republik_timor_leste_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/asia/90_republik_timor_leste";
import { republik_timor_leste_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/asia/90_republik_timor_leste";
import { republik_timor_leste_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/asia/90_republik_timor_leste";
import { republik_timor_leste_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/asia/90_republik_timor_leste";
import { republik_timor_leste_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/asia/90_republik_timor_leste";
import { republik_timor_leste_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/asia/90_republik_timor_leste";
import { republik_timor_leste_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/asia/90_republik_timor_leste";
import { republik_timor_leste_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/asia/90_republik_timor_leste";
import { republik_timor_leste_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/asia/90_republik_timor_leste";
import { republik_timor_leste_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/asia/90_republik_timor_leste";
import { republik_timor_leste_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/asia/90_republik_timor_leste";
import { republik_timor_leste_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/asia/90_republik_timor_leste";
import { republik_timor_leste_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/asia/90_republik_timor_leste";
import { republik_timor_leste_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/asia/90_republik_timor_leste";
import { republik_timor_leste_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/asia/90_republik_timor_leste";
import { republik_timor_leste_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/asia/90_republik_timor_leste";
import { republik_timor_leste_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/90_republik_timor_leste";
import { republik_timor_leste_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/asia/90_republik_timor_leste";
import { republik_timor_leste_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/asia/90_republik_timor_leste";

export const republik_timor_leste: CountryData = {
  ...republik_timor_leste_profile,
  "sektor_listrik": republik_timor_leste_listrik,
  "infrastruktur": republik_timor_leste_infrastruktur,
  "sektor_ekstraksi": republik_timor_leste_ekstraksi,
  "sektor_manufaktur": republik_timor_leste_manufaktur,
  "sektor_peternakan": republik_timor_leste_peternakan,
  "sektor_agrikultur": republik_timor_leste_agrikultur,
  "sektor_perikanan": republik_timor_leste_perikanan,
  "sektor_olahan_pangan": republik_timor_leste_olahan_pangan,
  "sektor_farmasi": republik_timor_leste_farmasi,
  "sektor_pertahanan": republik_timor_leste_pertahanan,
  "armada_militer": republik_timor_leste_armada,
  "militer_strategis": republik_timor_leste_strategis,
  "armada_kepolisian": republik_timor_leste_kepolisian,
  "pabrik_militer": republik_timor_leste_pabrik,
    "pendidikan": republik_timor_leste_pendidikan,
  "kesehatan": republik_timor_leste_kesehatan,
  "hukum": republik_timor_leste_hukum,
  "sektor_olahraga": republik_timor_leste_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 21,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 3,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 16,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 27,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
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
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 7700,
    "harga_gula": 11520,
    "harga_telur": 62200,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 78950,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": republik_timor_leste_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 35,
    "pendidikan": 29,
    "keamanan": 8,
    "keuangan": 29,
    "lingkungan": 60
  }
};
