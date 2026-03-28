import { CountryData } from "../../../types";

export const maroko: CountryData = {
  "name_en": "Morocco",
  "capital": "Rabat",
  "name_id": "Maroko",
  "lon": -5,
  "lat": 32,
  "flag": "🇲🇦",
  "jumlah_penduduk": 36029138,
  "anggaran": 1313,
  "pendapatan_nasional": "3750",
  "religion": "Islam",
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
    "bandara": 37,
    "jalur_sepeda": 32,
    "terminal_bus": 19,
    "helipad": 26,
    "jalan_tol": 6,
    "jalur_kereta": 16,
    "pelabuhan_laut": 36,
    "kereta_bawah_tanah": 39
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 34,
    "uranium": 70,
    "batu_bara": 70,
    "minyak_bumi": 0,
    "gas_alam": 77,
    "garam": 0,
    "nikel": 20,
    "litium": 9,
    "tembaga": 0,
    "aluminium": 17,
    "logam_tanah_jarang": 0,
    "bijih_besi": 0
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {    "mobil": 23,
    "semen_beton": 37,
    "pengolahan_daging": 1,    "sepeda_motor": 13,    "semikonduktor": 33,
    "smelter": 11,    "kayu": 35
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 28,
    "sapi_perah": 16,
    "sapi_potong": 18,
    "domba_kambing": 1
  },
  "sektor_agrikultur": {
    "padi": 32,
    "gandum_jagung": 9,
    "sayur_umbi": 42,
    "kedelai": 22,
    "kelapa_sawit": 25,
    "kopi_teh_kakao": 9
  },
  "sektor_perikanan": {
    "udang_kerang": 8,
    "ikan": 1
  },
  "sektor_olahan_pangan": {
    "air_mineral": 37,
    "gula": 18,
    "roti": 34,
    "pengolahan_daging": 1,
    "mie_instan": 31
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 24
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 11,
    "gudang_senjata": 17,
    "hangar_tank": 22,
    "akademi_militer": 23,
    "pusat_komando": 13,
    "pangkalan_udara": 17,
    "pangkalan_laut": 31,
    "program_luar_angkasa": 13,
    "pertahanan_siber": 15
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 19,
    "darat": {
        "tank_tempur_utama": 77,
        "apc_ifv": 129,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 13,
        "kapal_destroyer": 35,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 121,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 72,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 190000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 39,
    "intelijen": 38,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 29,
      "misi_mata_mata": 23,
      "misi_sabotase": 3,
      "manajemen_wilayah": 4,
      "program_nuklir": 0
  }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 29,
        "unit_interceptor_r2": 23,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 28,
          "helikopter_polisi": 3,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 10,
          "kamera_pengawas": 40,
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
      "prasekolah": 13,
      "dasar": 17,
      "menengah": 39,
      "lanjutan": 22,
      "universitas": 18,
      "lembaga_pendidikan": 23,
      "laboratorium": 40,
      "observatorium": 21,
      "pusat_penelitian": 35,
      "pusat_pengembangan": 33,
      "literasi": 66
  },
    "kesehatan": {
      "rumah_sakit_besar": 15,
      "rumah_sakit_kecil": 40,
      "pusat_diagnostik": 36,
      "harapan_hidup": 40,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 25,
      "pengadilan": 9,
      "kejaksaan": 27,
      "pos_polisi": 2,
      "armada_mobil_polisi": 2738,
      "akademi_polisi": 40,
      "indeks_korupsi": 70,
      "indeks_keamanan": 60
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 21,
      "sirkuit_balap": 22,
      "stadion": 3,
      "stadion_internasional": 35
  },

  "un_vote": 109,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 24,
      "kepuasan": 67,
      "pendapatan": 67
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 102
    },
    "penghasilan": {
      "tarif": 37,
      "kepuasan": 61,
      "pendapatan": 127
    },
    "bea_cukai": {
      "tarif": 35,
      "kepuasan": 86,
      "pendapatan": 73
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 51
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 7 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 20 },
    "lainnya": {
      "tarif": 5,
      "kepuasan": 93,
      "pendapatan": 10
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 30,
    "gaji_guru": 40,
    "gaji_medis": 50,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 2600,
    "harga_obat": 78950,
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
      "kekuatan_lunak": 5,
      "kekuatan_keras": 28,
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
    "pendidikan": 29,
    "keamanan": 9,
    "keuangan": 14,
    "lingkungan": 60
  }
};

