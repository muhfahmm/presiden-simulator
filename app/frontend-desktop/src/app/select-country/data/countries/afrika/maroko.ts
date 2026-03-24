import { CountryData } from "../../types";

export const maroko: CountryData = {
  "name_en": "Morocco",
  "capital": "Rabat",
  "name_id": "Maroko",
  "lon": -5,
  "lat": 32,
  "flag": "🇲🇦",
  "pop": "38M",
  "budget": 1313,
  "income": "3750",
  "religion": "Islam",
  "ideology": "Monarki",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 27,
    "hydro_plant": 28,
    "nuclear_plant": 9,
    "power_grid": 72,
    "solar_plant": 28,
    "thermal_plant": 6,
    "wind_plant": 9,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 37,
    "bicycle_path": 32,
    "bus_terminal": 19,
    "helipad": 26,
    "highway": 6,
    "internet_coverage": 89,
    "railway": 16,
    "road_quality": 63,
    "sea_port": 36,
    "subway": 39,
    "tech_stack": 68,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 10,
    "coal": 35,
    "copper": 18,
    "gas": 23,
    "gold": 20,
    "iron_ore": 3,
    "lithium": 36,
    "nickel": 18,
    "oil": 29,
    "rare_earth": 38,
    "salt": 2,
    "strength": 29.660809349923973,
    "uranium": 6,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 34,
    "car": 23,
    "concrete_cement": 37,
    "fertilizer": 31,
    "instant_noodle": 31,
    "meat_processing": 1,
    "mineral_water": 37,
    "motorcycle": 13,
    "pharmacy": 24,
    "semiconductor": 33,
    "smelter": 11,
    "strength": 3.076011687404966,
    "sugar": 18,
    "wood": 35,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 18,
    "chicken": 16,
    "dairy_cow": 16,
    "fish": 1,
    "poultry": 39,
    "sheep_goat": 1,
    "shellfish": 3,
    "shrimp": 12,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 10,
    "coffee": 16,
    "corn": 1,
    "palm_oil": 25,
    "rice": 32,
    "soy": 22,
    "strength": 20.660809349923973,
    "sugarcane": 15,
    "tea": 2,
    "tubers": 20,
    "vegetables": 65,
    "wheat": 17,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 11,
    "barracks": 19,
    "armory": 17,
    "tank_hangar": 22,
    "military_academy": 23,
    "budget": 3,
    "personnel": 26033,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 77,
        "apc": 129,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 13,
        "kapal_destroyer": 35,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 121,
        "helikopter_serang": 72,
        "pesawat_pengintai": 2,
      },
      "total_unit": 4,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 13,
    "military_air_base": 17,
    "military_naval_base": 31,
    "arms_factory": 24,
    "nuclear_status": false,
    "space_program": 13,
    "cyber_defense": 15,
    "intelligence": 38,
    "strategic_operations": {
      "attack_mission": 29,
      "spy_mission": 23,
      "sabotage_mission": 3,
      "territory_management": 4,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 5,
      "radar_network": 0,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 13,
      "elementary_school": 17,
      "middle_school": 39,
      "high_school": 22,
      "university": 18,
      "education_institute": 23,
      "laboratory": 40,
      "observatory": 21,
      "research_center": 35,
      "development_center": 33,
      "literacy": 66,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 15,
      "small_hospital": 40,
      "diagnostic_center": 36,
      "hospital_beds": 2249,
      "life_expectancy": 40,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 21,
      "racing_circuit": 22,
      "stadium": 3,
      "international_stadium": 35,
      "olympic_score": 25,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 25,
      "court": 9,
      "prosecution_office": 27,
      "police_station": 2,
      "police_car_fleet": 2738,
      "police_academy": 40,
      "corruption_index": 70,
      "security_index": 60,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 29,
          "sepeda_motor": 23,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 28,
          "helikopter_polisi": 3,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 10,
          "kamera_surveillance": 40,
          "pusat_forensik": 1,
        },
        "response_time": 39,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 39,
    "tanks": 38,
    "aircraft": 9,
    "naval": 30,
    "air_base": 9,
    "naval_base": 12,
    "military_base": 3,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 9,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 24,
      "satisfaction": 67,
      "revenue": 67
    },
    "corporate": {
      "rate": 37,
      "satisfaction": 52,
      "revenue": 102
    },
    "income": {
      "rate": 37,
      "satisfaction": 61,
      "revenue": 127
    },
    "customs": {
      "rate": 35,
      "satisfaction": 86,
      "revenue": 73
    },
    "environment": {
      "rate": 19,
      "satisfaction": 88,
      "revenue": 51
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 7 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 20 },
    "other": {
      "rate": 5,
      "satisfaction": 93,
      "revenue": 10
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 67,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 7,
    "commercial": 30,
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
      "soft_power": 5,
      "hard_power": 28,
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
    "health": 21,
    "education": 29,
    "security": 9,
    "finance": 14,
    "environment": 60,
  }
};
