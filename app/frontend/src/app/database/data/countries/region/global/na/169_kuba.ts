import { CountryData } from "@/app/database/data/types";
import { kuba_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/na/169_kuba";
import { kuba_armada } from "../../modules/2_militer/2_armada_militer/na/169_kuba";
import { kuba_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/na/169_kuba";
import { kuba_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/na/169_kuba";
import { kuba_hukum } from "../../modules/3_sosial/3_hukum/na/169_kuba";
import { kuba_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/na/169_kuba";
import { kuba_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/na/169_kuba";
import { kuba_kesehatan } from "../../modules/3_sosial/2_kesehatan/na/169_kuba";
import { kuba_listrik } from "../../modules/1_ekonomi/2_kelistrikan/na/169_kuba";
import { kuba_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/na/169_kuba";
import { kuba_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/na/169_kuba";
import { kuba_olahraga } from "../../modules/3_sosial/4_olahraga/na/169_kuba";
import { kuba_pabrik } from "../../modules/2_militer/5_pabrik_militer/na/169_kuba";
import { kuba_pendidikan } from "../../modules/3_sosial/1_pendidikan/na/169_kuba";
import { kuba_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/na/169_kuba";
import { kuba_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/na/169_kuba";
import { kuba_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/na/169_kuba";
import { kuba_profile } from "../../modules/0_profiles/na/169_kuba";
import { kuba_strategis } from "../../modules/2_militer/3_militer_strategis/na/169_kuba";

export const kuba: CountryData = {
  ...kuba_profile,
  "sektor_listrik": kuba_listrik,
  "infrastruktur": kuba_infrastruktur,
  "sektor_ekstraksi": kuba_ekstraksi,
  "sektor_manufaktur": kuba_manufaktur,
  "sektor_peternakan": kuba_peternakan,
  "sektor_agrikultur": kuba_agrikultur,
  "sektor_perikanan": kuba_perikanan,
  "sektor_olahan_pangan": kuba_olahan_pangan,
  "sektor_farmasi": kuba_farmasi,
  "sektor_pertahanan": kuba_pertahanan,
  "armada_militer": kuba_armada,
  "militer_strategis": kuba_strategis,
  "armada_kepolisian": kuba_kepolisian,
  "pabrik_militer": kuba_pabrik,
    "pendidikan": kuba_pendidikan,
  "kesehatan": kuba_kesehatan,
  "hukum": kuba_hukum,
  "sektor_olahraga": kuba_olahraga,
  "un_vote": 171,
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
      "tarif": 22,
      "kepuasan": 52,
      "pendapatan": 26
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 68
    },
    "bea_cukai": {
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 110
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 71
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 6 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 16 },
    "lainnya": {
      "tarif": 25,
      "kepuasan": 93,
      "pendapatan": 33
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
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 5350,
    "harga_listrik": 1280,
    "harga_air": 7280,
    "harga_obat": 221060,
    "harga_pendidikan": 241950
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
      "kekuatan_lunak": 39,
      "kekuatan_keras": 9,
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
    "kesehatan": 8,
    "pendidikan": 1,
    "keamanan": 31,
    "keuangan": 22,
    "lingkungan": 60
  }
};
