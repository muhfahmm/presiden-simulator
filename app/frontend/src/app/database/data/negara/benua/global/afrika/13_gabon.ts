import { CountryData } from "@/app/database/data/types";
import { gabon_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/afrika/13_gabon";
import { gabon_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/afrika/13_gabon";
import { gabon_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/afrika/13_gabon";
import { gabon_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/afrika/13_gabon";
import { gabon_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/afrika/13_gabon";
import { gabon_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/afrika/13_gabon";
import { gabon_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/afrika/13_gabon";
import { gabon_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/afrika/13_gabon";
import { gabon_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/afrika/13_gabon";
import { gabon_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/afrika/13_gabon";
import { gabon_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/afrika/13_gabon";
import { gabon_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/afrika/13_gabon";
import { gabon_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/afrika/13_gabon";
import { gabon_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/afrika/13_gabon";
import { gabon_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/afrika/13_gabon";
import { gabon_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/afrika/13_gabon";
import { gabon_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/afrika/13_gabon";
import { gabon_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/13_gabon";
import { gabon_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/afrika/13_gabon";
import { gabon_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/afrika/13_gabon";

export const gabon: CountryData = {
  ...gabon_profile,
  "sektor_listrik": gabon_listrik,
  "infrastruktur": gabon_infrastruktur,
  "sektor_ekstraksi": gabon_ekstraksi,
  "sektor_manufaktur": gabon_manufaktur,
  "sektor_peternakan": gabon_peternakan,
  "sektor_agrikultur": gabon_agrikultur,
  "sektor_perikanan": gabon_perikanan,
  "sektor_olahan_pangan": gabon_olahan_pangan,
  "sektor_farmasi": gabon_farmasi,
  "sektor_pertahanan": gabon_pertahanan,
  "armada_militer": gabon_armada,
  "militer_strategis": gabon_strategis,
  "armada_kepolisian": gabon_kepolisian,
  "pabrik_militer": gabon_pabrik,
    "pendidikan": gabon_pendidikan,
  "kesehatan": gabon_kesehatan,
  "hukum": gabon_hukum,
  "sektor_olahraga": gabon_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 28,
      "kepuasan": 67,
      "pendapatan": 16
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 19
    },
    "penghasilan": {
      "tarif": 25,
      "kepuasan": 61,
      "pendapatan": 12
    },
    "bea_cukai": {
      "tarif": 39,
      "kepuasan": 86,
      "pendapatan": 14
    },
    "lingkungan": {
      "tarif": 23,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 25,
      "kepuasan": 93,
      "pendapatan": 5
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 30,
    "gaji_guru": 50,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 24880,
    "harga_bbm": 14980,
    "harga_listrik": 800,
    "harga_air": 10400,
    "harga_obat": 78950,
    "harga_pendidikan": 677460
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": gabon_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 27,
    "pendidikan": 26,
    "keamanan": 11,
    "keuangan": 13,
    "lingkungan": 60
  }
};

