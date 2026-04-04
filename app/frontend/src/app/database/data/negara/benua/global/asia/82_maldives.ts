import { CountryData } from "@/app/database/data/types";
import { maldives_agrikultur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/5_sektor_agrikultur/asia/82_maldives";
import { maldives_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/asia/82_maldives";
import { maldives_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/2_sektor_mineral_kritis/asia/82_maldives";
import { maldives_farmasi } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/8_sektor_farmasi/asia/82_maldives";
import { maldives_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/asia/82_maldives";
import { maldives_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/9_infrastruktur/asia/82_maldives";
import { maldives_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/asia/82_maldives";
import { maldives_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/asia/82_maldives";
import { maldives_listrik } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/1_sektor_listrik_nasional/asia/82_maldives";
import { maldives_manufaktur } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/3_manufaktur/asia/82_maldives";
import { maldives_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/7_sektor_olahan_pangan/asia/82_maldives";
import { maldives_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/asia/82_maldives";
import { maldives_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/asia/82_maldives";
import { maldives_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/asia/82_maldives";
import { maldives_perikanan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/6_sektor_perikanan/asia/82_maldives";
import { maldives_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/asia/82_maldives";
import { maldives_peternakan } from "@/app/database/data/semua_fitur_negara/1_jumlah_bangunan_per_negara/4_sektor_peternakan/asia/82_maldives";
import { maldives_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/82_maldives";
import { maldives_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/asia/82_maldives";
import { maldives_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/asia/82_maldives";

export const maldives: CountryData = {
  ...maldives_profile,
  "sektor_listrik": maldives_listrik,
  "infrastruktur": maldives_infrastruktur,
  "sektor_ekstraksi": maldives_ekstraksi,
  "sektor_manufaktur": maldives_manufaktur,
  "sektor_peternakan": maldives_peternakan,
  "sektor_agrikultur": maldives_agrikultur,
  "sektor_perikanan": maldives_perikanan,
  "sektor_olahan_pangan": maldives_olahan_pangan,
  "sektor_farmasi": maldives_farmasi,
  "sektor_pertahanan": maldives_pertahanan,
  "armada_militer": maldives_armada,
  "militer_strategis": maldives_strategis,
  "armada_kepolisian": maldives_kepolisian,
  "pabrik_militer": maldives_pabrik,
    "pendidikan": maldives_pendidikan,
  "kesehatan": maldives_kesehatan,
  "hukum": maldives_hukum,
  "sektor_olahraga": maldives_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 15,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 11,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 2,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 18,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 7,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 1
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
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. ðŸ›’ HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 3200,
    "harga_air": 2600,
    "harga_obat": 78950,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": maldives_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 27,
    "pendidikan": 4,
    "keamanan": 34,
    "keuangan": 14,
    "lingkungan": 60
  }
};

