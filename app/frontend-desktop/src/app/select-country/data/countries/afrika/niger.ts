import { CountryData } from "../../types/_index";

export const niger: CountryData = {
  "name_en": "Niger",
  "capital": "Niamey",
  "name_id": "Niger",
  "lon": 8,
  "lat": 16,
  "flag": "🇳🇪",
  "jumlah_penduduk": 22442948,
  "anggaran": 146,
  "pendapatan_nasional": "417",
  "religion": "Islam",
  "ideology": "Nasionalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 35,
    "pembangkit_air": 23,
    "pembangkit_nuklir": 34,
    "jaringan_listrik": 80,
    "pembangkit_surya": 12,
    "pembangkit_termal": 40,
    "pembangkit_angin": 1
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 35,
    "jalur_sepeda": 14,
    "terminal_bus": 39,
    "helipad": 38,
    "jalan_tol": 40,
    "cakupan_internet": 53,
    "jalur_kereta": 35,
    "kualitas_jalan": 73,
    "pelabuhan_laut": 38,
    "kereta_bawah_tanah": 38
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 8,
    "batu_bara": 25,
    "tembaga": 38,
    "gas_alam": 19,
    "emas": 21,
    "bijih_besi": 9,
    "litium": 28,
    "nikel": 17,
    "minyak_bumi": 28,
    "logam_tanah_jarang": 24,
    "garam": 13,
    "uranium": 18
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 5,
    "mobil": 29,
    "semen_beton": 7,
    "pupuk": 24,
    "mie_instan": 27,
    "pengolahan_daging": 36,
    "air_mineral": 9,
    "sepeda_motor": 21,
    "farmasi": 32,
    "semikonduktor": 14,
    "smelter": 6,
    "gula": 4,
    "kayu": 30
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 31.0,
    "sapi_perah": 30,
    "sapi_potong": 10,
    "domba_kambing": 2,
    "udang_kerang": 36.0,
    "ikan": 25,
    "padi": 1,
    "gandum_jagung": 34.5,
    "sayur_umbi": 35.5,
    "kedelai": 24,
    "kelapa_sawit": 37,
    "kopi_teh_kakao": 16.7
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 32,
    "gudang_senjata": 18,
    "hangar_tank": 20,
    "akademi_militer": 19,
    "pusat_komando": 32,
    "pangkalan_udara": 24,
    "pangkalan_laut": 25,
    "program_luar_angkasa": 39,
    "pertahanan_siber": 16,
    "anggaran_pertahanan": 41
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 2,
    "darat": {
        "tank_tempur_utama": 87,
        "apc_ifv": 136,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 27,
        "kapal_destroyer": 95,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 38,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 67,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 20000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 23,
    "intelijen": 2,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 5,
      "misi_mata_mata": 26,
      "misi_sabotase": 38,
      "manajemen_wilayah": 35,
      "program_nuklir": 0
  }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 30,
          "sepeda_motor": 6,
          "unit_k9": 23
  
  },
        "taktis_khusus": {
          "swat": 8,
          "helikopter_polisi": 31,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 22,
          "kamera_pengawas": 34,
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
      "prasekolah": 13,
      "dasar": 34,
      "menengah": 7,
      "lanjutan": 15,
      "universitas": 1,
      "lembaga_pendidikan": 19,
      "laboratorium": 23,
      "observatorium": 40,
      "pusat_penelitian": 10,
      "pusat_pengembangan": 7,
      "literasi": 72
  },
    "kesehatan": {
      "rumah_sakit_besar": 3,
      "rumah_sakit_kecil": 11,
      "pusat_diagnostik": 14,
      "harapan_hidup": 30,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 24,
      "pengadilan": 35,
      "kejaksaan": 13,
      "pos_polisi": 9,
      "armada_mobil_polisi": 8807,
      "akademi_polisi": 16,
      "indeks_korupsi": 69,
      "indeks_keamanan": 81
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 22,
      "sirkuit_balap": 35,
      "stadion": 24,
      "stadion_internasional": 1
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 38,
      "kepuasan": 67,
      "pendapatan": 7
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 38,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 15,
      "kepuasan": 86,
      "pendapatan": 5
    },
    "lingkungan": {
      "tarif": 27,
      "kepuasan": 88,
      "pendapatan": 5
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 27,
      "kepuasan": 93,
      "pendapatan": 10
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
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 7200,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 4160,
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
      "kekuatan_lunak": 18,
      "kekuatan_keras": 5,
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
    "kesehatan": 23,
    "pendidikan": 5,
    "keamanan": 34,
    "keuangan": 1,
    "lingkungan": 60
  }
};



