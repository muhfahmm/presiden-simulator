import { CountryData } from "@/app/database/data/types";
import { kroasia_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/124_kroasia";
import { kroasia_armada } from "../../modules/2_militer/2_armada_militer/eropa/124_kroasia";
import { kroasia_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/124_kroasia";
import { kroasia_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/124_kroasia";
import { kroasia_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/124_kroasia";
import { kroasia_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/124_kroasia";
import { kroasia_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/124_kroasia";
import { kroasia_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/124_kroasia";
import { kroasia_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/124_kroasia";
import { kroasia_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/124_kroasia";
import { kroasia_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/124_kroasia";
import { kroasia_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/124_kroasia";
import { kroasia_profile } from "../../modules/0_profiles/eropa/124_kroasia";
import { kroasia_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/124_kroasia";

export const kroasia: CountryData = {
  ...kroasia_profile,
  "sektor_listrik": kroasia_listrik,
  "infrastruktur": kroasia_infrastruktur,
  "sektor_ekstraksi": kroasia_ekstraksi,
  "sektor_manufaktur": kroasia_manufaktur,
  "sektor_peternakan": kroasia_peternakan,
  "sektor_agrikultur": kroasia_agrikultur,
  "sektor_perikanan": kroasia_perikanan,
  "sektor_olahan_pangan": kroasia_olahan_pangan,
  "sektor_farmasi": kroasia_farmasi,
  "sektor_pertahanan": kroasia_pertahanan,
  "armada_militer": kroasia_armada,
  "militer_strategis": kroasia_strategis,
  "armada_kepolisian": kroasia_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 28,
      "dasar": 13,
      "menengah": 35,
      "lanjutan": 19,
      "universitas": 40,
      "lembaga_pendidikan": 8,
      "laboratorium": 22,
      "observatorium": 4,
      "pusat_penelitian": 30,
      "pusat_pengembangan": 20,
      "literasi": 55
    },
    "kesehatan": {
      "rumah_sakit_besar": 9,
      "rumah_sakit_kecil": 16,
      "pusat_diagnostik": 26,
      "harapan_hidup": 22,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 11,
      "pengadilan": 12,
      "kejaksaan": 21,
      "pos_polisi": 22,
      "armada_mobil_polisi": 6330,
      "akademi_polisi": 9,
      "indeks_korupsi": 62,
      "indeks_keamanan": 91
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 37,
      "sirkuit_balap": 37,
      "stadion": 32,
      "stadion_internasional": 12
  },
  "un_vote": 129,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 5,
      "kepuasan": 67,
      "pendapatan": 9
    },
    "korporasi": {
      "tarif": 21,
      "kepuasan": 52,
      "pendapatan": 33
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 55
    },
    "bea_cukai": {
      "tarif": 39,
      "kepuasan": 86,
      "pendapatan": 63
    },
    "lingkungan": {
      "tarif": 20,
      "kepuasan": 88,
      "pendapatan": 27
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 12 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 22
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 83280,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 800,
    "harga_air": 4160,
    "harga_obat": 126320,
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
      "kekuatan_keras": 2,
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
    "kesehatan": 36,
    "pendidikan": 8,
    "keamanan": 33,
    "keuangan": 35,
    "lingkungan": 60
  }
};
