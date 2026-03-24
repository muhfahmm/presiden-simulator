import { CountryData } from "../../types";

export const hong_kong: CountryData = {
  "name_en": "Hong Kong",
  "capital": "City of Victoria",
  "name_id": "Hong kong",
  "lon": 114.188,
  "lat": 22.267,
  "flag": "🇭🇰",
  "pop": "10M",
  "budget": 97,
  "income": "278",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 36,
    "hydro_plant": 7,
    "solar_plant": 20,
    "thermal_plant": 19,
    "gas_plant": 17,
    "wind_plant": 19,
    "power_grid": 59,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 17,
    "subway": 34,
    "railway": 22,
    "highway": 37,
    "road_quality": 66,
    "sea_port": 39,
    "airport": 19,
    "bus_terminal": 31,
    "helipad": 7,
    "internet_coverage": 50,
    "tech_stack": 65,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 21,
    "uranium": 9,
    "coal": 36,
    "oil": 6,
    "gas": 21,
    "salt": 7,
    "nickel": 6,
    "lithium": 34,
    "aluminum": 15,
    "copper": 28,
    "rare_earth": 29,
    "iron_ore": 36,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 10,
    "car": 19,
    "motorcycle": 21,
    "smelter": 9,
    "concrete_cement": 32,
    "wood": 24,
    "mineral_water": 2,
    "sugar": 5,
    "bread": 23,
    "pharmacy": 18,
    "fertilizer": 24,
    "meat_processing": 19,
    "instant_noodle": 17,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 15,
    "poultry": 40,
    "dairy_cow": 14,
    "beef_cow": 36,
    "sheep_goat": 15,
    "shrimp": 28,
    "fish": 11,
    "shellfish": 36,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 4,
    "wheat": 8,
    "corn": 36,
    "tubers": 25,
    "soy": 30,
    "palm_oil": 11,
    "tea": 29,
    "coffee": 3,
    "cocoa": 23,
    "sugarcane": 5,
    "vegetables": 3,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 26,
    "barracks": 34,
    "armory": 6,
    "tank_hangar": 2,
    "military_academy": 15,
    "budget": 14240,
    "personnel": 14863,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 171,
        "apc": 109,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 11,
        "kapal_destroyer": 197,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 125,
        "helikopter_serang": 153,
        "pesawat_pengintai": 2
      },
      "total_unit": 35,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 31,
    "military_air_base": 2,
    "military_naval_base": 37,
    "arms_factory": 27,
    "nuclear_status": false,
    "space_program": 26,
    "cyber_defense": 1,
    "intelligence": 28,
    "strategic_operations": {
      "attack_mission": 39,
      "spy_mission": 10,
      "sabotage_mission": 32,
      "territory_management": 3,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 3,
      "radar_network": 5,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 4,
      "elementary_school": 8,
      "middle_school": 22,
      "high_school": 27,
      "university": 38,
      "education_institute": 5,
      "laboratory": 25,
      "observatory": 39,
      "research_center": 19,
      "development_center": 36,
      "literacy": 59,
      "research_index": 0
    },
    "health": {
      "large_hospital": 18,
      "small_hospital": 17,
      "diagnostic_center": 21,
      "hospital_beds": 1541,
      "life_expectancy": 15,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 7,
      "racing_circuit": 1,
      "stadium": 31,
      "international_stadium": 33,
      "olympic_score": 7,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 10,
      "court": 17,
      "prosecution_office": 15,
      "police_station": 33,
      "police_car_fleet": 7778,
      "police_academy": 40,
      "corruption_index": 86,
      "security_index": 66,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 13,
          "sepeda_motor": 13,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 1,
          "helikopter_polisi": 31,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 1,
          "kamera_surveillance": 11,
          "pusat_forensik": 1
        },
        "response_time": 1,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 6,
    "tanks": 24,
    "aircraft": 38,
    "naval": 37,
    "air_base": 4,
    "naval_base": 5,
    "military_base": 16,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 22,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 14,
      "satisfaction": 67,
      "revenue": 3
    },
    "corporate": {
      "rate": 14,
      "satisfaction": 52,
      "revenue": 2
    },
    "income": {
      "rate": 2,
      "satisfaction": 61,
      "revenue": 0
    },
    "customs": {
      "rate": 6,
      "satisfaction": 86,
      "revenue": 1
    },
    "environment": {
      "rate": 16,
      "satisfaction": 88,
      "revenue": 4
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 2 },
    "other": {
      "rate": 7,
      "satisfaction": 93,
      "revenue": 1
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 56,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 18,
    "commercial": 20,
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
      "soft_power": 1,
      "hard_power": 20,
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
    "health": 14,
    "education": 4,
    "security": 15,
    "finance": 35,
    "environment": 60
  }
};
