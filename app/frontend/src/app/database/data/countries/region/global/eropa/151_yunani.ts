import { CountryData } from "@/app/database/data/types";
import { yunani_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/151_yunani";
import { yunani_armada } from "../../modules/2_militer/2_armada_militer/eropa/151_yunani";
import { yunani_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/151_yunani";
import { yunani_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/151_yunani";
import { yunani_hukum } from "../../modules/3_sosial/3_hukum/eropa/151_yunani";
import { yunani_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/151_yunani";
import { yunani_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/151_yunani";
import { yunani_kesehatan } from "../../modules/3_sosial/2_kesehatan/eropa/151_yunani";
import { yunani_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/151_yunani";
import { yunani_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/151_yunani";
import { yunani_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/151_yunani";
import { yunani_olahraga } from "../../modules/3_sosial/4_olahraga/eropa/151_yunani";
import { yunani_pabrik } from "../../modules/2_militer/5_pabrik_militer/eropa/151_yunani";
import { yunani_pendidikan } from "../../modules/3_sosial/1_pendidikan/eropa/151_yunani";
import { yunani_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/151_yunani";
import { yunani_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/151_yunani";
import { yunani_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/151_yunani";
import { yunani_profile } from "../../modules/0_profiles/eropa/151_yunani";
import { yunani_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/151_yunani";
import { yunani_geopolitik } from "../../modules/4_geopolitik/eropa/151_yunani";

export const yunani: CountryData = {
  ...yunani_profile,
  "sektor_listrik": yunani_listrik,
  "infrastruktur": yunani_infrastruktur,
  "sektor_ekstraksi": yunani_ekstraksi,
  "sektor_manufaktur": yunani_manufaktur,
  "sektor_peternakan": yunani_peternakan,
  "sektor_agrikultur": yunani_agrikultur,
  "sektor_perikanan": yunani_perikanan,
  "sektor_olahan_pangan": yunani_olahan_pangan,
  "sektor_farmasi": yunani_farmasi,
  "sektor_pertahanan": yunani_pertahanan,
  "armada_militer": yunani_armada,
  "militer_strategis": yunani_strategis,
  "armada_kepolisian": yunani_kepolisian,
  "pabrik_militer": yunani_pabrik,
    "pendidikan": yunani_pendidikan,
  "kesehatan": yunani_kesehatan,
  "hukum": yunani_hukum,
  "sektor_olahraga": yunani_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 34,
      "kepuasan": 67,
      "pendapatan": 90
    },
    "korporasi": {
      "tarif": 15,
      "kepuasan": 52,
      "pendapatan": 85
    },
    "penghasilan": {
      "tarif": 15,
      "kepuasan": 61,
      "pendapatan": 48
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 202
    },
    "lingkungan": {
      "tarif": 36,
      "kepuasan": 88,
      "pendapatan": 125
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 12 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 34 },
    "lainnya": {
      "tarif": 38,
      "kepuasan": 93,
      "pendapatan": 127
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 100,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
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
    "harga_ayam": 20500,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 5350,
    "harga_listrik": 1280,
    "harga_air": 4160,
    "harga_obat": 315800,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": yunani_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 29,
    "pendidikan": 18,
    "keamanan": 12,
    "keuangan": 25,
    "lingkungan": 60
  }
};
