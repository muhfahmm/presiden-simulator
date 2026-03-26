import { CountryData } from "../../../types";

export const angola: CountryData = {
  "name_en": "Angola",
  "capital": "Luanda",
  "name_id": "Angola",
  "lon": 13.23,
  "lat": -8.83,
  "flag": "🇦🇴",
  "jumlah_penduduk": 30809762,
  "anggaran": 826,
  "pendapatan_nasional": "2361",
  "religion": "Katolik",
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
    "bandara": 25,
    "jalur_sepeda": 27,
    "terminal_bus": 18,
    "helipad": 10,
    "jalan_tol": 40,
    "jalur_kereta": 39,
    "pelabuhan_laut": 6,
    "kereta_bawah_tanah": 16
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {    "mobil": 2,
    "semen_beton": 20,
    "pengolahan_daging": 31,    "sepeda_motor": 38,    "semikonduktor": 1,
    "smelter": 4,    "kayu": 22
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 14.0,
    "sapi_perah": 15,
    "sapi_potong": 17,
    "domba_kambing": 39
  },
  "sektor_agrikultur": {
    "padi": 20,
    "gandum_jagung": 22.0,
    "sayur_umbi": 21.0,
    "kedelai": 5,
    "kelapa_sawit": 39,
    "kopi_teh_kakao": 22.3
  },
  "sektor_perikanan": {
    "udang_kerang": 31.5,
    "ikan": 13
  },
  "sektor_olahan_pangan": {
    "air_mineral": 40,
    "gula": 13,
    "roti": 37,
    "pengolahan_daging": 31,
    "mie_instan": 13
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 23
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 10,
    "gudang_senjata": 38,
    "hangar_tank": 9,
    "akademi_militer": 4,
    "pusat_komando": 14,
    "pangkalan_udara": 7,
    "pangkalan_laut": 32,
    "program_luar_angkasa": 3,
    "pertahanan_siber": 24
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 23,
    "darat": {
        "tank_tempur_utama": 19,
        "apc_ifv": 39,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 40,
        "kapal_destroyer": 21,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 21,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 20,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 230000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 5,
    "intelijen": 26,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 8,
      "misi_mata_mata": 17,
      "misi_sabotase": 5,
      "manajemen_wilayah": 5,
      "program_nuklir": 0
  }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 33,
        "sepeda_motor": 33,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 12,
          "helikopter_polisi": 10,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 21,
          "kamera_pengawas": 21,
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
      "prasekolah": 26,
      "dasar": 24,
      "menengah": 27,
      "lanjutan": 8,
      "universitas": 40,
      "lembaga_pendidikan": 35,
      "laboratorium": 26,
      "observatorium": 17,
      "pusat_penelitian": 36,
      "pusat_pengembangan": 9,
      "literasi": 93
  },
    "kesehatan": {
      "rumah_sakit_besar": 20,
      "rumah_sakit_kecil": 7,
      "pusat_diagnostik": 16,
      "harapan_hidup": 28,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 5,
      "pengadilan": 36,
      "kejaksaan": 24,
      "pos_polisi": 25,
      "armada_mobil_polisi": 4093,
      "akademi_polisi": 18,
      "indeks_korupsi": 74,
      "indeks_keamanan": 61
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 30,
      "sirkuit_balap": 5,
      "stadion": 36,
      "stadion_internasional": 40
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 26,
      "kepuasan": 67,
      "pendapatan": 49
    },
    "korporasi": {
      "tarif": 26,
      "kepuasan": 52,
      "pendapatan": 47
    },
    "penghasilan": {
      "tarif": 28,
      "kepuasan": 61,
      "pendapatan": 56
    },
    "bea_cukai": {
      "tarif": 16,
      "kepuasan": 86,
      "pendapatan": 32
    },
    "lingkungan": {
      "tarif": 26,
      "kepuasan": 88,
      "pendapatan": 62
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 5 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 13 },
    "lainnya": {
      "tarif": 34,
      "kepuasan": 93,
      "pendapatan": 69
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 50,
    "gaji_medis": 40,
    "gaji_militer": 40
  },
  "subsidi": {
    "subsidi_energi": 25,
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
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 30800,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 78950,
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
      "kekuatan_lunak": 37,
      "kekuatan_keras": 6,
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
    "kesehatan": 35,
    "pendidikan": 32,
    "keamanan": 29,
    "keuangan": 18,
    "lingkungan": 60
  }
};

