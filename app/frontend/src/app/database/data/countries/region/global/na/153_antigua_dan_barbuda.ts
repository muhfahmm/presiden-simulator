import { CountryData } from "@/app/database/data/types";
import { antigua_dan_barbuda_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_armada } from "../../modules/2_militer/2_armada_militer/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_listrik } from "../../modules/1_ekonomi/2_kelistrikan/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_profile } from "../../modules/0_profiles/na/153_antigua_dan_barbuda";
import { antigua_dan_barbuda_strategis } from "../../modules/2_militer/3_militer_strategis/na/153_antigua_dan_barbuda";

export const antigua_dan_barbuda: CountryData = {
  ...antigua_dan_barbuda_profile,
  "sektor_listrik": antigua_dan_barbuda_listrik,
  "infrastruktur": antigua_dan_barbuda_infrastruktur,
  "sektor_ekstraksi": antigua_dan_barbuda_ekstraksi,
  "sektor_manufaktur": antigua_dan_barbuda_manufaktur,
  "sektor_peternakan": antigua_dan_barbuda_peternakan,
  "sektor_agrikultur": antigua_dan_barbuda_agrikultur,
  "sektor_perikanan": antigua_dan_barbuda_perikanan,
  "sektor_olahan_pangan": antigua_dan_barbuda_olahan_pangan,
  "sektor_farmasi": antigua_dan_barbuda_farmasi,
  "sektor_pertahanan": antigua_dan_barbuda_pertahanan,
  "armada_militer": antigua_dan_barbuda_armada,
  "militer_strategis": antigua_dan_barbuda_strategis,
  "armada_kepolisian": antigua_dan_barbuda_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 12,
      "dasar": 40,
      "menengah": 2,
      "lanjutan": 13,
      "universitas": 3,
      "lembaga_pendidikan": 30,
      "laboratorium": 33,
      "observatorium": 39,
      "pusat_penelitian": 2,
      "pusat_pengembangan": 38,
      "literasi": 95
    },
    "kesehatan": {
      "rumah_sakit_besar": 1,
      "rumah_sakit_kecil": 34,
      "pusat_diagnostik": 19,
      "harapan_hidup": 14,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 3,
      "pengadilan": 15,
      "kejaksaan": 39,
      "pos_polisi": 20,
      "armada_mobil_polisi": 1019,
      "akademi_polisi": 32,
      "indeks_korupsi": 52,
      "indeks_keamanan": 83
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 5,
      "sirkuit_balap": 40,
      "stadion": 23,
      "stadion_internasional": 32
  },
  "un_vote": 12,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 21,
      "kepuasan": 67,
      "pendapatan": 3
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 15,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 25,
      "kepuasan": 86,
      "pendapatan": 5
    },
    "lingkungan": {
      "tarif": 32,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 40,
      "kepuasan": 93,
      "pendapatan": 9
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 100,
    "gaji_guru": 90,
    "gaji_medis": 100,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 21400,
    "harga_listrik": 2240,
    "harga_air": 4160,
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
      "kekuatan_lunak": 14,
      "kekuatan_keras": 3,
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
    "kesehatan": 30,
    "pendidikan": 7,
    "keamanan": 11,
    "keuangan": 27,
    "lingkungan": 60
  }
};
