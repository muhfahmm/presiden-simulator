import { CountryData } from "@/app/database/data/types";
import { monako_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/132_monako";
import { monako_armada } from "../../modules/2_militer/2_armada_militer/eropa/132_monako";
import { monako_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/132_monako";
import { monako_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/132_monako";
import { monako_hukum } from "../../modules/3_sosial/3_hukum/eropa/132_monako";
import { monako_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/132_monako";
import { monako_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/132_monako";
import { monako_kesehatan } from "../../modules/3_sosial/2_kesehatan/eropa/132_monako";
import { monako_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/132_monako";
import { monako_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/132_monako";
import { monako_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/132_monako";
import { monako_olahraga } from "../../modules/3_sosial/4_olahraga/eropa/132_monako";
import { monako_pabrik } from "../../modules/2_militer/5_pabrik_militer/eropa/132_monako";
import { monako_pendidikan } from "../../modules/3_sosial/1_pendidikan/eropa/132_monako";
import { monako_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/132_monako";
import { monako_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/132_monako";
import { monako_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/132_monako";
import { monako_profile } from "../../modules/0_profiles/eropa/132_monako";
import { monako_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/132_monako";
import { monako_geopolitik } from "../../modules/4_geopolitik/eropa/132_monako";

export const monako: CountryData = {
  ...monako_profile,
  "sektor_listrik": monako_listrik,
  "infrastruktur": monako_infrastruktur,
  "sektor_ekstraksi": monako_ekstraksi,
  "sektor_manufaktur": monako_manufaktur,
  "sektor_peternakan": monako_peternakan,
  "sektor_agrikultur": monako_agrikultur,
  "sektor_perikanan": monako_perikanan,
  "sektor_olahan_pangan": monako_olahan_pangan,
  "sektor_farmasi": monako_farmasi,
  "sektor_pertahanan": monako_pertahanan,
  "armada_militer": monako_armada,
  "militer_strategis": monako_strategis,
  "armada_kepolisian": monako_kepolisian,
  "pabrik_militer": monako_pabrik,
    "pendidikan": monako_pendidikan,
  "kesehatan": monako_kesehatan,
  "hukum": monako_hukum,
  "sektor_olahraga": monako_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 40,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 29,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 100,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 126320,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": monako_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 31,
    "pendidikan": 25,
    "keamanan": 30,
    "keuangan": 5,
    "lingkungan": 60
  }
};
