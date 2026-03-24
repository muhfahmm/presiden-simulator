import { CountryData } from "../../types";

export const selandia_baru: CountryData = {
  "name_en": "New Zealand",
  "capital": "Wellington",
  "name_id": "Selandia baru",
  "lon": 174,
  "lat": -41,
  "flag": "🇳🇿",
  "pop": "10M",
  "budget": 2431,
  "income": "6945",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 22,
    "hydro_plant": 8,
    "solar_plant": 22,
    "thermal_plant": 6,
    "gas_plant": 2,
    "wind_plant": 28,
    "power_grid": 64,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 36,
    "subway": 10,
    "railway": 2,
    "highway": 24,
    "road_quality": 93,
    "sea_port": 16,
    "airport": 14,
    "bus_terminal": 5,
    "helipad": 5,
    "internet_coverage": 87,
    "tech_stack": 87,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 25,
    "uranium": 13,
    "coal": 36,
    "oil": 16,
    "gas": 16,
    "salt": 11,
    "nickel": 7,
    "lithium": 17,
    "aluminum": 7,
    "copper": 21,
    "rare_earth": 18,
    "iron_ore": 14,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 9,
    "car": 24,
    "motorcycle": 35,
    "smelter": 21,
    "concrete_cement": 9,
    "wood": 22,
    "mineral_water": 14,
    "sugar": 15,
    "bread": 5,
    "pharmacy": 24,
    "fertilizer": 27,
    "meat_processing": 16,
    "instant_noodle": 2,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 19,
    "poultry": 28,
    "dairy_cow": 20,
    "beef_cow": 23,
    "sheep_goat": 34,
    "shrimp": 39,
    "fish": 27,
    "shellfish": 5,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 11,
    "wheat": 8,
    "corn": 8,
    "tubers": 19,
    "soy": 32,
    "palm_oil": 19,
    "tea": 7,
    "coffee": 29,
    "cocoa": 2,
    "sugarcane": 8,
    "vegetables": 10,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 17,
    "barracks": 24,
    "armory": 32,
    "tank_hangar": 18,
    "military_academy": 10,
    "budget": 8860,
    "personnel": 6610,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 73,
        "apc": 50,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 34,
        "kapal_destroyer": 190,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 192,
        "helikopter_serang": 64,
        "pesawat_pengintai": 2
      },
      "total_unit": 8,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 1,
    "military_air_base": 2,
    "military_naval_base": 12,
    "arms_factory": 19,
    "nuclear_status": false,
    "space_program": 8,
    "cyber_defense": 36,
    "intelligence": 40,
    "strategic_operations": {
      "attack_mission": 25,
      "spy_mission": 32,
      "sabotage_mission": 23,
      "territory_management": 30,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 4,
      "radar_network": 5,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 7,
      "elementary_school": 34,
      "middle_school": 5,
      "high_school": 25,
      "university": 39,
      "education_institute": 6,
      "laboratory": 3,
      "observatory": 9,
      "research_center": 13,
      "development_center": 28,
      "literacy": 58,
      "research_index": 0
    },
    "health": {
      "large_hospital": 3,
      "small_hospital": 28,
      "diagnostic_center": 22,
      "hospital_beds": 1959,
      "life_expectancy": 36,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 13,
      "racing_circuit": 14,
      "stadium": 26,
      "international_stadium": 20,
      "olympic_score": 26,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 26,
      "court": 9,
      "prosecution_office": 8,
      "police_station": 31,
      "police_car_fleet": 4446,
      "police_academy": 35,
      "corruption_index": 77,
      "security_index": 85,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 9,
          "sepeda_motor": 1,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 5,
          "helikopter_polisi": 4,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 18,
          "kamera_surveillance": 6,
          "pusat_forensik": 1
        },
        "response_time": 29,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 16,
    "tanks": 2,
    "aircraft": 25,
    "naval": 26,
    "air_base": 14,
    "naval_base": 40,
    "military_base": 3,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 26,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 29,
      "satisfaction": 67,
      "revenue": 85
    },
    "corporate": {
      "rate": 38,
      "satisfaction": 52,
      "revenue": 180
    },
    "income": {
      "rate": 15,
      "satisfaction": 61,
      "revenue": 102
    },
    "customs": {
      "rate": 5,
      "satisfaction": 86,
      "revenue": 18
    },
    "environment": {
      "rate": 3,
      "satisfaction": 88,
      "revenue": 8
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 13 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 37 },
    "other": {
      "rate": 18,
      "satisfaction": 93,
      "revenue": 62
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 60,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 18,
    "commercial": 12,
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
      "soft_power": 4,
      "hard_power": 27,
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
    "health": 1,
    "education": 19,
    "security": 16,
    "finance": 34,
    "environment": 60
  }
};
