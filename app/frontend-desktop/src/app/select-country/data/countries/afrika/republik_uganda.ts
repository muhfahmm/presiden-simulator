import { CountryData } from "../../types/_index";

export const republik_uganda: CountryData = {
  "name_en": "Uganda",
  "capital": "Kampala",
  "name_id": "Republik uganda",
  "lon": 32,
  "lat": 1,
  "flag": "🇺🇬",
  "jumlah_penduduk": 42723139,
  "anggaran": 486,
  "pendapatan_nasional": "1389",
  "religion": "Katolik",
  "ideology": "Konservatisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 23,
    "pembangkit_air": 30,
    "pembangkit_nuklir": 11,
    "jaringan_listrik": 84,
    "pembangkit_surya": 33,
    "pembangkit_termal": 14,
    "pembangkit_angin": 26
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 28,
    "jalur_sepeda": 35,
    "terminal_bus": 15,
    "helipad": 40,
    "jalan_tol": 14,
    "cakupan_internet": 50,
    "jalur_kereta": 36,
    "kualitas_jalan": 52,
    "pelabuhan_laut": 8,
    "kereta_bawah_tanah": 40
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 3,
    "batu_bara": 11,
    "tembaga": 40,
    "gas_alam": 3,
    "emas": 17,
    "bijih_besi": 23,
    "litium": 30,
    "nikel": 3,
    "minyak_bumi": 9,
    "logam_tanah_jarang": 3,
    "garam": 36,
    "uranium": 4
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 22,
    "mobil": 8,
    "semen_beton": 29,
    "pupuk": 19,
    "mie_instan": 19,
    "pengolahan_daging": 26,
    "air_mineral": 23,
    "sepeda_motor": 27,
    "farmasi": 22,
    "semikonduktor": 1,
    "smelter": 8,
    "gula": 17,
    "kayu": 37
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 25.5,
    "sapi_perah": 21,
    "sapi_potong": 24,
    "domba_kambing": 35,
    "udang_kerang": 26.0,
    "ikan": 19,
    "padi": 30,
    "gandum_jagung": 32.5,
    "sayur_umbi": 20.5,
    "kedelai": 12,
    "kelapa_sawit": 38,
    "kopi_teh_kakao": 23.3
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 28,
    "gudang_senjata": 31,
    "hangar_tank": 20,
    "akademi_militer": 35,
    "pusat_komando": 20,
    "pangkalan_udara": 22,
    "pangkalan_laut": 26,
    "program_luar_angkasa": 30,
    "pertahanan_siber": 35,
    "anggaran_pertahanan": 138
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 37,
    "darat": {
        "tank_tempur_utama": 93,
        "apc_ifv": 195,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 20,
        "kapal_destroyer": 52,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 64,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 148,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 370000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 7,
    "intelijen": 22,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 23,
      "misi_mata_mata": 24,
      "misi_sabotase": 25,
      "manajemen_wilayah": 15,
      "program_nuklir": 0
  }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 25,
          "sepeda_motor": 18,
          "unit_k9": 23
  
  },
        "taktis_khusus": {
          "swat": 2,
          "helikopter_polisi": 33,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 39,
          "kamera_pengawas": 16,
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
      "prasekolah": 20,
      "dasar": 5,
      "menengah": 4,
      "lanjutan": 7,
      "universitas": 18,
      "lembaga_pendidikan": 2,
      "laboratorium": 20,
      "observatorium": 2,
      "pusat_penelitian": 23,
      "pusat_pengembangan": 25,
      "literasi": 68
  },
    "kesehatan": {
      "rumah_sakit_besar": 24,
      "rumah_sakit_kecil": 11,
      "pusat_diagnostik": 8,
      "harapan_hidup": 13,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 37,
      "pengadilan": 20,
      "kejaksaan": 25,
      "pos_polisi": 3,
      "armada_mobil_polisi": 5182,
      "akademi_polisi": 33,
      "indeks_korupsi": 78,
      "indeks_keamanan": 51
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 33,
      "sirkuit_balap": 3,
      "stadion": 4,
      "stadion_internasional": 40
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 37,
      "kepuasan": 67,
      "pendapatan": 21
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 46
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 18
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 11
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 8 },
    "lainnya": {
      "tarif": 30,
      "kepuasan": 93,
      "pendapatan": 36
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 50,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
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
    "harga_telur": 62200,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 5200,
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
      "kekuatan_lunak": 20,
      "kekuatan_keras": 10,
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
    "kesehatan": 28,
    "pendidikan": 17,
    "keamanan": 28,
    "keuangan": 37,
    "lingkungan": 60
  }
};



