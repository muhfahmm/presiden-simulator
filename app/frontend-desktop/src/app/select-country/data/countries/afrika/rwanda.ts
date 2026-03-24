import { CountryData } from "../../types";

export const rwanda: CountryData = {
  "name_en": "Rwanda",
  "capital": "Kigali",
  "name_id": "Rwanda",
  "lon": 30,
  "lat": -2,
  "flag": "🇷🇼",
  "pop": "10M",
  "budget": 126,
  "income": "361",
  "religion": "Katolik",
  "ideology": "Konservatisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 21,
    "hydro_plant": 23,
    "nuclear_plant": 40,
    "power_grid": 50,
    "solar_plant": 33,
    "thermal_plant": 23,
    "wind_plant": 14,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 7,
    "bicycle_path": 11,
    "bus_terminal": 3,
    "helipad": 22,
    "highway": 11,
    "internet_coverage": 52,
    "railway": 17,
    "road_quality": 56,
    "sea_port": 14,
    "subway": 3,
    "tech_stack": 84,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 9,
    "coal": 36,
    "copper": 25,
    "gas": 15,
    "gold": 1,
    "iron_ore": 7,
    "lithium": 31,
    "nickel": 1,
    "oil": 35,
    "rare_earth": 36,
    "salt": 5,
    "strength": 29.660809349923973,
    "uranium": 3,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 33,
    "car": 6,
    "concrete_cement": 12,
    "fertilizer": 32,
    "instant_noodle": 15,
    "meat_processing": 15,
    "mineral_water": 15,
    "motorcycle": 34,
    "pharmacy": 32,
    "semiconductor": 38,
    "smelter": 17,
    "strength": 3.076011687404966,
    "sugar": 7,
    "wood": 11,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 22,
    "chicken": 35,
    "dairy_cow": 38,
    "fish": 2,
    "poultry": 24,
    "sheep_goat": 13,
    "shellfish": 7,
    "shrimp": 22,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 20,
    "coffee": 25,
    "corn": 9,
    "palm_oil": 3,
    "rice": 21,
    "soy": 37,
    "strength": 20.660809349923973,
    "sugarcane": 29,
    "tea": 33,
    "tubers": 17,
    "vegetables": 39,
    "wheat": 6,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 3,
    "barracks": 25,
    "armory": 27,
    "tank_hangar": 28,
    "military_academy": 31,
    "budget": 509,
    "personnel": 15116,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 193,
        "apc": 168,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 33,
        "kapal_destroyer": 53,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 52,
        "helikopter_serang": 80,
        "pesawat_pengintai": 2,
      },
      "total_unit": 11,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 34,
    "military_air_base": 40,
    "military_naval_base": 29,
    "arms_factory": 15,
    "nuclear_status": false,
    "space_program": 24,
    "cyber_defense": 12,
    "intelligence": 40,
    "strategic_operations": {
      "attack_mission": 34,
      "spy_mission": 29,
      "sabotage_mission": 24,
      "territory_management": 15,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 5,
      "radar_network": 5,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 9,
      "elementary_school": 28,
      "middle_school": 28,
      "high_school": 30,
      "university": 8,
      "education_institute": 2,
      "laboratory": 35,
      "observatory": 24,
      "research_center": 12,
      "development_center": 9,
      "literacy": 86,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 37,
      "small_hospital": 7,
      "diagnostic_center": 22,
      "hospital_beds": 5672,
      "life_expectancy": 21,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 29,
      "racing_circuit": 39,
      "stadium": 22,
      "international_stadium": 22,
      "olympic_score": 37,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 33,
      "court": 25,
      "prosecution_office": 22,
      "police_station": 24,
      "police_car_fleet": 8723,
      "police_academy": 40,
      "corruption_index": 62,
      "security_index": 88,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 38,
          "sepeda_motor": 34,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 22,
          "helikopter_polisi": 12,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 21,
          "kamera_surveillance": 11,
          "pusat_forensik": 1,
        },
        "response_time": 27,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 17,
    "tanks": 24,
    "aircraft": 23,
    "naval": 11,
    "air_base": 34,
    "naval_base": 32,
    "military_base": 8,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 28,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 31,
      "satisfaction": 67,
      "revenue": 8
    },
    "corporate": {
      "rate": 2,
      "satisfaction": 52,
      "revenue": 0
    },
    "income": {
      "rate": 10,
      "satisfaction": 61,
      "revenue": 2
    },
    "customs": {
      "rate": 1,
      "satisfaction": 86,
      "revenue": 0
    },
    "environment": {
      "rate": 11,
      "satisfaction": 88,
      "revenue": 4
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 2 },
    "other": {
      "rate": 33,
      "satisfaction": 93,
      "revenue": 7
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 68,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 31,
    "commercial": 28,
    "industrial": 53,
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
      "soft_power": 12,
      "hard_power": 15,
      "diplomatic_prestige": 57,
    },
    "international_orgs": [
      {
        "name": "PBB (UN)",
        "role": "Member",
      },
      {
        "name": "WHO",
        "role": "Member",
      },
      {
        "name": "WTO",
        "role": "Member",
      }
    ],
    },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 5,
    "education": 19,
    "security": 24,
    "finance": 34,
    "environment": 60,
  }
};
