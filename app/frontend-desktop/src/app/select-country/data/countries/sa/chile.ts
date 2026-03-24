import { CountryData } from "../../types";

export const chile: CountryData = {
  "name_en": "Chile",
  "capital": "Santiago",
  "name_id": "Chile",
  "lon": -71,
  "lat": -30,
  "flag": "🇨🇱",
  "pop": "10M",
  "budget": 3257,
  "income": "9306",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 19,
    "hydro_plant": 38,
    "solar_plant": 25,
    "thermal_plant": 4,
    "gas_plant": 17,
    "wind_plant": 7,
    "power_grid": 58,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 16,
    "subway": 24,
    "railway": 40,
    "highway": 40,
    "road_quality": 95,
    "sea_port": 17,
    "airport": 34,
    "bus_terminal": 9,
    "helipad": 15,
    "internet_coverage": 51,
    "tech_stack": 62,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 7,
    "uranium": 38,
    "coal": 33,
    "oil": 36,
    "gas": 37,
    "salt": 15,
    "nickel": 14,
    "lithium": 11,
    "aluminum": 5,
    "copper": 36,
    "rare_earth": 33,
    "iron_ore": 8,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 15,
    "car": 4,
    "motorcycle": 4,
    "smelter": 26,
    "concrete_cement": 4,
    "wood": 20,
    "mineral_water": 35,
    "sugar": 24,
    "bread": 17,
    "pharmacy": 11,
    "fertilizer": 18,
    "meat_processing": 16,
    "instant_noodle": 4,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 29,
    "poultry": 35,
    "dairy_cow": 37,
    "beef_cow": 30,
    "sheep_goat": 28,
    "shrimp": 37,
    "fish": 25,
    "shellfish": 2,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 26,
    "wheat": 1,
    "corn": 19,
    "tubers": 29,
    "soy": 21,
    "palm_oil": 14,
    "tea": 38,
    "coffee": 9,
    "cocoa": 14,
    "sugarcane": 36,
    "vegetables": 6,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 20,
    "barracks": 34,
    "armory": 5,
    "tank_hangar": 31,
    "military_academy": 13,
    "budget": 2,
    "personnel": 28728,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 18,
        "apc": 18,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 29,
        "kapal_destroyer": 8,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 33,
        "helikopter_serang": 39,
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
    "command_center": 14,
    "military_air_base": 37,
    "military_naval_base": 25,
    "arms_factory": 31,
    "nuclear_status": false,
    "space_program": 32,
    "cyber_defense": 27,
    "intelligence": 31,
    "strategic_operations": {
      "attack_mission": 37,
      "spy_mission": 39,
      "sabotage_mission": 38,
      "territory_management": 9,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 24,
      "radar_network": 32,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 32,
      "elementary_school": 16,
      "middle_school": 22,
      "high_school": 5,
      "university": 16,
      "education_institute": 35,
      "laboratory": 10,
      "observatory": 38,
      "research_center": 7,
      "development_center": 20,
      "literacy": 88,
      "research_index": 0
    },
    "health": {
      "large_hospital": 14,
      "small_hospital": 32,
      "diagnostic_center": 32,
      "hospital_beds": 8456,
      "life_expectancy": 12,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 7,
      "racing_circuit": 28,
      "stadium": 28,
      "international_stadium": 40,
      "olympic_score": 37,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 10,
      "court": 20,
      "prosecution_office": 25,
      "police_station": 2,
      "police_car_fleet": 2723,
      "police_academy": 34,
      "corruption_index": 58,
      "security_index": 56,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 2,
          "sepeda_motor": 21,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 12,
          "helikopter_polisi": 15,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 29,
          "kamera_surveillance": 22,
          "pusat_forensik": 1
        },
        "response_time": 10,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 31,
    "tanks": 28,
    "aircraft": 4,
    "naval": 37,
    "air_base": 3,
    "naval_base": 13,
    "military_base": 26,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 2,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 19,
      "satisfaction": 67,
      "revenue": 181
    },
    "corporate": {
      "rate": 34,
      "satisfaction": 52,
      "revenue": 128
    },
    "income": {
      "rate": 17,
      "satisfaction": 61,
      "revenue": 144
    },
    "customs": {
      "rate": 32,
      "satisfaction": 86,
      "revenue": 133
    },
    "environment": {
      "rate": 2,
      "satisfaction": 88,
      "revenue": 10
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 17 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 49 },
    "other": {
      "rate": 11,
      "satisfaction": 93,
      "revenue": 68
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 79,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 37,
    "commercial": 1,
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
      "soft_power": 26,
      "hard_power": 4,
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
    "education": 37,
    "security": 18,
    "finance": 40,
    "environment": 60
  }
};
