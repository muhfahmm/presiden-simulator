import { CountryData } from "@/app/database/data/types";
import { azerbaijan_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/57_azerbaijan";
import { azerbaijan_armada } from "../../modules/2_militer/2_armada_militer/asia/57_azerbaijan";
import { azerbaijan_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/57_azerbaijan";
import { azerbaijan_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/57_azerbaijan";
import { azerbaijan_hukum } from "../../modules/3_sosial/3_hukum/asia/57_azerbaijan";
import { azerbaijan_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/57_azerbaijan";
import { azerbaijan_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/57_azerbaijan";
import { azerbaijan_kesehatan } from "../../modules/3_sosial/2_kesehatan/asia/57_azerbaijan";
import { azerbaijan_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/57_azerbaijan";
import { azerbaijan_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/57_azerbaijan";
import { azerbaijan_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/57_azerbaijan";
import { azerbaijan_olahraga } from "../../modules/3_sosial/4_olahraga/asia/57_azerbaijan";
import { azerbaijan_pabrik } from "../../modules/2_militer/5_pabrik_militer/asia/57_azerbaijan";
import { azerbaijan_pendidikan } from "../../modules/3_sosial/1_pendidikan/asia/57_azerbaijan";
import { azerbaijan_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/57_azerbaijan";
import { azerbaijan_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/57_azerbaijan";
import { azerbaijan_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/57_azerbaijan";
import { azerbaijan_profile } from "../../modules/0_profiles/asia/57_azerbaijan";
import { azerbaijan_strategis } from "../../modules/2_militer/3_militer_strategis/asia/57_azerbaijan";
import { azerbaijan_geopolitik } from "../../modules/4_geopolitik/asia/57_azerbaijan";

export const azerbaijan: CountryData = {
  ...azerbaijan_profile,
  "sektor_listrik": azerbaijan_listrik,
  "infrastruktur": azerbaijan_infrastruktur,
  "sektor_ekstraksi": azerbaijan_ekstraksi,
  "sektor_manufaktur": azerbaijan_manufaktur,
  "sektor_peternakan": azerbaijan_peternakan,
  "sektor_agrikultur": azerbaijan_agrikultur,
  "sektor_perikanan": azerbaijan_perikanan,
  "sektor_olahan_pangan": azerbaijan_olahan_pangan,
  "sektor_farmasi": azerbaijan_farmasi,
  "sektor_pertahanan": azerbaijan_pertahanan,
  "armada_militer": azerbaijan_armada,
  "militer_strategis": azerbaijan_strategis,
  "armada_kepolisian": azerbaijan_kepolisian,
  "pabrik_militer": azerbaijan_pabrik,
    "pendidikan": azerbaijan_pendidikan,
  "kesehatan": azerbaijan_kesehatan,
  "hukum": azerbaijan_hukum,
  "sektor_olahraga": azerbaijan_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 34,
      "kepuasan": 67,
      "pendapatan": 44
    },
    "korporasi": {
      "tarif": 2,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 28
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 10
    },
    "lingkungan": {
      "tarif": 11,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 9 },
    "lainnya": {
      "tarif": 19,
      "kepuasan": 93,
      "pendapatan": 19
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
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 21560,
    "harga_gula": 20160,
    "harga_telur": 15550,
    "harga_bbm": 8560,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 241950
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": azerbaijan_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 6,
    "pendidikan": 9,
    "keamanan": 28,
    "keuangan": 22,
    "lingkungan": 60
  }
};
