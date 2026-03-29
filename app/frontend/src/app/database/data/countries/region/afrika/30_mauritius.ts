import { CountryData } from "../../../types";

export const mauritius: CountryData = {
  "name_en": "Mauritius",
  "capital": "Port Louis",
  "name_id": "Mauritius",
  "lon": 57.55,
  "lat": -20.28333333,
  "flag": "🇲🇺",
  "jumlah_penduduk": 1265303,
  "anggaran": 136,
  "pendapatan_nasional": "389",
  "religion": "Hindu",
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
    "bandara": 32,
    "jalur_sepeda": 21,
    "terminal_bus": 24,
    "helipad": 32,
    "jalan_tol": 4,
    "jalur_kereta": 2,
    "pelabuhan_laut": 36,
    "kereta_bawah_tanah": 11
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 56,
    "uranium": 0,
    "batu_bara": 0,
    "minyak_bumi": 0,
    "gas_alam": 0,
    "garam": 0,
    "nikel": 0,
    "litium": 0,
    "tembaga": 0,
    "aluminium": 0,
    "logam_tanah_jarang": 37,
    "bijih_besi": 0
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {    "mobil": 40,
    "semen_beton": 26,
    "sepeda_motor": 26,    "semikonduktor": 39,
    "smelter": 38,    "kayu": 14
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 16,
    "sapi_perah": 16,
    "sapi_potong": 30,
    "domba_kambing": 15
  },
  "sektor_agrikultur": {
    "padi": 8,
    "gandum_jagung": 11,
    "sayur_umbi": 2,
    "kedelai": 35,
    "kelapa_sawit": 15,
    "kopi_teh_kakao": 16
  },
  "sektor_perikanan": {
    "udang_kerang": 32,
    "ikan": 10
  },
  "sektor_olahan_pangan": {
    "air_mineral": 5,
    "gula": 24,
    "roti": 22,
    "pengolahan_daging": 16,
    "mie_instan": 1
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 33
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 29,
    "gudang_senjata": 6,
    "hangar_tank": 10,
    "akademi_militer": 5,
    "pusat_komando": 17,
    "pangkalan_udara": 28,
    "pangkalan_laut": 15,
    "program_luar_angkasa": 5,
    "pertahanan_siber": 40
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 2,
    "darat": {
        "tank_tempur_utama": 164,
        "apc_ifv": 69,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 7,
        "kapal_destroyer": 116,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 172,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 181,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 20000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 39,
    "intelijen": 21,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 38,
      "misi_mata_mata": 17,
      "misi_sabotase": 6,
      "manajemen_wilayah": 39,
      "program_nuklir": 0
  }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 10,
        "unit_interceptor_r2": 1,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 32,
          "helikopter_polisi": 34,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 36,
          "kamera_pengawas": 20,
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
      "prasekolah": 22,
      "dasar": 14,
      "menengah": 17,
      "lanjutan": 38,
      "universitas": 2,
      "lembaga_pendidikan": 13,
      "laboratorium": 1,
      "observatorium": 25,
      "pusat_penelitian": 16,
      "pusat_pengembangan": 36,
      "literasi": 95
  },
    "kesehatan": {
      "rumah_sakit_besar": 26,
      "rumah_sakit_kecil": 17,
      "pusat_diagnostik": 10,
      "harapan_hidup": 11,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 35,
      "pengadilan": 27,
      "kejaksaan": 23,
      "pos_polisi": 22,
      "armada_mobil_polisi": 1046,
      "akademi_polisi": 37,
      "indeks_korupsi": 72,
      "indeks_keamanan": 83
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 14,
      "sirkuit_balap": 3,
      "stadion": 33,
      "stadion_internasional": 15
  },

  "un_vote": 69,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 22,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 8,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 3
    },
    "bea_cukai": {
      "tarif": 14,
      "kepuasan": 86,
      "pendapatan": 2
    },
    "lingkungan": {
      "tarif": 38,
      "kepuasan": 88,
      "pendapatan": 10
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 22,
      "kepuasan": 93,
      "pendapatan": 7
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 30,
    "gaji_guru": 50,
    "gaji_medis": 40,
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
    "harga_beras": 32000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 30800,
    "harga_gula": 28800,
    "harga_telur": 62200,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 315800,
    "harga_pendidikan": 241950
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
      "kekuatan_lunak": 13,
      "kekuatan_keras": 33,
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
    "kesehatan": 14,
    "pendidikan": 39,
    "keamanan": 11,
    "keuangan": 37,
    "lingkungan": 60
  }
};





