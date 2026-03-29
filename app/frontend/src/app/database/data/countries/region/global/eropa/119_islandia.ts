import { CountryData } from "@/app/database/data/types";
import { islandia_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/119_islandia";
import { islandia_armada } from "../../modules/2_militer/2_armada_militer/eropa/119_islandia";
import { islandia_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/119_islandia";
import { islandia_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/119_islandia";
import { islandia_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/119_islandia";
import { islandia_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/119_islandia";
import { islandia_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/119_islandia";
import { islandia_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/119_islandia";
import { islandia_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/119_islandia";
import { islandia_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/119_islandia";
import { islandia_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/119_islandia";
import { islandia_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/119_islandia";
import { islandia_profile } from "../../modules/0_profiles/eropa/119_islandia";
import { islandia_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/119_islandia";

export const islandia: CountryData = {
  ...islandia_profile,
  "sektor_listrik": islandia_listrik,
  "infrastruktur": islandia_infrastruktur,
  "sektor_ekstraksi": islandia_ekstraksi,
  "sektor_manufaktur": islandia_manufaktur,
  "sektor_peternakan": islandia_peternakan,
  "sektor_agrikultur": islandia_agrikultur,
  "sektor_perikanan": islandia_perikanan,
  "sektor_olahan_pangan": islandia_olahan_pangan,
  "sektor_farmasi": islandia_farmasi,
  "sektor_pertahanan": islandia_pertahanan,
  "armada_militer": islandia_armada,
  "militer_strategis": islandia_strategis,
  "armada_kepolisian": islandia_kepolisian,
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
      "menengah": 3,
      "lanjutan": 29,
      "universitas": 37,
      "lembaga_pendidikan": 34,
      "laboratorium": 11,
      "observatorium": 16,
      "pusat_penelitian": 13,
      "pusat_pengembangan": 18,
      "literasi": 57
    },
    "kesehatan": {
      "rumah_sakit_besar": 29,
      "rumah_sakit_kecil": 12,
      "pusat_diagnostik": 5,
      "harapan_hidup": 33,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 1,
      "pengadilan": 9,
      "kejaksaan": 8,
      "pos_polisi": 22,
      "armada_mobil_polisi": 1677,
      "akademi_polisi": 14,
      "indeks_korupsi": 59,
      "indeks_keamanan": 83
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 40,
      "sirkuit_balap": 7,
      "stadion": 3,
      "stadion_internasional": 27
  },
  "un_vote": 103,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 22
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 8
    },
    "lingkungan": {
      "tarif": 9,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 6
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 15550,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 157900,
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
      "kekuatan_lunak": 29,
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
    "kesehatan": 32,
    "pendidikan": 28,
    "keamanan": 9,
    "keuangan": 22,
    "lingkungan": 60
  }
};
