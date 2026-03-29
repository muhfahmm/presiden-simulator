import { CountryData } from "@/app/database/data/types";
import { libya_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/24_libya";
import { libya_armada } from "../../modules/2_militer/2_armada_militer/afrika/24_libya";
import { libya_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/24_libya";
import { libya_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/24_libya";
import { libya_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/24_libya";
import { libya_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/24_libya";
import { libya_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/24_libya";
import { libya_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/24_libya";
import { libya_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/24_libya";
import { libya_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/24_libya";
import { libya_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/24_libya";
import { libya_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/24_libya";
import { libya_profile } from "../../modules/0_profiles/afrika/24_libya";
import { libya_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/24_libya";

export const libya: CountryData = {
  ...libya_profile,
  "sektor_listrik": libya_listrik,
  "infrastruktur": libya_infrastruktur,
  "sektor_ekstraksi": libya_ekstraksi,
  "sektor_manufaktur": libya_manufaktur,
  "sektor_peternakan": libya_peternakan,
  "sektor_agrikultur": libya_agrikultur,
  "sektor_perikanan": libya_perikanan,
  "sektor_olahan_pangan": libya_olahan_pangan,
  "sektor_farmasi": libya_farmasi,
  "sektor_pertahanan": libya_pertahanan,
  "armada_militer": libya_armada,
  "militer_strategis": libya_strategis,
  "armada_kepolisian": libya_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 11,
      "dasar": 24,
      "menengah": 10,
      "lanjutan": 25,
      "universitas": 11,
      "lembaga_pendidikan": 9,
      "laboratorium": 34,
      "observatorium": 14,
      "pusat_penelitian": 3,
      "pusat_pengembangan": 18,
      "literasi": 88
  },
    "kesehatan": {
      "rumah_sakit_besar": 30,
      "rumah_sakit_kecil": 19,
      "pusat_diagnostik": 12,
      "harapan_hidup": 21,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 18,
      "pengadilan": 27,
      "kejaksaan": 30,
      "pos_polisi": 31,
      "armada_mobil_polisi": 3278,
      "akademi_polisi": 37,
      "indeks_korupsi": 94,
      "indeks_keamanan": 89
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 35,
      "sirkuit_balap": 18,
      "stadion": 26,
      "stadion_internasional": 33
  },
  "un_vote": 108,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 8,
      "kepuasan": 67,
      "pendapatan": 8
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 18,
      "kepuasan": 61,
      "pendapatan": 16
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 16
    },
    "lingkungan": {
      "tarif": 22,
      "kepuasan": 88,
      "pendapatan": 24
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 43
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 50,
    "gaji_medis": 50,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 145740,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 15550,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 4160,
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
      "kekuatan_lunak": 17,
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
    "kesehatan": 37,
    "pendidikan": 6,
    "keamanan": 38,
    "keuangan": 22,
    "lingkungan": 60
  }
};
