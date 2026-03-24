import { CountryData } from "../../types";

export const jerman: CountryData = {
  "name_en": "Germany",
  "capital": "Berlin",
  "name_id": "Jerman",
  "lon": 9,
  "lat": 51,
  "flag": "🇩🇪",
  "pop": "10M",
  "budget": 44629,
  "income": "127510",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 30,
    "hydro_plant": 38,
    "solar_plant": 17,
    "thermal_plant": 20,
    "gas_plant": 37,
    "wind_plant": 36,
    "power_grid": 51,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 28,
    "subway": 35,
    "railway": 4,
    "highway": 1,
    "road_quality": 63,
    "sea_port": 13,
    "airport": 4,
    "bus_terminal": 38,
    "helipad": 19,
    "internet_coverage": 63,
    "tech_stack": 55,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 14,
    "uranium": 14,
    "coal": 1,
    "oil": 7,
    "gas": 24,
    "salt": 28,
    "nickel": 3,
    "lithium": 14,
    "aluminum": 36,
    "copper": 20,
    "rare_earth": 8,
    "iron_ore": 27,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 33,
    "car": 31,
    "motorcycle": 16,
    "smelter": 34,
    "concrete_cement": 31,
    "wood": 20,
    "mineral_water": 38,
    "sugar": 5,
    "bread": 10,
    "pharmacy": 23,
    "fertilizer": 31,
    "meat_processing": 34,
    "instant_noodle": 12,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 26,
    "poultry": 11,
    "dairy_cow": 35,
    "beef_cow": 16,
    "sheep_goat": 17,
    "shrimp": 39,
    "fish": 15,
    "shellfish": 21,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 33,
    "wheat": 31,
    "corn": 3,
    "tubers": 15,
    "soy": 9,
    "palm_oil": 28,
    "tea": 30,
    "coffee": 7,
    "cocoa": 5,
    "sugarcane": 6,
    "vegetables": 25,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 32,
    "barracks": 27,
    "armory": 17,
    "tank_hangar": 40,
    "military_academy": 34,
    "budget": 12751,
    "personnel": 24955,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 10,
        "apc": 27,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 9,
        "kapal_destroyer": 10,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 14,
        "helikopter_serang": 31,
        "pesawat_pengintai": 2
      },
      "total_unit": 23,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 37,
    "military_air_base": 9,
    "military_naval_base": 7,
    "arms_factory": 8,
    "nuclear_status": false,
    "space_program": 26,
    "cyber_defense": 29,
    "intelligence": 10,
    "strategic_operations": {
      "attack_mission": 26,
      "spy_mission": 1,
      "sabotage_mission": 6,
      "territory_management": 33,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 18,
      "radar_network": 12,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 11,
      "elementary_school": 25,
      "middle_school": 18,
      "high_school": 15,
      "university": 1,
      "education_institute": 10,
      "laboratory": 6,
      "observatory": 15,
      "research_center": 30,
      "development_center": 28,
      "literacy": 84,
      "research_index": 0
    },
    "health": {
      "large_hospital": 31,
      "small_hospital": 25,
      "diagnostic_center": 28,
      "hospital_beds": 6995,
      "life_expectancy": 4,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 18,
      "racing_circuit": 2,
      "stadium": 40,
      "international_stadium": 35,
      "olympic_score": 12,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 10,
      "court": 8,
      "prosecution_office": 7,
      "police_station": 33,
      "police_car_fleet": 542,
      "police_academy": 10,
      "corruption_index": 69,
      "security_index": 87,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 8,
          "sepeda_motor": 20,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 21,
          "helikopter_polisi": 40,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 38,
          "kamera_surveillance": 19,
          "pusat_forensik": 1
        },
        "response_time": 25,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 12,
    "tanks": 23,
    "aircraft": 35,
    "naval": 21,
    "air_base": 35,
    "naval_base": 21,
    "military_base": 40,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 25,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 12,
      "satisfaction": 67,
      "revenue": 1299
    },
    "corporate": {
      "rate": 6,
      "satisfaction": 52,
      "revenue": 283
    },
    "income": {
      "rate": 24,
      "satisfaction": 61,
      "revenue": 1963
    },
    "customs": {
      "rate": 9,
      "satisfaction": 86,
      "revenue": 775
    },
    "environment": {
      "rate": 33,
      "satisfaction": 88,
      "revenue": 1581
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 224 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 670 },
    "other": {
      "rate": 12,
      "satisfaction": 93,
      "revenue": 931
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
    "residential": 9,
    "commercial": 6,
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
      "soft_power": 30,
      "hard_power": 18,
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
    "health": 30,
    "education": 35,
    "security": 12,
    "finance": 17,
    "environment": 60
  }
};
