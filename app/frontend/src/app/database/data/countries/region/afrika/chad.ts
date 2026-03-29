import { CountryData } from "../../../types";

export const chad: CountryData = {
  "name_en": "Chad",
  "capital": "N'Djamena",
  "name_id": "Chad",
  "lon": 19,
  "lat": 15,
  "flag": "🇹🇩",
  "jumlah_penduduk": 15477751,
  "anggaran": 117,
  "pendapatan_nasional": "333",
  "religion": "Islam",
  "ideology": "Nasionalisme",
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
    "bandara": 40,
    "jalur_sepeda": 26,
    "terminal_bus": 20,
    "helipad": 28,
    "jalan_tol": 18,
    "jalur_kereta": 12,
    "pelabuhan_laut": 29,
    "kereta_bawah_tanah": 25
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 0,
    "uranium": 0,
    "batu_bara": 0,
    "minyak_bumi": 0,
    "gas_alam": 0,
    "garam": 90,
    "nikel": 0,
    "litium": 0,
    "tembaga": 0,
    "aluminium": 0,
    "logam_tanah_jarang": 0,
    "bijih_besi": 0
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {    "mobil": 23,
    "semen_beton": 20,
    "sepeda_motor": 27,    "semikonduktor": 17,
    "smelter": 40,    "kayu": 13
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 20,
    "sapi_perah": 6,
    "sapi_potong": 38,
    "domba_kambing": 35
  },
  "sektor_agrikultur": {
    "padi": 4,
    "gandum_jagung": 34,
    "sayur_umbi": 24,
    "kedelai": 27,
    "kelapa_sawit": 8,
    "kopi_teh_kakao": 16
  },
  "sektor_perikanan": {
    "udang_kerang": 12,
    "ikan": 2
  },
  "sektor_olahan_pangan": {
    "air_mineral": 17,
    "gula": 9,
    "roti": 27,
    "pengolahan_daging": 4,
    "mie_instan": 34
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 8
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 11,
    "gudang_senjata": 40,
    "hangar_tank": 33,
    "akademi_militer": 14,
    "pusat_komando": 4,
    "pangkalan_udara": 30,
    "pangkalan_laut": 22,
    "program_luar_angkasa": 3,
    "pertahanan_siber": 36
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 35,
    "darat": {
        "tank_tempur_utama": 34,
        "apc_ifv": 1,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 20,
        "kapal_destroyer": 36,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 24,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 25,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 350000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 27,
    "intelijen": 30,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 29,
      "misi_mata_mata": 20,
      "misi_sabotase": 35,
      "manajemen_wilayah": 9,
      "program_nuklir": 0
  }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 35,
        "unit_interceptor_r2": 2,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 29,
          "helikopter_polisi": 3,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 2,
          "kamera_pengawas": 34,
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
      "prasekolah": 29,
      "dasar": 3,
      "menengah": 24,
      "lanjutan": 14,
      "universitas": 4,
      "lembaga_pendidikan": 27,
      "laboratorium": 26,
      "observatorium": 9,
      "pusat_penelitian": 36,
      "pusat_pengembangan": 22,
      "literasi": 67
  },
    "kesehatan": {
      "rumah_sakit_besar": 32,
      "rumah_sakit_kecil": 14,
      "pusat_diagnostik": 25,
      "harapan_hidup": 14,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 1,
      "pengadilan": 20,
      "kejaksaan": 19,
      "pos_polisi": 16,
      "armada_mobil_polisi": 1832,
      "akademi_polisi": 7,
      "indeks_korupsi": 50,
      "indeks_keamanan": 78
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 34,
      "sirkuit_balap": 31,
      "stadion": 24,
      "stadion_internasional": 39
  },

  "un_vote": 58,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 32,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 3,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 35,
      "kepuasan": 61,
      "pendapatan": 9
    },
    "bea_cukai": {
      "tarif": 13,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 30,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 28,
      "kepuasan": 93,
      "pendapatan": 4
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
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 25,
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
    "harga_ayam": 57400,
    "harga_minyak_goreng": 21560,
    "harga_gula": 11520,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
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
      "kekuatan_lunak": 7,
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
    "kesehatan": 34,
    "pendidikan": 32,
    "keamanan": 6,
    "keuangan": 23,
    "lingkungan": 60
  }
};

