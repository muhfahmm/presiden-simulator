import { CountryData } from "../../types";

export const lithuania: CountryData = {
  "name_en": "Lithuania",
  "capital": "Vilnius",
  "name_id": "Lithuania",
  "lon": 25.19,
  "lat": 54.41,
  "flag": "🇱🇹",
  "pop": "10M",
  "budget": 739,
  "income": "2111",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 21,
    "hydro_plant": 13,
    "solar_plant": 7,
    "thermal_plant": 16,
    "gas_plant": 27,
    "wind_plant": 32,
    "power_grid": 87,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 35,
    "subway": 34,
    "railway": 6,
    "highway": 36,
    "road_quality": 68,
    "sea_port": 37,
    "airport": 23,
    "bus_terminal": 20,
    "helipad": 27,
    "internet_coverage": 59,
    "tech_stack": 52,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 12,
    "uranium": 37,
    "coal": 22,
    "oil": 7,
    "gas": 10,
    "salt": 26,
    "nickel": 1,
    "lithium": 11,
    "aluminum": 6,
    "copper": 39,
    "rare_earth": 8,
    "iron_ore": 4,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 7,
    "car": 34,
    "motorcycle": 26,
    "smelter": 32,
    "concrete_cement": 23,
    "wood": 3,
    "mineral_water": 7,
    "sugar": 11,
    "bread": 34,
    "pharmacy": 36,
    "fertilizer": 36,
    "meat_processing": 4,
    "instant_noodle": 39,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 36,
    "poultry": 28,
    "dairy_cow": 3,
    "beef_cow": 30,
    "sheep_goat": 32,
    "shrimp": 18,
    "fish": 31,
    "shellfish": 16,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 9,
    "wheat": 22,
    "corn": 31,
    "tubers": 25,
    "soy": 2,
    "palm_oil": 5,
    "tea": 7,
    "coffee": 12,
    "cocoa": 10,
    "sugarcane": 11,
    "vegetables": 20,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 8,
    "barracks": 5,
    "armory": 25,
    "tank_hangar": 22,
    "military_academy": 3,
    "budget": 19,
    "personnel": 10796,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 40,
        "apc": 19,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 39,
        "kapal_destroyer": 26,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 21,
        "helikopter_serang": 3,
        "pesawat_pengintai": 2
      },
      "total_unit": 32,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 3,
    "military_air_base": 13,
    "military_naval_base": 5,
    "arms_factory": 31,
    "nuclear_status": false,
    "space_program": 4,
    "cyber_defense": 15,
    "intelligence": 22,
    "strategic_operations": {
      "attack_mission": 13,
      "spy_mission": 36,
      "sabotage_mission": 28,
      "territory_management": 21,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 8,
      "radar_network": 30,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 4,
      "elementary_school": 11,
      "middle_school": 31,
      "high_school": 7,
      "university": 21,
      "education_institute": 6,
      "laboratory": 2,
      "observatory": 20,
      "research_center": 22,
      "development_center": 10,
      "literacy": 93,
      "research_index": 0
    },
    "health": {
      "large_hospital": 14,
      "small_hospital": 6,
      "diagnostic_center": 40,
      "hospital_beds": 9308,
      "life_expectancy": 23,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 36,
      "racing_circuit": 40,
      "stadium": 14,
      "international_stadium": 15,
      "olympic_score": 38,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 31,
      "court": 28,
      "prosecution_office": 26,
      "police_station": 23,
      "police_car_fleet": 8178,
      "police_academy": 4,
      "corruption_index": 53,
      "security_index": 73,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 33,
          "sepeda_motor": 21,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 19,
          "helikopter_polisi": 5,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 26,
          "kamera_surveillance": 13,
          "pusat_forensik": 1
        },
        "response_time": 40,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 21,
    "tanks": 18,
    "aircraft": 4,
    "naval": 27,
    "air_base": 17,
    "naval_base": 7,
    "military_base": 38,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 32,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 9,
      "satisfaction": 67,
      "revenue": 10
    },
    "corporate": {
      "rate": 40,
      "satisfaction": 52,
      "revenue": 74
    },
    "income": {
      "rate": 4,
      "satisfaction": 61,
      "revenue": 5
    },
    "customs": {
      "rate": 14,
      "satisfaction": 86,
      "revenue": 12
    },
    "environment": {
      "rate": 8,
      "satisfaction": 88,
      "revenue": 16
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 4 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 12 },
    "other": {
      "rate": 7,
      "satisfaction": 93,
      "revenue": 11
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 59,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 36,
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
      "soft_power": 31,
      "hard_power": 33,
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
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Turki", "type": "Trade", "status": "Active" },
      { "partner": "Belanda", "type": "Trade", "status": "Active" },
      { "partner": "Rusia", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Italia", "type": "Trade", "status": "Active" },
      { "partner": "Swiss", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 18,
    "education": 9,
    "security": 3,
    "finance": 29,
    "environment": 60
  }
};
