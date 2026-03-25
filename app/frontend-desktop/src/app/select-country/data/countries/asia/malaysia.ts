import { CountryData } from "../../types";

export const malaysia: CountryData = {
  "name_en": "Malaysia",
  "capital": "Kuala Lumpur",
  "name_id": "Malaysia",
  "lon": 101.42,
  "lat": 3.1,
  "flag": "🇲🇾",
  "jumlah_penduduk": 31528585,
  "anggaran": 3889,
  "pendapatan_nasional": "11112",
  "religion": "Islam",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 32,
    "pembangkit_air": 14,
    "pembangkit_surya": 16,
    "pembangkit_termal": 35,
    "pembangkit_gas": 2,
    "pembangkit_angin": 22,
    "jaringan_listrik": 93
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 18,
    "kereta_bawah_tanah": 37,
    "jalur_kereta": 37,
    "jalan_tol": 37,
    "kualitas_jalan": 70,
    "pelabuhan_laut": 37,
    "bandara": 32,
    "terminal_bus": 6,
    "helipad": 14,
    "cakupan_internet": 63,
    "indeks_teknologi": 65,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 40,
    "uranium": 33,
    "batu_bara": 8,
    "minyak_bumi": 40,
    "gas_alam": 1,
    "garam": 39,
    "nikel": 9,
    "litium": 32,
    "aluminium": 21,
    "tembaga": 23,
    "logam_tanah_jarang": 9,
    "bijih_besi": 2,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 24,
    "mobil": 23,
    "sepeda_motor": 9,
    "smelter": 29,
    "semen_beton": 12,
    "kayu": 3,
    "air_mineral": 23,
    "gula": 36,
    "roti": 3,
    "farmasi": 18,
    "pupuk": 17,
    "pengolahan_daging": 33,
    "mie_instan": 4,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 5,
    "unggas": 29,
    "sapi_perah": 4,
    "sapi_potong": 14,
    "domba_kambing": 23,
    "udang": 7,
    "ikan": 24,
    "kerang": 30,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 2,
    "gandum": 13,
    "jagung": 9,
    "umbi_umbian": 36,
    "kedelai": 16,
    "kelapa_sawit": 37,
    "teh": 40,
    "kopi": 30,
    "cokelat": 19,
    "tebu": 25,
    "sayur_sayuran": 8,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 35,
    "gudang_senjata": 9,
    "hangar_tank": 33,
    "akademi_militer": 18,
    "pusat_komando": 6,
    "pangkalan_udara": 18,
    "pangkalan_laut": 31,
    "program_luar_angkasa": 40,
    "pertahanan_siber": 25,
    "anggaran_pertahanan": 1111,
    "personel": 5130,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 35,
    "infanteri": 33,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 34,
        "apc": 30,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 12,
        "kapal_destroyer": 12,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 10,
        "helikopter_serang": 31,
        "pesawat_pengintai": 2
      },
      "total_unit": 10,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 36,
      "jaringan_radar": 16,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 7,
          "sepeda_motor": 34,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 19,
          "helikopter_polisi": 25,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 32,
          "kamera_pengawas": 23,
          "pusat_forensik": 1
        },
        "waktu_respon": 16,
        "kepercayaan_publik": 50 },
    "intelijen": 1,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 3,
      "misi_mata_mata": 34,
      "misi_sabotase": 36,
      "manajemen_wilayah": 21,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 34,
      "sd": 29,
      "smp": 31,
      "sma": 1,
      "universitas": 35,
      "lembaga_pendidikan": 36,
      "laboratorium": 12,
      "observatorium": 11,
      "pusat_penelitian": 8,
      "pusat_pengembangan": 6,
      "literasi": 75,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 6,
      "rumah_sakit_kecil": 30,
      "pusat_diagnostik": 25,
      "tempat_tidur_rs": 2301,
      "harapan_hidup": 1,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 33,
      "sirkuit_balap": 32,
      "stadion": 37,
      "stadion_internasional": 17,
      "skor_olimpiade": 39,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 22,
      "pengadilan": 17,
      "kejaksaan": 21,
      "pos_polisi": 18,
      "armada_mobil_polisi": 2455,
      "akademi_polisi": 16,
      "indeks_korupsi": 52,
      "indeks_keamanan": 87
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
      "pendapatan": 170
    },
    "korporasi": {
      "tarif": 26,
      "kepuasan": 52,
      "pendapatan": 139
    },
    "penghasilan": {
      "tarif": 29,
      "kepuasan": 61,
      "pendapatan": 259
    },
    "bea_cukai": {
      "tarif": 8,
      "kepuasan": 86,
      "pendapatan": 82
    },
    "lingkungan": {
      "tarif": 12,
      "kepuasan": 88,
      "pendapatan": 80
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 20 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 59 },
    "lainnya": {
      "tarif": 22,
      "kepuasan": 93,
      "pendapatan": 167
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 14400,
    "harga_telur": 15550,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 10400,
    "harga_obat": 221060,
    "harga_pendidikan": 483900
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 78,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 25,
    "komersial": 16,
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
      "kekuatan_lunak": 6,
      "kekuatan_keras": 27,
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
    "kesehatan": 2,
    "pendidikan": 39,
    "keamanan": 5,
    "keuangan": 39,
    "lingkungan": 60
  }
};
