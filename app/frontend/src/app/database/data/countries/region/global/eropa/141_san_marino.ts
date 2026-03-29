import { CountryData } from "@/app/database/data/types";
import { san_marino_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/141_san_marino";
import { san_marino_armada } from "../../modules/2_militer/2_armada_militer/eropa/141_san_marino";
import { san_marino_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/141_san_marino";
import { san_marino_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/141_san_marino";
import { san_marino_hukum } from "../../modules/3_sosial/3_hukum/eropa/141_san_marino";
import { san_marino_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/141_san_marino";
import { san_marino_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/141_san_marino";
import { san_marino_kesehatan } from "../../modules/3_sosial/2_kesehatan/eropa/141_san_marino";
import { san_marino_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/141_san_marino";
import { san_marino_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/141_san_marino";
import { san_marino_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/141_san_marino";
import { san_marino_olahraga } from "../../modules/3_sosial/4_olahraga/eropa/141_san_marino";
import { san_marino_pabrik } from "../../modules/2_militer/5_pabrik_militer/eropa/141_san_marino";
import { san_marino_pendidikan } from "../../modules/3_sosial/1_pendidikan/eropa/141_san_marino";
import { san_marino_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/141_san_marino";
import { san_marino_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/141_san_marino";
import { san_marino_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/141_san_marino";
import { san_marino_profile } from "../../modules/0_profiles/eropa/141_san_marino";
import { san_marino_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/141_san_marino";
import { san_marino_geopolitik } from "../../modules/4_geopolitik/eropa/141_san_marino";

export const san_marino: CountryData = {
  ...san_marino_profile,
  "sektor_listrik": san_marino_listrik,
  "infrastruktur": san_marino_infrastruktur,
  "sektor_ekstraksi": san_marino_ekstraksi,
  "sektor_manufaktur": san_marino_manufaktur,
  "sektor_peternakan": san_marino_peternakan,
  "sektor_agrikultur": san_marino_agrikultur,
  "sektor_perikanan": san_marino_perikanan,
  "sektor_olahan_pangan": san_marino_olahan_pangan,
  "sektor_farmasi": san_marino_farmasi,
  "sektor_pertahanan": san_marino_pertahanan,
  "armada_militer": san_marino_armada,
  "militer_strategis": san_marino_strategis,
  "armada_kepolisian": san_marino_kepolisian,
  "pabrik_militer": san_marino_pabrik,
    "pendidikan": san_marino_pendidikan,
  "kesehatan": san_marino_kesehatan,
  "hukum": san_marino_hukum,
  "sektor_olahraga": san_marino_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 25,
      "kepuasan": 67,
      "pendapatan": 6
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 27,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 15,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 8,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
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
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 30800,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 126320,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": san_marino_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 8,
    "pendidikan": 5,
    "keamanan": 34,
    "keuangan": 11,
    "lingkungan": 60
  }
};
