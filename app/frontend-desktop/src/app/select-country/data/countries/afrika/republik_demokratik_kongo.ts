import { CountryData } from "../../types/_index";

export const republik_demokratik_kongo: CountryData = {
  "name_en": "DR Congo",
  "capital": "Kinshasa",
  "name_id": "Republik demokratik kongo",
  "lon": 25,
  "lat": 0,
  "flag": "🇨🇩",
  "jumlah_penduduk": 5244363,
  "anggaran": 603,
  "pendapatan_nasional": "1722",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 29,
    "pembangkit_air": 36,
    "pembangkit_nuklir": 25,
    "jaringan_listrik": 81,
    "pembangkit_surya": 16,
    "pembangkit_termal": 26,
    "pembangkit_angin": 14
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 29,
    "jalur_sepeda": 20,
    "terminal_bus": 30,
    "helipad": 3,
    "jalan_tol": 4,
    "cakupan_internet": 50,
    "jalur_kereta": 29,
    "kualitas_jalan": 62,
    "pelabuhan_laut": 34,
    "kereta_bawah_tanah": 21,
    "indeks_teknologi": 82,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 29,
    "batu_bara": 40,
    "tembaga": 90,
    "gas_alam": 7,
    "emas": 60,
    "bijih_besi": 26,
    "litium": 38,
    "nikel": 35,
    "minyak_bumi": 19,
    "logam_tanah_jarang": 85,
    "garam": 30,
    "kekuatan": 29.660809349923973,
    "uranium": 14
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 38,
    "mobil": 20,
    "semen_beton": 25,
    "pupuk": 34,
    "mie_instan": 9,
    "pengolahan_daging": 21,
    "air_mineral": 6,
    "sepeda_motor": 39,
    "farmasi": 38,
    "semikonduktor": 1,
    "smelter": 13,
    "kekuatan": 3.076011687404966,
    "gula": 38,
    "kayu": 37
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 6.5,
    "sapi_perah": 13,
    "sapi_potong": 37,
    "domba_kambing": 25,
    "udang_kerang": 35.5,
    "ikan": 34,
    "padi": 11,
    "gandum_jagung": 26.0,
    "sayur_umbi": 33.0,
    "kedelai": 32,
    "kelapa_sawit": 32,
    "kopi_teh_kakao": 27.0,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 21,
    "gudang_senjata": 21,
    "hangar_tank": 22,
    "akademi_militer": 20,
    "pusat_komando": 11,
    "pangkalan_udara": 2,
    "pangkalan_laut": 15,
    "program_luar_angkasa": 32,
    "pertahanan_siber": 5,
    "anggaran_pertahanan": 172,
    "personel": 11536,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 24,
    "infanteri": 32,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 54,
        "apc": 82,
        "artileri_berat": 26
  },
      "laut": {
        "kapal_induk": 33,
        "kapal_destroyer": 55,
        "kapal_selam_nuklir": 0
  },
      "udara": {
        "jet_tempur_siluman": 64,
        "helikopter_serang": 188,
        "pesawat_pengintai": 2
  },
      "total_unit": 5,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 3,
      "jaringan_radar": 1,
      "operasi_siber": 2
  },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 11,
          "sepeda_motor": 32,
          "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 36,
          "helikopter_polisi": 31,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 16,
          "kamera_pengawas": 37,
          "pusat_forensik": 1
  },
        "waktu_respon": 32,
        "kepercayaan_publik": 50
  },
    "intelijen": 26,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 16,
      "misi_mata_mata": 26,
      "misi_sabotase": 15,
      "manajemen_wilayah": 17,
      "program_nuklir": 0
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 35,
      "sd": 34,
      "smp": 40,
      "sma": 8,
      "universitas": 19,
      "lembaga_pendidikan": 38,
      "laboratorium": 12,
      "observatorium": 27,
      "pusat_penelitian": 13,
      "pusat_pengembangan": 40,
      "literasi": 84,
      "indeks_penelitian": 0
  },
    "kesehatan": {
      "rumah_sakit_besar": 16,
      "rumah_sakit_kecil": 40,
      "pusat_diagnostik": 22,
      "tempat_tidur_rs": 7571,
      "harapan_hidup": 30,
      "indeks_kesehatan": 85
  },
    "olahraga": {
      "kolam_renang": 38,
      "sirkuit_balap": 26,
      "stadion": 16,
      "stadion_internasional": 26,
      "skor_olimpiade": 6,
      "popularitas": 44
  },
    "hukum": {
      "pusat_bantuan_hukum": 8,
      "pengadilan": 1,
      "kejaksaan": 40,
      "pos_polisi": 23,
      "armada_mobil_polisi": 7514,
      "akademi_polisi": 31,
      "indeks_korupsi": 76,
      "indeks_keamanan": 70
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
      "pendapatan": 50
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 49
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 23
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 54
    },
    "lingkungan": {
      "tarif": 4,
      "kepuasan": 88,
      "pendapatan": 6
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 10 },
    "lainnya": {
      "tarif": 9,
      "kepuasan": 93,
      "pendapatan": 9
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
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
    "harga_beras": 16000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 15400,
    "harga_gula": 7200,
    "harga_telur": 15550,
    "harga_bbm": 10700,
    "harga_listrik": 3200,
    "harga_air": 5200,
    "harga_obat": 221060,
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
      "kekuatan_lunak": 25,
      "kekuatan_keras": 19,
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
    "kesehatan": 28,
    "pendidikan": 24,
    "keamanan": 9,
    "keuangan": 34,
    "lingkungan": 60
  }
};
