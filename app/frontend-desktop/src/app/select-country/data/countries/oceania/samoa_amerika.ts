import { CountryData } from "../../types/_index";

export const samoa_amerika: CountryData = {
  "name_en": "American Samoa",
  "capital": "Pago Pago",
  "name_id": "Samoa amerika",
  "lon": -170,
  "lat": -14.33333333,
  "flag": "🇦🇸",
  "jumlah_penduduk": 55465,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Protestan",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 21,
    "pembangkit_air": 10,
    "pembangkit_surya": 17,
    "pembangkit_termal": 25,
    "pembangkit_gas": 32,
    "pembangkit_angin": 6,
    "jaringan_listrik": 86
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 21,
    "kereta_bawah_tanah": 24,
    "jalur_kereta": 20,
    "jalan_tol": 18,
    "kualitas_jalan": 79,
    "pelabuhan_laut": 35,
    "bandara": 8,
    "terminal_bus": 8,
    "helipad": 10,
    "cakupan_internet": 84
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 15,
    "uranium": 1,
    "batu_bara": 6,
    "minyak_bumi": 39,
    "gas_alam": 18,
    "garam": 38,
    "nikel": 21,
    "litium": 38,
    "aluminium": 35,
    "tembaga": 25,
    "logam_tanah_jarang": 35,
    "bijih_besi": 15
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 19,
    "mobil": 5,
    "sepeda_motor": 30,
    "smelter": 10,
    "semen_beton": 24,
    "kayu": 37,
    "air_mineral": 14,
    "gula": 4,
    "roti": 15,
    "farmasi": 33,
    "pupuk": 36,
    "pengolahan_daging": 35,
    "mie_instan": 36
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": {
    "ayam_unggas": 13.5,
    "sapi_perah": 5,
    "sapi_potong": 26,
    "domba_kambing": 10,
    "udang_kerang": 22.5,
    "ikan": 5
  },
  "sektor_agrikultur": {
    "padi": 27,
    "gandum_jagung": 14.0,
    "sayur_umbi": 34.5,
    "kedelai": 22,
    "kelapa_sawit": 12,
    "kopi_teh_kakao": 25.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 19,
    "gudang_senjata": 31,
    "hangar_tank": 12,
    "akademi_militer": 37,
    "pusat_komando": 34,
    "pangkalan_udara": 18,
    "pangkalan_laut": 30,
    "program_luar_angkasa": 9,
    "pertahanan_siber": 10,
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 30,
    "darat": {
        "tank_tempur_utama": 67,
        "apc_ifv": 125,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 25,
        "kapal_destroyer": 174,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 171,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 182,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 300000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 7,
    "intelijen": 16,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 13,
      "misi_mata_mata": 11,
      "misi_sabotase": 37,
      "manajemen_wilayah": 32,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 4,
          "sepeda_motor": 33,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 7,
          "helikopter_polisi": 13,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 25,
          "kamera_pengawas": 11,
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
      "prasekolah": 11,
      "dasar": 28,
      "menengah": 19,
      "lanjutan": 37,
      "universitas": 19,
      "lembaga_pendidikan": 16,
      "laboratorium": 2,
      "observatorium": 12,
      "pusat_penelitian": 8,
      "pusat_pengembangan": 15,
      "literasi": 51
    },
    "kesehatan": {
      "rumah_sakit_besar": 22,
      "rumah_sakit_kecil": 33,
      "pusat_diagnostik": 40,
      "harapan_hidup": 29,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 16,
      "pengadilan": 28,
      "kejaksaan": 14,
      "pos_polisi": 29,
      "armada_mobil_polisi": 3317,
      "akademi_polisi": 20,
      "indeks_korupsi": 69,
      "indeks_keamanan": 79
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 21,
      "sirkuit_balap": 9,
      "stadion": 24,
      "stadion_internasional": 30
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 38,
      "kepuasan": 67,
      "pendapatan": 9
    },
    "korporasi": {
      "tarif": 31,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 36,
      "kepuasan": 61,
      "pendapatan": 10
    },
    "bea_cukai": {
      "tarif": 4,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 8,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 80,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 7280,
    "harga_obat": 221060,
    "harga_pendidikan": 967800
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
      "kekuatan_lunak": 21,
      "kekuatan_keras": 3,
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
    "pendidikan": 27,
    "keamanan": 18,
    "keuangan": 40,
    "lingkungan": 60
  }
};



