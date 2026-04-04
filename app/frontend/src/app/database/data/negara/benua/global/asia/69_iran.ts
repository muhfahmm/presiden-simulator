import { CountryData } from "@/app/database/data/types";
import { iran_agrikultur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/5_sektor_agrikultur/asia/69_iran";
import { iran_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/asia/69_iran";
import { iran_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/2_sektor_mineral_kritis/asia/69_iran";
import { iran_farmasi } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/8_sektor_farmasi/asia/69_iran";
import { iran_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/asia/69_iran";
import { iran_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/9_infrastruktur/asia/69_iran";
import { iran_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/asia/69_iran";
import { iran_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/asia/69_iran";
import { iran_listrik } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/1_sektor_listrik_nasional/asia/69_iran";
import { iran_manufaktur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/3_manufaktur/asia/69_iran";
import { iran_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/7_sektor_olahan_pangan/asia/69_iran";
import { iran_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/asia/69_iran";
import { iran_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/asia/69_iran";
import { iran_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/asia/69_iran";
import { iran_perikanan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/6_sektor_perikanan/asia/69_iran";
import { iran_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/asia/69_iran";
import { iran_peternakan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/4_sektor_peternakan/asia/69_iran";
import { iran_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/69_iran";
import { iran_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/asia/69_iran";
import { iran_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/asia/69_iran";

export const iran: CountryData = {
  ...iran_profile,
  "sektor_listrik": iran_listrik,
  "infrastruktur": iran_infrastruktur,
  "sektor_ekstraksi": iran_ekstraksi,
  "sektor_manufaktur": iran_manufaktur,
  "sektor_peternakan": iran_peternakan,
  "sektor_agrikultur": iran_agrikultur,
  "sektor_perikanan": iran_perikanan,
  "sektor_olahan_pangan": iran_olahan_pangan,
  "sektor_farmasi": iran_farmasi,
  "sektor_pertahanan": iran_pertahanan,
  "armada_militer": iran_armada,
  "militer_strategis": iran_strategis,
  "armada_kepolisian": iran_kepolisian,
  "pabrik_militer": iran_pabrik,
    "pendidikan": iran_pendidikan,
  "kesehatan": iran_kesehatan,
  "hukum": iran_hukum,
  "sektor_olahraga": iran_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 30,
      "kepuasan": 67,
      "pendapatan": 267
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 395
    },
    "penghasilan": {
      "tarif": 7,
      "kepuasan": 61,
      "pendapatan": 60
    },
    "bea_cukai": {
      "tarif": 11,
      "kepuasan": 86,
      "pendapatan": 74
    },
    "lingkungan": {
      "tarif": 13,
      "kepuasan": 88,
      "pendapatan": 137
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 18 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 54 },
    "lainnya": {
      "tarif": 18,
      "kepuasan": 93,
      "pendapatan": 131
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 43540,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 126320,
    "harga_pendidikan": 241950
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": iran_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 5,
    "pendidikan": 16,
    "keamanan": 24,
    "keuangan": 4,
    "lingkungan": 60
  }
};

