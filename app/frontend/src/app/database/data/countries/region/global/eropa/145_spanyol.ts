import { CountryData } from "@/app/database/data/types";
import { spanyol_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/145_spanyol";
import { spanyol_armada } from "../../modules/2_militer/2_armada_militer/eropa/145_spanyol";
import { spanyol_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/145_spanyol";
import { spanyol_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/145_spanyol";
import { spanyol_hukum } from "../../modules/3_sosial/3_hukum/eropa/145_spanyol";
import { spanyol_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/145_spanyol";
import { spanyol_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/145_spanyol";
import { spanyol_kesehatan } from "../../modules/3_sosial/2_kesehatan/eropa/145_spanyol";
import { spanyol_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/145_spanyol";
import { spanyol_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/145_spanyol";
import { spanyol_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/145_spanyol";
import { spanyol_olahraga } from "../../modules/3_sosial/4_olahraga/eropa/145_spanyol";
import { spanyol_pabrik } from "../../modules/2_militer/5_pabrik_militer/eropa/145_spanyol";
import { spanyol_pendidikan } from "../../modules/3_sosial/1_pendidikan/eropa/145_spanyol";
import { spanyol_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/145_spanyol";
import { spanyol_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/145_spanyol";
import { spanyol_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/145_spanyol";
import { spanyol_profile } from "../../modules/0_profiles/eropa/145_spanyol";
import { spanyol_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/145_spanyol";

export const spanyol: CountryData = {
  ...spanyol_profile,
  "sektor_listrik": spanyol_listrik,
  "infrastruktur": spanyol_infrastruktur,
  "sektor_ekstraksi": spanyol_ekstraksi,
  "sektor_manufaktur": spanyol_manufaktur,
  "sektor_peternakan": spanyol_peternakan,
  "sektor_agrikultur": spanyol_agrikultur,
  "sektor_perikanan": spanyol_perikanan,
  "sektor_olahan_pangan": spanyol_olahan_pangan,
  "sektor_farmasi": spanyol_farmasi,
  "sektor_pertahanan": spanyol_pertahanan,
  "armada_militer": spanyol_armada,
  "militer_strategis": spanyol_strategis,
  "armada_kepolisian": spanyol_kepolisian,
  "pabrik_militer": spanyol_pabrik,
    "pendidikan": spanyol_pendidikan,
  "kesehatan": spanyol_kesehatan,
  "hukum": spanyol_hukum,
  "sektor_olahraga": spanyol_olahraga,
  "un_vote": 135,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 30,
      "kepuasan": 67,
      "pendapatan": 1365
    },
    "korporasi": {
      "tarif": 11,
      "kepuasan": 52,
      "pendapatan": 370
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 1029
    },
    "bea_cukai": {
      "tarif": 26,
      "kepuasan": 86,
      "pendapatan": 950
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 445
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 77 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 231 },
    "lainnya": {
      "tarif": 39,
      "kepuasan": 93,
      "pendapatan": 742
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
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
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
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 10400,
    "harga_obat": 157900,
    "harga_pendidikan": 483900
  },
    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================
  "geopolitik": {
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 8,
      "kekuatan_keras": 2,
      "prestise_diplomatik": 57
    },
    "organisasi_internasional": [
      {
        "name": "PBB (UN)",
        "role": "Anggota"
      },
      {
        "name": "WHO",
        "role": "Anggota"
      },
      {
        "name": "WTO",
        "role": "Anggota"
      }
    ]
  },
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================
  "kementerian": {
    "kesehatan": 19,
    "pendidikan": 24,
    "keamanan": 7,
    "keuangan": 27,
    "lingkungan": 60
  }
};
