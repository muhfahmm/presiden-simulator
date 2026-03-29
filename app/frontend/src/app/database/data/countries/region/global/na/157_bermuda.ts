import { CountryData } from "@/app/database/data/types";
import { bermuda_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/na/157_bermuda";
import { bermuda_armada } from "../../modules/2_militer/2_armada_militer/na/157_bermuda";
import { bermuda_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/na/157_bermuda";
import { bermuda_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/na/157_bermuda";
import { bermuda_hukum } from "../../modules/3_sosial/3_hukum/na/157_bermuda";
import { bermuda_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/na/157_bermuda";
import { bermuda_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/na/157_bermuda";
import { bermuda_kesehatan } from "../../modules/3_sosial/2_kesehatan/na/157_bermuda";
import { bermuda_listrik } from "../../modules/1_ekonomi/2_kelistrikan/na/157_bermuda";
import { bermuda_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/na/157_bermuda";
import { bermuda_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/na/157_bermuda";
import { bermuda_olahraga } from "../../modules/3_sosial/4_olahraga/na/157_bermuda";
import { bermuda_pabrik } from "../../modules/2_militer/5_pabrik_militer/na/157_bermuda";
import { bermuda_pendidikan } from "../../modules/3_sosial/1_pendidikan/na/157_bermuda";
import { bermuda_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/na/157_bermuda";
import { bermuda_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/na/157_bermuda";
import { bermuda_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/na/157_bermuda";
import { bermuda_profile } from "../../modules/0_profiles/na/157_bermuda";
import { bermuda_strategis } from "../../modules/2_militer/3_militer_strategis/na/157_bermuda";

export const bermuda: CountryData = {
  ...bermuda_profile,
  "sektor_listrik": bermuda_listrik,
  "infrastruktur": bermuda_infrastruktur,
  "sektor_ekstraksi": bermuda_ekstraksi,
  "sektor_manufaktur": bermuda_manufaktur,
  "sektor_peternakan": bermuda_peternakan,
  "sektor_agrikultur": bermuda_agrikultur,
  "sektor_perikanan": bermuda_perikanan,
  "sektor_olahan_pangan": bermuda_olahan_pangan,
  "sektor_farmasi": bermuda_farmasi,
  "sektor_pertahanan": bermuda_pertahanan,
  "armada_militer": bermuda_armada,
  "militer_strategis": bermuda_strategis,
  "armada_kepolisian": bermuda_kepolisian,
  "pabrik_militer": bermuda_pabrik,
    "pendidikan": bermuda_pendidikan,
  "kesehatan": bermuda_kesehatan,
  "hukum": bermuda_hukum,
  "sektor_olahraga": bermuda_olahraga,
  "un_vote": 22,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 26,
      "kepuasan": 67,
      "pendapatan": 7
    },
    "korporasi": {
      "tarif": 21,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 20,
      "kepuasan": 61,
      "pendapatan": 3
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 5
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 2,
      "kepuasan": 93,
      "pendapatan": 0
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
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 3200,
    "harga_air": 5200,
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
      "kekuatan_lunak": 5,
      "kekuatan_keras": 22,
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
    "kesehatan": 33,
    "pendidikan": 35,
    "keamanan": 27,
    "keuangan": 38,
    "lingkungan": 60
  }
};
