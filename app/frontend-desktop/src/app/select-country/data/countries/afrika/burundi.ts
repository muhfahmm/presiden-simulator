import { CountryData } from "../../types/_index";

export const burundi: CountryData = {
  "name_en": "Burundi",
  "capital": "Gitega",
  "name_id": "Burundi",
  "lon": 30,
  "lat": -3.5,
  "flag": "🇧🇮",
  "jumlah_penduduk": 11175378,
  "anggaran": 34,
  "pendapatan_nasional": "97",
  "religion": "Katolik",
  "ideology": "Konservatisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 14,
    "pembangkit_air": 33,
    "pembangkit_nuklir": 29,
    "jaringan_listrik": 72,
    "pembangkit_surya": 31,
    "pembangkit_termal": 31,
    "pembangkit_angin": 17
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 11,
    "jalur_sepeda": 27,
    "terminal_bus": 32,
    "helipad": 2,
    "jalan_tol": 24,
    "cakupan_internet": 52,
    "jalur_kereta": 5,
    "kualitas_jalan": 66,
    "pelabuhan_laut": 14,
    "kereta_bawah_tanah": 24,
    "indeks_teknologi": 78,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 16,
    "batu_bara": 21,
    "tembaga": 27,
    "gas_alam": 40,
    "emas": 7,
    "bijih_besi": 15,
    "litium": 16,
    "nikel": 38,
    "minyak_bumi": 21,
    "logam_tanah_jarang": 13,
    "garam": 16,
    "kekuatan": 29.660809349923973,
    "uranium": 18
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 28,
    "mobil": 13,
    "semen_beton": 1,
    "pupuk": 18,
    "mie_instan": 1,
    "pengolahan_daging": 35,
    "air_mineral": 16,
    "sepeda_motor": 2,
    "farmasi": 38,
    "semikonduktor": 27,
    "smelter": 14,
    "kekuatan": 3.076011687404966,
    "gula": 15,
    "kayu": 37
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 9.5,
    "sapi_perah": 8,
    "sapi_potong": 29,
    "domba_kambing": 26,
    "udang_kerang": 4.0,
    "ikan": 13,
    "padi": 11,
    "gandum_jagung": 27.5,
    "sayur_umbi": 22.0,
    "kedelai": 34,
    "kelapa_sawit": 4,
    "kopi_teh_kakao": 16.7,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 39,
    "gudang_senjata": 20,
    "hangar_tank": 8,
    "akademi_militer": 28,
    "pusat_komando": 7,
    "pangkalan_udara": 28,
    "pangkalan_laut": 37,
    "program_luar_angkasa": 10,
    "pertahanan_siber": 40,
    "anggaran_pertahanan": 9,
    "personel": 16307,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 30,
    "infanteri": 28,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 15,
        "apc": 30,
        "artileri_berat": 26
  },
      "laut": {
        "kapal_induk": 19,
        "kapal_destroyer": 34,
        "kapal_selam_nuklir": 0
  },
      "udara": {
        "jet_tempur_siluman": 14,
        "helikopter_serang": 28,
        "pesawat_pengintai": 2
  },
      "total_unit": 10,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 1,
      "jaringan_radar": 14,
      "operasi_siber": 2
  },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 1,
          "sepeda_motor": 32,
          "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 3,
          "helikopter_polisi": 39,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 34,
          "kamera_pengawas": 28,
          "pusat_forensik": 1
  },
        "waktu_respon": 13,
        "kepercayaan_publik": 50
  },
    "intelijen": 18,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 7,
      "misi_mata_mata": 17,
      "misi_sabotase": 27,
      "manajemen_wilayah": 18,
      "program_nuklir": 0
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 9,
      "sd": 21,
      "smp": 1,
      "sma": 34,
      "universitas": 35,
      "lembaga_pendidikan": 17,
      "laboratorium": 14,
      "observatorium": 3,
      "pusat_penelitian": 8,
      "pusat_pengembangan": 28,
      "literasi": 88,
      "indeks_penelitian": 0
  },
    "kesehatan": {
      "rumah_sakit_besar": 23,
      "rumah_sakit_kecil": 8,
      "pusat_diagnostik": 9,
      "tempat_tidur_rs": 1828,
      "harapan_hidup": 30,
      "indeks_kesehatan": 85
  },
    "olahraga": {
      "kolam_renang": 9,
      "sirkuit_balap": 3,
      "stadion": 4,
      "stadion_internasional": 12,
      "skor_olimpiade": 6,
      "popularitas": 44
  },
    "hukum": {
      "pusat_bantuan_hukum": 37,
      "pengadilan": 18,
      "kejaksaan": 31,
      "pos_polisi": 9,
      "armada_mobil_polisi": 9272,
      "akademi_polisi": 12,
      "indeks_korupsi": 75,
      "indeks_keamanan": 59
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 5,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 1,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 27,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 2
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 3
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 50,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 25,
    "subsidi_pendidikan": 25,
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
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 21400,
    "harga_listrik": 1280,
    "harga_air": 10400,
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
      "kekuatan_lunak": 9,
      "kekuatan_keras": 23,
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
    "pendidikan": 9,
    "keamanan": 23,
    "keuangan": 37,
    "lingkungan": 60
  }
};
