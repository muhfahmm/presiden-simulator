import { CountryData } from "../../../types";

export const republik_zimbabwe: CountryData = {
  "name_en": "Zimbabwe",
  "capital": "Harare",
  "name_id": "Republik zimbabwe",
  "lon": 30,
  "lat": -20,
  "flag": "🇿🇼",
  "jumlah_penduduk": 14439018,
  "anggaran": 194,
  "pendapatan_nasional": "556",
  "religion": "Protestan",
  "ideology": "Sosialisme",
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
    "bandara": 20,
    "jalur_sepeda": 12,
    "terminal_bus": 22,
    "helipad": 10,
    "jalan_tol": 25,
    "jalur_kereta": 17,
    "pelabuhan_laut": 23,
    "kereta_bawah_tanah": 11
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {    "mobil": 19,
    "semen_beton": 40,
    "pengolahan_daging": 25,    "sepeda_motor": 16,    "semikonduktor": 11,
    "smelter": 24,    "kayu": 26
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 10,
    "sapi_perah": 34,
    "sapi_potong": 40,
    "domba_kambing": 32
  },
  "sektor_agrikultur": {
    "padi": 19,
    "gandum_jagung": 36,
    "sayur_umbi": 18,
    "kedelai": 14,
    "kelapa_sawit": 12,
    "kopi_teh_kakao": 12
  },
  "sektor_perikanan": {
    "udang_kerang": 24,
    "ikan": 1
  },
  "sektor_olahan_pangan": {
    "air_mineral": 25,
    "gula": 31,
    "roti": 16,
    "pengolahan_daging": 25,
    "mie_instan": 37
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 16
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 35,
    "gudang_senjata": 9,
    "hangar_tank": 2,
    "akademi_militer": 20,
    "pusat_komando": 15,
    "pangkalan_udara": 6,
    "pangkalan_laut": 20,
    "program_luar_angkasa": 6,
    "pertahanan_siber": 1
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 7,
    "darat": {
        "tank_tempur_utama": 92,
        "apc_ifv": 97,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 39,
        "kapal_destroyer": 119,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 120,
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
        "infanteri_reguler": 70000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 32,
    "intelijen": 15,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 28,
      "misi_mata_mata": 22,
      "misi_sabotase": 39,
      "manajemen_wilayah": 37,
      "program_nuklir": 0
  }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 3,
        "unit_interceptor_r2": 35,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 29,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 13,
          "kamera_pengawas": 33,
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
      "prasekolah": 38,
      "dasar": 32,
      "menengah": 5,
      "lanjutan": 3,
      "universitas": 19,
      "lembaga_pendidikan": 15,
      "laboratorium": 25,
      "observatorium": 14,
      "pusat_penelitian": 39,
      "pusat_pengembangan": 16,
      "literasi": 62
  },
    "kesehatan": {
      "rumah_sakit_besar": 6,
      "rumah_sakit_kecil": 33,
      "pusat_diagnostik": 35,
      "harapan_hidup": 38,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 9,
      "pengadilan": 8,
      "kejaksaan": 23,
      "pos_polisi": 6,
      "armada_mobil_polisi": 1107,
      "akademi_polisi": 8,
      "indeks_korupsi": 76,
      "indeks_keamanan": 86
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 15,
      "sirkuit_balap": 12,
      "stadion": 9,
      "stadion_internasional": 28
  },

  "un_vote": 36,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 34,
      "kepuasan": 67,
      "pendapatan": 15
    },
    "korporasi": {
      "tarif": 25,
      "kepuasan": 52,
      "pendapatan": 13
    },
    "penghasilan": {
      "tarif": 18,
      "kepuasan": 61,
      "pendapatan": 7
    },
    "bea_cukai": {
      "tarif": 18,
      "kepuasan": 86,
      "pendapatan": 7
    },
    "lingkungan": {
      "tarif": 3,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 7
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
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 157900,
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
      "kekuatan_lunak": 2,
      "kekuatan_keras": 24,
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
    "pendidikan": 17,
    "keamanan": 27,
    "keuangan": 5,
    "lingkungan": 60
  }
};

