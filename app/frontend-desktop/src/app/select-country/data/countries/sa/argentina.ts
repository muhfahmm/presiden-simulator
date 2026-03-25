import { CountryData } from "../../types/_index";

export const argentina: CountryData = {
  "name_en": "Argentina",
  "capital": "Buenos Aires",
  "name_id": "Argentina",
  "lon": -58.38,
  "lat": -34.6,
  "flag": "🇦🇷",
  "jumlah_penduduk": 44494502,
  "anggaran": 6223,
  "pendapatan_nasional": "17779",
  "religion": "Katolik",
  "ideology": "Kapitalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 1,
    "pembangkit_air": 20,
    "pembangkit_surya": 1,
    "pembangkit_termal": 28,
    "pembangkit_gas": 26,
    "pembangkit_angin": 40,
    "jaringan_listrik": 78
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 30,
    "kereta_bawah_tanah": 39,
    "jalur_kereta": 25,
    "jalan_tol": 37,
    "kualitas_jalan": 55,
    "pelabuhan_laut": 25,
    "bandara": 10,
    "terminal_bus": 29,
    "helipad": 40,
    "cakupan_internet": 55,
    "indeks_teknologi": 53,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 22,
    "uranium": 39,
    "batu_bara": 40,
    "minyak_bumi": 9,
    "gas_alam": 8,
    "garam": 24,
    "nikel": 34,
    "litium": 5,
    "aluminium": 33,
    "tembaga": 12,
    "logam_tanah_jarang": 6,
    "bijih_besi": 19,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 9,
    "mobil": 27,
    "sepeda_motor": 18,
    "smelter": 9,
    "semen_beton": 4,
    "kayu": 33,
    "air_mineral": 26,
    "gula": 21,
    "roti": 10,
    "farmasi": 27,
    "pupuk": 37,
    "pengolahan_daging": 21,
    "mie_instan": 1,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 17.5,
    "sapi_perah": 25,
    "sapi_potong": 23,
    "domba_kambing": 14,
    "udang_kerang": 10.0,
    "ikan": 21,
    "padi": 2,
    "gandum_jagung": 30.0,
    "sayur_umbi": 17.0,
    "kedelai": 2,
    "kelapa_sawit": 22,
    "kopi_teh_kakao": 22.0,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 35,
    "gudang_senjata": 27,
    "hangar_tank": 30,
    "akademi_militer": 13,
    "pusat_komando": 4,
    "pangkalan_udara": 18,
    "pangkalan_laut": 5,
    "program_luar_angkasa": 22,
    "pertahanan_siber": 32,
    "anggaran_pertahanan": 1777,
    "personel": 26895,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 23,
    "infanteri": 1,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 7,
        "apc": 36,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 29,
        "kapal_destroyer": 30,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 20,
        "helikopter_serang": 19,
        "pesawat_pengintai": 2
      },
      "total_unit": 22,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 21,
      "jaringan_radar": 30,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 9,
          "sepeda_motor": 21,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 18,
          "helikopter_polisi": 19,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 6,
          "kamera_pengawas": 21,
          "pusat_forensik": 1
        },
        "waktu_respon": 28,
        "kepercayaan_publik": 50 },
    "intelijen": 35,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 34,
      "misi_mata_mata": 20,
      "misi_sabotase": 40,
      "manajemen_wilayah": 27,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 38,
      "sd": 16,
      "smp": 21,
      "sma": 26,
      "universitas": 23,
      "lembaga_pendidikan": 40,
      "laboratorium": 19,
      "observatorium": 13,
      "pusat_penelitian": 4,
      "pusat_pengembangan": 22,
      "literasi": 75,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 32,
      "rumah_sakit_kecil": 13,
      "pusat_diagnostik": 21,
      "tempat_tidur_rs": 7640,
      "harapan_hidup": 33,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 40,
      "sirkuit_balap": 13,
      "stadion": 37,
      "stadion_internasional": 35,
      "skor_olimpiade": 7,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 32,
      "pengadilan": 39,
      "kejaksaan": 34,
      "pos_polisi": 12,
      "armada_mobil_polisi": 6304,
      "akademi_polisi": 6,
      "indeks_korupsi": 79,
      "indeks_keamanan": 58
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 2,
      "kepuasan": 67,
      "pendapatan": 37
    },
    "korporasi": {
      "tarif": 13,
      "kepuasan": 52,
      "pendapatan": 159
    },
    "penghasilan": {
      "tarif": 40,
      "kepuasan": 61,
      "pendapatan": 528
    },
    "bea_cukai": {
      "tarif": 39,
      "kepuasan": 86,
      "pendapatan": 444
    },
    "lingkungan": {
      "tarif": 13,
      "kepuasan": 88,
      "pendapatan": 221
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 32 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 94 },
    "lainnya": {
      "tarif": 15,
      "kepuasan": 93,
      "pendapatan": 253
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 15550,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 5200,
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
    "musuh": [],
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 23,
      "kekuatan_keras": 22,
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
    "kesehatan": 33,
    "pendidikan": 35,
    "keamanan": 24,
    "keuangan": 36,
    "lingkungan": 60
  }
};
