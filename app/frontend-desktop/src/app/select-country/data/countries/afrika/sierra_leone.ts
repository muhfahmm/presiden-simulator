import { CountryData } from "../../types/_index";

export const sierra_leone: CountryData = {
  "name_en": "Sierra Leone",
  "capital": "Freetown",
  "name_id": "Sierra leone",
  "lon": -11.5,
  "lat": 8.5,
  "flag": "🇸🇱",
  "jumlah_penduduk": 7650154,
  "anggaran": 39,
  "pendapatan_nasional": "111",
  "religion": "Islam",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 13,
    "pembangkit_air": 27,
    "pembangkit_nuklir": 23,
    "jaringan_listrik": 85,
    "pembangkit_surya": 7,
    "pembangkit_termal": 17,
    "pembangkit_angin": 24
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 22,
    "jalur_sepeda": 37,
    "terminal_bus": 7,
    "helipad": 12,
    "jalan_tol": 24,
    "cakupan_internet": 76,
    "jalur_kereta": 23,
    "kualitas_jalan": 80,
    "pelabuhan_laut": 32,
    "kereta_bawah_tanah": 4,
    "indeks_teknologi": 55,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 26,
    "batu_bara": 23,
    "tembaga": 28,
    "gas_alam": 39,
    "emas": 40,
    "bijih_besi": 21,
    "litium": 38,
    "nikel": 11,
    "minyak_bumi": 13,
    "logam_tanah_jarang": 3,
    "garam": 24,
    "kekuatan": 29.660809349923973,
    "uranium": 36
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 9,
    "mobil": 29,
    "semen_beton": 36,
    "pupuk": 11,
    "mie_instan": 11,
    "pengolahan_daging": 10,
    "air_mineral": 7,
    "sepeda_motor": 11,
    "farmasi": 4,
    "semikonduktor": 38,
    "smelter": 10,
    "kekuatan": 3.076011687404966,
    "gula": 29,
    "kayu": 40
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 24.0,
    "sapi_perah": 4,
    "sapi_potong": 30,
    "domba_kambing": 33,
    "udang_kerang": 10.5,
    "ikan": 28,
    "padi": 20,
    "gandum_jagung": 16.0,
    "sayur_umbi": 30.0,
    "kedelai": 11,
    "kelapa_sawit": 15,
    "kopi_teh_kakao": 25.7,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 17,
    "gudang_senjata": 7,
    "hangar_tank": 32,
    "akademi_militer": 23,
    "pusat_komando": 4,
    "pangkalan_udara": 27,
    "pangkalan_laut": 11,
    "program_luar_angkasa": 38,
    "pertahanan_siber": 14,
    "anggaran_pertahanan": 11,
    "personel": 25678,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 30,
    "infanteri": 35,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 129,
        "apc": 183,
        "artileri_berat": 26
  },
      "laut": {
        "kapal_induk": 5,
        "kapal_destroyer": 77,
        "kapal_selam_nuklir": 0
  },
      "udara": {
        "jet_tempur_siluman": 107,
        "helikopter_serang": 169,
        "pesawat_pengintai": 2
  },
      "total_unit": 32,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 2,
      "jaringan_radar": 1,
      "operasi_siber": 2
  },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 24,
          "sepeda_motor": 19,
          "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 15,
          "helikopter_polisi": 29,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 22,
          "kamera_pengawas": 24,
          "pusat_forensik": 1
  },
        "waktu_respon": 1,
        "kepercayaan_publik": 50
  },
    "intelijen": 28,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 30,
      "misi_mata_mata": 4,
      "misi_sabotase": 29,
      "manajemen_wilayah": 33,
      "program_nuklir": 0
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 2,
      "sd": 34,
      "smp": 22,
      "sma": 32,
      "universitas": 2,
      "lembaga_pendidikan": 31,
      "laboratorium": 28,
      "observatorium": 4,
      "pusat_penelitian": 26,
      "pusat_pengembangan": 11,
      "literasi": 61,
      "indeks_penelitian": 0
  },
    "kesehatan": {
      "rumah_sakit_besar": 32,
      "rumah_sakit_kecil": 28,
      "pusat_diagnostik": 20,
      "tempat_tidur_rs": 8251,
      "harapan_hidup": 16,
      "indeks_kesehatan": 85
  },
    "olahraga": {
      "kolam_renang": 26,
      "sirkuit_balap": 14,
      "stadion": 21,
      "stadion_internasional": 11,
      "skor_olimpiade": 15,
      "popularitas": 44
  },
    "hukum": {
      "pusat_bantuan_hukum": 2,
      "pengadilan": 34,
      "kejaksaan": 17,
      "pos_polisi": 14,
      "armada_mobil_polisi": 2557,
      "akademi_polisi": 8,
      "indeks_korupsi": 82,
      "indeks_keamanan": 79
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 33,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 20,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 23,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 14,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 40,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 14,
      "kepuasan": 93,
      "pendapatan": 1
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 40,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 25,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 145740,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 30800,
    "harga_gula": 20160,
    "harga_telur": 62200,
    "harga_bbm": 5350,
    "harga_listrik": 3200,
    "harga_air": 5200,
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
      "kekuatan_lunak": 40,
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
    "kesehatan": 40,
    "pendidikan": 3,
    "keamanan": 11,
    "keuangan": 29,
    "lingkungan": 60
  }
};
