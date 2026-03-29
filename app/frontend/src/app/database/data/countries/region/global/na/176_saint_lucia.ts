import { CountryData } from "@/app/database/data/types";
import { saint_lucia_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/na/176_saint_lucia";
import { saint_lucia_armada } from "../../modules/2_militer/2_armada_militer/na/176_saint_lucia";
import { saint_lucia_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/na/176_saint_lucia";
import { saint_lucia_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/na/176_saint_lucia";
import { saint_lucia_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/na/176_saint_lucia";
import { saint_lucia_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/na/176_saint_lucia";
import { saint_lucia_listrik } from "../../modules/1_ekonomi/2_kelistrikan/na/176_saint_lucia";
import { saint_lucia_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/na/176_saint_lucia";
import { saint_lucia_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/na/176_saint_lucia";
import { saint_lucia_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/na/176_saint_lucia";
import { saint_lucia_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/na/176_saint_lucia";
import { saint_lucia_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/na/176_saint_lucia";
import { saint_lucia_profile } from "../../modules/0_profiles/na/176_saint_lucia";
import { saint_lucia_strategis } from "../../modules/2_militer/3_militer_strategis/na/176_saint_lucia";

export const saint_lucia: CountryData = {
  ...saint_lucia_profile,
  "sektor_listrik": saint_lucia_listrik,
  "infrastruktur": saint_lucia_infrastruktur,
  "sektor_ekstraksi": saint_lucia_ekstraksi,
  "sektor_manufaktur": saint_lucia_manufaktur,
  "sektor_peternakan": saint_lucia_peternakan,
  "sektor_agrikultur": saint_lucia_agrikultur,
  "sektor_perikanan": saint_lucia_perikanan,
  "sektor_olahan_pangan": saint_lucia_olahan_pangan,
  "sektor_farmasi": saint_lucia_farmasi,
  "sektor_pertahanan": saint_lucia_pertahanan,
  "armada_militer": saint_lucia_armada,
  "militer_strategis": saint_lucia_strategis,
  "armada_kepolisian": saint_lucia_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 13,
      "dasar": 27,
      "menengah": 26,
      "lanjutan": 36,
      "universitas": 5,
      "lembaga_pendidikan": 3,
      "laboratorium": 28,
      "observatorium": 11,
      "pusat_penelitian": 3,
      "pusat_pengembangan": 27,
      "literasi": 66
    },
    "kesehatan": {
      "rumah_sakit_besar": 15,
      "rumah_sakit_kecil": 13,
      "pusat_diagnostik": 36,
      "harapan_hidup": 17,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 39,
      "pengadilan": 17,
      "kejaksaan": 13,
      "pos_polisi": 38,
      "armada_mobil_polisi": 5540,
      "akademi_polisi": 6,
      "indeks_korupsi": 71,
      "indeks_keamanan": 60
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 19,
      "sirkuit_balap": 39,
      "stadion": 20,
      "stadion_internasional": 3
  },
  "un_vote": 17,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 7
    },
    "bea_cukai": {
      "tarif": 11,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 5,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 16,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 21560,
    "harga_gula": 28800,
    "harga_telur": 15550,
    "harga_bbm": 14980,
    "harga_listrik": 1280,
    "harga_air": 7280,
    "harga_obat": 126320,
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
      "kekuatan_lunak": 2,
      "kekuatan_keras": 19,
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
    "pendidikan": 21,
    "keamanan": 16,
    "keuangan": 28,
    "lingkungan": 60
  }
};
