import { CountryData } from "../../types";

export const bahama: CountryData = {
  "name_en": "Bahamas",
  "capital": "Nassau",
  "name_id": "Bahama",
  "lon": -76,
  "lat": 24.25,
  "flag": "🇧🇸",
  "pop": "10M",
  "budget": 408000000000,
  "income": "320.000.000 / 320 M",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 10,
    "hydro_plant": 36,
    "solar_plant": 28,
    "thermal_plant": 30,
    "gas_plant": 1,
    "wind_plant": 13,
    "power_grid": 69,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 14,
    "subway": 40,
    "railway": 29,
    "highway": 7,
    "road_quality": 61,
    "sea_port": 13,
    "airport": 17,
    "bus_terminal": 21,
    "helipad": 14,
    "internet_coverage": 65,
    "tech_stack": 76,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 21,
    "uranium": 15,
    "coal": 40,
    "oil": 8,
    "gas": 20,
    "salt": 10,
    "nickel": 31,
    "lithium": 35,
    "aluminum": 15,
    "copper": 39,
    "rare_earth": 12,
    "iron_ore": 3,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 20,
    "car": 12,
    "motorcycle": 4,
    "smelter": 32,
    "concrete_cement": 15,
    "wood": 24,
    "mineral_water": 13,
    "sugar": 26,
    "bread": 33,
    "pharmacy": 11,
    "fertilizer": 29,
    "meat_processing": 19,
    "instant_noodle": 23,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 3,
    "poultry": 18,
    "dairy_cow": 13,
    "beef_cow": 17,
    "sheep_goat": 13,
    "shrimp": 1,
    "fish": 40,
    "shellfish": 28,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 14,
    "wheat": 6,
    "corn": 14,
    "tubers": 18,
    "soy": 23,
    "palm_oil": 9,
    "tea": 12,
    "coffee": 25,
    "cocoa": 26,
    "sugarcane": 31,
    "vegetables": 1,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 7,
    "barracks": 12,
    "armory": 5,
    "tank_hangar": 27,
    "military_academy": 13,
    "budget": 9,
    "personnel": 20085,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 36,
        "apc": 18,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 15,
        "kapal_destroyer": 14,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 16,
        "helikopter_serang": 5,
        "pesawat_pengintai": 2
      },
      "total_unit": 34,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 16,
    "military_air_base": 17,
    "military_naval_base": 10,
    "arms_factory": 36,
    "nuclear_status": false,
    "space_program": 36,
    "cyber_defense": 34,
    "intelligence": 34,
    "strategic_operations": {
      "attack_mission": 8,
      "spy_mission": 36,
      "sabotage_mission": 16,
      "territory_management": 7,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 30,
      "radar_network": 24,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 24,
      "elementary_school": 1,
      "middle_school": 4,
      "high_school": 18,
      "university": 23,
      "education_institute": 17,
      "laboratory": 25,
      "observatory": 24,
      "research_center": 33,
      "development_center": 2,
      "literacy": 94,
      "research_index": 0
    },
    "health": {
      "large_hospital": 29,
      "small_hospital": 6,
      "diagnostic_center": 40,
      "hospital_beds": 8792,
      "life_expectancy": 3,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 34,
      "racing_circuit": 26,
      "stadium": 28,
      "international_stadium": 28,
      "olympic_score": 18,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 25,
      "court": 3,
      "prosecution_office": 38,
      "police_station": 9,
      "police_car_fleet": 927,
      "police_academy": 18,
      "corruption_index": 70,
      "security_index": 78,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 21,
          "sepeda_motor": 4,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 39,
          "helikopter_polisi": 16,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 4,
          "kamera_surveillance": 6,
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
    "infantry": 15,
    "tanks": 34,
    "aircraft": 3,
    "naval": 24,
    "air_base": 37,
    "naval_base": 38,
    "military_base": 29,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 13,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 39,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 28,
      "satisfaction": 52
    },
    "income": {
      "rate": 39,
      "satisfaction": 61
    },
    "customs": {
      "rate": 32,
      "satisfaction": 86
    },
    "environment": {
      "rate": 38,
      "satisfaction": 88
    },
    "other": {
      "rate": 32,
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
    "residential": 4,
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
      "soft_power": 37,
      "hard_power": 36,
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
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Kanada", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Meksiko", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Kuba", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 19,
    "education": 22,
    "security": 8,
    "finance": 13,
    "environment": 60
  }
};
