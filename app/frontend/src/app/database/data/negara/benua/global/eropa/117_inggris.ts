import { CountryData } from "@/app/database/data/types";
import { inggris_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/eropa/117_inggris";
import { inggris_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/eropa/117_inggris";
import { inggris_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/eropa/117_inggris";
import { inggris_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/eropa/117_inggris";
import { inggris_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/eropa/117_inggris";
import { inggris_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/eropa/117_inggris";
import { inggris_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/eropa/117_inggris";
import { inggris_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/eropa/117_inggris";
import { inggris_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/eropa/117_inggris";
import { inggris_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/eropa/117_inggris";
import { inggris_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/eropa/117_inggris";
import { inggris_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/eropa/117_inggris";
import { inggris_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/eropa/117_inggris";
import { inggris_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/eropa/117_inggris";
import { inggris_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/eropa/117_inggris";
import { inggris_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/eropa/117_inggris";
import { inggris_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/eropa/117_inggris";
import { inggris_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/eropa/117_inggris";
import { inggris_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/eropa/117_inggris";
import { inggris_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/eropa/117_inggris";

export const inggris: CountryData = {
  ...inggris_profile,
  "sektor_listrik": inggris_listrik,
  "infrastruktur": inggris_infrastruktur,
  "sektor_ekstraksi": inggris_ekstraksi,
  "sektor_manufaktur": inggris_manufaktur,
  "sektor_peternakan": inggris_peternakan,
  "sektor_agrikultur": inggris_agrikultur,
  "sektor_perikanan": inggris_perikanan,
  "sektor_olahan_pangan": inggris_olahan_pangan,
  "sektor_farmasi": inggris_farmasi,
  "sektor_pertahanan": inggris_pertahanan,
  "armada_militer": inggris_armada,
  "militer_strategis": inggris_strategis,
  "armada_kepolisian": inggris_kepolisian,
  "pabrik_militer": inggris_pabrik,
    "pendidikan": inggris_pendidikan,
  "kesehatan": inggris_kesehatan,
  "hukum": inggris_hukum,
  "sektor_olahraga": inggris_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 16,
      "kepuasan": 67,
      "pendapatan": 1495
    },
    "korporasi": {
      "tarif": 19,
      "kepuasan": 52,
      "pendapatan": 1669
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 2342
    },
    "bea_cukai": {
      "tarif": 35,
      "kepuasan": 86,
      "pendapatan": 3052
    },
    "lingkungan": {
      "tarif": 31,
      "kepuasan": 88,
      "pendapatan": 1976
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 171 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 511 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 641
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
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 7280,
    "harga_obat": 221060,
    "harga_pendidikan": 677460
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": inggris_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 32,
    "pendidikan": 31,
    "keamanan": 5,
    "keuangan": 2,
    "lingkungan": 60
  }
};

