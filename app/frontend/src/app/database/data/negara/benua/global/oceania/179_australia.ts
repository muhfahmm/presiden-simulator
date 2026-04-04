import { CountryData } from "@/app/database/data/types";
import { australia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/5_sektor_agrikultur/oceania/179_australia";
import { australia_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/oceania/179_australia";
import { australia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/2_sektor_mineral_kritis/oceania/179_australia";
import { australia_farmasi } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/8_sektor_farmasi/oceania/179_australia";
import { australia_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/oceania/179_australia";
import { australia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/9_infrastruktur/oceania/179_australia";
import { australia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/oceania/179_australia";
import { australia_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/oceania/179_australia";
import { australia_listrik } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/1_sektor_listrik_nasional/oceania/179_australia";
import { australia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/3_manufaktur/oceania/179_australia";
import { australia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/7_sektor_olahan_pangan/oceania/179_australia";
import { australia_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/oceania/179_australia";
import { australia_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/oceania/179_australia";
import { australia_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/oceania/179_australia";
import { australia_perikanan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/6_sektor_perikanan/oceania/179_australia";
import { australia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/oceania/179_australia";
import { australia_peternakan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/4_sektor_peternakan/oceania/179_australia";
import { australia_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/oceania/179_australia";
import { australia_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/oceania/179_australia";
import { australia_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/oceania/179_australia";

export const australia: CountryData = {
  ...australia_profile,
  "sektor_listrik": australia_listrik,
  "infrastruktur": australia_infrastruktur,
  "sektor_ekstraksi": australia_ekstraksi,
  "sektor_manufaktur": australia_manufaktur,
  "sektor_peternakan": australia_peternakan,
  "sektor_agrikultur": australia_agrikultur,
  "sektor_perikanan": australia_perikanan,
  "sektor_olahan_pangan": australia_olahan_pangan,
  "sektor_farmasi": australia_farmasi,
  "sektor_pertahanan": australia_pertahanan,
  "armada_militer": australia_armada,
  "militer_strategis": australia_strategis,
  "armada_kepolisian": australia_kepolisian,
  "pabrik_militer": australia_pabrik,
    "pendidikan": australia_pendidikan,
  "kesehatan": australia_kesehatan,
  "hukum": australia_hukum,
  "sektor_olahraga": australia_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 17,
      "kepuasan": 67,
      "pendapatan": 392
    },
    "korporasi": {
      "tarif": 11,
      "kepuasan": 52,
      "pendapatan": 213
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 209
    },
    "bea_cukai": {
      "tarif": 13,
      "kepuasan": 86,
      "pendapatan": 509
    },
    "lingkungan": {
      "tarif": 33,
      "kepuasan": 88,
      "pendapatan": 635
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 84 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 251 },
    "lainnya": {
      "tarif": 19,
      "kepuasan": 93,
      "pendapatan": 764
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 80,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
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
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 43540,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 221060,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": australia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 37,
    "pendidikan": 7,
    "keamanan": 1,
    "keuangan": 14,
    "lingkungan": 60
  }
};

