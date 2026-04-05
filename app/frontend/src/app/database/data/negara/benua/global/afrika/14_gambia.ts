import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { gambia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/afrika/14_gambia";
import { gambia_armada } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/2_armada_militer/afrika/14_gambia";
import { gambia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/afrika/14_gambia";
import { gambia_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/afrika/14_gambia";
import { gambia_hukum } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/3_hukum/afrika/14_gambia";
import { gambia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/afrika/14_gambia";
import { gambia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/4_armada_kepolisian/afrika/14_gambia";
import { gambia_kesehatan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/2_kesehatan/afrika/14_gambia";
import { gambia_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/afrika/14_gambia";
import { gambia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/afrika/14_gambia";
import { gambia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/afrika/14_gambia";
import { gambia_olahraga } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/4_olahraga/afrika/14_gambia";
import { gambia_pabrik } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/5_pabrik_militer/afrika/14_gambia";
import { gambia_pendidikan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/1_pendidikan/afrika/14_gambia";
import { gambia_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/afrika/14_gambia";
import { gambia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/1_sektor_pertahanan/afrika/14_gambia";
import { gambia_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/afrika/14_gambia";
import { gambia_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/14_gambia";
import { gambia_strategis } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/3_militer_strategis/afrika/14_gambia";
import { gambia_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/afrika/14_gambia";

export const gambia: CountryData = {
  ...gambia_profile,
  "sektor_listrik": gambia_listrik,
  "infrastruktur": gambia_infrastruktur,
  "sektor_ekstraksi": gambia_ekstraksi,
  "sektor_manufaktur": gambia_manufaktur,
  "sektor_peternakan": gambia_peternakan,
  "sektor_agrikultur": gambia_agrikultur,
  "sektor_perikanan": gambia_perikanan,
  "sektor_olahan_pangan": gambia_olahan_pangan,
  "sektor_farmasi": gambia_farmasi,
  "sektor_pertahanan": gambia_pertahanan,
  "armada_militer": gambia_armada,
  "militer_strategis": gambia_strategis,
  "armada_kepolisian": gambia_kepolisian,
  "pabrik_militer": gambia_pabrik,
    "pendidikan": gambia_pendidikan,
  "kesehatan": gambia_kesehatan,
  "hukum": gambia_hukum,
  "sektor_olahraga": gambia_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 36,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 28,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 34,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 30,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 1,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 14,
      "kepuasan": 93,
      "pendapatan": 0
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
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 12320,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 967800
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": gambia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 33,
    "pendidikan": 23,
    "keamanan": 22,
    "keuangan": 31,
    "lingkungan": 60
  }
};

