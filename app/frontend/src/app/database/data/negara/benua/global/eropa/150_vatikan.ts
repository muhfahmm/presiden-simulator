import { CountryData } from "@/app/database/data/types";
import { vatikan_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/eropa/150_vatikan";
import { vatikan_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/eropa/150_vatikan";
import { vatikan_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/eropa/150_vatikan";
import { vatikan_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/eropa/150_vatikan";
import { vatikan_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/eropa/150_vatikan";
import { vatikan_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/eropa/150_vatikan";
import { vatikan_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/eropa/150_vatikan";
import { vatikan_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/eropa/150_vatikan";
import { vatikan_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/eropa/150_vatikan";
import { vatikan_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/eropa/150_vatikan";
import { vatikan_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/eropa/150_vatikan";
import { vatikan_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/eropa/150_vatikan";
import { vatikan_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/eropa/150_vatikan";
import { vatikan_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/eropa/150_vatikan";
import { vatikan_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/eropa/150_vatikan";
import { vatikan_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/eropa/150_vatikan";
import { vatikan_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/eropa/150_vatikan";
import { vatikan_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/eropa/150_vatikan";
import { vatikan_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/eropa/150_vatikan";
import { vatikan_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/eropa/150_vatikan";

export const vatikan: CountryData = {
  ...vatikan_profile,
  "sektor_listrik": vatikan_listrik,
  "infrastruktur": vatikan_infrastruktur,
  "sektor_ekstraksi": vatikan_ekstraksi,
  "sektor_manufaktur": vatikan_manufaktur,
  "sektor_peternakan": vatikan_peternakan,
  "sektor_agrikultur": vatikan_agrikultur,
  "sektor_perikanan": vatikan_perikanan,
  "sektor_olahan_pangan": vatikan_olahan_pangan,
  "sektor_farmasi": vatikan_farmasi,
  "sektor_pertahanan": vatikan_pertahanan,
  "armada_militer": vatikan_armada,
  "militer_strategis": vatikan_strategis,
  "armada_kepolisian": vatikan_kepolisian,
  "pabrik_militer": vatikan_pabrik,
    "pendidikan": vatikan_pendidikan,
  "kesehatan": vatikan_kesehatan,
  "hukum": vatikan_hukum,
  "sektor_olahraga": vatikan_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 15,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 1,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 4,
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
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 30800,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 3200,
    "harga_air": 4160,
    "harga_obat": 157900,
    "harga_pendidikan": 241950
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": vatikan_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 17,
    "pendidikan": 23,
    "keamanan": 35,
    "keuangan": 17,
    "lingkungan": 60
  }
};

