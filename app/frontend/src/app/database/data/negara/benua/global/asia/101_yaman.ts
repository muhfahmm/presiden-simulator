import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { yaman_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/asia/101_yaman";
import { yaman_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/asia/101_yaman";
import { yaman_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/asia/101_yaman";
import { yaman_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/asia/101_yaman";
import { yaman_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/asia/101_yaman";
import { yaman_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/asia/101_yaman";
import { yaman_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/asia/101_yaman";
import { yaman_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/asia/101_yaman";
import { yaman_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/asia/101_yaman";
import { yaman_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/asia/101_yaman";
import { yaman_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/asia/101_yaman";
import { yaman_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/asia/101_yaman";
import { yaman_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/asia/101_yaman";
import { yaman_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/asia/101_yaman";
import { yaman_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/asia/101_yaman";
import { yaman_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/asia/101_yaman";
import { yaman_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/asia/101_yaman";
import { yaman_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/101_yaman";
import { yaman_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/asia/101_yaman";
import { yaman_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/asia/101_yaman";

export const yaman: CountryData = {
  ...yaman_profile,
  "sektor_listrik": yaman_listrik,
  "infrastruktur": yaman_infrastruktur,
  "sektor_ekstraksi": yaman_ekstraksi,
  "sektor_manufaktur": yaman_manufaktur,
  "sektor_peternakan": yaman_peternakan,
  "sektor_agrikultur": yaman_agrikultur,
  "sektor_perikanan": yaman_perikanan,
  "sektor_olahan_pangan": yaman_olahan_pangan,
  "sektor_farmasi": yaman_farmasi,
  "sektor_pertahanan": yaman_pertahanan,
  "armada_militer": yaman_armada,
  "militer_strategis": yaman_strategis,
  "armada_kepolisian": yaman_kepolisian,
  "pabrik_militer": yaman_pabrik,
    "pendidikan": yaman_pendidikan,
  "kesehatan": yaman_kesehatan,
  "hukum": yaman_hukum,
  "sektor_olahraga": yaman_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 5,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 22
    },
    "penghasilan": {
      "tarif": 25,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 3,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 4 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 70,
    "gaji_medis": 60,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 12320,
    "harga_gula": 28800,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 2600,
    "harga_obat": 157900,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": yaman_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 20,
    "pendidikan": 10,
    "keamanan": 34,
    "keuangan": 22,
    "lingkungan": 60
  }
};

