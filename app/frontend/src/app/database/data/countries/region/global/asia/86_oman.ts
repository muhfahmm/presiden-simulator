import { CountryData } from "@/app/database/data/types";
import { oman_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/asia/86_oman";
import { oman_armada } from "../../modules/2_militer/2_armada_militer/asia/86_oman";
import { oman_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/asia/86_oman";
import { oman_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/asia/86_oman";
import { oman_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/asia/86_oman";
import { oman_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/asia/86_oman";
import { oman_listrik } from "../../modules/1_ekonomi/2_kelistrikan/asia/86_oman";
import { oman_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/asia/86_oman";
import { oman_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/asia/86_oman";
import { oman_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/asia/86_oman";
import { oman_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/asia/86_oman";
import { oman_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/asia/86_oman";
import { oman_profile } from "../../modules/0_profiles/asia/86_oman";
import { oman_strategis } from "../../modules/2_militer/3_militer_strategis/asia/86_oman";

export const oman: CountryData = {
  ...oman_profile,
  "sektor_listrik": oman_listrik,
  "infrastruktur": oman_infrastruktur,
  "sektor_ekstraksi": oman_ekstraksi,
  "sektor_manufaktur": oman_manufaktur,
  "sektor_peternakan": oman_peternakan,
  "sektor_agrikultur": oman_agrikultur,
  "sektor_perikanan": oman_perikanan,
  "sektor_olahan_pangan": oman_olahan_pangan,
  "sektor_farmasi": oman_farmasi,
  "sektor_pertahanan": oman_pertahanan,
  "armada_militer": oman_armada,
  "militer_strategis": oman_strategis,
  "armada_kepolisian": oman_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 11,
      "dasar": 17,
      "menengah": 17,
      "lanjutan": 12,
      "universitas": 1,
      "lembaga_pendidikan": 7,
      "laboratorium": 38,
      "observatorium": 4,
      "pusat_penelitian": 16,
      "pusat_pengembangan": 4,
      "literasi": 60
    },
    "kesehatan": {
      "rumah_sakit_besar": 11,
      "rumah_sakit_kecil": 3,
      "pusat_diagnostik": 26,
      "harapan_hidup": 20,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 4,
      "pengadilan": 6,
      "kejaksaan": 5,
      "pos_polisi": 3,
      "armada_mobil_polisi": 1122,
      "akademi_polisi": 37,
      "indeks_korupsi": 86,
      "indeks_keamanan": 50
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 1,
      "sirkuit_balap": 11,
      "stadion": 37,
      "stadion_internasional": 19
  },
  "un_vote": 165,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 13,
      "kepuasan": 67,
      "pendapatan": 33
    },
    "korporasi": {
      "tarif": 1,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 23,
      "kepuasan": 61,
      "pendapatan": 47
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 31
    },
    "lingkungan": {
      "tarif": 18,
      "kepuasan": 88,
      "pendapatan": 38
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 6 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 16 },
    "lainnya": {
      "tarif": 40,
      "kepuasan": 93,
      "pendapatan": 104
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 7700,
    "harga_gula": 28800,
    "harga_telur": 24880,
    "harga_bbm": 14980,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 241950
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
      "kekuatan_lunak": 32,
      "kekuatan_keras": 19,
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
    "kesehatan": 26,
    "pendidikan": 22,
    "keamanan": 5,
    "keuangan": 24,
    "lingkungan": 60
  }
};
