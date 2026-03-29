import { CountryData } from "@/app/database/data/types";
import { republik_serbia_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/139_republik_serbia";
import { republik_serbia_armada } from "../../modules/2_militer/2_armada_militer/eropa/139_republik_serbia";
import { republik_serbia_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/139_republik_serbia";
import { republik_serbia_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/139_republik_serbia";
import { republik_serbia_hukum } from "../../modules/3_sosial/3_hukum/eropa/139_republik_serbia";
import { republik_serbia_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/139_republik_serbia";
import { republik_serbia_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/139_republik_serbia";
import { republik_serbia_kesehatan } from "../../modules/3_sosial/2_kesehatan/eropa/139_republik_serbia";
import { republik_serbia_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/139_republik_serbia";
import { republik_serbia_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/139_republik_serbia";
import { republik_serbia_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/139_republik_serbia";
import { republik_serbia_olahraga } from "../../modules/3_sosial/4_olahraga/eropa/139_republik_serbia";
import { republik_serbia_pabrik } from "../../modules/2_militer/5_pabrik_militer/eropa/139_republik_serbia";
import { republik_serbia_pendidikan } from "../../modules/3_sosial/1_pendidikan/eropa/139_republik_serbia";
import { republik_serbia_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/139_republik_serbia";
import { republik_serbia_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/139_republik_serbia";
import { republik_serbia_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/139_republik_serbia";
import { republik_serbia_profile } from "../../modules/0_profiles/eropa/139_republik_serbia";
import { republik_serbia_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/139_republik_serbia";
import { republik_serbia_geopolitik } from "../../modules/4_geopolitik/eropa/139_republik_serbia";

export const republik_serbia: CountryData = {
  ...republik_serbia_profile,
  "sektor_listrik": republik_serbia_listrik,
  "infrastruktur": republik_serbia_infrastruktur,
  "sektor_ekstraksi": republik_serbia_ekstraksi,
  "sektor_manufaktur": republik_serbia_manufaktur,
  "sektor_peternakan": republik_serbia_peternakan,
  "sektor_agrikultur": republik_serbia_agrikultur,
  "sektor_perikanan": republik_serbia_perikanan,
  "sektor_olahan_pangan": republik_serbia_olahan_pangan,
  "sektor_farmasi": republik_serbia_farmasi,
  "sektor_pertahanan": republik_serbia_pertahanan,
  "armada_militer": republik_serbia_armada,
  "militer_strategis": republik_serbia_strategis,
  "armada_kepolisian": republik_serbia_kepolisian,
  "pabrik_militer": republik_serbia_pabrik,
    "pendidikan": republik_serbia_pendidikan,
  "kesehatan": republik_serbia_kesehatan,
  "hukum": republik_serbia_hukum,
  "sektor_olahraga": republik_serbia_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 8,
      "kepuasan": 67,
      "pendapatan": 14
    },
    "korporasi": {
      "tarif": 16,
      "kepuasan": 52,
      "pendapatan": 27
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 42
    },
    "lingkungan": {
      "tarif": 11,
      "kepuasan": 88,
      "pendapatan": 20
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 10 },
    "lainnya": {
      "tarif": 12,
      "kepuasan": 93,
      "pendapatan": 10
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 14980,
    "harga_listrik": 2240,
    "harga_air": 10400,
    "harga_obat": 157900,
    "harga_pendidikan": 241950
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": republik_serbia_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 30,
    "pendidikan": 3,
    "keamanan": 26,
    "keuangan": 26,
    "lingkungan": 60
  }
};
