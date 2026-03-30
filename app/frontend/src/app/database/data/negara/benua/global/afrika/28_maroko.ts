import { CountryData } from "@/app/database/data/types";
import { maroko_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/afrika/28_maroko";
import { maroko_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/afrika/28_maroko";
import { maroko_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/afrika/28_maroko";
import { maroko_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/afrika/28_maroko";
import { maroko_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/afrika/28_maroko";
import { maroko_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/afrika/28_maroko";
import { maroko_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/afrika/28_maroko";
import { maroko_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/afrika/28_maroko";
import { maroko_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/afrika/28_maroko";
import { maroko_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/afrika/28_maroko";
import { maroko_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/afrika/28_maroko";
import { maroko_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/afrika/28_maroko";
import { maroko_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/afrika/28_maroko";
import { maroko_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/afrika/28_maroko";
import { maroko_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/afrika/28_maroko";
import { maroko_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/afrika/28_maroko";
import { maroko_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/afrika/28_maroko";
import { maroko_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/28_maroko";
import { maroko_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/afrika/28_maroko";
import { maroko_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/afrika/28_maroko";

export const maroko: CountryData = {
  ...maroko_profile,
  "sektor_listrik": maroko_listrik,
  "infrastruktur": maroko_infrastruktur,
  "sektor_ekstraksi": maroko_ekstraksi,
  "sektor_manufaktur": maroko_manufaktur,
  "sektor_peternakan": maroko_peternakan,
  "sektor_agrikultur": maroko_agrikultur,
  "sektor_perikanan": maroko_perikanan,
  "sektor_olahan_pangan": maroko_olahan_pangan,
  "sektor_farmasi": maroko_farmasi,
  "sektor_pertahanan": maroko_pertahanan,
  "armada_militer": maroko_armada,
  "militer_strategis": maroko_strategis,
  "armada_kepolisian": maroko_kepolisian,
  "pabrik_militer": maroko_pabrik,
    "pendidikan": maroko_pendidikan,
  "kesehatan": maroko_kesehatan,
  "hukum": maroko_hukum,
  "sektor_olahraga": maroko_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 24,
      "kepuasan": 67,
      "pendapatan": 67
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 102
    },
    "penghasilan": {
      "tarif": 37,
      "kepuasan": 61,
      "pendapatan": 127
    },
    "bea_cukai": {
      "tarif": 35,
      "kepuasan": 86,
      "pendapatan": 73
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 51
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 7 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 20 },
    "lainnya": {
      "tarif": 5,
      "kepuasan": 93,
      "pendapatan": 10
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 30,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 2600,
    "harga_obat": 78950,
    "harga_pendidikan": 677460
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": maroko_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 21,
    "pendidikan": 29,
    "keamanan": 9,
    "keuangan": 14,
    "lingkungan": 60
  }
};
