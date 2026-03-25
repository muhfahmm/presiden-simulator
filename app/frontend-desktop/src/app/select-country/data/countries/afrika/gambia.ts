import { CountryData } from "../../types/_index";

export const gambia: CountryData = {
  "name_en": "Gambia",
  "capital": "Banjul",
  "name_id": "Gambia",
  "lon": -16.56666666,
  "lat": 13.46666666,
  "flag": "🇬🇲",
  "jumlah_penduduk": 2280102,
  "anggaran": 21,
  "pendapatan_nasional": "61",
  "religion": "Islam",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 27,
    "pembangkit_air": 38,
    "pembangkit_nuklir": 6,
    "jaringan_listrik": 93,
    "pembangkit_surya": 28,
    "pembangkit_termal": 21,
    "pembangkit_angin": 8
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 28,
    "jalur_sepeda": 8,
    "terminal_bus": 26,
    "helipad": 29,
    "jalan_tol": 8,
    "cakupan_internet": 92,
    "jalur_kereta": 24,
    "kualitas_jalan": 63,
    "pelabuhan_laut": 13,
    "kereta_bawah_tanah": 11
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 35,
    "batu_bara": 40,
    "tembaga": 11,
    "gas_alam": 26,
    "emas": 21,
    "bijih_besi": 30,
    "litium": 31,
    "nikel": 32,
    "minyak_bumi": 40,
    "logam_tanah_jarang": 18,
    "garam": 37,
    "uranium": 32
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 9,
    "mobil": 5,
    "semen_beton": 17,
    "pupuk": 9,
    "mie_instan": 37,
    "pengolahan_daging": 22,
    "air_mineral": 7,
    "sepeda_motor": 16,
    "farmasi": 1,
    "semikonduktor": 24,
    "smelter": 5,
    "gula": 10,
    "kayu": 19
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": {
    "ayam_unggas": 33.0,
    "sapi_perah": 24,
    "sapi_potong": 16,
    "domba_kambing": 9,
    "udang_kerang": 17.5,
    "ikan": 31
  },
  "sektor_agrikultur": {
    "padi": 19,
    "gandum_jagung": 33.0,
    "sayur_umbi": 17.0,
    "kedelai": 18,
    "kelapa_sawit": 28,
    "kopi_teh_kakao": 25.3
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 27,
    "gudang_senjata": 3,
    "hangar_tank": 27,
    "akademi_militer": 16,
    "pusat_komando": 2,
    "pangkalan_udara": 15,
    "pangkalan_laut": 2,
    "program_luar_angkasa": 7,
    "pertahanan_siber": 18,
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 39,
    "darat": {
        "tank_tempur_utama": 31,
        "apc_ifv": 16,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 24,
        "kapal_destroyer": 20,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 9,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 22,
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
    "waktu_respon": 2,
    "intelijen": 12,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 17,
      "misi_mata_mata": 26,
      "misi_sabotase": 22,
      "manajemen_wilayah": 2,
      "program_nuklir": 0
  }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 1,
          "sepeda_motor": 32,
          "unit_k9": 23
  
  },
        "taktis_khusus": {
          "swat": 15,
          "helikopter_polisi": 39,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 26,
          "kamera_pengawas": 34,
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
      "prasekolah": 17,
      "dasar": 17,
      "menengah": 11,
      "lanjutan": 35,
      "universitas": 10,
      "lembaga_pendidikan": 2,
      "laboratorium": 22,
      "observatorium": 17,
      "pusat_penelitian": 23,
      "pusat_pengembangan": 13,
      "literasi": 51
  },
    "kesehatan": {
      "rumah_sakit_besar": 39,
      "rumah_sakit_kecil": 8,
      "pusat_diagnostik": 31,
      "harapan_hidup": 16,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 15,
      "pengadilan": 14,
      "kejaksaan": 33,
      "pos_polisi": 37,
      "armada_mobil_polisi": 4533,
      "akademi_polisi": 15,
      "indeks_korupsi": 95,
      "indeks_keamanan": 64
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 9,
      "sirkuit_balap": 11,
      "stadion": 12,
      "stadion_internasional": 36
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 36,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 28,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 34,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 30,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 1,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 14,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 25,
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
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 12320,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 157900,
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
      "kekuatan_lunak": 40,
      "kekuatan_keras": 17,
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
    "pendidikan": 23,
    "keamanan": 22,
    "keuangan": 31,
    "lingkungan": 60
  }
};



