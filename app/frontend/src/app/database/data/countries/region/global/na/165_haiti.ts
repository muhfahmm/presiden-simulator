import { CountryData } from "@/app/database/data/types";
import { haiti_agrikultur } from "../../modules/1_ekonomi/7_sektor_agrikultur/na/165_haiti";
import { haiti_armada } from "../../modules/2_militer/2_armada_militer/na/165_haiti";
import { haiti_ekstraksi } from "../../modules/1_ekonomi/4_sektor_ekstraksi/na/165_haiti";
import { haiti_farmasi } from "../../modules/1_ekonomi/10_sektor_farmasi/na/165_haiti";
import { haiti_infrastruktur } from "../../modules/1_ekonomi/3_infrastruktur/na/165_haiti";
import { haiti_kepolisian } from "../../modules/2_militer/4_armada_kepolisian/na/165_haiti";
import { haiti_listrik } from "../../modules/1_ekonomi/2_kelistrikan/na/165_haiti";
import { haiti_manufaktur } from "../../modules/1_ekonomi/5_sektor_manufaktur/na/165_haiti";
import { haiti_olahan_pangan } from "../../modules/1_ekonomi/9_sektor_olahan_pangan/na/165_haiti";
import { haiti_perikanan } from "../../modules/1_ekonomi/8_sektor_perikanan/na/165_haiti";
import { haiti_pertahanan } from "../../modules/2_militer/1_sektor_pertahanan/na/165_haiti";
import { haiti_peternakan } from "../../modules/1_ekonomi/6_sektor_peternakan/na/165_haiti";
import { haiti_profile } from "../../modules/0_profiles/na/165_haiti";
import { haiti_strategis } from "../../modules/2_militer/3_militer_strategis/na/165_haiti";

export const haiti: CountryData = {
  ...haiti_profile,
  "sektor_listrik": haiti_listrik,
  "infrastruktur": haiti_infrastruktur,
  "sektor_ekstraksi": haiti_ekstraksi,
  "sektor_manufaktur": haiti_manufaktur,
  "sektor_peternakan": haiti_peternakan,
  "sektor_agrikultur": haiti_agrikultur,
  "sektor_perikanan": haiti_perikanan,
  "sektor_olahan_pangan": haiti_olahan_pangan,
  "sektor_farmasi": haiti_farmasi,
  "sektor_pertahanan": haiti_pertahanan,
  "armada_militer": haiti_armada,
  "militer_strategis": haiti_strategis,
  "armada_kepolisian": haiti_kepolisian,
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 37,
      "dasar": 32,
      "menengah": 5,
      "lanjutan": 25,
      "universitas": 40,
      "lembaga_pendidikan": 18,
      "laboratorium": 16,
      "observatorium": 21,
      "pusat_penelitian": 11,
      "pusat_pengembangan": 5,
      "literasi": 80
    },
    "kesehatan": {
      "rumah_sakit_besar": 12,
      "rumah_sakit_kecil": 36,
      "pusat_diagnostik": 13,
      "harapan_hidup": 38,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 17,
      "pengadilan": 27,
      "kejaksaan": 21,
      "pos_polisi": 11,
      "armada_mobil_polisi": 7356,
      "akademi_polisi": 13,
      "indeks_korupsi": 50,
      "indeks_keamanan": 59
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 11,
      "sirkuit_balap": 33,
      "stadion": 7,
      "stadion_internasional": 40
  },
  "un_vote": 105,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================
  "pajak": {
    "ppn": {
      "tarif": 1,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 35,
      "kepuasan": 61,
      "pendapatan": 9
    },
    "bea_cukai": {
      "tarif": 24,
      "kepuasan": 86,
      "pendapatan": 6
    },
    "lingkungan": {
      "tarif": 7,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 1
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
    "subsidi_pangan": 25,
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
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 15550,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 7280,
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
      "kekuatan_lunak": 32,
      "kekuatan_keras": 15,
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
    "pendidikan": 16,
    "keamanan": 15,
    "keuangan": 7,
    "lingkungan": 60
  }
};
