import { CountryData } from "@/app/database/data/types";
import { barbados_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/na/155_barbados";
import { barbados_armada } from "../../modules/2_militer/2_armada_militer/na/155_barbados";
import { barbados_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/na/155_barbados";
import { barbados_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/na/155_barbados";
import { barbados_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/na/155_barbados";
import { barbados_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/na/155_barbados";
import { barbados_listrik } from "../../modules/1_ekonomi/2_kelistrikan/na/155_barbados";
import { barbados_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/na/155_barbados";
import { barbados_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/na/155_barbados";
import { barbados_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/na/155_barbados";
import { barbados_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/na/155_barbados";
import { barbados_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/na/155_barbados";
import { barbados_profile } from "../../modules/0_profiles/na/155_barbados";
import { barbados_strategis } from "../../modules/2_militer/3_militer_strategis/na/155_barbados";

export const barbados: CountryData = {
  ...barbados_profile,
  "sektor_listrik": barbados_listrik,
  "infrastruktur": barbados_infrastruktur,
  "sektor_ekstraksi": barbados_ekstraksi,
  "sektor_manufaktur": barbados_manufaktur,
  "sektor_peternakan": barbados_peternakan,
  "sektor_agrikultur": barbados_agrikultur,
  "sektor_perikanan": barbados_perikanan,
  "sektor_olahan_pangan": barbados_olahan_pangan,
  "sektor_farmasi": barbados_farmasi,
  "sektor_pertahanan": barbados_pertahanan,
  "armada_militer": barbados_armada,
  "militer_strategis": barbados_strategis,
  "armada_kepolisian": barbados_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 7,
      "dasar": 15,
      "menengah": 12,
      "lanjutan": 18,
      "universitas": 24,
      "lembaga_pendidikan": 13,
      "laboratorium": 19,
      "observatorium": 25,
      "pusat_penelitian": 14,
      "pusat_pengembangan": 1,
      "literasi": 63
    },
    "kesehatan": {
      "rumah_sakit_besar": 26,
      "rumah_sakit_kecil": 30,
      "pusat_diagnostik": 21,
      "harapan_hidup": 7,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 23,
      "pengadilan": 4,
      "kejaksaan": 39,
      "pos_polisi": 24,
      "armada_mobil_polisi": 3756,
      "akademi_polisi": 17,
      "indeks_korupsi": 83,
      "indeks_keamanan": 82
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 36,
      "sirkuit_balap": 39,
      "stadion": 8,
      "stadion_internasional": 26
  },
  "un_vote": 10,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 19,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 9,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 21,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 2
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
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 12320,
    "harga_gula": 28800,
    "harga_telur": 31100,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
    "harga_air": 10400,
    "harga_obat": 78950,
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
      "kekuatan_lunak": 4,
      "kekuatan_keras": 9,
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
    "pendidikan": 4,
    "keamanan": 12,
    "keuangan": 26,
    "lingkungan": 60
  }
};
