import { CountryData } from "../../../types";

export const guinea: CountryData = {
  "name_en": "Guinea",
  "capital": "Conakry",
  "name_id": "Guinea",
  "lon": -10,
  "lat": 11,
  "flag": "🇬🇳",
  "jumlah_penduduk": 12414318,
  "anggaran": 175,
  "pendapatan_nasional": "500",
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
    "bandara": 2,
    "jalur_sepeda": 19,
    "terminal_bus": 8,
    "helipad": 27,
    "jalan_tol": 9,
    "jalur_kereta": 33,
    "pelabuhan_laut": 24,
    "kereta_bawah_tanah": 9
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {    "mobil": 13,
    "semen_beton": 40,
    "pengolahan_daging": 18,    "sepeda_motor": 33,    "semikonduktor": 21,
    "smelter": 34,    "kayu": 27
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 24,
    "sapi_perah": 29,
    "sapi_potong": 5,
    "domba_kambing": 30
  },
  "sektor_agrikultur": {
    "padi": 17,
    "gandum_jagung": 16,
    "sayur_umbi": 16,
    "kedelai": 22,
    "kelapa_sawit": 33,
    "kopi_teh_kakao": 29
  },
  "sektor_perikanan": {
    "udang_kerang": 22,
    "ikan": 1
  },
  "sektor_olahan_pangan": {
    "air_mineral": 17,
    "gula": 15,
    "roti": 1,
    "pengolahan_daging": 18,
    "mie_instan": 3
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 18
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 19,
    "gudang_senjata": 13,
    "hangar_tank": 9,
    "akademi_militer": 28,
    "pusat_komando": 27,
    "pangkalan_udara": 26,
    "pangkalan_laut": 10,
    "program_luar_angkasa": 39,
    "pertahanan_siber": 29
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 20,
    "darat": {
        "tank_tempur_utama": 10,
        "apc_ifv": 4,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 17,
        "kapal_destroyer": 20,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 12,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 3,
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
    "waktu_respon": 39,
    "intelijen": 19,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 1,
      "misi_mata_mata": 21,
      "misi_sabotase": 35,
      "manajemen_wilayah": 10,
      "program_nuklir": 0
  }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 28,
        "unit_interceptor_r2": 18,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 6,
          "helikopter_polisi": 33,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 17,
          "kamera_pengawas": 25,
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
      "prasekolah": 10,
      "dasar": 33,
      "menengah": 17,
      "lanjutan": 10,
      "universitas": 11,
      "lembaga_pendidikan": 10,
      "laboratorium": 1,
      "observatorium": 26,
      "pusat_penelitian": 26,
      "pusat_pengembangan": 9,
      "literasi": 80
  },
    "kesehatan": {
      "rumah_sakit_besar": 11,
      "rumah_sakit_kecil": 2,
      "pusat_diagnostik": 39,
      "harapan_hidup": 37,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 27,
      "pengadilan": 40,
      "kejaksaan": 17,
      "pos_polisi": 38,
      "armada_mobil_polisi": 5895,
      "akademi_polisi": 2,
      "indeks_korupsi": 85,
      "indeks_keamanan": 71
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 1,
      "sirkuit_balap": 8,
      "stadion": 33,
      "stadion_internasional": 20
  },

  "un_vote": 49,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 33,
      "kepuasan": 67,
      "pendapatan": 15
    },
    "korporasi": {
      "tarif": 35,
      "kepuasan": 52,
      "pendapatan": 8
    },
    "penghasilan": {
      "tarif": 3,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 20,
      "kepuasan": 86,
      "pendapatan": 9
    },
    "lingkungan": {
      "tarif": 25,
      "kepuasan": 88,
      "pendapatan": 5
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 21,
      "kepuasan": 93,
      "pendapatan": 8
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
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
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 43540,
    "harga_bbm": 14980,
    "harga_listrik": 1280,
    "harga_air": 5200,
    "harga_obat": 126320,
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
    "kesehatan": 4,
    "pendidikan": 16,
    "keamanan": 12,
    "keuangan": 31,
    "lingkungan": 60
  }
};

