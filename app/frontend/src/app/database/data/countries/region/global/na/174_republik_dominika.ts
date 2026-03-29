import { CountryData } from "@/app/database/data/types";
import { republik_dominika_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/na/174_republik_dominika";
import { republik_dominika_armada } from "../../modules/2_militer/2_armada_militer/na/174_republik_dominika";
import { republik_dominika_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/na/174_republik_dominika";
import { republik_dominika_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/na/174_republik_dominika";
import { republik_dominika_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/na/174_republik_dominika";
import { republik_dominika_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/na/174_republik_dominika";
import { republik_dominika_listrik } from "../../modules/1_ekonomi/2_kelistrikan/na/174_republik_dominika";
import { republik_dominika_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/na/174_republik_dominika";
import { republik_dominika_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/na/174_republik_dominika";
import { republik_dominika_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/na/174_republik_dominika";
import { republik_dominika_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/na/174_republik_dominika";
import { republik_dominika_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/na/174_republik_dominika";
import { republik_dominika_profile } from "../../modules/0_profiles/na/174_republik_dominika";
import { republik_dominika_strategis } from "../../modules/2_militer/3_militer_strategis/na/174_republik_dominika";

export const republik_dominika: CountryData = {
  ...republik_dominika_profile,
  "sektor_listrik": republik_dominika_listrik,
  "infrastruktur": republik_dominika_infrastruktur,
  "sektor_ekstraksi": republik_dominika_ekstraksi,
  "sektor_manufaktur": republik_dominika_manufaktur,
  "sektor_peternakan": republik_dominika_peternakan,
  "sektor_agrikultur": republik_dominika_agrikultur,
  "sektor_perikanan": republik_dominika_perikanan,
  "sektor_olahan_pangan": republik_dominika_olahan_pangan,
  "sektor_farmasi": republik_dominika_farmasi,
  "sektor_pertahanan": republik_dominika_pertahanan,
  "armada_militer": republik_dominika_armada,
  "militer_strategis": republik_dominika_strategis,
  "armada_kepolisian": republik_dominika_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 10,
      "dasar": 13,
      "menengah": 20,
      "lanjutan": 3,
      "universitas": 28,
      "lembaga_pendidikan": 20,
      "laboratorium": 7,
      "observatorium": 19,
      "pusat_penelitian": 34,
      "pusat_pengembangan": 14,
      "literasi": 62
    },
    "kesehatan": {
      "rumah_sakit_besar": 40,
      "rumah_sakit_kecil": 3,
      "pusat_diagnostik": 4,
      "harapan_hidup": 26,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 28,
      "pengadilan": 4,
      "kejaksaan": 6,
      "pos_polisi": 12,
      "armada_mobil_polisi": 3984,
      "akademi_polisi": 4,
      "indeks_korupsi": 85,
      "indeks_keamanan": 84
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 28,
      "sirkuit_balap": 35,
      "stadion": 7,
      "stadion_internasional": 31
  },
  "un_vote": 45,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 37,
      "kepuasan": 67,
      "pendapatan": 64
    },
    "korporasi": {
      "tarif": 1,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 34
    },
    "bea_cukai": {
      "tarif": 12,
      "kepuasan": 86,
      "pendapatan": 28
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 6 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 17 },
    "lainnya": {
      "tarif": 29,
      "kepuasan": 93,
      "pendapatan": 44
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 100,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 3200,
    "harga_air": 7280,
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
      "kekuatan_lunak": 8,
      "kekuatan_keras": 7,
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
    "kesehatan": 20,
    "pendidikan": 20,
    "keamanan": 9,
    "keuangan": 25,
    "lingkungan": 60
  }
};
