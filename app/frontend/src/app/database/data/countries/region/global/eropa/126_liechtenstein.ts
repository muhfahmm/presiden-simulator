import { CountryData } from "@/app/database/data/types";
import { liechtenstein_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/126_liechtenstein";
import { liechtenstein_armada } from "../../modules/2_militer/2_armada_militer/eropa/126_liechtenstein";
import { liechtenstein_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/126_liechtenstein";
import { liechtenstein_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/126_liechtenstein";
import { liechtenstein_hukum } from "../../modules/3_sosial/3_hukum/eropa/126_liechtenstein";
import { liechtenstein_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/126_liechtenstein";
import { liechtenstein_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/126_liechtenstein";
import { liechtenstein_kesehatan } from "../../modules/3_sosial/2_kesehatan/eropa/126_liechtenstein";
import { liechtenstein_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/126_liechtenstein";
import { liechtenstein_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/126_liechtenstein";
import { liechtenstein_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/126_liechtenstein";
import { liechtenstein_olahraga } from "../../modules/3_sosial/4_olahraga/eropa/126_liechtenstein";
import { liechtenstein_pabrik } from "../../modules/2_militer/5_pabrik_militer/eropa/126_liechtenstein";
import { liechtenstein_pendidikan } from "../../modules/3_sosial/1_pendidikan/eropa/126_liechtenstein";
import { liechtenstein_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/126_liechtenstein";
import { liechtenstein_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/126_liechtenstein";
import { liechtenstein_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/126_liechtenstein";
import { liechtenstein_profile } from "../../modules/0_profiles/eropa/126_liechtenstein";
import { liechtenstein_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/126_liechtenstein";
import { liechtenstein_geopolitik } from "../../modules/4_geopolitik/eropa/126_liechtenstein";

export const liechtenstein: CountryData = {
  ...liechtenstein_profile,
  "sektor_listrik": liechtenstein_listrik,
  "infrastruktur": liechtenstein_infrastruktur,
  "sektor_ekstraksi": liechtenstein_ekstraksi,
  "sektor_manufaktur": liechtenstein_manufaktur,
  "sektor_peternakan": liechtenstein_peternakan,
  "sektor_agrikultur": liechtenstein_agrikultur,
  "sektor_perikanan": liechtenstein_perikanan,
  "sektor_olahan_pangan": liechtenstein_olahan_pangan,
  "sektor_farmasi": liechtenstein_farmasi,
  "sektor_pertahanan": liechtenstein_pertahanan,
  "armada_militer": liechtenstein_armada,
  "militer_strategis": liechtenstein_strategis,
  "armada_kepolisian": liechtenstein_kepolisian,
  "pabrik_militer": liechtenstein_pabrik,
    "pendidikan": liechtenstein_pendidikan,
  "kesehatan": liechtenstein_kesehatan,
  "hukum": liechtenstein_hukum,
  "sektor_olahraga": liechtenstein_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 18,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 3,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 8,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 21,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 13,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 28800,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 126320,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": liechtenstein_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 24,
    "pendidikan": 31,
    "keamanan": 20,
    "keuangan": 29,
    "lingkungan": 60
  }
};
