import { CountryData } from "../../types";

export const maldives: CountryData = {
  "name_en": "Maldives",
  "capital": "Malé",
  "name_id": "Maldives",
  "lon": 73.3,
  "lat": 4.1,
  "flag": "🇲🇻",
  "pop": "10M",
  "budget": 591000000000,
  "income": "394.000.000 / 394 M",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 31,
    "hydro_plant": 26,
    "solar_plant": 29,
    "thermal_plant": 18,
    "gas_plant": 25,
    "wind_plant": 9,
    "power_grid": 81,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 39,
    "subway": 25,
    "railway": 18,
    "highway": 38,
    "road_quality": 75,
    "sea_port": 27,
    "airport": 29,
    "bus_terminal": 31,
    "helipad": 18,
    "internet_coverage": 73,
    "tech_stack": 52,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 34,
    "uranium": 39,
    "coal": 34,
    "oil": 26,
    "gas": 22,
    "salt": 1,
    "nickel": 7,
    "lithium": 19,
    "aluminum": 21,
    "copper": 7,
    "rare_earth": 2,
    "iron_ore": 5,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 39,
    "car": 16,
    "motorcycle": 27,
    "smelter": 38,
    "concrete_cement": 12,
    "wood": 25,
    "mineral_water": 6,
    "sugar": 32,
    "bread": 31,
    "pharmacy": 22,
    "fertilizer": 35,
    "meat_processing": 32,
    "instant_noodle": 29,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 2,
    "poultry": 28,
    "dairy_cow": 26,
    "beef_cow": 7,
    "sheep_goat": 33,
    "shrimp": 3,
    "fish": 12,
    "shellfish": 11,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 36,
    "wheat": 29,
    "corn": 20,
    "tubers": 6,
    "soy": 17,
    "palm_oil": 7,
    "tea": 18,
    "coffee": 3,
    "cocoa": 39,
    "sugarcane": 11,
    "vegetables": 32,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 9,
    "barracks": 27,
    "armory": 2,
    "tank_hangar": 8,
    "military_academy": 14,
    "budget": 10,
    "personnel": 8232,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 34,
        "apc": 20,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 13,
        "kapal_destroyer": 12,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 22,
        "helikopter_serang": 36,
        "pesawat_pengintai": 2
      },
      "total_unit": 29,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 37,
    "military_air_base": 19,
    "military_naval_base": 18,
    "arms_factory": 31,
    "nuclear_status": false,
    "space_program": 28,
    "cyber_defense": 33,
    "intelligence": 33,
    "strategic_operations": {
      "attack_mission": 6,
      "spy_mission": 7,
      "sabotage_mission": 9,
      "territory_management": 36,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 14,
      "radar_network": 27,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 27,
      "elementary_school": 10,
      "middle_school": 37,
      "high_school": 30,
      "university": 32,
      "education_institute": 21,
      "laboratory": 29,
      "observatory": 37,
      "research_center": 38,
      "development_center": 5,
      "literacy": 94,
      "research_index": 0
    },
    "health": {
      "large_hospital": 11,
      "small_hospital": 6,
      "diagnostic_center": 20,
      "hospital_beds": 4116,
      "life_expectancy": 40,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 24,
      "racing_circuit": 16,
      "stadium": 12,
      "international_stadium": 7,
      "olympic_score": 38,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 16,
      "court": 38,
      "prosecution_office": 8,
      "police_station": 30,
      "police_car_fleet": 8491,
      "police_academy": 9,
      "corruption_index": 85,
      "security_index": 80,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 21,
          "sepeda_motor": 29,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 28,
          "helikopter_polisi": 28,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 34,
          "kamera_surveillance": 4,
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
    "infantry": 18,
    "tanks": 23,
    "aircraft": 9,
    "naval": 19,
    "air_base": 37,
    "naval_base": 6,
    "military_base": 37,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 17,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 15,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 11,
      "satisfaction": 52
    },
    "income": {
      "rate": 2,
      "satisfaction": 61
    },
    "customs": {
      "rate": 18,
      "satisfaction": 86
    },
    "environment": {
      "rate": 7,
      "satisfaction": 88
    },
    "other": {
      "rate": 11,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 94,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 6,
    "commercial": 4,
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
      "soft_power": 36,
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
    "agreements": [
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Filipina", "type": "Trade", "status": "Active" },
      { "partner": "Indonesia", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 27,
    "education": 4,
    "security": 34,
    "finance": 14,
    "environment": 60
  }
};
