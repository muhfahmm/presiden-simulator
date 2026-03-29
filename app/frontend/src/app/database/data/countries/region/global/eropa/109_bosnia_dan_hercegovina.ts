import { CountryData } from "@/app/database/data/types";
import { bosnia_dan_hercegovina_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_armada } from "../../modules/2_militer/2_armada_militer/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_profile } from "../../modules/0_profiles/eropa/109_bosnia_dan_hercegovina";
import { bosnia_dan_hercegovina_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/109_bosnia_dan_hercegovina";

export const bosnia_dan_hercegovina: CountryData = {
  ...bosnia_dan_hercegovina_profile,
  "sektor_listrik": bosnia_dan_hercegovina_listrik,
  "infrastruktur": bosnia_dan_hercegovina_infrastruktur,
  "sektor_ekstraksi": bosnia_dan_hercegovina_ekstraksi,
  "sektor_manufaktur": bosnia_dan_hercegovina_manufaktur,
  "sektor_peternakan": bosnia_dan_hercegovina_peternakan,
  "sektor_agrikultur": bosnia_dan_hercegovina_agrikultur,
  "sektor_perikanan": bosnia_dan_hercegovina_perikanan,
  "sektor_olahan_pangan": bosnia_dan_hercegovina_olahan_pangan,
  "sektor_farmasi": bosnia_dan_hercegovina_farmasi,
  "sektor_pertahanan": bosnia_dan_hercegovina_pertahanan,
  "armada_militer": bosnia_dan_hercegovina_armada,
  "militer_strategis": bosnia_dan_hercegovina_strategis,
  "armada_kepolisian": bosnia_dan_hercegovina_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 40,
      "dasar": 35,
      "menengah": 34,
      "lanjutan": 5,
      "universitas": 25,
      "lembaga_pendidikan": 37,
      "laboratorium": 5,
      "observatorium": 6,
      "pusat_penelitian": 1,
      "pusat_pengembangan": 40,
      "literasi": 81
    },
    "kesehatan": {
      "rumah_sakit_besar": 7,
      "rumah_sakit_kecil": 33,
      "pusat_diagnostik": 18,
      "harapan_hidup": 34,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 32,
      "pengadilan": 4,
      "kejaksaan": 28,
      "pos_polisi": 19,
      "armada_mobil_polisi": 6801,
      "akademi_polisi": 2,
      "indeks_korupsi": 94,
      "indeks_keamanan": 70
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 3,
      "sirkuit_balap": 16,
      "stadion": 27,
      "stadion_internasional": 34
  },
  "un_vote": 144,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 28,
      "kepuasan": 67,
      "pendapatan": 18
    },
    "korporasi": {
      "tarif": 8,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 27,
      "kepuasan": 61,
      "pendapatan": 17
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 12
    },
    "lingkungan": {
      "tarif": 25,
      "kepuasan": 88,
      "pendapatan": 7
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 4 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 6
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
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 28800,
    "harga_telur": 62200,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 5200,
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
      "kekuatan_lunak": 39,
      "kekuatan_keras": 15,
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
    "pendidikan": 19,
    "keamanan": 36,
    "keuangan": 24,
    "lingkungan": 60
  }
};
