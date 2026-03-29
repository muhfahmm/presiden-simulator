import { CountryData } from "@/app/database/data/types";
import { prancis_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/137_prancis";
import { prancis_armada } from "../../modules/2_militer/2_armada_militer/eropa/137_prancis";
import { prancis_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/137_prancis";
import { prancis_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/137_prancis";
import { prancis_hukum } from "../../modules/3_sosial/3_hukum/eropa/137_prancis";
import { prancis_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/137_prancis";
import { prancis_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/137_prancis";
import { prancis_kesehatan } from "../../modules/3_sosial/2_kesehatan/eropa/137_prancis";
import { prancis_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/137_prancis";
import { prancis_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/137_prancis";
import { prancis_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/137_prancis";
import { prancis_olahraga } from "../../modules/3_sosial/4_olahraga/eropa/137_prancis";
import { prancis_pabrik } from "../../modules/2_militer/5_pabrik_militer/eropa/137_prancis";
import { prancis_pendidikan } from "../../modules/3_sosial/1_pendidikan/eropa/137_prancis";
import { prancis_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/137_prancis";
import { prancis_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/137_prancis";
import { prancis_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/137_prancis";
import { prancis_profile } from "../../modules/0_profiles/eropa/137_prancis";
import { prancis_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/137_prancis";
import { prancis_geopolitik } from "../../modules/4_geopolitik/eropa/137_prancis";

export const prancis: CountryData = {
  ...prancis_profile,
  "sektor_listrik": prancis_listrik,
  "infrastruktur": prancis_infrastruktur,
  "sektor_ekstraksi": prancis_ekstraksi,
  "sektor_manufaktur": prancis_manufaktur,
  "sektor_peternakan": prancis_peternakan,
  "sektor_agrikultur": prancis_agrikultur,
  "sektor_perikanan": prancis_perikanan,
  "sektor_olahan_pangan": prancis_olahan_pangan,
  "sektor_farmasi": prancis_farmasi,
  "sektor_pertahanan": prancis_pertahanan,
  "armada_militer": prancis_armada,
  "militer_strategis": prancis_strategis,
  "armada_kepolisian": prancis_kepolisian,
  "pabrik_militer": prancis_pabrik,
    "pendidikan": prancis_pendidikan,
  "kesehatan": prancis_kesehatan,
  "hukum": prancis_hukum,
  "sektor_olahraga": prancis_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 30,
      "kepuasan": 67,
      "pendapatan": 1497
    },
    "korporasi": {
      "tarif": 35,
      "kepuasan": 52,
      "pendapatan": 1939
    },
    "penghasilan": {
      "tarif": 2,
      "kepuasan": 61,
      "pendapatan": 142
    },
    "bea_cukai": {
      "tarif": 19,
      "kepuasan": 86,
      "pendapatan": 1458
    },
    "lingkungan": {
      "tarif": 3,
      "kepuasan": 88,
      "pendapatan": 157
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 153 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 457 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 520
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
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 5350,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 221060,
    "harga_pendidikan": 677460
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": prancis_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 10,
    "pendidikan": 4,
    "keamanan": 18,
    "keuangan": 25,
    "lingkungan": 60
  }
};
