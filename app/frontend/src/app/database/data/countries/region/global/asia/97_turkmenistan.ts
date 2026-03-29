import { CountryData } from "@/app/database/data/types";
import { turkmenistan_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/97_turkmenistan";
import { turkmenistan_armada } from "../../modules/2_militer/2_armada_militer/asia/97_turkmenistan";
import { turkmenistan_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/97_turkmenistan";
import { turkmenistan_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/97_turkmenistan";
import { turkmenistan_hukum } from "../../modules/3_sosial/3_hukum/asia/97_turkmenistan";
import { turkmenistan_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/97_turkmenistan";
import { turkmenistan_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/97_turkmenistan";
import { turkmenistan_kesehatan } from "../../modules/3_sosial/2_kesehatan/asia/97_turkmenistan";
import { turkmenistan_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/97_turkmenistan";
import { turkmenistan_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/97_turkmenistan";
import { turkmenistan_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/97_turkmenistan";
import { turkmenistan_olahraga } from "../../modules/3_sosial/4_olahraga/asia/97_turkmenistan";
import { turkmenistan_pabrik } from "../../modules/2_militer/5_pabrik_militer/asia/97_turkmenistan";
import { turkmenistan_pendidikan } from "../../modules/3_sosial/1_pendidikan/asia/97_turkmenistan";
import { turkmenistan_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/97_turkmenistan";
import { turkmenistan_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/97_turkmenistan";
import { turkmenistan_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/97_turkmenistan";
import { turkmenistan_profile } from "../../modules/0_profiles/asia/97_turkmenistan";
import { turkmenistan_strategis } from "../../modules/2_militer/3_militer_strategis/asia/97_turkmenistan";
import { turkmenistan_geopolitik } from "../../modules/4_geopolitik/asia/97_turkmenistan";

export const turkmenistan: CountryData = {
  ...turkmenistan_profile,
  "sektor_listrik": turkmenistan_listrik,
  "infrastruktur": turkmenistan_infrastruktur,
  "sektor_ekstraksi": turkmenistan_ekstraksi,
  "sektor_manufaktur": turkmenistan_manufaktur,
  "sektor_peternakan": turkmenistan_peternakan,
  "sektor_agrikultur": turkmenistan_agrikultur,
  "sektor_perikanan": turkmenistan_perikanan,
  "sektor_olahan_pangan": turkmenistan_olahan_pangan,
  "sektor_farmasi": turkmenistan_farmasi,
  "sektor_pertahanan": turkmenistan_pertahanan,
  "armada_militer": turkmenistan_armada,
  "militer_strategis": turkmenistan_strategis,
  "armada_kepolisian": turkmenistan_kepolisian,
  "pabrik_militer": turkmenistan_pabrik,
    "pendidikan": turkmenistan_pendidikan,
  "kesehatan": turkmenistan_kesehatan,
  "hukum": turkmenistan_hukum,
  "sektor_olahraga": turkmenistan_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 20,
      "kepuasan": 67,
      "pendapatan": 14
    },
    "korporasi": {
      "tarif": 34,
      "kepuasan": 52,
      "pendapatan": 25
    },
    "penghasilan": {
      "tarif": 31,
      "kepuasan": 61,
      "pendapatan": 38
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 14
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 35
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 25,
      "kepuasan": 93,
      "pendapatan": 30
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 70
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
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 800,
    "harga_air": 5200,
    "harga_obat": 315800,
    "harga_pendidikan": 967800
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": turkmenistan_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 26,
    "pendidikan": 17,
    "keamanan": 12,
    "keuangan": 24,
    "lingkungan": 60
  }
};
