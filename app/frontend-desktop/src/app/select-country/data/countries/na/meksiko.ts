import { CountryData } from "../../types";

export const meksiko: CountryData = {
  "name_en": "Mexico",
  "capital": "Mexico City",
  "name_id": "Meksiko",
  "lon": -102,
  "lat": 23,
  "flag": "🇲🇽",
  "pop": "10M",
  "budget": 17404,
  "income": "49726",
  "religion": "Katolik",
  "ideology": "Sosialisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 3,
    "hydro_plant": 23,
    "solar_plant": 8,
    "thermal_plant": 38,
    "gas_plant": 16,
    "wind_plant": 30,
    "power_grid": 76,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 29,
    "subway": 21,
    "railway": 30,
    "highway": 5,
    "road_quality": 56,
    "sea_port": 32,
    "airport": 25,
    "bus_terminal": 34,
    "helipad": 7,
    "internet_coverage": 88,
    "tech_stack": 58,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 38,
    "uranium": 23,
    "coal": 33,
    "oil": 9,
    "gas": 8,
    "salt": 11,
    "nickel": 22,
    "lithium": 6,
    "aluminum": 10,
    "copper": 20,
    "rare_earth": 33,
    "iron_ore": 33,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 23,
    "car": 30,
    "motorcycle": 15,
    "smelter": 19,
    "concrete_cement": 38,
    "wood": 6,
    "mineral_water": 17,
    "sugar": 13,
    "bread": 8,
    "pharmacy": 20,
    "fertilizer": 16,
    "meat_processing": 17,
    "instant_noodle": 22,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 9,
    "poultry": 6,
    "dairy_cow": 9,
    "beef_cow": 18,
    "sheep_goat": 23,
    "shrimp": 2,
    "fish": 19,
    "shellfish": 25,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 23,
    "wheat": 8,
    "corn": 23,
    "tubers": 1,
    "soy": 34,
    "palm_oil": 24,
    "tea": 24,
    "coffee": 17,
    "cocoa": 5,
    "sugarcane": 10,
    "vegetables": 5,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 5,
    "barracks": 7,
    "armory": 20,
    "tank_hangar": 4,
    "military_academy": 34,
    "budget": 4972,
    "personnel": 17715,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 122,
        "apc": 37,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 9,
        "kapal_destroyer": 30,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 58,
        "helikopter_serang": 11,
        "pesawat_pengintai": 2
      },
      "total_unit": 5,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 22,
    "military_air_base": 12,
    "military_naval_base": 10,
    "arms_factory": 7,
    "nuclear_status": false,
    "space_program": 30,
    "cyber_defense": 17,
    "intelligence": 21,
    "strategic_operations": {
      "attack_mission": 38,
      "spy_mission": 34,
      "sabotage_mission": 8,
      "territory_management": 12,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 0,
      "radar_network": 4,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 32,
      "elementary_school": 12,
      "middle_school": 8,
      "high_school": 23,
      "university": 18,
      "education_institute": 37,
      "laboratory": 16,
      "observatory": 5,
      "research_center": 8,
      "development_center": 18,
      "literacy": 58,
      "research_index": 0
    },
    "health": {
      "large_hospital": 12,
      "small_hospital": 34,
      "diagnostic_center": 27,
      "hospital_beds": 6921,
      "life_expectancy": 33,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 16,
      "racing_circuit": 28,
      "stadium": 14,
      "international_stadium": 3,
      "olympic_score": 26,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 30,
      "court": 37,
      "prosecution_office": 32,
      "police_station": 7,
      "police_car_fleet": 5622,
      "police_academy": 35,
      "corruption_index": 86,
      "security_index": 92,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 3,
          "sepeda_motor": 8,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 28,
          "helikopter_polisi": 3,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 37,
          "kamera_surveillance": 36,
          "pusat_forensik": 1
        },
        "response_time": 27,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 7,
    "tanks": 39,
    "aircraft": 5,
    "naval": 30,
    "air_base": 11,
    "naval_base": 19,
    "military_base": 11,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 20,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 17,
      "satisfaction": 67,
      "revenue": 630
    },
    "corporate": {
      "rate": 37,
      "satisfaction": 52,
      "revenue": 1548
    },
    "income": {
      "rate": 30,
      "satisfaction": 61,
      "revenue": 1054
    },
    "customs": {
      "rate": 7,
      "satisfaction": 86,
      "revenue": 309
    },
    "environment": {
      "rate": 9,
      "satisfaction": 88,
      "revenue": 264
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 88 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 262 },
    "other": {
      "rate": 10,
      "satisfaction": 93,
      "revenue": 497
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 94,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 26,
    "commercial": 11,
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
      "soft_power": 17,
      "hard_power": 21,
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
    "health": 4,
    "education": 23,
    "security": 32,
    "finance": 9,
    "environment": 60
  }
};
