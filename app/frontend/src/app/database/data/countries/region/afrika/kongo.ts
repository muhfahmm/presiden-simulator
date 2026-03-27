import { CountryData } from "../../../types";

export const kongo: CountryData = {
  "name_en": "Republic of the Congo",
  "capital": "Brazzaville",
  "name_id": "Kongo",
  "lon": 15,
  "lat": -1,
  "flag": "🇨🇬",
  "jumlah_penduduk": 5244363,
  "anggaran": 146,
  "pendapatan_nasional": "417",
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
    "bandara": 3,
    "jalur_sepeda": 35,
    "terminal_bus": 40,
    "helipad": 18,
    "jalan_tol": 21,
    "jalur_kereta": 32,
    "pelabuhan_laut": 38,
    "kereta_bawah_tanah": 12
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {    "mobil": 24,
    "semen_beton": 9,
    "pengolahan_daging": 18,    "sepeda_motor": 34,    "semikonduktor": 25,
    "smelter": 10,    "kayu": 20
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 30,
    "sapi_perah": 34,
    "sapi_potong": 29,
    "domba_kambing": 18
  },
  "sektor_agrikultur": {
    "padi": 13,
    "gandum_jagung": 22,
    "sayur_umbi": 20,
    "kedelai": 28,
    "kelapa_sawit": 16,
    "kopi_teh_kakao": 37
  },
  "sektor_perikanan": {
    "udang_kerang": 28,
    "ikan": 20
  },
  "sektor_olahan_pangan": {
    "air_mineral": 26,
    "gula": 8,
    "roti": 25,
    "pengolahan_daging": 18,
    "mie_instan": 35
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
    "penjara": 28,
    "gudang_senjata": 3,
    "hangar_tank": 19,
    "akademi_militer": 40,
    "pusat_komando": 5,
    "pangkalan_udara": 27,
    "pangkalan_laut": 17,
    "program_luar_angkasa": 38,
    "pertahanan_siber": 1
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 36,
    "darat": {
        "tank_tempur_utama": 24,
        "apc_ifv": 26,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 38,
        "kapal_destroyer": 9,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 1,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 19,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 360000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 19,
    "intelijen": 26,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 17,
      "misi_mata_mata": 35,
      "misi_sabotase": 21,
      "manajemen_wilayah": 3,
      "program_nuklir": 0
  }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 2,
        "unit_interceptor_r2": 31,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 5,
          "helikopter_polisi": 6,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 12,
          "kamera_pengawas": 31,
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
      "prasekolah": 17,
      "dasar": 12,
      "menengah": 7,
      "lanjutan": 19,
      "universitas": 23,
      "lembaga_pendidikan": 13,
      "laboratorium": 26,
      "observatorium": 1,
      "pusat_penelitian": 38,
      "pusat_pengembangan": 33,
      "literasi": 64
  },
    "kesehatan": {
      "rumah_sakit_besar": 13,
      "rumah_sakit_kecil": 23,
      "pusat_diagnostik": 6,
      "harapan_hidup": 4,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 33,
      "pengadilan": 11,
      "kejaksaan": 28,
      "pos_polisi": 29,
      "armada_mobil_polisi": 6616,
      "akademi_polisi": 16,
      "indeks_korupsi": 88,
      "indeks_keamanan": 86
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 22,
      "sirkuit_balap": 6,
      "stadion": 19,
      "stadion_internasional": 4
  },

  "un_vote": 53,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 6,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 12
    },
    "bea_cukai": {
      "tarif": 26,
      "kepuasan": 86,
      "pendapatan": 5
    },
    "lingkungan": {
      "tarif": 34,
      "kepuasan": 88,
      "pendapatan": 11
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 10,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 50,
    "gaji_medis": 50,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 25,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 21400,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 221060,
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
      "kekuatan_lunak": 15,
      "kekuatan_keras": 11,
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
    "kesehatan": 3,
    "pendidikan": 17,
    "keamanan": 3,
    "keuangan": 37,
    "lingkungan": 60
  }
};

