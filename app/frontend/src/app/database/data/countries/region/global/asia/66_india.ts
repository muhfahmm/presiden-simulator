import { CountryData } from "@/app/database/data/types";
import { india_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/66_india";
import { india_armada } from "../../modules/2_militer/2_armada_militer/asia/66_india";
import { india_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/66_india";
import { india_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/66_india";
import { india_hukum } from "../../modules/3_sosial/3_hukum/asia/66_india";
import { india_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/66_india";
import { india_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/66_india";
import { india_kesehatan } from "../../modules/3_sosial/2_kesehatan/asia/66_india";
import { india_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/66_india";
import { india_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/66_india";
import { india_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/66_india";
import { india_olahraga } from "../../modules/3_sosial/4_olahraga/asia/66_india";
import { india_pabrik } from "../../modules/2_militer/5_pabrik_militer/asia/66_india";
import { india_pendidikan } from "../../modules/3_sosial/1_pendidikan/asia/66_india";
import { india_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/66_india";
import { india_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/66_india";
import { india_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/66_india";
import { india_profile } from "../../modules/0_profiles/asia/66_india";
import { india_strategis } from "../../modules/2_militer/3_militer_strategis/asia/66_india";
import { india_geopolitik } from "../../modules/4_geopolitik/asia/66_india";

export const india: CountryData = {
  ...india_profile,
  "sektor_listrik": india_listrik,
  "infrastruktur": india_infrastruktur,
  "sektor_ekstraksi": india_ekstraksi,
  "sektor_manufaktur": india_manufaktur,
  "sektor_peternakan": india_peternakan,
  "sektor_agrikultur": india_agrikultur,
  "sektor_perikanan": india_perikanan,
  "sektor_olahan_pangan": india_olahan_pangan,
  "sektor_farmasi": india_farmasi,
  "sektor_pertahanan": india_pertahanan,
  "armada_militer": india_armada,
  "militer_strategis": india_strategis,
  "armada_kepolisian": india_kepolisian,
  "pabrik_militer": india_pabrik,
    "pendidikan": india_pendidikan,
  "kesehatan": india_kesehatan,
  "hukum": india_hukum,
  "sektor_olahraga": india_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 20,
      "kepuasan": 67,
      "pendapatan": 1262
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 1658
    },
    "penghasilan": {
      "tarif": 36,
      "kepuasan": 61,
      "pendapatan": 2793
    },
    "bea_cukai": {
      "tarif": 27,
      "kepuasan": 86,
      "pendapatan": 1109
    },
    "lingkungan": {
      "tarif": 4,
      "kepuasan": 88,
      "pendapatan": 332
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 192 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 575 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 2111
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
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
    "harga_beras": 8000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 21560,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 4160,
    "harga_obat": 126320,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": india_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 22,
    "pendidikan": 29,
    "keamanan": 19,
    "keuangan": 39,
    "lingkungan": 60
  }
};
