import { CountryData } from "../../types/_index";

export const republik_sudan: CountryData = {
  "name_en": "Sudan",
  "capital": "Khartoum",
  "name_id": "Republik sudan",
  "lon": 30,
  "lat": 15,
  "flag": "🇸🇩",
  "jumlah_penduduk": 41801533,
  "anggaran": 243,
  "pendapatan_nasional": "694",
  "religion": "Islam",
  "ideology": "Nasionalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 37,
    "pembangkit_air": 17,
    "pembangkit_nuklir": 26,
    "jaringan_listrik": 61,
    "pembangkit_surya": 39,
    "pembangkit_termal": 37,
    "pembangkit_angin": 27
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 32,
    "jalur_sepeda": 8,
    "terminal_bus": 9,
    "helipad": 30,
    "jalan_tol": 38,
    "cakupan_internet": 80,
    "jalur_kereta": 16,
    "kualitas_jalan": 58,
    "pelabuhan_laut": 11,
    "kereta_bawah_tanah": 12,
    "indeks_teknologi": 82,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 4,
    "batu_bara": 3,
    "tembaga": 35,
    "gas_alam": 35,
    "emas": 26,
    "bijih_besi": 17,
    "litium": 21,
    "nikel": 6,
    "minyak_bumi": 34,
    "logam_tanah_jarang": 3,
    "garam": 36,
    "kekuatan": 29.660809349923973,
    "uranium": 37
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 38,
    "mobil": 27,
    "semen_beton": 16,
    "pupuk": 16,
    "mie_instan": 35,
    "pengolahan_daging": 17,
    "air_mineral": 20,
    "sepeda_motor": 21,
    "farmasi": 12,
    "semikonduktor": 20,
    "smelter": 37,
    "kekuatan": 3.076011687404966,
    "gula": 35,
    "kayu": 30
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 22.0,
    "sapi_perah": 19,
    "sapi_potong": 21,
    "domba_kambing": 22,
    "udang_kerang": 11.0,
    "ikan": 22,
    "padi": 18,
    "gandum_jagung": 35.0,
    "sayur_umbi": 24.0,
    "kedelai": 34,
    "kelapa_sawit": 40,
    "kopi_teh_kakao": 34.3,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 31,
    "gudang_senjata": 26,
    "hangar_tank": 27,
    "akademi_militer": 24,
    "pusat_komando": 16,
    "pangkalan_udara": 17,
    "pangkalan_laut": 17,
    "program_luar_angkasa": 12,
    "pertahanan_siber": 7,
    "anggaran_pertahanan": 69,
    "personel": 29459,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 18,
    "infanteri": 32,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 145,
        "apc": 122,
        "artileri_berat": 26
  },
      "laut": {
        "kapal_induk": 13,
        "kapal_destroyer": 115,
        "kapal_selam_nuklir": 0
  },
      "udara": {
        "jet_tempur_siluman": 160,
        "helikopter_serang": 161,
        "pesawat_pengintai": 2
  },
      "total_unit": 33,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 5,
      "jaringan_radar": 4,
      "operasi_siber": 2
  },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 23,
          "sepeda_motor": 9,
          "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 13,
          "helikopter_polisi": 7,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 14,
          "kamera_pengawas": 30,
          "pusat_forensik": 1
  },
        "waktu_respon": 27,
        "kepercayaan_publik": 50
  },
    "intelijen": 6,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 11,
      "misi_mata_mata": 16,
      "misi_sabotase": 22,
      "manajemen_wilayah": 21,
      "program_nuklir": 0
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 36,
      "sd": 33,
      "smp": 12,
      "sma": 27,
      "universitas": 25,
      "lembaga_pendidikan": 1,
      "laboratorium": 14,
      "observatorium": 4,
      "pusat_penelitian": 25,
      "pusat_pengembangan": 32,
      "literasi": 90,
      "indeks_penelitian": 0
  },
    "kesehatan": {
      "rumah_sakit_besar": 3,
      "rumah_sakit_kecil": 11,
      "pusat_diagnostik": 21,
      "tempat_tidur_rs": 6277,
      "harapan_hidup": 8,
      "indeks_kesehatan": 85
  },
    "olahraga": {
      "kolam_renang": 2,
      "sirkuit_balap": 15,
      "stadion": 26,
      "stadion_internasional": 39,
      "skor_olimpiade": 9,
      "popularitas": 44
  },
    "hukum": {
      "pusat_bantuan_hukum": 14,
      "pengadilan": 22,
      "kejaksaan": 34,
      "pos_polisi": 14,
      "armada_mobil_polisi": 5216,
      "akademi_polisi": 31,
      "indeks_korupsi": 92,
      "indeks_keamanan": 68
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
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 13,
      "kepuasan": 52,
      "pendapatan": 5
    },
    "penghasilan": {
      "tarif": 5,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 38,
      "kepuasan": 86,
      "pendapatan": 22
    },
    "lingkungan": {
      "tarif": 2,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 4 },
    "lainnya": {
      "tarif": 29,
      "kepuasan": 93,
      "pendapatan": 8
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 30,
    "gaji_guru": 50,
    "gaji_medis": 50,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 8000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 10700,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 221060,
    "harga_pendidikan": 241950
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
      "kekuatan_lunak": 7,
      "kekuatan_keras": 34,
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
    "pendidikan": 4,
    "keamanan": 9,
    "keuangan": 20,
    "lingkungan": 60
  }
};
