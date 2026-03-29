import { CountryData } from "@/app/database/data/types";
import { bolivia_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/sa/196_bolivia";
import { bolivia_armada } from "../../modules/2_militer/2_armada_militer/sa/196_bolivia";
import { bolivia_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/sa/196_bolivia";
import { bolivia_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/sa/196_bolivia";
import { bolivia_hukum } from "../../modules/3_sosial/3_hukum/sa/196_bolivia";
import { bolivia_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/sa/196_bolivia";
import { bolivia_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/sa/196_bolivia";
import { bolivia_kesehatan } from "../../modules/3_sosial/2_kesehatan/sa/196_bolivia";
import { bolivia_listrik } from "../../modules/1_ekonomi/2_kelistrikan/sa/196_bolivia";
import { bolivia_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/sa/196_bolivia";
import { bolivia_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/sa/196_bolivia";
import { bolivia_olahraga } from "../../modules/3_sosial/4_olahraga/sa/196_bolivia";
import { bolivia_pabrik } from "../../modules/2_militer/5_pabrik_militer/sa/196_bolivia";
import { bolivia_pendidikan } from "../../modules/3_sosial/1_pendidikan/sa/196_bolivia";
import { bolivia_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/sa/196_bolivia";
import { bolivia_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/sa/196_bolivia";
import { bolivia_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/sa/196_bolivia";
import { bolivia_profile } from "../../modules/0_profiles/sa/196_bolivia";
import { bolivia_strategis } from "../../modules/2_militer/3_militer_strategis/sa/196_bolivia";
import { bolivia_geopolitik } from "../../modules/4_geopolitik/sa/196_bolivia";

export const bolivia: CountryData = {
  ...bolivia_profile,
  "sektor_listrik": bolivia_listrik,
  "infrastruktur": bolivia_infrastruktur,
  "sektor_ekstraksi": bolivia_ekstraksi,
  "sektor_manufaktur": bolivia_manufaktur,
  "sektor_peternakan": bolivia_peternakan,
  "sektor_agrikultur": bolivia_agrikultur,
  "sektor_perikanan": bolivia_perikanan,
  "sektor_olahan_pangan": bolivia_olahan_pangan,
  "sektor_farmasi": bolivia_farmasi,
  "sektor_pertahanan": bolivia_pertahanan,
  "armada_militer": bolivia_armada,
  "militer_strategis": bolivia_strategis,
  "armada_kepolisian": bolivia_kepolisian,
  "pabrik_militer": bolivia_pabrik,
    "pendidikan": bolivia_pendidikan,
  "kesehatan": bolivia_kesehatan,
  "hukum": bolivia_hukum,
  "sektor_olahraga": bolivia_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 27,
      "kepuasan": 67,
      "pendapatan": 21
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 25
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 32
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 7
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 24
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 28800,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 2240,
    "harga_air": 4160,
    "harga_obat": 126320,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": bolivia_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 31,
    "pendidikan": 8,
    "keamanan": 14,
    "keuangan": 33,
    "lingkungan": 60
  }
};
