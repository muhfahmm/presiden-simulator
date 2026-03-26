import { CountryData } from "../../types/_index";

export const pantai_gading: CountryData = {
  "name_en": "Ivory Coast",
  "capital": "Yamoussoukro",
  "name_id": "Pantai gading",
  "lon": -5,
  "lat": 8,
  "flag": "🇨🇮",
  "jumlah_penduduk": 25069229,
  "anggaran": 681,
  "pendapatan_nasional": "1945",
  "religion": "Islam",
  "ideology": "Kapitalisme",
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
    "bandara": 13,
    "jalur_sepeda": 8,
    "terminal_bus": 19,
    "helipad": 34,
    "jalan_tol": 23,
    "jalur_kereta": 17,
    "pelabuhan_laut": 4,
    "kereta_bawah_tanah": 1
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {    "mobil": 30,
    "semen_beton": 32,
    "pengolahan_daging": 19,    "sepeda_motor": 40,    "semikonduktor": 6,
    "smelter": 4,    "kayu": 21
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 30.0,
    "sapi_perah": 4,
    "sapi_potong": 29,
    "domba_kambing": 23
  },
  "sektor_agrikultur": {
    "padi": 32,
    "gandum_jagung": 19.5,
    "sayur_umbi": 31.5,
    "kedelai": 2,
    "kelapa_sawit": 31,
    "kopi_teh_kakao": 29.3
  },
  "sektor_perikanan": {
    "udang_kerang": 18.5,
    "ikan": 39
  },
  "sektor_olahan_pangan": {
    "air_mineral": 26,
    "gula": 34,
    "roti": 16,
    "pengolahan_daging": 19,
    "mie_instan": 10
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 13
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 17,
    "gudang_senjata": 19,
    "hangar_tank": 24,
    "akademi_militer": 3,
    "pusat_komando": 37,
    "pangkalan_udara": 26,
    "pangkalan_laut": 31,
    "program_luar_angkasa": 38,
    "pertahanan_siber": 22
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 28,
    "darat": {
        "tank_tempur_utama": 140,
        "apc_ifv": 24,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 7,
        "kapal_destroyer": 82,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 36,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 189,
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
    "waktu_respon": 4,
    "intelijen": 38,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 8,
      "misi_mata_mata": 3,
      "misi_sabotase": 31,
      "manajemen_wilayah": 17,
      "program_nuklir": 0
  }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 23,
        "sepeda_motor": 4,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 23,
          "helikopter_polisi": 10,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 39,
          "kamera_pengawas": 23,
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
      "prasekolah": 6,
      "dasar": 14,
      "menengah": 12,
      "lanjutan": 9,
      "universitas": 36,
      "lembaga_pendidikan": 24,
      "laboratorium": 38,
      "observatorium": 37,
      "pusat_penelitian": 16,
      "pusat_pengembangan": 22,
      "literasi": 76
  },
    "kesehatan": {
      "rumah_sakit_besar": 35,
      "rumah_sakit_kecil": 38,
      "pusat_diagnostik": 38,
      "harapan_hidup": 10,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 20,
      "pengadilan": 38,
      "kejaksaan": 5,
      "pos_polisi": 20,
      "armada_mobil_polisi": 787,
      "akademi_polisi": 18,
      "indeks_korupsi": 90,
      "indeks_keamanan": 64
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 14,
      "sirkuit_balap": 33,
      "stadion": 33,
      "stadion_internasional": 32
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 36,
      "kepuasan": 67,
      "pendapatan": 51
    },
    "korporasi": {
      "tarif": 34,
      "kepuasan": 52,
      "pendapatan": 63
    },
    "penghasilan": {
      "tarif": 4,
      "kepuasan": 61,
      "pendapatan": 3
    },
    "bea_cukai": {
      "tarif": 23,
      "kepuasan": 86,
      "pendapatan": 21
    },
    "lingkungan": {
      "tarif": 25,
      "kepuasan": 88,
      "pendapatan": 50
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 11 },
    "lainnya": {
      "tarif": 7,
      "kepuasan": 93,
      "pendapatan": 6
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
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 145740,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 4160,
    "harga_obat": 126320,
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
      "kekuatan_lunak": 12,
      "kekuatan_keras": 1,
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
    "pendidikan": 27,
    "keamanan": 9,
    "keuangan": 4,
    "lingkungan": 60
  }
};

