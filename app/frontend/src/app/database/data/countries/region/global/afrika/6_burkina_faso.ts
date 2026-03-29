import { CountryData } from "@/app/database/data/types";
import { burkina_faso_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/6_burkina_faso";
import { burkina_faso_armada } from "../../modules/2_militer/2_armada_militer/afrika/6_burkina_faso";
import { burkina_faso_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/6_burkina_faso";
import { burkina_faso_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/6_burkina_faso";
import { burkina_faso_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/6_burkina_faso";
import { burkina_faso_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/6_burkina_faso";
import { burkina_faso_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/6_burkina_faso";
import { burkina_faso_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/6_burkina_faso";
import { burkina_faso_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/6_burkina_faso";
import { burkina_faso_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/6_burkina_faso";
import { burkina_faso_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/6_burkina_faso";
import { burkina_faso_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/6_burkina_faso";
import { burkina_faso_profile } from "../../modules/0_profiles/afrika/6_burkina_faso";
import { burkina_faso_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/6_burkina_faso";

export const burkina_faso: CountryData = {
  ...burkina_faso_profile,
  "sektor_listrik": burkina_faso_listrik,
  "infrastruktur": burkina_faso_infrastruktur,
  "sektor_ekstraksi": burkina_faso_ekstraksi,
  "sektor_manufaktur": burkina_faso_manufaktur,
  "sektor_peternakan": burkina_faso_peternakan,
  "sektor_agrikultur": burkina_faso_agrikultur,
  "sektor_perikanan": burkina_faso_perikanan,
  "sektor_olahan_pangan": burkina_faso_olahan_pangan,
  "sektor_farmasi": burkina_faso_farmasi,
  "sektor_pertahanan": burkina_faso_pertahanan,
  "armada_militer": burkina_faso_armada,
  "militer_strategis": burkina_faso_strategis,
  "armada_kepolisian": burkina_faso_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 21,
      "dasar": 26,
      "menengah": 12,
      "lanjutan": 23,
      "universitas": 40,
      "lembaga_pendidikan": 35,
      "laboratorium": 9,
      "observatorium": 18,
      "pusat_penelitian": 38,
      "pusat_pengembangan": 2,
      "literasi": 50
  },
    "kesehatan": {
      "rumah_sakit_besar": 37,
      "rumah_sakit_kecil": 28,
      "pusat_diagnostik": 26,
      "harapan_hidup": 38,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 22,
      "pengadilan": 13,
      "kejaksaan": 10,
      "pos_polisi": 8,
      "armada_mobil_polisi": 5057,
      "akademi_polisi": 13,
      "indeks_korupsi": 88,
      "indeks_keamanan": 54
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 9,
      "sirkuit_balap": 6,
      "stadion": 29,
      "stadion_internasional": 40
  },
  "un_vote": 46,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 29,
      "kepuasan": 67,
      "pendapatan": 6
    },
    "korporasi": {
      "tarif": 29,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 16,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 11
    },
    "lingkungan": {
      "tarif": 30,
      "kepuasan": 88,
      "pendapatan": 11
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 3
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
    "subsidi_kesehatan": 25,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 83280,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 8560,
    "harga_listrik": 1280,
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
      "kekuatan_lunak": 15,
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
    "kesehatan": 29,
    "pendidikan": 20,
    "keamanan": 1,
    "keuangan": 21,
    "lingkungan": 60
  }
};
