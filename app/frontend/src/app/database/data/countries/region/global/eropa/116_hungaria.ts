import { CountryData } from "@/app/database/data/types";
import { hungaria_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/eropa/116_hungaria";
import { hungaria_armada } from "../../modules/2_militer/2_armada_militer/eropa/116_hungaria";
import { hungaria_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/eropa/116_hungaria";
import { hungaria_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/eropa/116_hungaria";
import { hungaria_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/eropa/116_hungaria";
import { hungaria_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/eropa/116_hungaria";
import { hungaria_listrik } from "../../modules/1_ekonomi/2_kelistrikan/eropa/116_hungaria";
import { hungaria_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/eropa/116_hungaria";
import { hungaria_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/eropa/116_hungaria";
import { hungaria_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/eropa/116_hungaria";
import { hungaria_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/eropa/116_hungaria";
import { hungaria_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/eropa/116_hungaria";
import { hungaria_profile } from "../../modules/0_profiles/eropa/116_hungaria";
import { hungaria_strategis } from "../../modules/2_militer/3_militer_strategis/eropa/116_hungaria";

export const hungaria: CountryData = {
  ...hungaria_profile,
  "sektor_listrik": hungaria_listrik,
  "infrastruktur": hungaria_infrastruktur,
  "sektor_ekstraksi": hungaria_ekstraksi,
  "sektor_manufaktur": hungaria_manufaktur,
  "sektor_peternakan": hungaria_peternakan,
  "sektor_agrikultur": hungaria_agrikultur,
  "sektor_perikanan": hungaria_perikanan,
  "sektor_olahan_pangan": hungaria_olahan_pangan,
  "sektor_farmasi": hungaria_farmasi,
  "sektor_pertahanan": hungaria_pertahanan,
  "armada_militer": hungaria_armada,
  "militer_strategis": hungaria_strategis,
  "armada_kepolisian": hungaria_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 2,
      "dasar": 17,
      "menengah": 34,
      "lanjutan": 37,
      "universitas": 27,
      "lembaga_pendidikan": 9,
      "laboratorium": 27,
      "observatorium": 36,
      "pusat_penelitian": 15,
      "pusat_pengembangan": 1,
      "literasi": 74
    },
    "kesehatan": {
      "rumah_sakit_besar": 38,
      "rumah_sakit_kecil": 27,
      "pusat_diagnostik": 6,
      "harapan_hidup": 17,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 40,
      "pengadilan": 24,
      "kejaksaan": 8,
      "pos_polisi": 40,
      "armada_mobil_polisi": 5808,
      "akademi_polisi": 19,
      "indeks_korupsi": 72,
      "indeks_keamanan": 69
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 27,
      "sirkuit_balap": 6,
      "stadion": 25,
      "stadion_internasional": 30
  },
  "un_vote": 94,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 2,
      "kepuasan": 67,
      "pendapatan": 8
    },
    "korporasi": {
      "tarif": 19,
      "kepuasan": 52,
      "pendapatan": 62
    },
    "penghasilan": {
      "tarif": 12,
      "kepuasan": 61,
      "pendapatan": 62
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 188
    },
    "lingkungan": {
      "tarif": 29,
      "kepuasan": 88,
      "pendapatan": 66
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 11 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 31 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 5
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 145740,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 126320,
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
      "kekuatan_lunak": 1,
      "kekuatan_keras": 16,
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
    "kesehatan": 18,
    "pendidikan": 24,
    "keamanan": 9,
    "keuangan": 26,
    "lingkungan": 60
  }
};
