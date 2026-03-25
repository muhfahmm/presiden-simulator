import { CountryData } from "../../types/_index";

export const kamerun: CountryData = {
  "name_en": "Cameroon",
  "capital": "Yaoundé",
  "name_id": "Kamerun",
  "lon": 12,
  "lat": 6,
  "flag": "🇨🇲",
  "jumlah_penduduk": 25216237,
  "anggaran": 438,
  "pendapatan_nasional": "1250",
  "religion": "Katolik",
  "ideology": "Konservatisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 36,
    "pembangkit_air": 34,
    "pembangkit_nuklir": 23,
    "jaringan_listrik": 83,
    "pembangkit_surya": 29,
    "pembangkit_termal": 5,
    "pembangkit_angin": 32
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 5,
    "jalur_sepeda": 36,
    "terminal_bus": 29,
    "helipad": 17,
    "jalan_tol": 39,
    "cakupan_internet": 65,
    "jalur_kereta": 36,
    "kualitas_jalan": 86,
    "pelabuhan_laut": 27,
    "kereta_bawah_tanah": 35
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 32,
    "batu_bara": 10,
    "tembaga": 7,
    "gas_alam": 17,
    "emas": 33,
    "bijih_besi": 14,
    "litium": 6,
    "nikel": 39,
    "minyak_bumi": 22,
    "logam_tanah_jarang": 30,
    "garam": 22,
    "uranium": 8
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 32,
    "mobil": 5,
    "semen_beton": 33,
    "pupuk": 12,
    "mie_instan": 38,
    "pengolahan_daging": 16,
    "air_mineral": 3,
    "sepeda_motor": 1,
    "farmasi": 3,
    "semikonduktor": 22,
    "smelter": 23,
    "gula": 39,
    "kayu": 34
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_peternakan": { "ayam_unggas": 19.0,
    "sapi_perah": 7,
    "sapi_potong": 21,
    "domba_kambing": 40
  },
  "sektor_agrikultur": {
    "padi": 25,
    "gandum_jagung": 21.5,
    "sayur_umbi": 19.5,
    "kedelai": 4,
    "kelapa_sawit": 26,
    "kopi_teh_kakao": 26.0
  },
  "sektor_perikanan": {
    "udang_kerang": 24.5,
    "ikan": 6
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 15,
    "gudang_senjata": 5,
    "hangar_tank": 13,
    "akademi_militer": 21,
    "pusat_komando": 5,
    "pangkalan_udara": 12,
    "pangkalan_laut": 27,
    "program_luar_angkasa": 37,
    "pertahanan_siber": 18,
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "armada_militer": {
    "barak": 13,
    "darat": {
        "tank_tempur_utama": 3,
        "apc_ifv": 20,
        "artileri_berat": 26,
        "sistem_peluncur_roket": 0,
        "pertahanan_udara_mobile": 0,
        "kendaraan_taktis": 0
  },
      "laut": {
        "kapal_induk": 36,
        "kapal_destroyer": 5,
        "kapal_korvet": 0,
        "kapal_selam_nuklir": 0,
        "kapal_selam_regular": 0,
        "kapal_ranjau": 0,
        "kapal_logistik": 0
  },
      "udara": {
        "jet_tempur_siluman": 16,
        "jet_tempur_interceptor": 0,
        "pesawat_pengebom": 0,
        "helikopter_serang": 18,
        "pesawat_pengintai": 2,
        "drone_intai_uav": 0,
        "drone_kamikaze": 0,
        "pesawat_angkut": 0
  }
  ,
    "personel": {
        "infanteri_reguler": 130000,
        "pasukan_khusus": 0,
        "pasukan_cadangan": 0
      }
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  
  "militer_strategis": {
    "waktu_respon": 29,
    "intelijen": 1,
    "status_nuklir": false,
    "intel_radar": { "sistem_satelit": 0, "jaringan_radar": 0, "operasi_siber": 0 },
    "operasi_strategis": { "misi_serangan": 21,
      "misi_mata_mata": 18,
      "misi_sabotase": 37,
      "manajemen_wilayah": 15,
      "program_nuklir": 0
  }
  },
  "armada_kepolisian": {
    "armada_polisi": {
    "patroli_lantas": {
          "mobil_patroli": 21,
          "sepeda_motor": 36,
          "unit_k9": 23
  
  },
        "taktis_khusus": {
          "swat": 40,
          "helikopter_polisi": 38,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 11,
          "kamera_pengawas": 8,
          "pusat_forensik": 1
  },
    "kepercayaan_publik": 50
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
      "prasekolah": 31,
      "dasar": 32,
      "menengah": 23,
      "lanjutan": 34,
      "universitas": 38,
      "lembaga_pendidikan": 2,
      "laboratorium": 9,
      "observatorium": 10,
      "pusat_penelitian": 37,
      "pusat_pengembangan": 40,
      "literasi": 50
  },
    "kesehatan": {
      "rumah_sakit_besar": 37,
      "rumah_sakit_kecil": 37,
      "pusat_diagnostik": 3,
      "harapan_hidup": 32,
      "indeks_kesehatan": 85
  },
    "hukum": {
      "pusat_bantuan_hukum": 19,
      "pengadilan": 2,
      "kejaksaan": 2,
      "pos_polisi": 4,
      "armada_mobil_polisi": 886,
      "akademi_polisi": 25,
      "indeks_korupsi": 65,
      "indeks_keamanan": 75
  }
  },
  "sektor_olahraga": {
      "kolam_renang": 30,
      "sirkuit_balap": 32,
      "stadion": 6,
      "stadion_internasional": 3
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 7,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 8,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 33,
      "kepuasan": 86,
      "pendapatan": 29
    },
    "lingkungan": {
      "tarif": 27,
      "kepuasan": 88,
      "pendapatan": 30
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 3 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 7 },
    "lainnya": {
      "tarif": 3,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 50,
    "gaji_medis": 50,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 0
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 7200,
    "harga_telur": 43540,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 7280,
    "harga_obat": 157900,
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
      "kekuatan_lunak": 26,
      "kekuatan_keras": 19,
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
    "kesehatan": 15,
    "pendidikan": 38,
    "keamanan": 9,
    "keuangan": 3,
    "lingkungan": 60
  }
};



