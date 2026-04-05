import { CountryData } from "@/app/database/data/types";
import { seychelles_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/afrika/47_seychelles";
import { seychelles_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/afrika/47_seychelles";
import { seychelles_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/afrika/47_seychelles";
import { seychelles_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/afrika/47_seychelles";
import { seychelles_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/afrika/47_seychelles";
import { seychelles_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/afrika/47_seychelles";
import { seychelles_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/afrika/47_seychelles";
import { seychelles_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/afrika/47_seychelles";
import { seychelles_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/afrika/47_seychelles";
import { seychelles_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/afrika/47_seychelles";
import { seychelles_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/afrika/47_seychelles";
import { seychelles_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/afrika/47_seychelles";
import { seychelles_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/afrika/47_seychelles";
import { seychelles_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/afrika/47_seychelles";
import { seychelles_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/afrika/47_seychelles";
import { seychelles_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/afrika/47_seychelles";
import { seychelles_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/afrika/47_seychelles";
import { seychelles_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/47_seychelles";
import { seychelles_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/afrika/47_seychelles";
import { seychelles_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/afrika/47_seychelles";

export const seychelles: CountryData = {
  ...seychelles_profile,
  "sektor_listrik": seychelles_listrik,
  "infrastruktur": seychelles_infrastruktur,
  "sektor_ekstraksi": seychelles_ekstraksi,
  "sektor_manufaktur": seychelles_manufaktur,
  "sektor_peternakan": seychelles_peternakan,
  "sektor_agrikultur": seychelles_agrikultur,
  "sektor_perikanan": seychelles_perikanan,
  "sektor_olahan_pangan": seychelles_olahan_pangan,
  "sektor_farmasi": seychelles_farmasi,
  "sektor_pertahanan": seychelles_pertahanan,
  "armada_militer": seychelles_armada,
  "militer_strategis": seychelles_strategis,
  "armada_kepolisian": seychelles_kepolisian,
  "pabrik_militer": seychelles_pabrik,
    "pendidikan": seychelles_pendidikan,
  "kesehatan": seychelles_kesehatan,
  "hukum": seychelles_hukum,
  "sektor_olahraga": seychelles_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 27,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 36,
      "kepuasan": 88,
      "pendapatan": 1
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
    "gaji_guru": 50,
    "gaji_medis": 50,
    "gaji_militer": 40
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 0
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 30800,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 126320,
    "harga_pendidikan": 677460
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": seychelles_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 32,
    "pendidikan": 23,
    "keamanan": 10,
    "keuangan": 27,
    "lingkungan": 60
  }
};

