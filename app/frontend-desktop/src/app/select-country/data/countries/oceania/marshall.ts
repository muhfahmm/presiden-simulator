import { CountryData } from "../../types/_index";

export const marshall: CountryData = {
  "name_en": "Marshall Islands",
  "capital": "Majuro",
  "name_id": "Marshall",
  "lon": 168,
  "lat": 9,
  "flag": "🇲🇭",
  "jumlah_penduduk": 58413,
  "anggaran": 10,
  "pendapatan_nasional": "15",
  "religion": "Protestan",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 27,
    "pembangkit_air": 37,
    "pembangkit_surya": 1,
    "pembangkit_termal": 23,
    "pembangkit_gas": 34,
    "pembangkit_angin": 30,
    "jaringan_listrik": 91
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 21,
    "kereta_bawah_tanah": 38,
    "jalur_kereta": 28,
    "jalan_tol": 14,
    "kualitas_jalan": 53,
    "pelabuhan_laut": 16,
    "bandara": 18,
    "terminal_bus": 40,
    "helipad": 29,
    "cakupan_internet": 80
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 15,
    "uranium": 30,
    "batu_bara": 30,
    "minyak_bumi": 9,
    "gas_alam": 25,
    "garam": 17,
    "nikel": 35,
    "litium": 30,
    "aluminium": 28,
    "tembaga": 23,
    "logam_tanah_jarang": 20,
    "bijih_besi": 10
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 9,
    "mobil": 39,
    "sepeda_motor": 24,
    "smelter": 29,
    "semen_beton": 38,
    "kayu": 19,
    "air_mineral": 9,
    "gula": 16,
    "roti": 30,
    "farmasi": 1,
    "pupuk": 39,
    "pengolahan_daging": 32,
    "mie_instan": 4
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 33.0,
    "sapi_perah": 37,
    "sapi_potong": 23,
    "domba_kambing": 6,
    "udang_kerang": 16.5,
    "ikan": 29,
    "padi": 12,
    "gandum_jagung": 11.0,
    "sayur_umbi": 30.0,
    "kedelai": 35,
    "kelapa_sawit": 15,
    "kopi_teh_kakao": 20.7
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 11,
    "gudang_senjata": 10,
    "hangar_tank": 31,
    "akademi_militer": 16,
    "pusat_komando": 27,
    "pangkalan_udara": 34,
    "pangkalan_laut": 28,
    "program_luar_angkasa": 27,
    "pertahanan_siber": 15,
    "anggaran_pertahanan": 1
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 2,
    "darat": {
        "tank_tempur_utama": 179,
        "apc_ifv": 27,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 23,
        "kapal_destroyer": 32,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 83,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 131,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 11,
    "intelijen": 11,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 4,
      "misi_mata_mata": 31,
      "misi_sabotase": 28,
      "manajemen_wilayah": 36,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 4,
          "sepeda_motor": 27,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 17,
          "helikopter_polisi": 11,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 7,
          "kamera_pengawas": 30,
          "pusat_forensik": 1
        },
    "kepercayaan_publik": 50
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "prasekolah": 31,
      "dasar": 10,
      "menengah": 13,
      "lanjutan": 26,
      "universitas": 12,
      "lembaga_pendidikan": 11,
      "laboratorium": 24,
      "observatorium": 18,
      "pusat_penelitian": 20,
      "pusat_pengembangan": 27,
      "literasi": 58
    },
    "kesehatan": {
      "rumah_sakit_besar": 24,
      "rumah_sakit_kecil": 21,
      "pusat_diagnostik": 27,
      "harapan_hidup": 37,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 7,
      "pengadilan": 10,
      "kejaksaan": 28,
      "pos_polisi": 16,
      "armada_mobil_polisi": 5615,
      "akademi_polisi": 10,
      "indeks_korupsi": 77,
      "indeks_keamanan": 53
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 25,
      "sirkuit_balap": 35,
      "stadion": 40,
      "stadion_internasional": 20
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 27,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 24,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 34,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 5,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 3,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 30,
      "kepuasan": 93,
      "pendapatan": 0
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
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 28800,
    "harga_telur": 62200,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 2600,
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
      "kekuatan_lunak": 22,
      "kekuatan_keras": 2,
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
    "pendidikan": 30,
    "keamanan": 30,
    "keuangan": 18,
    "lingkungan": 60
  }
};



