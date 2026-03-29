import { CountryData } from "@/app/database/data/types";
import { mozambik_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/32_mozambik";
import { mozambik_armada } from "../../modules/2_militer/2_armada_militer/afrika/32_mozambik";
import { mozambik_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/32_mozambik";
import { mozambik_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/32_mozambik";
import { mozambik_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/32_mozambik";
import { mozambik_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/32_mozambik";
import { mozambik_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/32_mozambik";
import { mozambik_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/32_mozambik";
import { mozambik_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/32_mozambik";
import { mozambik_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/32_mozambik";
import { mozambik_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/32_mozambik";
import { mozambik_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/32_mozambik";
import { mozambik_profile } from "../../modules/0_profiles/afrika/32_mozambik";
import { mozambik_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/32_mozambik";

export const mozambik: CountryData = {
  ...mozambik_profile,
  "sektor_listrik": mozambik_listrik,
  "infrastruktur": mozambik_infrastruktur,
  "sektor_ekstraksi": mozambik_ekstraksi,
  "sektor_manufaktur": mozambik_manufaktur,
  "sektor_peternakan": mozambik_peternakan,
  "sektor_agrikultur": mozambik_agrikultur,
  "sektor_perikanan": mozambik_perikanan,
  "sektor_olahan_pangan": mozambik_olahan_pangan,
  "sektor_farmasi": mozambik_farmasi,
  "sektor_pertahanan": mozambik_pertahanan,
  "armada_militer": mozambik_armada,
  "militer_strategis": mozambik_strategis,
  "armada_kepolisian": mozambik_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 38,
      "dasar": 12,
      "menengah": 22,
      "lanjutan": 16,
      "universitas": 17,
      "lembaga_pendidikan": 12,
      "laboratorium": 17,
      "observatorium": 33,
      "pusat_penelitian": 25,
      "pusat_pengembangan": 4,
      "literasi": 83
  },
    "kesehatan": {
      "rumah_sakit_besar": 34,
      "rumah_sakit_kecil": 7,
      "pusat_diagnostik": 40,
      "harapan_hidup": 23,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 34,
      "pengadilan": 38,
      "kejaksaan": 7,
      "pos_polisi": 9,
      "armada_mobil_polisi": 4434,
      "akademi_polisi": 35,
      "indeks_korupsi": 78,
      "indeks_keamanan": 84
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 25,
      "sirkuit_balap": 26,
      "stadion": 9,
      "stadion_internasional": 3
  },
  "un_vote": 85,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 35,
      "kepuasan": 67,
      "pendapatan": 10
    },
    "korporasi": {
      "tarif": 19,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 4,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 8,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 7
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 6,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 50,
    "gaji_medis": 50,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 14980,
    "harga_listrik": 2240,
    "harga_air": 7280,
    "harga_obat": 157900,
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
      "kekuatan_lunak": 12,
      "kekuatan_keras": 28,
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
    "kesehatan": 6,
    "pendidikan": 25,
    "keamanan": 1,
    "keuangan": 35,
    "lingkungan": 60
  }
};
