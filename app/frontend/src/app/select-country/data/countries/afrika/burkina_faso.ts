import { CountryData } from "../../types/_index";

export const burkina_faso: CountryData = {
  "name_en": "Burkina Faso",
  "capital": "Ouagadougou",
  "name_id": "Burkina faso",
  "lon": -2,
  "lat": 13,
  "flag": "🇧🇫",
  "jumlah_penduduk": 19751535,
  "anggaran": 175,
  "pendapatan_nasional": "500",
  "religion": "Islam",
  "ideology": "Nasionalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 21,
    "pembangkit_air": 5,
    "pembangkit_nuklir": 27,
    "jaringan_listrik": 58,
    "pembangkit_surya": 29,
    "pembangkit_termal": 19,
    "pembangkit_angin": 22
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 23,
    "jalur_sepeda": 27,
    "terminal_bus": 5,
    "helipad": 37,
    "jalan_tol": 25,
    "cakupan_internet": 52,
    "jalur_kereta": 4,
    "kualitas_jalan": 74,
    "pelabuhan_laut": 18,
    "kereta_bawah_tanah": 15
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 30,
    "batu_bara": 13,
    "tembaga": 7,
    "gas_alam": 37,
    "emas": 4,
    "bijih_besi": 29,
    "litium": 40,
    "nikel": 37,
    "minyak_bumi": 8,
    "logam_tanah_jarang": 22,
    "garam": 8,
    "uranium": 33
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 33,
    "mobil": 33,
    "semen_beton": 12,
    "pupuk": 20,
    "mie_instan": 20,
    "pengolahan_daging": 32,
    "air_mineral": 16,
    "sepeda_motor": 32,
    "farmasi": 28,
    "semikonduktor": 34,
    "smelter": 17,
    "gula": 40,
    "kayu": 39
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 4.5,
    "sapi_perah": 9,
    "sapi_potong": 2,
    "domba_kambing": 39
  },
  "sektor_agrikultur": {
    "padi": 38,
    "gandum_jagung": 29.5,
    "sayur_umbi": 14.0,
    "kedelai": 28,
    "kelapa_sawit": 39,
    "kopi_teh_kakao": 20.0
  },
  "sektor_perikanan": {
    "udang_kerang": 19.0,
    "ikan": 17
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 27,
    "gudang_senjata": 5,
    "hangar_tank": 15,
    "akademi_militer": 37,
    "pusat_komando": 27,
    "pangkalan_udara": 34,
    "pangkalan_laut": 19,
    "program_luar_angkasa": 18,
    "pertahanan_siber": 21,
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 20,
    "darat": {
        "tank_tempur_utama": 40,
        "apc_ifv": 20,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 1,
        "kapal_destroyer": 12,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 18,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 35,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 200000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 11,
    "intelijen": 28,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 32,
      "misi_mata_mata": 27,
      "misi_sabotase": 10,
      "manajemen_wilayah": 8,
      "program_nuklir": 0
  }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 23,
          "sepeda_motor": 8,
          "unit_k9": 23
  
  },
        "taktis_khusus": {
          "swat": 29,
          "helikopter_polisi": 2,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 9,
          "kamera_pengawas": 38,
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
      "prasekolah": 21,
      "dasar": 26,
      "menengah": 12,
      "lanjutan": 23,
      "universitas": 40,
      "lembaga_pendidikan": 35,
      "laboratorium": 9,
      "observatorium": 18,
      "pusat_penelitian": 38,
      "pusat_pengembangan": 2,
      "literasi": 50
  },
    "kesehatan": {
      "rumah_sakit_besar": 37,
      "rumah_sakit_kecil": 28,
      "pusat_diagnostik": 26,
      "harapan_hidup": 38,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 22,
      "pengadilan": 13,
      "kejaksaan": 10,
      "pos_polisi": 8,
      "armada_mobil_polisi": 5057,
      "akademi_polisi": 13,
      "indeks_korupsi": 88,
      "indeks_keamanan": 54
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 9,
      "sirkuit_balap": 6,
      "stadion": 29,
      "stadion_internasional": 40
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 29,
      "kepuasan": 67,
      "pendapatan": 6
    },
    "korporasi": {
      "tarif": 29,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 16,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 11
    },
    "lingkungan": {
      "tarif": 30,
      "kepuasan": 88,
      "pendapatan": 11
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 50,
    "gaji_medis": 50,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 25,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 83280,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 8560,
    "harga_listrik": 1280,
    "harga_air": 10400,
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
      "kekuatan_lunak": 15,
      "kekuatan_keras": 7,
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
    "pendidikan": 20,
    "keamanan": 1,
    "keuangan": 21,
    "lingkungan": 60
  }
};



