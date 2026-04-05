import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { chile_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/sa/198_chile";
import { chile_armada } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/2_armada_militer/sa/198_chile";
import { chile_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/sa/198_chile";
import { chile_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/sa/198_chile";
import { chile_hukum } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/3_hukum/sa/198_chile";
import { chile_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/sa/198_chile";
import { chile_kepolisian } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/4_armada_kepolisian/sa/198_chile";
import { chile_kesehatan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/2_kesehatan/sa/198_chile";
import { chile_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/sa/198_chile";
import { chile_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/sa/198_chile";
import { chile_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/sa/198_chile";
import { chile_olahraga } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/4_olahraga/sa/198_chile";
import { chile_pabrik } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/5_pabrik_militer/sa/198_chile";
import { chile_pendidikan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/1_pendidikan/sa/198_chile";
import { chile_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/sa/198_chile";
import { chile_pertahanan } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/1_sektor_pertahanan/sa/198_chile";
import { chile_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/sa/198_chile";
import { chile_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/sa/198_chile";
import { chile_strategis } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/3_militer_strategis/sa/198_chile";
import { chile_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/sa/198_chile";

export const chile: CountryData = {
  ...chile_profile,
  "sektor_listrik": chile_listrik,
  "infrastruktur": chile_infrastruktur,
  "sektor_ekstraksi": chile_ekstraksi,
  "sektor_manufaktur": chile_manufaktur,
  "sektor_peternakan": chile_peternakan,
  "sektor_agrikultur": chile_agrikultur,
  "sektor_perikanan": chile_perikanan,
  "sektor_olahan_pangan": chile_olahan_pangan,
  "sektor_farmasi": chile_farmasi,
  "sektor_pertahanan": chile_pertahanan,
  "armada_militer": chile_armada,
  "militer_strategis": chile_strategis,
  "armada_kepolisian": chile_kepolisian,
  "pabrik_militer": chile_pabrik,
    "pendidikan": chile_pendidikan,
  "kesehatan": chile_kesehatan,
  "hukum": chile_hukum,
  "sektor_olahraga": chile_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 19,
      "kepuasan": 67,
      "pendapatan": 181
    },
    "korporasi": {
      "tarif": 34,
      "kepuasan": 52,
      "pendapatan": 128
    },
    "penghasilan": {
      "tarif": 17,
      "kepuasan": 61,
      "pendapatan": 144
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 133
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 10
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 17 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 49 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 68
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 70,
    "gaji_medis": 80,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 145740,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 15550,
    "harga_bbm": 5350,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 677460
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": chile_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 20,
    "pendidikan": 37,
    "keamanan": 18,
    "keuangan": 40,
    "lingkungan": 60
  }
};

