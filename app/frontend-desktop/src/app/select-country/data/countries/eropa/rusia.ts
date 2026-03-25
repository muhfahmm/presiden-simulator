import { CountryData } from "../../types/_index";

export const rusia: CountryData = {
  "name_en": "Russia",
  "capital": "Moscow",
  "name_id": "Rusia",
  "lon": 100,
  "lat": 60,
  "flag": "🇷🇺",
  "jumlah_penduduk": 144478050,
  "anggaran": 19640,
  "pendapatan_nasional": "56116",
  "religion": "Kristen Ortodoks",
  "ideology": "Nasionalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 33,
    "pembangkit_air": 32,
    "pembangkit_surya": 25,
    "pembangkit_termal": 7,
    "pembangkit_gas": 9,
    "pembangkit_angin": 16,
    "jaringan_listrik": 90
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 4,
    "kereta_bawah_tanah": 1,
    "jalur_kereta": 21,
    "jalan_tol": 36,
    "kualitas_jalan": 87,
    "pelabuhan_laut": 32,
    "bandara": 31,
    "terminal_bus": 23,
    "helipad": 37,
    "cakupan_internet": 81,
    "indeks_teknologi": 60,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 17,
    "uranium": 9,
    "batu_bara": 23,
    "minyak_bumi": 35,
    "gas_alam": 7,
    "garam": 26,
    "nikel": 6,
    "litium": 32,
    "aluminium": 15,
    "tembaga": 27,
    "logam_tanah_jarang": 35,
    "bijih_besi": 24,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 16,
    "mobil": 11,
    "sepeda_motor": 28,
    "smelter": 36,
    "semen_beton": 35,
    "kayu": 20,
    "air_mineral": 22,
    "gula": 27,
    "roti": 33,
    "farmasi": 32,
    "pupuk": 12,
    "pengolahan_daging": 22,
    "mie_instan": 5,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 36.0,
    "sapi_perah": 39,
    "sapi_potong": 8,
    "domba_kambing": 12,
    "udang_kerang": 14.0,
    "ikan": 28,
    "padi": 35,
    "gandum_jagung": 14.0,
    "sayur_umbi": 27.0,
    "kedelai": 37,
    "kelapa_sawit": 10,
    "kopi_teh_kakao": 13.7,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 15,
    "gudang_senjata": 27,
    "hangar_tank": 22,
    "akademi_militer": 31,
    "pusat_komando": 22,
    "pangkalan_udara": 22,
    "pangkalan_laut": 18,
    "program_luar_angkasa": 32,
    "pertahanan_siber": 20,
    "anggaran_pertahanan": 5611,
    "personel": 10237,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 11,
    "infanteri": 30,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 17,
        "apc": 142,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 33,
        "kapal_destroyer": 19,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 189,
        "helikopter_serang": 33,
        "pesawat_pengintai": 2
      },
      "total_unit": 2,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 3,
      "jaringan_radar": 0,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 21,
          "sepeda_motor": 35,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 17,
          "helikopter_polisi": 31,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 23,
          "kamera_pengawas": 13,
          "pusat_forensik": 1
        },
        "waktu_respon": 6,
        "kepercayaan_publik": 50 },
    "intelijen": 15,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 10,
      "misi_mata_mata": 36,
      "misi_sabotase": 7,
      "manajemen_wilayah": 37,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 12,
      "sd": 37,
      "smp": 12,
      "sma": 2,
      "universitas": 15,
      "lembaga_pendidikan": 37,
      "laboratorium": 26,
      "observatorium": 34,
      "pusat_penelitian": 29,
      "pusat_pengembangan": 8,
      "literasi": 87,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 12,
      "rumah_sakit_kecil": 29,
      "pusat_diagnostik": 29,
      "tempat_tidur_rs": 7697,
      "harapan_hidup": 35,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 24,
      "sirkuit_balap": 2,
      "stadion": 14,
      "stadion_internasional": 17,
      "skor_olimpiade": 1,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 26,
      "pengadilan": 27,
      "kejaksaan": 3,
      "pos_polisi": 11,
      "armada_mobil_polisi": 6612,
      "akademi_polisi": 24,
      "indeks_korupsi": 75,
      "indeks_keamanan": 72
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 40,
      "kepuasan": 67,
      "pendapatan": 1161
    },
    "korporasi": {
      "tarif": 10,
      "kepuasan": 52,
      "pendapatan": 241
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 1042
    },
    "bea_cukai": {
      "tarif": 25,
      "kepuasan": 86,
      "pendapatan": 983
    },
    "lingkungan": {
      "tarif": 33,
      "kepuasan": 88,
      "pendapatan": 1412
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 99 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 295 },
    "lainnya": {
      "tarif": 26,
      "kepuasan": 93,
      "pendapatan": 1274
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 15550,
    "harga_bbm": 21400,
    "harga_listrik": 1280,
    "harga_air": 4160,
    "harga_obat": 126320,
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
    "musuh": [],
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 2,
      "kekuatan_keras": 12,
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
    "pendidikan": 14,
    "keamanan": 20,
    "keuangan": 1,
    "lingkungan": 60
  }
};
