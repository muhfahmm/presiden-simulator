import { CountryData } from "../../../types";

export const sierra_leone: CountryData = {
  "name_en": "Sierra Leone",
  "capital": "Freetown",
  "name_id": "Sierra leone",
  "lon": -11.5,
  "lat": 8.5,
  "flag": "🇸🇱",
  "jumlah_penduduk": 7650154,
  "anggaran": 39,
  "pendapatan_nasional": "111",
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
    "bandara": 22,
    "jalur_sepeda": 37,
    "terminal_bus": 7,
    "helipad": 12,
    "jalan_tol": 24,
    "jalur_kereta": 23,
    "pelabuhan_laut": 32,
    "kereta_bawah_tanah": 4
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {    "mobil": 29,
    "semen_beton": 36,
    "pengolahan_daging": 10,    "sepeda_motor": 11,    "semikonduktor": 38,
    "smelter": 10,    "kayu": 40
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 24,
    "sapi_perah": 4,
    "sapi_potong": 30,
    "domba_kambing": 33
  },
  "sektor_agrikultur": {
    "padi": 20,
    "gandum_jagung": 16,
    "sayur_umbi": 30,
    "kedelai": 11,
    "kelapa_sawit": 15,
    "kopi_teh_kakao": 26
  },
  "sektor_perikanan": {
    "udang_kerang": 10,
    "ikan": 28
  },
  "sektor_olahan_pangan": {
    "air_mineral": 7,
    "gula": 29,
    "roti": 9,
    "pengolahan_daging": 10,
    "mie_instan": 11
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 4
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 17,
    "gudang_senjata": 7,
    "hangar_tank": 32,
    "akademi_militer": 23,
    "pusat_komando": 4,
    "pangkalan_udara": 27,
    "pangkalan_laut": 11,
    "program_luar_angkasa": 38,
    "pertahanan_siber": 14
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 30,
    "darat": {
        "tank_tempur_utama": 129,
        "apc_ifv": 183,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 5,
        "kapal_destroyer": 77,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 107,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 169,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 300000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 1,
    "intelijen": 28,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 30,
      "misi_mata_mata": 4,
      "misi_sabotase": 29,
      "manajemen_wilayah": 33,
      "program_nuklir": 0
  }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 24,
        "unit_interceptor_r2": 19,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 15,
          "helikopter_polisi": 29,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 22,
          "kamera_pengawas": 24,
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
      "prasekolah": 2,
      "dasar": 34,
      "menengah": 22,
      "lanjutan": 32,
      "universitas": 2,
      "lembaga_pendidikan": 31,
      "laboratorium": 28,
      "observatorium": 4,
      "pusat_penelitian": 26,
      "pusat_pengembangan": 11,
      "literasi": 61
  },
    "kesehatan": {
      "rumah_sakit_besar": 32,
      "rumah_sakit_kecil": 28,
      "pusat_diagnostik": 20,
      "harapan_hidup": 16,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 2,
      "pengadilan": 34,
      "kejaksaan": 17,
      "pos_polisi": 14,
      "armada_mobil_polisi": 2557,
      "akademi_polisi": 8,
      "indeks_korupsi": 82,
      "indeks_keamanan": 79
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 26,
      "sirkuit_balap": 14,
      "stadion": 21,
      "stadion_internasional": 11
  },

  "un_vote": 91,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 33,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 20,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 23,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 14,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 40,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 14,
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
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 25,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 145740,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 30800,
    "harga_gula": 20160,
    "harga_telur": 62200,
    "harga_bbm": 5350,
    "harga_listrik": 3200,
    "harga_air": 5200,
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
      "kekuatan_lunak": 40,
      "kekuatan_keras": 3,
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
    "kesehatan": 40,
    "pendidikan": 3,
    "keamanan": 11,
    "keuangan": 29,
    "lingkungan": 60
  }
};

