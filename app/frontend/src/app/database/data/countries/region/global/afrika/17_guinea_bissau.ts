import { CountryData } from "@/app/database/data/types";
import { guinea_bissau_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/17_guinea_bissau";
import { guinea_bissau_armada } from "../../modules/2_militer/2_armada_militer/afrika/17_guinea_bissau";
import { guinea_bissau_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/17_guinea_bissau";
import { guinea_bissau_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/17_guinea_bissau";
import { guinea_bissau_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/17_guinea_bissau";
import { guinea_bissau_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/17_guinea_bissau";
import { guinea_bissau_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/17_guinea_bissau";
import { guinea_bissau_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/17_guinea_bissau";
import { guinea_bissau_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/17_guinea_bissau";
import { guinea_bissau_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/17_guinea_bissau";
import { guinea_bissau_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/17_guinea_bissau";
import { guinea_bissau_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/17_guinea_bissau";
import { guinea_bissau_profile } from "../../modules/0_profiles/afrika/17_guinea_bissau";
import { guinea_bissau_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/17_guinea_bissau";

export const guinea_bissau: CountryData = {
  ...guinea_bissau_profile,
  "sektor_listrik": guinea_bissau_listrik,
  "infrastruktur": guinea_bissau_infrastruktur,
  "sektor_ekstraksi": guinea_bissau_ekstraksi,
  "sektor_manufaktur": guinea_bissau_manufaktur,
  "sektor_peternakan": guinea_bissau_peternakan,
  "sektor_agrikultur": guinea_bissau_agrikultur,
  "sektor_perikanan": guinea_bissau_perikanan,
  "sektor_olahan_pangan": guinea_bissau_olahan_pangan,
  "sektor_farmasi": guinea_bissau_farmasi,
  "sektor_pertahanan": guinea_bissau_pertahanan,
  "armada_militer": guinea_bissau_armada,
  "militer_strategis": guinea_bissau_strategis,
  "armada_kepolisian": guinea_bissau_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 39,
      "dasar": 3,
      "menengah": 15,
      "lanjutan": 19,
      "universitas": 40,
      "lembaga_pendidikan": 20,
      "laboratorium": 35,
      "observatorium": 38,
      "pusat_penelitian": 6,
      "pusat_pengembangan": 33,
      "literasi": 80
  },
    "kesehatan": {
      "rumah_sakit_besar": 9,
      "rumah_sakit_kecil": 26,
      "pusat_diagnostik": 8,
      "harapan_hidup": 26,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 2,
      "pengadilan": 36,
      "kejaksaan": 10,
      "pos_polisi": 28,
      "armada_mobil_polisi": 6154,
      "akademi_polisi": 14,
      "indeks_korupsi": 95,
      "indeks_keamanan": 92
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 15,
      "sirkuit_balap": 4,
      "stadion": 37,
      "stadion_internasional": 16
  },
  "un_vote": 100,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 31,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 21,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 12,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 16,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 40
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 0
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 126320,
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
      "kekuatan_lunak": 28,
      "kekuatan_keras": 30,
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
    "kesehatan": 21,
    "pendidikan": 25,
    "keamanan": 25,
    "keuangan": 32,
    "lingkungan": 60
  }
};
