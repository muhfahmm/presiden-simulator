import { CountryData } from "@/app/database/data/types";
import { pakistan_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/87_pakistan";
import { pakistan_armada } from "../../modules/2_militer/2_armada_militer/asia/87_pakistan";
import { pakistan_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/87_pakistan";
import { pakistan_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/87_pakistan";
import { pakistan_hukum } from "../../modules/3_sosial/3_hukum/asia/87_pakistan";
import { pakistan_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/87_pakistan";
import { pakistan_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/87_pakistan";
import { pakistan_kesehatan } from "../../modules/3_sosial/2_kesehatan/asia/87_pakistan";
import { pakistan_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/87_pakistan";
import { pakistan_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/87_pakistan";
import { pakistan_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/87_pakistan";
import { pakistan_olahraga } from "../../modules/3_sosial/4_olahraga/asia/87_pakistan";
import { pakistan_pabrik } from "../../modules/2_militer/5_pabrik_militer/asia/87_pakistan";
import { pakistan_pendidikan } from "../../modules/3_sosial/1_pendidikan/asia/87_pakistan";
import { pakistan_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/87_pakistan";
import { pakistan_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/87_pakistan";
import { pakistan_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/87_pakistan";
import { pakistan_profile } from "../../modules/0_profiles/asia/87_pakistan";
import { pakistan_strategis } from "../../modules/2_militer/3_militer_strategis/asia/87_pakistan";
import { pakistan_geopolitik } from "../../modules/4_geopolitik/asia/87_pakistan";

export const pakistan: CountryData = {
  ...pakistan_profile,
  "sektor_listrik": pakistan_listrik,
  "infrastruktur": pakistan_infrastruktur,
  "sektor_ekstraksi": pakistan_ekstraksi,
  "sektor_manufaktur": pakistan_manufaktur,
  "sektor_peternakan": pakistan_peternakan,
  "sektor_agrikultur": pakistan_agrikultur,
  "sektor_perikanan": pakistan_perikanan,
  "sektor_olahan_pangan": pakistan_olahan_pangan,
  "sektor_farmasi": pakistan_farmasi,
  "sektor_pertahanan": pakistan_pertahanan,
  "armada_militer": pakistan_armada,
  "militer_strategis": pakistan_strategis,
  "armada_kepolisian": pakistan_kepolisian,
  "pabrik_militer": pakistan_pabrik,
    "pendidikan": pakistan_pendidikan,
  "kesehatan": pakistan_kesehatan,
  "hukum": pakistan_hukum,
  "sektor_olahraga": pakistan_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 36,
      "kepuasan": 67,
      "pendapatan": 126
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 205
    },
    "penghasilan": {
      "tarif": 14,
      "kepuasan": 61,
      "pendapatan": 59
    },
    "bea_cukai": {
      "tarif": 35,
      "kepuasan": 86,
      "pendapatan": 300
    },
    "lingkungan": {
      "tarif": 17,
      "kepuasan": 88,
      "pendapatan": 100
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 17 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 50 },
    "lainnya": {
      "tarif": 13,
      "kepuasan": 93,
      "pendapatan": 124
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 12320,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 677460
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": pakistan_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 36,
    "pendidikan": 1,
    "keamanan": 8,
    "keuangan": 38,
    "lingkungan": 60
  }
};
