import { CountryData } from "@/app/database/data/types";
import { republik_demokratik_kongo_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_armada } from "../../modules/2_militer/2_armada_militer/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_profile } from "../../modules/0_profiles/afrika/38_republik_demokratik_kongo";
import { republik_demokratik_kongo_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/38_republik_demokratik_kongo";

export const republik_demokratik_kongo: CountryData = {
  ...republik_demokratik_kongo_profile,
  "sektor_listrik": republik_demokratik_kongo_listrik,
  "infrastruktur": republik_demokratik_kongo_infrastruktur,
  "sektor_ekstraksi": republik_demokratik_kongo_ekstraksi,
  "sektor_manufaktur": republik_demokratik_kongo_manufaktur,
  "sektor_peternakan": republik_demokratik_kongo_peternakan,
  "sektor_agrikultur": republik_demokratik_kongo_agrikultur,
  "sektor_perikanan": republik_demokratik_kongo_perikanan,
  "sektor_olahan_pangan": republik_demokratik_kongo_olahan_pangan,
  "sektor_farmasi": republik_demokratik_kongo_farmasi,
  "sektor_pertahanan": republik_demokratik_kongo_pertahanan,
  "armada_militer": republik_demokratik_kongo_armada,
  "militer_strategis": republik_demokratik_kongo_strategis,
  "armada_kepolisian": republik_demokratik_kongo_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 35,
      "dasar": 34,
      "menengah": 40,
      "lanjutan": 8,
      "universitas": 19,
      "lembaga_pendidikan": 38,
      "laboratorium": 12,
      "observatorium": 27,
      "pusat_penelitian": 13,
      "pusat_pengembangan": 40,
      "literasi": 84
  },
    "kesehatan": {
      "rumah_sakit_besar": 16,
      "rumah_sakit_kecil": 40,
      "pusat_diagnostik": 22,
      "harapan_hidup": 30,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 8,
      "pengadilan": 1,
      "kejaksaan": 40,
      "pos_polisi": 23,
      "armada_mobil_polisi": 7514,
      "akademi_polisi": 31,
      "indeks_korupsi": 76,
      "indeks_keamanan": 70
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 38,
      "sirkuit_balap": 26,
      "stadion": 16,
      "stadion_internasional": 26
  },
  "un_vote": 136,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 29,
      "kepuasan": 67,
      "pendapatan": 50
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 49
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 23
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 54
    },
    "lingkungan": {
      "tarif": 4,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 10 },
    "lainnya": {
      "tarif": 9,
      "kepuasan": 93,
      "pendapatan": 9
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 7200,
    "harga_telur": 15550,
    "harga_bbm": 10700,
    "harga_listrik": 3200,
    "harga_air": 5200,
    "harga_obat": 221060,
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
      "kekuatan_lunak": 25,
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
    "kesehatan": 28,
    "pendidikan": 24,
    "keamanan": 9,
    "keuangan": 34,
    "lingkungan": 60
  }
};
