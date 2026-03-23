import { CountryData } from "../../types";

export const australia: CountryData = {
  "name_en": "Australia",
  "capital": "Canberra",
  "name_id": "Australia",
  "lon": 149.13,
  "lat": -35.28,
  "flag": "🇦🇺",
  "pop": "22M",
  "budget": 62842,
  "income": "62.842 / 62842 M",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 24,
    "hydro_plant": 23,
    "solar_plant": 14,
    "thermal_plant": 35,
    "gas_plant": 23,
    "wind_plant": 16,
    "power_grid": 93,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 40,
    "subway": 13,
    "railway": 4,
    "highway": 37,
    "road_quality": 94,
    "sea_port": 37,
    "airport": 34,
    "bus_terminal": 25,
    "helipad": 26,
    "internet_coverage": 62,
    "tech_stack": 73,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 38,
    "uranium": 28,
    "coal": 29,
    "oil": 35,
    "gas": 14,
    "salt": 27,
    "nickel": 33,
    "lithium": 39,
    "aluminum": 2,
    "copper": 22,
    "rare_earth": 10,
    "iron_ore": 26,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 28,
    "car": 21,
    "motorcycle": 38,
    "smelter": 35,
    "concrete_cement": 7,
    "wood": 10,
    "mineral_water": 4,
    "sugar": 9,
    "bread": 22,
    "pharmacy": 3,
    "fertilizer": 16,
    "meat_processing": 1,
    "instant_noodle": 27,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 29,
    "poultry": 18,
    "dairy_cow": 13,
    "beef_cow": 6,
    "sheep_goat": 30,
    "shrimp": 16,
    "fish": 17,
    "shellfish": 7,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 27,
    "wheat": 35,
    "corn": 6,
    "tubers": 1,
    "soy": 16,
    "palm_oil": 33,
    "tea": 38,
    "coffee": 35,
    "cocoa": 27,
    "sugarcane": 39,
    "vegetables": 5,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 19,
    "barracks": 1,
    "armory": 4,
    "tank_hangar": 20,
    "military_academy": 28,
    "budget": 62842,
    "personnel": 5646,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 3,
        "apc": 36,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 27,
        "kapal_destroyer": 39,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 21,
        "helikopter_serang": 36,
        "pesawat_pengintai": 2
      },
      "total_unit": 37,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 15,
    "military_air_base": 10,
    "military_naval_base": 26,
    "arms_factory": 14,
    "nuclear_status": false,
    "space_program": 11,
    "cyber_defense": 25,
    "intelligence": 20,
    "strategic_operations": {
      "attack_mission": 9,
      "spy_mission": 17,
      "sabotage_mission": 36,
      "territory_management": 1,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 3,
      "radar_network": 18,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 7,
      "elementary_school": 15,
      "middle_school": 20,
      "high_school": 33,
      "university": 29,
      "education_institute": 27,
      "laboratory": 20,
      "observatory": 17,
      "research_center": 8,
      "development_center": 33,
      "literacy": 50,
      "research_index": 0
    },
    "health": {
      "large_hospital": 25,
      "small_hospital": 16,
      "diagnostic_center": 12,
      "hospital_beds": 4286,
      "life_expectancy": 26,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 11,
      "racing_circuit": 12,
      "stadium": 33,
      "international_stadium": 12,
      "olympic_score": 7,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 14,
      "court": 21,
      "prosecution_office": 16,
      "police_station": 9,
      "police_car_fleet": 1387,
      "police_academy": 35,
      "corruption_index": 50,
      "security_index": 80,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 26,
          "sepeda_motor": 26,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 23,
          "helikopter_polisi": 3,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 8,
          "kamera_surveillance": 19,
          "pusat_forensik": 1
        },
        "response_time": 21,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 33,
    "tanks": 24,
    "aircraft": 37,
    "naval": 30,
    "air_base": 11,
    "naval_base": 10,
    "military_base": 16,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 3,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 17,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 11,
      "satisfaction": 52
    },
    "income": {
      "rate": 10,
      "satisfaction": 61
    },
    "customs": {
      "rate": 13,
      "satisfaction": 86
    },
    "environment": {
      "rate": 33,
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
    "satisfaction": 55,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 22,
    "commercial": 6,
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
      "soft_power": 6,
      "hard_power": 21,
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
      { "partner": "Selandia Baru", "type": "Trade", "status": "Active" },
      { "partner": "Fiji", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Papua Nugini", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 37,
    "education": 7,
    "security": 1,
    "finance": 14,
    "environment": 60
  }
};
