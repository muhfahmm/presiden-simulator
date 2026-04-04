import { CountryData } from "@/app/database/data/types";
import { mozambik_agrikultur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/5_sektor_agrikultur/afrika/32_mozambik";
import { mozambik_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/afrika/32_mozambik";
import { mozambik_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/2_sektor_mineral_kritis/afrika/32_mozambik";
import { mozambik_farmasi } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/8_sektor_farmasi/afrika/32_mozambik";
import { mozambik_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/afrika/32_mozambik";
import { mozambik_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/9_infrastruktur/afrika/32_mozambik";
import { mozambik_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/afrika/32_mozambik";
import { mozambik_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/afrika/32_mozambik";
import { mozambik_listrik } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/1_sektor_listrik_nasional/afrika/32_mozambik";
import { mozambik_manufaktur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/3_manufaktur/afrika/32_mozambik";
import { mozambik_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/7_sektor_olahan_pangan/afrika/32_mozambik";
import { mozambik_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/afrika/32_mozambik";
import { mozambik_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/afrika/32_mozambik";
import { mozambik_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/afrika/32_mozambik";
import { mozambik_perikanan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/6_sektor_perikanan/afrika/32_mozambik";
import { mozambik_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/afrika/32_mozambik";
import { mozambik_peternakan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/4_sektor_peternakan/afrika/32_mozambik";
import { mozambik_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/32_mozambik";
import { mozambik_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/afrika/32_mozambik";
import { mozambik_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/afrika/32_mozambik";

export const mozambik: CountryData = {
  ...mozambik_profile,
  "sektor_listrik": mozambik_listrik,
  "infrastruktur": mozambik_infrastruktur,
  "sektor_ekstraksi": mozambik_ekstraksi,
  "sektor_manufaktur": mozambik_manufaktur,
  "sektor_peternakan": mozambik_peternakan,
  "sektor_agrikultur": mozambik_agrikultur,
  "sektor_perikanan": mozambik_perikanan,
  "sektor_olahan_pangan": mozambik_olahan_pangan,
  "sektor_farmasi": mozambik_farmasi,
  "sektor_pertahanan": mozambik_pertahanan,
  "armada_militer": mozambik_armada,
  "militer_strategis": mozambik_strategis,
  "armada_kepolisian": mozambik_kepolisian,
  "pabrik_militer": mozambik_pabrik,
    "pendidikan": mozambik_pendidikan,
  "kesehatan": mozambik_kesehatan,
  "hukum": mozambik_hukum,
  "sektor_olahraga": mozambik_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 35,
      "kepuasan": 67,
      "pendapatan": 10
    },
    "korporasi": {
      "tarif": 19,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 4,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 8,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 7
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 6,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 50,
    "gaji_medis": 50,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
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
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 14980,
    "harga_listrik": 2240,
    "harga_air": 7280,
    "harga_obat": 157900,
    "harga_pendidikan": 967800
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": mozambik_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 6,
    "pendidikan": 25,
    "keamanan": 1,
    "keuangan": 35,
    "lingkungan": 60
  }
};

