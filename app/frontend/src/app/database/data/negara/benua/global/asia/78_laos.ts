import { CountryData } from "@/app/database/data/types";
import { laos_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/asia/78_laos";
import { laos_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/asia/78_laos";
import { laos_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/asia/78_laos";
import { laos_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/asia/78_laos";
import { laos_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/asia/78_laos";
import { laos_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/asia/78_laos";
import { laos_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/asia/78_laos";
import { laos_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/asia/78_laos";
import { laos_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/asia/78_laos";
import { laos_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/asia/78_laos";
import { laos_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/asia/78_laos";
import { laos_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/asia/78_laos";
import { laos_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/asia/78_laos";
import { laos_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/asia/78_laos";
import { laos_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/asia/78_laos";
import { laos_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/asia/78_laos";
import { laos_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/asia/78_laos";
import { laos_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/78_laos";
import { laos_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/asia/78_laos";
import { laos_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/asia/78_laos";

export const laos: CountryData = {
  ...laos_profile,
  "sektor_listrik": laos_listrik,
  "infrastruktur": laos_infrastruktur,
  "sektor_ekstraksi": laos_ekstraksi,
  "sektor_manufaktur": laos_manufaktur,
  "sektor_peternakan": laos_peternakan,
  "sektor_agrikultur": laos_agrikultur,
  "sektor_perikanan": laos_perikanan,
  "sektor_olahan_pangan": laos_olahan_pangan,
  "sektor_farmasi": laos_farmasi,
  "sektor_pertahanan": laos_pertahanan,
  "armada_militer": laos_armada,
  "militer_strategis": laos_strategis,
  "armada_kepolisian": laos_kepolisian,
  "pabrik_militer": laos_pabrik,
    "pendidikan": laos_pendidikan,
  "kesehatan": laos_kesehatan,
  "hukum": laos_hukum,
  "sektor_olahraga": laos_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 32,
      "kepuasan": 67,
      "pendapatan": 12
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 31,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 13,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 10
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 8,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 24880,
    "harga_bbm": 5350,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 315800,
    "harga_pendidikan": 677460
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": laos_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 2,
    "pendidikan": 12,
    "keamanan": 39,
    "keuangan": 5,
    "lingkungan": 60
  }
};

