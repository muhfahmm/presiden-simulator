import { CountryData } from "@/app/database/data/types";
import { vietnam_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/asia/100_vietnam";
import { vietnam_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/asia/100_vietnam";
import { vietnam_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/asia/100_vietnam";
import { vietnam_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/asia/100_vietnam";
import { vietnam_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/asia/100_vietnam";
import { vietnam_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/asia/100_vietnam";
import { vietnam_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/asia/100_vietnam";
import { vietnam_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/asia/100_vietnam";
import { vietnam_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/asia/100_vietnam";
import { vietnam_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/asia/100_vietnam";
import { vietnam_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/asia/100_vietnam";
import { vietnam_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/asia/100_vietnam";
import { vietnam_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/asia/100_vietnam";
import { vietnam_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/asia/100_vietnam";
import { vietnam_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/asia/100_vietnam";
import { vietnam_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/asia/100_vietnam";
import { vietnam_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/asia/100_vietnam";
import { vietnam_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/100_vietnam";
import { vietnam_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/asia/100_vietnam";
import { vietnam_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/asia/100_vietnam";

export const vietnam: CountryData = {
  ...vietnam_profile,
  "sektor_listrik": vietnam_listrik,
  "infrastruktur": vietnam_infrastruktur,
  "sektor_ekstraksi": vietnam_ekstraksi,
  "sektor_manufaktur": vietnam_manufaktur,
  "sektor_peternakan": vietnam_peternakan,
  "sektor_agrikultur": vietnam_agrikultur,
  "sektor_perikanan": vietnam_perikanan,
  "sektor_olahan_pangan": vietnam_olahan_pangan,
  "sektor_farmasi": vietnam_farmasi,
  "sektor_pertahanan": vietnam_pertahanan,
  "armada_militer": vietnam_armada,
  "militer_strategis": vietnam_strategis,
  "armada_kepolisian": vietnam_kepolisian,
  "pabrik_militer": vietnam_pabrik,
    "pendidikan": vietnam_pendidikan,
  "kesehatan": vietnam_kesehatan,
  "hukum": vietnam_hukum,
  "sektor_olahraga": vietnam_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 13,
      "kepuasan": 67,
      "pendapatan": 95
    },
    "korporasi": {
      "tarif": 20,
      "kepuasan": 52,
      "pendapatan": 133
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 185
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 233
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 70
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 21 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 63 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 9
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
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
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 28800,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 2600,
    "harga_obat": 157900,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": vietnam_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 28,
    "pendidikan": 31,
    "keamanan": 4,
    "keuangan": 5,
    "lingkungan": 60
  }
};

