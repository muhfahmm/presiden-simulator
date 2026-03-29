import { CountryData } from "@/app/database/data/types";
import { malaysia_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/81_malaysia";
import { malaysia_armada } from "../../modules/2_militer/2_armada_militer/asia/81_malaysia";
import { malaysia_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/81_malaysia";
import { malaysia_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/81_malaysia";
import { malaysia_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/81_malaysia";
import { malaysia_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/81_malaysia";
import { malaysia_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/81_malaysia";
import { malaysia_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/81_malaysia";
import { malaysia_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/81_malaysia";
import { malaysia_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/81_malaysia";
import { malaysia_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/81_malaysia";
import { malaysia_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/81_malaysia";
import { malaysia_profile } from "../../modules/0_profiles/asia/81_malaysia";
import { malaysia_strategis } from "../../modules/2_militer/3_militer_strategis/asia/81_malaysia";

export const malaysia: CountryData = {
  ...malaysia_profile,
  "sektor_listrik": malaysia_listrik,
  "infrastruktur": malaysia_infrastruktur,
  "sektor_ekstraksi": malaysia_ekstraksi,
  "sektor_manufaktur": malaysia_manufaktur,
  "sektor_peternakan": malaysia_peternakan,
  "sektor_agrikultur": malaysia_agrikultur,
  "sektor_perikanan": malaysia_perikanan,
  "sektor_olahan_pangan": malaysia_olahan_pangan,
  "sektor_farmasi": malaysia_farmasi,
  "sektor_pertahanan": malaysia_pertahanan,
  "armada_militer": malaysia_armada,
  "militer_strategis": malaysia_strategis,
  "armada_kepolisian": malaysia_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 34,
      "dasar": 29,
      "menengah": 31,
      "lanjutan": 1,
      "universitas": 35,
      "lembaga_pendidikan": 36,
      "laboratorium": 12,
      "observatorium": 11,
      "pusat_penelitian": 8,
      "pusat_pengembangan": 6,
      "literasi": 75
    },
    "kesehatan": {
      "rumah_sakit_besar": 6,
      "rumah_sakit_kecil": 30,
      "pusat_diagnostik": 25,
      "harapan_hidup": 1,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 22,
      "pengadilan": 17,
      "kejaksaan": 21,
      "pos_polisi": 18,
      "armada_mobil_polisi": 2455,
      "akademi_polisi": 16,
      "indeks_korupsi": 52,
      "indeks_keamanan": 87
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 33,
      "sirkuit_balap": 32,
      "stadion": 37,
      "stadion_internasional": 17
  },
  "un_vote": 141,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 21,
      "kepuasan": 67,
      "pendapatan": 170
    },
    "korporasi": {
      "tarif": 26,
      "kepuasan": 52,
      "pendapatan": 139
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 259
    },
    "bea_cukai": {
      "tarif": 8,
      "kepuasan": 86,
      "pendapatan": 82
    },
    "lingkungan": {
      "tarif": 12,
      "kepuasan": 88,
      "pendapatan": 80
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 20 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 59 },
    "lainnya": {
      "tarif": 22,
      "kepuasan": 93,
      "pendapatan": 167
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 14400,
    "harga_telur": 15550,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 10400,
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
      "kekuatan_lunak": 6,
      "kekuatan_keras": 27,
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
    "kesehatan": 2,
    "pendidikan": 39,
    "keamanan": 5,
    "keuangan": 39,
    "lingkungan": 60
  }
};
