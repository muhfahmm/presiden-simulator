import { CountryData } from "@/app/database/data/types";
import { chad_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/8_chad";
import { chad_armada } from "../../modules/2_militer/2_armada_militer/afrika/8_chad";
import { chad_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/8_chad";
import { chad_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/8_chad";
import { chad_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/8_chad";
import { chad_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/8_chad";
import { chad_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/8_chad";
import { chad_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/8_chad";
import { chad_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/8_chad";
import { chad_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/8_chad";
import { chad_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/8_chad";
import { chad_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/8_chad";
import { chad_profile } from "../../modules/0_profiles/afrika/8_chad";
import { chad_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/8_chad";

export const chad: CountryData = {
  ...chad_profile,
  "sektor_listrik": chad_listrik,
  "infrastruktur": chad_infrastruktur,
  "sektor_ekstraksi": chad_ekstraksi,
  "sektor_manufaktur": chad_manufaktur,
  "sektor_peternakan": chad_peternakan,
  "sektor_agrikultur": chad_agrikultur,
  "sektor_perikanan": chad_perikanan,
  "sektor_olahan_pangan": chad_olahan_pangan,
  "sektor_farmasi": chad_farmasi,
  "sektor_pertahanan": chad_pertahanan,
  "armada_militer": chad_armada,
  "militer_strategis": chad_strategis,
  "armada_kepolisian": chad_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 29,
      "dasar": 3,
      "menengah": 24,
      "lanjutan": 14,
      "universitas": 4,
      "lembaga_pendidikan": 27,
      "laboratorium": 26,
      "observatorium": 9,
      "pusat_penelitian": 36,
      "pusat_pengembangan": 22,
      "literasi": 67
  },
    "kesehatan": {
      "rumah_sakit_besar": 32,
      "rumah_sakit_kecil": 14,
      "pusat_diagnostik": 25,
      "harapan_hidup": 14,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 1,
      "pengadilan": 20,
      "kejaksaan": 19,
      "pos_polisi": 16,
      "armada_mobil_polisi": 1832,
      "akademi_polisi": 7,
      "indeks_korupsi": 50,
      "indeks_keamanan": 78
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 34,
      "sirkuit_balap": 31,
      "stadion": 24,
      "stadion_internasional": 39
  },
  "un_vote": 58,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 32,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 3,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 35,
      "kepuasan": 61,
      "pendapatan": 9
    },
    "bea_cukai": {
      "tarif": 13,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 30,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 28,
      "kepuasan": 93,
      "pendapatan": 4
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 21560,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 157900,
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
      "kekuatan_lunak": 7,
      "kekuatan_keras": 23,
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
    "kesehatan": 34,
    "pendidikan": 32,
    "keamanan": 6,
    "keuangan": 23,
    "lingkungan": 60
  }
};
