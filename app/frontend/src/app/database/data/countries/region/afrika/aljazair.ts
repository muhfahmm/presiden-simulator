import { CountryData } from "../../../types";

export const aljazair: CountryData = {
  "name_en": "Algeria",
  "capital": "Algiers",
  "name_id": "Aljazair",
  "lon": 3.08,
  "lat": 36.73,
  "flag": "🇩🇿",
  "jumlah_penduduk": 42228429,
  "anggaran": 2334,
  "pendapatan_nasional": "6667",
  "religion": "Islam",
  "ideology": "Nasionalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_listrik_tenaga_gas": 30,
    "pembangkit_listrik_tenaga_air": 20,
    "pembangkit_listrik_tenaga_nuklir": 0,
    "pembangkit_listrik_tenaga_surya": 5,
    "pembangkit_listrik_tenaga_uap": 40,
    "pembangkit_listrik_tenaga_angin": 4
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 12,
    "jalur_sepeda": 32,
    "terminal_bus": 17,
    "helipad": 2,
    "jalan_tol": 30,
    "jalur_kereta": 12,
    "pelabuhan_laut": 15,
    "kereta_bawah_tanah": 34
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {    "mobil": 2,
    "semen_beton": 21,
    "pengolahan_daging": 36,    "sepeda_motor": 2,    "semikonduktor": 29,
    "smelter": 12,    "kayu": 13
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 20.0,
    "sapi_perah": 2,
    "sapi_potong": 16,
    "domba_kambing": 26
  },
  "sektor_agrikultur": {
    "padi": 2,
    "gandum_jagung": 9.0,
    "sayur_umbi": 29.0,
    "kedelai": 28,
    "kelapa_sawit": 18,
    "kopi_teh_kakao": 27.7
  },
  "sektor_perikanan": {
    "udang_kerang": 15.5,
    "ikan": 36
  },
  "sektor_olahan_pangan": {
    "air_mineral": 19,
    "gula": 2,
    "roti": 3,
    "pengolahan_daging": 36,
    "mie_instan": 21
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 36
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 3,
    "gudang_senjata": 16,
    "hangar_tank": 20,
    "akademi_militer": 14,
    "pusat_komando": 31,
    "pangkalan_udara": 23,
    "pangkalan_laut": 18,
    "program_luar_angkasa": 21,
    "pertahanan_siber": 11
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 32,
    "darat": {
        "tank_tempur_utama": 25,
        "apc_ifv": 29,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 34,
        "kapal_destroyer": 39,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 40,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 33,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 320000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 15,
    "intelijen": 1,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 32,
      "misi_mata_mata": 8,
      "misi_sabotase": 14,
      "manajemen_wilayah": 9,
      "program_nuklir": 0
  }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 26,
        "sepeda_motor": 33,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 38,
          "helikopter_polisi": 28,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 1,
          "kamera_pengawas": 25,
          "pusat_forensik": 1
  }
    }
  },
  "pabrik_militer": {
    "pabrik_drone_kamikaze": 0,
    "pabrik_amunisi": 0,
    "pabrik_kendaraan_tempur": 0,
    "pabrik_senjata_berat": 0
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 23,
      "dasar": 35,
      "menengah": 5,
      "lanjutan": 7,
      "universitas": 5,
      "lembaga_pendidikan": 16,
      "laboratorium": 6,
      "observatorium": 2,
      "pusat_penelitian": 24,
      "pusat_pengembangan": 19,
      "literasi": 60
  },
    "kesehatan": {
      "rumah_sakit_besar": 35,
      "rumah_sakit_kecil": 4,
      "pusat_diagnostik": 33,
      "harapan_hidup": 39,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 10,
      "pengadilan": 2,
      "kejaksaan": 31,
      "pos_polisi": 24,
      "armada_mobil_polisi": 1704,
      "akademi_polisi": 34,
      "indeks_korupsi": 58,
      "indeks_keamanan": 61
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 20,
      "sirkuit_balap": 36,
      "stadion": 12,
      "stadion_internasional": 26
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 36,
      "kepuasan": 67,
      "pendapatan": 214
    },
    "korporasi": {
      "tarif": 13,
      "kepuasan": 52,
      "pendapatan": 49
    },
    "penghasilan": {
      "tarif": 33,
      "kepuasan": 61,
      "pendapatan": 196
    },
    "bea_cukai": {
      "tarif": 15,
      "kepuasan": 86,
      "pendapatan": 104
    },
    "lingkungan": {
      "tarif": 36,
      "kepuasan": 88,
      "pendapatan": 249
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 12 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 36 },
    "lainnya": {
      "tarif": 21,
      "kepuasan": 93,
      "pendapatan": 126
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 30,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 5350,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 387120
  },

    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================

  "geopolitik": {
    "sekutu": [
      "Amerika Serikat",
      "Uni Eropa"
    ],
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 5,
      "kekuatan_keras": 14,
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
    "kesehatan": 21,
    "pendidikan": 5,
    "keamanan": 10,
    "keuangan": 12,
    "lingkungan": 60
  }
};

