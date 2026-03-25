import { CountryData } from "../../types/_index";

export const bermuda: CountryData = {
  "name_en": "Bermuda",
  "capital": "Hamilton",
  "name_id": "Bermuda",
  "lon": -64.75,
  "lat": 32.33333333,
  "flag": "🇧🇲",
  "jumlah_penduduk": 63973,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Protestan",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 19,
    "pembangkit_air": 29,
    "pembangkit_surya": 25,
    "pembangkit_termal": 9,
    "pembangkit_gas": 15,
    "pembangkit_angin": 4,
    "jaringan_listrik": 79
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 24,
    "kereta_bawah_tanah": 31,
    "jalur_kereta": 21,
    "jalan_tol": 39,
    "kualitas_jalan": 67,
    "pelabuhan_laut": 1,
    "bandara": 37,
    "terminal_bus": 39,
    "helipad": 29,
    "cakupan_internet": 67
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 15,
    "uranium": 11,
    "batu_bara": 11,
    "minyak_bumi": 16,
    "gas_alam": 28,
    "garam": 32,
    "nikel": 20,
    "litium": 25,
    "aluminium": 21,
    "tembaga": 21,
    "logam_tanah_jarang": 36,
    "bijih_besi": 8
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 22,
    "mobil": 15,
    "sepeda_motor": 13,
    "smelter": 4,
    "semen_beton": 34,
    "kayu": 38,
    "air_mineral": 20,
    "gula": 22,
    "roti": 28,
    "farmasi": 17,
    "pupuk": 31,
    "pengolahan_daging": 40,
    "mie_instan": 3
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 20.5,
    "sapi_perah": 10,
    "sapi_potong": 33,
    "domba_kambing": 13
  },
  "sektor_agrikultur": {
    "padi": 33,
    "gandum_jagung": 36.0,
    "sayur_umbi": 14.0,
    "kedelai": 22,
    "kelapa_sawit": 33,
    "kopi_teh_kakao": 23.7
  },
  "sektor_perikanan": {
    "udang_kerang": 28.5,
    "ikan": 15
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 12,
    "gudang_senjata": 21,
    "hangar_tank": 15,
    "akademi_militer": 37,
    "pusat_komando": 28,
    "pangkalan_udara": 10,
    "pangkalan_laut": 39,
    "program_luar_angkasa": 39,
    "pertahanan_siber": 37,
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 39,
    "darat": {
        "tank_tempur_utama": 89,
        "apc_ifv": 153,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 3,
        "kapal_destroyer": 158,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 79,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 80,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 390000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 5,
    "intelijen": 39,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 15,
      "misi_mata_mata": 32,
      "misi_sabotase": 28,
      "manajemen_wilayah": 30,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 5,
          "sepeda_motor": 32,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 9,
          "helikopter_polisi": 12,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 8,
          "kamera_pengawas": 12,
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
      "prasekolah": 28,
      "dasar": 35,
      "menengah": 3,
      "lanjutan": 21,
      "universitas": 6,
      "lembaga_pendidikan": 29,
      "laboratorium": 40,
      "observatorium": 23,
      "pusat_penelitian": 20,
      "pusat_pengembangan": 6,
      "literasi": 94
    },
    "kesehatan": {
      "rumah_sakit_besar": 16,
      "rumah_sakit_kecil": 31,
      "pusat_diagnostik": 40,
      "harapan_hidup": 31,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 30,
      "pengadilan": 12,
      "kejaksaan": 14,
      "pos_polisi": 4,
      "armada_mobil_polisi": 6328,
      "akademi_polisi": 24,
      "indeks_korupsi": 56,
      "indeks_keamanan": 85
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 39,
      "sirkuit_balap": 40,
      "stadion": 19,
      "stadion_internasional": 22
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 26,
      "kepuasan": 67,
      "pendapatan": 7
    },
    "korporasi": {
      "tarif": 21,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 20,
      "kepuasan": 61,
      "pendapatan": 3
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 5
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
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 3200,
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
      "kekuatan_lunak": 5,
      "kekuatan_keras": 22,
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
    "kesehatan": 33,
    "pendidikan": 35,
    "keamanan": 27,
    "keuangan": 38,
    "lingkungan": 60
  }
};



