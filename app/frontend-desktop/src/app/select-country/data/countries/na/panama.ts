import { CountryData } from "../../types";

export const panama: CountryData = {
  "name_en": "Panama",
  "capital": "Panama City",
  "name_id": "Panama",
  "lon": -80,
  "lat": 9,
  "flag": "🇵🇦",
  "jumlah_penduduk": 4176873,
  "anggaran": 739,
  "pendapatan_nasional": "2111",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 7,
    "pembangkit_air": 1,
    "pembangkit_surya": 38,
    "pembangkit_termal": 21,
    "pembangkit_gas": 6,
    "pembangkit_angin": 21,
    "jaringan_listrik": 54
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 32,
    "kereta_bawah_tanah": 24,
    "jalur_kereta": 17,
    "jalan_tol": 33,
    "kualitas_jalan": 62,
    "pelabuhan_laut": 26,
    "bandara": 29,
    "terminal_bus": 9,
    "helipad": 13,
    "cakupan_internet": 50,
    "indeks_teknologi": 70,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 29,
    "uranium": 24,
    "batu_bara": 25,
    "minyak_bumi": 6,
    "gas_alam": 19,
    "garam": 8,
    "nikel": 6,
    "litium": 22,
    "aluminium": 13,
    "tembaga": 11,
    "logam_tanah_jarang": 13,
    "bijih_besi": 29,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 34,
    "mobil": 36,
    "sepeda_motor": 6,
    "smelter": 33,
    "semen_beton": 40,
    "kayu": 11,
    "air_mineral": 15,
    "gula": 24,
    "roti": 14,
    "farmasi": 33,
    "pupuk": 31,
    "pengolahan_daging": 29,
    "mie_instan": 17,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 5,
    "unggas": 33,
    "sapi_perah": 24,
    "sapi_potong": 40,
    "domba_kambing": 4,
    "udang": 5,
    "ikan": 14,
    "kerang": 34,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 8,
    "gandum": 37,
    "jagung": 25,
    "umbi_umbian": 4,
    "kedelai": 39,
    "kelapa_sawit": 18,
    "teh": 28,
    "kopi": 28,
    "cokelat": 8,
    "tebu": 3,
    "sayur_sayuran": 25,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 31,
    "gudang_senjata": 13,
    "hangar_tank": 12,
    "akademi_militer": 18,
    "pusat_komando": 33,
    "pangkalan_udara": 8,
    "pangkalan_laut": 3,
    "program_luar_angkasa": 17,
    "pertahanan_siber": 40,
    "anggaran_pertahanan": 211,
    "personel": 24498,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 2,
    "infanteri": 10,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 51,
        "apc": 173,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 25,
        "kapal_destroyer": 43,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 187,
        "helikopter_serang": 102,
        "pesawat_pengintai": 2
      },
      "total_unit": 25,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 5,
      "jaringan_radar": 3,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 25,
          "sepeda_motor": 37,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 8,
          "helikopter_polisi": 29,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 6,
          "kamera_pengawas": 2,
          "pusat_forensik": 1
        },
        "waktu_respon": 2,
        "kepercayaan_publik": 50 },
    "intelijen": 4,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 19,
      "misi_mata_mata": 2,
      "misi_sabotase": 35,
      "manajemen_wilayah": 10,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 17,
      "sd": 19,
      "smp": 19,
      "sma": 2,
      "universitas": 11,
      "lembaga_pendidikan": 40,
      "laboratorium": 2,
      "observatorium": 9,
      "pusat_penelitian": 34,
      "pusat_pengembangan": 36,
      "literasi": 78,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 11,
      "rumah_sakit_kecil": 31,
      "pusat_diagnostik": 15,
      "tempat_tidur_rs": 4641,
      "harapan_hidup": 37,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 35,
      "sirkuit_balap": 34,
      "stadion": 22,
      "stadion_internasional": 31,
      "skor_olimpiade": 30,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 18,
      "pengadilan": 4,
      "kejaksaan": 33,
      "pos_polisi": 8,
      "armada_mobil_polisi": 748,
      "akademi_polisi": 18,
      "indeks_korupsi": 59,
      "indeks_keamanan": 50
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 29,
      "kepuasan": 67,
      "pendapatan": 41
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 10
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 14
    },
    "bea_cukai": {
      "tarif": 36,
      "kepuasan": 86,
      "pendapatan": 54
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 17
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 12 },
    "lainnya": {
      "tarif": 39,
      "kepuasan": 93,
      "pendapatan": 85
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
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
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 126320,
    "harga_pendidikan": 483900
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 62,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 33,
    "komersial": 9,
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
      "kekuatan_lunak": 30,
      "kekuatan_keras": 15,
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
    "kesehatan": 32,
    "pendidikan": 25,
    "keamanan": 15,
    "keuangan": 7,
    "lingkungan": 60
  }
};
