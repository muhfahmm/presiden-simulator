import { CountryData } from "../../types";

export const saint_vincent_dan_grenadine: CountryData = {
  "name_en": "Saint Vincent and the Grenadines",
  "capital": "Kingstown",
  "name_id": "Saint vincent dan grenadine",
  "lon": -61.2,
  "lat": 13.25,
  "flag": "🇻🇨",
  "jumlah_penduduk": 110210,
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 1,
    "pembangkit_air": 7,
    "pembangkit_surya": 2,
    "pembangkit_termal": 23,
    "pembangkit_gas": 4,
    "pembangkit_angin": 8,
    "jaringan_listrik": 67
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 1,
    "kereta_bawah_tanah": 24,
    "jalur_kereta": 33,
    "jalan_tol": 16,
    "kualitas_jalan": 79,
    "pelabuhan_laut": 27,
    "bandara": 26,
    "terminal_bus": 7,
    "helipad": 7,
    "cakupan_internet": 50,
    "indeks_teknologi": 95,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 19,
    "uranium": 19,
    "batu_bara": 5,
    "minyak_bumi": 10,
    "gas_alam": 2,
    "garam": 20,
    "nikel": 23,
    "litium": 11,
    "aluminium": 24,
    "tembaga": 33,
    "logam_tanah_jarang": 34,
    "bijih_besi": 28,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 30,
    "mobil": 9,
    "sepeda_motor": 15,
    "smelter": 17,
    "semen_beton": 12,
    "kayu": 13,
    "air_mineral": 16,
    "gula": 24,
    "roti": 20,
    "farmasi": 11,
    "pupuk": 37,
    "pengolahan_daging": 23,
    "mie_instan": 40,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 25,
    "unggas": 35,
    "sapi_perah": 19,
    "sapi_potong": 26,
    "domba_kambing": 29,
    "udang": 28,
    "ikan": 22,
    "kerang": 3,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 35,
    "gandum": 10,
    "jagung": 31,
    "umbi_umbian": 1,
    "kedelai": 36,
    "kelapa_sawit": 29,
    "teh": 12,
    "kopi": 21,
    "cokelat": 29,
    "tebu": 26,
    "sayur_sayuran": 18,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 25,
    "gudang_senjata": 21,
    "hangar_tank": 23,
    "akademi_militer": 40,
    "pusat_komando": 8,
    "pangkalan_udara": 39,
    "pangkalan_laut": 40,
    "program_luar_angkasa": 14,
    "pertahanan_siber": 14,
    "anggaran_pertahanan": 27,
    "personel": 19964,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 6,
    "infanteri": 9,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 63,
        "apc": 32,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 33,
        "kapal_destroyer": 126,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 88,
        "helikopter_serang": 105,
        "pesawat_pengintai": 2
      },
      "total_unit": 9,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 1,
      "jaringan_radar": 5,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 39,
          "sepeda_motor": 20,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 39,
          "helikopter_polisi": 21,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 29,
          "kamera_pengawas": 1,
          "pusat_forensik": 1
        },
        "waktu_respon": 3,
        "kepercayaan_publik": 50 },
    "intelijen": 22,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 34,
      "misi_mata_mata": 15,
      "misi_sabotase": 35,
      "manajemen_wilayah": 27,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 21,
      "sd": 9,
      "smp": 19,
      "sma": 16,
      "universitas": 10,
      "lembaga_pendidikan": 40,
      "laboratorium": 1,
      "observatorium": 10,
      "pusat_penelitian": 2,
      "pusat_pengembangan": 15,
      "literasi": 66,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 23,
      "rumah_sakit_kecil": 2,
      "pusat_diagnostik": 8,
      "tempat_tidur_rs": 4947,
      "harapan_hidup": 20,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 10,
      "sirkuit_balap": 25,
      "stadion": 25,
      "stadion_internasional": 10,
      "skor_olimpiade": 9,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 32,
      "pengadilan": 18,
      "kejaksaan": 5,
      "pos_polisi": 5,
      "armada_mobil_polisi": 5603,
      "akademi_polisi": 31,
      "indeks_korupsi": 73,
      "indeks_keamanan": 87
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 10,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 36,
      "kepuasan": 52,
      "pendapatan": 9
    },
    "penghasilan": {
      "tarif": 37,
      "kepuasan": 61,
      "pendapatan": 6
    },
    "bea_cukai": {
      "tarif": 2,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 16,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 4,
      "kepuasan": 93,
      "pendapatan": 0
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
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 12320,
    "harga_gula": 20160,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 78950,
    "harga_pendidikan": 967800
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 66,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 32,
    "komersial": 15,
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
      "kekuatan_lunak": 23,
      "kekuatan_keras": 39,
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
    "kesehatan": 22,
    "pendidikan": 23,
    "keamanan": 31,
    "keuangan": 3,
    "lingkungan": 60
  }
};
