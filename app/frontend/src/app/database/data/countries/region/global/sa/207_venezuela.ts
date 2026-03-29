import { CountryData } from "@/app/database/data/types";
import { venezuela_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/sa/207_venezuela";
import { venezuela_armada } from "../../modules/2_militer/2_armada_militer/sa/207_venezuela";
import { venezuela_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/sa/207_venezuela";
import { venezuela_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/sa/207_venezuela";
import { venezuela_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/sa/207_venezuela";
import { venezuela_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/sa/207_venezuela";
import { venezuela_listrik } from "../../modules/1_ekonomi/2_kelistrikan/sa/207_venezuela";
import { venezuela_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/sa/207_venezuela";
import { venezuela_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/sa/207_venezuela";
import { venezuela_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/sa/207_venezuela";
import { venezuela_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/sa/207_venezuela";
import { venezuela_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/sa/207_venezuela";
import { venezuela_profile } from "../../modules/0_profiles/sa/207_venezuela";
import { venezuela_strategis } from "../../modules/2_militer/3_militer_strategis/sa/207_venezuela";

export const venezuela: CountryData = {
  ...venezuela_profile,
  "sektor_listrik": venezuela_listrik,
  "infrastruktur": venezuela_infrastruktur,
  "sektor_ekstraksi": venezuela_ekstraksi,
  "sektor_manufaktur": venezuela_manufaktur,
  "sektor_peternakan": venezuela_peternakan,
  "sektor_agrikultur": venezuela_agrikultur,
  "sektor_perikanan": venezuela_perikanan,
  "sektor_olahan_pangan": venezuela_olahan_pangan,
  "sektor_farmasi": venezuela_farmasi,
  "sektor_pertahanan": venezuela_pertahanan,
  "armada_militer": venezuela_armada,
  "militer_strategis": venezuela_strategis,
  "armada_kepolisian": venezuela_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 12,
      "dasar": 25,
      "menengah": 6,
      "lanjutan": 20,
      "universitas": 40,
      "lembaga_pendidikan": 38,
      "laboratorium": 40,
      "observatorium": 3,
      "pusat_penelitian": 25,
      "pusat_pengembangan": 10,
      "literasi": 69
    },
    "kesehatan": {
      "rumah_sakit_besar": 20,
      "rumah_sakit_kecil": 38,
      "pusat_diagnostik": 8,
      "harapan_hidup": 31,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 6,
      "pengadilan": 1,
      "kejaksaan": 13,
      "pos_polisi": 39,
      "armada_mobil_polisi": 922,
      "akademi_polisi": 32,
      "indeks_korupsi": 87,
      "indeks_keamanan": 86
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 12,
      "sirkuit_balap": 3,
      "stadion": 23,
      "stadion_internasional": 20
  },
  "un_vote": 195,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 37,
      "kepuasan": 67,
      "pendapatan": 75
    },
    "korporasi": {
      "tarif": 8,
      "kepuasan": 52,
      "pendapatan": 19
    },
    "penghasilan": {
      "tarif": 4,
      "kepuasan": 61,
      "pendapatan": 10
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 85
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 41
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 5 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 14 },
    "lainnya": {
      "tarif": 4,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 21560,
    "harga_gula": 20160,
    "harga_telur": 15550,
    "harga_bbm": 8560,
    "harga_listrik": 3200,
    "harga_air": 5200,
    "harga_obat": 157900,
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
      "kekuatan_lunak": 40,
      "kekuatan_keras": 34,
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
    "kesehatan": 28,
    "pendidikan": 26,
    "keamanan": 11,
    "keuangan": 8,
    "lingkungan": 60
  }
};
