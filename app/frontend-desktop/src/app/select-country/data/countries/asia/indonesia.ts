import { CountryData } from "../../types";

export const indonesia: CountryData = {
  "name_en": "Indonesia",
  "capital": "Jakarta",
  "name_id": "Indonesia",
  "lon": 120,
  "lat": -5,
  "flag": "🇮🇩",
  "pop": 278360115,
  "budget": 13807,
  "income": "39448",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 38,
    "hydro_plant": 19,
    "solar_plant": 27,
    "thermal_plant": 29,
    "gas_plant": 24,
    "wind_plant": 1,
    "power_grid": 54,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 22,
    "subway": 34,
    "railway": 17,
    "highway": 6,
    "road_quality": 95,
    "sea_port": 3,
    "airport": 30,
    "bus_terminal": 16,
    "helipad": 2,
    "internet_coverage": 79,
    "tech_stack": 92,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

 "sector_extraction": {
    "gold": 35,
    "uranium": 5,
    "coal": 6,
    "oil": 20,
    "gas": 17,
    "salt": 8,
    "nickel": 18,
    "lithium": 17,
    "aluminum": 20,
    "copper": 21,
    "rare_earth": 1,
    "iron_ore": 7,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

 "sector_manufacturing": {
    "semiconductor": 33,
    "car": 6,
    "motorcycle": 30,
    "smelter": 38,
    "concrete_cement": 38,
    "wood": 39,
    "mineral_water": 14,
    "sugar": 5,
    "bread": 17,
    "pharmacy": 14,
    "fertilizer": 20,
    "meat_processing": 7,
    "instant_noodle": 16,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

 "sector_livestock": {
    "chicken": 1,
    "poultry": 5,
    "dairy_cow": 14,
    "beef_cow": 17,
    "sheep_goat": 10,
    "shrimp": 27,
    "fish": 13,
    "shellfish": 34,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

 "sector_agriculture": {
    "rice": 29,
    "wheat": 15,
    "corn": 15,
    "tubers": 1,
    "soy": 14,
    "palm_oil": 31,
    "tea": 24,
    "coffee": 10,
    "cocoa": 34,
    "sugarcane": 12,
    "vegetables": 38,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

 "sector_defense": {
    "prison": 9,
    "barracks": 34,
    "armory": 39,
    "tank_hangar": 7,
    "military_academy": 23,
    "budget": 137801,
    "personnel": 17457,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 31,
        "apc": 9,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 29,
        "kapal_destroyer": 40,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 8,
        "helikopter_serang": 8,
        "pesawat_pengintai": 2
      },
      "total_unit": 40,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

 "sector_military_strategic": {
    "command_center": 7,
    "military_air_base": 37,
    "military_naval_base": 11,
    "arms_factory": 21,
    "nuclear_status": false,
    "space_program": 13,
    "cyber_defense": 39,
    "intelligence": 13,
    "strategic_operations": {
      "attack_mission": 20,
      "spy_mission": 39,
      "sabotage_mission": 23,
      "territory_management": 40,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 21,
      "radar_network": 36,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

 "sector_social": {
    "education": {
      "kindergarten": 27,
      "elementary_school": 31,
      "middle_school": 21,
      "high_school": 38,
      "university": 37,
      "education_institute": 24,
      "laboratory": 10,
      "observatory": 12,
      "research_center": 38,
      "development_center": 18,
      "literacy": 65,
      "research_index": 0
    },
    "health": {
      "large_hospital": 3,
      "small_hospital": 27,
      "diagnostic_center": 24,
      "hospital_beds": 9649,
      "life_expectancy": 27,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 35,
      "racing_circuit": 35,
      "stadium": 37,
      "international_stadium": 11,
      "olympic_score": 4,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 27,
      "court": 26,
      "prosecution_office": 12,
      "police_station": 7,
      "police_car_fleet": 7586,
      "police_academy": 29,
      "corruption_index": 73,
      "security_index": 78,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 23,
          "sepeda_motor": 9,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 8,
          "helikopter_polisi": 4,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 36,
          "kamera_surveillance": 15,
          "pusat_forensik": 1
        },
        "response_time": 1,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

 "military": {
    "infantry": 3,
    "tanks": 37,
    "aircraft": 38,
    "naval": 36,
    "air_base": 22,
    "naval_base": 20,
    "military_base": 31,
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
      "rate": 27,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 15,
      "satisfaction": 52
    },
    "income": {
      "rate": 34,
      "satisfaction": 61
    },
    "customs": {
      "rate": 40,
      "satisfaction": 86
    },
    "environment": {
      "rate": 29,
      "satisfaction": 88
    },
    "other": {
      "rate": 19,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

 "demand": {
    "satisfaction": 83,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 36,
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
      "soft_power": 8,
      "hard_power": 7,
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
      { "partner": "Thailand", "type": "Trade", "status": "Active" },
      { "partner": "Malaysia", "type": "Trade", "status": "Active" },
      { "partner": "Filipina", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Vietnam", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

 "ministries": {
    "health": 37,
    "education": 19,
    "security": 9,
    "finance": 2,
    "environment": 60
  }
};
