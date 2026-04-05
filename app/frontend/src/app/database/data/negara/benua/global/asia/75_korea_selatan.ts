import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { korea_selatan_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/asia/75_korea_selatan";
import { korea_selatan_armada } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/2_armada_militer/asia/75_korea_selatan";
import { korea_selatan_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/asia/75_korea_selatan";
import { korea_selatan_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/asia/75_korea_selatan";
import { korea_selatan_hukum } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/3_hukum/asia/75_korea_selatan";
import { korea_selatan_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/asia/75_korea_selatan";
import { korea_selatan_kepolisian } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/4_armada_kepolisian/asia/75_korea_selatan";
import { korea_selatan_kesehatan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/2_kesehatan/asia/75_korea_selatan";
import { korea_selatan_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/asia/75_korea_selatan";
import { korea_selatan_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/asia/75_korea_selatan";
import { korea_selatan_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/asia/75_korea_selatan";
import { korea_selatan_olahraga } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/4_olahraga/asia/75_korea_selatan";
import { korea_selatan_pabrik } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/5_pabrik_militer/asia/75_korea_selatan";
import { korea_selatan_pendidikan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/1_pendidikan/asia/75_korea_selatan";
import { korea_selatan_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/asia/75_korea_selatan";
import { korea_selatan_pertahanan } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/1_sektor_pertahanan/asia/75_korea_selatan";
import { korea_selatan_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/asia/75_korea_selatan";
import { korea_selatan_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/75_korea_selatan";
import { korea_selatan_strategis } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/3_militer_strategis/asia/75_korea_selatan";
import { korea_selatan_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/asia/75_korea_selatan";

export const korea_selatan: CountryData = {
  ...korea_selatan_profile,
  "sektor_listrik": korea_selatan_listrik,
  "infrastruktur": korea_selatan_infrastruktur,
  "sektor_ekstraksi": korea_selatan_ekstraksi,
  "sektor_manufaktur": korea_selatan_manufaktur,
  "sektor_peternakan": korea_selatan_peternakan,
  "sektor_agrikultur": korea_selatan_agrikultur,
  "sektor_perikanan": korea_selatan_perikanan,
  "sektor_olahan_pangan": korea_selatan_olahan_pangan,
  "sektor_farmasi": korea_selatan_farmasi,
  "sektor_pertahanan": korea_selatan_pertahanan,
  "armada_militer": korea_selatan_armada,
  "militer_strategis": korea_selatan_strategis,
  "armada_kepolisian": korea_selatan_kepolisian,
  "pabrik_militer": korea_selatan_pabrik,
    "pendidikan": korea_selatan_pendidikan,
  "kesehatan": korea_selatan_kesehatan,
  "hukum": korea_selatan_hukum,
  "sektor_olahraga": korea_selatan_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 24,
      "kepuasan": 67,
      "pendapatan": 1153
    },
    "korporasi": {
      "tarif": 1,
      "kepuasan": 52,
      "pendapatan": 50
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 17
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 1632
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 1078
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 86 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 257 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 375
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 11520,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 157900,
    "harga_pendidikan": 677460
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": korea_selatan_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 7,
    "pendidikan": 34,
    "keamanan": 9,
    "keuangan": 12,
    "lingkungan": 60
  }
};

