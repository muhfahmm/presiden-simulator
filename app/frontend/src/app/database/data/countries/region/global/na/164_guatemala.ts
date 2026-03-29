import { CountryData } from "@/app/database/data/types";
import { guatemala_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/na/164_guatemala";
import { guatemala_armada } from "../../modules/2_militer/2_armada_militer/na/164_guatemala";
import { guatemala_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/na/164_guatemala";
import { guatemala_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/na/164_guatemala";
import { guatemala_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/na/164_guatemala";
import { guatemala_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/na/164_guatemala";
import { guatemala_listrik } from "../../modules/1_ekonomi/2_kelistrikan/na/164_guatemala";
import { guatemala_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/na/164_guatemala";
import { guatemala_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/na/164_guatemala";
import { guatemala_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/na/164_guatemala";
import { guatemala_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/na/164_guatemala";
import { guatemala_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/na/164_guatemala";
import { guatemala_profile } from "../../modules/0_profiles/na/164_guatemala";
import { guatemala_strategis } from "../../modules/2_militer/3_militer_strategis/na/164_guatemala";

export const guatemala: CountryData = {
  ...guatemala_profile,
  "sektor_listrik": guatemala_listrik,
  "infrastruktur": guatemala_infrastruktur,
  "sektor_ekstraksi": guatemala_ekstraksi,
  "sektor_manufaktur": guatemala_manufaktur,
  "sektor_peternakan": guatemala_peternakan,
  "sektor_agrikultur": guatemala_agrikultur,
  "sektor_perikanan": guatemala_perikanan,
  "sektor_olahan_pangan": guatemala_olahan_pangan,
  "sektor_farmasi": guatemala_farmasi,
  "sektor_pertahanan": guatemala_pertahanan,
  "armada_militer": guatemala_armada,
  "militer_strategis": guatemala_strategis,
  "armada_kepolisian": guatemala_kepolisian,
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
      "menengah": 28,
      "lanjutan": 37,
      "universitas": 14,
      "lembaga_pendidikan": 34,
      "laboratorium": 21,
      "observatorium": 19,
      "pusat_penelitian": 11,
      "pusat_pengembangan": 22,
      "literasi": 91
    },
    "kesehatan": {
      "rumah_sakit_besar": 28,
      "rumah_sakit_kecil": 36,
      "pusat_diagnostik": 7,
      "harapan_hidup": 6,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 40,
      "pengadilan": 10,
      "kejaksaan": 40,
      "pos_polisi": 25,
      "armada_mobil_polisi": 7558,
      "akademi_polisi": 23,
      "indeks_korupsi": 77,
      "indeks_keamanan": 51
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 22,
      "sirkuit_balap": 13,
      "stadion": 21,
      "stadion_internasional": 27
  },
  "un_vote": 142,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 21,
      "kepuasan": 67,
      "pendapatan": 31
    },
    "korporasi": {
      "tarif": 27,
      "kepuasan": 52,
      "pendapatan": 61
    },
    "penghasilan": {
      "tarif": 3,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 18,
      "kepuasan": 86,
      "pendapatan": 26
    },
    "lingkungan": {
      "tarif": 22,
      "kepuasan": 88,
      "pendapatan": 39
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 5 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 14 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 61
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
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 800,
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
      "kekuatan_lunak": 31,
      "kekuatan_keras": 5,
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
    "kesehatan": 15,
    "pendidikan": 20,
    "keamanan": 37,
    "keuangan": 1,
    "lingkungan": 60
  }
};
