import { CountryData } from "../../types";

export const turkmenistan: CountryData = {
  "name_en": "Turkmenistan",
  "capital": "Ashgabat",
  "name_id": "Turkmenistan",
  "lon": 60,
  "lat": 40,
  "flag": "🇹🇲",
  "pop": "10M",
  "budget": 438,
  "income": "1250",
  "religion": "Islam",
  "ideology": "Nasionalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 11,
    "hydro_plant": 1,
    "solar_plant": 2,
    "thermal_plant": 29,
    "gas_plant": 17,
    "wind_plant": 21,
    "power_grid": 68,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 27,
    "subway": 20,
    "railway": 31,
    "highway": 12,
    "road_quality": 52,
    "sea_port": 7,
    "airport": 16,
    "bus_terminal": 11,
    "helipad": 33,
    "internet_coverage": 78,
    "tech_stack": 73,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 33,
    "uranium": 1,
    "coal": 35,
    "oil": 2,
    "gas": 3,
    "salt": 4,
    "nickel": 24,
    "lithium": 22,
    "aluminum": 6,
    "copper": 20,
    "rare_earth": 7,
    "iron_ore": 14,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 35,
    "car": 6,
    "motorcycle": 15,
    "smelter": 39,
    "concrete_cement": 2,
    "wood": 36,
    "mineral_water": 32,
    "sugar": 6,
    "bread": 17,
    "pharmacy": 25,
    "fertilizer": 4,
    "meat_processing": 17,
    "instant_noodle": 36,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 15,
    "poultry": 18,
    "dairy_cow": 34,
    "beef_cow": 2,
    "sheep_goat": 35,
    "shrimp": 3,
    "fish": 21,
    "shellfish": 33,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 29,
    "wheat": 18,
    "corn": 38,
    "tubers": 37,
    "soy": 5,
    "palm_oil": 2,
    "tea": 15,
    "coffee": 4,
    "cocoa": 28,
    "sugarcane": 27,
    "vegetables": 7,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 17,
    "barracks": 17,
    "armory": 32,
    "tank_hangar": 12,
    "military_academy": 1,
    "budget": 38974,
    "personnel": 19822,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 104,
        "apc": 137,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 17,
        "kapal_destroyer": 14,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 87,
        "helikopter_serang": 140,
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
    "military_air_base": 23,
    "military_naval_base": 35,
    "arms_factory": 39,
    "nuclear_status": false,
    "space_program": 19,
    "cyber_defense": 40,
    "intelligence": 18,
    "strategic_operations": {
      "attack_mission": 11,
      "spy_mission": 34,
      "sabotage_mission": 2,
      "territory_management": 3,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 4,
      "radar_network": 3,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 20,
      "elementary_school": 34,
      "middle_school": 20,
      "high_school": 24,
      "university": 17,
      "education_institute": 6,
      "laboratory": 9,
      "observatory": 23,
      "research_center": 27,
      "development_center": 4,
      "literacy": 80,
      "research_index": 0
    },
    "health": {
      "large_hospital": 27,
      "small_hospital": 21,
      "diagnostic_center": 37,
      "hospital_beds": 6492,
      "life_expectancy": 2,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 30,
      "racing_circuit": 5,
      "stadium": 4,
      "international_stadium": 19,
      "olympic_score": 21,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 38,
      "court": 28,
      "prosecution_office": 5,
      "police_station": 2,
      "police_car_fleet": 6765,
      "police_academy": 17,
      "corruption_index": 56,
      "security_index": 79,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 9,
          "sepeda_motor": 40,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 37,
          "helikopter_polisi": 6,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 14,
          "kamera_surveillance": 7,
          "pusat_forensik": 1
        },
        "response_time": 15,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 24,
    "tanks": 37,
    "aircraft": 12,
    "naval": 29,
    "air_base": 1,
    "naval_base": 35,
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
      "rate": 20,
      "satisfaction": 67,
      "revenue": 14
    },
    "corporate": {
      "rate": 34,
      "satisfaction": 52,
      "revenue": 25
    },
    "income": {
      "rate": 31,
      "satisfaction": 61,
      "revenue": 38
    },
    "customs": {
      "rate": 31,
      "satisfaction": 86,
      "revenue": 14
    },
    "environment": {
      "rate": 28,
      "satisfaction": 88,
      "revenue": 35
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 3 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 7 },
    "other": {
      "rate": 25,
      "satisfaction": 93,
      "revenue": 30
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 53,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 19,
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
      "soft_power": 25,
      "hard_power": 22,
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
    "health": 26,
    "education": 17,
    "security": 12,
    "finance": 24,
    "environment": 60
  }
};
