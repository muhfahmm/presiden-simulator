import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { republik_zimbabwe_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_armada } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/2_armada_militer/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_hukum } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/3_hukum/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_kepolisian } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/4_armada_kepolisian/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_kesehatan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/2_kesehatan/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_olahraga } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/4_olahraga/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_pabrik } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/5_pabrik_militer/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_pendidikan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/1_pendidikan/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_pertahanan } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/1_sektor_pertahanan/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_strategis } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/3_militer_strategis/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/afrika/43_republik_zimbabwe";

export const republik_zimbabwe: CountryData = {
  ...republik_zimbabwe_profile,
  "sektor_listrik": republik_zimbabwe_listrik,
  "infrastruktur": republik_zimbabwe_infrastruktur,
  "sektor_ekstraksi": republik_zimbabwe_ekstraksi,
  "sektor_manufaktur": republik_zimbabwe_manufaktur,
  "sektor_peternakan": republik_zimbabwe_peternakan,
  "sektor_agrikultur": republik_zimbabwe_agrikultur,
  "sektor_perikanan": republik_zimbabwe_perikanan,
  "sektor_olahan_pangan": republik_zimbabwe_olahan_pangan,
  "sektor_farmasi": republik_zimbabwe_farmasi,
  "sektor_pertahanan": republik_zimbabwe_pertahanan,
  "armada_militer": republik_zimbabwe_armada,
  "militer_strategis": republik_zimbabwe_strategis,
  "armada_kepolisian": republik_zimbabwe_kepolisian,
  "pabrik_militer": republik_zimbabwe_pabrik,
    "pendidikan": republik_zimbabwe_pendidikan,
  "kesehatan": republik_zimbabwe_kesehatan,
  "hukum": republik_zimbabwe_hukum,
  "sektor_olahraga": republik_zimbabwe_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 34,
      "kepuasan": 67,
      "pendapatan": 15
    },
    "korporasi": {
      "tarif": 25,
      "kepuasan": 52,
      "pendapatan": 13
    },
    "penghasilan": {
      "tarif": 18,
      "kepuasan": 61,
      "pendapatan": 7
    },
    "bea_cukai": {
      "tarif": 18,
      "kepuasan": 86,
      "pendapatan": 7
    },
    "lingkungan": {
      "tarif": 3,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 60
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
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": republik_zimbabwe_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 31,
    "pendidikan": 17,
    "keamanan": 27,
    "keuangan": 5,
    "lingkungan": 60
  }
};

