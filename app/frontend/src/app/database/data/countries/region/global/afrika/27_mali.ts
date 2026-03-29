import { CountryData } from "@/app/database/data/types";
import { mali_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/27_mali";
import { mali_armada } from "../../modules/2_militer/2_armada_militer/afrika/27_mali";
import { mali_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/27_mali";
import { mali_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/27_mali";
import { mali_hukum } from "../../modules/3_sosial/3_hukum/afrika/27_mali";
import { mali_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/27_mali";
import { mali_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/27_mali";
import { mali_kesehatan } from "../../modules/3_sosial/2_kesehatan/afrika/27_mali";
import { mali_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/27_mali";
import { mali_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/27_mali";
import { mali_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/27_mali";
import { mali_olahraga } from "../../modules/3_sosial/4_olahraga/afrika/27_mali";
import { mali_pabrik } from "../../modules/2_militer/5_pabrik_militer/afrika/27_mali";
import { mali_pendidikan } from "../../modules/3_sosial/1_pendidikan/afrika/27_mali";
import { mali_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/27_mali";
import { mali_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/27_mali";
import { mali_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/27_mali";
import { mali_profile } from "../../modules/0_profiles/afrika/27_mali";
import { mali_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/27_mali";
import { mali_geopolitik } from "../../modules/4_geopolitik/afrika/27_mali";

export const mali: CountryData = {
  ...mali_profile,
  "sektor_listrik": mali_listrik,
  "infrastruktur": mali_infrastruktur,
  "sektor_ekstraksi": mali_ekstraksi,
  "sektor_manufaktur": mali_manufaktur,
  "sektor_peternakan": mali_peternakan,
  "sektor_agrikultur": mali_agrikultur,
  "sektor_perikanan": mali_perikanan,
  "sektor_olahan_pangan": mali_olahan_pangan,
  "sektor_farmasi": mali_farmasi,
  "sektor_pertahanan": mali_pertahanan,
  "armada_militer": mali_armada,
  "militer_strategis": mali_strategis,
  "armada_kepolisian": mali_kepolisian,
  "pabrik_militer": mali_pabrik,
    "pendidikan": mali_pendidikan,
  "kesehatan": mali_kesehatan,
  "hukum": mali_hukum,
  "sektor_olahraga": mali_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 38,
      "kepuasan": 67,
      "pendapatan": 10
    },
    "korporasi": {
      "tarif": 11,
      "kepuasan": 52,
      "pendapatan": 4
    },
    "penghasilan": {
      "tarif": 12,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 21,
      "kepuasan": 86,
      "pendapatan": 10
    },
    "lingkungan": {
      "tarif": 14,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 50,
    "gaji_medis": 50,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 1280,
    "harga_air": 10400,
    "harga_obat": 78950,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": mali_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 9,
    "pendidikan": 20,
    "keamanan": 21,
    "keuangan": 32,
    "lingkungan": 60
  }
};
