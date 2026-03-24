import { CountryData } from "../../types";

export const yordania: CountryData = {
  "name_en": "Jordan",
  "capital": "Amman",
  "name_id": "Yordania",
  "lon": 36,
  "lat": 31,
  "flag": "🇯🇴",
  "pop": "10M",
  "budget": 457,
  "income": "1306",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 17,
    "hydro_plant": 39,
    "solar_plant": 28,
    "thermal_plant": 26,
    "gas_plant": 27,
    "wind_plant": 26,
    "power_grid": 58,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 21,
    "subway": 17,
    "railway": 8,
    "highway": 9,
    "road_quality": 86,
    "sea_port": 33,
    "airport": 32,
    "bus_terminal": 1,
    "helipad": 3,
    "internet_coverage": 82,
    "tech_stack": 55,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 37,
    "uranium": 31,
    "coal": 9,
    "oil": 30,
    "gas": 8,
    "salt": 35,
    "nickel": 13,
    "lithium": 27,
    "aluminum": 9,
    "copper": 22,
    "rare_earth": 32,
    "iron_ore": 32,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 17,
    "car": 13,
    "motorcycle": 19,
    "smelter": 16,
    "concrete_cement": 14,
    "wood": 35,
    "mineral_water": 16,
    "sugar": 26,
    "bread": 11,
    "pharmacy": 29,
    "fertilizer": 26,
    "meat_processing": 7,
    "instant_noodle": 33,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 4,
    "poultry": 29,
    "dairy_cow": 8,
    "beef_cow": 14,
    "sheep_goat": 26,
    "shrimp": 35,
    "fish": 37,
    "shellfish": 21,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 20,
    "wheat": 27,
    "corn": 27,
    "tubers": 39,
    "soy": 20,
    "palm_oil": 19,
    "tea": 35,
    "coffee": 23,
    "cocoa": 5,
    "sugarcane": 25,
    "vegetables": 24,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 23,
    "barracks": 31,
    "armory": 15,
    "tank_hangar": 21,
    "military_academy": 9,
    "budget": 1882,
    "personnel": 29178,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 38,
        "apc": 5,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 37,
        "kapal_destroyer": 34,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 23,
        "helikopter_serang": 10,
        "pesawat_pengintai": 2
      },
      "total_unit": 38,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 32,
    "military_air_base": 28,
    "military_naval_base": 26,
    "arms_factory": 27,
    "nuclear_status": false,
    "space_program": 3,
    "cyber_defense": 24,
    "intelligence": 17,
    "strategic_operations": {
      "attack_mission": 39,
      "spy_mission": 28,
      "sabotage_mission": 16,
      "territory_management": 24,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 33,
      "radar_network": 13,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 4,
      "elementary_school": 10,
      "middle_school": 27,
      "high_school": 36,
      "university": 33,
      "education_institute": 23,
      "laboratory": 29,
      "observatory": 28,
      "research_center": 17,
      "development_center": 34,
      "literacy": 69,
      "research_index": 0
    },
    "health": {
      "large_hospital": 37,
      "small_hospital": 4,
      "diagnostic_center": 1,
      "hospital_beds": 616,
      "life_expectancy": 17,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 40,
      "racing_circuit": 15,
      "stadium": 19,
      "international_stadium": 11,
      "olympic_score": 15,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 40,
      "court": 12,
      "prosecution_office": 15,
      "police_station": 8,
      "police_car_fleet": 7967,
      "police_academy": 13,
      "corruption_index": 60,
      "security_index": 55,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 13,
          "sepeda_motor": 32,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 40,
          "helikopter_polisi": 18,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 16,
          "kamera_surveillance": 2,
          "pusat_forensik": 1
        },
        "response_time": 35,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 31,
    "tanks": 34,
    "aircraft": 17,
    "naval": 3,
    "air_base": 26,
    "naval_base": 30,
    "military_base": 13,
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
      "rate": 29,
      "satisfaction": 67,
      "revenue": 20
    },
    "corporate": {
      "rate": 37,
      "satisfaction": 52,
      "revenue": 22
    },
    "income": {
      "rate": 36,
      "satisfaction": 61,
      "revenue": 25
    },
    "customs": {
      "rate": 1,
      "satisfaction": 86,
      "revenue": 0
    },
    "environment": {
      "rate": 21,
      "satisfaction": 88,
      "revenue": 26
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 3 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 7 },
    "other": {
      "rate": 21,
      "satisfaction": 93,
      "revenue": 24
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 84,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 21,
    "commercial": 40,
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
      "soft_power": 7,
      "hard_power": 26,
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
    "health": 27,
    "education": 14,
    "security": 28,
    "finance": 35,
    "environment": 60
  }
};
