import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { moldova_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/eropa/131_moldova";
import { moldova_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/eropa/131_moldova";
import { moldova_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/eropa/131_moldova";
import { moldova_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/eropa/131_moldova";
import { moldova_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/eropa/131_moldova";
import { moldova_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/eropa/131_moldova";
import { moldova_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/eropa/131_moldova";
import { moldova_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/eropa/131_moldova";
import { moldova_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/eropa/131_moldova";
import { moldova_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/eropa/131_moldova";
import { moldova_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/eropa/131_moldova";
import { moldova_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/eropa/131_moldova";
import { moldova_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/eropa/131_moldova";
import { moldova_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/eropa/131_moldova";
import { moldova_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/eropa/131_moldova";
import { moldova_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/eropa/131_moldova";
import { moldova_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/eropa/131_moldova";
import { moldova_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/eropa/131_moldova";
import { moldova_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/eropa/131_moldova";
import { moldova_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/eropa/131_moldova";

export const moldova: CountryData = {
  ...moldova_profile,
  "sektor_listrik": moldova_listrik,
  "infrastruktur": moldova_infrastruktur,
  "sektor_ekstraksi": moldova_ekstraksi,
  "sektor_manufaktur": moldova_manufaktur,
  "sektor_peternakan": moldova_peternakan,
  "sektor_agrikultur": moldova_agrikultur,
  "sektor_perikanan": moldova_perikanan,
  "sektor_olahan_pangan": moldova_olahan_pangan,
  "sektor_farmasi": moldova_farmasi,
  "sektor_pertahanan": moldova_pertahanan,
  "armada_militer": moldova_armada,
  "militer_strategis": moldova_strategis,
  "armada_kepolisian": moldova_kepolisian,
  "pabrik_militer": moldova_pabrik,
    "pendidikan": moldova_pendidikan,
  "kesehatan": moldova_kesehatan,
  "hukum": moldova_hukum,
  "sektor_olahraga": moldova_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 17,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 36,
      "kepuasan": 86,
      "pendapatan": 15
    },
    "lingkungan": {
      "tarif": 21,
      "kepuasan": 88,
      "pendapatan": 5
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 33,
      "kepuasan": 93,
      "pendapatan": 12
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
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 12320,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 2600,
    "harga_obat": 221060,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": moldova_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 11,
    "pendidikan": 27,
    "keamanan": 22,
    "keuangan": 9,
    "lingkungan": 60
  }
};

