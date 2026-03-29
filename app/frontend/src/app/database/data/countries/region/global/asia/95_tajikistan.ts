import { CountryData } from "@/app/database/data/types";
import { tajikistan_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/95_tajikistan";
import { tajikistan_armada } from "../../modules/2_militer/2_armada_militer/asia/95_tajikistan";
import { tajikistan_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/95_tajikistan";
import { tajikistan_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/95_tajikistan";
import { tajikistan_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/95_tajikistan";
import { tajikistan_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/95_tajikistan";
import { tajikistan_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/95_tajikistan";
import { tajikistan_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/95_tajikistan";
import { tajikistan_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/95_tajikistan";
import { tajikistan_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/95_tajikistan";
import { tajikistan_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/95_tajikistan";
import { tajikistan_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/95_tajikistan";
import { tajikistan_profile } from "../../modules/0_profiles/asia/95_tajikistan";
import { tajikistan_strategis } from "../../modules/2_militer/3_militer_strategis/asia/95_tajikistan";

export const tajikistan: CountryData = {
  ...tajikistan_profile,
  "sektor_listrik": tajikistan_listrik,
  "infrastruktur": tajikistan_infrastruktur,
  "sektor_ekstraksi": tajikistan_ekstraksi,
  "sektor_manufaktur": tajikistan_manufaktur,
  "sektor_peternakan": tajikistan_peternakan,
  "sektor_agrikultur": tajikistan_agrikultur,
  "sektor_perikanan": tajikistan_perikanan,
  "sektor_olahan_pangan": tajikistan_olahan_pangan,
  "sektor_farmasi": tajikistan_farmasi,
  "sektor_pertahanan": tajikistan_pertahanan,
  "armada_militer": tajikistan_armada,
  "militer_strategis": tajikistan_strategis,
  "armada_kepolisian": tajikistan_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 1,
      "dasar": 25,
      "menengah": 23,
      "lanjutan": 22,
      "universitas": 28,
      "lembaga_pendidikan": 40,
      "laboratorium": 38,
      "observatorium": 1,
      "pusat_penelitian": 30,
      "pusat_pengembangan": 12,
      "literasi": 79
    },
    "kesehatan": {
      "rumah_sakit_besar": 40,
      "rumah_sakit_kecil": 24,
      "pusat_diagnostik": 27,
      "harapan_hidup": 15,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 35,
      "pengadilan": 23,
      "kejaksaan": 21,
      "pos_polisi": 26,
      "armada_mobil_polisi": 3913,
      "akademi_polisi": 29,
      "indeks_korupsi": 54,
      "indeks_keamanan": 95
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 2,
      "sirkuit_balap": 14,
      "stadion": 36,
      "stadion_internasional": 6
  },
  "un_vote": 177,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 7,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 11
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 33,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 5,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 70,
    "gaji_medis": 80,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 157900,
    "harga_pendidikan": 387120
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
      "kekuatan_lunak": 33,
      "kekuatan_keras": 36,
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
    "kesehatan": 35,
    "pendidikan": 8,
    "keamanan": 12,
    "keuangan": 29,
    "lingkungan": 60
  }
};
