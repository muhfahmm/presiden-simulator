import { CountryData } from "../../types/_index";

export const sao_tome_dan_principe: CountryData = {
  "name_en": "Sao Tome and Principe",
  "capital": "São Tomé",
  "name_id": "Sao tome dan principe",
  "lon": 7,
  "lat": 1,
  "flag": "🇸🇹",
  "jumlah_penduduk": 211028,
  "anggaran": 10,
  "pendapatan_nasional": "17",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 38,
    "pembangkit_air": 20,
    "pembangkit_nuklir": 5,
    "jaringan_listrik": 56,
    "pembangkit_surya": 35,
    "pembangkit_termal": 10,
    "pembangkit_angin": 10
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 37,
    "jalur_sepeda": 31,
    "terminal_bus": 23,
    "helipad": 15,
    "jalan_tol": 3,
    "cakupan_internet": 63,
    "jalur_kereta": 22,
    "kualitas_jalan": 86,
    "pelabuhan_laut": 23,
    "kereta_bawah_tanah": 36
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 29,
    "batu_bara": 25,
    "tembaga": 30,
    "gas_alam": 28,
    "emas": 6,
    "bijih_besi": 4,
    "litium": 32,
    "nikel": 40,
    "minyak_bumi": 16,
    "logam_tanah_jarang": 3,
    "garam": 16,
    "uranium": 38
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 1,
    "mobil": 14,
    "semen_beton": 3,
    "pupuk": 20,
    "mie_instan": 33,
    "pengolahan_daging": 25,
    "air_mineral": 5,
    "sepeda_motor": 33,
    "farmasi": 9,
    "semikonduktor": 31,
    "smelter": 10,
    "gula": 23,
    "kayu": 8
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 19.5,
    "sapi_perah": 12,
    "sapi_potong": 20,
    "domba_kambing": 37,
    "udang_kerang": 15.0,
    "ikan": 10,
    "padi": 37,
    "gandum_jagung": 26.0,
    "sayur_umbi": 11.0,
    "kedelai": 26,
    "kelapa_sawit": 36,
    "kopi_teh_kakao": 27.7
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 34,
    "gudang_senjata": 12,
    "hangar_tank": 7,
    "akademi_militer": 21,
    "pusat_komando": 22,
    "pangkalan_udara": 28,
    "pangkalan_laut": 20,
    "program_luar_angkasa": 32,
    "pertahanan_siber": 6,
    "anggaran_pertahanan": 1
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 1,
    "darat": {
        "tank_tempur_utama": 54,
        "apc_ifv": 110,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 35,
        "kapal_destroyer": 90,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 39,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 38,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 10000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 39,
    "intelijen": 8,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 36,
      "misi_mata_mata": 14,
      "misi_sabotase": 18,
      "manajemen_wilayah": 2,
      "program_nuklir": 0
  }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 28,
          "sepeda_motor": 34,
          "unit_k9": 23
  
  },
        "taktis_khusus": {
          "swat": 5,
          "helikopter_polisi": 23,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 8,
          "kamera_pengawas": 24,
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
      "prasekolah": 11,
      "dasar": 29,
      "menengah": 31,
      "lanjutan": 12,
      "universitas": 32,
      "lembaga_pendidikan": 22,
      "laboratorium": 39,
      "observatorium": 30,
      "pusat_penelitian": 21,
      "pusat_pengembangan": 26,
      "literasi": 81
  },
    "kesehatan": {
      "rumah_sakit_besar": 21,
      "rumah_sakit_kecil": 27,
      "pusat_diagnostik": 2,
      "harapan_hidup": 15,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 6,
      "pengadilan": 38,
      "kejaksaan": 3,
      "pos_polisi": 27,
      "armada_mobil_polisi": 8625,
      "akademi_polisi": 19,
      "indeks_korupsi": 62,
      "indeks_keamanan": 57
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 19,
      "sirkuit_balap": 10,
      "stadion": 18,
      "stadion_internasional": 30
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 8,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 35,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 40,
    "gaji_medis": 40,
    "gaji_militer": 40
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 0
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 145740,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 62200,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 7280,
    "harga_obat": 157900,
    "harga_pendidikan": 387120
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
      "kekuatan_lunak": 37,
      "kekuatan_keras": 38,
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
    "kesehatan": 3,
    "pendidikan": 23,
    "keamanan": 22,
    "keuangan": 22,
    "lingkungan": 60
  }
};



