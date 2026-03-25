import { CountryData } from "../../types/_index";

export const republik_tanzania: CountryData = {
  "name_en": "Tanzania",
  "capital": "Dodoma",
  "name_id": "Republik tanzania",
  "lon": 35,
  "lat": -6,
  "flag": "🇹🇿",
  "jumlah_penduduk": 56318348,
  "anggaran": 729,
  "pendapatan_nasional": "2084",
  "religion": "Katolik",
  "ideology": "Sosialisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 35,
    "pembangkit_air": 9,
    "pembangkit_nuklir": 30,
    "jaringan_listrik": 79,
    "pembangkit_surya": 25,
    "pembangkit_termal": 36,
    "pembangkit_angin": 19
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 14,
    "jalur_sepeda": 30,
    "terminal_bus": 40,
    "helipad": 1,
    "jalan_tol": 14,
    "cakupan_internet": 58,
    "jalur_kereta": 33,
    "kualitas_jalan": 56,
    "pelabuhan_laut": 31,
    "kereta_bawah_tanah": 24
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 17,
    "batu_bara": 12,
    "tembaga": 8,
    "gas_alam": 1,
    "emas": 9,
    "bijih_besi": 16,
    "litium": 14,
    "nikel": 2,
    "minyak_bumi": 18,
    "logam_tanah_jarang": 36,
    "garam": 16,
    "uranium": 35
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 33,
    "mobil": 30,
    "semen_beton": 15,
    "pupuk": 9,
    "mie_instan": 4,
    "pengolahan_daging": 36,
    "air_mineral": 1,
    "sepeda_motor": 11,
    "farmasi": 8,
    "semikonduktor": 34,
    "smelter": 10,
    "gula": 8,
    "kayu": 13
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": {
    "ayam_unggas": 18.5,
    "sapi_perah": 26,
    "sapi_potong": 21,
    "domba_kambing": 38,
    "udang_kerang": 25.5,
    "ikan": 30
  },
  "sektor_agrikultur": {
    "padi": 19,
    "gandum_jagung": 16.5,
    "sayur_umbi": 11.0,
    "kedelai": 11,
    "kelapa_sawit": 6,
    "kopi_teh_kakao": 11.3
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 12,
    "gudang_senjata": 2,
    "hangar_tank": 4,
    "akademi_militer": 27,
    "pusat_komando": 9,
    "pangkalan_udara": 22,
    "pangkalan_laut": 19,
    "program_luar_angkasa": 11,
    "pertahanan_siber": 14,
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 31,
    "darat": {
        "tank_tempur_utama": 53,
        "apc_ifv": 45,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 39,
        "kapal_destroyer": 127,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 189,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 58,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 310000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 31,
    "intelijen": 14,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 3,
      "misi_mata_mata": 34,
      "misi_sabotase": 10,
      "manajemen_wilayah": 30,
      "program_nuklir": 0
  }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 17,
          "sepeda_motor": 36,
          "unit_k9": 23
  
  },
        "taktis_khusus": {
          "swat": 34,
          "helikopter_polisi": 27,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 32,
          "kamera_pengawas": 22,
          "pusat_forensik": 1
  },
    "kepercayaan_publik": 50
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
      "prasekolah": 9,
      "dasar": 2,
      "menengah": 8,
      "lanjutan": 17,
      "universitas": 1,
      "lembaga_pendidikan": 40,
      "laboratorium": 6,
      "observatorium": 21,
      "pusat_penelitian": 11,
      "pusat_pengembangan": 26,
      "literasi": 83
  },
    "kesehatan": {
      "rumah_sakit_besar": 5,
      "rumah_sakit_kecil": 7,
      "pusat_diagnostik": 4,
      "harapan_hidup": 7,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 32,
      "pengadilan": 13,
      "kejaksaan": 8,
      "pos_polisi": 27,
      "armada_mobil_polisi": 1318,
      "akademi_polisi": 7,
      "indeks_korupsi": 70,
      "indeks_keamanan": 64
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 1,
      "sirkuit_balap": 3,
      "stadion": 34,
      "stadion_internasional": 40
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 31,
      "kepuasan": 67,
      "pendapatan": 58
    },
    "korporasi": {
      "tarif": 38,
      "kepuasan": 52,
      "pendapatan": 82
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 51
    },
    "bea_cukai": {
      "tarif": 27,
      "kepuasan": 86,
      "pendapatan": 27
    },
    "lingkungan": {
      "tarif": 33,
      "kepuasan": 88,
      "pendapatan": 42
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 11 },
    "lainnya": {
      "tarif": 24,
      "kepuasan": 93,
      "pendapatan": 23
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 30800,
    "harga_gula": 14400,
    "harga_telur": 15550,
    "harga_bbm": 5350,
    "harga_listrik": 800,
    "harga_air": 4160,
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
      "kekuatan_lunak": 40,
      "kekuatan_keras": 11,
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
    "kesehatan": 17,
    "pendidikan": 34,
    "keamanan": 40,
    "keuangan": 40,
    "lingkungan": 60
  }
};



