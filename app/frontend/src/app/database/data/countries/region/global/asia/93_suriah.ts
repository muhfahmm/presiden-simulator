import { CountryData } from "@/app/database/data/types";
import { suriah_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/93_suriah";
import { suriah_armada } from "../../modules/2_militer/2_armada_militer/asia/93_suriah";
import { suriah_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/93_suriah";
import { suriah_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/93_suriah";
import { suriah_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/93_suriah";
import { suriah_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/93_suriah";
import { suriah_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/93_suriah";
import { suriah_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/93_suriah";
import { suriah_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/93_suriah";
import { suriah_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/93_suriah";
import { suriah_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/93_suriah";
import { suriah_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/93_suriah";
import { suriah_profile } from "../../modules/0_profiles/asia/93_suriah";
import { suriah_strategis } from "../../modules/2_militer/3_militer_strategis/asia/93_suriah";

export const suriah: CountryData = {
  ...suriah_profile,
  "sektor_listrik": suriah_listrik,
  "infrastruktur": suriah_infrastruktur,
  "sektor_ekstraksi": suriah_ekstraksi,
  "sektor_manufaktur": suriah_manufaktur,
  "sektor_peternakan": suriah_peternakan,
  "sektor_agrikultur": suriah_agrikultur,
  "sektor_perikanan": suriah_perikanan,
  "sektor_olahan_pangan": suriah_olahan_pangan,
  "sektor_farmasi": suriah_farmasi,
  "sektor_pertahanan": suriah_pertahanan,
  "armada_militer": suriah_armada,
  "militer_strategis": suriah_strategis,
  "armada_kepolisian": suriah_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 8,
      "dasar": 13,
      "menengah": 35,
      "lanjutan": 2,
      "universitas": 12,
      "lembaga_pendidikan": 31,
      "laboratorium": 17,
      "observatorium": 35,
      "pusat_penelitian": 27,
      "pusat_pengembangan": 6,
      "literasi": 60
    },
    "kesehatan": {
      "rumah_sakit_besar": 3,
      "rumah_sakit_kecil": 32,
      "pusat_diagnostik": 29,
      "harapan_hidup": 19,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 3,
      "pengadilan": 36,
      "kejaksaan": 28,
      "pos_polisi": 40,
      "armada_mobil_polisi": 1427,
      "akademi_polisi": 23,
      "indeks_korupsi": 54,
      "indeks_keamanan": 92
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 13,
      "sirkuit_balap": 40,
      "stadion": 34,
      "stadion_internasional": 1
  },
  "un_vote": 65,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 22,
      "kepuasan": 67,
      "pendapatan": 6
    },
    "korporasi": {
      "tarif": 5,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 5,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 10,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 5
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 70,
    "gaji_medis": 60,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 7700,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 221060,
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
      "kekuatan_lunak": 13,
      "kekuatan_keras": 21,
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
    "kesehatan": 38,
    "pendidikan": 13,
    "keamanan": 27,
    "keuangan": 29,
    "lingkungan": 60
  }
};
