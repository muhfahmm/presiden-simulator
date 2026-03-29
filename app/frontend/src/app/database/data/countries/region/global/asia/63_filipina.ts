import { CountryData } from "@/app/database/data/types";
import { filipina_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/63_filipina";
import { filipina_armada } from "../../modules/2_militer/2_armada_militer/asia/63_filipina";
import { filipina_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/63_filipina";
import { filipina_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/63_filipina";
import { filipina_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/63_filipina";
import { filipina_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/63_filipina";
import { filipina_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/63_filipina";
import { filipina_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/63_filipina";
import { filipina_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/63_filipina";
import { filipina_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/63_filipina";
import { filipina_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/63_filipina";
import { filipina_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/63_filipina";
import { filipina_profile } from "../../modules/0_profiles/asia/63_filipina";
import { filipina_strategis } from "../../modules/2_militer/3_militer_strategis/asia/63_filipina";

export const filipina: CountryData = {
  ...filipina_profile,
  "sektor_listrik": filipina_listrik,
  "infrastruktur": filipina_infrastruktur,
  "sektor_ekstraksi": filipina_ekstraksi,
  "sektor_manufaktur": filipina_manufaktur,
  "sektor_peternakan": filipina_peternakan,
  "sektor_agrikultur": filipina_agrikultur,
  "sektor_perikanan": filipina_perikanan,
  "sektor_olahan_pangan": filipina_olahan_pangan,
  "sektor_farmasi": filipina_farmasi,
  "sektor_pertahanan": filipina_pertahanan,
  "armada_militer": filipina_armada,
  "militer_strategis": filipina_strategis,
  "armada_kepolisian": filipina_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 14,
      "dasar": 39,
      "menengah": 15,
      "lanjutan": 35,
      "universitas": 40,
      "lembaga_pendidikan": 32,
      "laboratorium": 40,
      "observatorium": 20,
      "pusat_penelitian": 28,
      "pusat_pengembangan": 32,
      "literasi": 88
    },
    "kesehatan": {
      "rumah_sakit_besar": 31,
      "rumah_sakit_kecil": 29,
      "pusat_diagnostik": 25,
      "harapan_hidup": 16,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 17,
      "pengadilan": 40,
      "kejaksaan": 20,
      "pos_polisi": 35,
      "armada_mobil_polisi": 600,
      "akademi_polisi": 24,
      "indeks_korupsi": 87,
      "indeks_keamanan": 73
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 31,
      "sirkuit_balap": 15,
      "stadion": 39,
      "stadion_internasional": 12
  },
  "un_vote": 139,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 34,
      "kepuasan": 67,
      "pendapatan": 201
    },
    "korporasi": {
      "tarif": 5,
      "kepuasan": 52,
      "pendapatan": 44
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 279
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 81
    },
    "lingkungan": {
      "tarif": 27,
      "kepuasan": 88,
      "pendapatan": 149
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 22 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 64 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 69
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 60,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
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
      "kekuatan_lunak": 8,
      "kekuatan_keras": 21,
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
    "kesehatan": 13,
    "pendidikan": 36,
    "keamanan": 30,
    "keuangan": 32,
    "lingkungan": 60
  }
};
