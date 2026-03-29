import { CountryData } from "@/app/database/data/types";
import { angola_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/3_angola";
import { angola_armada } from "../../modules/2_militer/2_armada_militer/afrika/3_angola";
import { angola_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/3_angola";
import { angola_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/3_angola";
import { angola_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/3_angola";
import { angola_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/3_angola";
import { angola_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/3_angola";
import { angola_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/3_angola";
import { angola_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/3_angola";
import { angola_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/3_angola";
import { angola_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/3_angola";
import { angola_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/3_angola";
import { angola_profile } from "../../modules/0_profiles/afrika/3_angola";
import { angola_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/3_angola";

export const angola: CountryData = {
  ...angola_profile,
  "sektor_listrik": angola_listrik,
  "infrastruktur": angola_infrastruktur,
  "sektor_ekstraksi": angola_ekstraksi,
  "sektor_manufaktur": angola_manufaktur,
  "sektor_peternakan": angola_peternakan,
  "sektor_agrikultur": angola_agrikultur,
  "sektor_perikanan": angola_perikanan,
  "sektor_olahan_pangan": angola_olahan_pangan,
  "sektor_farmasi": angola_farmasi,
  "sektor_pertahanan": angola_pertahanan,
  "armada_militer": angola_armada,
  "militer_strategis": angola_strategis,
  "armada_kepolisian": angola_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 26,
      "dasar": 24,
      "menengah": 27,
      "lanjutan": 8,
      "universitas": 40,
      "lembaga_pendidikan": 35,
      "laboratorium": 26,
      "observatorium": 17,
      "pusat_penelitian": 36,
      "pusat_pengembangan": 9,
      "literasi": 93
  },
    "kesehatan": {
      "rumah_sakit_besar": 20,
      "rumah_sakit_kecil": 7,
      "pusat_diagnostik": 16,
      "harapan_hidup": 28,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 5,
      "pengadilan": 36,
      "kejaksaan": 24,
      "pos_polisi": 25,
      "armada_mobil_polisi": 4093,
      "akademi_polisi": 18,
      "indeks_korupsi": 74,
      "indeks_keamanan": 61
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 30,
      "sirkuit_balap": 5,
      "stadion": 36,
      "stadion_internasional": 40
  },
  "un_vote": 155,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 26,
      "kepuasan": 67,
      "pendapatan": 49
    },
    "korporasi": {
      "tarif": 26,
      "kepuasan": 52,
      "pendapatan": 47
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 56
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 32
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 62
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 5 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 13 },
    "lainnya": {
      "tarif": 34,
      "kepuasan": 93,
      "pendapatan": 69
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 50,
    "gaji_medis": 40,
    "gaji_militer": 40
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
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 30800,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
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
      "kekuatan_lunak": 37,
      "kekuatan_keras": 6,
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
    "kesehatan": 35,
    "pendidikan": 32,
    "keamanan": 29,
    "keuangan": 18,
    "lingkungan": 60
  }
};
