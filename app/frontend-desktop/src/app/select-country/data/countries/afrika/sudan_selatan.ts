import { CountryData } from "../../types/_index";

export const sudan_selatan: CountryData = {
  "name_en": "South Sudan",
  "capital": "Juba",
  "name_id": "Sudan selatan",
  "lon": 30,
  "lat": 7,
  "flag": "🇸🇸",
  "jumlah_penduduk": 10975920,
  "anggaran": 49,
  "pendapatan_nasional": "139",
  "religion": "Katolik",
  "ideology": "Nasionalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 12,
    "pembangkit_air": 36,
    "pembangkit_nuklir": 28,
    "jaringan_listrik": 61,
    "pembangkit_surya": 30,
    "pembangkit_termal": 20,
    "pembangkit_angin": 14
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 36,
    "jalur_sepeda": 40,
    "terminal_bus": 37,
    "helipad": 15,
    "jalan_tol": 3,
    "cakupan_internet": 63,
    "jalur_kereta": 19,
    "kualitas_jalan": 80,
    "pelabuhan_laut": 31,
    "kereta_bawah_tanah": 10
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 16,
    "batu_bara": 20,
    "tembaga": 34,
    "gas_alam": 40,
    "emas": 30,
    "bijih_besi": 5,
    "litium": 29,
    "nikel": 38,
    "minyak_bumi": 25,
    "logam_tanah_jarang": 38,
    "garam": 10,
    "uranium": 14
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 35,
    "mobil": 3,
    "semen_beton": 36,
    "pupuk": 29,
    "mie_instan": 14,
    "pengolahan_daging": 38,
    "air_mineral": 32,
    "sepeda_motor": 34,
    "farmasi": 29,
    "semikonduktor": 38,
    "smelter": 36,
    "gula": 38,
    "kayu": 1
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 11.5,
    "sapi_perah": 6,
    "sapi_potong": 26,
    "domba_kambing": 34
  },
  "sektor_agrikultur": {
    "padi": 8,
    "gandum_jagung": 27.0,
    "sayur_umbi": 2.5,
    "kedelai": 8,
    "kelapa_sawit": 2,
    "kopi_teh_kakao": 22.0
  },
  "sektor_perikanan": {
    "udang_kerang": 21.5,
    "ikan": 9
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 26,
    "gudang_senjata": 17,
    "hangar_tank": 1,
    "akademi_militer": 31,
    "pusat_komando": 28,
    "pangkalan_udara": 22,
    "pangkalan_laut": 15,
    "program_luar_angkasa": 34,
    "pertahanan_siber": 11,
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 6,
    "darat": {
        "tank_tempur_utama": 177,
        "apc_ifv": 106,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 16,
        "kapal_destroyer": 115,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 161,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 103,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 60000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 29,
    "intelijen": 13,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 39,
      "misi_mata_mata": 9,
      "misi_sabotase": 30,
      "manajemen_wilayah": 23,
      "program_nuklir": 0
  }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 20,
          "sepeda_motor": 19,
          "unit_k9": 23
  
  },
        "taktis_khusus": {
          "swat": 38,
          "helikopter_polisi": 21,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 38,
          "kamera_pengawas": 23,
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
      "prasekolah": 35,
      "dasar": 32,
      "menengah": 39,
      "lanjutan": 12,
      "universitas": 20,
      "lembaga_pendidikan": 38,
      "laboratorium": 39,
      "observatorium": 27,
      "pusat_penelitian": 17,
      "pusat_pengembangan": 14,
      "literasi": 86
  },
    "kesehatan": {
      "rumah_sakit_besar": 4,
      "rumah_sakit_kecil": 38,
      "pusat_diagnostik": 34,
      "harapan_hidup": 15,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 26,
      "pengadilan": 22,
      "kejaksaan": 22,
      "pos_polisi": 19,
      "armada_mobil_polisi": 4342,
      "akademi_polisi": 34,
      "indeks_korupsi": 85,
      "indeks_keamanan": 84
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 12,
      "sirkuit_balap": 21,
      "stadion": 32,
      "stadion_internasional": 15
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 19,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 8,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 15,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 21,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 30,
    "gaji_guru": 40,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
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
    "harga_daging_sapi": 83280,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 677460
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
      "kekuatan_lunak": 24,
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
    "kesehatan": 33,
    "pendidikan": 12,
    "keamanan": 20,
    "keuangan": 26,
    "lingkungan": 60
  }
};



