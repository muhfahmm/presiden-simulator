import { CountryData } from "@/app/database/data/types";
import { irak_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/68_irak";
import { irak_armada } from "../../modules/2_militer/2_armada_militer/asia/68_irak";
import { irak_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/68_irak";
import { irak_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/68_irak";
import { irak_hukum } from "../../modules/3_sosial/3_hukum/asia/68_irak";
import { irak_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/68_irak";
import { irak_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/68_irak";
import { irak_kesehatan } from "../../modules/3_sosial/2_kesehatan/asia/68_irak";
import { irak_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/68_irak";
import { irak_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/68_irak";
import { irak_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/68_irak";
import { irak_olahraga } from "../../modules/3_sosial/4_olahraga/asia/68_irak";
import { irak_pabrik } from "../../modules/2_militer/5_pabrik_militer/asia/68_irak";
import { irak_pendidikan } from "../../modules/3_sosial/1_pendidikan/asia/68_irak";
import { irak_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/68_irak";
import { irak_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/68_irak";
import { irak_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/68_irak";
import { irak_profile } from "../../modules/0_profiles/asia/68_irak";
import { irak_strategis } from "../../modules/2_militer/3_militer_strategis/asia/68_irak";
import { irak_geopolitik } from "../../modules/4_geopolitik/asia/68_irak";

export const irak: CountryData = {
  ...irak_profile,
  "sektor_listrik": irak_listrik,
  "infrastruktur": irak_infrastruktur,
  "sektor_ekstraksi": irak_ekstraksi,
  "sektor_manufaktur": irak_manufaktur,
  "sektor_peternakan": irak_peternakan,
  "sektor_agrikultur": irak_agrikultur,
  "sektor_perikanan": irak_perikanan,
  "sektor_olahan_pangan": irak_olahan_pangan,
  "sektor_farmasi": irak_farmasi,
  "sektor_pertahanan": irak_pertahanan,
  "armada_militer": irak_armada,
  "militer_strategis": irak_strategis,
  "armada_kepolisian": irak_kepolisian,
  "pabrik_militer": irak_pabrik,
    "pendidikan": irak_pendidikan,
  "kesehatan": irak_kesehatan,
  "hukum": irak_hukum,
  "sektor_olahraga": irak_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 17,
      "kepuasan": 67,
      "pendapatan": 67
    },
    "korporasi": {
      "tarif": 1,
      "kepuasan": 52,
      "pendapatan": 6
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 301
    },
    "bea_cukai": {
      "tarif": 3,
      "kepuasan": 86,
      "pendapatan": 15
    },
    "lingkungan": {
      "tarif": 32,
      "kepuasan": 88,
      "pendapatan": 224
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 14 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 40 },
    "lainnya": {
      "tarif": 28,
      "kepuasan": 93,
      "pendapatan": 190
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 70,
    "gaji_medis": 60,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 30800,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 5350,
    "harga_listrik": 1600,
    "harga_air": 10400,
    "harga_obat": 126320,
    "harga_pendidikan": 677460
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": irak_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 11,
    "pendidikan": 29,
    "keamanan": 9,
    "keuangan": 5,
    "lingkungan": 60
  }
};
