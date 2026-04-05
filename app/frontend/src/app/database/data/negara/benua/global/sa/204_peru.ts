import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { peru_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/sa/204_peru";
import { peru_armada } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/2_armada_militer/sa/204_peru";
import { peru_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/sa/204_peru";
import { peru_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/sa/204_peru";
import { peru_hukum } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/3_hukum/sa/204_peru";
import { peru_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/sa/204_peru";
import { peru_kepolisian } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/4_armada_kepolisian/sa/204_peru";
import { peru_kesehatan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/2_kesehatan/sa/204_peru";
import { peru_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/sa/204_peru";
import { peru_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/sa/204_peru";
import { peru_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/sa/204_peru";
import { peru_olahraga } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/4_olahraga/sa/204_peru";
import { peru_pabrik } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/5_pabrik_militer/sa/204_peru";
import { peru_pendidikan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/1_pendidikan/sa/204_peru";
import { peru_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/sa/204_peru";
import { peru_pertahanan } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/1_sektor_pertahanan/sa/204_peru";
import { peru_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/sa/204_peru";
import { peru_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/sa/204_peru";
import { peru_strategis } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/3_militer_strategis/sa/204_peru";
import { peru_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/sa/204_peru";

export const peru: CountryData = {
  ...peru_profile,
  "sektor_listrik": peru_listrik,
  "infrastruktur": peru_infrastruktur,
  "sektor_ekstraksi": peru_ekstraksi,
  "sektor_manufaktur": peru_manufaktur,
  "sektor_peternakan": peru_peternakan,
  "sektor_agrikultur": peru_agrikultur,
  "sektor_perikanan": peru_perikanan,
  "sektor_olahan_pangan": peru_olahan_pangan,
  "sektor_farmasi": peru_farmasi,
  "sektor_pertahanan": peru_pertahanan,
  "armada_militer": peru_armada,
  "militer_strategis": peru_strategis,
  "armada_kepolisian": peru_kepolisian,
  "pabrik_militer": peru_pabrik,
    "pendidikan": peru_pendidikan,
  "kesehatan": peru_kesehatan,
  "hukum": peru_hukum,
  "sektor_olahraga": peru_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 33,
      "kepuasan": 67,
      "pendapatan": 196
    },
    "korporasi": {
      "tarif": 14,
      "kepuasan": 52,
      "pendapatan": 100
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 138
    },
    "bea_cukai": {
      "tarif": 30,
      "kepuasan": 86,
      "pendapatan": 218
    },
    "lingkungan": {
      "tarif": 24,
      "kepuasan": 88,
      "pendapatan": 74
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 13 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 38 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 6
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
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
    "harga_beras": 12800,
    "harga_daging_sapi": 83280,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 5350,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 126320,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": peru_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 19,
    "pendidikan": 28,
    "keamanan": 11,
    "keuangan": 11,
    "lingkungan": 60
  }
};

