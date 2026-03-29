import { CountryData } from "@/app/database/data/types";
import { puerto_rico_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/na/173_puerto_rico";
import { puerto_rico_armada } from "../../modules/2_militer/2_armada_militer/na/173_puerto_rico";
import { puerto_rico_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/na/173_puerto_rico";
import { puerto_rico_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/na/173_puerto_rico";
import { puerto_rico_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/na/173_puerto_rico";
import { puerto_rico_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/na/173_puerto_rico";
import { puerto_rico_listrik } from "../../modules/1_ekonomi/2_kelistrikan/na/173_puerto_rico";
import { puerto_rico_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/na/173_puerto_rico";
import { puerto_rico_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/na/173_puerto_rico";
import { puerto_rico_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/na/173_puerto_rico";
import { puerto_rico_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/na/173_puerto_rico";
import { puerto_rico_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/na/173_puerto_rico";
import { puerto_rico_profile } from "../../modules/0_profiles/na/173_puerto_rico";
import { puerto_rico_strategis } from "../../modules/2_militer/3_militer_strategis/na/173_puerto_rico";

export const puerto_rico: CountryData = {
  ...puerto_rico_profile,
  "sektor_listrik": puerto_rico_listrik,
  "infrastruktur": puerto_rico_infrastruktur,
  "sektor_ekstraksi": puerto_rico_ekstraksi,
  "sektor_manufaktur": puerto_rico_manufaktur,
  "sektor_peternakan": puerto_rico_peternakan,
  "sektor_agrikultur": puerto_rico_agrikultur,
  "sektor_perikanan": puerto_rico_perikanan,
  "sektor_olahan_pangan": puerto_rico_olahan_pangan,
  "sektor_farmasi": puerto_rico_farmasi,
  "sektor_pertahanan": puerto_rico_pertahanan,
  "armada_militer": puerto_rico_armada,
  "militer_strategis": puerto_rico_strategis,
  "armada_kepolisian": puerto_rico_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 31,
      "dasar": 8,
      "menengah": 14,
      "lanjutan": 27,
      "universitas": 19,
      "lembaga_pendidikan": 26,
      "laboratorium": 28,
      "observatorium": 40,
      "pusat_penelitian": 22,
      "pusat_pengembangan": 9,
      "literasi": 55
    },
    "kesehatan": {
      "rumah_sakit_besar": 19,
      "rumah_sakit_kecil": 38,
      "pusat_diagnostik": 11,
      "harapan_hidup": 35,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 15,
      "pengadilan": 36,
      "kejaksaan": 4,
      "pos_polisi": 40,
      "armada_mobil_polisi": 3667,
      "akademi_polisi": 37,
      "indeks_korupsi": 91,
      "indeks_keamanan": 77
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 39,
      "sirkuit_balap": 35,
      "stadion": 6,
      "stadion_internasional": 13
  },
  "un_vote": 117,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 38,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 38,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 4,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
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
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 2600,
    "harga_obat": 221060,
    "harga_pendidikan": 241950
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
      "kekuatan_lunak": 36,
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
    "kesehatan": 6,
    "pendidikan": 13,
    "keamanan": 28,
    "keuangan": 20,
    "lingkungan": 60
  }
};
