import { CountryData } from "@/app/database/data/types";
import { andorra_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/104_andorra";
import { andorra_armada } from "../../modules/2_militer/2_armada_militer/eropa/104_andorra";
import { andorra_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/104_andorra";
import { andorra_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/104_andorra";
import { andorra_hukum } from "../../modules/3_sosial/3_hukum/eropa/104_andorra";
import { andorra_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/104_andorra";
import { andorra_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/104_andorra";
import { andorra_kesehatan } from "../../modules/3_sosial/2_kesehatan/eropa/104_andorra";
import { andorra_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/104_andorra";
import { andorra_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/104_andorra";
import { andorra_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/104_andorra";
import { andorra_olahraga } from "../../modules/3_sosial/4_olahraga/eropa/104_andorra";
import { andorra_pabrik } from "../../modules/2_militer/5_pabrik_militer/eropa/104_andorra";
import { andorra_pendidikan } from "../../modules/3_sosial/1_pendidikan/eropa/104_andorra";
import { andorra_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/104_andorra";
import { andorra_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/104_andorra";
import { andorra_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/104_andorra";
import { andorra_profile } from "../../modules/0_profiles/eropa/104_andorra";
import { andorra_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/104_andorra";
import { andorra_geopolitik } from "../../modules/4_geopolitik/eropa/104_andorra";

export const andorra: CountryData = {
  ...andorra_profile,
  "sektor_listrik": andorra_listrik,
  "infrastruktur": andorra_infrastruktur,
  "sektor_ekstraksi": andorra_ekstraksi,
  "sektor_manufaktur": andorra_manufaktur,
  "sektor_peternakan": andorra_peternakan,
  "sektor_agrikultur": andorra_agrikultur,
  "sektor_perikanan": andorra_perikanan,
  "sektor_olahan_pangan": andorra_olahan_pangan,
  "sektor_farmasi": andorra_farmasi,
  "sektor_pertahanan": andorra_pertahanan,
  "armada_militer": andorra_armada,
  "militer_strategis": andorra_strategis,
  "armada_kepolisian": andorra_kepolisian,
  "pabrik_militer": andorra_pabrik,
    "pendidikan": andorra_pendidikan,
  "kesehatan": andorra_kesehatan,
  "hukum": andorra_hukum,
  "sektor_olahraga": andorra_olahraga,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 11,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 6
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 9,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 16,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 1
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
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 43540,
    "harga_bbm": 14980,
    "harga_listrik": 800,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 387120
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": andorra_geopolitik,
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 4,
    "pendidikan": 20,
    "keamanan": 33,
    "keuangan": 6,
    "lingkungan": 60
  }
};
