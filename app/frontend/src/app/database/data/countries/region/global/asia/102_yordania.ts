import { CountryData } from "@/app/database/data/types";
import { yordania_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/102_yordania";
import { yordania_armada } from "../../modules/2_militer/2_armada_militer/asia/102_yordania";
import { yordania_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/102_yordania";
import { yordania_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/102_yordania";
import { yordania_hukum } from "../../modules/3_sosial/3_hukum/asia/102_yordania";
import { yordania_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/102_yordania";
import { yordania_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/102_yordania";
import { yordania_kesehatan } from "../../modules/3_sosial/2_kesehatan/asia/102_yordania";
import { yordania_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/102_yordania";
import { yordania_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/102_yordania";
import { yordania_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/102_yordania";
import { yordania_olahraga } from "../../modules/3_sosial/4_olahraga/asia/102_yordania";
import { yordania_pabrik } from "../../modules/2_militer/5_pabrik_militer/asia/102_yordania";
import { yordania_pendidikan } from "../../modules/3_sosial/1_pendidikan/asia/102_yordania";
import { yordania_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/102_yordania";
import { yordania_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/102_yordania";
import { yordania_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/102_yordania";
import { yordania_profile } from "../../modules/0_profiles/asia/102_yordania";
import { yordania_strategis } from "../../modules/2_militer/3_militer_strategis/asia/102_yordania";
import { yordania_geopolitik } from "../../modules/4_geopolitik/asia/102_yordania";

export const yordania: CountryData = {
  ...yordania_profile,
  "sektor_listrik": yordania_listrik,
  "infrastruktur": yordania_infrastruktur,
  "sektor_ekstraksi": yordania_ekstraksi,
  "sektor_manufaktur": yordania_manufaktur,
  "sektor_peternakan": yordania_peternakan,
  "sektor_agrikultur": yordania_agrikultur,
  "sektor_perikanan": yordania_perikanan,
  "sektor_olahan_pangan": yordania_olahan_pangan,
  "sektor_farmasi": yordania_farmasi,
  "sektor_pertahanan": yordania_pertahanan,
  "armada_militer": yordania_armada,
  "militer_strategis": yordania_strategis,
  "armada_kepolisian": yordania_kepolisian,
  "pabrik_militer": yordania_pabrik,
    "pendidikan": yordania_pendidikan,
  "kesehatan": yordania_kesehatan,
  "hukum": yordania_hukum,
  "sektor_olahraga": yordania_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 29,
      "kepuasan": 67,
      "pendapatan": 20
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 22
    },
    "penghasilan": {
      "tarif": 36,
      "kepuasan": 61,
      "pendapatan": 25
    },
    "bea_cukai": {
      "tarif": 1,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 21,
      "kepuasan": 88,
      "pendapatan": 26
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 21,
      "kepuasan": 93,
      "pendapatan": 24
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 221060,
    "harga_pendidikan": 241950
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": yordania_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 27,
    "pendidikan": 14,
    "keamanan": 28,
    "keuangan": 35,
    "lingkungan": 60
  }
};
