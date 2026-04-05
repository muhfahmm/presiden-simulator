import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { luksemburg_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/eropa/128_luksemburg";
import { luksemburg_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/eropa/128_luksemburg";
import { luksemburg_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/eropa/128_luksemburg";
import { luksemburg_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/eropa/128_luksemburg";
import { luksemburg_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/eropa/128_luksemburg";
import { luksemburg_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/eropa/128_luksemburg";
import { luksemburg_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/eropa/128_luksemburg";
import { luksemburg_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/eropa/128_luksemburg";
import { luksemburg_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/eropa/128_luksemburg";
import { luksemburg_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/eropa/128_luksemburg";
import { luksemburg_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/eropa/128_luksemburg";
import { luksemburg_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/eropa/128_luksemburg";
import { luksemburg_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/eropa/128_luksemburg";
import { luksemburg_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/eropa/128_luksemburg";
import { luksemburg_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/eropa/128_luksemburg";
import { luksemburg_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/eropa/128_luksemburg";
import { luksemburg_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/eropa/128_luksemburg";
import { luksemburg_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/eropa/128_luksemburg";
import { luksemburg_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/eropa/128_luksemburg";
import { luksemburg_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/eropa/128_luksemburg";

export const luksemburg: CountryData = {
  ...luksemburg_profile,
  "sektor_listrik": luksemburg_listrik,
  "infrastruktur": luksemburg_infrastruktur,
  "sektor_ekstraksi": luksemburg_ekstraksi,
  "sektor_manufaktur": luksemburg_manufaktur,
  "sektor_peternakan": luksemburg_peternakan,
  "sektor_agrikultur": luksemburg_agrikultur,
  "sektor_perikanan": luksemburg_perikanan,
  "sektor_olahan_pangan": luksemburg_olahan_pangan,
  "sektor_farmasi": luksemburg_farmasi,
  "sektor_pertahanan": luksemburg_pertahanan,
  "armada_militer": luksemburg_armada,
  "militer_strategis": luksemburg_strategis,
  "armada_kepolisian": luksemburg_kepolisian,
  "pabrik_militer": luksemburg_pabrik,
    "pendidikan": luksemburg_pendidikan,
  "kesehatan": luksemburg_kesehatan,
  "hukum": luksemburg_hukum,
  "sektor_olahraga": luksemburg_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 17
    },
    "korporasi": {
      "tarif": 16,
      "kepuasan": 52,
      "pendapatan": 31
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 38
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 34
    },
    "lingkungan": {
      "tarif": 29,
      "kepuasan": 88,
      "pendapatan": 31
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 5 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 13 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 25
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 100,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 62200,
    "harga_bbm": 5350,
    "harga_listrik": 1600,
    "harga_air": 10400,
    "harga_obat": 157900,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": luksemburg_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 16,
    "pendidikan": 39,
    "keamanan": 39,
    "keuangan": 6,
    "lingkungan": 60
  }
};

