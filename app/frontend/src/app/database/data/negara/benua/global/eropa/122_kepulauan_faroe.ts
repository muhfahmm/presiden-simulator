import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { kepulauan_faroe_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_armada } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/2_armada_militer/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_hukum } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/3_hukum/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_kepolisian } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/4_armada_kepolisian/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_kesehatan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/2_kesehatan/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_olahraga } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/4_olahraga/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_pabrik } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/5_pabrik_militer/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_pendidikan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/1_pendidikan/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_pertahanan } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/1_sektor_pertahanan/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_strategis } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/3_militer_strategis/eropa/122_kepulauan_faroe";
import { kepulauan_faroe_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/eropa/122_kepulauan_faroe";

export const kepulauan_faroe: CountryData = {
  ...kepulauan_faroe_profile,
  "sektor_listrik": kepulauan_faroe_listrik,
  "infrastruktur": kepulauan_faroe_infrastruktur,
  "sektor_ekstraksi": kepulauan_faroe_ekstraksi,
  "sektor_manufaktur": kepulauan_faroe_manufaktur,
  "sektor_peternakan": kepulauan_faroe_peternakan,
  "sektor_agrikultur": kepulauan_faroe_agrikultur,
  "sektor_perikanan": kepulauan_faroe_perikanan,
  "sektor_olahan_pangan": kepulauan_faroe_olahan_pangan,
  "sektor_farmasi": kepulauan_faroe_farmasi,
  "sektor_pertahanan": kepulauan_faroe_pertahanan,
  "armada_militer": kepulauan_faroe_armada,
  "militer_strategis": kepulauan_faroe_strategis,
  "armada_kepolisian": kepulauan_faroe_kepolisian,
  "pabrik_militer": kepulauan_faroe_pabrik,
    "pendidikan": kepulauan_faroe_pendidikan,
  "kesehatan": kepulauan_faroe_kesehatan,
  "hukum": kepulauan_faroe_hukum,
  "sektor_olahraga": kepulauan_faroe_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 35,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 30,
      "kepuasan": 86,
      "pendapatan": 6
    },
    "lingkungan": {
      "tarif": 34,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 0
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
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 28800,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 221060,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kepulauan_faroe_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 30,
    "pendidikan": 32,
    "keamanan": 9,
    "keuangan": 17,
    "lingkungan": 60
  }
};

