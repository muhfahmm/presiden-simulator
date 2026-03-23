import { CountryData } from "../../types";

export const taiwan: CountryData = {
  "name_en": "Taiwan",
  "capital": "Taipei",
  "name_id": "Taiwan",
  "lon": 121,
  "lat": 23.5,
  "flag": "🇹🇼",
  "pop": "10M",
  "budget": 7681,
  "income": "21946",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 1,
    "hydro_plant": 12,
    "solar_plant": 38,
    "thermal_plant": 29,
    "gas_plant": 28,
    "wind_plant": 37,
    "power_grid": 57,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 8,
    "subway": 2,
    "railway": 27,
    "highway": 25,
    "road_quality": 65,
    "sea_port": 39,
    "airport": 9,
    "bus_terminal": 18,
    "helipad": 23,
    "internet_coverage": 95,
    "tech_stack": 62,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 4,
    "uranium": 26,
    "coal": 17,
    "oil": 37,
    "gas": 25,
    "salt": 18,
    "nickel": 24,
    "lithium": 18,
    "aluminum": 38,
    "copper": 24,
    "rare_earth": 2,
    "iron_ore": 26,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 32,
    "car": 5,
    "motorcycle": 22,
    "smelter": 5,
    "concrete_cement": 31,
    "wood": 21,
    "mineral_water": 24,
    "sugar": 31,
    "bread": 7,
    "pharmacy": 7,
    "fertilizer": 16,
    "meat_processing": 10,
    "instant_noodle": 31,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 18,
    "poultry": 34,
    "dairy_cow": 24,
    "beef_cow": 35,
    "sheep_goat": 40,
    "shrimp": 28,
    "fish": 2,
    "shellfish": 38,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 5,
    "wheat": 24,
    "corn": 26,
    "tubers": 22,
    "soy": 39,
    "palm_oil": 13,
    "tea": 10,
    "coffee": 2,
    "cocoa": 38,
    "sugarcane": 11,
    "vegetables": 34,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 22,
    "barracks": 8,
    "armory": 4,
    "tank_hangar": 5,
    "military_academy": 36,
    "budget": 28103,
    "personnel": 14057,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 114,
        "apc": 68,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 7,
        "kapal_destroyer": 170,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 38,
        "helikopter_serang": 17,
        "pesawat_pengintai": 2
      },
      "total_unit": 9,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 2,
    "military_air_base": 26,
    "military_naval_base": 30,
    "arms_factory": 25,
    "nuclear_status": false,
    "space_program": 19,
    "cyber_defense": 12,
    "intelligence": 24,
    "strategic_operations": {
      "attack_mission": 20,
      "spy_mission": 10,
      "sabotage_mission": 22,
      "territory_management": 26,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 2,
      "radar_network": 2,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 38,
      "elementary_school": 25,
      "middle_school": 21,
      "high_school": 40,
      "university": 37,
      "education_institute": 9,
      "laboratory": 26,
      "observatory": 14,
      "research_center": 26,
      "development_center": 30,
      "literacy": 93,
      "research_index": 0
    },
    "health": {
      "large_hospital": 8,
      "small_hospital": 24,
      "diagnostic_center": 34,
      "hospital_beds": 3992,
      "life_expectancy": 17,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 10,
      "racing_circuit": 18,
      "stadium": 9,
      "international_stadium": 16,
      "olympic_score": 11,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 30,
      "court": 17,
      "prosecution_office": 6,
      "police_station": 10,
      "police_car_fleet": 6896,
      "police_academy": 15,
      "corruption_index": 72,
      "security_index": 57,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 31,
          "sepeda_motor": 29,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 13,
          "helikopter_polisi": 13,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 14,
          "kamera_surveillance": 19,
          "pusat_forensik": 1
        },
        "response_time": 11,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 27,
    "tanks": 7,
    "aircraft": 18,
    "naval": 22,
    "air_base": 31,
    "naval_base": 18,
    "military_base": 4,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 1,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 14,
      "satisfaction": 67,
      "revenue": 207
    },
    "corporate": {
      "rate": 12,
      "satisfaction": 52,
      "revenue": 98
    },
    "income": {
      "rate": 8,
      "satisfaction": 61,
      "revenue": 155
    },
    "customs": {
      "rate": 31,
      "satisfaction": 86,
      "revenue": 667
    },
    "environment": {
      "rate": 26,
      "satisfaction": 88,
      "revenue": 594
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 39 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 116 },
    "other": {
      "rate": 39,
      "satisfaction": 93,
      "revenue": 523
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 59,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 20,
    "commercial": 22,
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
      "soft_power": 14,
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
      { "partner": "Malaysia", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Thailand", "type": "Trade", "status": "Active" },
      { "partner": "Indonesia", "type": "Trade", "status": "Active" },
      { "partner": "Vietnam", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Filipina", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 40,
    "education": 25,
    "security": 26,
    "finance": 1,
    "environment": 60
  }
};
