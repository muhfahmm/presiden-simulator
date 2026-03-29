import { CountryData } from "@/app/database/data/types";
import { tunisia_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/53_tunisia";
import { tunisia_armada } from "../../modules/2_militer/2_armada_militer/afrika/53_tunisia";
import { tunisia_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/53_tunisia";
import { tunisia_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/53_tunisia";
import { tunisia_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/53_tunisia";
import { tunisia_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/53_tunisia";
import { tunisia_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/53_tunisia";
import { tunisia_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/53_tunisia";
import { tunisia_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/53_tunisia";
import { tunisia_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/53_tunisia";
import { tunisia_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/53_tunisia";
import { tunisia_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/53_tunisia";
import { tunisia_profile } from "../../modules/0_profiles/afrika/53_tunisia";
import { tunisia_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/53_tunisia";

export const tunisia: CountryData = {
  ...tunisia_profile,
  "sektor_listrik": tunisia_listrik,
  "infrastruktur": tunisia_infrastruktur,
  "sektor_ekstraksi": tunisia_ekstraksi,
  "sektor_manufaktur": tunisia_manufaktur,
  "sektor_peternakan": tunisia_peternakan,
  "sektor_agrikultur": tunisia_agrikultur,
  "sektor_perikanan": tunisia_perikanan,
  "sektor_olahan_pangan": tunisia_olahan_pangan,
  "sektor_farmasi": tunisia_farmasi,
  "sektor_pertahanan": tunisia_pertahanan,
  "armada_militer": tunisia_armada,
  "militer_strategis": tunisia_strategis,
  "armada_kepolisian": tunisia_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 22,
      "dasar": 40,
      "menengah": 36,
      "lanjutan": 33,
      "universitas": 33,
      "lembaga_pendidikan": 33,
      "laboratorium": 20,
      "observatorium": 10,
      "pusat_penelitian": 10,
      "pusat_pengembangan": 38,
      "literasi": 64
  },
    "kesehatan": {
      "rumah_sakit_besar": 13,
      "rumah_sakit_kecil": 5,
      "pusat_diagnostik": 9,
      "harapan_hidup": 19,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 36,
      "pengadilan": 16,
      "kejaksaan": 16,
      "pos_polisi": 21,
      "armada_mobil_polisi": 2086,
      "akademi_polisi": 19,
      "indeks_korupsi": 87,
      "indeks_keamanan": 83
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 4,
      "sirkuit_balap": 18,
      "stadion": 12,
      "stadion_internasional": 21
  },
  "un_vote": 59,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 24,
      "kepuasan": 67,
      "pendapatan": 24
    },
    "korporasi": {
      "tarif": 3,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 2,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 15,
      "kepuasan": 86,
      "pendapatan": 11
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 4
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
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
    "harga_beras": 16000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 15400,
    "harga_gula": 7200,
    "harga_telur": 43540,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
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
      "kekuatan_lunak": 1,
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
    "kesehatan": 19,
    "pendidikan": 39,
    "keamanan": 14,
    "keuangan": 16,
    "lingkungan": 60
  }
};
