import { CountryData } from "../../types";

export const botswana: CountryData = {
  "name_en": "Botswana",
  "capital": "Gaborone",
  "name_id": "Botswana",
  "lon": 24,
  "lat": -22,
  "flag": "🇧🇼",
  "pop": "10M",
  "budget": 194,
  "income": "556",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 35,
    "hydro_plant": 16,
    "nuclear_plant": 29,
    "power_grid": 70,
    "solar_plant": 36,
    "thermal_plant": 3,
    "wind_plant": 16,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 31,
    "bicycle_path": 37,
    "bus_terminal": 23,
    "helipad": 10,
    "highway": 1,
    "internet_coverage": 86,
    "railway": 4,
    "road_quality": 90,
    "sea_port": 15,
    "subway": 7,
    "tech_stack": 89,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 30,
    "coal": 40,
    "copper": 28,
    "gas": 19,
    "gold": 14,
    "iron_ore": 1,
    "lithium": 17,
    "nickel": 30,
    "oil": 1,
    "rare_earth": 21,
    "salt": 40,
    "strength": 29.660809349923973,
    "uranium": 24,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 8,
    "car": 19,
    "concrete_cement": 22,
    "fertilizer": 15,
    "instant_noodle": 38,
    "meat_processing": 32,
    "mineral_water": 15,
    "motorcycle": 36,
    "pharmacy": 35,
    "semiconductor": 13,
    "smelter": 7,
    "strength": 3.076011687404966,
    "sugar": 17,
    "wood": 2,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 11,
    "chicken": 12,
    "dairy_cow": 13,
    "fish": 34,
    "poultry": 28,
    "sheep_goat": 30,
    "shellfish": 16,
    "shrimp": 28,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 17,
    "coffee": 17,
    "corn": 29,
    "palm_oil": 28,
    "rice": 15,
    "soy": 39,
    "strength": 20.660809349923973,
    "sugarcane": 27,
    "tea": 4,
    "tubers": 24,
    "vegetables": 33,
    "wheat": 16,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 24,
    "barracks": 16,
    "armory": 32,
    "tank_hangar": 30,
    "military_academy": 32,
    "budget": 55,
    "personnel": 5148,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 1,
        "apc": 26,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 22,
        "kapal_destroyer": 32,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 21,
        "helikopter_serang": 40,
        "pesawat_pengintai": 2,
      },
      "total_unit": 9,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 38,
    "military_air_base": 18,
    "military_naval_base": 32,
    "arms_factory": 24,
    "nuclear_status": false,
    "space_program": 25,
    "cyber_defense": 39,
    "intelligence": 22,
    "strategic_operations": {
      "attack_mission": 32,
      "spy_mission": 33,
      "sabotage_mission": 8,
      "territory_management": 38,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 9,
      "radar_network": 10,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 39,
      "elementary_school": 14,
      "middle_school": 7,
      "high_school": 24,
      "university": 16,
      "education_institute": 24,
      "laboratory": 2,
      "observatory": 14,
      "research_center": 32,
      "development_center": 35,
      "literacy": 70,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 11,
      "small_hospital": 24,
      "diagnostic_center": 7,
      "hospital_beds": 4319,
      "life_expectancy": 2,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 2,
      "racing_circuit": 2,
      "stadium": 10,
      "international_stadium": 1,
      "olympic_score": 19,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 27,
      "court": 40,
      "prosecution_office": 30,
      "police_station": 14,
      "police_car_fleet": 6809,
      "police_academy": 22,
      "corruption_index": 66,
      "security_index": 72,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 11,
          "sepeda_motor": 4,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 29,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 7,
          "kamera_surveillance": 8,
          "pusat_forensik": 1,
        },
        "response_time": 19,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 28,
    "tanks": 26,
    "aircraft": 40,
    "naval": 7,
    "air_base": 20,
    "naval_base": 6,
    "military_base": 16,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 23,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 14,
      "satisfaction": 67,
      "revenue": 4
    },
    "corporate": {
      "rate": 7,
      "satisfaction": 52,
      "revenue": 3
    },
    "income": {
      "rate": 11,
      "satisfaction": 61,
      "revenue": 5
    },
    "customs": {
      "rate": 23,
      "satisfaction": 86,
      "revenue": 9
    },
    "environment": {
      "rate": 7,
      "satisfaction": 88,
      "revenue": 3
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 3 },
    "other": {
      "rate": 13,
      "satisfaction": 93,
      "revenue": 4
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
    "residential": 40,
    "commercial": 21,
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
      "soft_power": 13,
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
    "health": 20,
    "education": 16,
    "security": 9,
    "finance": 18,
    "environment": 60,
  }
};
