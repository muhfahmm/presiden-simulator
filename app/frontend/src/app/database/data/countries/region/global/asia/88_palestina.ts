import { CountryData } from "@/app/database/data/types";
import { palestina_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/88_palestina";
import { palestina_armada } from "../../modules/2_militer/2_armada_militer/asia/88_palestina";
import { palestina_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/88_palestina";
import { palestina_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/88_palestina";
import { palestina_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/88_palestina";
import { palestina_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/88_palestina";
import { palestina_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/88_palestina";
import { palestina_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/88_palestina";
import { palestina_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/88_palestina";
import { palestina_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/88_palestina";
import { palestina_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/88_palestina";
import { palestina_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/88_palestina";
import { palestina_profile } from "../../modules/0_profiles/asia/88_palestina";
import { palestina_strategis } from "../../modules/2_militer/3_militer_strategis/asia/88_palestina";

export const palestina: CountryData = {
  ...palestina_profile,
  "sektor_listrik": palestina_listrik,
  "infrastruktur": palestina_infrastruktur,
  "sektor_ekstraksi": palestina_ekstraksi,
  "sektor_manufaktur": palestina_manufaktur,
  "sektor_peternakan": palestina_peternakan,
  "sektor_agrikultur": palestina_agrikultur,
  "sektor_perikanan": palestina_perikanan,
  "sektor_olahan_pangan": palestina_olahan_pangan,
  "sektor_farmasi": palestina_farmasi,
  "sektor_pertahanan": palestina_pertahanan,
  "armada_militer": palestina_armada,
  "militer_strategis": palestina_strategis,
  "armada_kepolisian": palestina_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 35,
      "dasar": 21,
      "menengah": 33,
      "lanjutan": 28,
      "universitas": 5,
      "lembaga_pendidikan": 33,
      "laboratorium": 36,
      "observatorium": 1,
      "pusat_penelitian": 26,
      "pusat_pengembangan": 28,
      "literasi": 64
    },
    "kesehatan": {
      "rumah_sakit_besar": 9,
      "rumah_sakit_kecil": 39,
      "pusat_diagnostik": 38,
      "harapan_hidup": 27,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 39,
      "pengadilan": 34,
      "kejaksaan": 35,
      "pos_polisi": 19,
      "armada_mobil_polisi": 1999,
      "akademi_polisi": 6,
      "indeks_korupsi": 72,
      "indeks_keamanan": 90
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 3,
      "sirkuit_balap": 20,
      "stadion": 29,
      "stadion_internasional": 9
  },
  "un_vote": 40,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 20,
      "kepuasan": 67,
      "pendapatan": 9
    },
    "korporasi": {
      "tarif": 27,
      "kepuasan": 52,
      "pendapatan": 11
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 11
    },
    "bea_cukai": {
      "tarif": 33,
      "kepuasan": 86,
      "pendapatan": 11
    },
    "lingkungan": {
      "tarif": 35,
      "kepuasan": 88,
      "pendapatan": 17
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 70,
    "gaji_medis": 80,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 24880,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 315800,
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
      "kekuatan_lunak": 22,
      "kekuatan_keras": 9,
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
    "kesehatan": 6,
    "pendidikan": 15,
    "keamanan": 33,
    "keuangan": 7,
    "lingkungan": 60
  }
};
