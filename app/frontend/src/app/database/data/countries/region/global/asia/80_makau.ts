import { CountryData } from "@/app/database/data/types";
import { makau_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/80_makau";
import { makau_armada } from "../../modules/2_militer/2_armada_militer/asia/80_makau";
import { makau_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/80_makau";
import { makau_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/80_makau";
import { makau_hukum } from "../../modules/3_sosial/3_hukum/asia/80_makau";
import { makau_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/80_makau";
import { makau_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/80_makau";
import { makau_kesehatan } from "../../modules/3_sosial/2_kesehatan/asia/80_makau";
import { makau_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/80_makau";
import { makau_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/80_makau";
import { makau_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/80_makau";
import { makau_olahraga } from "../../modules/3_sosial/4_olahraga/asia/80_makau";
import { makau_pabrik } from "../../modules/2_militer/5_pabrik_militer/asia/80_makau";
import { makau_pendidikan } from "../../modules/3_sosial/1_pendidikan/asia/80_makau";
import { makau_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/80_makau";
import { makau_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/80_makau";
import { makau_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/80_makau";
import { makau_profile } from "../../modules/0_profiles/asia/80_makau";
import { makau_strategis } from "../../modules/2_militer/3_militer_strategis/asia/80_makau";
import { makau_geopolitik } from "../../modules/4_geopolitik/asia/80_makau";

export const makau: CountryData = {
  ...makau_profile,
  "sektor_listrik": makau_listrik,
  "infrastruktur": makau_infrastruktur,
  "sektor_ekstraksi": makau_ekstraksi,
  "sektor_manufaktur": makau_manufaktur,
  "sektor_peternakan": makau_peternakan,
  "sektor_agrikultur": makau_agrikultur,
  "sektor_perikanan": makau_perikanan,
  "sektor_olahan_pangan": makau_olahan_pangan,
  "sektor_farmasi": makau_farmasi,
  "sektor_pertahanan": makau_pertahanan,
  "armada_militer": makau_armada,
  "militer_strategis": makau_strategis,
  "armada_kepolisian": makau_kepolisian,
  "pabrik_militer": makau_pabrik,
    "pendidikan": makau_pendidikan,
  "kesehatan": makau_kesehatan,
  "hukum": makau_hukum,
  "sektor_olahraga": makau_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 35,
      "kepuasan": 67,
      "pendapatan": 7
    },
    "korporasi": {
      "tarif": 28,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 18,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 11,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 5
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 70,
    "gaji_medis": 80,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 7200,
    "harga_telur": 24880,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 677460
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": makau_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 17,
    "pendidikan": 22,
    "keamanan": 6,
    "keuangan": 22,
    "lingkungan": 60
  }
};
