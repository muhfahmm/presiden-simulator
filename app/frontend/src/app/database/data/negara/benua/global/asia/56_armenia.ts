import { CountryData } from "@/app/database/data/types";
import { armenia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/asia/56_armenia";
import { armenia_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/asia/56_armenia";
import { armenia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/asia/56_armenia";
import { armenia_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/asia/56_armenia";
import { armenia_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/asia/56_armenia";
import { armenia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/asia/56_armenia";
import { armenia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/asia/56_armenia";
import { armenia_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/asia/56_armenia";
import { armenia_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/asia/56_armenia";
import { armenia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/asia/56_armenia";
import { armenia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/asia/56_armenia";
import { armenia_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/asia/56_armenia";
import { armenia_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/asia/56_armenia";
import { armenia_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/asia/56_armenia";
import { armenia_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/asia/56_armenia";
import { armenia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/asia/56_armenia";
import { armenia_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/asia/56_armenia";
import { armenia_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/56_armenia";
import { armenia_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/asia/56_armenia";
import { armenia_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/asia/56_armenia";

export const armenia: CountryData = {
  ...armenia_profile,
  "sektor_listrik": armenia_listrik,
  "infrastruktur": armenia_infrastruktur,
  "sektor_ekstraksi": armenia_ekstraksi,
  "sektor_manufaktur": armenia_manufaktur,
  "sektor_peternakan": armenia_peternakan,
  "sektor_agrikultur": armenia_agrikultur,
  "sektor_perikanan": armenia_perikanan,
  "sektor_olahan_pangan": armenia_olahan_pangan,
  "sektor_farmasi": armenia_farmasi,
  "sektor_pertahanan": armenia_pertahanan,
  "armada_militer": armenia_armada,
  "militer_strategis": armenia_strategis,
  "armada_kepolisian": armenia_kepolisian,
  "pabrik_militer": armenia_pabrik,
    "pendidikan": armenia_pendidikan,
  "kesehatan": armenia_kesehatan,
  "hukum": armenia_hukum,
  "sektor_olahraga": armenia_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 4,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 9,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 40,
      "kepuasan": 61,
      "pendapatan": 24
    },
    "bea_cukai": {
      "tarif": 14,
      "kepuasan": 86,
      "pendapatan": 6
    },
    "lingkungan": {
      "tarif": 24,
      "kepuasan": 88,
      "pendapatan": 15
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 4 },
    "lainnya": {
      "tarif": 14,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 7280,
    "harga_obat": 221060,
    "harga_pendidikan": 967800
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": armenia_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 40,
    "pendidikan": 20,
    "keamanan": 10,
    "keuangan": 5,
    "lingkungan": 60
  }
};
