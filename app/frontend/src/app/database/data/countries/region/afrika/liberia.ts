import { CountryData } from "../../../types";

export const liberia: CountryData = {
  "name_en": "Liberia",
  "capital": "Monrovia",
  "name_id": "Liberia",
  "lon": -9.5,
  "lat": 6.5,
  "flag": "🇱🇷",
  "jumlah_penduduk": 4818977,
  "anggaran": 39,
  "pendapatan_nasional": "111",
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
    "bandara": 7,
    "jalur_sepeda": 35,
    "terminal_bus": 8,
    "helipad": 31,
    "jalan_tol": 1,
    "jalur_kereta": 20,
    "pelabuhan_laut": 3,
    "kereta_bawah_tanah": 12
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 6,
    "uranium": 0,
    "batu_bara": 0,
    "minyak_bumi": 0,
    "gas_alam": 79,
    "garam": 0,
    "nikel": 100,
    "litium": 20,
    "tembaga": 0,
    "aluminium": 40,
    "logam_tanah_jarang": 0,
    "bijih_besi": 50
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {    "mobil": 19,
    "semen_beton": 38,
    "sepeda_motor": 10,    "semikonduktor": 31,
    "smelter": 36,    "kayu": 8
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 36,
    "sapi_perah": 2,
    "sapi_potong": 29,
    "domba_kambing": 24
  },
  "sektor_agrikultur": {
    "padi": 28,
    "gandum_jagung": 28,
    "sayur_umbi": 32,
    "kedelai": 29,
    "kelapa_sawit": 30,
    "kopi_teh_kakao": 25
  },
  "sektor_perikanan": {
    "udang_kerang": 14,
    "ikan": 15
  },
  "sektor_olahan_pangan": {
    "air_mineral": 31,
    "gula": 25,
    "roti": 22,
    "pengolahan_daging": 4,
    "mie_instan": 10
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 25
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 30,
    "gudang_senjata": 16,
    "hangar_tank": 34,
    "akademi_militer": 2,
    "pusat_komando": 10,
    "pangkalan_udara": 33,
    "pangkalan_laut": 1,
    "program_luar_angkasa": 30,
    "pertahanan_siber": 34
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 18,
    "darat": {
        "tank_tempur_utama": 12,
        "apc_ifv": 33,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 26,
        "kapal_destroyer": 2,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 35,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 38,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 180000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 13,
    "intelijen": 20,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 4,
      "misi_mata_mata": 1,
      "misi_sabotase": 5,
      "manajemen_wilayah": 36,
      "program_nuklir": 0
  }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 21,
        "unit_interceptor_r2": 31,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 11,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 27,
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
      "prasekolah": 16,
      "dasar": 7,
      "menengah": 31,
      "lanjutan": 18,
      "universitas": 7,
      "lembaga_pendidikan": 32,
      "laboratorium": 34,
      "observatorium": 3,
      "pusat_penelitian": 24,
      "pusat_pengembangan": 36,
      "literasi": 50
  },
    "kesehatan": {
      "rumah_sakit_besar": 4,
      "rumah_sakit_kecil": 16,
      "pusat_diagnostik": 9,
      "harapan_hidup": 6,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 39,
      "pengadilan": 31,
      "kejaksaan": 29,
      "pos_polisi": 20,
      "armada_mobil_polisi": 8717,
      "akademi_polisi": 26,
      "indeks_korupsi": 58,
      "indeks_keamanan": 78
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 30,
      "sirkuit_balap": 21,
      "stadion": 4,
      "stadion_internasional": 30
  },

  "un_vote": 93,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 37,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 24,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 39,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 17,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 39,
      "kepuasan": 93,
      "pendapatan": 4
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 30,
    "gaji_guru": 40,
    "gaji_medis": 50,
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
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 20160,
    "harga_telur": 62200,
    "harga_bbm": 14980,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 78950,
    "harga_pendidikan": 241950
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
      "kekuatan_lunak": 39,
      "kekuatan_keras": 8,
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
    "kesehatan": 7,
    "pendidikan": 21,
    "keamanan": 36,
    "keuangan": 3,
    "lingkungan": 60
  }
};

