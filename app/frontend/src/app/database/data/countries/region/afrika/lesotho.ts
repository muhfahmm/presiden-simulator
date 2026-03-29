import { CountryData } from "../../../types";

export const lesotho: CountryData = {
  "name_en": "Lesotho",
  "capital": "Maseru",
  "name_id": "Lesotho",
  "lon": 28.5,
  "lat": -29.5,
  "flag": "🇱🇸",
  "jumlah_penduduk": 2108132,
  "anggaran": 24,
  "pendapatan_nasional": "69",
  "religion": "Katolik",
  "ideology": "Monarki",
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
    "bandara": 17,
    "jalur_sepeda": 28,
    "terminal_bus": 15,
    "helipad": 38,
    "jalan_tol": 13,
    "jalur_kereta": 8,
    "pelabuhan_laut": 22,
    "kereta_bawah_tanah": 7
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 22,
    "uranium": 0,
    "batu_bara": 40,
    "minyak_bumi": 21,
    "gas_alam": 0,
    "garam": 14,
    "nikel": 79,
    "litium": 0,
    "tembaga": 0,
    "aluminium": 42,
    "logam_tanah_jarang": 0,
    "bijih_besi": 79
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {    "mobil": 19,
    "semen_beton": 7,
    "sepeda_motor": 21,    "semikonduktor": 36,
    "smelter": 2,    "kayu": 22
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 21,
    "sapi_perah": 31,
    "sapi_potong": 8,
    "domba_kambing": 27
  },
  "sektor_agrikultur": {
    "padi": 36,
    "gandum_jagung": 24,
    "sayur_umbi": 10,
    "kedelai": 5,
    "kelapa_sawit": 23,
    "kopi_teh_kakao": 11
  },
  "sektor_perikanan": {
    "udang_kerang": 17,
    "ikan": 31
  },
  "sektor_olahan_pangan": {
    "air_mineral": 36,
    "gula": 29,
    "roti": 10,
    "pengolahan_daging": 17,
    "mie_instan": 2
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 33
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 6,
    "gudang_senjata": 28,
    "hangar_tank": 3,
    "akademi_militer": 35,
    "pusat_komando": 32,
    "pangkalan_udara": 24,
    "pangkalan_laut": 23,
    "program_luar_angkasa": 13,
    "pertahanan_siber": 8
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 26,
    "darat": {
        "tank_tempur_utama": 19,
        "apc_ifv": 2,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 33,
        "kapal_destroyer": 4,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 27,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 8,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 260000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 34,
    "intelijen": 21,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 1,
      "misi_mata_mata": 19,
      "misi_sabotase": 21,
      "manajemen_wilayah": 6,
      "program_nuklir": 0
  }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 6,
        "unit_interceptor_r2": 19,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 22,
          "helikopter_polisi": 29,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 22,
          "kamera_pengawas": 1,
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
      "prasekolah": 1,
      "dasar": 20,
      "menengah": 22,
      "lanjutan": 6,
      "universitas": 1,
      "lembaga_pendidikan": 24,
      "laboratorium": 17,
      "observatorium": 6,
      "pusat_penelitian": 14,
      "pusat_pengembangan": 1,
      "literasi": 67
  },
    "kesehatan": {
      "rumah_sakit_besar": 12,
      "rumah_sakit_kecil": 32,
      "pusat_diagnostik": 21,
      "harapan_hidup": 10,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 37,
      "pengadilan": 25,
      "kejaksaan": 26,
      "pos_polisi": 17,
      "armada_mobil_polisi": 5078,
      "akademi_polisi": 15,
      "indeks_korupsi": 65,
      "indeks_keamanan": 72
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 15,
      "sirkuit_balap": 26,
      "stadion": 34,
      "stadion_internasional": 12
  },

  "un_vote": 115,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 16,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 40,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 17,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 22,
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
    "gaji_medis": 50,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 25,
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
    "harga_minyak_goreng": 21560,
    "harga_gula": 28800,
    "harga_telur": 31100,
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
      "kekuatan_lunak": 36,
      "kekuatan_keras": 23,
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
    "pendidikan": 9,
    "keamanan": 11,
    "keuangan": 33,
    "lingkungan": 60
  }
};

