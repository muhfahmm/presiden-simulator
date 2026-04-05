import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { austria_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/eropa/105_austria";
import { austria_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/eropa/105_austria";
import { austria_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/eropa/105_austria";
import { austria_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/eropa/105_austria";
import { austria_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/eropa/105_austria";
import { austria_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/eropa/105_austria";
import { austria_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/eropa/105_austria";
import { austria_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/eropa/105_austria";
import { austria_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/eropa/105_austria";
import { austria_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/eropa/105_austria";
import { austria_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/eropa/105_austria";
import { austria_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/eropa/105_austria";
import { austria_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/eropa/105_austria";
import { austria_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/eropa/105_austria";
import { austria_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/eropa/105_austria";
import { austria_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/eropa/105_austria";
import { austria_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/eropa/105_austria";
import { austria_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/eropa/105_austria";
import { austria_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/eropa/105_austria";
import { austria_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/eropa/105_austria";

export const austria: CountryData = {
  ...austria_profile,
  "sektor_listrik": austria_listrik,
  "infrastruktur": austria_infrastruktur,
  "sektor_ekstraksi": austria_ekstraksi,
  "sektor_manufaktur": austria_manufaktur,
  "sektor_peternakan": austria_peternakan,
  "sektor_agrikultur": austria_agrikultur,
  "sektor_perikanan": austria_perikanan,
  "sektor_olahan_pangan": austria_olahan_pangan,
  "sektor_farmasi": austria_farmasi,
  "sektor_pertahanan": austria_pertahanan,
  "armada_militer": austria_armada,
  "militer_strategis": austria_strategis,
  "armada_kepolisian": austria_kepolisian,
  "pabrik_militer": austria_pabrik,
    "pendidikan": austria_pendidikan,
  "kesehatan": austria_kesehatan,
  "hukum": austria_hukum,
  "sektor_olahraga": austria_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 170
    },
    "korporasi": {
      "tarif": 38,
      "kepuasan": 52,
      "pendapatan": 532
    },
    "penghasilan": {
      "tarif": 31,
      "kepuasan": 61,
      "pendapatan": 408
    },
    "bea_cukai": {
      "tarif": 10,
      "kepuasan": 86,
      "pendapatan": 117
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 64
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 25 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 75 },
    "lainnya": {
      "tarif": 30,
      "kepuasan": 93,
      "pendapatan": 219
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
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 7700,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 315800,
    "harga_pendidikan": 967800
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": austria_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 18,
    "pendidikan": 12,
    "keamanan": 23,
    "keuangan": 37,
    "lingkungan": 60
  }
};

