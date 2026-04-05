import { CountryData } from "@/app/database/data/semua_fitur_negara";
import { mauritius_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_agrikultur/afrika/30_mauritius";
import { mauritius_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/afrika/30_mauritius";
import { mauritius_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/2_sektor_mineral_kritis/afrika/30_mauritius";
import { mauritius_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_farmasi/afrika/30_mauritius";
import { mauritius_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/afrika/30_mauritius";
import { mauritius_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/9_infrastruktur/afrika/30_mauritius";
import { mauritius_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/afrika/30_mauritius";
import { mauritius_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/afrika/30_mauritius";
import { mauritius_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/1_sektor_listrik_nasional/afrika/30_mauritius";
import { mauritius_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_manufaktur/afrika/30_mauritius";
import { mauritius_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_olahan_pangan/afrika/30_mauritius";
import { mauritius_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/afrika/30_mauritius";
import { mauritius_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/afrika/30_mauritius";
import { mauritius_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/afrika/30_mauritius";
import { mauritius_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_perikanan/afrika/30_mauritius";
import { mauritius_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/afrika/30_mauritius";
import { mauritius_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_peternakan/afrika/30_mauritius";
import { mauritius_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/afrika/30_mauritius";
import { mauritius_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/afrika/30_mauritius";
import { mauritius_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/afrika/30_mauritius";

export const mauritius: CountryData = {
  ...mauritius_profile,
  "sektor_listrik": mauritius_listrik,
  "infrastruktur": mauritius_infrastruktur,
  "sektor_ekstraksi": mauritius_ekstraksi,
  "sektor_manufaktur": mauritius_manufaktur,
  "sektor_peternakan": mauritius_peternakan,
  "sektor_agrikultur": mauritius_agrikultur,
  "sektor_perikanan": mauritius_perikanan,
  "sektor_olahan_pangan": mauritius_olahan_pangan,
  "sektor_farmasi": mauritius_farmasi,
  "sektor_pertahanan": mauritius_pertahanan,
  "armada_militer": mauritius_armada,
  "militer_strategis": mauritius_strategis,
  "armada_kepolisian": mauritius_kepolisian,
  "pabrik_militer": mauritius_pabrik,
    "pendidikan": mauritius_pendidikan,
  "kesehatan": mauritius_kesehatan,
  "hukum": mauritius_hukum,
  "sektor_olahraga": mauritius_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 22,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 8,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 3
    },
    "bea_cukai": {
      "tarif": 14,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 10
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 22,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 30,
    "gaji_guru": 50,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 30800,
    "harga_gula": 28800,
    "harga_telur": 62200,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 315800,
    "harga_pendidikan": 241950
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": mauritius_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 14,
    "pendidikan": 39,
    "keamanan": 11,
    "keuangan": 37,
    "lingkungan": 60
  }
};

