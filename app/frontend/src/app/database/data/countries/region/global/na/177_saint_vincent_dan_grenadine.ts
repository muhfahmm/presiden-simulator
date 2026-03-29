import { CountryData } from "@/app/database/data/types";
import { saint_vincent_dan_grenadine_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_armada } from "../../modules/2_militer/2_armada_militer/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_listrik } from "../../modules/1_ekonomi/2_kelistrikan/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_profile } from "../../modules/0_profiles/na/177_saint_vincent_dan_grenadine";
import { saint_vincent_dan_grenadine_strategis } from "../../modules/2_militer/3_militer_strategis/na/177_saint_vincent_dan_grenadine";

export const saint_vincent_dan_grenadine: CountryData = {
  ...saint_vincent_dan_grenadine_profile,
  "sektor_listrik": saint_vincent_dan_grenadine_listrik,
  "infrastruktur": saint_vincent_dan_grenadine_infrastruktur,
  "sektor_ekstraksi": saint_vincent_dan_grenadine_ekstraksi,
  "sektor_manufaktur": saint_vincent_dan_grenadine_manufaktur,
  "sektor_peternakan": saint_vincent_dan_grenadine_peternakan,
  "sektor_agrikultur": saint_vincent_dan_grenadine_agrikultur,
  "sektor_perikanan": saint_vincent_dan_grenadine_perikanan,
  "sektor_olahan_pangan": saint_vincent_dan_grenadine_olahan_pangan,
  "sektor_farmasi": saint_vincent_dan_grenadine_farmasi,
  "sektor_pertahanan": saint_vincent_dan_grenadine_pertahanan,
  "armada_militer": saint_vincent_dan_grenadine_armada,
  "militer_strategis": saint_vincent_dan_grenadine_strategis,
  "armada_kepolisian": saint_vincent_dan_grenadine_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 21,
      "dasar": 9,
      "menengah": 19,
      "lanjutan": 16,
      "universitas": 10,
      "lembaga_pendidikan": 40,
      "laboratorium": 1,
      "observatorium": 10,
      "pusat_penelitian": 2,
      "pusat_pengembangan": 15,
      "literasi": 66
    },
    "kesehatan": {
      "rumah_sakit_besar": 23,
      "rumah_sakit_kecil": 2,
      "pusat_diagnostik": 8,
      "harapan_hidup": 20,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 32,
      "pengadilan": 18,
      "kejaksaan": 5,
      "pos_polisi": 5,
      "armada_mobil_polisi": 5603,
      "akademi_polisi": 31,
      "indeks_korupsi": 73,
      "indeks_keamanan": 87
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 10,
      "sirkuit_balap": 25,
      "stadion": 25,
      "stadion_internasional": 10
  },
  "un_vote": 110,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 10,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 36,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 37,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 2,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 16,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 4,
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
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
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
    "harga_beras": 32000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 78950,
    "harga_pendidikan": 967800
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
      "kekuatan_lunak": 23,
      "kekuatan_keras": 39,
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
    "kesehatan": 22,
    "pendidikan": 23,
    "keamanan": 31,
    "keuangan": 3,
    "lingkungan": 60
  }
};
