import { CountryData } from "../../types";

export const kuba: CountryData = {
  "name_en": "Cuba",
  "capital": "Havana",
  "name_id": "Kuba",
  "lon": -80,
  "lat": 21.5,
  "flag": "🇨🇺",
  "pop": "10M",
  "budget": 1021,
  "income": "2917",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 15,
    "hydro_plant": 33,
    "solar_plant": 26,
    "thermal_plant": 22,
    "gas_plant": 23,
    "wind_plant": 30,
    "power_grid": 53,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 40,
    "subway": 16,
    "railway": 19,
    "highway": 26,
    "road_quality": 60,
    "sea_port": 25,
    "airport": 23,
    "bus_terminal": 8,
    "helipad": 29,
    "internet_coverage": 66,
    "tech_stack": 79,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 9,
    "uranium": 34,
    "coal": 25,
    "oil": 31,
    "gas": 10,
    "salt": 7,
    "nickel": 40,
    "lithium": 28,
    "aluminum": 9,
    "copper": 6,
    "rare_earth": 17,
    "iron_ore": 3,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 23,
    "car": 1,
    "motorcycle": 31,
    "smelter": 30,
    "concrete_cement": 7,
    "wood": 8,
    "mineral_water": 3,
    "sugar": 29,
    "bread": 16,
    "pharmacy": 10,
    "fertilizer": 23,
    "meat_processing": 35,
    "instant_noodle": 19,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 10,
    "poultry": 5,
    "dairy_cow": 39,
    "beef_cow": 27,
    "sheep_goat": 10,
    "shrimp": 26,
    "fish": 7,
    "shellfish": 40,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 29,
    "wheat": 11,
    "corn": 11,
    "tubers": 10,
    "soy": 6,
    "palm_oil": 25,
    "tea": 29,
    "coffee": 19,
    "cocoa": 35,
    "sugarcane": 26,
    "vegetables": 33,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 13,
    "barracks": 32,
    "armory": 37,
    "tank_hangar": 18,
    "military_academy": 24,
    "budget": 18,
    "personnel": 15719,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 31,
        "apc": 35,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 26,
        "kapal_destroyer": 22,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 13,
        "helikopter_serang": 28,
        "pesawat_pengintai": 2
      },
      "total_unit": 27,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 18,
    "military_air_base": 7,
    "military_naval_base": 4,
    "arms_factory": 30,
    "nuclear_status": false,
    "space_program": 27,
    "cyber_defense": 15,
    "intelligence": 30,
    "strategic_operations": {
      "attack_mission": 1,
      "spy_mission": 6,
      "sabotage_mission": 20,
      "territory_management": 20,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 39,
      "radar_network": 20,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 18,
      "elementary_school": 33,
      "middle_school": 9,
      "high_school": 40,
      "university": 9,
      "education_institute": 24,
      "laboratory": 23,
      "observatory": 11,
      "research_center": 27,
      "development_center": 12,
      "literacy": 59,
      "research_index": 0
    },
    "health": {
      "large_hospital": 4,
      "small_hospital": 28,
      "diagnostic_center": 18,
      "hospital_beds": 2424,
      "life_expectancy": 6,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 22,
      "racing_circuit": 8,
      "stadium": 26,
      "international_stadium": 19,
      "olympic_score": 28,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 17,
      "court": 7,
      "prosecution_office": 14,
      "police_station": 5,
      "police_car_fleet": 2434,
      "police_academy": 13,
      "corruption_index": 77,
      "security_index": 80,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 23,
          "sepeda_motor": 29,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 28,
          "helikopter_polisi": 26,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 7,
          "kamera_surveillance": 9,
          "pusat_forensik": 1
        },
        "response_time": 34,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 24,
    "tanks": 3,
    "aircraft": 13,
    "naval": 7,
    "air_base": 31,
    "naval_base": 31,
    "military_base": 28,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 39,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 2,
      "satisfaction": 67,
      "revenue": 5
    },
    "corporate": {
      "rate": 22,
      "satisfaction": 52,
      "revenue": 26
    },
    "income": {
      "rate": 26,
      "satisfaction": 61,
      "revenue": 68
    },
    "customs": {
      "rate": 37,
      "satisfaction": 86,
      "revenue": 110
    },
    "environment": {
      "rate": 26,
      "satisfaction": 88,
      "revenue": 71
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 6 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 16 },
    "other": {
      "rate": 25,
      "satisfaction": 93,
      "revenue": 33
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 55,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 35,
    "commercial": 15,
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
      "hard_power": 9,
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
    "education": 1,
    "security": 31,
    "finance": 22,
    "environment": 60
  }
};
