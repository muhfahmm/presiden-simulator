import { CountryData } from "../../types";

export const belgia: CountryData = {
  "name_en": "Belgium",
  "capital": "Brussels",
  "name_id": "Belgia",
  "lon": 4,
  "lat": 50.83333333,
  "flag": "🇧🇪",
  "pop": 11433256,
  "budget": 6077,
  "income": "17362",
  "religion": "Katolik",
  "ideology": "Sosialisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 7,
    "hydro_plant": 13,
    "solar_plant": 36,
    "thermal_plant": 23,
    "gas_plant": 2,
    "wind_plant": 29,
    "power_grid": 56,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 7,
    "subway": 18,
    "railway": 35,
    "highway": 5,
    "road_quality": 78,
    "sea_port": 36,
    "airport": 33,
    "bus_terminal": 40,
    "helipad": 11,
    "internet_coverage": 91,
    "tech_stack": 84,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 24,
    "uranium": 39,
    "coal": 23,
    "oil": 11,
    "gas": 38,
    "salt": 11,
    "nickel": 26,
    "lithium": 8,
    "aluminum": 9,
    "copper": 16,
    "rare_earth": 32,
    "iron_ore": 27,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 18,
    "car": 15,
    "motorcycle": 12,
    "smelter": 28,
    "concrete_cement": 32,
    "wood": 34,
    "mineral_water": 26,
    "sugar": 33,
    "bread": 37,
    "pharmacy": 39,
    "fertilizer": 38,
    "meat_processing": 2,
    "instant_noodle": 15,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 10,
    "poultry": 10,
    "dairy_cow": 31,
    "beef_cow": 10,
    "sheep_goat": 24,
    "shrimp": 20,
    "fish": 39,
    "shellfish": 33,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 23,
    "wheat": 33,
    "corn": 23,
    "tubers": 28,
    "soy": 14,
    "palm_oil": 27,
    "tea": 8,
    "coffee": 19,
    "cocoa": 9,
    "sugarcane": 30,
    "vegetables": 31,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 28,
    "barracks": 27,
    "armory": 2,
    "tank_hangar": 22,
    "military_academy": 20,
    "budget": 1736,
    "personnel": 17011,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 8,
        "apc": 4,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 31,
        "kapal_destroyer": 34,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 37,
        "helikopter_serang": 7,
        "pesawat_pengintai": 2
      },
      "total_unit": 8,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 23,
    "military_air_base": 6,
    "military_naval_base": 28,
    "arms_factory": 22,
    "nuclear_status": false,
    "space_program": 31,
    "cyber_defense": 6,
    "intelligence": 36,
    "strategic_operations": {
      "attack_mission": 34,
      "spy_mission": 27,
      "sabotage_mission": 1,
      "territory_management": 23,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 27,
      "radar_network": 15,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 7,
      "elementary_school": 30,
      "middle_school": 12,
      "high_school": 21,
      "university": 34,
      "education_institute": 2,
      "laboratory": 32,
      "observatory": 17,
      "research_center": 6,
      "development_center": 38,
      "literacy": 82,
      "research_index": 0
    },
    "health": {
      "large_hospital": 37,
      "small_hospital": 11,
      "diagnostic_center": 36,
      "hospital_beds": 6128,
      "life_expectancy": 15,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 3,
      "racing_circuit": 36,
      "stadium": 34,
      "international_stadium": 11,
      "olympic_score": 8,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 27,
      "court": 13,
      "prosecution_office": 24,
      "police_station": 7,
      "police_car_fleet": 1272,
      "police_academy": 18,
      "corruption_index": 77,
      "security_index": 76,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 13,
          "sepeda_motor": 8,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 7,
          "helikopter_polisi": 27,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 19,
          "kamera_surveillance": 6,
          "pusat_forensik": 1
        },
        "response_time": 7,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 30,
    "tanks": 13,
    "aircraft": 27,
    "naval": 18,
    "air_base": 37,
    "naval_base": 31,
    "military_base": 17,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 38,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 11,
      "satisfaction": 67,
      "revenue": 101
    },
    "corporate": {
      "rate": 27,
      "satisfaction": 52,
      "revenue": 194
    },
    "income": {
      "rate": 8,
      "satisfaction": 61,
      "revenue": 83
    },
    "customs": {
      "rate": 38,
      "satisfaction": 86,
      "revenue": 555
    },
    "environment": {
      "rate": 6,
      "satisfaction": 88,
      "revenue": 71
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 31 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 92 },
    "other": {
      "rate": 12,
      "satisfaction": 93,
      "revenue": 146
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  
  // =============================================================
  // 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "salaries": {
    "salaryAsn": 80,
    "salaryGuru": 90,
    "salaryMedis": 90,
    "salaryMiliter": 80
  },
  "subsidies": {
    "subsidyEnergi": 50,
    "subsidyPangan": 50,
    "subsidyKesehatan": 100,
    "subsidyPendidikan": 100,
    "subsidyUmkm": 50,
    "subsidyTransport": 75,
    "subsidyRumah": 50
  },

  "demand": {
    "satisfaction": 60,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 29,
    "commercial": 10,
    "industrial": 53
  },

  // =============================================================
  // 6. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL (16 Jenis)
  // =============================================================

  "geopolitics": {
    "allies": [
      "Amerika Serikat",
      "Uni Eropa"
    ],
    "enemies": [],
    "stance": "Neutral",
    "international_influence": {
      "soft_power": 39,
      "hard_power": 2,
      "diplomatic_prestige": 57
    },
    "international_orgs": [
      {
        "name": "PBB (UN)",
        "role": "Member"
      },
      {
        "name": "WHO",
        "role": "Member"
      },
      {
        "name": "WTO",
        "role": "Member"
      }
    ],
    },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 20,
    "education": 26,
    "security": 34,
    "finance": 20,
    "environment": 60
  }
};
