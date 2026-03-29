import { CountryData } from "@/app/database/data/types";
import { jerman_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/121_jerman";
import { jerman_armada } from "../../modules/2_militer/2_armada_militer/eropa/121_jerman";
import { jerman_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/121_jerman";
import { jerman_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/121_jerman";
import { jerman_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/121_jerman";
import { jerman_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/121_jerman";
import { jerman_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/121_jerman";
import { jerman_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/121_jerman";
import { jerman_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/121_jerman";
import { jerman_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/121_jerman";
import { jerman_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/121_jerman";
import { jerman_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/121_jerman";
import { jerman_profile } from "../../modules/0_profiles/eropa/121_jerman";
import { jerman_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/121_jerman";

export const jerman: CountryData = {
  ...jerman_profile,
  "sektor_listrik": jerman_listrik,
  "infrastruktur": jerman_infrastruktur,
  "sektor_ekstraksi": jerman_ekstraksi,
  "sektor_manufaktur": jerman_manufaktur,
  "sektor_peternakan": jerman_peternakan,
  "sektor_agrikultur": jerman_agrikultur,
  "sektor_perikanan": jerman_perikanan,
  "sektor_olahan_pangan": jerman_olahan_pangan,
  "sektor_farmasi": jerman_farmasi,
  "sektor_pertahanan": jerman_pertahanan,
  "armada_militer": jerman_armada,
  "militer_strategis": jerman_strategis,
  "armada_kepolisian": jerman_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 11,
      "dasar": 25,
      "menengah": 18,
      "lanjutan": 15,
      "universitas": 1,
      "lembaga_pendidikan": 10,
      "laboratorium": 6,
      "observatorium": 15,
      "pusat_penelitian": 30,
      "pusat_pengembangan": 28,
      "literasi": 84
    },
    "kesehatan": {
      "rumah_sakit_besar": 31,
      "rumah_sakit_kecil": 25,
      "pusat_diagnostik": 28,
      "harapan_hidup": 4,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 10,
      "pengadilan": 8,
      "kejaksaan": 7,
      "pos_polisi": 33,
      "armada_mobil_polisi": 542,
      "akademi_polisi": 10,
      "indeks_korupsi": 69,
      "indeks_keamanan": 87
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 18,
      "sirkuit_balap": 2,
      "stadion": 40,
      "stadion_internasional": 35
  },
  "un_vote": 197,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 12,
      "kepuasan": 67,
      "pendapatan": 1299
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 283
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 1963
    },
    "bea_cukai": {
      "tarif": 9,
      "kepuasan": 86,
      "pendapatan": 775
    },
    "lingkungan": {
      "tarif": 33,
      "kepuasan": 88,
      "pendapatan": 1581
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 224 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 670 },
    "lainnya": {
      "tarif": 12,
      "kepuasan": 93,
      "pendapatan": 931
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 145740,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 10400,
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
      "kekuatan_lunak": 30,
      "kekuatan_keras": 18,
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
    "pendidikan": 35,
    "keamanan": 12,
    "keuangan": 17,
    "lingkungan": 60
  }
};
