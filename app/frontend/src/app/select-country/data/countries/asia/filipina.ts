import { CountryData } from "../../types/_index";

export const filipina: CountryData = {
  "name_en": "Philippines",
  "capital": "Manila",
  "name_id": "Filipina",
  "lon": 122,
  "lat": 13,
  "flag": "🇵🇭",
  "jumlah_penduduk": 106651922,
  "anggaran": 4230,
  "pendapatan_nasional": "12084",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 12,
    "pembangkit_air": 31,
    "pembangkit_surya": 5,
    "pembangkit_termal": 1,
    "pembangkit_gas": 33,
    "pembangkit_angin": 29,
    "jaringan_listrik": 59
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 16,
    "kereta_bawah_tanah": 20,
    "jalur_kereta": 11,
    "jalan_tol": 27,
    "kualitas_jalan": 65,
    "pelabuhan_laut": 21,
    "bandara": 32,
    "terminal_bus": 34,
    "helipad": 29,
    "cakupan_internet": 75
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 16,
    "uranium": 38,
    "batu_bara": 2,
    "minyak_bumi": 8,
    "gas_alam": 11,
    "garam": 25,
    "nikel": 36,
    "litium": 32,
    "aluminium": 19,
    "tembaga": 24,
    "logam_tanah_jarang": 21,
    "bijih_besi": 32
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 12,
    "mobil": 21,
    "sepeda_motor": 24,
    "smelter": 14,
    "semen_beton": 15,
    "kayu": 12,
    "air_mineral": 3,
    "gula": 40,
    "roti": 10,
    "farmasi": 1,
    "pupuk": 2,
    "pengolahan_daging": 1,
    "mie_instan": 2
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 9.0,
    "sapi_perah": 10,
    "sapi_potong": 18,
    "domba_kambing": 34
  },
  "sektor_agrikultur": {
    "padi": 14,
    "gandum_jagung": 16.0,
    "sayur_umbi": 34.5,
    "kedelai": 6,
    "kelapa_sawit": 9,
    "kopi_teh_kakao": 16.3
  },
  "sektor_perikanan": {
    "udang_kerang": 36.5,
    "ikan": 2
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 2,
    "gudang_senjata": 26,
    "hangar_tank": 30,
    "akademi_militer": 31,
    "pusat_komando": 22,
    "pangkalan_udara": 28,
    "pangkalan_laut": 36,
    "program_luar_angkasa": 16,
    "pertahanan_siber": 23,
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 28,
    "darat": {
        "tank_tempur_utama": 37,
        "apc_ifv": 6,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 37,
        "kapal_destroyer": 37,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 37,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 38,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 280000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 40,
    "intelijen": 40,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 25,
      "misi_mata_mata": 16,
      "misi_sabotase": 7,
      "manajemen_wilayah": 25,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 15,
          "sepeda_motor": 12,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 32,
          "helikopter_polisi": 40,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 6,
          "kamera_pengawas": 2,
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
      "prasekolah": 14,
      "dasar": 39,
      "menengah": 15,
      "lanjutan": 35,
      "universitas": 40,
      "lembaga_pendidikan": 32,
      "laboratorium": 40,
      "observatorium": 20,
      "pusat_penelitian": 28,
      "pusat_pengembangan": 32,
      "literasi": 88
    },
    "kesehatan": {
      "rumah_sakit_besar": 31,
      "rumah_sakit_kecil": 29,
      "pusat_diagnostik": 25,
      "harapan_hidup": 16,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 17,
      "pengadilan": 40,
      "kejaksaan": 20,
      "pos_polisi": 35,
      "armada_mobil_polisi": 600,
      "akademi_polisi": 24,
      "indeks_korupsi": 87,
      "indeks_keamanan": 73
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 31,
      "sirkuit_balap": 15,
      "stadion": 39,
      "stadion_internasional": 12
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 34,
      "kepuasan": 67,
      "pendapatan": 201
    },
    "korporasi": {
      "tarif": 5,
      "kepuasan": 52,
      "pendapatan": 44
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 279
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 81
    },
    "lingkungan": {
      "tarif": 27,
      "kepuasan": 88,
      "pendapatan": 149
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 22 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 64 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 69
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 60,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 157900,
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
      "kekuatan_lunak": 8,
      "kekuatan_keras": 21,
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
    "kesehatan": 13,
    "pendidikan": 36,
    "keamanan": 30,
    "keuangan": 32,
    "lingkungan": 60
  }
};



