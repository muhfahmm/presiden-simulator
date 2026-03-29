import { CountryData } from "@/app/database/data/types";
import { togo_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/52_togo";
import { togo_armada } from "../../modules/2_militer/2_armada_militer/afrika/52_togo";
import { togo_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/52_togo";
import { togo_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/52_togo";
import { togo_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/52_togo";
import { togo_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/52_togo";
import { togo_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/52_togo";
import { togo_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/52_togo";
import { togo_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/52_togo";
import { togo_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/52_togo";
import { togo_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/52_togo";
import { togo_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/52_togo";
import { togo_profile } from "../../modules/0_profiles/afrika/52_togo";
import { togo_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/52_togo";

export const togo: CountryData = {
  ...togo_profile,
  "sektor_listrik": togo_listrik,
  "infrastruktur": togo_infrastruktur,
  "sektor_ekstraksi": togo_ekstraksi,
  "sektor_manufaktur": togo_manufaktur,
  "sektor_peternakan": togo_peternakan,
  "sektor_agrikultur": togo_agrikultur,
  "sektor_perikanan": togo_perikanan,
  "sektor_olahan_pangan": togo_olahan_pangan,
  "sektor_farmasi": togo_farmasi,
  "sektor_pertahanan": togo_pertahanan,
  "armada_militer": togo_armada,
  "militer_strategis": togo_strategis,
  "armada_kepolisian": togo_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 3,
      "dasar": 19,
      "menengah": 11,
      "lanjutan": 39,
      "universitas": 13,
      "lembaga_pendidikan": 14,
      "laboratorium": 1,
      "observatorium": 5,
      "pusat_penelitian": 39,
      "pusat_pengembangan": 1,
      "literasi": 54
  },
    "kesehatan": {
      "rumah_sakit_besar": 20,
      "rumah_sakit_kecil": 15,
      "pusat_diagnostik": 17,
      "harapan_hidup": 27,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 37,
      "pengadilan": 27,
      "kejaksaan": 39,
      "pos_polisi": 8,
      "armada_mobil_polisi": 4480,
      "akademi_polisi": 4,
      "indeks_korupsi": 80,
      "indeks_keamanan": 81
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 9,
      "sirkuit_balap": 19,
      "stadion": 38,
      "stadion_internasional": 2
  },
  "un_vote": 122,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 30,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 5,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 1,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 35,
      "kepuasan": 93,
      "pendapatan": 8
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 25,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 52050,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 1280,
    "harga_air": 5200,
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
      "kekuatan_lunak": 35,
      "kekuatan_keras": 17,
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
    "kesehatan": 22,
    "pendidikan": 30,
    "keamanan": 2,
    "keuangan": 11,
    "lingkungan": 60
  }
};
