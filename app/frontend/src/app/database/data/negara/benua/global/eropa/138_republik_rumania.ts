import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { republik_rumania_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/eropa/138_republik_rumania";
import { republik_rumania_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/eropa/138_republik_rumania";
import { republik_rumania_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/eropa/138_republik_rumania";
import { republik_rumania_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/eropa/138_republik_rumania";
import { republik_rumania_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/eropa/138_republik_rumania";
import { republik_rumania_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/eropa/138_republik_rumania";
import { republik_rumania_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/eropa/138_republik_rumania";
import { republik_rumania_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/eropa/138_republik_rumania";
import { republik_rumania_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/eropa/138_republik_rumania";
import { republik_rumania_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/eropa/138_republik_rumania";
import { republik_rumania_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/eropa/138_republik_rumania";
import { republik_rumania_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/eropa/138_republik_rumania";
import { republik_rumania_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/eropa/138_republik_rumania";
import { republik_rumania_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/eropa/138_republik_rumania";
import { republik_rumania_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/eropa/138_republik_rumania";
import { republik_rumania_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/eropa/138_republik_rumania";
import { republik_rumania_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/eropa/138_republik_rumania";
import { republik_rumania_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/eropa/138_republik_rumania";
import { republik_rumania_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/eropa/138_republik_rumania";
import { republik_rumania_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/eropa/138_republik_rumania";

export const republik_rumania: CountryData = {
  ...republik_rumania_profile,
  "sektor_listrik": republik_rumania_listrik,
  "infrastruktur": republik_rumania_infrastruktur,
  "sektor_ekstraksi": republik_rumania_ekstraksi,
  "sektor_manufaktur": republik_rumania_manufaktur,
  "sektor_peternakan": republik_rumania_peternakan,
  "sektor_agrikultur": republik_rumania_agrikultur,
  "sektor_perikanan": republik_rumania_perikanan,
  "sektor_olahan_pangan": republik_rumania_olahan_pangan,
  "sektor_farmasi": republik_rumania_farmasi,
  "sektor_pertahanan": republik_rumania_pertahanan,
  "armada_militer": republik_rumania_armada,
  "militer_strategis": republik_rumania_strategis,
  "armada_kepolisian": republik_rumania_kepolisian,
  "pabrik_militer": republik_rumania_pabrik,
    "pendidikan": republik_rumania_pendidikan,
  "kesehatan": republik_rumania_kesehatan,
  "hukum": republik_rumania_hukum,
  "sektor_olahraga": republik_rumania_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 13,
      "kepuasan": 67,
      "pendapatan": 132
    },
    "korporasi": {
      "tarif": 21,
      "kepuasan": 52,
      "pendapatan": 177
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 137
    },
    "bea_cukai": {
      "tarif": 15,
      "kepuasan": 86,
      "pendapatan": 137
    },
    "lingkungan": {
      "tarif": 9,
      "kepuasan": 88,
      "pendapatan": 85
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 18 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 52 },
    "lainnya": {
      "tarif": 31,
      "kepuasan": 93,
      "pendapatan": 305
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 83280,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": republik_rumania_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 16,
    "pendidikan": 17,
    "keamanan": 19,
    "keuangan": 26,
    "lingkungan": 60
  }
};

