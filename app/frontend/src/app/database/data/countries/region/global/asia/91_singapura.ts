import { CountryData } from "@/app/database/data/types";
import { singapura_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/91_singapura";
import { singapura_armada } from "../../modules/2_militer/2_armada_militer/asia/91_singapura";
import { singapura_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/91_singapura";
import { singapura_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/91_singapura";
import { singapura_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/91_singapura";
import { singapura_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/91_singapura";
import { singapura_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/91_singapura";
import { singapura_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/91_singapura";
import { singapura_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/91_singapura";
import { singapura_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/91_singapura";
import { singapura_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/91_singapura";
import { singapura_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/91_singapura";
import { singapura_profile } from "../../modules/0_profiles/asia/91_singapura";
import { singapura_strategis } from "../../modules/2_militer/3_militer_strategis/asia/91_singapura";

export const singapura: CountryData = {
  ...singapura_profile,
  "sektor_listrik": singapura_listrik,
  "infrastruktur": singapura_infrastruktur,
  "sektor_ekstraksi": singapura_ekstraksi,
  "sektor_manufaktur": singapura_manufaktur,
  "sektor_peternakan": singapura_peternakan,
  "sektor_agrikultur": singapura_agrikultur,
  "sektor_perikanan": singapura_perikanan,
  "sektor_olahan_pangan": singapura_olahan_pangan,
  "sektor_farmasi": singapura_farmasi,
  "sektor_pertahanan": singapura_pertahanan,
  "armada_militer": singapura_armada,
  "militer_strategis": singapura_strategis,
  "armada_kepolisian": singapura_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 26,
      "dasar": 40,
      "menengah": 11,
      "lanjutan": 4,
      "universitas": 15,
      "lembaga_pendidikan": 18,
      "laboratorium": 35,
      "observatorium": 8,
      "pusat_penelitian": 12,
      "pusat_pengembangan": 33,
      "literasi": 66
    },
    "kesehatan": {
      "rumah_sakit_besar": 1,
      "rumah_sakit_kecil": 23,
      "pusat_diagnostik": 23,
      "harapan_hidup": 25,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 2,
      "pengadilan": 16,
      "kejaksaan": 37,
      "pos_polisi": 6,
      "armada_mobil_polisi": 2865,
      "akademi_polisi": 33,
      "indeks_korupsi": 64,
      "indeks_keamanan": 92
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 16,
      "sirkuit_balap": 38,
      "stadion": 11,
      "stadion_internasional": 25
  },
  "un_vote": 148,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 10,
      "kepuasan": 67,
      "pendapatan": 80
    },
    "korporasi": {
      "tarif": 36,
      "kepuasan": 52,
      "pendapatan": 478
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 132
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 231
    },
    "lingkungan": {
      "tarif": 39,
      "kepuasan": 88,
      "pendapatan": 379
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 25 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 73 },
    "lainnya": {
      "tarif": 11,
      "kepuasan": 93,
      "pendapatan": 147
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 21560,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 800,
    "harga_air": 10400,
    "harga_obat": 221060,
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
      "kekuatan_keras": 26,
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
    "pendidikan": 18,
    "keamanan": 31,
    "keuangan": 19,
    "lingkungan": 60
  }
};
