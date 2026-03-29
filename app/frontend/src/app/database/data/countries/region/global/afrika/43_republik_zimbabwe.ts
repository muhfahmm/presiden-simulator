import { CountryData } from "@/app/database/data/types";
import { republik_zimbabwe_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_armada } from "../../modules/2_militer/2_armada_militer/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_profile } from "../../modules/0_profiles/afrika/43_republik_zimbabwe";
import { republik_zimbabwe_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/43_republik_zimbabwe";

export const republik_zimbabwe: CountryData = {
  ...republik_zimbabwe_profile,
  "sektor_listrik": republik_zimbabwe_listrik,
  "infrastruktur": republik_zimbabwe_infrastruktur,
  "sektor_ekstraksi": republik_zimbabwe_ekstraksi,
  "sektor_manufaktur": republik_zimbabwe_manufaktur,
  "sektor_peternakan": republik_zimbabwe_peternakan,
  "sektor_agrikultur": republik_zimbabwe_agrikultur,
  "sektor_perikanan": republik_zimbabwe_perikanan,
  "sektor_olahan_pangan": republik_zimbabwe_olahan_pangan,
  "sektor_farmasi": republik_zimbabwe_farmasi,
  "sektor_pertahanan": republik_zimbabwe_pertahanan,
  "armada_militer": republik_zimbabwe_armada,
  "militer_strategis": republik_zimbabwe_strategis,
  "armada_kepolisian": republik_zimbabwe_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 38,
      "dasar": 32,
      "menengah": 5,
      "lanjutan": 3,
      "universitas": 19,
      "lembaga_pendidikan": 15,
      "laboratorium": 25,
      "observatorium": 14,
      "pusat_penelitian": 39,
      "pusat_pengembangan": 16,
      "literasi": 62
  },
    "kesehatan": {
      "rumah_sakit_besar": 6,
      "rumah_sakit_kecil": 33,
      "pusat_diagnostik": 35,
      "harapan_hidup": 38,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 9,
      "pengadilan": 8,
      "kejaksaan": 23,
      "pos_polisi": 6,
      "armada_mobil_polisi": 1107,
      "akademi_polisi": 8,
      "indeks_korupsi": 76,
      "indeks_keamanan": 86
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 15,
      "sirkuit_balap": 12,
      "stadion": 9,
      "stadion_internasional": 28
  },
  "un_vote": 36,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 34,
      "kepuasan": 67,
      "pendapatan": 15
    },
    "korporasi": {
      "tarif": 25,
      "kepuasan": 52,
      "pendapatan": 13
    },
    "penghasilan": {
      "tarif": 18,
      "kepuasan": 61,
      "pendapatan": 7
    },
    "bea_cukai": {
      "tarif": 18,
      "kepuasan": 86,
      "pendapatan": 7
    },
    "lingkungan": {
      "tarif": 3,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
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
      "kekuatan_lunak": 2,
      "kekuatan_keras": 24,
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
    "kesehatan": 31,
    "pendidikan": 17,
    "keamanan": 27,
    "keuangan": 5,
    "lingkungan": 60
  }
};
