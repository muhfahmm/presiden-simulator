import { CountryData } from "@/app/database/data/types";
import { tahiti_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/oceania/191_tahiti";
import { tahiti_armada } from "../../modules/2_militer/2_armada_militer/oceania/191_tahiti";
import { tahiti_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/oceania/191_tahiti";
import { tahiti_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/oceania/191_tahiti";
import { tahiti_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/oceania/191_tahiti";
import { tahiti_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/oceania/191_tahiti";
import { tahiti_listrik } from "../../modules/1_ekonomi/2_kelistrikan/oceania/191_tahiti";
import { tahiti_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/oceania/191_tahiti";
import { tahiti_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/oceania/191_tahiti";
import { tahiti_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/oceania/191_tahiti";
import { tahiti_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/oceania/191_tahiti";
import { tahiti_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/oceania/191_tahiti";
import { tahiti_profile } from "../../modules/0_profiles/oceania/191_tahiti";
import { tahiti_strategis } from "../../modules/2_militer/3_militer_strategis/oceania/191_tahiti";

export const tahiti: CountryData = {
  ...tahiti_profile,
  "sektor_listrik": tahiti_listrik,
  "infrastruktur": tahiti_infrastruktur,
  "sektor_ekstraksi": tahiti_ekstraksi,
  "sektor_manufaktur": tahiti_manufaktur,
  "sektor_peternakan": tahiti_peternakan,
  "sektor_agrikultur": tahiti_agrikultur,
  "sektor_perikanan": tahiti_perikanan,
  "sektor_olahan_pangan": tahiti_olahan_pangan,
  "sektor_farmasi": tahiti_farmasi,
  "sektor_pertahanan": tahiti_pertahanan,
  "armada_militer": tahiti_armada,
  "militer_strategis": tahiti_strategis,
  "armada_kepolisian": tahiti_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 40,
      "dasar": 12,
      "menengah": 17,
      "lanjutan": 40,
      "universitas": 33,
      "lembaga_pendidikan": 20,
      "laboratorium": 29,
      "observatorium": 37,
      "pusat_penelitian": 9,
      "pusat_pengembangan": 37,
      "literasi": 56
    },
    "kesehatan": {
      "rumah_sakit_besar": 12,
      "rumah_sakit_kecil": 13,
      "pusat_diagnostik": 12,
      "harapan_hidup": 40,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 32,
      "pengadilan": 11,
      "kejaksaan": 18,
      "pos_polisi": 39,
      "armada_mobil_polisi": 8885,
      "akademi_polisi": 27,
      "indeks_korupsi": 82,
      "indeks_keamanan": 94
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 19,
      "sirkuit_balap": 1,
      "stadion": 22,
      "stadion_internasional": 1
  },
  "un_vote": 81,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 38,
      "kepuasan": 67,
      "pendapatan": 7
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 4
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 22,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 2,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 80,
    "gaji_medis": 80,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 157900,
    "harga_pendidikan": 677460
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
      "kekuatan_keras": 37,
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
    "kesehatan": 38,
    "pendidikan": 10,
    "keamanan": 18,
    "keuangan": 37,
    "lingkungan": 60
  }
};
