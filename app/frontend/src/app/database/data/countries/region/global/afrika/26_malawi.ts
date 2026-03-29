import { CountryData } from "@/app/database/data/types";
import { malawi_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/26_malawi";
import { malawi_armada } from "../../modules/2_militer/2_armada_militer/afrika/26_malawi";
import { malawi_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/26_malawi";
import { malawi_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/26_malawi";
import { malawi_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/26_malawi";
import { malawi_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/26_malawi";
import { malawi_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/26_malawi";
import { malawi_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/26_malawi";
import { malawi_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/26_malawi";
import { malawi_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/26_malawi";
import { malawi_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/26_malawi";
import { malawi_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/26_malawi";
import { malawi_profile } from "../../modules/0_profiles/afrika/26_malawi";
import { malawi_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/26_malawi";

export const malawi: CountryData = {
  ...malawi_profile,
  "sektor_listrik": malawi_listrik,
  "infrastruktur": malawi_infrastruktur,
  "sektor_ekstraksi": malawi_ekstraksi,
  "sektor_manufaktur": malawi_manufaktur,
  "sektor_peternakan": malawi_peternakan,
  "sektor_agrikultur": malawi_agrikultur,
  "sektor_perikanan": malawi_perikanan,
  "sektor_olahan_pangan": malawi_olahan_pangan,
  "sektor_farmasi": malawi_farmasi,
  "sektor_pertahanan": malawi_pertahanan,
  "armada_militer": malawi_armada,
  "militer_strategis": malawi_strategis,
  "armada_kepolisian": malawi_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 17,
      "dasar": 38,
      "menengah": 16,
      "lanjutan": 5,
      "universitas": 35,
      "lembaga_pendidikan": 39,
      "laboratorium": 6,
      "observatorium": 28,
      "pusat_penelitian": 19,
      "pusat_pengembangan": 32,
      "literasi": 95
  },
    "kesehatan": {
      "rumah_sakit_besar": 1,
      "rumah_sakit_kecil": 23,
      "pusat_diagnostik": 40,
      "harapan_hidup": 18,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 29,
      "pengadilan": 18,
      "kejaksaan": 40,
      "pos_polisi": 4,
      "armada_mobil_polisi": 5954,
      "akademi_polisi": 12,
      "indeks_korupsi": 82,
      "indeks_keamanan": 90
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 9,
      "sirkuit_balap": 33,
      "stadion": 38,
      "stadion_internasional": 13
  },
  "un_vote": 35,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 6,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 28,
      "kepuasan": 52,
      "pendapatan": 7
    },
    "penghasilan": {
      "tarif": 16,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 7
    },
    "lingkungan": {
      "tarif": 29,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 30,
      "kepuasan": 93,
      "pendapatan": 10
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 30,
    "gaji_guru": 50,
    "gaji_medis": 50,
    "gaji_militer": 40
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
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
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 62200,
    "harga_bbm": 5350,
    "harga_listrik": 800,
    "harga_air": 5200,
    "harga_obat": 221060,
    "harga_pendidikan": 387120
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
      "kekuatan_lunak": 3,
      "kekuatan_keras": 20,
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
    "kesehatan": 40,
    "pendidikan": 27,
    "keamanan": 5,
    "keuangan": 2,
    "lingkungan": 60
  }
};
