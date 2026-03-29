import { CountryData } from "../../../types";

export const guinea_bissau: CountryData = {
  "name_en": "Guinea-Bissau",
  "capital": "Bissau",
  "name_id": "Guinea-bissau",
  "lon": -15,
  "lat": 12,
  "flag": "🇬🇼",
  "jumlah_penduduk": 1874309,
  "anggaran": 18,
  "pendapatan_nasional": "50",
  "religion": "Islam",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_listrik_tenaga_gas": 30,
    "pembangkit_listrik_tenaga_air": 20,
    "pembangkit_listrik_tenaga_nuklir": 0,
    "pembangkit_listrik_tenaga_surya": 5,
    "pembangkit_listrik_tenaga_uap": 40,
    "pembangkit_listrik_tenaga_angin": 4
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 16,
    "jalur_sepeda": 38,
    "terminal_bus": 15,
    "helipad": 15,
    "jalan_tol": 26,
    "jalur_kereta": 22,
    "pelabuhan_laut": 25,
    "kereta_bawah_tanah": 1
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 0,
    "uranium": 7,
    "batu_bara": 0,
    "minyak_bumi": 0,
    "gas_alam": 0,
    "garam": 0,
    "nikel": 0,
    "litium": 0,
    "tembaga": 0,
    "aluminium": 34,
    "logam_tanah_jarang": 0,
    "bijih_besi": 0
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {    "mobil": 29,
    "semen_beton": 3,
    "sepeda_motor": 18,    "semikonduktor": 30,
    "smelter": 40,    "kayu": 27
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 14,
    "sapi_perah": 37,
    "sapi_potong": 39,
    "domba_kambing": 1
  },
  "sektor_agrikultur": {
    "padi": 6,
    "gandum_jagung": 28,
    "sayur_umbi": 16,
    "kedelai": 1,
    "kelapa_sawit": 23,
    "kopi_teh_kakao": 26
  },
  "sektor_perikanan": {
    "udang_kerang": 10,
    "ikan": 9
  },
  "sektor_olahan_pangan": {
    "air_mineral": 22,
    "gula": 1,
    "roti": 29,
    "pengolahan_daging": 36,
    "mie_instan": 9
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 19
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 6,
    "gudang_senjata": 9,
    "hangar_tank": 11,
    "akademi_militer": 11,
    "pusat_komando": 31,
    "pangkalan_udara": 18,
    "pangkalan_laut": 40,
    "program_luar_angkasa": 24,
    "pertahanan_siber": 19
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 33,
    "darat": {
        "tank_tempur_utama": 28,
        "apc_ifv": 28,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 7,
        "kapal_destroyer": 11,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 17,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 24,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 330000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 20,
    "intelijen": 13,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 31,
      "misi_mata_mata": 5,
      "misi_sabotase": 28,
      "manajemen_wilayah": 32,
      "program_nuklir": 0
  }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 33,
        "unit_interceptor_r2": 27,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 11,
          "helikopter_polisi": 18,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 12,
          "kamera_pengawas": 35,
          "pusat_forensik": 1
  }
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
      "prasekolah": 39,
      "dasar": 3,
      "menengah": 15,
      "lanjutan": 19,
      "universitas": 40,
      "lembaga_pendidikan": 20,
      "laboratorium": 35,
      "observatorium": 38,
      "pusat_penelitian": 6,
      "pusat_pengembangan": 33,
      "literasi": 80
  },
    "kesehatan": {
      "rumah_sakit_besar": 9,
      "rumah_sakit_kecil": 26,
      "pusat_diagnostik": 8,
      "harapan_hidup": 26,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 2,
      "pengadilan": 36,
      "kejaksaan": 10,
      "pos_polisi": 28,
      "armada_mobil_polisi": 6154,
      "akademi_polisi": 14,
      "indeks_korupsi": 95,
      "indeks_keamanan": 92
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 15,
      "sirkuit_balap": 4,
      "stadion": 37,
      "stadion_internasional": 16
  },

  "un_vote": 100,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 31,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 21,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 12,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 16,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 7,
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
    "gaji_medis": 50,
    "gaji_militer": 40
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 0
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 12320,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 126320,
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
      "kekuatan_lunak": 28,
      "kekuatan_keras": 30,
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
    "kesehatan": 21,
    "pendidikan": 25,
    "keamanan": 25,
    "keuangan": 32,
    "lingkungan": 60
  }
};

