import { CountryData } from "../../types/_index";

export const yunani: CountryData = {
  "name_en": "Greece",
  "capital": "Athens",
  "name_id": "Yunani",
  "lon": 22,
  "lat": 39,
  "flag": "🇬🇷",
  "jumlah_penduduk": 10731726,
  "anggaran": 2236,
  "pendapatan_nasional": "6389",
  "religion": "Kristen Ortodoks",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 38,
    "pembangkit_air": 29,
    "pembangkit_surya": 7,
    "pembangkit_termal": 38,
    "pembangkit_gas": 13,
    "pembangkit_angin": 25,
    "jaringan_listrik": 79
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 28,
    "kereta_bawah_tanah": 35,
    "jalur_kereta": 4,
    "jalan_tol": 8,
    "kualitas_jalan": 67,
    "pelabuhan_laut": 38,
    "bandara": 18,
    "terminal_bus": 15,
    "helipad": 28,
    "cakupan_internet": 91
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 18,
    "uranium": 10,
    "batu_bara": 34,
    "minyak_bumi": 30,
    "gas_alam": 33,
    "garam": 4,
    "nikel": 38,
    "litium": 22,
    "aluminium": 25,
    "tembaga": 15,
    "logam_tanah_jarang": 5,
    "bijih_besi": 22
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 3,
    "mobil": 29,
    "sepeda_motor": 25,
    "smelter": 8,
    "semen_beton": 18,
    "kayu": 14,
    "air_mineral": 18,
    "gula": 27,
    "roti": 38,
    "farmasi": 37,
    "pupuk": 4,
    "pengolahan_daging": 20,
    "mie_instan": 20
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 9.5,
    "sapi_perah": 15,
    "sapi_potong": 27,
    "domba_kambing": 12,
    "udang_kerang": 13.0,
    "ikan": 19,
    "padi": 18,
    "gandum_jagung": 26.5,
    "sayur_umbi": 26.5,
    "kedelai": 25,
    "kelapa_sawit": 18,
    "kopi_teh_kakao": 13.7
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 36,
    "gudang_senjata": 11,
    "hangar_tank": 25,
    "akademi_militer": 10,
    "pusat_komando": 4,
    "pangkalan_udara": 20,
    "pangkalan_laut": 10,
    "program_luar_angkasa": 6,
    "pertahanan_siber": 28,
    "anggaran_pertahanan": 638
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 14,
    "darat": {
        "tank_tempur_utama": 161,
        "apc_ifv": 126,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 19,
        "kapal_destroyer": 151,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 60,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 126,
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
    "waktu_respon": 8,
    "intelijen": 33,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 16,
      "misi_mata_mata": 25,
      "misi_sabotase": 29,
      "manajemen_wilayah": 29,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 28,
          "sepeda_motor": 5,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 32,
          "helikopter_polisi": 21,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 26,
          "kamera_pengawas": 32,
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
      "prasekolah": 17,
      "dasar": 30,
      "menengah": 11,
      "lanjutan": 32,
      "universitas": 38,
      "lembaga_pendidikan": 40,
      "laboratorium": 35,
      "observatorium": 15,
      "pusat_penelitian": 17,
      "pusat_pengembangan": 17,
      "literasi": 50
    },
    "kesehatan": {
      "rumah_sakit_besar": 40,
      "rumah_sakit_kecil": 18,
      "pusat_diagnostik": 25,
      "harapan_hidup": 2,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 11,
      "pengadilan": 4,
      "kejaksaan": 5,
      "pos_polisi": 22,
      "armada_mobil_polisi": 651,
      "akademi_polisi": 25,
      "indeks_korupsi": 74,
      "indeks_keamanan": 75
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 38,
      "sirkuit_balap": 24,
      "stadion": 27,
      "stadion_internasional": 37
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 34,
      "kepuasan": 67,
      "pendapatan": 90
    },
    "korporasi": {
      "tarif": 15,
      "kepuasan": 52,
      "pendapatan": 85
    },
    "penghasilan": {
      "tarif": 15,
      "kepuasan": 61,
      "pendapatan": 48
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 202
    },
    "lingkungan": {
      "tarif": 36,
      "kepuasan": 88,
      "pendapatan": 125
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 12 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 34 },
    "lainnya": {
      "tarif": 38,
      "kepuasan": 93,
      "pendapatan": 127
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 100,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 83280,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 5350,
    "harga_listrik": 1280,
    "harga_air": 4160,
    "harga_obat": 315800,
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
      "kekuatan_lunak": 27,
      "kekuatan_keras": 28,
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
    "kesehatan": 29,
    "pendidikan": 18,
    "keamanan": 12,
    "keuangan": 25,
    "lingkungan": 60
  }
};



