import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { bulgaria_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/eropa/110_bulgaria";
import { bulgaria_armada } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/2_armada_militer/eropa/110_bulgaria";
import { bulgaria_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/eropa/110_bulgaria";
import { bulgaria_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/eropa/110_bulgaria";
import { bulgaria_hukum } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/3_hukum/eropa/110_bulgaria";
import { bulgaria_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/eropa/110_bulgaria";
import { bulgaria_kepolisian } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/4_armada_kepolisian/eropa/110_bulgaria";
import { bulgaria_kesehatan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/2_kesehatan/eropa/110_bulgaria";
import { bulgaria_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/eropa/110_bulgaria";
import { bulgaria_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/eropa/110_bulgaria";
import { bulgaria_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/eropa/110_bulgaria";
import { bulgaria_olahraga } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/4_olahraga/eropa/110_bulgaria";
import { bulgaria_pabrik } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/5_pabrik_militer/eropa/110_bulgaria";
import { bulgaria_pendidikan } from "@/app/database/data/semua_fitur_negara/3_tempat_umum/1_pendidikan/eropa/110_bulgaria";
import { bulgaria_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/eropa/110_bulgaria";
import { bulgaria_pertahanan } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/1_sektor_pertahanan/eropa/110_bulgaria";
import { bulgaria_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/eropa/110_bulgaria";
import { bulgaria_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/eropa/110_bulgaria";
import { bulgaria_strategis } from "@/app/database/data/semua_fitur_negara/2_produksi_militer/3_militer_strategis/eropa/110_bulgaria";
import { bulgaria_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/eropa/110_bulgaria";

export const bulgaria: CountryData = {
  ...bulgaria_profile,
  "sektor_listrik": bulgaria_listrik,
  "infrastruktur": bulgaria_infrastruktur,
  "sektor_ekstraksi": bulgaria_ekstraksi,
  "sektor_manufaktur": bulgaria_manufaktur,
  "sektor_peternakan": bulgaria_peternakan,
  "sektor_agrikultur": bulgaria_agrikultur,
  "sektor_perikanan": bulgaria_perikanan,
  "sektor_olahan_pangan": bulgaria_olahan_pangan,
  "sektor_farmasi": bulgaria_farmasi,
  "sektor_pertahanan": bulgaria_pertahanan,
  "armada_militer": bulgaria_armada,
  "militer_strategis": bulgaria_strategis,
  "armada_kepolisian": bulgaria_kepolisian,
  "pabrik_militer": bulgaria_pabrik,
    "pendidikan": bulgaria_pendidikan,
  "kesehatan": bulgaria_kesehatan,
  "hukum": bulgaria_hukum,
  "sektor_olahraga": bulgaria_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 4,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 77
    },
    "penghasilan": {
      "tarif": 35,
      "kepuasan": 61,
      "pendapatan": 99
    },
    "bea_cukai": {
      "tarif": 23,
      "kepuasan": 86,
      "pendapatan": 47
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 67
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 6 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 16 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 53
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
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
    "harga_gula": 11520,
    "harga_telur": 62200,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": bulgaria_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 1,
    "pendidikan": 1,
    "keamanan": 31,
    "keuangan": 23,
    "lingkungan": 60
  }
};

