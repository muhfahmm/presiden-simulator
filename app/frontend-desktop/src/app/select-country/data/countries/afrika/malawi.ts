import { CountryData } from "../../types/_index";

export const malawi: CountryData = {
  "name_en": "Malawi",
  "capital": "Lilongwe",
  "name_id": "Malawi",
  "lon": 33.47,
  "lat": -13.59,
  "flag": "🇲🇼",
  "jumlah_penduduk": 18143315,
  "anggaran": 117,
  "pendapatan_nasional": "333",
  "religion": "Protestan",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 29,
    "pembangkit_air": 30,
    "pembangkit_nuklir": 40,
    "jaringan_listrik": 93,
    "pembangkit_surya": 39,
    "pembangkit_termal": 34,
    "pembangkit_angin": 17
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 11,
    "jalur_sepeda": 2,
    "terminal_bus": 35,
    "helipad": 25,
    "jalan_tol": 24,
    "cakupan_internet": 75,
    "jalur_kereta": 12,
    "kualitas_jalan": 78,
    "pelabuhan_laut": 14,
    "kereta_bawah_tanah": 27,
    "indeks_teknologi": 64,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 40,
    "batu_bara": 31,
    "tembaga": 21,
    "gas_alam": 27,
    "emas": 5,
    "bijih_besi": 15,
    "litium": 38,
    "nikel": 16,
    "minyak_bumi": 27,
    "logam_tanah_jarang": 17,
    "garam": 4,
    "kekuatan": 29.660809349923973,
    "uranium": 5
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 22,
    "mobil": 29,
    "semen_beton": 2,
    "pupuk": 23,
    "mie_instan": 30,
    "pengolahan_daging": 9,
    "air_mineral": 12,
    "sepeda_motor": 39,
    "farmasi": 7,
    "semikonduktor": 4,
    "smelter": 34,
    "kekuatan": 3.076011687404966,
    "gula": 16,
    "kayu": 18
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 22.0,
    "sapi_perah": 27,
    "sapi_potong": 18,
    "domba_kambing": 29,
    "udang_kerang": 9.5,
    "ikan": 39,
    "padi": 19,
    "gandum_jagung": 13.0,
    "sayur_umbi": 24.0,
    "kedelai": 37,
    "kelapa_sawit": 38,
    "kopi_teh_kakao": 12.7,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 28,
    "gudang_senjata": 1,
    "hangar_tank": 9,
    "akademi_militer": 38,
    "pusat_komando": 5,
    "pangkalan_udara": 39,
    "pangkalan_laut": 34,
    "program_luar_angkasa": 40,
    "pertahanan_siber": 10,
    "anggaran_pertahanan": 33,
    "personel": 8841,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 34,
    "infanteri": 28,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 36,
        "apc": 20,
        "artileri_berat": 26
  },
      "laut": {
        "kapal_induk": 22,
        "kapal_destroyer": 19,
        "kapal_selam_nuklir": 0
  },
      "udara": {
        "jet_tempur_siluman": 1,
        "helikopter_serang": 40,
        "pesawat_pengintai": 2
  },
      "total_unit": 16,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 2,
      "jaringan_radar": 25,
      "operasi_siber": 2
  },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 26,
          "sepeda_motor": 19,
          "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 2,
          "helikopter_polisi": 21,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 13,
          "kamera_pengawas": 4,
          "pusat_forensik": 1
  },
        "waktu_respon": 17,
        "kepercayaan_publik": 50
  },
    "intelijen": 14,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 20,
      "misi_mata_mata": 1,
      "misi_sabotase": 21,
      "manajemen_wilayah": 1,
      "program_nuklir": 0
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 17,
      "sd": 38,
      "smp": 16,
      "sma": 5,
      "universitas": 35,
      "lembaga_pendidikan": 39,
      "laboratorium": 6,
      "observatorium": 28,
      "pusat_penelitian": 19,
      "pusat_pengembangan": 32,
      "literasi": 95,
      "indeks_penelitian": 0
  },
    "kesehatan": {
      "rumah_sakit_besar": 1,
      "rumah_sakit_kecil": 23,
      "pusat_diagnostik": 40,
      "tempat_tidur_rs": 9033,
      "harapan_hidup": 18,
      "indeks_kesehatan": 85
  },
    "olahraga": {
      "kolam_renang": 9,
      "sirkuit_balap": 33,
      "stadion": 38,
      "stadion_internasional": 13,
      "skor_olimpiade": 17,
      "popularitas": 44
  },
    "hukum": {
      "pusat_bantuan_hukum": 29,
      "pengadilan": 18,
      "kejaksaan": 40,
      "pos_polisi": 4,
      "armada_mobil_polisi": 5954,
      "akademi_polisi": 12,
      "indeks_korupsi": 82,
      "indeks_keamanan": 90
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 6,
      "kepuasan": 67,
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 28,
      "kepuasan": 52,
      "pendapatan": 7
    },
    "penghasilan": {
      "tarif": 16,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 7
    },
    "lingkungan": {
      "tarif": 29,
      "kepuasan": 88,
      "pendapatan": 8
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
    "lainnya": {
      "tarif": 30,
      "kepuasan": 93,
      "pendapatan": 10
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 30,
    "gaji_guru": 50,
    "gaji_medis": 50,
    "gaji_militer": 40
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
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 11520,
    "harga_telur": 62200,
    "harga_bbm": 5350,
    "harga_listrik": 800,
    "harga_air": 5200,
    "harga_obat": 221060,
    "harga_pendidikan": 387120
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
      "kekuatan_lunak": 3,
      "kekuatan_keras": 20,
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
    "pendidikan": 27,
    "keamanan": 5,
    "keuangan": 2,
    "lingkungan": 60
  }
};
