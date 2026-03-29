import { CountryData } from "../../../types";

export const mauritania: CountryData = {
  "name_en": "Mauritania",
  "capital": "Nouakchott",
  "name_id": "Mauritania",
  "lon": -12,
  "lat": 20,
  "flag": "🇲🇷",
  "jumlah_penduduk": 4403319,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Islam",
  "ideology": "Konservatisme",
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
    "bandara": 9,
    "jalur_sepeda": 14,
    "terminal_bus": 12,
    "helipad": 25,
    "jalan_tol": 23,
    "jalur_kereta": 24,
    "pelabuhan_laut": 38,
    "kereta_bawah_tanah": 38
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 0,
    "uranium": 65,
    "batu_bara": 0,
    "minyak_bumi": 0,
    "gas_alam": 32,
    "garam": 23,
    "nikel": 0,
    "litium": 6,
    "tembaga": 0,
    "aluminium": 13,
    "logam_tanah_jarang": 42,
    "bijih_besi": 81
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {    "mobil": 33,
    "semen_beton": 6,
    "sepeda_motor": 24,    "semikonduktor": 1,
    "smelter": 22,    "kayu": 7
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 24,
    "sapi_perah": 1,
    "sapi_potong": 11,
    "domba_kambing": 28
  },
  "sektor_agrikultur": {
    "padi": 25,
    "gandum_jagung": 24,
    "sayur_umbi": 16,
    "kedelai": 10,
    "kelapa_sawit": 25,
    "kopi_teh_kakao": 28
  },
  "sektor_perikanan": {
    "udang_kerang": 18,
    "ikan": 21
  },
  "sektor_olahan_pangan": {
    "air_mineral": 25,
    "gula": 2,
    "roti": 40,
    "pengolahan_daging": 35,
    "mie_instan": 26
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 39
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 2,
    "gudang_senjata": 19,
    "hangar_tank": 24,
    "akademi_militer": 28,
    "pusat_komando": 13,
    "pangkalan_udara": 31,
    "pangkalan_laut": 26,
    "program_luar_angkasa": 19,
    "pertahanan_siber": 17
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 21,
    "darat": {
        "tank_tempur_utama": 60,
        "apc_ifv": 180,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 10,
        "kapal_destroyer": 98,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 170,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 102,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 210000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 26,
    "intelijen": 5,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 27,
      "misi_mata_mata": 11,
      "misi_sabotase": 32,
      "manajemen_wilayah": 24,
      "program_nuklir": 0
  }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 37,
        "unit_interceptor_r2": 36,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 2,
          "helikopter_polisi": 5,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 40,
          "kamera_pengawas": 7,
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
      "prasekolah": 20,
      "dasar": 38,
      "menengah": 16,
      "lanjutan": 7,
      "universitas": 7,
      "lembaga_pendidikan": 5,
      "laboratorium": 39,
      "observatorium": 19,
      "pusat_penelitian": 23,
      "pusat_pengembangan": 10,
      "literasi": 88
  },
    "kesehatan": {
      "rumah_sakit_besar": 24,
      "rumah_sakit_kecil": 29,
      "pusat_diagnostik": 2,
      "harapan_hidup": 11,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 20,
      "pengadilan": 28,
      "kejaksaan": 38,
      "pos_polisi": 14,
      "armada_mobil_polisi": 5010,
      "akademi_polisi": 20,
      "indeks_korupsi": 82,
      "indeks_keamanan": 71
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 35,
      "sirkuit_balap": 10,
      "stadion": 20,
      "stadion_internasional": 4
  },

  "un_vote": 124,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 6,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 6,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 1,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 12,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 40,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 30,
    "gaji_guru": 50,
    "gaji_medis": 50,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 25,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 28800,
    "harga_telur": 31100,
    "harga_bbm": 5350,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 78950,
    "harga_pendidikan": 387120
  },

    // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================

  "geopolitik": {
    "reputasi_diplomatik": "Netral",
    "aliansi_aktif": [],
    "pengaruh_global": 0,
    "peringkat_diplomasi": 100,
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 17,
      "kekuatan_keras": 40,
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
    "kesehatan": 24,
    "pendidikan": 29,
    "keamanan": 29,
    "keuangan": 40,
    "lingkungan": 60
  }
};





