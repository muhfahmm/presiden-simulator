import { CountryData } from "@/app/database/data/types";
import { guiana_prancis_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/sa/200_guiana_prancis";
import { guiana_prancis_armada } from "../../modules/2_militer/2_armada_militer/sa/200_guiana_prancis";
import { guiana_prancis_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/sa/200_guiana_prancis";
import { guiana_prancis_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/sa/200_guiana_prancis";
import { guiana_prancis_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/sa/200_guiana_prancis";
import { guiana_prancis_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/sa/200_guiana_prancis";
import { guiana_prancis_listrik } from "../../modules/1_ekonomi/2_kelistrikan/sa/200_guiana_prancis";
import { guiana_prancis_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/sa/200_guiana_prancis";
import { guiana_prancis_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/sa/200_guiana_prancis";
import { guiana_prancis_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/sa/200_guiana_prancis";
import { guiana_prancis_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/sa/200_guiana_prancis";
import { guiana_prancis_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/sa/200_guiana_prancis";
import { guiana_prancis_profile } from "../../modules/0_profiles/sa/200_guiana_prancis";
import { guiana_prancis_strategis } from "../../modules/2_militer/3_militer_strategis/sa/200_guiana_prancis";

export const guiana_prancis: CountryData = {
  ...guiana_prancis_profile,
  "sektor_listrik": guiana_prancis_listrik,
  "infrastruktur": guiana_prancis_infrastruktur,
  "sektor_ekstraksi": guiana_prancis_ekstraksi,
  "sektor_manufaktur": guiana_prancis_manufaktur,
  "sektor_peternakan": guiana_prancis_peternakan,
  "sektor_agrikultur": guiana_prancis_agrikultur,
  "sektor_perikanan": guiana_prancis_perikanan,
  "sektor_olahan_pangan": guiana_prancis_olahan_pangan,
  "sektor_farmasi": guiana_prancis_farmasi,
  "sektor_pertahanan": guiana_prancis_pertahanan,
  "armada_militer": guiana_prancis_armada,
  "militer_strategis": guiana_prancis_strategis,
  "armada_kepolisian": guiana_prancis_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 35,
      "dasar": 18,
      "menengah": 20,
      "lanjutan": 31,
      "universitas": 31,
      "lembaga_pendidikan": 29,
      "laboratorium": 10,
      "observatorium": 31,
      "pusat_penelitian": 22,
      "pusat_pengembangan": 23,
      "literasi": 86
    },
    "kesehatan": {
      "rumah_sakit_besar": 21,
      "rumah_sakit_kecil": 18,
      "pusat_diagnostik": 21,
      "harapan_hidup": 10,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 7,
      "pengadilan": 4,
      "kejaksaan": 22,
      "pos_polisi": 27,
      "armada_mobil_polisi": 7285,
      "akademi_polisi": 11,
      "indeks_korupsi": 94,
      "indeks_keamanan": 69
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 28,
      "sirkuit_balap": 30,
      "stadion": 31,
      "stadion_internasional": 28
  },
  "un_vote": 39,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 20,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 5
    },
    "lingkungan": {
      "tarif": 1,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 14,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 28800,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 800,
    "harga_air": 4160,
    "harga_obat": 315800,
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
      "kekuatan_lunak": 3,
      "kekuatan_keras": 35,
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
    "kesehatan": 25,
    "pendidikan": 14,
    "keamanan": 13,
    "keuangan": 27,
    "lingkungan": 60
  }
};
