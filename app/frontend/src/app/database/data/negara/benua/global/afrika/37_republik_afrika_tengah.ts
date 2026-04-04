import { CountryData } from "@/app/database/data/types";
import { republik_afrika_tengah_agrikultur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/5_sektor_agrikultur/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/2_sektor_mineral_kritis/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_farmasi } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/8_sektor_farmasi/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/9_infrastruktur/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_listrik } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/1_sektor_listrik_nasional/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_manufaktur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/3_manufaktur/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/7_sektor_olahan_pangan/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_perikanan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/6_sektor_perikanan/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_peternakan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/4_sektor_peternakan/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/afrika/37_republik_afrika_tengah";
import { republik_afrika_tengah_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/afrika/37_republik_afrika_tengah";

export const republik_afrika_tengah: CountryData = {
  ...republik_afrika_tengah_profile,
  "sektor_listrik": republik_afrika_tengah_listrik,
  "infrastruktur": republik_afrika_tengah_infrastruktur,
  "sektor_ekstraksi": republik_afrika_tengah_ekstraksi,
  "sektor_manufaktur": republik_afrika_tengah_manufaktur,
  "sektor_peternakan": republik_afrika_tengah_peternakan,
  "sektor_agrikultur": republik_afrika_tengah_agrikultur,
  "sektor_perikanan": republik_afrika_tengah_perikanan,
  "sektor_olahan_pangan": republik_afrika_tengah_olahan_pangan,
  "sektor_farmasi": republik_afrika_tengah_farmasi,
  "sektor_pertahanan": republik_afrika_tengah_pertahanan,
  "armada_militer": republik_afrika_tengah_armada,
  "militer_strategis": republik_afrika_tengah_strategis,
  "armada_kepolisian": republik_afrika_tengah_kepolisian,
  "pabrik_militer": republik_afrika_tengah_pabrik,
    "pendidikan": republik_afrika_tengah_pendidikan,
  "kesehatan": republik_afrika_tengah_kesehatan,
  "hukum": republik_afrika_tengah_hukum,
  "sektor_olahraga": republik_afrika_tengah_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 30,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 24,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 4,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 30,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 25,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 25,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 40,
    "gaji_militer": 40
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 25,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 2240,
    "harga_air": 4160,
    "harga_obat": 221060,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": republik_afrika_tengah_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 9,
    "pendidikan": 38,
    "keamanan": 22,
    "keuangan": 32,
    "lingkungan": 60
  }
};

