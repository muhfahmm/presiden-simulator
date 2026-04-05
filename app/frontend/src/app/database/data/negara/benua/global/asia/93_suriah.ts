import { CountryData } from "@/app/database/data/types";
import { suriah_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/asia/93_suriah";
import { suriah_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/asia/93_suriah";
import { suriah_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/asia/93_suriah";
import { suriah_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/asia/93_suriah";
import { suriah_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/asia/93_suriah";
import { suriah_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/asia/93_suriah";
import { suriah_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/asia/93_suriah";
import { suriah_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/asia/93_suriah";
import { suriah_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/asia/93_suriah";
import { suriah_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/asia/93_suriah";
import { suriah_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/asia/93_suriah";
import { suriah_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/asia/93_suriah";
import { suriah_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/asia/93_suriah";
import { suriah_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/asia/93_suriah";
import { suriah_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/asia/93_suriah";
import { suriah_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/asia/93_suriah";
import { suriah_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/asia/93_suriah";
import { suriah_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/93_suriah";
import { suriah_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/asia/93_suriah";
import { suriah_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/asia/93_suriah";

export const suriah: CountryData = {
  ...suriah_profile,
  "sektor_listrik": suriah_listrik,
  "infrastruktur": suriah_infrastruktur,
  "sektor_ekstraksi": suriah_ekstraksi,
  "sektor_manufaktur": suriah_manufaktur,
  "sektor_peternakan": suriah_peternakan,
  "sektor_agrikultur": suriah_agrikultur,
  "sektor_perikanan": suriah_perikanan,
  "sektor_olahan_pangan": suriah_olahan_pangan,
  "sektor_farmasi": suriah_farmasi,
  "sektor_pertahanan": suriah_pertahanan,
  "armada_militer": suriah_armada,
  "militer_strategis": suriah_strategis,
  "armada_kepolisian": suriah_kepolisian,
  "pabrik_militer": suriah_pabrik,
    "pendidikan": suriah_pendidikan,
  "kesehatan": suriah_kesehatan,
  "hukum": suriah_hukum,
  "sektor_olahraga": suriah_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 22,
      "kepuasan": 67,
      "pendapatan": 6
    },
    "korporasi": {
      "tarif": 5,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 5,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 10,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 5
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 70,
    "gaji_medis": 60,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 7700,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 221060,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": suriah_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 38,
    "pendidikan": 13,
    "keamanan": 27,
    "keuangan": 29,
    "lingkungan": 60
  }
};

