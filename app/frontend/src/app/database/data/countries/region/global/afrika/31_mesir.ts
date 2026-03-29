import { CountryData } from "@/app/database/data/types";
import { mesir_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/31_mesir";
import { mesir_armada } from "../../modules/2_militer/2_armada_militer/afrika/31_mesir";
import { mesir_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/31_mesir";
import { mesir_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/31_mesir";
import { mesir_hukum } from "../../modules/3_sosial/3_hukum/afrika/31_mesir";
import { mesir_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/31_mesir";
import { mesir_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/31_mesir";
import { mesir_kesehatan } from "../../modules/3_sosial/2_kesehatan/afrika/31_mesir";
import { mesir_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/31_mesir";
import { mesir_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/31_mesir";
import { mesir_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/31_mesir";
import { mesir_olahraga } from "../../modules/3_sosial/4_olahraga/afrika/31_mesir";
import { mesir_pabrik } from "../../modules/2_militer/5_pabrik_militer/afrika/31_mesir";
import { mesir_pendidikan } from "../../modules/3_sosial/1_pendidikan/afrika/31_mesir";
import { mesir_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/31_mesir";
import { mesir_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/31_mesir";
import { mesir_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/31_mesir";
import { mesir_profile } from "../../modules/0_profiles/afrika/31_mesir";
import { mesir_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/31_mesir";

export const mesir: CountryData = {
  ...mesir_profile,
  "sektor_listrik": mesir_listrik,
  "infrastruktur": mesir_infrastruktur,
  "sektor_ekstraksi": mesir_ekstraksi,
  "sektor_manufaktur": mesir_manufaktur,
  "sektor_peternakan": mesir_peternakan,
  "sektor_agrikultur": mesir_agrikultur,
  "sektor_perikanan": mesir_perikanan,
  "sektor_olahan_pangan": mesir_olahan_pangan,
  "sektor_farmasi": mesir_farmasi,
  "sektor_pertahanan": mesir_pertahanan,
  "armada_militer": mesir_armada,
  "militer_strategis": mesir_strategis,
  "armada_kepolisian": mesir_kepolisian,
  "pabrik_militer": mesir_pabrik,
    "pendidikan": mesir_pendidikan,
  "kesehatan": mesir_kesehatan,
  "hukum": mesir_hukum,
  "sektor_olahraga": mesir_olahraga,
  "un_vote": 159,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 37,
      "kepuasan": 67,
      "pendapatan": 352
    },
    "korporasi": {
      "tarif": 18,
      "kepuasan": 52,
      "pendapatan": 169
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 62
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 209
    },
    "lingkungan": {
      "tarif": 20,
      "kepuasan": 88,
      "pendapatan": 160
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 20 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 58 },
    "lainnya": {
      "tarif": 24,
      "kepuasan": 93,
      "pendapatan": 137
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 50,
    "gaji_medis": 50,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 62200,
    "harga_bbm": 14980,
    "harga_listrik": 2240,
    "harga_air": 7280,
    "harga_obat": 126320,
    "harga_pendidikan": 677460
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
      "kekuatan_lunak": 6,
      "kekuatan_keras": 34,
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
    "kesehatan": 30,
    "pendidikan": 16,
    "keamanan": 4,
    "keuangan": 23,
    "lingkungan": 60
  }
};
