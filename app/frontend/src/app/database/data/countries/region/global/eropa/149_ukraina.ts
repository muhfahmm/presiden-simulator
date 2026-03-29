import { CountryData } from "@/app/database/data/types";
import { ukraina_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/149_ukraina";
import { ukraina_armada } from "../../modules/2_militer/2_armada_militer/eropa/149_ukraina";
import { ukraina_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/149_ukraina";
import { ukraina_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/149_ukraina";
import { ukraina_hukum } from "../../modules/3_sosial/3_hukum/eropa/149_ukraina";
import { ukraina_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/149_ukraina";
import { ukraina_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/149_ukraina";
import { ukraina_kesehatan } from "../../modules/3_sosial/2_kesehatan/eropa/149_ukraina";
import { ukraina_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/149_ukraina";
import { ukraina_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/149_ukraina";
import { ukraina_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/149_ukraina";
import { ukraina_olahraga } from "../../modules/3_sosial/4_olahraga/eropa/149_ukraina";
import { ukraina_pabrik } from "../../modules/2_militer/5_pabrik_militer/eropa/149_ukraina";
import { ukraina_pendidikan } from "../../modules/3_sosial/1_pendidikan/eropa/149_ukraina";
import { ukraina_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/149_ukraina";
import { ukraina_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/149_ukraina";
import { ukraina_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/149_ukraina";
import { ukraina_profile } from "../../modules/0_profiles/eropa/149_ukraina";
import { ukraina_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/149_ukraina";
import { ukraina_geopolitik } from "../../modules/4_geopolitik/eropa/149_ukraina";

export const ukraina: CountryData = {
  ...ukraina_profile,
  "sektor_listrik": ukraina_listrik,
  "infrastruktur": ukraina_infrastruktur,
  "sektor_ekstraksi": ukraina_ekstraksi,
  "sektor_manufaktur": ukraina_manufaktur,
  "sektor_peternakan": ukraina_peternakan,
  "sektor_agrikultur": ukraina_agrikultur,
  "sektor_perikanan": ukraina_perikanan,
  "sektor_olahan_pangan": ukraina_olahan_pangan,
  "sektor_farmasi": ukraina_farmasi,
  "sektor_pertahanan": ukraina_pertahanan,
  "armada_militer": ukraina_armada,
  "militer_strategis": ukraina_strategis,
  "armada_kepolisian": ukraina_kepolisian,
  "pabrik_militer": ukraina_pabrik,
    "pendidikan": ukraina_pendidikan,
  "kesehatan": ukraina_kesehatan,
  "hukum": ukraina_hukum,
  "sektor_olahraga": ukraina_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 2,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 13,
      "kepuasan": 52,
      "pendapatan": 20
    },
    "penghasilan": {
      "tarif": 19,
      "kepuasan": 61,
      "pendapatan": 34
    },
    "bea_cukai": {
      "tarif": 30,
      "kepuasan": 86,
      "pendapatan": 85
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 8 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 24 },
    "lainnya": {
      "tarif": 2,
      "kepuasan": 93,
      "pendapatan": 5
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 7280,
    "harga_obat": 315800,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": ukraina_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 16,
    "pendidikan": 6,
    "keamanan": 1,
    "keuangan": 28,
    "lingkungan": 60
  }
};
