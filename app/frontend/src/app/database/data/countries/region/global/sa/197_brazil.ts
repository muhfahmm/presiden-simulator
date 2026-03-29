import { CountryData } from "@/app/database/data/types";
import { brazil_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/sa/197_brazil";
import { brazil_armada } from "../../modules/2_militer/2_armada_militer/sa/197_brazil";
import { brazil_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/sa/197_brazil";
import { brazil_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/sa/197_brazil";
import { brazil_hukum } from "../../modules/3_sosial/3_hukum/sa/197_brazil";
import { brazil_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/sa/197_brazil";
import { brazil_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/sa/197_brazil";
import { brazil_kesehatan } from "../../modules/3_sosial/2_kesehatan/sa/197_brazil";
import { brazil_listrik } from "../../modules/1_ekonomi/2_kelistrikan/sa/197_brazil";
import { brazil_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/sa/197_brazil";
import { brazil_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/sa/197_brazil";
import { brazil_olahraga } from "../../modules/3_sosial/4_olahraga/sa/197_brazil";
import { brazil_pabrik } from "../../modules/2_militer/5_pabrik_militer/sa/197_brazil";
import { brazil_pendidikan } from "../../modules/3_sosial/1_pendidikan/sa/197_brazil";
import { brazil_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/sa/197_brazil";
import { brazil_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/sa/197_brazil";
import { brazil_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/sa/197_brazil";
import { brazil_profile } from "../../modules/0_profiles/sa/197_brazil";
import { brazil_strategis } from "../../modules/2_militer/3_militer_strategis/sa/197_brazil";
import { brazil_geopolitik } from "../../modules/4_geopolitik/sa/197_brazil";

export const brazil: CountryData = {
  ...brazil_profile,
  "sektor_listrik": brazil_listrik,
  "infrastruktur": brazil_infrastruktur,
  "sektor_ekstraksi": brazil_ekstraksi,
  "sektor_manufaktur": brazil_manufaktur,
  "sektor_peternakan": brazil_peternakan,
  "sektor_agrikultur": brazil_agrikultur,
  "sektor_perikanan": brazil_perikanan,
  "sektor_olahan_pangan": brazil_olahan_pangan,
  "sektor_farmasi": brazil_farmasi,
  "sektor_pertahanan": brazil_pertahanan,
  "armada_militer": brazil_armada,
  "militer_strategis": brazil_strategis,
  "armada_kepolisian": brazil_kepolisian,
  "pabrik_militer": brazil_pabrik,
    "pendidikan": brazil_pendidikan,
  "kesehatan": brazil_kesehatan,
  "hukum": brazil_hukum,
  "sektor_olahraga": brazil_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 594
    },
    "korporasi": {
      "tarif": 4,
      "kepuasan": 52,
      "pendapatan": 159
    },
    "penghasilan": {
      "tarif": 4,
      "kepuasan": 61,
      "pendapatan": 213
    },
    "bea_cukai": {
      "tarif": 20,
      "kepuasan": 86,
      "pendapatan": 1246
    },
    "lingkungan": {
      "tarif": 24,
      "kepuasan": 88,
      "pendapatan": 1341
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 114 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 340 },
    "lainnya": {
      "tarif": 3,
      "kepuasan": 93,
      "pendapatan": 95
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 12320,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 126320,
    "harga_pendidikan": 967800
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": brazil_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 10,
    "pendidikan": 31,
    "keamanan": 39,
    "keuangan": 36,
    "lingkungan": 60
  }
};
