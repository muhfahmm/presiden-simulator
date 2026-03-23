import { CountryData } from "../../types";

export const kolombia: CountryData = {
  "name_en": "Colombia",
  "capital": "Bogotá",
  "name_id": "Kolombia",
  "lon": -72,
  "lat": 4,
  "flag": "🇨🇴",
  "pop": "10M",
  "budget": 3306,
  "income": "9445",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 5,
    "hydro_plant": 4,
    "solar_plant": 7,
    "thermal_plant": 23,
    "gas_plant": 1,
    "wind_plant": 4,
    "power_grid": 62,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 30,
    "subway": 15,
    "railway": 19,
    "highway": 40,
    "road_quality": 75,
    "sea_port": 26,
    "airport": 33,
    "bus_terminal": 39,
    "helipad": 3,
    "internet_coverage": 78,
    "tech_stack": 66,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 24,
    "uranium": 2,
    "coal": 23,
    "oil": 1,
    "gas": 24,
    "salt": 7,
    "nickel": 21,
    "lithium": 4,
    "aluminum": 20,
    "copper": 16,
    "rare_earth": 26,
    "iron_ore": 1,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 1,
    "car": 27,
    "motorcycle": 10,
    "smelter": 13,
    "concrete_cement": 32,
    "wood": 12,
    "mineral_water": 40,
    "sugar": 34,
    "bread": 18,
    "pharmacy": 19,
    "fertilizer": 38,
    "meat_processing": 40,
    "instant_noodle": 19,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 9,
    "poultry": 30,
    "dairy_cow": 1,
    "beef_cow": 4,
    "sheep_goat": 36,
    "shrimp": 15,
    "fish": 15,
    "shellfish": 32,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 13,
    "wheat": 4,
    "corn": 11,
    "tubers": 7,
    "soy": 27,
    "palm_oil": 22,
    "tea": 9,
    "coffee": 2,
    "cocoa": 25,
    "sugarcane": 16,
    "vegetables": 39,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 20,
    "barracks": 26,
    "armory": 12,
    "tank_hangar": 34,
    "military_academy": 2,
    "budget": 14658,
    "personnel": 13873,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 37,
        "apc": 8,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 31,
        "kapal_destroyer": 12,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 25,
        "helikopter_serang": 30,
        "pesawat_pengintai": 2
      },
      "total_unit": 4,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 10,
    "military_air_base": 11,
    "military_naval_base": 32,
    "arms_factory": 6,
    "nuclear_status": false,
    "space_program": 40,
    "cyber_defense": 39,
    "intelligence": 39,
    "strategic_operations": {
      "attack_mission": 2,
      "spy_mission": 17,
      "sabotage_mission": 2,
      "territory_management": 22,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 10,
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
      "elementary_school": 18,
      "middle_school": 2,
      "high_school": 2,
      "university": 38,
      "education_institute": 2,
      "laboratory": 18,
      "observatory": 37,
      "research_center": 32,
      "development_center": 11,
      "literacy": 73,
      "research_index": 0
    },
    "health": {
      "large_hospital": 37,
      "small_hospital": 3,
      "diagnostic_center": 28,
      "hospital_beds": 581,
      "life_expectancy": 32,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 9,
      "racing_circuit": 29,
      "stadium": 25,
      "international_stadium": 33,
      "olympic_score": 18,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 10,
      "court": 19,
      "prosecution_office": 33,
      "police_station": 17,
      "police_car_fleet": 6668,
      "police_academy": 26,
      "corruption_index": 52,
      "security_index": 94,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 13,
          "sepeda_motor": 4,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 8,
          "helikopter_polisi": 4,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 5,
          "kamera_surveillance": 17,
          "pusat_forensik": 1
        },
        "response_time": 17,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 13,
    "tanks": 32,
    "aircraft": 7,
    "naval": 6,
    "air_base": 5,
    "naval_base": 11,
    "military_base": 27,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 10,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 9,
      "satisfaction": 67,
      "revenue": 34
    },
    "corporate": {
      "rate": 14,
      "satisfaction": 52,
      "revenue": 120
    },
    "income": {
      "rate": 18,
      "satisfaction": 61,
      "revenue": 93
    },
    "customs": {
      "rate": 31,
      "satisfaction": 86,
      "revenue": 136
    },
    "environment": {
      "rate": 1,
      "satisfaction": 88,
      "revenue": 6
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 17 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 50 },
    "other": {
      "rate": 8,
      "satisfaction": 93,
      "revenue": 60
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 52,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 40,
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
      "soft_power": 27,
      "hard_power": 15,
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
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Brazil", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Argentina", "type": "Trade", "status": "Active" },
      { "partner": "Chile", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Peru", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 22,
    "education": 21,
    "security": 5,
    "finance": 26,
    "environment": 60
  }
};
