import { CountryData } from "../../../types";

export const eritrea: CountryData = {
  "name_en": "Eritrea",
  "capital": "Asmara",
  "name_id": "Eritrea",
  "lon": 39,
  "lat": 15,
  "flag": "🇪🇷",
  "jumlah_penduduk": 6213972,
  "anggaran": 24,
  "pendapatan_nasional": "69",
  "religion": "Islam",
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
    "bandara": 20,
    "jalur_sepeda": 8,
    "terminal_bus": 28,
    "helipad": 37,
    "jalan_tol": 13,
    "jalur_kereta": 3,
    "pelabuhan_laut": 9,
    "kereta_bawah_tanah": 25
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 75,
    "uranium": 0,
    "batu_bara": 0,
    "minyak_bumi": 17,
    "gas_alam": 0,
    "garam": 0,
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

  "sektor_manufaktur": {    "mobil": 11,
    "semen_beton": 7,
    "sepeda_motor": 11,    "semikonduktor": 16,
    "smelter": 32,    "kayu": 1
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 28,
    "sapi_perah": 3,
    "sapi_potong": 35,
    "domba_kambing": 28
  },
  "sektor_agrikultur": {
    "padi": 11,
    "gandum_jagung": 34,
    "sayur_umbi": 21,
    "kedelai": 28,
    "kelapa_sawit": 24,
    "kopi_teh_kakao": 14
  },
  "sektor_perikanan": {
    "udang_kerang": 17,
    "ikan": 24
  },
  "sektor_olahan_pangan": {
    "air_mineral": 30,
    "gula": 9,
    "roti": 39,
    "pengolahan_daging": 18,
    "mie_instan": 23
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 9
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 15,
    "gudang_senjata": 13,
    "hangar_tank": 14,
    "akademi_militer": 4,
    "pusat_komando": 25,
    "pangkalan_udara": 6,
    "pangkalan_laut": 16,
    "program_luar_angkasa": 22,
    "pertahanan_siber": 40
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 35,
    "darat": {
        "tank_tempur_utama": 17,
        "apc_ifv": 26,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 1,
        "kapal_destroyer": 32,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 4,
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
        "infanteri_reguler": 350000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 31,
    "intelijen": 36,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 13,
      "misi_mata_mata": 34,
      "misi_sabotase": 33,
      "manajemen_wilayah": 30,
      "program_nuklir": 0
  }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 26,
        "unit_interceptor_r2": 33,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 32,
          "helikopter_polisi": 36,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 30,
          "kamera_pengawas": 5,
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
      "prasekolah": 35,
      "dasar": 35,
      "menengah": 38,
      "lanjutan": 22,
      "universitas": 26,
      "lembaga_pendidikan": 37,
      "laboratorium": 14,
      "observatorium": 35,
      "pusat_penelitian": 18,
      "pusat_pengembangan": 11,
      "literasi": 90
  },
    "kesehatan": {
      "rumah_sakit_besar": 39,
      "rumah_sakit_kecil": 27,
      "pusat_diagnostik": 37,
      "harapan_hidup": 27,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 27,
      "pengadilan": 5,
      "kejaksaan": 1,
      "pos_polisi": 36,
      "armada_mobil_polisi": 2156,
      "akademi_polisi": 4,
      "indeks_korupsi": 57,
      "indeks_keamanan": 78
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 22,
      "sirkuit_balap": 37,
      "stadion": 33,
      "stadion_internasional": 5
  },

  "un_vote": 47,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 31,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 38,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 15,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 32,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 50,
    "gaji_medis": 40,
    "gaji_militer": 40
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 83280,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 7200,
    "harga_telur": 43540,
    "harga_bbm": 21400,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 315800,
    "harga_pendidikan": 483900
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
      "kekuatan_lunak": 27,
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
    "kesehatan": 31,
    "pendidikan": 24,
    "keamanan": 11,
    "keuangan": 18,
    "lingkungan": 60
  }
};





