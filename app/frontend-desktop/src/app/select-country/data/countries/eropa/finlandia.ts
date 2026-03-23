import { CountryData } from "../../types";

export const finlandia: CountryData = {
  "name_en": "Finland",
  "capital": "Helsinki",
  "name_id": "Finlandia",
  "lon": 26,
  "lat": 64,
  "flag": "🇫🇮",
  "pop": "10M",
  "budget": 2917,
  "income": "8334",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 24,
    "hydro_plant": 21,
    "solar_plant": 23,
    "thermal_plant": 17,
    "gas_plant": 15,
    "wind_plant": 6,
    "power_grid": 55,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 8,
    "subway": 1,
    "railway": 27,
    "highway": 29,
    "road_quality": 61,
    "sea_port": 31,
    "airport": 35,
    "bus_terminal": 38,
    "helipad": 4,
    "internet_coverage": 93,
    "tech_stack": 63,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 6,
    "uranium": 39,
    "coal": 12,
    "oil": 11,
    "gas": 28,
    "salt": 27,
    "nickel": 20,
    "lithium": 5,
    "aluminum": 29,
    "copper": 24,
    "rare_earth": 9,
    "iron_ore": 5,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 38,
    "car": 28,
    "motorcycle": 18,
    "smelter": 13,
    "concrete_cement": 11,
    "wood": 1,
    "mineral_water": 17,
    "sugar": 35,
    "bread": 10,
    "pharmacy": 39,
    "fertilizer": 17,
    "meat_processing": 37,
    "instant_noodle": 31,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 30,
    "poultry": 24,
    "dairy_cow": 15,
    "beef_cow": 5,
    "sheep_goat": 21,
    "shrimp": 36,
    "fish": 29,
    "shellfish": 16,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 32,
    "wheat": 15,
    "corn": 22,
    "tubers": 40,
    "soy": 9,
    "palm_oil": 19,
    "tea": 8,
    "coffee": 10,
    "cocoa": 21,
    "sugarcane": 23,
    "vegetables": 33,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 26,
    "barracks": 36,
    "armory": 21,
    "tank_hangar": 39,
    "military_academy": 9,
    "budget": 10789,
    "personnel": 7855,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 13,
        "apc": 17,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 30,
        "kapal_destroyer": 39,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 25,
        "helikopter_serang": 29,
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
    "command_center": 18,
    "military_air_base": 15,
    "military_naval_base": 35,
    "arms_factory": 18,
    "nuclear_status": false,
    "space_program": 40,
    "cyber_defense": 15,
    "intelligence": 4,
    "strategic_operations": {
      "attack_mission": 23,
      "spy_mission": 17,
      "sabotage_mission": 12,
      "territory_management": 2,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 32,
      "radar_network": 10,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 14,
      "elementary_school": 2,
      "middle_school": 37,
      "high_school": 36,
      "university": 32,
      "education_institute": 15,
      "laboratory": 17,
      "observatory": 3,
      "research_center": 36,
      "development_center": 40,
      "literacy": 64,
      "research_index": 0
    },
    "health": {
      "large_hospital": 35,
      "small_hospital": 10,
      "diagnostic_center": 25,
      "hospital_beds": 8016,
      "life_expectancy": 28,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 31,
      "racing_circuit": 18,
      "stadium": 4,
      "international_stadium": 20,
      "olympic_score": 40,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 22,
      "court": 15,
      "prosecution_office": 36,
      "police_station": 7,
      "police_car_fleet": 6415,
      "police_academy": 10,
      "corruption_index": 50,
      "security_index": 88,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 4,
          "sepeda_motor": 19,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 3,
          "helikopter_polisi": 28,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 38,
          "kamera_surveillance": 9,
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
    "infantry": 22,
    "tanks": 11,
    "aircraft": 40,
    "naval": 37,
    "air_base": 21,
    "naval_base": 16,
    "military_base": 6,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 16,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 2,
      "satisfaction": 67,
      "revenue": 7
    },
    "corporate": {
      "rate": 23,
      "satisfaction": 52,
      "revenue": 113
    },
    "income": {
      "rate": 24,
      "satisfaction": 61,
      "revenue": 99
    },
    "customs": {
      "rate": 15,
      "satisfaction": 86,
      "revenue": 82
    },
    "environment": {
      "rate": 13,
      "satisfaction": 88,
      "revenue": 63
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 15 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 44 },
    "other": {
      "rate": 18,
      "satisfaction": 93,
      "revenue": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 81,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 24,
    "commercial": 27,
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
      "soft_power": 22,
      "hard_power": 6,
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
      { "partner": "Spanyol", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Italia", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Rusia", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Belanda", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Turki", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 13,
    "education": 14,
    "security": 27,
    "finance": 36,
    "environment": 60
  }
};
