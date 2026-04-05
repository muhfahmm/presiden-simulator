import { CountryData } from "@/app/database/data/types";
import { kiribati_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/oceania/182_kiribati";
import { kiribati_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/oceania/182_kiribati";
import { kiribati_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/oceania/182_kiribati";
import { kiribati_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/oceania/182_kiribati";
import { kiribati_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/oceania/182_kiribati";
import { kiribati_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/oceania/182_kiribati";
import { kiribati_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/oceania/182_kiribati";
import { kiribati_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/oceania/182_kiribati";
import { kiribati_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/oceania/182_kiribati";
import { kiribati_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/oceania/182_kiribati";
import { kiribati_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/oceania/182_kiribati";
import { kiribati_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/oceania/182_kiribati";
import { kiribati_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/oceania/182_kiribati";
import { kiribati_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/oceania/182_kiribati";
import { kiribati_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/oceania/182_kiribati";
import { kiribati_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/oceania/182_kiribati";
import { kiribati_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/oceania/182_kiribati";
import { kiribati_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/oceania/182_kiribati";
import { kiribati_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/oceania/182_kiribati";
import { kiribati_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/oceania/182_kiribati";

export const kiribati: CountryData = {
  ...kiribati_profile,
  "sektor_listrik": kiribati_listrik,
  "infrastruktur": kiribati_infrastruktur,
  "sektor_ekstraksi": kiribati_ekstraksi,
  "sektor_manufaktur": kiribati_manufaktur,
  "sektor_peternakan": kiribati_peternakan,
  "sektor_agrikultur": kiribati_agrikultur,
  "sektor_perikanan": kiribati_perikanan,
  "sektor_olahan_pangan": kiribati_olahan_pangan,
  "sektor_farmasi": kiribati_farmasi,
  "sektor_pertahanan": kiribati_pertahanan,
  "armada_militer": kiribati_armada,
  "militer_strategis": kiribati_strategis,
  "armada_kepolisian": kiribati_kepolisian,
  "pabrik_militer": kiribati_pabrik,
    "pendidikan": kiribati_pendidikan,
  "kesehatan": kiribati_kesehatan,
  "hukum": kiribati_hukum,
  "sektor_olahraga": kiribati_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 11,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 33,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 25,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 36,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 9,
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
    "gaji_medis": 90,
    "gaji_militer": 80
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
    "harga_beras": 16000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kiribati_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 11,
    "pendidikan": 23,
    "keamanan": 9,
    "keuangan": 16,
    "lingkungan": 60
  }
};

