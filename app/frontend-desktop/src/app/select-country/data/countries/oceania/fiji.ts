import { CountryData } from "../../types";

export const fiji: CountryData = {
  "name_en": "Fiji",
  "capital": "Suva",
  "name_id": "Fiji",
  "lon": 175,
  "lat": -18,
  "flag": "🇫🇯",
  "pop": "10M",
  "budget": 49,
  "income": "139",
  "religion": "Protestan",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 32,
    "hydro_plant": 11,
    "solar_plant": 16,
    "thermal_plant": 25,
    "gas_plant": 21,
    "wind_plant": 38,
    "power_grid": 60,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 37,
    "subway": 2,
    "railway": 24,
    "highway": 12,
    "road_quality": 53,
    "sea_port": 25,
    "airport": 14,
    "bus_terminal": 39,
    "helipad": 19,
    "internet_coverage": 84,
    "tech_stack": 83,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 8,
    "uranium": 29,
    "coal": 35,
    "oil": 15,
    "gas": 35,
    "salt": 17,
    "nickel": 24,
    "lithium": 10,
    "aluminum": 7,
    "copper": 24,
    "rare_earth": 22,
    "iron_ore": 18,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 25,
    "car": 25,
    "motorcycle": 39,
    "smelter": 11,
    "concrete_cement": 18,
    "wood": 25,
    "mineral_water": 26,
    "sugar": 37,
    "bread": 9,
    "pharmacy": 29,
    "fertilizer": 23,
    "meat_processing": 9,
    "instant_noodle": 22,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 18,
    "poultry": 8,
    "dairy_cow": 26,
    "beef_cow": 16,
    "sheep_goat": 12,
    "shrimp": 4,
    "fish": 9,
    "shellfish": 20,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 6,
    "wheat": 19,
    "corn": 40,
    "tubers": 37,
    "soy": 15,
    "palm_oil": 22,
    "tea": 37,
    "coffee": 28,
    "cocoa": 23,
    "sugarcane": 26,
    "vegetables": 29,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 18,
    "barracks": 37,
    "armory": 32,
    "tank_hangar": 20,
    "military_academy": 34,
    "budget": 37,
    "personnel": 15193,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 10,
        "apc": 3,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 32,
        "kapal_destroyer": 14,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 11,
        "helikopter_serang": 23,
        "pesawat_pengintai": 2
      },
      "total_unit": 13,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 32,
    "military_air_base": 25,
    "military_naval_base": 28,
    "arms_factory": 40,
    "nuclear_status": false,
    "space_program": 8,
    "cyber_defense": 21,
    "intelligence": 18,
    "strategic_operations": {
      "attack_mission": 25,
      "spy_mission": 34,
      "sabotage_mission": 11,
      "territory_management": 9,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 26,
      "radar_network": 11,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 13,
      "elementary_school": 36,
      "middle_school": 17,
      "high_school": 29,
      "university": 17,
      "education_institute": 30,
      "laboratory": 15,
      "observatory": 24,
      "research_center": 36,
      "development_center": 12,
      "literacy": 83,
      "research_index": 0
    },
    "health": {
      "large_hospital": 36,
      "small_hospital": 24,
      "diagnostic_center": 11,
      "hospital_beds": 6862,
      "life_expectancy": 39,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 17,
      "racing_circuit": 32,
      "stadium": 6,
      "international_stadium": 20,
      "olympic_score": 20,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 37,
      "court": 28,
      "prosecution_office": 25,
      "police_station": 7,
      "police_car_fleet": 6507,
      "police_academy": 23,
      "corruption_index": 68,
      "security_index": 67,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 16,
          "sepeda_motor": 37,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 33,
          "helikopter_polisi": 20,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 21,
          "kamera_surveillance": 31,
          "pusat_forensik": 1
        },
        "response_time": 13,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 13,
    "tanks": 38,
    "aircraft": 11,
    "naval": 27,
    "air_base": 32,
    "naval_base": 33,
    "military_base": 13,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 33,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 31,
      "satisfaction": 67,
      "revenue": 4
    },
    "corporate": {
      "rate": 4,
      "satisfaction": 52,
      "revenue": 0
    },
    "income": {
      "rate": 20,
      "satisfaction": 61,
      "revenue": 1
    },
    "customs": {
      "rate": 1,
      "satisfaction": 86,
      "revenue": 0
    },
    "environment": {
      "rate": 4,
      "satisfaction": 88,
      "revenue": 0
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 1 },
    "other": {
      "rate": 1,
      "satisfaction": 93,
      "revenue": 0
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 85,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 32,
    "commercial": 23,
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
      "soft_power": 37,
      "hard_power": 16,
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
    "health": 8,
    "education": 4,
    "security": 17,
    "finance": 18,
    "environment": 60
  }
};
