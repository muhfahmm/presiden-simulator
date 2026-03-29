import { CountryData } from "@/app/database/data/types";
import { lebanon_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/79_lebanon";
import { lebanon_armada } from "../../modules/2_militer/2_armada_militer/asia/79_lebanon";
import { lebanon_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/79_lebanon";
import { lebanon_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/79_lebanon";
import { lebanon_hukum } from "../../modules/3_sosial/3_hukum/asia/79_lebanon";
import { lebanon_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/79_lebanon";
import { lebanon_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/79_lebanon";
import { lebanon_kesehatan } from "../../modules/3_sosial/2_kesehatan/asia/79_lebanon";
import { lebanon_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/79_lebanon";
import { lebanon_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/79_lebanon";
import { lebanon_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/79_lebanon";
import { lebanon_olahraga } from "../../modules/3_sosial/4_olahraga/asia/79_lebanon";
import { lebanon_pabrik } from "../../modules/2_militer/5_pabrik_militer/asia/79_lebanon";
import { lebanon_pendidikan } from "../../modules/3_sosial/1_pendidikan/asia/79_lebanon";
import { lebanon_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/79_lebanon";
import { lebanon_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/79_lebanon";
import { lebanon_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/79_lebanon";
import { lebanon_profile } from "../../modules/0_profiles/asia/79_lebanon";
import { lebanon_strategis } from "../../modules/2_militer/3_militer_strategis/asia/79_lebanon";
import { lebanon_geopolitik } from "../../modules/4_geopolitik/asia/79_lebanon";

export const lebanon: CountryData = {
  ...lebanon_profile,
  "sektor_listrik": lebanon_listrik,
  "infrastruktur": lebanon_infrastruktur,
  "sektor_ekstraksi": lebanon_ekstraksi,
  "sektor_manufaktur": lebanon_manufaktur,
  "sektor_peternakan": lebanon_peternakan,
  "sektor_agrikultur": lebanon_agrikultur,
  "sektor_perikanan": lebanon_perikanan,
  "sektor_olahan_pangan": lebanon_olahan_pangan,
  "sektor_farmasi": lebanon_farmasi,
  "sektor_pertahanan": lebanon_pertahanan,
  "armada_militer": lebanon_armada,
  "militer_strategis": lebanon_strategis,
  "armada_kepolisian": lebanon_kepolisian,
  "pabrik_militer": lebanon_pabrik,
    "pendidikan": lebanon_pendidikan,
  "kesehatan": lebanon_kesehatan,
  "hukum": lebanon_hukum,
  "sektor_olahraga": lebanon_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 5,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 13
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 15,
      "kepuasan": 93,
      "pendapatan": 6
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 60,
    "gaji_medis": 60,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 21400,
    "harga_listrik": 800,
    "harga_air": 7280,
    "harga_obat": 157900,
    "harga_pendidikan": 241950
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": lebanon_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 20,
    "pendidikan": 8,
    "keamanan": 6,
    "keuangan": 13,
    "lingkungan": 60
  }
};
