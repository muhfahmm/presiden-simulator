import { CountryData } from "../../types/_index";

export const gabon: CountryData = {
  "name_en": "Gabon",
  "capital": "Libreville",
  "name_id": "Gabon",
  "lon": 11.75,
  "lat": -1,
  "flag": "🇬🇦",
  "jumlah_penduduk": 2119275,
  "anggaran": 194,
  "pendapatan_nasional": "556",
  "religion": "Katolik",
  "ideology": "Nasionalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 1,
    "pembangkit_air": 11,
    "pembangkit_nuklir": 24,
    "jaringan_listrik": 73,
    "pembangkit_surya": 12,
    "pembangkit_termal": 3,
    "pembangkit_angin": 30
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 21,
    "jalur_sepeda": 15,
    "terminal_bus": 19,
    "helipad": 38,
    "jalan_tol": 11,
    "cakupan_internet": 54,
    "jalur_kereta": 7,
    "kualitas_jalan": 64,
    "pelabuhan_laut": 31,
    "kereta_bawah_tanah": 16,
    "indeks_teknologi": 81,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 11,
    "batu_bara": 9,
    "tembaga": 39,
    "gas_alam": 17,
    "emas": 16,
    "bijih_besi": 8,
    "litium": 39,
    "nikel": 12,
    "minyak_bumi": 21,
    "logam_tanah_jarang": 14,
    "garam": 17,
    "kekuatan": 29.660809349923973,
    "uranium": 38
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 31,
    "mobil": 16,
    "semen_beton": 23,
    "pupuk": 27,
    "mie_instan": 12,
    "pengolahan_daging": 25,
    "air_mineral": 15,
    "sepeda_motor": 4,
    "farmasi": 9,
    "semikonduktor": 10,
    "smelter": 1,
    "kekuatan": 3.076011687404966,
    "gula": 10,
    "kayu": 31
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 31.5,
    "sapi_perah": 32,
    "sapi_potong": 1,
    "domba_kambing": 7,
    "udang_kerang": 32.0,
    "ikan": 31,
    "padi": 5,
    "gandum_jagung": 25.0,
    "sayur_umbi": 10.0,
    "kedelai": 15,
    "kelapa_sawit": 29,
    "kopi_teh_kakao": 24.0,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 6,
    "gudang_senjata": 30,
    "hangar_tank": 11,
    "akademi_militer": 27,
    "pusat_komando": 6,
    "pangkalan_udara": 30,
    "pangkalan_laut": 5,
    "program_luar_angkasa": 10,
    "pertahanan_siber": 5,
    "anggaran_pertahanan": 55,
    "personel": 16086,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 37,
    "infanteri": 15,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 30,
        "apc": 30,
        "artileri_berat": 26
  },
      "laut": {
        "kapal_induk": 24,
        "kapal_destroyer": 29,
        "kapal_selam_nuklir": 0
  },
      "udara": {
        "jet_tempur_siluman": 20,
        "helikopter_serang": 36,
        "pesawat_pengintai": 2
  },
      "total_unit": 9,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 13,
      "jaringan_radar": 10,
      "operasi_siber": 2
  },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 15,
          "sepeda_motor": 33,
          "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 21,
          "helikopter_polisi": 18,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 1,
          "kamera_pengawas": 35,
          "pusat_forensik": 1
  },
        "waktu_respon": 33,
        "kepercayaan_publik": 50
  },
    "intelijen": 17,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 22,
      "misi_mata_mata": 2,
      "misi_sabotase": 37,
      "manajemen_wilayah": 3,
      "program_nuklir": 0
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 26,
      "sd": 28,
      "smp": 15,
      "sma": 40,
      "universitas": 15,
      "lembaga_pendidikan": 14,
      "laboratorium": 12,
      "observatorium": 26,
      "pusat_penelitian": 40,
      "pusat_pengembangan": 12,
      "literasi": 50,
      "indeks_penelitian": 0
  },
    "kesehatan": {
      "rumah_sakit_besar": 9,
      "rumah_sakit_kecil": 3,
      "pusat_diagnostik": 3,
      "tempat_tidur_rs": 4436,
      "harapan_hidup": 35,
      "indeks_kesehatan": 85
  },
    "olahraga": {
      "kolam_renang": 35,
      "sirkuit_balap": 27,
      "stadion": 25,
      "stadion_internasional": 32,
      "skor_olimpiade": 31,
      "popularitas": 44
  },
    "hukum": {
      "pusat_bantuan_hukum": 12,
      "pengadilan": 18,
      "kejaksaan": 38,
      "pos_polisi": 36,
      "armada_mobil_polisi": 1827,
      "akademi_polisi": 2,
      "indeks_korupsi": 86,
      "indeks_keamanan": 89
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 28,
      "kepuasan": 67,
      "pendapatan": 16
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 19
    },
    "penghasilan": {
      "tarif": 25,
      "kepuasan": 61,
      "pendapatan": 12
    },
    "bea_cukai": {
      "tarif": 39,
      "kepuasan": 86,
      "pendapatan": 14
    },
    "lingkungan": {
      "tarif": 23,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 25,
      "kepuasan": 93,
      "pendapatan": 5
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 30,
    "gaji_guru": 50,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 24880,
    "harga_bbm": 14980,
    "harga_listrik": 800,
    "harga_air": 10400,
    "harga_obat": 78950,
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
      "kekuatan_lunak": 20,
      "kekuatan_keras": 13,
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
    "kesehatan": 27,
    "pendidikan": 26,
    "keamanan": 11,
    "keuangan": 13,
    "lingkungan": 60
  }
};
