import { CountryData } from "@/app/database/data/types";
import { uzbekistan_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/asia/99_uzbekistan";
import { uzbekistan_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/asia/99_uzbekistan";
import { uzbekistan_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/asia/99_uzbekistan";
import { uzbekistan_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/asia/99_uzbekistan";
import { uzbekistan_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/asia/99_uzbekistan";
import { uzbekistan_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/asia/99_uzbekistan";
import { uzbekistan_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/asia/99_uzbekistan";
import { uzbekistan_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/asia/99_uzbekistan";
import { uzbekistan_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/asia/99_uzbekistan";
import { uzbekistan_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/asia/99_uzbekistan";
import { uzbekistan_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/asia/99_uzbekistan";
import { uzbekistan_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/asia/99_uzbekistan";
import { uzbekistan_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/asia/99_uzbekistan";
import { uzbekistan_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/asia/99_uzbekistan";
import { uzbekistan_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/asia/99_uzbekistan";
import { uzbekistan_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/asia/99_uzbekistan";
import { uzbekistan_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/asia/99_uzbekistan";
import { uzbekistan_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/99_uzbekistan";
import { uzbekistan_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/asia/99_uzbekistan";
import { uzbekistan_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/asia/99_uzbekistan";

export const uzbekistan: CountryData = {
  ...uzbekistan_profile,
  "sektor_listrik": uzbekistan_listrik,
  "infrastruktur": uzbekistan_infrastruktur,
  "sektor_ekstraksi": uzbekistan_ekstraksi,
  "sektor_manufaktur": uzbekistan_manufaktur,
  "sektor_peternakan": uzbekistan_peternakan,
  "sektor_agrikultur": uzbekistan_agrikultur,
  "sektor_perikanan": uzbekistan_perikanan,
  "sektor_olahan_pangan": uzbekistan_olahan_pangan,
  "sektor_farmasi": uzbekistan_farmasi,
  "sektor_pertahanan": uzbekistan_pertahanan,
  "armada_militer": uzbekistan_armada,
  "militer_strategis": uzbekistan_strategis,
  "armada_kepolisian": uzbekistan_kepolisian,
  "pabrik_militer": uzbekistan_pabrik,
    "pendidikan": uzbekistan_pendidikan,
  "kesehatan": uzbekistan_kesehatan,
  "hukum": uzbekistan_hukum,
  "sektor_olahraga": uzbekistan_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 18,
      "kepuasan": 67,
      "pendapatan": 39
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 74
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 46
    },
    "bea_cukai": {
      "tarif": 6,
      "kepuasan": 86,
      "pendapatan": 8
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 20
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 5 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 14 },
    "lainnya": {
      "tarif": 39,
      "kepuasan": 93,
      "pendapatan": 71
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 208200,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 30800,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 5350,
    "harga_listrik": 2240,
    "harga_air": 10400,
    "harga_obat": 157900,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": uzbekistan_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 34,
    "pendidikan": 8,
    "keamanan": 24,
    "keuangan": 31,
    "lingkungan": 60
  }
};

