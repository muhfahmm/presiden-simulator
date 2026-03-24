import { CountryData } from "../../types";

export const ethiopia: CountryData = {
  "name_en": "Ethiopia",
  "capital": "Addis Ababa",
  "name_id": "Ethiopia",
  "lon": 38,
  "lat": 8,
  "flag": "🇪🇹",
  "pop": "135M",
  "budget": 1507,
  "income": "4306",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 40,
    "hydro_plant": 27,
    "nuclear_plant": 19,
    "power_grid": 78,
    "solar_plant": 1,
    "thermal_plant": 3,
    "wind_plant": 38,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 16,
    "bicycle_path": 8,
    "bus_terminal": 29,
    "helipad": 3,
    "highway": 29,
    "internet_coverage": 70,
    "railway": 24,
    "road_quality": 67,
    "sea_port": 20,
    "subway": 28,
    "tech_stack": 82,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 1,
    "coal": 3,
    "copper": 25,
    "gas": 33,
    "gold": 36,
    "iron_ore": 31,
    "lithium": 39,
    "nickel": 40,
    "oil": 19,
    "rare_earth": 40,
    "salt": 20,
    "strength": 29.660809349923973,
    "uranium": 7,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 25,
    "car": 33,
    "concrete_cement": 20,
    "fertilizer": 23,
    "instant_noodle": 5,
    "meat_processing": 15,
    "mineral_water": 30,
    "motorcycle": 15,
    "pharmacy": 6,
    "semiconductor": 22,
    "smelter": 22,
    "strength": 3.076011687404966,
    "sugar": 7,
    "wood": 22,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 11,
    "chicken": 19,
    "dairy_cow": 7,
    "fish": 7,
    "poultry": 13,
    "sheep_goat": 10,
    "shellfish": 10,
    "shrimp": 13,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 25,
    "coffee": 85,
    "corn": 60,
    "palm_oil": 26,
    "rice": 38,
    "soy": 27,
    "strength": 20.660809349923973,
    "sugarcane": 34,
    "tea": 34,
    "tubers": 1,
    "vegetables": 34,
    "wheat": 34,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 28,
    "barracks": 25,
    "armory": 4,
    "tank_hangar": 8,
    "military_academy": 37,
    "budget": 7161,
    "personnel": 8526,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 38,
        "apc": 14,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 25,
        "kapal_destroyer": 36,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 9,
        "helikopter_serang": 11,
        "pesawat_pengintai": 2,
      },
      "total_unit": 16,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 40,
    "military_air_base": 10,
    "military_naval_base": 33,
    "arms_factory": 18,
    "nuclear_status": false,
    "space_program": 22,
    "cyber_defense": 26,
    "intelligence": 34,
    "strategic_operations": {
      "attack_mission": 11,
      "spy_mission": 9,
      "sabotage_mission": 2,
      "territory_management": 22,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 17,
      "radar_network": 28,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 6,
      "elementary_school": 2,
      "middle_school": 32,
      "high_school": 7,
      "university": 9,
      "education_institute": 16,
      "laboratory": 38,
      "observatory": 24,
      "research_center": 28,
      "development_center": 33,
      "literacy": 54,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 39,
      "small_hospital": 15,
      "diagnostic_center": 7,
      "hospital_beds": 7450,
      "life_expectancy": 2,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 35,
      "racing_circuit": 26,
      "stadium": 14,
      "international_stadium": 40,
      "olympic_score": 38,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 14,
      "court": 24,
      "prosecution_office": 10,
      "police_station": 21,
      "police_car_fleet": 9104,
      "police_academy": 17,
      "corruption_index": 82,
      "security_index": 82,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 1,
          "sepeda_motor": 20,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 31,
          "helikopter_polisi": 37,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 35,
          "kamera_surveillance": 28,
          "pusat_forensik": 1,
        },
        "response_time": 5,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 33,
    "tanks": 6,
    "aircraft": 39,
    "naval": 18,
    "air_base": 12,
    "naval_base": 14,
    "military_base": 16,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 12,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 17,
      "satisfaction": 67,
      "revenue": 59
    },
    "corporate": {
      "rate": 25,
      "satisfaction": 52,
      "revenue": 82
    },
    "income": {
      "rate": 30,
      "satisfaction": 61,
      "revenue": 63
    },
    "customs": {
      "rate": 38,
      "satisfaction": 86,
      "revenue": 81
    },
    "environment": {
      "rate": 30,
      "satisfaction": 88,
      "revenue": 50
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 8 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 23 },
    "other": {
      "rate": 11,
      "satisfaction": 93,
      "revenue": 18
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 93,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 38,
    "commercial": 33,
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
      "soft_power": 1,
      "hard_power": 14,
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
    "health": 19,
    "education": 4,
    "security": 5,
    "finance": 33,
    "environment": 60,
  }
};
