import { CountryData } from "@/app/database/data/types";
import { somalia_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/49_somalia";
import { somalia_armada } from "../../modules/2_militer/2_armada_militer/afrika/49_somalia";
import { somalia_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/49_somalia";
import { somalia_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/49_somalia";
import { somalia_hukum } from "../../modules/3_sosial/3_hukum/afrika/49_somalia";
import { somalia_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/49_somalia";
import { somalia_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/49_somalia";
import { somalia_kesehatan } from "../../modules/3_sosial/2_kesehatan/afrika/49_somalia";
import { somalia_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/49_somalia";
import { somalia_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/49_somalia";
import { somalia_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/49_somalia";
import { somalia_olahraga } from "../../modules/3_sosial/4_olahraga/afrika/49_somalia";
import { somalia_pabrik } from "../../modules/2_militer/5_pabrik_militer/afrika/49_somalia";
import { somalia_pendidikan } from "../../modules/3_sosial/1_pendidikan/afrika/49_somalia";
import { somalia_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/49_somalia";
import { somalia_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/49_somalia";
import { somalia_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/49_somalia";
import { somalia_profile } from "../../modules/0_profiles/afrika/49_somalia";
import { somalia_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/49_somalia";
import { somalia_geopolitik } from "../../modules/4_geopolitik/afrika/49_somalia";

export const somalia: CountryData = {
  ...somalia_profile,
  "sektor_listrik": somalia_listrik,
  "infrastruktur": somalia_infrastruktur,
  "sektor_ekstraksi": somalia_ekstraksi,
  "sektor_manufaktur": somalia_manufaktur,
  "sektor_peternakan": somalia_peternakan,
  "sektor_agrikultur": somalia_agrikultur,
  "sektor_perikanan": somalia_perikanan,
  "sektor_olahan_pangan": somalia_olahan_pangan,
  "sektor_farmasi": somalia_farmasi,
  "sektor_pertahanan": somalia_pertahanan,
  "armada_militer": somalia_armada,
  "militer_strategis": somalia_strategis,
  "armada_kepolisian": somalia_kepolisian,
  "pabrik_militer": somalia_pabrik,
    "pendidikan": somalia_pendidikan,
  "kesehatan": somalia_kesehatan,
  "hukum": somalia_hukum,
  "sektor_olahraga": somalia_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 12,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 11,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 40,
      "kepuasan": 93,
      "pendapatan": 5
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 50,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 25,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 967800
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": somalia_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 8,
    "pendidikan": 11,
    "keamanan": 24,
    "keuangan": 13,
    "lingkungan": 60
  }
};
