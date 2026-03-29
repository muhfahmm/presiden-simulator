import { CountryData } from "@/app/database/data/types";
import { nepal_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/85_nepal";
import { nepal_armada } from "../../modules/2_militer/2_armada_militer/asia/85_nepal";
import { nepal_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/85_nepal";
import { nepal_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/85_nepal";
import { nepal_hukum } from "../../modules/3_sosial/3_hukum/asia/85_nepal";
import { nepal_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/85_nepal";
import { nepal_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/85_nepal";
import { nepal_kesehatan } from "../../modules/3_sosial/2_kesehatan/asia/85_nepal";
import { nepal_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/85_nepal";
import { nepal_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/85_nepal";
import { nepal_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/85_nepal";
import { nepal_olahraga } from "../../modules/3_sosial/4_olahraga/asia/85_nepal";
import { nepal_pabrik } from "../../modules/2_militer/5_pabrik_militer/asia/85_nepal";
import { nepal_pendidikan } from "../../modules/3_sosial/1_pendidikan/asia/85_nepal";
import { nepal_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/85_nepal";
import { nepal_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/85_nepal";
import { nepal_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/85_nepal";
import { nepal_profile } from "../../modules/0_profiles/asia/85_nepal";
import { nepal_strategis } from "../../modules/2_militer/3_militer_strategis/asia/85_nepal";
import { nepal_geopolitik } from "../../modules/4_geopolitik/asia/85_nepal";

export const nepal: CountryData = {
  ...nepal_profile,
  "sektor_listrik": nepal_listrik,
  "infrastruktur": nepal_infrastruktur,
  "sektor_ekstraksi": nepal_ekstraksi,
  "sektor_manufaktur": nepal_manufaktur,
  "sektor_peternakan": nepal_peternakan,
  "sektor_agrikultur": nepal_agrikultur,
  "sektor_perikanan": nepal_perikanan,
  "sektor_olahan_pangan": nepal_olahan_pangan,
  "sektor_farmasi": nepal_farmasi,
  "sektor_pertahanan": nepal_pertahanan,
  "armada_militer": nepal_armada,
  "militer_strategis": nepal_strategis,
  "armada_kepolisian": nepal_kepolisian,
  "pabrik_militer": nepal_pabrik,
    "pendidikan": nepal_pendidikan,
  "kesehatan": nepal_kesehatan,
  "hukum": nepal_hukum,
  "sektor_olahraga": nepal_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 20,
      "kepuasan": 67,
      "pendapatan": 8
    },
    "korporasi": {
      "tarif": 18,
      "kepuasan": 52,
      "pendapatan": 16
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 14
    },
    "bea_cukai": {
      "tarif": 2,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 7,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 6 },
    "lainnya": {
      "tarif": 18,
      "kepuasan": 93,
      "pendapatan": 11
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 70,
    "gaji_medis": 60,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 7700,
    "harga_gula": 14400,
    "harga_telur": 62200,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 126320,
    "harga_pendidikan": 967800
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": nepal_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 30,
    "pendidikan": 32,
    "keamanan": 40,
    "keuangan": 25,
    "lingkungan": 60
  }
};
