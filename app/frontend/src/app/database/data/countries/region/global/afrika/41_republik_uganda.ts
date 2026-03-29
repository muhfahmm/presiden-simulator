import { CountryData } from "@/app/database/data/types";
import { republik_uganda_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/41_republik_uganda";
import { republik_uganda_armada } from "../../modules/2_militer/2_armada_militer/afrika/41_republik_uganda";
import { republik_uganda_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/41_republik_uganda";
import { republik_uganda_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/41_republik_uganda";
import { republik_uganda_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/41_republik_uganda";
import { republik_uganda_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/41_republik_uganda";
import { republik_uganda_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/41_republik_uganda";
import { republik_uganda_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/41_republik_uganda";
import { republik_uganda_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/41_republik_uganda";
import { republik_uganda_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/41_republik_uganda";
import { republik_uganda_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/41_republik_uganda";
import { republik_uganda_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/41_republik_uganda";
import { republik_uganda_profile } from "../../modules/0_profiles/afrika/41_republik_uganda";
import { republik_uganda_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/41_republik_uganda";

export const republik_uganda: CountryData = {
  ...republik_uganda_profile,
  "sektor_listrik": republik_uganda_listrik,
  "infrastruktur": republik_uganda_infrastruktur,
  "sektor_ekstraksi": republik_uganda_ekstraksi,
  "sektor_manufaktur": republik_uganda_manufaktur,
  "sektor_peternakan": republik_uganda_peternakan,
  "sektor_agrikultur": republik_uganda_agrikultur,
  "sektor_perikanan": republik_uganda_perikanan,
  "sektor_olahan_pangan": republik_uganda_olahan_pangan,
  "sektor_farmasi": republik_uganda_farmasi,
  "sektor_pertahanan": republik_uganda_pertahanan,
  "armada_militer": republik_uganda_armada,
  "militer_strategis": republik_uganda_strategis,
  "armada_kepolisian": republik_uganda_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 20,
      "dasar": 5,
      "menengah": 4,
      "lanjutan": 7,
      "universitas": 18,
      "lembaga_pendidikan": 2,
      "laboratorium": 20,
      "observatorium": 2,
      "pusat_penelitian": 23,
      "pusat_pengembangan": 25,
      "literasi": 68
  },
    "kesehatan": {
      "rumah_sakit_besar": 24,
      "rumah_sakit_kecil": 11,
      "pusat_diagnostik": 8,
      "harapan_hidup": 13,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 37,
      "pengadilan": 20,
      "kejaksaan": 25,
      "pos_polisi": 3,
      "armada_mobil_polisi": 5182,
      "akademi_polisi": 33,
      "indeks_korupsi": 78,
      "indeks_keamanan": 51
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 33,
      "sirkuit_balap": 3,
      "stadion": 4,
      "stadion_internasional": 40
  },
  "un_vote": 101,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 37,
      "kepuasan": 67,
      "pendapatan": 21
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 46
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 18
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 11
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 8 },
    "lainnya": {
      "tarif": 30,
      "kepuasan": 93,
      "pendapatan": 36
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 50,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
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
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 62200,
    "harga_bbm": 8560,
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
      "kekuatan_lunak": 20,
      "kekuatan_keras": 10,
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
    "pendidikan": 17,
    "keamanan": 28,
    "keuangan": 37,
    "lingkungan": 60
  }
};
