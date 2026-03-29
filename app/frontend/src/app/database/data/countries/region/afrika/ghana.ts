import { CountryData } from "../../../types";

export const ghana: CountryData = {
  "name_en": "Ghana",
  "capital": "Accra",
  "name_id": "Ghana",
  "lon": -2,
  "lat": 8,
  "flag": "🇬🇭",
  "jumlah_penduduk": 29767108,
  "anggaran": 739,
  "pendapatan_nasional": "2111",
  "religion": "Protestan",
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
    "bandara": 12,
    "jalur_sepeda": 27,
    "terminal_bus": 4,
    "helipad": 5,
    "jalan_tol": 9,
    "jalur_kereta": 16,
    "pelabuhan_laut": 26,
    "kereta_bawah_tanah": 14
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 88,
    "uranium": 0,
    "batu_bara": 0,
    "minyak_bumi": 0,
    "gas_alam": 0,
    "garam": 0,
    "nikel": 88,
    "litium": 43,
    "tembaga": 0,
    "aluminium": 75,
    "logam_tanah_jarang": 0,
    "bijih_besi": 0
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {    "mobil": 36,
    "semen_beton": 13,
    "sepeda_motor": 7,    "semikonduktor": 8,
    "smelter": 38,    "kayu": 40
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 18,
    "sapi_perah": 33,
    "sapi_potong": 15,
    "domba_kambing": 4
  },
  "sektor_agrikultur": {
    "padi": 39,
    "gandum_jagung": 14,
    "sayur_umbi": 28,
    "kedelai": 11,
    "kelapa_sawit": 22,
    "kopi_teh_kakao": 52
  },
  "sektor_perikanan": {
    "udang_kerang": 26,
    "ikan": 35
  },
  "sektor_olahan_pangan": {
    "air_mineral": 38,
    "gula": 13,
    "roti": 29,
    "pengolahan_daging": 24,
    "mie_instan": 21
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 6
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 34,
    "gudang_senjata": 14,
    "hangar_tank": 20,
    "akademi_militer": 18,
    "pusat_komando": 19,
    "pangkalan_udara": 3,
    "pangkalan_laut": 19,
    "program_luar_angkasa": 33,
    "pertahanan_siber": 18
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 27,
    "darat": {
        "tank_tempur_utama": 8,
        "apc_ifv": 7,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 29,
        "kapal_destroyer": 34,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 31,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 24,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 270000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 7,
    "intelijen": 3,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 24,
      "misi_mata_mata": 1,
      "misi_sabotase": 28,
      "manajemen_wilayah": 12,
      "program_nuklir": 0
  }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 8,
        "unit_interceptor_r2": 9,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 7,
          "helikopter_polisi": 19,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 36,
          "kamera_pengawas": 39,
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
      "prasekolah": 29,
      "dasar": 16,
      "menengah": 24,
      "lanjutan": 3,
      "universitas": 37,
      "lembaga_pendidikan": 39,
      "laboratorium": 6,
      "observatorium": 18,
      "pusat_penelitian": 23,
      "pusat_pengembangan": 18,
      "literasi": 56
  },
    "kesehatan": {
      "rumah_sakit_besar": 23,
      "rumah_sakit_kecil": 9,
      "pusat_diagnostik": 29,
      "harapan_hidup": 18,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 33,
      "pengadilan": 25,
      "kejaksaan": 20,
      "pos_polisi": 9,
      "armada_mobil_polisi": 5653,
      "akademi_polisi": 19,
      "indeks_korupsi": 65,
      "indeks_keamanan": 60
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 19,
      "sirkuit_balap": 9,
      "stadion": 13,
      "stadion_internasional": 24
  },

  "un_vote": 125,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 36,
      "kepuasan": 67,
      "pendapatan": 55
    },
    "korporasi": {
      "tarif": 21,
      "kepuasan": 52,
      "pendapatan": 45
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 42
    },
    "bea_cukai": {
      "tarif": 14,
      "kepuasan": 86,
      "pendapatan": 10
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 29
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 12 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 24
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
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 315800,
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
      "kekuatan_lunak": 17,
      "kekuatan_keras": 21,
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
    "kesehatan": 11,
    "pendidikan": 6,
    "keamanan": 22,
    "keuangan": 17,
    "lingkungan": 60
  }
};

