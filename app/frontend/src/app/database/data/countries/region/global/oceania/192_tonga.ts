import { CountryData } from "@/app/database/data/types";
import { tonga_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/oceania/192_tonga";
import { tonga_armada } from "../../modules/2_militer/2_armada_militer/oceania/192_tonga";
import { tonga_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/oceania/192_tonga";
import { tonga_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/oceania/192_tonga";
import { tonga_hukum } from "../../modules/3_sosial/3_hukum/oceania/192_tonga";
import { tonga_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/oceania/192_tonga";
import { tonga_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/oceania/192_tonga";
import { tonga_kesehatan } from "../../modules/3_sosial/2_kesehatan/oceania/192_tonga";
import { tonga_listrik } from "../../modules/1_ekonomi/2_kelistrikan/oceania/192_tonga";
import { tonga_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/oceania/192_tonga";
import { tonga_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/oceania/192_tonga";
import { tonga_olahraga } from "../../modules/3_sosial/4_olahraga/oceania/192_tonga";
import { tonga_pabrik } from "../../modules/2_militer/5_pabrik_militer/oceania/192_tonga";
import { tonga_pendidikan } from "../../modules/3_sosial/1_pendidikan/oceania/192_tonga";
import { tonga_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/oceania/192_tonga";
import { tonga_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/oceania/192_tonga";
import { tonga_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/oceania/192_tonga";
import { tonga_profile } from "../../modules/0_profiles/oceania/192_tonga";
import { tonga_strategis } from "../../modules/2_militer/3_militer_strategis/oceania/192_tonga";

export const tonga: CountryData = {
  ...tonga_profile,
  "sektor_listrik": tonga_listrik,
  "infrastruktur": tonga_infrastruktur,
  "sektor_ekstraksi": tonga_ekstraksi,
  "sektor_manufaktur": tonga_manufaktur,
  "sektor_peternakan": tonga_peternakan,
  "sektor_agrikultur": tonga_agrikultur,
  "sektor_perikanan": tonga_perikanan,
  "sektor_olahan_pangan": tonga_olahan_pangan,
  "sektor_farmasi": tonga_farmasi,
  "sektor_pertahanan": tonga_pertahanan,
  "armada_militer": tonga_armada,
  "militer_strategis": tonga_strategis,
  "armada_kepolisian": tonga_kepolisian,
  "pabrik_militer": tonga_pabrik,
    "pendidikan": tonga_pendidikan,
  "kesehatan": tonga_kesehatan,
  "hukum": tonga_hukum,
  "sektor_olahraga": tonga_olahraga,
  "un_vote": 5,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 36,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 36,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 5,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 80,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 30800,
    "harga_gula": 11520,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 10400,
    "harga_obat": 315800,
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
      "kekuatan_keras": 18,
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
    "pendidikan": 33,
    "keamanan": 6,
    "keuangan": 18,
    "lingkungan": 60
  }
};
