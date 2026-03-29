import { CountryData } from "@/app/database/data/types";
import { niger_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/34_niger";
import { niger_armada } from "../../modules/2_militer/2_armada_militer/afrika/34_niger";
import { niger_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/34_niger";
import { niger_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/34_niger";
import { niger_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/34_niger";
import { niger_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/34_niger";
import { niger_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/34_niger";
import { niger_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/34_niger";
import { niger_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/34_niger";
import { niger_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/34_niger";
import { niger_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/34_niger";
import { niger_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/34_niger";
import { niger_profile } from "../../modules/0_profiles/afrika/34_niger";
import { niger_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/34_niger";

export const niger: CountryData = {
  ...niger_profile,
  "sektor_listrik": niger_listrik,
  "infrastruktur": niger_infrastruktur,
  "sektor_ekstraksi": niger_ekstraksi,
  "sektor_manufaktur": niger_manufaktur,
  "sektor_peternakan": niger_peternakan,
  "sektor_agrikultur": niger_agrikultur,
  "sektor_perikanan": niger_perikanan,
  "sektor_olahan_pangan": niger_olahan_pangan,
  "sektor_farmasi": niger_farmasi,
  "sektor_pertahanan": niger_pertahanan,
  "armada_militer": niger_armada,
  "militer_strategis": niger_strategis,
  "armada_kepolisian": niger_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 13,
      "dasar": 34,
      "menengah": 7,
      "lanjutan": 15,
      "universitas": 1,
      "lembaga_pendidikan": 19,
      "laboratorium": 23,
      "observatorium": 40,
      "pusat_penelitian": 10,
      "pusat_pengembangan": 7,
      "literasi": 72
  },
    "kesehatan": {
      "rumah_sakit_besar": 3,
      "rumah_sakit_kecil": 11,
      "pusat_diagnostik": 14,
      "harapan_hidup": 30,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 24,
      "pengadilan": 35,
      "kejaksaan": 13,
      "pos_polisi": 9,
      "armada_mobil_polisi": 8807,
      "akademi_polisi": 16,
      "indeks_korupsi": 69,
      "indeks_keamanan": 81
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 22,
      "sirkuit_balap": 35,
      "stadion": 24,
      "stadion_internasional": 1
  },
  "un_vote": 30,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 38,
      "kepuasan": 67,
      "pendapatan": 7
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 38,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 15,
      "kepuasan": 86,
      "pendapatan": 5
    },
    "lingkungan": {
      "tarif": 27,
      "kepuasan": 88,
      "pendapatan": 5
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 27,
      "kepuasan": 93,
      "pendapatan": 10
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 40,
    "gaji_medis": 40,
    "gaji_militer": 40
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 7200,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 4160,
    "harga_obat": 157900,
    "harga_pendidikan": 677460
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
      "kekuatan_lunak": 18,
      "kekuatan_keras": 5,
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
    "kesehatan": 23,
    "pendidikan": 5,
    "keamanan": 34,
    "keuangan": 1,
    "lingkungan": 60
  }
};
