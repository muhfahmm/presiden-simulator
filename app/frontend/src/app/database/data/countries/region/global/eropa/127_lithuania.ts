import { CountryData } from "@/app/database/data/types";
import { lithuania_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/127_lithuania";
import { lithuania_armada } from "../../modules/2_militer/2_armada_militer/eropa/127_lithuania";
import { lithuania_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/127_lithuania";
import { lithuania_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/127_lithuania";
import { lithuania_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/127_lithuania";
import { lithuania_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/127_lithuania";
import { lithuania_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/127_lithuania";
import { lithuania_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/127_lithuania";
import { lithuania_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/127_lithuania";
import { lithuania_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/127_lithuania";
import { lithuania_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/127_lithuania";
import { lithuania_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/127_lithuania";
import { lithuania_profile } from "../../modules/0_profiles/eropa/127_lithuania";
import { lithuania_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/127_lithuania";

export const lithuania: CountryData = {
  ...lithuania_profile,
  "sektor_listrik": lithuania_listrik,
  "infrastruktur": lithuania_infrastruktur,
  "sektor_ekstraksi": lithuania_ekstraksi,
  "sektor_manufaktur": lithuania_manufaktur,
  "sektor_peternakan": lithuania_peternakan,
  "sektor_agrikultur": lithuania_agrikultur,
  "sektor_perikanan": lithuania_perikanan,
  "sektor_olahan_pangan": lithuania_olahan_pangan,
  "sektor_farmasi": lithuania_farmasi,
  "sektor_pertahanan": lithuania_pertahanan,
  "armada_militer": lithuania_armada,
  "militer_strategis": lithuania_strategis,
  "armada_kepolisian": lithuania_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 4,
      "dasar": 11,
      "menengah": 31,
      "lanjutan": 7,
      "universitas": 21,
      "lembaga_pendidikan": 6,
      "laboratorium": 2,
      "observatorium": 20,
      "pusat_penelitian": 22,
      "pusat_pengembangan": 10,
      "literasi": 93
    },
    "kesehatan": {
      "rumah_sakit_besar": 14,
      "rumah_sakit_kecil": 6,
      "pusat_diagnostik": 40,
      "harapan_hidup": 23,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 31,
      "pengadilan": 28,
      "kejaksaan": 26,
      "pos_polisi": 23,
      "armada_mobil_polisi": 8178,
      "akademi_polisi": 4,
      "indeks_korupsi": 53,
      "indeks_keamanan": 73
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 36,
      "sirkuit_balap": 40,
      "stadion": 14,
      "stadion_internasional": 15
  },
  "un_vote": 174,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 10
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 74
    },
    "penghasilan": {
      "tarif": 4,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 14,
      "kepuasan": 86,
      "pendapatan": 12
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 16
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 12 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 11
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 10400,
    "harga_obat": 157900,
    "harga_pendidikan": 677460
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
      "kekuatan_keras": 33,
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
    "kesehatan": 18,
    "pendidikan": 9,
    "keamanan": 3,
    "keuangan": 29,
    "lingkungan": 60
  }
};
