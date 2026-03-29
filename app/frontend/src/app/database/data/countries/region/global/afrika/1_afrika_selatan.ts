import { CountryData } from "@/app/database/data/types";
import { afrika_selatan_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/1_afrika_selatan";
import { afrika_selatan_armada } from "../../modules/2_militer/2_armada_militer/afrika/1_afrika_selatan";
import { afrika_selatan_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/1_afrika_selatan";
import { afrika_selatan_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/1_afrika_selatan";
import { afrika_selatan_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/1_afrika_selatan";
import { afrika_selatan_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/1_afrika_selatan";
import { afrika_selatan_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/1_afrika_selatan";
import { afrika_selatan_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/1_afrika_selatan";
import { afrika_selatan_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/1_afrika_selatan";
import { afrika_selatan_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/1_afrika_selatan";
import { afrika_selatan_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/1_afrika_selatan";
import { afrika_selatan_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/1_afrika_selatan";
import { afrika_selatan_profile } from "../../modules/0_profiles/afrika/1_afrika_selatan";
import { afrika_selatan_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/1_afrika_selatan";

export const afrika_selatan: CountryData = {
  ...afrika_selatan_profile,
  "sektor_listrik": afrika_selatan_listrik,
  "infrastruktur": afrika_selatan_infrastruktur,
  "sektor_ekstraksi": afrika_selatan_ekstraksi,
  "sektor_manufaktur": afrika_selatan_manufaktur,
  "sektor_peternakan": afrika_selatan_peternakan,
  "sektor_agrikultur": afrika_selatan_agrikultur,
  "sektor_perikanan": afrika_selatan_perikanan,
  "sektor_olahan_pangan": afrika_selatan_olahan_pangan,
  "sektor_farmasi": afrika_selatan_farmasi,
  "sektor_pertahanan": afrika_selatan_pertahanan,
  "armada_militer": afrika_selatan_armada,
  "militer_strategis": afrika_selatan_strategis,
  "armada_kepolisian": afrika_selatan_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 32,
      "dasar": 3,
      "menengah": 34,
      "lanjutan": 15,
      "universitas": 2,
      "lembaga_pendidikan": 20,
      "laboratorium": 28,
      "observatorium": 20,
      "pusat_penelitian": 40,
      "pusat_pengembangan": 10,
      "literasi": 85
  },
    "kesehatan": {
      "rumah_sakit_besar": 20,
      "rumah_sakit_kecil": 22,
      "pusat_diagnostik": 36,
      "harapan_hidup": 15,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 21,
      "pengadilan": 20,
      "kejaksaan": 20,
      "pos_polisi": 6,
      "armada_mobil_polisi": 2079,
      "akademi_polisi": 26,
      "indeks_korupsi": 58,
      "indeks_keamanan": 52
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 16,
      "sirkuit_balap": 21,
      "stadion": 18,
      "stadion_internasional": 32
  },
  "un_vote": 188,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 1,
      "kepuasan": 67,
      "pendapatan": 9
    },
    "korporasi": {
      "tarif": 18,
      "kepuasan": 52,
      "pendapatan": 157
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 367
    },
    "bea_cukai": {
      "tarif": 6,
      "kepuasan": 86,
      "pendapatan": 64
    },
    "lingkungan": {
      "tarif": 12,
      "kepuasan": 88,
      "pendapatan": 83
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 20 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 60 },
    "lainnya": {
      "tarif": 13,
      "kepuasan": 93,
      "pendapatan": 134
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 30,
    "gaji_guru": 50,
    "gaji_medis": 60,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 1280,
    "harga_air": 5200,
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
      "kekuatan_lunak": 34,
      "kekuatan_keras": 7,
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
    "kesehatan": 13,
    "pendidikan": 24,
    "keamanan": 40,
    "keuangan": 37,
    "lingkungan": 60
  }
};
