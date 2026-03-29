import { CountryData } from "@/app/database/data/types";
import { jamaika_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/na/167_jamaika";
import { jamaika_armada } from "../../modules/2_militer/2_armada_militer/na/167_jamaika";
import { jamaika_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/na/167_jamaika";
import { jamaika_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/na/167_jamaika";
import { jamaika_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/na/167_jamaika";
import { jamaika_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/na/167_jamaika";
import { jamaika_listrik } from "../../modules/1_ekonomi/2_kelistrikan/na/167_jamaika";
import { jamaika_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/na/167_jamaika";
import { jamaika_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/na/167_jamaika";
import { jamaika_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/na/167_jamaika";
import { jamaika_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/na/167_jamaika";
import { jamaika_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/na/167_jamaika";
import { jamaika_profile } from "../../modules/0_profiles/na/167_jamaika";
import { jamaika_strategis } from "../../modules/2_militer/3_militer_strategis/na/167_jamaika";

export const jamaika: CountryData = {
  ...jamaika_profile,
  "sektor_listrik": jamaika_listrik,
  "infrastruktur": jamaika_infrastruktur,
  "sektor_ekstraksi": jamaika_ekstraksi,
  "sektor_manufaktur": jamaika_manufaktur,
  "sektor_peternakan": jamaika_peternakan,
  "sektor_agrikultur": jamaika_agrikultur,
  "sektor_perikanan": jamaika_perikanan,
  "sektor_olahan_pangan": jamaika_olahan_pangan,
  "sektor_farmasi": jamaika_farmasi,
  "sektor_pertahanan": jamaika_pertahanan,
  "armada_militer": jamaika_armada,
  "militer_strategis": jamaika_strategis,
  "armada_kepolisian": jamaika_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 39,
      "dasar": 20,
      "menengah": 17,
      "lanjutan": 7,
      "universitas": 2,
      "lembaga_pendidikan": 21,
      "laboratorium": 1,
      "observatorium": 7,
      "pusat_penelitian": 20,
      "pusat_pengembangan": 35,
      "literasi": 58
    },
    "kesehatan": {
      "rumah_sakit_besar": 28,
      "rumah_sakit_kecil": 9,
      "pusat_diagnostik": 2,
      "harapan_hidup": 38,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 11,
      "pengadilan": 23,
      "kejaksaan": 1,
      "pos_polisi": 20,
      "armada_mobil_polisi": 9778,
      "akademi_polisi": 39,
      "indeks_korupsi": 77,
      "indeks_keamanan": 79
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 24,
      "sirkuit_balap": 18,
      "stadion": 39,
      "stadion_internasional": 34
  },
  "un_vote": 57,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 34,
      "kepuasan": 67,
      "pendapatan": 15
    },
    "korporasi": {
      "tarif": 23,
      "kepuasan": 52,
      "pendapatan": 6
    },
    "penghasilan": {
      "tarif": 31,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 36,
      "kepuasan": 86,
      "pendapatan": 10
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 9,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 100,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 7280,
    "harga_obat": 221060,
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
      "kekuatan_lunak": 4,
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
    "kesehatan": 16,
    "pendidikan": 34,
    "keamanan": 35,
    "keuangan": 14,
    "lingkungan": 60
  }
};
