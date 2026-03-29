import { CountryData } from "@/app/database/data/types";
import { palestina_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/88_palestina";
import { palestina_armada } from "../../modules/2_militer/2_armada_militer/asia/88_palestina";
import { palestina_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/88_palestina";
import { palestina_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/88_palestina";
import { palestina_hukum } from "../../modules/3_sosial/3_hukum/asia/88_palestina";
import { palestina_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/88_palestina";
import { palestina_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/88_palestina";
import { palestina_kesehatan } from "../../modules/3_sosial/2_kesehatan/asia/88_palestina";
import { palestina_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/88_palestina";
import { palestina_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/88_palestina";
import { palestina_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/88_palestina";
import { palestina_olahraga } from "../../modules/3_sosial/4_olahraga/asia/88_palestina";
import { palestina_pabrik } from "../../modules/2_militer/5_pabrik_militer/asia/88_palestina";
import { palestina_pendidikan } from "../../modules/3_sosial/1_pendidikan/asia/88_palestina";
import { palestina_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/88_palestina";
import { palestina_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/88_palestina";
import { palestina_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/88_palestina";
import { palestina_profile } from "../../modules/0_profiles/asia/88_palestina";
import { palestina_strategis } from "../../modules/2_militer/3_militer_strategis/asia/88_palestina";
import { palestina_geopolitik } from "../../modules/4_geopolitik/asia/88_palestina";

export const palestina: CountryData = {
  ...palestina_profile,
  "sektor_listrik": palestina_listrik,
  "infrastruktur": palestina_infrastruktur,
  "sektor_ekstraksi": palestina_ekstraksi,
  "sektor_manufaktur": palestina_manufaktur,
  "sektor_peternakan": palestina_peternakan,
  "sektor_agrikultur": palestina_agrikultur,
  "sektor_perikanan": palestina_perikanan,
  "sektor_olahan_pangan": palestina_olahan_pangan,
  "sektor_farmasi": palestina_farmasi,
  "sektor_pertahanan": palestina_pertahanan,
  "armada_militer": palestina_armada,
  "militer_strategis": palestina_strategis,
  "armada_kepolisian": palestina_kepolisian,
  "pabrik_militer": palestina_pabrik,
    "pendidikan": palestina_pendidikan,
  "kesehatan": palestina_kesehatan,
  "hukum": palestina_hukum,
  "sektor_olahraga": palestina_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 20,
      "kepuasan": 67,
      "pendapatan": 9
    },
    "korporasi": {
      "tarif": 27,
      "kepuasan": 52,
      "pendapatan": 11
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 11
    },
    "bea_cukai": {
      "tarif": 33,
      "kepuasan": 86,
      "pendapatan": 11
    },
    "lingkungan": {
      "tarif": 35,
      "kepuasan": 88,
      "pendapatan": 17
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 70,
    "gaji_medis": 80,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 24880,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 315800,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": palestina_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 6,
    "pendidikan": 15,
    "keamanan": 33,
    "keuangan": 7,
    "lingkungan": 60
  }
};
