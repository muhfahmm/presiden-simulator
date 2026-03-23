import { CountryData } from "../../types";

export const republik_dominika: CountryData = {
  "name_en": "Dominican Republic",
  "capital": "Santo Domingo",
  "name_id": "Republik dominika",
  "lon": -70.66666666,
  "lat": 19,
  "flag": "🇩🇴",
  "pop": "10M",
  "budget": "Rp 157 T",
  "income": "Rp 496 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 🏗️ INFRASTRUKTUR & KELISTRIKAN (20 Jenis)
  // =============================================================

  "infrastructure": {
    "nuclear_plant": 10,
    "hydro_plant": 29,
    "solar_plant": 38,
    "thermal_plant": 9,
    "gas_plant": 28,
    "wind_plant": 15,
    "power_grid": 73,
    "bicycle_path": 9,
    "subway": 21,
    "railway": 33,
    "highway": 23,
    "road_quality": 70,
    "sea_port": 6,
    "airport": 34,
    "bus_terminal": 11,
    "helipad": 36,
    "internet_coverage": 92,
    "tech_stack": 93,
    "water_access": 74
  },

  // =============================================================
  // ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 9,
    "uranium": 33,
    "coal": 4,
    "oil": 13,
    "gas": 38,
    "salt": 30,
    "nickel": 21,
    "lithium": 28,
    "aluminum": 3,
    "copper": 1,
    "rare_earth": 16,
    "iron_ore": 2,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 6,
    "car": 36,
    "motorcycle": 1,
    "smelter": 32,
    "concrete_cement": 3,
    "wood": 9,
    "mineral_water": 1,
    "sugar": 15,
    "bread": 24,
    "pharmacy": 13,
    "fertilizer": 7,
    "meat_processing": 4,
    "instant_noodle": 9,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 36,
    "poultry": 34,
    "dairy_cow": 22,
    "beef_cow": 15,
    "sheep_goat": 27,
    "shrimp": 16,
    "fish": 14,
    "shellfish": 39,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 20,
    "wheat": 40,
    "corn": 28,
    "tubers": 2,
    "soy": 26,
    "palm_oil": 37,
    "tea": 20,
    "coffee": 30,
    "cocoa": 37,
    "sugarcane": 27,
    "vegetables": 26,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 21,
    "barracks": 9,
    "armory": 32,
    "tank_hangar": 5,
    "military_academy": 10,
    "budget": 34,
    "personnel": 27397,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 57,
        "apc": 159,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 27,
        "kapal_destroyer": 169,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 150,
        "helikopter_serang": 184,
        "pesawat_pengintai": 2
      },
      "total_unit": 20,
      "readiness": 98
    }
  },

  // =============================================================
  // 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 7,
    "military_air_base": 18,
    "military_naval_base": 8,
    "arms_factory": 14,
    "nuclear_status": false,
    "space_program": 14,
    "cyber_defense": 7,
    "intelligence": 35,
    "strategic_operations": {
      "attack_mission": 24,
      "spy_mission": 17,
      "sabotage_mission": 30,
      "territory_management": 5,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 3,
      "radar_network": 1,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 10,
      "elementary_school": 13,
      "middle_school": 20,
      "high_school": 3,
      "university": 28,
      "education_institute": 20,
      "laboratory": 7,
      "observatory": 19,
      "research_center": 34,
      "development_center": 14,
      "literacy": 62,
      "research_index": 0
    },
    "health": {
      "large_hospital": 40,
      "small_hospital": 3,
      "diagnostic_center": 4,
      "hospital_beds": 6147,
      "life_expectancy": 26,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 28,
      "racing_circuit": 35,
      "stadium": 7,
      "international_stadium": 31,
      "olympic_score": 6,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 28,
      "court": 4,
      "prosecution_office": 6,
      "police_station": 12,
      "police_car_fleet": 3984,
      "police_academy": 4,
      "corruption_index": 85,
      "security_index": 84,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 2,
          "sepeda_motor": 26,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 15,
          "helikopter_polisi": 27,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 11,
          "kamera_surveillance": 6,
          "pusat_forensik": 1
        },
        "response_time": 31,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 25,
    "tanks": 5,
    "aircraft": 37,
    "naval": 10,
    "air_base": 36,
    "naval_base": 32,
    "military_base": 18,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 23,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 37,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 1,
      "satisfaction": 52
    },
    "income": {
      "rate": 28,
      "satisfaction": 61
    },
    "customs": {
      "rate": 12,
      "satisfaction": 86
    },
    "environment": {
      "rate": 6,
      "satisfaction": 88
    },
    "other": {
      "rate": 29,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 69,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 13,
    "commercial": 3,
    "industrial": 53
  },

  // =============================================================
  // 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL (16 Jenis)
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
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Kuba", "type": "Trade", "status": "Active" },
      { "partner": "Kanada", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Meksiko", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 20,
    "education": 20,
    "security": 9,
    "finance": 25,
    "environment": 60
  }
};
