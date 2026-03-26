import { CountryData } from "../../../types";

export const libya: CountryData = {
  "name_en": "Libya",
  "capital": "Tripoli",
  "name_id": "Libya",
  "lon": 13.1,
  "lat": 32.53,
  "flag": "🇱🇾",
  "jumlah_penduduk": 6678567,
  "anggaran": 408,
  "pendapatan_nasional": "1167",
  "religion": "Islam",
  "ideology": "Nasionalisme",
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
    "bandara": 30,
    "jalur_sepeda": 33,
    "terminal_bus": 20,
    "helipad": 11,
    "jalan_tol": 8,
    "jalur_kereta": 9,
    "pelabuhan_laut": 29,
    "kereta_bawah_tanah": 28
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {    "mobil": 40,
    "semen_beton": 38,
    "pengolahan_daging": 10,    "sepeda_motor": 37,    "semikonduktor": 20,
    "smelter": 25,    "kayu": 22
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 21.5,
    "sapi_perah": 23,
    "sapi_potong": 35,
    "domba_kambing": 20
  },
  "sektor_agrikultur": {
    "padi": 17,
    "gandum_jagung": 28.0,
    "sayur_umbi": 39.0,
    "kedelai": 25,
    "kelapa_sawit": 15,
    "kopi_teh_kakao": 20.0
  },
  "sektor_perikanan": {
    "udang_kerang": 17.5,
    "ikan": 25
  },
  "sektor_olahan_pangan": {
    "air_mineral": 14,
    "gula": 32,
    "roti": 26,
    "pengolahan_daging": 10,
    "mie_instan": 24
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 7
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 11,
    "gudang_senjata": 32,
    "hangar_tank": 25,
    "akademi_militer": 17,
    "pusat_komando": 2,
    "pangkalan_udara": 26,
    "pangkalan_laut": 30,
    "program_luar_angkasa": 33,
    "pertahanan_siber": 2
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 24,
    "darat": {
        "tank_tempur_utama": 8,
        "apc_ifv": 2,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 15,
        "kapal_destroyer": 28,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 25,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 1,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 240000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 21,
    "intelijen": 31,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 38,
      "misi_mata_mata": 27,
      "misi_sabotase": 37,
      "manajemen_wilayah": 11,
      "program_nuklir": 0
  }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli": 38,
        "sepeda_motor": 17,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 11,
          "helikopter_polisi": 10,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 33,
          "kamera_pengawas": 38,
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
      "prasekolah": 11,
      "dasar": 24,
      "menengah": 10,
      "lanjutan": 25,
      "universitas": 11,
      "lembaga_pendidikan": 9,
      "laboratorium": 34,
      "observatorium": 14,
      "pusat_penelitian": 3,
      "pusat_pengembangan": 18,
      "literasi": 88
  },
    "kesehatan": {
      "rumah_sakit_besar": 30,
      "rumah_sakit_kecil": 19,
      "pusat_diagnostik": 12,
      "harapan_hidup": 21,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 18,
      "pengadilan": 27,
      "kejaksaan": 30,
      "pos_polisi": 31,
      "armada_mobil_polisi": 3278,
      "akademi_polisi": 37,
      "indeks_korupsi": 94,
      "indeks_keamanan": 89
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 35,
      "sirkuit_balap": 18,
      "stadion": 26,
      "stadion_internasional": 33
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 8,
      "kepuasan": 67,
      "pendapatan": 8
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 18,
      "kepuasan": 61,
      "pendapatan": 16
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 16
    },
    "lingkungan": {
      "tarif": 22,
      "kepuasan": 88,
      "pendapatan": 24
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 43
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
    "harga_daging_sapi": 145740,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 15550,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 4160,
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
      "kekuatan_lunak": 17,
      "kekuatan_keras": 23,
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
    "kesehatan": 37,
    "pendidikan": 6,
    "keamanan": 38,
    "keuangan": 22,
    "lingkungan": 60
  }
};

