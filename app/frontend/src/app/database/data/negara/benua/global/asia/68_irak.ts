import { CountryData } from "@/app/database/data/types";
import { irak_agrikultur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/5_sektor_agrikultur/asia/68_irak";
import { irak_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/asia/68_irak";
import { irak_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/2_sektor_mineral_kritis/asia/68_irak";
import { irak_farmasi } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/8_sektor_farmasi/asia/68_irak";
import { irak_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/asia/68_irak";
import { irak_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/9_infrastruktur/asia/68_irak";
import { irak_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/asia/68_irak";
import { irak_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/asia/68_irak";
import { irak_listrik } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/1_sektor_listrik_nasional/asia/68_irak";
import { irak_manufaktur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/3_manufaktur/asia/68_irak";
import { irak_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/7_sektor_olahan_pangan/asia/68_irak";
import { irak_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/asia/68_irak";
import { irak_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/asia/68_irak";
import { irak_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/asia/68_irak";
import { irak_perikanan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/6_sektor_perikanan/asia/68_irak";
import { irak_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/asia/68_irak";
import { irak_peternakan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/4_sektor_peternakan/asia/68_irak";
import { irak_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/68_irak";
import { irak_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/asia/68_irak";
import { irak_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/asia/68_irak";

export const irak: CountryData = {
  ...irak_profile,
  "sektor_listrik": irak_listrik,
  "infrastruktur": irak_infrastruktur,
  "sektor_ekstraksi": irak_ekstraksi,
  "sektor_manufaktur": irak_manufaktur,
  "sektor_peternakan": irak_peternakan,
  "sektor_agrikultur": irak_agrikultur,
  "sektor_perikanan": irak_perikanan,
  "sektor_olahan_pangan": irak_olahan_pangan,
  "sektor_farmasi": irak_farmasi,
  "sektor_pertahanan": irak_pertahanan,
  "armada_militer": irak_armada,
  "militer_strategis": irak_strategis,
  "armada_kepolisian": irak_kepolisian,
  "pabrik_militer": irak_pabrik,
    "pendidikan": irak_pendidikan,
  "kesehatan": irak_kesehatan,
  "hukum": irak_hukum,
  "sektor_olahraga": irak_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 17,
      "kepuasan": 67,
      "pendapatan": 67
    },
    "korporasi": {
      "tarif": 1,
      "kepuasan": 52,
      "pendapatan": 6
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 301
    },
    "bea_cukai": {
      "tarif": 3,
      "kepuasan": 86,
      "pendapatan": 15
    },
    "lingkungan": {
      "tarif": 32,
      "kepuasan": 88,
      "pendapatan": 224
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 14 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 40 },
    "lainnya": {
      "tarif": 28,
      "kepuasan": 93,
      "pendapatan": 190
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 70,
    "gaji_medis": 60,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 30800,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 5350,
    "harga_listrik": 1600,
    "harga_air": 10400,
    "harga_obat": 126320,
    "harga_pendidikan": 677460
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": irak_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 11,
    "pendidikan": 29,
    "keamanan": 9,
    "keuangan": 5,
    "lingkungan": 60
  }
};

