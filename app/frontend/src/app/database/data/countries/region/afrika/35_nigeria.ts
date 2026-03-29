import { CountryData } from "../../../types";

export const nigeria: CountryData = {
  "name_en": "Nigeria",
  "capital": "Abuja",
  "name_id": "Nigeria",
  "lon": 8,
  "lat": 10,
  "flag": "🇳🇬",
  "jumlah_penduduk": 195874740,
  "anggaran": 4618,
  "pendapatan_nasional": "13196",
  "religion": "Islam",
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
    "bandara": 17,
    "jalur_sepeda": 19,
    "terminal_bus": 29,
    "helipad": 33,
    "jalan_tol": 8,
    "jalur_kereta": 32,
    "pelabuhan_laut": 25,
    "kereta_bawah_tanah": 21
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 0,
    "uranium": 0,
    "batu_bara": 0,
    "minyak_bumi": 85,
    "gas_alam": 0,
    "garam": 0,
    "nikel": 0,
    "litium": 0,
    "tembaga": 0,
    "aluminium": 0,
    "logam_tanah_jarang": 0,
    "bijih_besi": 64
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {    "mobil": 31,
    "semen_beton": 31,
    "sepeda_motor": 21,    "semikonduktor": 6,
    "smelter": 30,    "kayu": 39
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 33,
    "sapi_perah": 13,
    "sapi_potong": 13,
    "domba_kambing": 27
  },
  "sektor_agrikultur": {
    "padi": 60,
    "gandum_jagung": 38,
    "sayur_umbi": 14,
    "kedelai": 13,
    "kelapa_sawit": 5,
    "kopi_teh_kakao": 11
  },
  "sektor_perikanan": {
    "udang_kerang": 19,
    "ikan": 24
  },
  "sektor_olahan_pangan": {
    "air_mineral": 26,
    "gula": 15,
    "roti": 6,
    "pengolahan_daging": 26,
    "mie_instan": 35
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 28
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 28,
    "gudang_senjata": 1,
    "hangar_tank": 1,
    "akademi_militer": 39,
    "pusat_komando": 16,
    "pangkalan_udara": 27,
    "pangkalan_laut": 17,
    "program_luar_angkasa": 15,
    "pertahanan_siber": 5
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 12,
    "darat": {
        "tank_tempur_utama": 47,
        "apc_ifv": 162,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 20,
        "kapal_destroyer": 80,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 82,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 128,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 120000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 12,
    "intelijen": 12,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 5,
      "misi_mata_mata": 15,
      "misi_sabotase": 35,
      "manajemen_wilayah": 4,
      "program_nuklir": 0
  }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 40,
        "unit_interceptor_r2": 8,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 32,
          "helikopter_polisi": 11,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 23,
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
      "prasekolah": 34,
      "dasar": 11,
      "menengah": 14,
      "lanjutan": 3,
      "universitas": 10,
      "lembaga_pendidikan": 24,
      "laboratorium": 33,
      "observatorium": 29,
      "pusat_penelitian": 22,
      "pusat_pengembangan": 16,
      "literasi": 66
  },
    "kesehatan": {
      "rumah_sakit_besar": 39,
      "rumah_sakit_kecil": 13,
      "pusat_diagnostik": 8,
      "harapan_hidup": 1,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 6,
      "pengadilan": 2,
      "kejaksaan": 17,
      "pos_polisi": 34,
      "armada_mobil_polisi": 8695,
      "akademi_polisi": 14,
      "indeks_korupsi": 73,
      "indeks_keamanan": 56
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 17,
      "sirkuit_balap": 8,
      "stadion": 25,
      "stadion_internasional": 32
  },

  "un_vote": 175,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 10,
      "kepuasan": 67,
      "pendapatan": 99
    },
    "korporasi": {
      "tarif": 40,
      "kepuasan": 52,
      "pendapatan": 255
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 323
    },
    "bea_cukai": {
      "tarif": 17,
      "kepuasan": 86,
      "pendapatan": 131
    },
    "lingkungan": {
      "tarif": 10,
      "kepuasan": 88,
      "pendapatan": 58
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 24 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 70 },
    "lainnya": {
      "tarif": 21,
      "kepuasan": 93,
      "pendapatan": 236
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 40,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 30800,
    "harga_gula": 7200,
    "harga_telur": 43540,
    "harga_bbm": 14980,
    "harga_listrik": 2240,
    "harga_air": 10400,
    "harga_obat": 78950,
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
      "kekuatan_lunak": 37,
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
    "kesehatan": 34,
    "pendidikan": 15,
    "keamanan": 26,
    "keuangan": 21,
    "lingkungan": 60
  }
};





