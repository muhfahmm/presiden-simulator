import { CountryData } from "../../types";

export const ekuador: CountryData = {
  "name_en": "Ecuador",
  "capital": "Quito",
  "name_id": "Ekuador",
  "lon": -77.5,
  "lat": -2,
  "flag": "🇪🇨",
  "pop": "10M",
  "budget": 1118,
  "income": "3195",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 38,
    "hydro_plant": 11,
    "solar_plant": 2,
    "thermal_plant": 26,
    "gas_plant": 37,
    "wind_plant": 11,
    "power_grid": 84,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 11,
    "subway": 19,
    "railway": 23,
    "highway": 8,
    "road_quality": 92,
    "sea_port": 36,
    "airport": 1,
    "bus_terminal": 11,
    "helipad": 21,
    "internet_coverage": 95,
    "tech_stack": 79,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 11,
    "uranium": 31,
    "coal": 31,
    "oil": 24,
    "gas": 16,
    "salt": 29,
    "nickel": 24,
    "lithium": 28,
    "aluminum": 35,
    "copper": 10,
    "rare_earth": 1,
    "iron_ore": 28,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 25,
    "car": 10,
    "motorcycle": 13,
    "smelter": 5,
    "concrete_cement": 33,
    "wood": 35,
    "mineral_water": 25,
    "sugar": 34,
    "bread": 19,
    "pharmacy": 32,
    "fertilizer": 26,
    "meat_processing": 12,
    "instant_noodle": 3,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 21,
    "poultry": 22,
    "dairy_cow": 35,
    "beef_cow": 14,
    "sheep_goat": 11,
    "shrimp": 5,
    "fish": 35,
    "shellfish": 5,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 38,
    "wheat": 30,
    "corn": 7,
    "tubers": 25,
    "soy": 33,
    "palm_oil": 27,
    "tea": 24,
    "coffee": 33,
    "cocoa": 33,
    "sugarcane": 10,
    "vegetables": 27,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 27,
    "barracks": 20,
    "armory": 10,
    "tank_hangar": 11,
    "military_academy": 10,
    "budget": 4245,
    "personnel": 7190,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 22,
        "apc": 31,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 18,
        "kapal_destroyer": 38,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 9,
        "helikopter_serang": 25,
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
    "command_center": 7,
    "military_air_base": 6,
    "military_naval_base": 6,
    "arms_factory": 29,
    "nuclear_status": false,
    "space_program": 39,
    "cyber_defense": 22,
    "intelligence": 12,
    "strategic_operations": {
      "attack_mission": 12,
      "spy_mission": 21,
      "sabotage_mission": 22,
      "territory_management": 38,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 37,
      "radar_network": 36,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 12,
      "elementary_school": 5,
      "middle_school": 37,
      "high_school": 14,
      "university": 30,
      "education_institute": 13,
      "laboratory": 27,
      "observatory": 9,
      "research_center": 12,
      "development_center": 26,
      "literacy": 60,
      "research_index": 0
    },
    "health": {
      "large_hospital": 33,
      "small_hospital": 1,
      "diagnostic_center": 34,
      "hospital_beds": 4344,
      "life_expectancy": 2,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 14,
      "racing_circuit": 14,
      "stadium": 9,
      "international_stadium": 27,
      "olympic_score": 16,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 12,
      "court": 2,
      "prosecution_office": 6,
      "police_station": 29,
      "police_car_fleet": 4812,
      "police_academy": 24,
      "corruption_index": 90,
      "security_index": 59,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 4,
          "sepeda_motor": 8,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 25,
          "helikopter_polisi": 29,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 6,
          "kamera_surveillance": 35,
          "pusat_forensik": 1
        },
        "response_time": 39,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 18,
    "tanks": 24,
    "aircraft": 39,
    "naval": 9,
    "air_base": 18,
    "naval_base": 1,
    "military_base": 22,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 31,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 25,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 30,
      "satisfaction": 52
    },
    "income": {
      "rate": 40,
      "satisfaction": 61
    },
    "customs": {
      "rate": 28,
      "satisfaction": 86
    },
    "environment": {
      "rate": 28,
      "satisfaction": 88
    },
    "other": {
      "rate": 28,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 78,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 17,
    "commercial": 17,
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
      "soft_power": 3,
      "hard_power": 4,
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
      { "partner": "Kolombia", "type": "Trade", "status": "Active" },
      { "partner": "Brazil", "type": "Trade", "status": "Active" },
      { "partner": "Peru", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Chile", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Venezuela", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 17,
    "education": 40,
    "security": 3,
    "finance": 22,
    "environment": 60
  }
};
