import { CountryData } from "@/app/database/data/types";
import { kongo_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/21_kongo";
import { kongo_armada } from "../../modules/2_militer/2_armada_militer/afrika/21_kongo";
import { kongo_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/21_kongo";
import { kongo_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/21_kongo";
import { kongo_hukum } from "../../modules/3_sosial/3_hukum/afrika/21_kongo";
import { kongo_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/21_kongo";
import { kongo_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/21_kongo";
import { kongo_kesehatan } from "../../modules/3_sosial/2_kesehatan/afrika/21_kongo";
import { kongo_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/21_kongo";
import { kongo_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/21_kongo";
import { kongo_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/21_kongo";
import { kongo_olahraga } from "../../modules/3_sosial/4_olahraga/afrika/21_kongo";
import { kongo_pabrik } from "../../modules/2_militer/5_pabrik_militer/afrika/21_kongo";
import { kongo_pendidikan } from "../../modules/3_sosial/1_pendidikan/afrika/21_kongo";
import { kongo_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/21_kongo";
import { kongo_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/21_kongo";
import { kongo_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/21_kongo";
import { kongo_profile } from "../../modules/0_profiles/afrika/21_kongo";
import { kongo_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/21_kongo";
import { kongo_geopolitik } from "../../modules/4_geopolitik/afrika/21_kongo";

export const kongo: CountryData = {
  ...kongo_profile,
  "sektor_listrik": kongo_listrik,
  "infrastruktur": kongo_infrastruktur,
  "sektor_ekstraksi": kongo_ekstraksi,
  "sektor_manufaktur": kongo_manufaktur,
  "sektor_peternakan": kongo_peternakan,
  "sektor_agrikultur": kongo_agrikultur,
  "sektor_perikanan": kongo_perikanan,
  "sektor_olahan_pangan": kongo_olahan_pangan,
  "sektor_farmasi": kongo_farmasi,
  "sektor_pertahanan": kongo_pertahanan,
  "armada_militer": kongo_armada,
  "militer_strategis": kongo_strategis,
  "armada_kepolisian": kongo_kepolisian,
  "pabrik_militer": kongo_pabrik,
    "pendidikan": kongo_pendidikan,
  "kesehatan": kongo_kesehatan,
  "hukum": kongo_hukum,
  "sektor_olahraga": kongo_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 6,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 12
    },
    "bea_cukai": {
      "tarif": 26,
      "kepuasan": 86,
      "pendapatan": 5
    },
    "lingkungan": {
      "tarif": 34,
      "kepuasan": 88,
      "pendapatan": 11
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 50,
    "gaji_medis": 50,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 25,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 21400,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 221060,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": kongo_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 3,
    "pendidikan": 17,
    "keamanan": 3,
    "keuangan": 37,
    "lingkungan": 60
  }
};
