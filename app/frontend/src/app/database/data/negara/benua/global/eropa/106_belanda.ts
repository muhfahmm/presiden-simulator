import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { belanda_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/eropa/106_belanda";
import { belanda_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/eropa/106_belanda";
import { belanda_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/eropa/106_belanda";
import { belanda_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/eropa/106_belanda";
import { belanda_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/eropa/106_belanda";
import { belanda_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/eropa/106_belanda";
import { belanda_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/eropa/106_belanda";
import { belanda_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/eropa/106_belanda";
import { belanda_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/eropa/106_belanda";
import { belanda_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/eropa/106_belanda";
import { belanda_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/eropa/106_belanda";
import { belanda_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/eropa/106_belanda";
import { belanda_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/eropa/106_belanda";
import { belanda_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/eropa/106_belanda";
import { belanda_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/eropa/106_belanda";
import { belanda_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/eropa/106_belanda";
import { belanda_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/eropa/106_belanda";
import { belanda_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/eropa/106_belanda";
import { belanda_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/eropa/106_belanda";
import { belanda_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/eropa/106_belanda";

export const belanda: CountryData = {
  ...belanda_profile,
  "sektor_listrik": belanda_listrik,
  "infrastruktur": belanda_infrastruktur,
  "sektor_ekstraksi": belanda_ekstraksi,
  "sektor_manufaktur": belanda_manufaktur,
  "sektor_peternakan": belanda_peternakan,
  "sektor_agrikultur": belanda_agrikultur,
  "sektor_perikanan": belanda_perikanan,
  "sektor_olahan_pangan": belanda_olahan_pangan,
  "sektor_farmasi": belanda_farmasi,
  "sektor_pertahanan": belanda_pertahanan,
  "armada_militer": belanda_armada,
  "militer_strategis": belanda_strategis,
  "armada_kepolisian": belanda_kepolisian,
  "pabrik_militer": belanda_pabrik,
    "pendidikan": belanda_pendidikan,
  "kesehatan": belanda_kesehatan,
  "hukum": belanda_hukum,
  "sektor_olahraga": belanda_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 271
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 1015
    },
    "penghasilan": {
      "tarif": 35,
      "kepuasan": 61,
      "pendapatan": 489
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 610
    },
    "lingkungan": {
      "tarif": 31,
      "kepuasan": 88,
      "pendapatan": 731
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 53 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 159 },
    "lainnya": {
      "tarif": 5,
      "kepuasan": 93,
      "pendapatan": 129
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
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 7200,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 315800,
    "harga_pendidikan": 677460
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": belanda_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 23,
    "pendidikan": 25,
    "keamanan": 26,
    "keuangan": 30,
    "lingkungan": 60
  }
};

