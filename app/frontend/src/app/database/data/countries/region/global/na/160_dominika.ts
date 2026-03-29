import { CountryData } from "@/app/database/data/types";
import { dominika_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/na/160_dominika";
import { dominika_armada } from "../../modules/2_militer/2_armada_militer/na/160_dominika";
import { dominika_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/na/160_dominika";
import { dominika_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/na/160_dominika";
import { dominika_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/na/160_dominika";
import { dominika_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/na/160_dominika";
import { dominika_listrik } from "../../modules/1_ekonomi/2_kelistrikan/na/160_dominika";
import { dominika_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/na/160_dominika";
import { dominika_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/na/160_dominika";
import { dominika_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/na/160_dominika";
import { dominika_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/na/160_dominika";
import { dominika_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/na/160_dominika";
import { dominika_profile } from "../../modules/0_profiles/na/160_dominika";
import { dominika_strategis } from "../../modules/2_militer/3_militer_strategis/na/160_dominika";

export const dominika: CountryData = {
  ...dominika_profile,
  "sektor_listrik": dominika_listrik,
  "infrastruktur": dominika_infrastruktur,
  "sektor_ekstraksi": dominika_ekstraksi,
  "sektor_manufaktur": dominika_manufaktur,
  "sektor_peternakan": dominika_peternakan,
  "sektor_agrikultur": dominika_agrikultur,
  "sektor_perikanan": dominika_perikanan,
  "sektor_olahan_pangan": dominika_olahan_pangan,
  "sektor_farmasi": dominika_farmasi,
  "sektor_pertahanan": dominika_pertahanan,
  "armada_militer": dominika_armada,
  "militer_strategis": dominika_strategis,
  "armada_kepolisian": dominika_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 32,
      "dasar": 10,
      "menengah": 18,
      "lanjutan": 30,
      "universitas": 28,
      "lembaga_pendidikan": 19,
      "laboratorium": 40,
      "observatorium": 4,
      "pusat_penelitian": 5,
      "pusat_pengembangan": 36,
      "literasi": 84
    },
    "kesehatan": {
      "rumah_sakit_besar": 6,
      "rumah_sakit_kecil": 24,
      "pusat_diagnostik": 33,
      "harapan_hidup": 35,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 9,
      "pengadilan": 2,
      "kejaksaan": 16,
      "pos_polisi": 3,
      "armada_mobil_polisi": 7579,
      "akademi_polisi": 28,
      "indeks_korupsi": 88,
      "indeks_keamanan": 86
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 34,
      "sirkuit_balap": 2,
      "stadion": 31,
      "stadion_internasional": 4
  },
  "un_vote": 54,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 10,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 25,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 5,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
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
    "harga_beras": 12800,
    "harga_daging_sapi": 145740,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 5350,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 126320,
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
      "kekuatan_lunak": 21,
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
    "kesehatan": 11,
    "pendidikan": 39,
    "keamanan": 8,
    "keuangan": 39,
    "lingkungan": 60
  }
};
