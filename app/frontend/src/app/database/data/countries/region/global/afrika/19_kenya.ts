import { CountryData } from "@/app/database/data/types";
import { kenya_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/19_kenya";
import { kenya_armada } from "../../modules/2_militer/2_armada_militer/afrika/19_kenya";
import { kenya_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/19_kenya";
import { kenya_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/19_kenya";
import { kenya_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/19_kenya";
import { kenya_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/19_kenya";
import { kenya_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/19_kenya";
import { kenya_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/19_kenya";
import { kenya_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/19_kenya";
import { kenya_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/19_kenya";
import { kenya_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/19_kenya";
import { kenya_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/19_kenya";
import { kenya_profile } from "../../modules/0_profiles/afrika/19_kenya";
import { kenya_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/19_kenya";

export const kenya: CountryData = {
  ...kenya_profile,
  "sektor_listrik": kenya_listrik,
  "infrastruktur": kenya_infrastruktur,
  "sektor_ekstraksi": kenya_ekstraksi,
  "sektor_manufaktur": kenya_manufaktur,
  "sektor_peternakan": kenya_peternakan,
  "sektor_agrikultur": kenya_agrikultur,
  "sektor_perikanan": kenya_perikanan,
  "sektor_olahan_pangan": kenya_olahan_pangan,
  "sektor_farmasi": kenya_farmasi,
  "sektor_pertahanan": kenya_pertahanan,
  "armada_militer": kenya_armada,
  "militer_strategis": kenya_strategis,
  "armada_kepolisian": kenya_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 17,
      "dasar": 17,
      "menengah": 16,
      "lanjutan": 12,
      "universitas": 40,
      "lembaga_pendidikan": 35,
      "laboratorium": 27,
      "observatorium": 20,
      "pusat_penelitian": 34,
      "pusat_pengembangan": 18,
      "literasi": 57
  },
    "kesehatan": {
      "rumah_sakit_besar": 36,
      "rumah_sakit_kecil": 6,
      "pusat_diagnostik": 20,
      "harapan_hidup": 37,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 9,
      "pengadilan": 14,
      "kejaksaan": 40,
      "pos_polisi": 31,
      "armada_mobil_polisi": 7884,
      "akademi_polisi": 8,
      "indeks_korupsi": 69,
      "indeks_keamanan": 93
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 4,
      "sirkuit_balap": 35,
      "stadion": 26,
      "stadion_internasional": 5
  },
  "un_vote": 169,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 31,
      "kepuasan": 67,
      "pendapatan": 55
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 95
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 49
    },
    "bea_cukai": {
      "tarif": 35,
      "kepuasan": 86,
      "pendapatan": 78
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 15
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 6 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 17 },
    "lainnya": {
      "tarif": 3,
      "kepuasan": 93,
      "pendapatan": 8
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 50,
    "gaji_medis": 40,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 30800,
    "harga_gula": 28800,
    "harga_telur": 43540,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 4160,
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
      "kekuatan_lunak": 31,
      "kekuatan_keras": 18,
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
    "kesehatan": 27,
    "pendidikan": 5,
    "keamanan": 40,
    "keuangan": 23,
    "lingkungan": 60
  }
};
