import { CountryData } from "../../types/_index";

export const myanmar: CountryData = {
  "name_en": "Myanmar",
  "capital": "Naypyidaw",
  "name_id": "Myanmar",
  "lon": 98,
  "lat": 22,
  "flag": "🇲🇲",
  "jumlah_penduduk": 53708395,
  "anggaran": 583,
  "pendapatan_nasional": "1667",
  "religion": "Buddha",
  "ideology": "Nasionalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 2,
    "pembangkit_air": 4,
    "pembangkit_surya": 23,
    "pembangkit_termal": 11,
    "pembangkit_gas": 12,
    "pembangkit_angin": 1,
    "jaringan_listrik": 78
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 8,
    "kereta_bawah_tanah": 35,
    "jalur_kereta": 28,
    "jalan_tol": 15,
    "kualitas_jalan": 52,
    "pelabuhan_laut": 4,
    "bandara": 40,
    "terminal_bus": 36,
    "helipad": 22,
    "cakupan_internet": 58
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 16,
    "uranium": 5,
    "batu_bara": 14,
    "minyak_bumi": 4,
    "gas_alam": 10,
    "garam": 1,
    "nikel": 26,
    "litium": 5,
    "aluminium": 4,
    "tembaga": 21,
    "logam_tanah_jarang": 38,
    "bijih_besi": 39
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 19,
    "mobil": 40,
    "sepeda_motor": 13,
    "smelter": 30,
    "semen_beton": 13,
    "kayu": 3,
    "air_mineral": 20,
    "gula": 4,
    "roti": 30,
    "farmasi": 30,
    "pupuk": 28,
    "pengolahan_daging": 17,
    "mie_instan": 21
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 28.0,
    "sapi_perah": 21,
    "sapi_potong": 7,
    "domba_kambing": 26,
    "udang_kerang": 18.5,
    "ikan": 22,
    "padi": 22,
    "gandum_jagung": 2.0,
    "sayur_umbi": 12.0,
    "kedelai": 30,
    "kelapa_sawit": 13,
    "kopi_teh_kakao": 22.7
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 14,
    "gudang_senjata": 28,
    "hangar_tank": 35,
    "akademi_militer": 15,
    "pusat_komando": 19,
    "pangkalan_udara": 31,
    "pangkalan_laut": 23,
    "program_luar_angkasa": 1,
    "pertahanan_siber": 14,
    "anggaran_pertahanan": 166
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 9,
    "darat": {
        "tank_tempur_utama": 141,
        "apc_ifv": 54,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
      },
      "laut": {
        "kapal_induk": 3,
        "kapal_destroyer": 173,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
      },
      "udara": {
        "jet_tempur_siluman": 155,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 141,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
      }
  ,
    "personel": {
        "infanteri_reguler": 90000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 7,
    "intelijen": 33,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 17,
      "misi_mata_mata": 16,
      "misi_sabotase": 37,
      "manajemen_wilayah": 25,
      "program_nuklir": 0 }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 20,
          "sepeda_motor": 3,
          "unit_k9": 23
        
  },
        "taktis_khusus": {
          "swat": 33,
          "helikopter_polisi": 13,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 4,
          "kamera_pengawas": 28,
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
      "prasekolah": 7,
      "dasar": 37,
      "menengah": 11,
      "lanjutan": 18,
      "universitas": 4,
      "lembaga_pendidikan": 31,
      "laboratorium": 1,
      "observatorium": 25,
      "pusat_penelitian": 22,
      "pusat_pengembangan": 13,
      "literasi": 72
    },
    "kesehatan": {
      "rumah_sakit_besar": 16,
      "rumah_sakit_kecil": 20,
      "pusat_diagnostik": 3,
      "harapan_hidup": 3,
      "indeks_kesehatan": 85
    },
    "hukum": {
      "pusat_bantuan_hukum": 12,
      "pengadilan": 23,
      "kejaksaan": 13,
      "pos_polisi": 11,
      "armada_mobil_polisi": 908,
      "akademi_polisi": 13,
      "indeks_korupsi": 51,
      "indeks_keamanan": 91
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 13,
      "sirkuit_balap": 3,
      "stadion": 29,
      "stadion_internasional": 24
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 12
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 43
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 19
    },
    "bea_cukai": {
      "tarif": 29,
      "kepuasan": 86,
      "pendapatan": 45
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 24
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 9 },
    "lainnya": {
      "tarif": 12,
      "kepuasan": 93,
      "pendapatan": 17
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 4160,
    "harga_obat": 78950,
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
      "kekuatan_lunak": 15,
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
    "kesehatan": 15,
    "pendidikan": 35,
    "keamanan": 2,
    "keuangan": 13,
    "lingkungan": 60
  }
};



