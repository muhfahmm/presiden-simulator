import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { irlandia_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/eropa/118_irlandia";
import { irlandia_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/eropa/118_irlandia";
import { irlandia_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/eropa/118_irlandia";
import { irlandia_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/eropa/118_irlandia";
import { irlandia_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/eropa/118_irlandia";
import { irlandia_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/eropa/118_irlandia";
import { irlandia_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/eropa/118_irlandia";
import { irlandia_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/eropa/118_irlandia";
import { irlandia_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/eropa/118_irlandia";
import { irlandia_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/eropa/118_irlandia";
import { irlandia_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/eropa/118_irlandia";
import { irlandia_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/eropa/118_irlandia";
import { irlandia_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/eropa/118_irlandia";
import { irlandia_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/eropa/118_irlandia";
import { irlandia_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/eropa/118_irlandia";
import { irlandia_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/eropa/118_irlandia";
import { irlandia_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/eropa/118_irlandia";
import { irlandia_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/eropa/118_irlandia";
import { irlandia_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/eropa/118_irlandia";
import { irlandia_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/eropa/118_irlandia";

export const irlandia: CountryData = {
  ...irlandia_profile,
  "sektor_listrik": irlandia_listrik,
  "infrastruktur": irlandia_infrastruktur,
  "sektor_ekstraksi": irlandia_ekstraksi,
  "sektor_manufaktur": irlandia_manufaktur,
  "sektor_peternakan": irlandia_peternakan,
  "sektor_agrikultur": irlandia_agrikultur,
  "sektor_perikanan": irlandia_perikanan,
  "sektor_olahan_pangan": irlandia_olahan_pangan,
  "sektor_farmasi": irlandia_farmasi,
  "sektor_pertahanan": irlandia_pertahanan,
  "armada_militer": irlandia_armada,
  "militer_strategis": irlandia_strategis,
  "armada_kepolisian": irlandia_kepolisian,
  "pabrik_militer": irlandia_pabrik,
    "pendidikan": irlandia_pendidikan,
  "kesehatan": irlandia_kesehatan,
  "hukum": irlandia_hukum,
  "sektor_olahraga": irlandia_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 2,
      "kepuasan": 67,
      "pendapatan": 19
    },
    "korporasi": {
      "tarif": 35,
      "kepuasan": 52,
      "pendapatan": 365
    },
    "penghasilan": {
      "tarif": 3,
      "kepuasan": 61,
      "pendapatan": 45
    },
    "bea_cukai": {
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 471
    },
    "lingkungan": {
      "tarif": 39,
      "kepuasan": 88,
      "pendapatan": 364
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 26 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 78 },
    "lainnya": {
      "tarif": 40,
      "kepuasan": 93,
      "pendapatan": 343
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
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 145740,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 3200,
    "harga_air": 10400,
    "harga_obat": 157900,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": irlandia_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 27,
    "pendidikan": 10,
    "keamanan": 18,
    "keuangan": 4,
    "lingkungan": 60
  }
};

