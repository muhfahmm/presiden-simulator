import { CountryData } from "../../types/_index";

export const makedonia_utara: CountryData = {
  "name_en": "North Macedonia",
  "capital": "Skopje",
  "name_id": "Makedonia utara",
  "lon": 22,
  "lat": 41.83333333,
  "flag": "🇲🇰",
  "jumlah_penduduk": 2084367,
  "anggaran": 136,
  "pendapatan_nasional": "389",
  "religion": "Kristen Ortodoks",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 8,
    "pembangkit_air": 24,
    "pembangkit_surya": 37,
    "pembangkit_termal": 40,
    "pembangkit_gas": 5,
    "pembangkit_angin": 2,
    "jaringan_listrik": 88
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 28,
    "kereta_bawah_tanah": 36,
    "jalur_kereta": 40,
    "jalan_tol": 34,
    "kualitas_jalan": 93,
    "pelabuhan_laut": 37,
    "bandara": 11,
    "terminal_bus": 10,
    "helipad": 31,
    "cakupan_internet": 54
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 15,
    "uranium": 20,
    "batu_bara": 38,
    "minyak_bumi": 14,
    "gas_alam": 24,
    "garam": 28,
    "nikel": 37,
    "litium": 2,
    "aluminium": 31,
    "tembaga": 34,
    "logam_tanah_jarang": 20,
    "bijih_besi": 40
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 29,
    "mobil": 18,
    "sepeda_motor": 36,
    "smelter": 15,
    "semen_beton": 14,
    "kayu": 37,
    "air_mineral": 11,
    "gula": 19,
    "roti": 23,
    "farmasi": 35,
    "pupuk": 2,
    "pengolahan_daging": 21,
    "mie_instan": 35
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 11.5,
    "sapi_perah": 17,
    "sapi_potong": 34,
    "domba_kambing": 35,
    "udang_kerang": 28.0,
    "ikan": 16,
    "padi": 2,
    "gandum_jagung": 30.5,
    "sayur_umbi": 19.5,
    "kedelai": 37,
    "kelapa_sawit": 34,
    "kopi_teh_kakao": 25.3
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 22,
    "gudang_senjata": 34,
    "hangar_tank": 20,
    "akademi_militer": 22,
    "pusat_komando": 31,
    "pangkalan_udara": 3,
    "pangkalan_laut": 14,
    "program_luar_angkasa": 39,
    "pertahanan_siber": 25,
    "anggaran_pertahanan": 38
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 31,
    "darat": {
        "tank_tempur_utama": 130,
        "apc_ifv": 12,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 40,
        "kapal_destroyer": 168,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 144,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 174,
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
    "waktu_respon": 2,
    "intelijen": 32,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 15,
      "misi_mata_mata": 36,
      "misi_sabotase": 26,
      "manajemen_wilayah": 25,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 37,
          "sepeda_motor": 4,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 27,
          "helikopter_polisi": 6,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 6,
          "kamera_pengawas": 38,
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
      "prasekolah": 27,
      "dasar": 33,
      "menengah": 3,
      "lanjutan": 7,
      "universitas": 8,
      "lembaga_pendidikan": 21,
      "laboratorium": 15,
      "observatorium": 21,
      "pusat_penelitian": 24,
      "pusat_pengembangan": 14,
      "literasi": 65
    },
    "kesehatan": {
      "rumah_sakit_besar": 12,
      "rumah_sakit_kecil": 9,
      "pusat_diagnostik": 24,
      "harapan_hidup": 20,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 6,
      "pengadilan": 11,
      "kejaksaan": 36,
      "pos_polisi": 4,
      "armada_mobil_polisi": 3435,
      "akademi_polisi": 37,
      "indeks_korupsi": 68,
      "indeks_keamanan": 63
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 7,
      "sirkuit_balap": 18,
      "stadion": 25,
      "stadion_internasional": 7
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 16,
      "kepuasan": 67,
      "pendapatan": 6
    },
    "korporasi": {
      "tarif": 35,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 3,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 33,
      "kepuasan": 86,
      "pendapatan": 13
    },
    "lingkungan": {
      "tarif": 15,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 12,
      "kepuasan": 93,
      "pendapatan": 3
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
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 1280,
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
      "kekuatan_lunak": 32,
      "kekuatan_keras": 37,
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
    "kesehatan": 14,
    "pendidikan": 38,
    "keamanan": 4,
    "keuangan": 40,
    "lingkungan": 60
  }
};



