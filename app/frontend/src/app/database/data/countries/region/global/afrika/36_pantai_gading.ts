import { CountryData } from "@/app/database/data/types";
import { pantai_gading_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/36_pantai_gading";
import { pantai_gading_armada } from "../../modules/2_militer/2_armada_militer/afrika/36_pantai_gading";
import { pantai_gading_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/36_pantai_gading";
import { pantai_gading_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/36_pantai_gading";
import { pantai_gading_hukum } from "../../modules/3_sosial/3_hukum/afrika/36_pantai_gading";
import { pantai_gading_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/36_pantai_gading";
import { pantai_gading_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/36_pantai_gading";
import { pantai_gading_kesehatan } from "../../modules/3_sosial/2_kesehatan/afrika/36_pantai_gading";
import { pantai_gading_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/36_pantai_gading";
import { pantai_gading_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/36_pantai_gading";
import { pantai_gading_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/36_pantai_gading";
import { pantai_gading_olahraga } from "../../modules/3_sosial/4_olahraga/afrika/36_pantai_gading";
import { pantai_gading_pabrik } from "../../modules/2_militer/5_pabrik_militer/afrika/36_pantai_gading";
import { pantai_gading_pendidikan } from "../../modules/3_sosial/1_pendidikan/afrika/36_pantai_gading";
import { pantai_gading_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/36_pantai_gading";
import { pantai_gading_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/36_pantai_gading";
import { pantai_gading_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/36_pantai_gading";
import { pantai_gading_profile } from "../../modules/0_profiles/afrika/36_pantai_gading";
import { pantai_gading_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/36_pantai_gading";
import { pantai_gading_geopolitik } from "../../modules/4_geopolitik/afrika/36_pantai_gading";

export const pantai_gading: CountryData = {
  ...pantai_gading_profile,
  "sektor_listrik": pantai_gading_listrik,
  "infrastruktur": pantai_gading_infrastruktur,
  "sektor_ekstraksi": pantai_gading_ekstraksi,
  "sektor_manufaktur": pantai_gading_manufaktur,
  "sektor_peternakan": pantai_gading_peternakan,
  "sektor_agrikultur": pantai_gading_agrikultur,
  "sektor_perikanan": pantai_gading_perikanan,
  "sektor_olahan_pangan": pantai_gading_olahan_pangan,
  "sektor_farmasi": pantai_gading_farmasi,
  "sektor_pertahanan": pantai_gading_pertahanan,
  "armada_militer": pantai_gading_armada,
  "militer_strategis": pantai_gading_strategis,
  "armada_kepolisian": pantai_gading_kepolisian,
  "pabrik_militer": pantai_gading_pabrik,
    "pendidikan": pantai_gading_pendidikan,
  "kesehatan": pantai_gading_kesehatan,
  "hukum": pantai_gading_hukum,
  "sektor_olahraga": pantai_gading_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 36,
      "kepuasan": 67,
      "pendapatan": 51
    },
    "korporasi": {
      "tarif": 34,
      "kepuasan": 52,
      "pendapatan": 63
    },
    "penghasilan": {
      "tarif": 4,
      "kepuasan": 61,
      "pendapatan": 3
    },
    "bea_cukai": {
      "tarif": 23,
      "kepuasan": 86,
      "pendapatan": 21
    },
    "lingkungan": {
      "tarif": 25,
      "kepuasan": 88,
      "pendapatan": 50
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 11 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 6
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 40,
    "gaji_militer": 50
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
    "harga_beras": 12800,
    "harga_daging_sapi": 145740,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 4160,
    "harga_obat": 126320,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": pantai_gading_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 21,
    "pendidikan": 27,
    "keamanan": 9,
    "keuangan": 4,
    "lingkungan": 60
  }
};
