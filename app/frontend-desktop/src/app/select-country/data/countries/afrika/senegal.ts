import { CountryData } from "../../types/_index";

export const senegal: CountryData = {
  "name_en": "Senegal",
  "capital": "Dakar",
  "name_id": "Senegal",
  "lon": -14,
  "lat": 14,
  "flag": "🇸🇳",
  "jumlah_penduduk": 15854360,
  "anggaran": 272,
  "pendapatan_nasional": "778",
  "religion": "Islam",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 16,
    "pembangkit_air": 40,
    "pembangkit_nuklir": 1,
    "jaringan_listrik": 84,
    "pembangkit_surya": 40,
    "pembangkit_termal": 28,
    "pembangkit_angin": 15
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 2,
    "jalur_sepeda": 31,
    "terminal_bus": 33,
    "helipad": 4,
    "jalan_tol": 14,
    "cakupan_internet": 62,
    "jalur_kereta": 36,
    "kualitas_jalan": 64,
    "pelabuhan_laut": 11,
    "kereta_bawah_tanah": 12
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 33,
    "batu_bara": 18,
    "tembaga": 8,
    "gas_alam": 26,
    "emas": 13,
    "bijih_besi": 33,
    "litium": 18,
    "nikel": 36,
    "minyak_bumi": 39,
    "logam_tanah_jarang": 13,
    "garam": 27,
    "uranium": 14
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 8,
    "mobil": 20,
    "semen_beton": 21,
    "pupuk": 37,
    "mie_instan": 4,
    "pengolahan_daging": 14,
    "air_mineral": 34,
    "sepeda_motor": 31,
    "farmasi": 20,
    "semikonduktor": 26,
    "smelter": 37,
    "gula": 28,
    "kayu": 39
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 28.5,
    "sapi_perah": 23,
    "sapi_potong": 18,
    "domba_kambing": 35,
    "udang_kerang": 29.5,
    "ikan": 15,
    "padi": 28,
    "gandum_jagung": 25.0,
    "sayur_umbi": 22.5,
    "kedelai": 23,
    "kelapa_sawit": 21,
    "kopi_teh_kakao": 21.3
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 40,
    "gudang_senjata": 34,
    "hangar_tank": 22,
    "akademi_militer": 34,
    "pusat_komando": 20,
    "pangkalan_udara": 34,
    "pangkalan_laut": 33,
    "program_luar_angkasa": 28,
    "pertahanan_siber": 36,
    "anggaran_pertahanan": 77
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 25,
    "darat": {
        "tank_tempur_utama": 172,
        "apc_ifv": 116,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 27,
        "kapal_destroyer": 37,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 133,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 173,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 250000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 4,
    "intelijen": 13,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 16,
      "misi_mata_mata": 21,
      "misi_sabotase": 16,
      "manajemen_wilayah": 28,
      "program_nuklir": 0
  }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 17,
          "sepeda_motor": 3,
          "unit_k9": 23
  
  },
        "taktis_khusus": {
          "swat": 27,
          "helikopter_polisi": 15,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 2,
          "kamera_pengawas": 14,
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
      "prasekolah": 29,
      "dasar": 17,
      "menengah": 11,
      "lanjutan": 32,
      "universitas": 35,
      "lembaga_pendidikan": 28,
      "laboratorium": 4,
      "observatorium": 22,
      "pusat_penelitian": 1,
      "pusat_pengembangan": 29,
      "literasi": 89
  },
    "kesehatan": {
      "rumah_sakit_besar": 9,
      "rumah_sakit_kecil": 5,
      "pusat_diagnostik": 40,
      "harapan_hidup": 5,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 25,
      "pengadilan": 30,
      "kejaksaan": 27,
      "pos_polisi": 10,
      "armada_mobil_polisi": 1640,
      "akademi_polisi": 1,
      "indeks_korupsi": 87,
      "indeks_keamanan": 66
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 15,
      "sirkuit_balap": 27,
      "stadion": 40,
      "stadion_internasional": 23
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 17,
      "kepuasan": 67,
      "pendapatan": 11
    },
    "korporasi": {
      "tarif": 19,
      "kepuasan": 52,
      "pendapatan": 10
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 4
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 9
    },
    "lingkungan": {
      "tarif": 17,
      "kepuasan": 88,
      "pendapatan": 10
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
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
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 40,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 14980,
    "harga_listrik": 2240,
    "harga_air": 10400,
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
      "kekuatan_lunak": 34,
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
    "kesehatan": 31,
    "pendidikan": 35,
    "keamanan": 4,
    "keuangan": 23,
    "lingkungan": 60
  }
};



