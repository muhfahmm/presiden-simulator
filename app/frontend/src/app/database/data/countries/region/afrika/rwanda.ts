import { CountryData } from "../../../types";

export const rwanda: CountryData = {
  "name_en": "Rwanda",
  "capital": "Kigali",
  "name_id": "Rwanda",
  "lon": 30,
  "lat": -2,
  "flag": "🇷🇼",
  "jumlah_penduduk": 12301939,
  "anggaran": 126,
  "pendapatan_nasional": "361",
  "religion": "Katolik",
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
    "bandara": 7,
    "jalur_sepeda": 11,
    "terminal_bus": 3,
    "helipad": 22,
    "jalan_tol": 11,
    "jalur_kereta": 17,
    "pelabuhan_laut": 14,
    "kereta_bawah_tanah": 3
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 0,
    "uranium": 0,
    "batu_bara": 85,
    "minyak_bumi": 0,
    "gas_alam": 81,
    "garam": 0,
    "nikel": 0,
    "litium": 0,
    "tembaga": 0,
    "aluminium": 0,
    "logam_tanah_jarang": 88,
    "bijih_besi": 0
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {    "mobil": 6,
    "semen_beton": 12,
    "pengolahan_daging": 15,    "sepeda_motor": 34,    "semikonduktor": 38,
    "smelter": 17,    "kayu": 11
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 30,
    "sapi_perah": 38,
    "sapi_potong": 22,
    "domba_kambing": 13
  },
  "sektor_agrikultur": {
    "padi": 21,
    "gandum_jagung": 8,
    "sayur_umbi": 28,
    "kedelai": 37,
    "kelapa_sawit": 3,
    "kopi_teh_kakao": 26
  },
  "sektor_perikanan": {
    "udang_kerang": 14,
    "ikan": 2
  },
  "sektor_olahan_pangan": {
    "air_mineral": 15,
    "gula": 7,
    "roti": 33,
    "pengolahan_daging": 15,
    "mie_instan": 15
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 32
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 3,
    "gudang_senjata": 27,
    "hangar_tank": 28,
    "akademi_militer": 31,
    "pusat_komando": 34,
    "pangkalan_udara": 40,
    "pangkalan_laut": 29,
    "program_luar_angkasa": 24,
    "pertahanan_siber": 12
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 25,
    "darat": {
        "tank_tempur_utama": 193,
        "apc_ifv": 168,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 33,
        "kapal_destroyer": 53,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 52,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 80,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 250000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 27,
    "intelijen": 40,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 34,
      "misi_mata_mata": 29,
      "misi_sabotase": 24,
      "manajemen_wilayah": 15,
      "program_nuklir": 0
  }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 38,
        "unit_interceptor_r2": 34,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 22,
          "helikopter_polisi": 12,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 21,
          "kamera_pengawas": 11,
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
      "prasekolah": 9,
      "dasar": 28,
      "menengah": 28,
      "lanjutan": 30,
      "universitas": 8,
      "lembaga_pendidikan": 2,
      "laboratorium": 35,
      "observatorium": 24,
      "pusat_penelitian": 12,
      "pusat_pengembangan": 9,
      "literasi": 86
  },
    "kesehatan": {
      "rumah_sakit_besar": 37,
      "rumah_sakit_kecil": 7,
      "pusat_diagnostik": 22,
      "harapan_hidup": 21,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 33,
      "pengadilan": 25,
      "kejaksaan": 22,
      "pos_polisi": 24,
      "armada_mobil_polisi": 8723,
      "akademi_polisi": 40,
      "indeks_korupsi": 62,
      "indeks_keamanan": 88
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 29,
      "sirkuit_balap": 39,
      "stadion": 22,
      "stadion_internasional": 22
  },

  "un_vote": 50,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 31,
      "kepuasan": 67,
      "pendapatan": 8
    },
    "korporasi": {
      "tarif": 2,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 1,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 11,
      "kepuasan": 88,
      "pendapatan": 4
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 33,
      "kepuasan": 93,
      "pendapatan": 7
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
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
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
    "harga_daging_sapi": 208200,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 8560,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 78950,
    "harga_pendidikan": 967800
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
      "kekuatan_lunak": 12,
      "kekuatan_keras": 15,
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
    "kesehatan": 5,
    "pendidikan": 19,
    "keamanan": 24,
    "keuangan": 34,
    "lingkungan": 60
  }
};

