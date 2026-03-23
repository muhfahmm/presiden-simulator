import { CountryData } from "../../types";

export const costa_rica: CountryData = {
  "name_en": "Costa Rica",
  "capital": "San José",
  "name_id": "Costa rica",
  "lon": -84,
  "lat": 10,
  "flag": "🇨🇷",
  "pop": "10M",
  "budget": 681,
  "income": "1945",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 1,
    "hydro_plant": 31,
    "solar_plant": 32,
    "thermal_plant": 19,
    "gas_plant": 26,
    "wind_plant": 9,
    "power_grid": 92,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 39,
    "subway": 15,
    "railway": 31,
    "highway": 14,
    "road_quality": 72,
    "sea_port": 35,
    "airport": 39,
    "bus_terminal": 2,
    "helipad": 30,
    "internet_coverage": 81,
    "tech_stack": 54,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 5,
    "uranium": 28,
    "coal": 39,
    "oil": 34,
    "gas": 31,
    "salt": 10,
    "nickel": 35,
    "lithium": 2,
    "aluminum": 8,
    "copper": 4,
    "rare_earth": 13,
    "iron_ore": 11,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 31,
    "car": 37,
    "motorcycle": 23,
    "smelter": 15,
    "concrete_cement": 23,
    "wood": 23,
    "mineral_water": 17,
    "sugar": 5,
    "bread": 9,
    "pharmacy": 32,
    "fertilizer": 30,
    "meat_processing": 1,
    "instant_noodle": 23,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 8,
    "poultry": 27,
    "dairy_cow": 16,
    "beef_cow": 22,
    "sheep_goat": 33,
    "shrimp": 10,
    "fish": 10,
    "shellfish": 13,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 19,
    "wheat": 18,
    "corn": 31,
    "tubers": 3,
    "soy": 34,
    "palm_oil": 6,
    "tea": 30,
    "coffee": 34,
    "cocoa": 32,
    "sugarcane": 8,
    "vegetables": 16,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 22,
    "barracks": 39,
    "armory": 4,
    "tank_hangar": 29,
    "military_academy": 4,
    "budget": 3337,
    "personnel": 5363,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 39,
        "apc": 37,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 5,
        "kapal_destroyer": 11,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 23,
        "helikopter_serang": 36,
        "pesawat_pengintai": 2
      },
      "total_unit": 30,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 17,
    "military_air_base": 33,
    "military_naval_base": 2,
    "arms_factory": 28,
    "nuclear_status": false,
    "space_program": 23,
    "cyber_defense": 2,
    "intelligence": 18,
    "strategic_operations": {
      "attack_mission": 29,
      "spy_mission": 35,
      "sabotage_mission": 3,
      "territory_management": 19,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 4,
      "radar_network": 6,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 11,
      "elementary_school": 18,
      "middle_school": 31,
      "high_school": 15,
      "university": 40,
      "education_institute": 21,
      "laboratory": 22,
      "observatory": 16,
      "research_center": 23,
      "development_center": 39,
      "literacy": 52,
      "research_index": 0
    },
    "health": {
      "large_hospital": 22,
      "small_hospital": 20,
      "diagnostic_center": 40,
      "hospital_beds": 3283,
      "life_expectancy": 40,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 36,
      "racing_circuit": 31,
      "stadium": 19,
      "international_stadium": 37,
      "olympic_score": 34,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 26,
      "court": 19,
      "prosecution_office": 19,
      "police_station": 16,
      "police_car_fleet": 2848,
      "police_academy": 40,
      "corruption_index": 69,
      "security_index": 52,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 39,
          "sepeda_motor": 11,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 34,
          "helikopter_polisi": 22,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 3,
          "kamera_surveillance": 37,
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
    "infantry": 26,
    "tanks": 20,
    "aircraft": 29,
    "naval": 6,
    "air_base": 23,
    "naval_base": 36,
    "military_base": 8,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 36,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 40,
      "satisfaction": 67,
      "revenue": 69
    },
    "corporate": {
      "rate": 34,
      "satisfaction": 52,
      "revenue": 41
    },
    "income": {
      "rate": 15,
      "satisfaction": 61,
      "revenue": 13
    },
    "customs": {
      "rate": 31,
      "satisfaction": 86,
      "revenue": 44
    },
    "environment": {
      "rate": 17,
      "satisfaction": 88,
      "revenue": 34
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 4 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 11 },
    "other": {
      "rate": 38,
      "satisfaction": 93,
      "revenue": 75
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
    "residential": 8,
    "commercial": 38,
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
      "hard_power": 23,
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
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Kanada", "type": "Trade", "status": "Active" },
      { "partner": "Kuba", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Meksiko", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 11,
    "education": 8,
    "security": 10,
    "finance": 36,
    "environment": 60
  }
};
