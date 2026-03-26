import { CountryData } from "../../../types";

export const tunisia: CountryData = {
  "name_en": "Tunisia",
  "capital": "Tunis",
  "name_id": "Tunisia",
  "lon": 9,
  "lat": 34,
  "flag": "🇹🇳",
  "jumlah_penduduk": 11565204,
  "anggaran": 457,
  "pendapatan_nasional": "1306",
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
    "jalur_sepeda": 40,
    "terminal_bus": 1,
    "helipad": 36,
    "jalan_tol": 37,
    "jalur_kereta": 35,
    "pelabuhan_laut": 3,
    "kereta_bawah_tanah": 39
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {    "mobil": 39,
    "semen_beton": 37,
    "pengolahan_daging": 37,    "sepeda_motor": 23,    "semikonduktor": 14,
    "smelter": 22,    "kayu": 12
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 18.0,
    "sapi_perah": 35,
    "sapi_potong": 8,
    "domba_kambing": 20
  },
  "sektor_agrikultur": {
    "padi": 4,
    "gandum_jagung": 21.0,
    "sayur_umbi": 16.5,
    "kedelai": 15,
    "kelapa_sawit": 33,
    "kopi_teh_kakao": 24.0
  },
  "sektor_perikanan": {
    "udang_kerang": 14.0,
    "ikan": 7
  },
  "sektor_olahan_pangan": {
    "air_mineral": 35,
    "gula": 20,
    "roti": 9,
    "pengolahan_daging": 37,
    "mie_instan": 11
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 11
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 6,
    "gudang_senjata": 2,
    "hangar_tank": 1,
    "akademi_militer": 22,
    "pusat_komando": 24,
    "pangkalan_udara": 10,
    "pangkalan_laut": 36,
    "program_luar_angkasa": 1,
    "pertahanan_siber": 26
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 12,
    "darat": {
        "tank_tempur_utama": 94,
        "apc_ifv": 116,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 28,
        "kapal_destroyer": 80,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 19,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 107,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 120000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 31,
    "intelijen": 32,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 32,
      "misi_mata_mata": 27,
      "misi_sabotase": 15,
      "manajemen_wilayah": 11,
      "program_nuklir": 0
  }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 8,
        "sepeda_motor": 2,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 32,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 28,
          "kamera_pengawas": 32,
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
      "prasekolah": 22,
      "dasar": 40,
      "menengah": 36,
      "lanjutan": 33,
      "universitas": 33,
      "lembaga_pendidikan": 33,
      "laboratorium": 20,
      "observatorium": 10,
      "pusat_penelitian": 10,
      "pusat_pengembangan": 38,
      "literasi": 64
  },
    "kesehatan": {
      "rumah_sakit_besar": 13,
      "rumah_sakit_kecil": 5,
      "pusat_diagnostik": 9,
      "harapan_hidup": 19,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 36,
      "pengadilan": 16,
      "kejaksaan": 16,
      "pos_polisi": 21,
      "armada_mobil_polisi": 2086,
      "akademi_polisi": 19,
      "indeks_korupsi": 87,
      "indeks_keamanan": 83
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 4,
      "sirkuit_balap": 18,
      "stadion": 12,
      "stadion_internasional": 21
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 24,
      "kepuasan": 67,
      "pendapatan": 24
    },
    "korporasi": {
      "tarif": 3,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 2,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 15,
      "kepuasan": 86,
      "pendapatan": 11
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 4
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 50,
    "gaji_medis": 50,
    "gaji_militer": 40
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
    "harga_daging_sapi": 208200,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 15400,
    "harga_gula": 7200,
    "harga_telur": 43540,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 221060,
    "harga_pendidikan": 483900
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
      "kekuatan_lunak": 1,
      "kekuatan_keras": 26,
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
    "kesehatan": 19,
    "pendidikan": 39,
    "keamanan": 14,
    "keuangan": 16,
    "lingkungan": 60
  }
};

