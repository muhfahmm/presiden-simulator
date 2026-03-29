import { CountryData } from "../../../types";

export const djibouti: CountryData = {
  "name_en": "Djibouti",
  "capital": "Djibouti",
  "name_id": "Djibouti",
  "lon": 43,
  "lat": 11.5,
  "flag": "🇩🇯",
  "jumlah_penduduk": 958920,
  "anggaran": 39,
  "pendapatan_nasional": "111",
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
    "bandara": 14,
    "jalur_sepeda": 5,
    "terminal_bus": 13,
    "helipad": 3,
    "jalan_tol": 8,
    "jalur_kereta": 3,
    "pelabuhan_laut": 3,
    "kereta_bawah_tanah": 35
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 70,
    "uranium": 0,
    "batu_bara": 0,
    "minyak_bumi": 55,
    "gas_alam": 45,
    "garam": 65,
    "nikel": 0,
    "litium": 9,
    "tembaga": 4,
    "aluminium": 19,
    "logam_tanah_jarang": 0,
    "bijih_besi": 0
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {    "mobil": 23,
    "semen_beton": 9,
    "sepeda_motor": 24,    "semikonduktor": 16,
    "smelter": 28,    "kayu": 34
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { 
    "ayam_unggas": 14,
    "sapi_perah": 7,
    "sapi_potong": 29,
    "domba_kambing": 17
  },
  "sektor_agrikultur": {
    "padi": 8,
    "gandum_jagung": 16,
    "sayur_umbi": 21,
    "kedelai": 25,
    "kelapa_sawit": 15,
    "kopi_teh_kakao": 4
  },
  "sektor_perikanan": {
    "udang_kerang": 32,
    "ikan": 2
  },
  "sektor_olahan_pangan": {
    "air_mineral": 36,
    "gula": 26,
    "roti": 9,
    "pengolahan_daging": 6,
    "mie_instan": 2
  },

  // =============================================================
  // 6. 💊 LAYANAN MEDIS & FARMASI
  // =============================================================

  "sektor_farmasi": {
    "farmasi": 12
  },

  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================
"sektor_pertahanan": {
    "penjara": 11,
    "gudang_senjata": 1,
    "hangar_tank": 27,
    "akademi_militer": 11,
    "pusat_komando": 21,
    "pangkalan_udara": 9,
    "pangkalan_laut": 12,
    "program_luar_angkasa": 26,
    "pertahanan_siber": 29
    },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 38,
    "darat": {
        "tank_tempur_utama": 149,
        "apc_ifv": 73,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 24,
        "kapal_destroyer": 195,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 152,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 52,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 380000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "militer_strategis": {
    "waktu_respon": 14,
    "intelijen": 5,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 7,
      "misi_mata_mata": 1,
      "misi_sabotase": 4,
      "manajemen_wilayah": 2,
      "program_nuklir": 0
  }
  },
    "armada_kepolisian": {
    "armada_polisi": {
      "patroli_lantas": {
        "mobil_patroli_interceptor": 24,
        "unit_interceptor_r2": 40,
        "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 16,
          "helikopter_polisi": 2,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 29,
          "kamera_pengawas": 40,
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
      "dasar": 39,
      "menengah": 20,
      "lanjutan": 39,
      "universitas": 34,
      "lembaga_pendidikan": 2,
      "laboratorium": 30,
      "observatorium": 18,
      "pusat_penelitian": 7,
      "pusat_pengembangan": 28,
      "literasi": 90
  },
    "kesehatan": {
      "rumah_sakit_besar": 16,
      "rumah_sakit_kecil": 29,
      "pusat_diagnostik": 17,
      "harapan_hidup": 35,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 16,
      "pengadilan": 40,
      "kejaksaan": 15,
      "pos_polisi": 8,
      "armada_mobil_polisi": 622,
      "akademi_polisi": 26,
      "indeks_korupsi": 87,
      "indeks_keamanan": 75
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 8,
      "sirkuit_balap": 19,
      "stadion": 34,
      "stadion_internasional": 33
  },

  "un_vote": 13,
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 18,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 13,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 18,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 10,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 28,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 25,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 208200,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 30800,
    "harga_gula": 20160,
    "harga_telur": 62200,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 221060,
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
      "kekuatan_lunak": 10,
      "kekuatan_keras": 3,
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
    "kesehatan": 28,
    "pendidikan": 16,
    "keamanan": 25,
    "keuangan": 18,
    "lingkungan": 60
  }
};

