import { CountryData } from "@/app/database/data/types";
import { bhutan_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/asia/60_bhutan";
import { bhutan_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/asia/60_bhutan";
import { bhutan_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/asia/60_bhutan";
import { bhutan_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/asia/60_bhutan";
import { bhutan_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/asia/60_bhutan";
import { bhutan_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/asia/60_bhutan";
import { bhutan_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/asia/60_bhutan";
import { bhutan_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/asia/60_bhutan";
import { bhutan_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/asia/60_bhutan";
import { bhutan_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/asia/60_bhutan";
import { bhutan_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/asia/60_bhutan";
import { bhutan_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/asia/60_bhutan";
import { bhutan_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/asia/60_bhutan";
import { bhutan_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/asia/60_bhutan";
import { bhutan_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/asia/60_bhutan";
import { bhutan_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/asia/60_bhutan";
import { bhutan_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/asia/60_bhutan";
import { bhutan_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/60_bhutan";
import { bhutan_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/asia/60_bhutan";
import { bhutan_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/asia/60_bhutan";

export const bhutan: CountryData = {
  ...bhutan_profile,
  "sektor_listrik": bhutan_listrik,
  "infrastruktur": bhutan_infrastruktur,
  "sektor_ekstraksi": bhutan_ekstraksi,
  "sektor_manufaktur": bhutan_manufaktur,
  "sektor_peternakan": bhutan_peternakan,
  "sektor_agrikultur": bhutan_agrikultur,
  "sektor_perikanan": bhutan_perikanan,
  "sektor_olahan_pangan": bhutan_olahan_pangan,
  "sektor_farmasi": bhutan_farmasi,
  "sektor_pertahanan": bhutan_pertahanan,
  "armada_militer": bhutan_armada,
  "militer_strategis": bhutan_strategis,
  "armada_kepolisian": bhutan_kepolisian,
  "pabrik_militer": bhutan_pabrik,
    "pendidikan": bhutan_pendidikan,
  "kesehatan": bhutan_kesehatan,
  "hukum": bhutan_hukum,
  "sektor_olahraga": bhutan_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 19,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 28,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 24,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 70,
    "gaji_medis": 80,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 83280,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 14400,
    "harga_telur": 62200,
    "harga_bbm": 8560,
    "harga_listrik": 3200,
    "harga_air": 10400,
    "harga_obat": 126320,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": bhutan_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 35,
    "pendidikan": 29,
    "keamanan": 10,
    "keuangan": 7,
    "lingkungan": 60
  }
};

