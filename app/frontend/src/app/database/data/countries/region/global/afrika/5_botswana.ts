import { CountryData } from "@/app/database/data/types";
import { botswana_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/5_botswana";
import { botswana_armada } from "../../modules/2_militer/2_armada_militer/afrika/5_botswana";
import { botswana_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/5_botswana";
import { botswana_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/5_botswana";
import { botswana_hukum } from "../../modules/3_sosial/3_hukum/afrika/5_botswana";
import { botswana_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/5_botswana";
import { botswana_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/5_botswana";
import { botswana_kesehatan } from "../../modules/3_sosial/2_kesehatan/afrika/5_botswana";
import { botswana_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/5_botswana";
import { botswana_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/5_botswana";
import { botswana_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/5_botswana";
import { botswana_olahraga } from "../../modules/3_sosial/4_olahraga/afrika/5_botswana";
import { botswana_pabrik } from "../../modules/2_militer/5_pabrik_militer/afrika/5_botswana";
import { botswana_pendidikan } from "../../modules/3_sosial/1_pendidikan/afrika/5_botswana";
import { botswana_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/5_botswana";
import { botswana_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/5_botswana";
import { botswana_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/5_botswana";
import { botswana_profile } from "../../modules/0_profiles/afrika/5_botswana";
import { botswana_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/5_botswana";

export const botswana: CountryData = {
  ...botswana_profile,
  "sektor_listrik": botswana_listrik,
  "infrastruktur": botswana_infrastruktur,
  "sektor_ekstraksi": botswana_ekstraksi,
  "sektor_manufaktur": botswana_manufaktur,
  "sektor_peternakan": botswana_peternakan,
  "sektor_agrikultur": botswana_agrikultur,
  "sektor_perikanan": botswana_perikanan,
  "sektor_olahan_pangan": botswana_olahan_pangan,
  "sektor_farmasi": botswana_farmasi,
  "sektor_pertahanan": botswana_pertahanan,
  "armada_militer": botswana_armada,
  "militer_strategis": botswana_strategis,
  "armada_kepolisian": botswana_kepolisian,
  "pabrik_militer": botswana_pabrik,
    "pendidikan": botswana_pendidikan,
  "kesehatan": botswana_kesehatan,
  "hukum": botswana_hukum,
  "sektor_olahraga": botswana_olahraga,
  "un_vote": 48,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 23,
      "kepuasan": 86,
      "pendapatan": 9
    },
    "lingkungan": {
      "tarif": 7,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 13,
      "kepuasan": 93,
      "pendapatan": 4
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 50,
    "gaji_medis": 40,
    "gaji_militer": 40
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 24880,
    "harga_bbm": 21400,
    "harga_listrik": 1280,
    "harga_air": 7280,
    "harga_obat": 221060,
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
      "kekuatan_lunak": 13,
      "kekuatan_keras": 15,
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
    "kesehatan": 20,
    "pendidikan": 16,
    "keamanan": 9,
    "keuangan": 18,
    "lingkungan": 60
  }
};
