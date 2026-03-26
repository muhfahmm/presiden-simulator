import { CountryData } from "../../types/_index";

export const mesir: CountryData = {
  "name_en": "Egypt",
  "capital": "Cairo",
  "name_id": "Mesir",
  "lon": 30,
  "lat": 27,
  "flag": "🇪🇬",
  "jumlah_penduduk": 98423595,
  "anggaran": 3841,
  "pendapatan_nasional": "10973",
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
    "bandara": 27,
    "jalur_sepeda": 37,
    "terminal_bus": 24,
    "helipad": 24,
    "jalan_tol": 16,
    "jalur_kereta": 12,
    "pelabuhan_laut": 80,
    "kereta_bawah_tanah": 17
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {    "mobil": 16,
    "semen_beton": 13,
    "pengolahan_daging": 38,    "sepeda_motor": 16,    "semikonduktor": 30,
    "smelter": 12,    "kayu": 21
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 32.0,
    "sapi_perah": 17,
    "sapi_potong": 2,
    "domba_kambing": 26
  },
  "sektor_agrikultur": {
    "padi": 5,
    "gandum_jagung": 48.0,
    "sayur_umbi": 40.0,
    "kedelai": 4,
    "kelapa_sawit": 34,
    "kopi_teh_kakao": 16.3
  },
  "sektor_perikanan": {
    "udang_kerang": 2.0,
    "ikan": 22
  },
  "sektor_olahan_pangan": {
    "air_mineral": 9,
    "gula": 29,
    "roti": 21,
    "pengolahan_daging": 38,
    "mie_instan": 39
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
    "penjara": 9,
    "gudang_senjata": 18,
    "hangar_tank": 19,
    "akademi_militer": 27,
    "pusat_komando": 29,
    "pangkalan_udara": 32,
    "pangkalan_laut": 40,
    "program_luar_angkasa": 2,
    "pertahanan_siber": 17
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 28,
    "darat": {
        "tank_tempur_utama": 177,
        "apc_ifv": 57,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 10,
        "kapal_destroyer": 128,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 32,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 40,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 280000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 36,
    "intelijen": 17,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 9,
      "misi_mata_mata": 35,
      "misi_sabotase": 31,
      "manajemen_wilayah": 20,
      "program_nuklir": 0
  }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 32,
        "sepeda_motor": 30,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 12,
          "helikopter_polisi": 27,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 13,
          "kamera_pengawas": 37,
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
      "prasekolah": 3,
      "dasar": 3,
      "menengah": 19,
      "lanjutan": 28,
      "universitas": 30,
      "lembaga_pendidikan": 6,
      "laboratorium": 19,
      "observatorium": 14,
      "pusat_penelitian": 18,
      "pusat_pengembangan": 7,
      "literasi": 67
  },
    "kesehatan": {
      "rumah_sakit_besar": 8,
      "rumah_sakit_kecil": 32,
      "pusat_diagnostik": 33,
      "harapan_hidup": 25,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 12,
      "pengadilan": 3,
      "kejaksaan": 4,
      "pos_polisi": 25,
      "armada_mobil_polisi": 8480,
      "akademi_polisi": 19,
      "indeks_korupsi": 72,
      "indeks_keamanan": 87
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 38,
      "sirkuit_balap": 6,
      "stadion": 31,
      "stadion_internasional": 4
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 37,
      "kepuasan": 67,
      "pendapatan": 352
    },
    "korporasi": {
      "tarif": 18,
      "kepuasan": 52,
      "pendapatan": 169
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 62
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 209
    },
    "lingkungan": {
      "tarif": 20,
      "kepuasan": 88,
      "pendapatan": 160
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 20 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 58 },
    "lainnya": {
      "tarif": 24,
      "kepuasan": 93,
      "pendapatan": 137
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 50,
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
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 62200,
    "harga_bbm": 14980,
    "harga_listrik": 2240,
    "harga_air": 7280,
    "harga_obat": 126320,
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
      "kekuatan_lunak": 6,
      "kekuatan_keras": 34,
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
    "kesehatan": 30,
    "pendidikan": 16,
    "keamanan": 4,
    "keuangan": 23,
    "lingkungan": 60
  }
};

