import { CountryData } from "@/app/database/data/types";
import { curacao_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/na/159_curacao";
import { curacao_armada } from "../../modules/2_militer/2_armada_militer/na/159_curacao";
import { curacao_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/na/159_curacao";
import { curacao_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/na/159_curacao";
import { curacao_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/na/159_curacao";
import { curacao_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/na/159_curacao";
import { curacao_listrik } from "../../modules/1_ekonomi/2_kelistrikan/na/159_curacao";
import { curacao_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/na/159_curacao";
import { curacao_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/na/159_curacao";
import { curacao_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/na/159_curacao";
import { curacao_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/na/159_curacao";
import { curacao_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/na/159_curacao";
import { curacao_profile } from "../../modules/0_profiles/na/159_curacao";
import { curacao_strategis } from "../../modules/2_militer/3_militer_strategis/na/159_curacao";

export const curacao: CountryData = {
  ...curacao_profile,
  "sektor_listrik": curacao_listrik,
  "infrastruktur": curacao_infrastruktur,
  "sektor_ekstraksi": curacao_ekstraksi,
  "sektor_manufaktur": curacao_manufaktur,
  "sektor_peternakan": curacao_peternakan,
  "sektor_agrikultur": curacao_agrikultur,
  "sektor_perikanan": curacao_perikanan,
  "sektor_olahan_pangan": curacao_olahan_pangan,
  "sektor_farmasi": curacao_farmasi,
  "sektor_pertahanan": curacao_pertahanan,
  "armada_militer": curacao_armada,
  "militer_strategis": curacao_strategis,
  "armada_kepolisian": curacao_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 3,
      "dasar": 31,
      "menengah": 24,
      "lanjutan": 13,
      "universitas": 17,
      "lembaga_pendidikan": 9,
      "laboratorium": 14,
      "observatorium": 1,
      "pusat_penelitian": 27,
      "pusat_pengembangan": 13,
      "literasi": 78
    },
    "kesehatan": {
      "rumah_sakit_besar": 32,
      "rumah_sakit_kecil": 23,
      "pusat_diagnostik": 17,
      "harapan_hidup": 35,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 11,
      "pengadilan": 1,
      "kejaksaan": 17,
      "pos_polisi": 39,
      "armada_mobil_polisi": 5296,
      "akademi_polisi": 22,
      "indeks_korupsi": 78,
      "indeks_keamanan": 79
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 25,
      "sirkuit_balap": 4,
      "stadion": 17,
      "stadion_internasional": 38
  },
  "un_vote": 16,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 23,
      "kepuasan": 67,
      "pendapatan": 6
    },
    "korporasi": {
      "tarif": 39,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 40,
      "kepuasan": 61,
      "pendapatan": 11
    },
    "bea_cukai": {
      "tarif": 2,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 40,
      "kepuasan": 88,
      "pendapatan": 8
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
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 208200,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 15550,
    "harga_bbm": 14980,
    "harga_listrik": 3200,
    "harga_air": 4160,
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
      "kekuatan_lunak": 27,
      "kekuatan_keras": 6,
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
    "kesehatan": 37,
    "pendidikan": 17,
    "keamanan": 32,
    "keuangan": 31,
    "lingkungan": 60
  }
};
