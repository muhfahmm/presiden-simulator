import { CountryData } from "@/app/database/data/types";
import { bangladesh_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/59_bangladesh";
import { bangladesh_armada } from "../../modules/2_militer/2_armada_militer/asia/59_bangladesh";
import { bangladesh_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/59_bangladesh";
import { bangladesh_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/59_bangladesh";
import { bangladesh_hukum } from "../../modules/3_sosial/3_hukum/asia/59_bangladesh";
import { bangladesh_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/59_bangladesh";
import { bangladesh_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/59_bangladesh";
import { bangladesh_kesehatan } from "../../modules/3_sosial/2_kesehatan/asia/59_bangladesh";
import { bangladesh_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/59_bangladesh";
import { bangladesh_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/59_bangladesh";
import { bangladesh_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/59_bangladesh";
import { bangladesh_olahraga } from "../../modules/3_sosial/4_olahraga/asia/59_bangladesh";
import { bangladesh_pabrik } from "../../modules/2_militer/5_pabrik_militer/asia/59_bangladesh";
import { bangladesh_pendidikan } from "../../modules/3_sosial/1_pendidikan/asia/59_bangladesh";
import { bangladesh_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/59_bangladesh";
import { bangladesh_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/59_bangladesh";
import { bangladesh_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/59_bangladesh";
import { bangladesh_profile } from "../../modules/0_profiles/asia/59_bangladesh";
import { bangladesh_strategis } from "../../modules/2_militer/3_militer_strategis/asia/59_bangladesh";
import { bangladesh_geopolitik } from "../../modules/4_geopolitik/asia/59_bangladesh";

export const bangladesh: CountryData = {
  ...bangladesh_profile,
  "sektor_listrik": bangladesh_listrik,
  "infrastruktur": bangladesh_infrastruktur,
  "sektor_ekstraksi": bangladesh_ekstraksi,
  "sektor_manufaktur": bangladesh_manufaktur,
  "sektor_peternakan": bangladesh_peternakan,
  "sektor_agrikultur": bangladesh_agrikultur,
  "sektor_perikanan": bangladesh_perikanan,
  "sektor_olahan_pangan": bangladesh_olahan_pangan,
  "sektor_farmasi": bangladesh_farmasi,
  "sektor_pertahanan": bangladesh_pertahanan,
  "armada_militer": bangladesh_armada,
  "militer_strategis": bangladesh_strategis,
  "armada_kepolisian": bangladesh_kepolisian,
  "pabrik_militer": bangladesh_pabrik,
    "pendidikan": bangladesh_pendidikan,
  "kesehatan": bangladesh_kesehatan,
  "hukum": bangladesh_hukum,
  "sektor_olahraga": bangladesh_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 7,
      "kepuasan": 67,
      "pendapatan": 58
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 156
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 55
    },
    "bea_cukai": {
      "tarif": 5,
      "kepuasan": 86,
      "pendapatan": 39
    },
    "lingkungan": {
      "tarif": 21,
      "kepuasan": 88,
      "pendapatan": 248
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 23 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 68 },
    "lainnya": {
      "tarif": 9,
      "kepuasan": 93,
      "pendapatan": 96
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 70,
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
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 83280,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 5350,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 157900,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": bangladesh_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 36,
    "pendidikan": 22,
    "keamanan": 36,
    "keuangan": 17,
    "lingkungan": 60
  }
};
