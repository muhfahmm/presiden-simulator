import { CountryData } from "@/app/database/data/types";
import { republik_tanzania_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/40_republik_tanzania";
import { republik_tanzania_armada } from "../../modules/2_militer/2_armada_militer/afrika/40_republik_tanzania";
import { republik_tanzania_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/40_republik_tanzania";
import { republik_tanzania_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/40_republik_tanzania";
import { republik_tanzania_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/40_republik_tanzania";
import { republik_tanzania_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/40_republik_tanzania";
import { republik_tanzania_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/40_republik_tanzania";
import { republik_tanzania_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/40_republik_tanzania";
import { republik_tanzania_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/40_republik_tanzania";
import { republik_tanzania_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/40_republik_tanzania";
import { republik_tanzania_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/40_republik_tanzania";
import { republik_tanzania_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/40_republik_tanzania";
import { republik_tanzania_profile } from "../../modules/0_profiles/afrika/40_republik_tanzania";
import { republik_tanzania_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/40_republik_tanzania";

export const republik_tanzania: CountryData = {
  ...republik_tanzania_profile,
  "sektor_listrik": republik_tanzania_listrik,
  "infrastruktur": republik_tanzania_infrastruktur,
  "sektor_ekstraksi": republik_tanzania_ekstraksi,
  "sektor_manufaktur": republik_tanzania_manufaktur,
  "sektor_peternakan": republik_tanzania_peternakan,
  "sektor_agrikultur": republik_tanzania_agrikultur,
  "sektor_perikanan": republik_tanzania_perikanan,
  "sektor_olahan_pangan": republik_tanzania_olahan_pangan,
  "sektor_farmasi": republik_tanzania_farmasi,
  "sektor_pertahanan": republik_tanzania_pertahanan,
  "armada_militer": republik_tanzania_armada,
  "militer_strategis": republik_tanzania_strategis,
  "armada_kepolisian": republik_tanzania_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 9,
      "dasar": 2,
      "menengah": 8,
      "lanjutan": 17,
      "universitas": 1,
      "lembaga_pendidikan": 40,
      "laboratorium": 6,
      "observatorium": 21,
      "pusat_penelitian": 11,
      "pusat_pengembangan": 26,
      "literasi": 83
  },
    "kesehatan": {
      "rumah_sakit_besar": 5,
      "rumah_sakit_kecil": 7,
      "pusat_diagnostik": 4,
      "harapan_hidup": 7,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 32,
      "pengadilan": 13,
      "kejaksaan": 8,
      "pos_polisi": 27,
      "armada_mobil_polisi": 1318,
      "akademi_polisi": 7,
      "indeks_korupsi": 70,
      "indeks_keamanan": 64
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 1,
      "sirkuit_balap": 3,
      "stadion": 34,
      "stadion_internasional": 40
  },
  "un_vote": 178,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 31,
      "kepuasan": 67,
      "pendapatan": 58
    },
    "korporasi": {
      "tarif": 38,
      "kepuasan": 52,
      "pendapatan": 82
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 51
    },
    "bea_cukai": {
      "tarif": 27,
      "kepuasan": 86,
      "pendapatan": 27
    },
    "lingkungan": {
      "tarif": 33,
      "kepuasan": 88,
      "pendapatan": 42
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 11 },
    "lainnya": {
      "tarif": 24,
      "kepuasan": 93,
      "pendapatan": 23
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 30800,
    "harga_gula": 14400,
    "harga_telur": 15550,
    "harga_bbm": 5350,
    "harga_listrik": 800,
    "harga_air": 4160,
    "harga_obat": 221060,
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
      "kekuatan_lunak": 40,
      "kekuatan_keras": 11,
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
    "kesehatan": 17,
    "pendidikan": 34,
    "keamanan": 40,
    "keuangan": 40,
    "lingkungan": 60
  }
};
