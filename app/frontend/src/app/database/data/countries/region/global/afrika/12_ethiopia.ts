import { CountryData } from "@/app/database/data/types";
import { ethiopia_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/12_ethiopia";
import { ethiopia_armada } from "../../modules/2_militer/2_armada_militer/afrika/12_ethiopia";
import { ethiopia_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/12_ethiopia";
import { ethiopia_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/12_ethiopia";
import { ethiopia_hukum } from "../../modules/3_sosial/3_hukum/afrika/12_ethiopia";
import { ethiopia_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/12_ethiopia";
import { ethiopia_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/12_ethiopia";
import { ethiopia_kesehatan } from "../../modules/3_sosial/2_kesehatan/afrika/12_ethiopia";
import { ethiopia_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/12_ethiopia";
import { ethiopia_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/12_ethiopia";
import { ethiopia_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/12_ethiopia";
import { ethiopia_olahraga } from "../../modules/3_sosial/4_olahraga/afrika/12_ethiopia";
import { ethiopia_pabrik } from "../../modules/2_militer/5_pabrik_militer/afrika/12_ethiopia";
import { ethiopia_pendidikan } from "../../modules/3_sosial/1_pendidikan/afrika/12_ethiopia";
import { ethiopia_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/12_ethiopia";
import { ethiopia_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/12_ethiopia";
import { ethiopia_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/12_ethiopia";
import { ethiopia_profile } from "../../modules/0_profiles/afrika/12_ethiopia";
import { ethiopia_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/12_ethiopia";
import { ethiopia_geopolitik } from "../../modules/4_geopolitik/afrika/12_ethiopia";

export const ethiopia: CountryData = {
  ...ethiopia_profile,
  "sektor_listrik": ethiopia_listrik,
  "infrastruktur": ethiopia_infrastruktur,
  "sektor_ekstraksi": ethiopia_ekstraksi,
  "sektor_manufaktur": ethiopia_manufaktur,
  "sektor_peternakan": ethiopia_peternakan,
  "sektor_agrikultur": ethiopia_agrikultur,
  "sektor_perikanan": ethiopia_perikanan,
  "sektor_olahan_pangan": ethiopia_olahan_pangan,
  "sektor_farmasi": ethiopia_farmasi,
  "sektor_pertahanan": ethiopia_pertahanan,
  "armada_militer": ethiopia_armada,
  "militer_strategis": ethiopia_strategis,
  "armada_kepolisian": ethiopia_kepolisian,
  "pabrik_militer": ethiopia_pabrik,
    "pendidikan": ethiopia_pendidikan,
  "kesehatan": ethiopia_kesehatan,
  "hukum": ethiopia_hukum,
  "sektor_olahraga": ethiopia_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 17,
      "kepuasan": 67,
      "pendapatan": 59
    },
    "korporasi": {
      "tarif": 25,
      "kepuasan": 52,
      "pendapatan": 82
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 63
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 81
    },
    "lingkungan": {
      "tarif": 30,
      "kepuasan": 88,
      "pendapatan": 50
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 8 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 23 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 18
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 60,
    "gaji_medis": 50,
    "gaji_militer": 40
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 7280,
    "harga_obat": 157900,
    "harga_pendidikan": 677460
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": ethiopia_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 19,
    "pendidikan": 4,
    "keamanan": 5,
    "keuangan": 33,
    "lingkungan": 60
  }
};
