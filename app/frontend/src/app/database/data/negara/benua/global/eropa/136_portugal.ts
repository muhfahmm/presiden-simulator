import { CountryData } from "@/app/database/data/types";
import { portugal_agrikultur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/5_sektor_agrikultur/eropa/136_portugal";
import { portugal_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/eropa/136_portugal";
import { portugal_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/2_sektor_mineral_kritis/eropa/136_portugal";
import { portugal_farmasi } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/8_sektor_farmasi/eropa/136_portugal";
import { portugal_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/eropa/136_portugal";
import { portugal_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/9_infrastruktur/eropa/136_portugal";
import { portugal_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/eropa/136_portugal";
import { portugal_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/eropa/136_portugal";
import { portugal_listrik } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/1_sektor_listrik_nasional/eropa/136_portugal";
import { portugal_manufaktur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/3_manufaktur/eropa/136_portugal";
import { portugal_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/7_sektor_olahan_pangan/eropa/136_portugal";
import { portugal_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/eropa/136_portugal";
import { portugal_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/eropa/136_portugal";
import { portugal_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/eropa/136_portugal";
import { portugal_perikanan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/6_sektor_perikanan/eropa/136_portugal";
import { portugal_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/eropa/136_portugal";
import { portugal_peternakan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/4_sektor_peternakan/eropa/136_portugal";
import { portugal_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/eropa/136_portugal";
import { portugal_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/eropa/136_portugal";
import { portugal_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/eropa/136_portugal";

export const portugal: CountryData = {
  ...portugal_profile,
  "sektor_listrik": portugal_listrik,
  "infrastruktur": portugal_infrastruktur,
  "sektor_ekstraksi": portugal_ekstraksi,
  "sektor_manufaktur": portugal_manufaktur,
  "sektor_peternakan": portugal_peternakan,
  "sektor_agrikultur": portugal_agrikultur,
  "sektor_perikanan": portugal_perikanan,
  "sektor_olahan_pangan": portugal_olahan_pangan,
  "sektor_farmasi": portugal_farmasi,
  "sektor_pertahanan": portugal_pertahanan,
  "armada_militer": portugal_armada,
  "militer_strategis": portugal_strategis,
  "armada_kepolisian": portugal_kepolisian,
  "pabrik_militer": portugal_pabrik,
    "pendidikan": portugal_pendidikan,
  "kesehatan": portugal_kesehatan,
  "hukum": portugal_hukum,
  "sektor_olahraga": portugal_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 16,
      "kepuasan": 67,
      "pendapatan": 114
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 204
    },
    "penghasilan": {
      "tarif": 16,
      "kepuasan": 61,
      "pendapatan": 52
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 32
    },
    "lingkungan": {
      "tarif": 18,
      "kepuasan": 88,
      "pendapatan": 99
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 14 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 41 },
    "lainnya": {
      "tarif": 28,
      "kepuasan": 93,
      "pendapatan": 194
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
    "harga_beras": 8000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 800,
    "harga_air": 2600,
    "harga_obat": 157900,
    "harga_pendidikan": 677460
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": portugal_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 16,
    "pendidikan": 33,
    "keamanan": 9,
    "keuangan": 12,
    "lingkungan": 60
  }
};

