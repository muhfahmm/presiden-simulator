import { CountryData } from "../../types/_index";

export const kroasia: CountryData = {
  "name_en": "Croatia",
  "capital": "Zagreb",
  "name_id": "Kroasia",
  "lon": 15.5,
  "lat": 45.16666666,
  "flag": "🇭🇷",
  "jumlah_penduduk": 4087843,
  "anggaran": 758,
  "pendapatan_nasional": "2167",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 27,
    "pembangkit_air": 8,
    "pembangkit_surya": 20,
    "pembangkit_termal": 9,
    "pembangkit_gas": 36,
    "pembangkit_angin": 19,
    "jaringan_listrik": 58
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 22,
    "kereta_bawah_tanah": 5,
    "jalur_kereta": 20,
    "jalan_tol": 28,
    "kualitas_jalan": 57,
    "pelabuhan_laut": 25,
    "bandara": 18,
    "terminal_bus": 5,
    "helipad": 33,
    "cakupan_internet": 57,
    "indeks_teknologi": 92,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 10,
    "uranium": 20,
    "batu_bara": 13,
    "minyak_bumi": 28,
    "gas_alam": 22,
    "garam": 15,
    "nikel": 32,
    "litium": 36,
    "aluminium": 38,
    "tembaga": 29,
    "logam_tanah_jarang": 13,
    "bijih_besi": 11,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 16,
    "mobil": 18,
    "sepeda_motor": 40,
    "smelter": 25,
    "semen_beton": 17,
    "kayu": 9,
    "air_mineral": 20,
    "gula": 23,
    "roti": 3,
    "farmasi": 14,
    "pupuk": 3,
    "pengolahan_daging": 11,
    "mie_instan": 9,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 30.0,
    "sapi_perah": 7,
    "sapi_potong": 25,
    "domba_kambing": 10,
    "udang_kerang": 33.0,
    "ikan": 29,
    "padi": 39,
    "gandum_jagung": 15.5,
    "sayur_umbi": 26.5,
    "kedelai": 32,
    "kelapa_sawit": 23,
    "kopi_teh_kakao": 19.7,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 22,
    "gudang_senjata": 9,
    "hangar_tank": 18,
    "akademi_militer": 12,
    "pusat_komando": 34,
    "pangkalan_udara": 30,
    "pangkalan_laut": 13,
    "program_luar_angkasa": 16,
    "pertahanan_siber": 37,
    "anggaran_pertahanan": 216,
    "personel": 7037,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 26,
    "infanteri": 3,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 31,
        "apc": 33,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 31,
        "kapal_destroyer": 32,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 25,
        "helikopter_serang": 8,
        "pesawat_pengintai": 2
      },
      "total_unit": 29,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 7,
      "jaringan_radar": 24,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 31,
          "sepeda_motor": 38,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 17,
          "helikopter_polisi": 6,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 20,
          "kamera_pengawas": 22,
          "pusat_forensik": 1
        },
        "waktu_respon": 27,
        "kepercayaan_publik": 50 },
    "intelijen": 11,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 25,
      "misi_mata_mata": 28,
      "misi_sabotase": 39,
      "manajemen_wilayah": 39,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 28,
      "sd": 13,
      "smp": 35,
      "sma": 19,
      "universitas": 40,
      "lembaga_pendidikan": 8,
      "laboratorium": 22,
      "observatorium": 4,
      "pusat_penelitian": 30,
      "pusat_pengembangan": 20,
      "literasi": 55,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 9,
      "rumah_sakit_kecil": 16,
      "pusat_diagnostik": 26,
      "tempat_tidur_rs": 620,
      "harapan_hidup": 22,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 37,
      "sirkuit_balap": 37,
      "stadion": 32,
      "stadion_internasional": 12,
      "skor_olimpiade": 16,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 11,
      "pengadilan": 12,
      "kejaksaan": 21,
      "pos_polisi": 22,
      "armada_mobil_polisi": 6330,
      "akademi_polisi": 9,
      "indeks_korupsi": 62,
      "indeks_keamanan": 91
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 5,
      "kepuasan": 67,
      "pendapatan": 9
    },
    "korporasi": {
      "tarif": 21,
      "kepuasan": 52,
      "pendapatan": 33
    },
    "penghasilan": {
      "tarif": 30,
      "kepuasan": 61,
      "pendapatan": 55
    },
    "bea_cukai": {
      "tarif": 39,
      "kepuasan": 86,
      "pendapatan": 63
    },
    "lingkungan": {
      "tarif": 20,
      "kepuasan": 88,
      "pendapatan": 27
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 12 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 22
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 83280,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 800,
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
    "musuh": [],
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 35,
      "kekuatan_keras": 2,
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
    "kesehatan": 36,
    "pendidikan": 8,
    "keamanan": 33,
    "keuangan": 35,
    "lingkungan": 60
  }
};
