import { CountryData } from "@/app/database/data/types";
import { djibouti_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/afrika/9_djibouti";
import { djibouti_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/afrika/9_djibouti";
import { djibouti_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/afrika/9_djibouti";
import { djibouti_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/afrika/9_djibouti";
import { djibouti_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/afrika/9_djibouti";
import { djibouti_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/afrika/9_djibouti";
import { djibouti_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/afrika/9_djibouti";
import { djibouti_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/afrika/9_djibouti";
import { djibouti_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/afrika/9_djibouti";
import { djibouti_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/afrika/9_djibouti";
import { djibouti_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/afrika/9_djibouti";
import { djibouti_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/afrika/9_djibouti";
import { djibouti_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/afrika/9_djibouti";
import { djibouti_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/afrika/9_djibouti";
import { djibouti_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/afrika/9_djibouti";
import { djibouti_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/afrika/9_djibouti";
import { djibouti_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/afrika/9_djibouti";
import { djibouti_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/9_djibouti";
import { djibouti_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/afrika/9_djibouti";
import { djibouti_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/afrika/9_djibouti";

export const djibouti: CountryData = {
  ...djibouti_profile,
  "sektor_listrik": djibouti_listrik,
  "infrastruktur": djibouti_infrastruktur,
  "sektor_ekstraksi": djibouti_ekstraksi,
  "sektor_manufaktur": djibouti_manufaktur,
  "sektor_peternakan": djibouti_peternakan,
  "sektor_agrikultur": djibouti_agrikultur,
  "sektor_perikanan": djibouti_perikanan,
  "sektor_olahan_pangan": djibouti_olahan_pangan,
  "sektor_farmasi": djibouti_farmasi,
  "sektor_pertahanan": djibouti_pertahanan,
  "armada_militer": djibouti_armada,
  "militer_strategis": djibouti_strategis,
  "armada_kepolisian": djibouti_kepolisian,
  "pabrik_militer": djibouti_pabrik,
    "pendidikan": djibouti_pendidikan,
  "kesehatan": djibouti_kesehatan,
  "hukum": djibouti_hukum,
  "sektor_olahraga": djibouti_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 18,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 13,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 18,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 10,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 28,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 25,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 208200,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 30800,
    "harga_gula": 20160,
    "harga_telur": 62200,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 221060,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": djibouti_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 28,
    "pendidikan": 16,
    "keamanan": 25,
    "keuangan": 18,
    "lingkungan": 60
  }
};
