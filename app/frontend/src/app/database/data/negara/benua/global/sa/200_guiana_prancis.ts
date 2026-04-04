import { CountryData } from "@/app/database/data/types";
import { guiana_prancis_agrikultur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/5_sektor_agrikultur/sa/200_guiana_prancis";
import { guiana_prancis_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/sa/200_guiana_prancis";
import { guiana_prancis_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/2_sektor_mineral_kritis/sa/200_guiana_prancis";
import { guiana_prancis_farmasi } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/8_sektor_farmasi/sa/200_guiana_prancis";
import { guiana_prancis_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/sa/200_guiana_prancis";
import { guiana_prancis_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/9_infrastruktur/sa/200_guiana_prancis";
import { guiana_prancis_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/sa/200_guiana_prancis";
import { guiana_prancis_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/sa/200_guiana_prancis";
import { guiana_prancis_listrik } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/1_sektor_listrik_nasional/sa/200_guiana_prancis";
import { guiana_prancis_manufaktur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/3_manufaktur/sa/200_guiana_prancis";
import { guiana_prancis_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/7_sektor_olahan_pangan/sa/200_guiana_prancis";
import { guiana_prancis_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/sa/200_guiana_prancis";
import { guiana_prancis_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/sa/200_guiana_prancis";
import { guiana_prancis_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/sa/200_guiana_prancis";
import { guiana_prancis_perikanan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/6_sektor_perikanan/sa/200_guiana_prancis";
import { guiana_prancis_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/sa/200_guiana_prancis";
import { guiana_prancis_peternakan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/4_sektor_peternakan/sa/200_guiana_prancis";
import { guiana_prancis_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/sa/200_guiana_prancis";
import { guiana_prancis_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/sa/200_guiana_prancis";
import { guiana_prancis_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/sa/200_guiana_prancis";

export const guiana_prancis: CountryData = {
  ...guiana_prancis_profile,
  "sektor_listrik": guiana_prancis_listrik,
  "infrastruktur": guiana_prancis_infrastruktur,
  "sektor_ekstraksi": guiana_prancis_ekstraksi,
  "sektor_manufaktur": guiana_prancis_manufaktur,
  "sektor_peternakan": guiana_prancis_peternakan,
  "sektor_agrikultur": guiana_prancis_agrikultur,
  "sektor_perikanan": guiana_prancis_perikanan,
  "sektor_olahan_pangan": guiana_prancis_olahan_pangan,
  "sektor_farmasi": guiana_prancis_farmasi,
  "sektor_pertahanan": guiana_prancis_pertahanan,
  "armada_militer": guiana_prancis_armada,
  "militer_strategis": guiana_prancis_strategis,
  "armada_kepolisian": guiana_prancis_kepolisian,
  "pabrik_militer": guiana_prancis_pabrik,
    "pendidikan": guiana_prancis_pendidikan,
  "kesehatan": guiana_prancis_kesehatan,
  "hukum": guiana_prancis_hukum,
  "sektor_olahraga": guiana_prancis_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 20,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 5
    },
    "lingkungan": {
      "tarif": 1,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 14,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 28800,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 800,
    "harga_air": 4160,
    "harga_obat": 315800,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": guiana_prancis_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 25,
    "pendidikan": 14,
    "keamanan": 13,
    "keuangan": 27,
    "lingkungan": 60
  }
};

