import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { montenegro_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/eropa/133_montenegro";
import { montenegro_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/eropa/133_montenegro";
import { montenegro_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/eropa/133_montenegro";
import { montenegro_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/eropa/133_montenegro";
import { montenegro_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/eropa/133_montenegro";
import { montenegro_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/eropa/133_montenegro";
import { montenegro_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/eropa/133_montenegro";
import { montenegro_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/eropa/133_montenegro";
import { montenegro_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/eropa/133_montenegro";
import { montenegro_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/eropa/133_montenegro";
import { montenegro_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/eropa/133_montenegro";
import { montenegro_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/eropa/133_montenegro";
import { montenegro_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/eropa/133_montenegro";
import { montenegro_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/eropa/133_montenegro";
import { montenegro_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/eropa/133_montenegro";
import { montenegro_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/eropa/133_montenegro";
import { montenegro_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/eropa/133_montenegro";
import { montenegro_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/eropa/133_montenegro";
import { montenegro_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/eropa/133_montenegro";
import { montenegro_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/eropa/133_montenegro";

export const montenegro: CountryData = {
  ...montenegro_profile,
  "sektor_listrik": montenegro_listrik,
  "infrastruktur": montenegro_infrastruktur,
  "sektor_ekstraksi": montenegro_ekstraksi,
  "sektor_manufaktur": montenegro_manufaktur,
  "sektor_peternakan": montenegro_peternakan,
  "sektor_agrikultur": montenegro_agrikultur,
  "sektor_perikanan": montenegro_perikanan,
  "sektor_olahan_pangan": montenegro_olahan_pangan,
  "sektor_farmasi": montenegro_farmasi,
  "sektor_pertahanan": montenegro_pertahanan,
  "armada_militer": montenegro_armada,
  "militer_strategis": montenegro_strategis,
  "armada_kepolisian": montenegro_kepolisian,
  "pabrik_militer": montenegro_pabrik,
    "pendidikan": montenegro_pendidikan,
  "kesehatan": montenegro_kesehatan,
  "hukum": montenegro_hukum,
  "sektor_olahraga": montenegro_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 33,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 37,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 2,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 100,
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
    "harga_beras": 12800,
    "harga_daging_sapi": 145740,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 62200,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 126320,
    "harga_pendidikan": 677460
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": montenegro_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 4,
    "pendidikan": 39,
    "keamanan": 9,
    "keuangan": 21,
    "lingkungan": 60
  }
};

