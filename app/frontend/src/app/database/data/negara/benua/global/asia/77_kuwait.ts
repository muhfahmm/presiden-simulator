import { CountryData } from "@/app/database/data/types";
import { kuwait_agrikultur } from "@/app/database/data/semua_fitur_negara/1_produksi/7_sektor_agrikultur/asia/77_kuwait";
import { kuwait_armada } from "@/app/database/data/semua_fitur_negara/2_militer/2_armada_militer/asia/77_kuwait";
import { kuwait_ekstraksi } from "@/app/database/data/semua_fitur_negara/1_produksi/4_sektor_ekstraksi/asia/77_kuwait";
import { kuwait_farmasi } from "@/app/database/data/semua_fitur_negara/1_produksi/10_sektor_farmasi/asia/77_kuwait";
import { kuwait_hukum } from "@/app/database/data/semua_fitur_negara/3_sosial/3_hukum/asia/77_kuwait";
import { kuwait_infrastruktur } from "@/app/database/data/semua_fitur_negara/1_produksi/3_infrastruktur/asia/77_kuwait";
import { kuwait_kepolisian } from "@/app/database/data/semua_fitur_negara/2_militer/4_armada_kepolisian/asia/77_kuwait";
import { kuwait_kesehatan } from "@/app/database/data/semua_fitur_negara/3_sosial/2_kesehatan/asia/77_kuwait";
import { kuwait_listrik } from "@/app/database/data/semua_fitur_negara/1_produksi/2_kelistrikan/asia/77_kuwait";
import { kuwait_manufaktur } from "@/app/database/data/semua_fitur_negara/1_produksi/5_sektor_manufaktur/asia/77_kuwait";
import { kuwait_olahan_pangan } from "@/app/database/data/semua_fitur_negara/1_produksi/9_sektor_olahan_pangan/asia/77_kuwait";
import { kuwait_olahraga } from "@/app/database/data/semua_fitur_negara/3_sosial/4_olahraga/asia/77_kuwait";
import { kuwait_pabrik } from "@/app/database/data/semua_fitur_negara/2_militer/5_pabrik_militer/asia/77_kuwait";
import { kuwait_pendidikan } from "@/app/database/data/semua_fitur_negara/3_sosial/1_pendidikan/asia/77_kuwait";
import { kuwait_perikanan } from "@/app/database/data/semua_fitur_negara/1_produksi/8_sektor_perikanan/asia/77_kuwait";
import { kuwait_pertahanan } from "@/app/database/data/semua_fitur_negara/2_militer/1_sektor_pertahanan/asia/77_kuwait";
import { kuwait_peternakan } from "@/app/database/data/semua_fitur_negara/1_produksi/6_sektor_peternakan/asia/77_kuwait";
import { kuwait_profile } from "@/app/database/data/semua_fitur_negara/0_profiles/asia/77_kuwait";
import { kuwait_strategis } from "@/app/database/data/semua_fitur_negara/2_militer/3_militer_strategis/asia/77_kuwait";
import { kuwait_geopolitik } from "@/app/database/data/semua_fitur_negara/4_geopolitik/asia/77_kuwait";

export const kuwait: CountryData = {
  ...kuwait_profile,
  "sektor_listrik": kuwait_listrik,
  "infrastruktur": kuwait_infrastruktur,
  "sektor_ekstraksi": kuwait_ekstraksi,
  "sektor_manufaktur": kuwait_manufaktur,
  "sektor_peternakan": kuwait_peternakan,
  "sektor_agrikultur": kuwait_agrikultur,
  "sektor_perikanan": kuwait_perikanan,
  "sektor_olahan_pangan": kuwait_olahan_pangan,
  "sektor_farmasi": kuwait_farmasi,
  "sektor_pertahanan": kuwait_pertahanan,
  "armada_militer": kuwait_armada,
  "militer_strategis": kuwait_strategis,
  "armada_kepolisian": kuwait_kepolisian,
  "pabrik_militer": kuwait_pabrik,
    "pendidikan": kuwait_pendidikan,
  "kesehatan": kuwait_kesehatan,
  "hukum": kuwait_hukum,
  "sektor_olahraga": kuwait_olahraga,
  // =============================================================
  // 11. ðŸ’° PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 19,
      "kepuasan": 67,
      "pendapatan": 52
    },
    "korporasi": {
      "tarif": 23,
      "kepuasan": 52,
      "pendapatan": 58
    },
    "penghasilan": {
      "tarif": 21,
      "kepuasan": 61,
      "pendapatan": 70
    },
    "bea_cukai": {
      "tarif": 13,
      "kepuasan": 86,
      "pendapatan": 55
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 44
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 8 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 23 },
    "lainnya": {
      "tarif": 6,
      "kepuasan": 93,
      "pendapatan": 24
    }
  },
  // =============================================================
  // 12. ðŸ’° GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 70,
    "gaji_medis": 80,
    "gaji_militer": 60
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
    "harga_beras": 16000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 967800
  },
    // =============================================================
  // 15. ðŸŒ GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kuwait_geopolitik,
  // =============================================================
  // 16. ðŸ›ï¸ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 21,
    "pendidikan": 17,
    "keamanan": 24,
    "keuangan": 25,
    "lingkungan": 60
  }
};

