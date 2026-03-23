import { CountryData } from "../../types";

export const makedonia_utara: CountryData = {
  "name_en": "North Macedonia",
  "capital": "Skopje",
  "name_id": "Makedonia utara",
  "lon": 22,
  "lat": 41.83333333,
  "flag": "🇲🇰",
  "pop": "10M",
  "budget": 152000000000000,
  "income": "261.000.000.000.000 / 261 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 8,
    "hydro_plant": 24,
    "solar_plant": 37,
    "thermal_plant": 40,
    "gas_plant": 5,
    "wind_plant": 2,
    "power_grid": 88,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 28,
    "subway": 36,
    "railway": 40,
    "highway": 34,
    "road_quality": 93,
    "sea_port": 37,
    "airport": 11,
    "bus_terminal": 10,
    "helipad": 31,
    "internet_coverage": 54,
    "tech_stack": 77,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 15,
    "uranium": 20,
    "coal": 38,
    "oil": 14,
    "gas": 24,
    "salt": 28,
    "nickel": 37,
    "lithium": 2,
    "aluminum": 31,
    "copper": 34,
    "rare_earth": 20,
    "iron_ore": 40,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 29,
    "car": 18,
    "motorcycle": 36,
    "smelter": 15,
    "concrete_cement": 14,
    "wood": 37,
    "mineral_water": 11,
    "sugar": 19,
    "bread": 23,
    "pharmacy": 35,
    "fertilizer": 2,
    "meat_processing": 21,
    "instant_noodle": 35,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 12,
    "poultry": 11,
    "dairy_cow": 17,
    "beef_cow": 34,
    "sheep_goat": 35,
    "shrimp": 36,
    "fish": 16,
    "shellfish": 20,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 2,
    "wheat": 36,
    "corn": 25,
    "tubers": 18,
    "soy": 37,
    "palm_oil": 34,
    "tea": 30,
    "coffee": 26,
    "cocoa": 20,
    "sugarcane": 14,
    "vegetables": 21,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 22,
    "barracks": 31,
    "armory": 34,
    "tank_hangar": 20,
    "military_academy": 22,
    "budget": 6,
    "personnel": 28814,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 130,
        "apc": 12,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 40,
        "kapal_destroyer": 168,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 144,
        "helikopter_serang": 174,
        "pesawat_pengintai": 2
      },
      "total_unit": 28,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 31,
    "military_air_base": 3,
    "military_naval_base": 14,
    "arms_factory": 13,
    "nuclear_status": false,
    "space_program": 39,
    "cyber_defense": 25,
    "intelligence": 32,
    "strategic_operations": {
      "attack_mission": 15,
      "spy_mission": 36,
      "sabotage_mission": 26,
      "territory_management": 25,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 2,
      "radar_network": 4,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 27,
      "elementary_school": 33,
      "middle_school": 3,
      "high_school": 7,
      "university": 8,
      "education_institute": 21,
      "laboratory": 15,
      "observatory": 21,
      "research_center": 24,
      "development_center": 14,
      "literacy": 65,
      "research_index": 0
    },
    "health": {
      "large_hospital": 12,
      "small_hospital": 9,
      "diagnostic_center": 24,
      "hospital_beds": 4478,
      "life_expectancy": 20,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 7,
      "racing_circuit": 18,
      "stadium": 25,
      "international_stadium": 7,
      "olympic_score": 26,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 6,
      "court": 11,
      "prosecution_office": 36,
      "police_station": 4,
      "police_car_fleet": 3435,
      "police_academy": 37,
      "corruption_index": 68,
      "security_index": 63,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 37,
          "sepeda_motor": 4,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 27,
          "helikopter_polisi": 6,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 6,
          "kamera_surveillance": 38,
          "pusat_forensik": 1
        },
        "response_time": 2,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 15,
    "tanks": 16,
    "aircraft": 36,
    "naval": 38,
    "air_base": 9,
    "naval_base": 5,
    "military_base": 36,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 35,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 16,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 35,
      "satisfaction": 52
    },
    "income": {
      "rate": 3,
      "satisfaction": 61
    },
    "customs": {
      "rate": 33,
      "satisfaction": 86
    },
    "environment": {
      "rate": 15,
      "satisfaction": 88
    },
    "other": {
      "rate": 12,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 90,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 20,
    "commercial": 29,
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
      "hard_power": 37,
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
    "agreements": [
      { "partner": "Rusia", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Swiss", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Belanda", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Spanyol", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 14,
    "education": 38,
    "security": 4,
    "finance": 40,
    "environment": 60
  }
};
