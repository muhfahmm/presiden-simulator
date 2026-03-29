import { CountryData } from "@/app/database/data/types";
import { benin_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/afrika/4_benin";
import { benin_armada } from "../../modules/2_militer/2_armada_militer/afrika/4_benin";
import { benin_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/afrika/4_benin";
import { benin_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/afrika/4_benin";
import { benin_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/afrika/4_benin";
import { benin_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/afrika/4_benin";
import { benin_listrik } from "../../modules/1_ekonomi/2_kelistrikan/afrika/4_benin";
import { benin_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/afrika/4_benin";
import { benin_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/afrika/4_benin";
import { benin_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/afrika/4_benin";
import { benin_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/afrika/4_benin";
import { benin_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/afrika/4_benin";
import { benin_profile } from "../../modules/0_profiles/afrika/4_benin";
import { benin_strategis } from "../../modules/2_militer/3_militer_strategis/afrika/4_benin";

export const benin: CountryData = {
  ...benin_profile,
  "sektor_listrik": benin_listrik,
  "infrastruktur": benin_infrastruktur,
  "sektor_ekstraksi": benin_ekstraksi,
  "sektor_manufaktur": benin_manufaktur,
  "sektor_peternakan": benin_peternakan,
  "sektor_agrikultur": benin_agrikultur,
  "sektor_perikanan": benin_perikanan,
  "sektor_olahan_pangan": benin_olahan_pangan,
  "sektor_farmasi": benin_farmasi,
  "sektor_pertahanan": benin_pertahanan,
  "armada_militer": benin_armada,
  "militer_strategis": benin_strategis,
  "armada_kepolisian": benin_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 18,
      "dasar": 28,
      "menengah": 25,
      "lanjutan": 21,
      "universitas": 38,
      "lembaga_pendidikan": 27,
      "laboratorium": 8,
      "observatorium": 33,
      "pusat_penelitian": 17,
      "pusat_pengembangan": 36,
      "literasi": 87
  },
    "kesehatan": {
      "rumah_sakit_besar": 17,
      "rumah_sakit_kecil": 19,
      "pusat_diagnostik": 17,
      "harapan_hidup": 6,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 13,
      "pengadilan": 20,
      "kejaksaan": 7,
      "pos_polisi": 36,
      "armada_mobil_polisi": 7222,
      "akademi_polisi": 33,
      "indeks_korupsi": 71,
      "indeks_keamanan": 55
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 40,
      "sirkuit_balap": 33,
      "stadion": 9,
      "stadion_internasional": 13
  },
  "un_vote": 62,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 18,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 18,
      "kepuasan": 52,
      "pendapatan": 7
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 11
    },
    "bea_cukai": {
      "tarif": 24,
      "kepuasan": 86,
      "pendapatan": 8
    },
    "lingkungan": {
      "tarif": 22,
      "kepuasan": 88,
      "pendapatan": 5
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 29,
      "kepuasan": 93,
      "pendapatan": 12
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================
  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 40,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================
  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 52050,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 2600,
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
      "kekuatan_lunak": 1,
      "kekuatan_keras": 31,
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
    "kesehatan": 22,
    "pendidikan": 32,
    "keamanan": 17,
    "keuangan": 7,
    "lingkungan": 60
  }
};
