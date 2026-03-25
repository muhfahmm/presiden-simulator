import { CountryData } from "../../types";

export const antigua_dan_barbuda: CountryData = {
  "name_en": "Antigua and Barbuda",
  "capital": "Saint John's",
  "name_id": "Antigua dan Barbuda",
  "lon": -61.84,
  "lat": 17.11,
  "flag": "🇦🇬",
  "jumlah_penduduk": 96286,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 14,
    "pembangkit_air": 38,
    "pembangkit_surya": 2,
    "pembangkit_termal": 39,
    "pembangkit_gas": 4,
    "pembangkit_angin": 32,
    "jaringan_listrik": 83
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 13,
    "kereta_bawah_tanah": 32,
    "jalur_kereta": 3,
    "jalan_tol": 6,
    "kualitas_jalan": 76,
    "pelabuhan_laut": 12,
    "bandara": 29,
    "terminal_bus": 12,
    "helipad": 19,
    "cakupan_internet": 86,
    "indeks_teknologi": 72,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 11,
    "uranium": 33,
    "batu_bara": 16,
    "minyak_bumi": 21,
    "gas_alam": 7,
    "garam": 15,
    "nikel": 38,
    "litium": 26,
    "aluminium": 14,
    "tembaga": 4,
    "logam_tanah_jarang": 25,
    "bijih_besi": 2,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 33,
    "mobil": 1,
    "sepeda_motor": 16,
    "smelter": 16,
    "semen_beton": 2,
    "kayu": 25,
    "air_mineral": 6,
    "gula": 7,
    "roti": 32,
    "farmasi": 8,
    "pupuk": 22,
    "pengolahan_daging": 27,
    "mie_instan": 19,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 19,
    "unggas": 36,
    "sapi_perah": 7,
    "sapi_potong": 40,
    "domba_kambing": 3,
    "udang": 24,
    "ikan": 4,
    "kerang": 23,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 36,
    "gandum": 5,
    "jagung": 35,
    "umbi_umbian": 7,
    "kedelai": 29,
    "kelapa_sawit": 34,
    "teh": 22,
    "kopi": 13,
    "cokelat": 13,
    "tebu": 24,
    "sayur_sayuran": 16,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 13,
    "gudang_senjata": 8,
    "hangar_tank": 7,
    "akademi_militer": 13,
    "pusat_komando": 40,
    "pangkalan_udara": 21,
    "pangkalan_laut": 33,
    "program_luar_angkasa": 31,
    "pertahanan_siber": 22,
    "anggaran_pertahanan": 27,
    "personel": 16148,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 4,
    "infanteri": 36,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 25,
        "apc": 20,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 18,
        "kapal_destroyer": 18,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 6,
        "helikopter_serang": 34,
        "pesawat_pengintai": 2
      },
      "total_unit": 7,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 21,
      "jaringan_radar": 40,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 39,
          "sepeda_motor": 6,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 20,
          "helikopter_polisi": 35,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 4,
          "kamera_pengawas": 40,
          "pusat_forensik": 1
        },
        "waktu_respon": 32,
        "kepercayaan_publik": 50 },
    "intelijen": 9,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 17,
      "misi_mata_mata": 11,
      "misi_sabotase": 25,
      "manajemen_wilayah": 29,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 12,
      "sd": 40,
      "smp": 2,
      "sma": 13,
      "universitas": 3,
      "lembaga_pendidikan": 30,
      "laboratorium": 33,
      "observatorium": 39,
      "pusat_penelitian": 2,
      "pusat_pengembangan": 38,
      "literasi": 95,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 1,
      "rumah_sakit_kecil": 34,
      "pusat_diagnostik": 19,
      "tempat_tidur_rs": 500,
      "harapan_hidup": 14,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 5,
      "sirkuit_balap": 40,
      "stadion": 23,
      "stadion_internasional": 32,
      "skor_olimpiade": 36,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 3,
      "pengadilan": 15,
      "kejaksaan": 39,
      "pos_polisi": 20,
      "armada_mobil_polisi": 1019,
      "akademi_polisi": 32,
      "indeks_korupsi": 52,
      "indeks_keamanan": 83
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 21,
      "kepuasan": 67,
      "pendapatan": 3
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 15,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 25,
      "kepuasan": 86,
      "pendapatan": 5
    },
    "lingkungan": {
      "tarif": 32,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 40,
      "kepuasan": 93,
      "pendapatan": 9
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 100,
    "gaji_guru": 90,
    "gaji_medis": 100,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 21400,
    "harga_listrik": 2240,
    "harga_air": 4160,
    "harga_obat": 157900,
    "harga_pendidikan": 483900
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 71,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 37,
    "komersial": 39,
    "industri": 53
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
      "kekuatan_lunak": 14,
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
    "kesehatan": 30,
    "pendidikan": 7,
    "keamanan": 11,
    "keuangan": 27,
    "lingkungan": 60
  }
};
