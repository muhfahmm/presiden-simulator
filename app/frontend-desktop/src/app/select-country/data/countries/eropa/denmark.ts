import { CountryData } from "../../types";

export const denmark: CountryData = {
  "name_en": "Denmark",
  "capital": "Copenhagen",
  "name_id": "Denmark",
  "lon": 10,
  "lat": 56,
  "flag": "🇩🇰",
  "pop": "10M",
  "budget": 3986,
  "income": "11390",
  "religion": "Protestan",
  "ideology": "Sosialisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 31,
    "hydro_plant": 28,
    "solar_plant": 20,
    "thermal_plant": 27,
    "gas_plant": 4,
    "wind_plant": 33,
    "power_grid": 80,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 2,
    "subway": 4,
    "railway": 14,
    "highway": 1,
    "road_quality": 74,
    "sea_port": 25,
    "airport": 15,
    "bus_terminal": 32,
    "helipad": 16,
    "internet_coverage": 64,
    "tech_stack": 63,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 9,
    "uranium": 30,
    "coal": 14,
    "oil": 6,
    "gas": 32,
    "salt": 2,
    "nickel": 31,
    "lithium": 31,
    "aluminum": 11,
    "copper": 29,
    "rare_earth": 16,
    "iron_ore": 27,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 18,
    "car": 30,
    "motorcycle": 19,
    "smelter": 24,
    "concrete_cement": 34,
    "wood": 33,
    "mineral_water": 25,
    "sugar": 14,
    "bread": 30,
    "pharmacy": 25,
    "fertilizer": 31,
    "meat_processing": 10,
    "instant_noodle": 26,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 39,
    "poultry": 16,
    "dairy_cow": 15,
    "beef_cow": 16,
    "sheep_goat": 16,
    "shrimp": 6,
    "fish": 27,
    "shellfish": 1,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 31,
    "wheat": 17,
    "corn": 14,
    "tubers": 5,
    "soy": 30,
    "palm_oil": 6,
    "tea": 32,
    "coffee": 29,
    "cocoa": 8,
    "sugarcane": 5,
    "vegetables": 26,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 11,
    "barracks": 37,
    "armory": 3,
    "tank_hangar": 25,
    "military_academy": 40,
    "budget": 23,
    "personnel": 15749,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 1,
        "apc": 13,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 37,
        "kapal_destroyer": 6,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 36,
        "helikopter_serang": 5,
        "pesawat_pengintai": 2
      },
      "total_unit": 37,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 9,
    "military_air_base": 9,
    "military_naval_base": 11,
    "arms_factory": 31,
    "nuclear_status": false,
    "space_program": 14,
    "cyber_defense": 1,
    "intelligence": 24,
    "strategic_operations": {
      "attack_mission": 1,
      "spy_mission": 11,
      "sabotage_mission": 38,
      "territory_management": 31,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 22,
      "radar_network": 7,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 9,
      "elementary_school": 3,
      "middle_school": 37,
      "high_school": 28,
      "university": 20,
      "education_institute": 39,
      "laboratory": 40,
      "observatory": 2,
      "research_center": 29,
      "development_center": 18,
      "literacy": 78,
      "research_index": 0
    },
    "health": {
      "large_hospital": 28,
      "small_hospital": 7,
      "diagnostic_center": 5,
      "hospital_beds": 7134,
      "life_expectancy": 24,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 17,
      "racing_circuit": 25,
      "stadium": 38,
      "international_stadium": 26,
      "olympic_score": 13,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 32,
      "court": 26,
      "prosecution_office": 17,
      "police_station": 24,
      "police_car_fleet": 2831,
      "police_academy": 17,
      "corruption_index": 66,
      "security_index": 75,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 14,
          "sepeda_motor": 27,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 31,
          "helikopter_polisi": 30,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 20,
          "kamera_surveillance": 34,
          "pusat_forensik": 1
        },
        "response_time": 22,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 14,
    "tanks": 6,
    "aircraft": 8,
    "naval": 28,
    "air_base": 6,
    "naval_base": 8,
    "military_base": 15,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 27,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 10,
      "satisfaction": 67,
      "revenue": 72
    },
    "corporate": {
      "rate": 9,
      "satisfaction": 52,
      "revenue": 56
    },
    "income": {
      "rate": 21,
      "satisfaction": 61,
      "revenue": 107
    },
    "customs": {
      "rate": 38,
      "satisfaction": 86,
      "revenue": 272
    },
    "environment": {
      "rate": 29,
      "satisfaction": 88,
      "revenue": 273
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 20 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 60 },
    "other": {
      "rate": 26,
      "satisfaction": 93,
      "revenue": 180
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 54,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 32,
    "commercial": 19,
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
      "soft_power": 32,
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
    "health": 33,
    "education": 32,
    "security": 28,
    "finance": 36,
    "environment": 60
  }
};
