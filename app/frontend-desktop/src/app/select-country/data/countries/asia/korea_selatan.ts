import { CountryData } from "../../types";

export const korea_selatan: CountryData = {
  "name_en": "South Korea",
  "capital": "Seoul",
  "name_id": "Korea Selatan",
  "lon": 127.5,
  "lat": 37,
  "flag": "🇰🇷",
  "pop": "10M",
  "budget": 17112,
  "income": "48893",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 30,
    "hydro_plant": 25,
    "solar_plant": 30,
    "thermal_plant": 33,
    "gas_plant": 20,
    "wind_plant": 2,
    "power_grid": 74,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 6,
    "subway": 10,
    "railway": 18,
    "highway": 34,
    "road_quality": 92,
    "sea_port": 14,
    "airport": 16,
    "bus_terminal": 25,
    "helipad": 34,
    "internet_coverage": 93,
    "tech_stack": 89,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 6,
    "uranium": 19,
    "coal": 5,
    "oil": 30,
    "gas": 23,
    "salt": 12,
    "nickel": 33,
    "lithium": 28,
    "aluminum": 15,
    "copper": 13,
    "rare_earth": 9,
    "iron_ore": 4,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 36,
    "car": 39,
    "motorcycle": 18,
    "smelter": 26,
    "concrete_cement": 37,
    "wood": 32,
    "mineral_water": 30,
    "sugar": 33,
    "bread": 19,
    "pharmacy": 27,
    "fertilizer": 20,
    "meat_processing": 11,
    "instant_noodle": 18,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 28,
    "poultry": 9,
    "dairy_cow": 23,
    "beef_cow": 1,
    "sheep_goat": 27,
    "shrimp": 3,
    "fish": 19,
    "shellfish": 9,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 39,
    "wheat": 10,
    "corn": 40,
    "tubers": 32,
    "soy": 33,
    "palm_oil": 13,
    "tea": 5,
    "coffee": 17,
    "cocoa": 3,
    "sugarcane": 26,
    "vegetables": 27,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 27,
    "barracks": 22,
    "armory": 7,
    "tank_hangar": 14,
    "military_academy": 38,
    "budget": 61633,
    "personnel": 10626,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 5,
        "apc": 5,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 12,
        "kapal_destroyer": 27,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 7,
        "helikopter_serang": 34,
        "pesawat_pengintai": 2
      },
      "total_unit": 5,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 11,
    "military_air_base": 2,
    "military_naval_base": 33,
    "arms_factory": 24,
    "nuclear_status": false,
    "space_program": 13,
    "cyber_defense": 26,
    "intelligence": 35,
    "strategic_operations": {
      "attack_mission": 10,
      "spy_mission": 29,
      "sabotage_mission": 37,
      "territory_management": 35,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 8,
      "radar_network": 34,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 31,
      "elementary_school": 28,
      "middle_school": 3,
      "high_school": 18,
      "university": 26,
      "education_institute": 9,
      "laboratory": 12,
      "observatory": 1,
      "research_center": 1,
      "development_center": 39,
      "literacy": 94,
      "research_index": 0
    },
    "health": {
      "large_hospital": 14,
      "small_hospital": 2,
      "diagnostic_center": 17,
      "hospital_beds": 1058,
      "life_expectancy": 39,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 30,
      "racing_circuit": 18,
      "stadium": 14,
      "international_stadium": 3,
      "olympic_score": 11,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 40,
      "court": 23,
      "prosecution_office": 27,
      "police_station": 35,
      "police_car_fleet": 8927,
      "police_academy": 35,
      "corruption_index": 74,
      "security_index": 83,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 17,
          "sepeda_motor": 28,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 26,
          "helikopter_polisi": 10,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 38,
          "kamera_surveillance": 40,
          "pusat_forensik": 1
        },
        "response_time": 6,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 17,
    "tanks": 34,
    "aircraft": 23,
    "naval": 28,
    "air_base": 1,
    "naval_base": 14,
    "military_base": 20,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 34,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 24,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 1,
      "satisfaction": 52
    },
    "income": {
      "rate": 1,
      "satisfaction": 61
    },
    "customs": {
      "rate": 38,
      "satisfaction": 86
    },
    "environment": {
      "rate": 26,
      "satisfaction": 88
    },
    "other": {
      "rate": 20,
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
    "residential": 7,
    "commercial": 9,
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
      "soft_power": 33,
      "hard_power": 29,
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
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Malaysia", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Filipina", "type": "Trade", "status": "Active" },
      { "partner": "Thailand", "type": "Trade", "status": "Active" },
      { "partner": "Indonesia", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Vietnam", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 7,
    "education": 34,
    "security": 9,
    "finance": 12,
    "environment": 60
  }
};
