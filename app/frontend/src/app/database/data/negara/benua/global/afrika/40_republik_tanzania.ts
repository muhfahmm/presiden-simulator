import { CountryData } from "@/app/database/data/types";
import { republik_tanzania_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/afrika/40_republik_tanzania";
import { republik_tanzania_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/afrika/40_republik_tanzania";
import { republik_tanzania_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/afrika/40_republik_tanzania";
import { republik_tanzania_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/afrika/40_republik_tanzania";
import { republik_tanzania_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/afrika/40_republik_tanzania";
import { republik_tanzania_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/afrika/40_republik_tanzania";
import { republik_tanzania_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/afrika/40_republik_tanzania";
import { republik_tanzania_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/afrika/40_republik_tanzania";
import { republik_tanzania_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/afrika/40_republik_tanzania";
import { republik_tanzania_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/afrika/40_republik_tanzania";
import { republik_tanzania_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/afrika/40_republik_tanzania";
import { republik_tanzania_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/afrika/40_republik_tanzania";
import { republik_tanzania_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/afrika/40_republik_tanzania";
import { republik_tanzania_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/afrika/40_republik_tanzania";
import { republik_tanzania_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/afrika/40_republik_tanzania";
import { republik_tanzania_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/afrika/40_republik_tanzania";
import { republik_tanzania_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/afrika/40_republik_tanzania";
import { republik_tanzania_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/40_republik_tanzania";
import { republik_tanzania_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/afrika/40_republik_tanzania";
import { republik_tanzania_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/afrika/40_republik_tanzania";

export const republik_tanzania: CountryData = {
  ...republik_tanzania_profile,
  "sektor_listrik": republik_tanzania_listrik,
  "infrastruktur": republik_tanzania_infrastruktur,
  "sektor_ekstraksi": republik_tanzania_ekstraksi,
  "sektor_manufaktur": republik_tanzania_manufaktur,
  "sektor_peternakan": republik_tanzania_peternakan,
  "sektor_agrikultur": republik_tanzania_agrikultur,
  "sektor_perikanan": republik_tanzania_perikanan,
  "sektor_olahan_pangan": republik_tanzania_olahan_pangan,
  "sektor_farmasi": republik_tanzania_farmasi,
  "sektor_pertahanan": republik_tanzania_pertahanan,
  "armada_militer": republik_tanzania_armada,
  "militer_strategis": republik_tanzania_strategis,
  "armada_kepolisian": republik_tanzania_kepolisian,
  "pabrik_militer": republik_tanzania_pabrik,
    "pendidikan": republik_tanzania_pendidikan,
  "kesehatan": republik_tanzania_kesehatan,
  "hukum": republik_tanzania_hukum,
  "sektor_olahraga": republik_tanzania_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 31,
      "kepuasan": 67,
      "pendapatan": 58
    },
    "korporasi": {
      "tarif": 38,
      "kepuasan": 52,
      "pendapatan": 82
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 51
    },
    "bea_cukai": {
      "tarif": 27,
      "kepuasan": 86,
      "pendapatan": 27
    },
    "lingkungan": {
      "tarif": 33,
      "kepuasan": 88,
      "pendapatan": 42
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 11 },
    "lainnya": {
      "tarif": 24,
      "kepuasan": 93,
      "pendapatan": 23
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 30800,
    "harga_gula": 14400,
    "harga_telur": 15550,
    "harga_bbm": 5350,
    "harga_listrik": 800,
    "harga_air": 4160,
    "harga_obat": 221060,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": republik_tanzania_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 17,
    "pendidikan": 34,
    "keamanan": 40,
    "keuangan": 40,
    "lingkungan": 60
  }
};

