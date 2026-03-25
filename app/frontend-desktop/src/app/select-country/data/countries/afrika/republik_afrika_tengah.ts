import { CountryData } from "../../types/_index";

export const republik_afrika_tengah: CountryData = {
  "name_en": "Central African Republic",
  "capital": "Bangui",
  "name_id": "Republik afrika tengah",
  "lon": 21,
  "lat": 7,
  "flag": "🇨🇫",
  "jumlah_penduduk": 4666377,
  "anggaran": 24,
  "pendapatan_nasional": "69",
  "religion": "Protestan",
  "ideology": "Nasionalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 11,
    "pembangkit_air": 20,
    "pembangkit_nuklir": 5,
    "jaringan_listrik": 93,
    "pembangkit_surya": 24,
    "pembangkit_termal": 29,
    "pembangkit_angin": 6
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 30,
    "jalur_sepeda": 34,
    "terminal_bus": 39,
    "helipad": 24,
    "jalan_tol": 21,
    "cakupan_internet": 51,
    "jalur_kereta": 40,
    "kualitas_jalan": 87,
    "pelabuhan_laut": 22,
    "kereta_bawah_tanah": 39
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 16,
    "batu_bara": 32,
    "tembaga": 36,
    "gas_alam": 25,
    "emas": 27,
    "bijih_besi": 22,
    "litium": 7,
    "nikel": 8,
    "minyak_bumi": 7,
    "logam_tanah_jarang": 26,
    "garam": 21,
    "uranium": 22
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 23,
    "mobil": 19,
    "semen_beton": 31,
    "pupuk": 37,
    "mie_instan": 13,
    "pengolahan_daging": 8,
    "air_mineral": 23,
    "sepeda_motor": 34,
    "farmasi": 16,
    "semikonduktor": 40,
    "smelter": 5,
    "gula": 8,
    "kayu": 13
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 11.5,
    "sapi_perah": 18,
    "sapi_potong": 38,
    "domba_kambing": 23,
    "udang_kerang": 31.0,
    "ikan": 28,
    "padi": 12,
    "gandum_jagung": 20.5,
    "sayur_umbi": 34.5,
    "kedelai": 10,
    "kelapa_sawit": 1,
    "kopi_teh_kakao": 30.3
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 14,
    "gudang_senjata": 6,
    "hangar_tank": 17,
    "akademi_militer": 5,
    "pusat_komando": 39,
    "pangkalan_udara": 3,
    "pangkalan_laut": 18,
    "program_luar_angkasa": 31,
    "pertahanan_siber": 24,
    "anggaran_pertahanan": 6
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 24,
    "darat": {
        "tank_tempur_utama": 38,
        "apc_ifv": 121,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 9,
        "kapal_destroyer": 133,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 75,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 19,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 240000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 2,
    "intelijen": 8,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 24,
      "misi_mata_mata": 17,
      "misi_sabotase": 32,
      "manajemen_wilayah": 36,
      "program_nuklir": 0
  }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 36,
          "sepeda_motor": 39,
          "unit_k9": 23
  
  },
        "taktis_khusus": {
          "swat": 13,
          "helikopter_polisi": 34,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 26,
          "kamera_pengawas": 20,
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
      "prasekolah": 8,
      "dasar": 36,
      "menengah": 26,
      "lanjutan": 35,
      "universitas": 22,
      "lembaga_pendidikan": 29,
      "laboratorium": 38,
      "observatorium": 18,
      "pusat_penelitian": 39,
      "pusat_pengembangan": 32,
      "literasi": 65
  },
    "kesehatan": {
      "rumah_sakit_besar": 33,
      "rumah_sakit_kecil": 4,
      "pusat_diagnostik": 11,
      "harapan_hidup": 33,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 25,
      "pengadilan": 30,
      "kejaksaan": 37,
      "pos_polisi": 20,
      "armada_mobil_polisi": 684,
      "akademi_polisi": 17,
      "indeks_korupsi": 72,
      "indeks_keamanan": 80
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 35,
      "sirkuit_balap": 38,
      "stadion": 4,
      "stadion_internasional": 29
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 30,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 24,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 4,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 30,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 25,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 25,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 40,
    "gaji_militer": 40
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 25,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 2240,
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
      "kekuatan_lunak": 23,
      "kekuatan_keras": 20,
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
    "kesehatan": 9,
    "pendidikan": 38,
    "keamanan": 22,
    "keuangan": 32,
    "lingkungan": 60
  }
};



