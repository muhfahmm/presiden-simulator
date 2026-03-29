import { CountryData } from "@/app/database/data/types";
import { brunei_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/61_brunei";
import { brunei_armada } from "../../modules/2_militer/2_armada_militer/asia/61_brunei";
import { brunei_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/61_brunei";
import { brunei_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/61_brunei";
import { brunei_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/61_brunei";
import { brunei_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/61_brunei";
import { brunei_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/61_brunei";
import { brunei_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/61_brunei";
import { brunei_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/61_brunei";
import { brunei_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/61_brunei";
import { brunei_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/61_brunei";
import { brunei_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/61_brunei";
import { brunei_profile } from "../../modules/0_profiles/asia/61_brunei";
import { brunei_strategis } from "../../modules/2_militer/3_militer_strategis/asia/61_brunei";

export const brunei: CountryData = {
  ...brunei_profile,
  "sektor_listrik": brunei_listrik,
  "infrastruktur": brunei_infrastruktur,
  "sektor_ekstraksi": brunei_ekstraksi,
  "sektor_manufaktur": brunei_manufaktur,
  "sektor_peternakan": brunei_peternakan,
  "sektor_agrikultur": brunei_agrikultur,
  "sektor_perikanan": brunei_perikanan,
  "sektor_olahan_pangan": brunei_olahan_pangan,
  "sektor_farmasi": brunei_farmasi,
  "sektor_pertahanan": brunei_pertahanan,
  "armada_militer": brunei_armada,
  "militer_strategis": brunei_strategis,
  "armada_kepolisian": brunei_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 3,
      "dasar": 14,
      "menengah": 14,
      "lanjutan": 2,
      "universitas": 12,
      "lembaga_pendidikan": 2,
      "laboratorium": 5,
      "observatorium": 13,
      "pusat_penelitian": 18,
      "pusat_pengembangan": 13,
      "literasi": 61
    },
    "kesehatan": {
      "rumah_sakit_besar": 32,
      "rumah_sakit_kecil": 1,
      "pusat_diagnostik": 30,
      "harapan_hidup": 9,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 29,
      "pengadilan": 15,
      "kejaksaan": 6,
      "pos_polisi": 3,
      "armada_mobil_polisi": 3864,
      "akademi_polisi": 39,
      "indeks_korupsi": 76,
      "indeks_keamanan": 64
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 23,
      "sirkuit_balap": 33,
      "stadion": 23,
      "stadion_internasional": 9
  },
  "un_vote": 114,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 37,
      "kepuasan": 67,
      "pendapatan": 15
    },
    "korporasi": {
      "tarif": 8,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 4
    },
    "bea_cukai": {
      "tarif": 4,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 5
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 8
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 60,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 145740,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 7700,
    "harga_gula": 14400,
    "harga_telur": 43540,
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
      "kekuatan_lunak": 33,
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
    "kesehatan": 9,
    "pendidikan": 24,
    "keamanan": 13,
    "keuangan": 14,
    "lingkungan": 60
  }
};
