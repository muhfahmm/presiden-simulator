"use client"

import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";
import { gameStorage } from "@/app/game/gamestorage";
import { countries } from "@/app/database/data/negara/benua/index";

export type NuclearStatus = 'none' | 'constructing' | 'active';

export interface NuclearData {
  status: NuclearStatus;
  daysRemaining: number;
  initiationDate?: string;
  lastProcessedDate?: string;
  
  // Enrichment & Research
  uraniumPurity: number;      // 0-100%
  isEnriching: boolean;       // Manual toggle
  isAutoEnrich: boolean;      // Automation unlock
  wasteAmount: number;        // KG
  
  // Inventory
  tacticalWarheads: number;
  strategicWarheads: number;
  
  // Facility Levels
  labLevel: number;           // 1-3
  miniaturizationLevel: number; // 0-2 (Required for Strategic Warheads)
  securityLevel: number;      // 1-3 (Anti-Sabotage)
}

export const nuclearStorage = {
  getStorageKey: () => {
    if (typeof window === 'undefined') return "em_nuclear_program_data_default";
    const session = gameStorage.getSession() as any;
    const countryId = session?.country || "Indonesia";
    // Sanitize countryId for key safety
    const safeId = countryId.toLowerCase().replace(/\s+/g, '_');
    return `em_nuclear_data_${safeId}`;
  },
  
  getDefaultData: (status: NuclearStatus = 'none'): NuclearData => ({
    status,
    daysRemaining: status === 'active' ? 0 : 360,
    uraniumPurity: 0,
    isEnriching: false,
    isAutoEnrich: false,
    wasteAmount: 0,
    tacticalWarheads: 0,
    strategicWarheads: 0,
    labLevel: 1,
    miniaturizationLevel: 0,
    securityLevel: 1,
  }),

  clear: () => {
    if (typeof window !== "undefined") {
      const key = nuclearStorage.getStorageKey();
      localStorage.removeItem(key);
    }
  },

  getData: (): NuclearData => {
    if (typeof window === 'undefined') return nuclearStorage.getDefaultData();
    
    const key = nuclearStorage.getStorageKey();
    const stored = localStorage.getItem(key);
    
    if (stored) {
      try {
        const data = JSON.parse(stored);
        // Migrating old data if fields are missing
        return {
          ...data,
          uraniumPurity: data.uraniumPurity ?? 0,
          isEnriching: data.isEnriching ?? false,
          isAutoEnrich: data.isAutoEnrich ?? false,
          wasteAmount: data.wasteAmount ?? 0,
          tacticalWarheads: data.tacticalWarheads ?? 0,
          strategicWarheads: data.strategicWarheads ?? 0,
          labLevel: data.labLevel ?? 1,
          miniaturizationLevel: data.miniaturizationLevel ?? 0,
          securityLevel: data.securityLevel ?? 1,
        };
      } catch (e) {
        console.error("Failed to parse nuclear storage", e);
      }
    }

    // INITIALIZATION LOGIC: If no storage, check database for country's default status
    const session = gameStorage.getSession() as any;
    if (session) {
      const countryId = session.country || "Indonesia";
      const countryData = countries.find(c => 
        c.name_en === countryId || 
        c.name_id === countryId
      );

      // If country already has a nuclear program in the database/metadata (> 0%)
      const defaultStatus: NuclearStatus = (countryData?.militer_strategis?.operasi_strategis?.program_nuklir ?? 0) > 0 
        ? 'active' 
        : 'none';

      const initialData: NuclearData = {
        ...nuclearStorage.getDefaultData(defaultStatus),
        uraniumPurity: defaultStatus === 'active' ? 85 : 0, 
        wasteAmount: defaultStatus === 'active' ? 150 : 0,
        tacticalWarheads: defaultStatus === 'active' ? 2 : 0,
      };

      // Save initial state so it's persistent
      nuclearStorage.saveData(initialData);
      return initialData;
    }

    return nuclearStorage.getDefaultData();
  },

  saveData: (data: NuclearData) => {
    if (typeof window === 'undefined') return;
    const key = nuclearStorage.getStorageKey();
    localStorage.setItem(key, JSON.stringify(data));
    window.dispatchEvent(new Event('nuclear_storage_updated'));
  },

  initiate: (gameDate: Date) => {
    const data: NuclearData = {
      status: 'constructing',
      daysRemaining: 360,
      initiationDate: gameDate.toISOString(),
      lastProcessedDate: gameDate.toISOString(),
      uraniumPurity: 0,
      isEnriching: false,
      isAutoEnrich: false,
      wasteAmount: 0,
      tacticalWarheads: 0,
      strategicWarheads: 0,
      labLevel: 1,
      miniaturizationLevel: 0,
      securityLevel: 1,
    };
    nuclearStorage.saveData(data);
    
    // Add Inbox Message
    inboxStorage.addMessage({
      source: "Komando Strategis Nasional",
      subject: "☢️ Inisiasi Program Nuklir Berhasil",
      content: "Anggaran sebesar 50.000.000 GOLD telah dialokasikan. Pembangunan fasilitas riset dan pengayaan uranium telah dimulai secara resmi. Perkiraan waktu pembangunan: 360 Hari.",
      time: gameDate.toLocaleDateString('id-ID'),
      priority: 'high'
    });
  },

  updateProgress: (gameDate: Date) => {
    const data = nuclearStorage.getData();
    if (data.status === 'none') return;

    const currentDateStr = gameDate.toISOString().split('T')[0];
    const lastProcessedStr = data.lastProcessedDate ? new Date(data.lastProcessedDate).toISOString().split('T')[0] : null;

    if (currentDateStr === lastProcessedStr) return;

    // 1. CONSTRUCTION LOGIC
    if (data.status === 'constructing') {
      data.daysRemaining = Math.max(0, data.daysRemaining - 1);
      data.lastProcessedDate = gameDate.toISOString();

      if (data.daysRemaining === 0) {
        data.status = 'active';
        inboxStorage.addMessage({
          source: "Komando Strategis Nasional",
          subject: "🚀 Program Nuklir Telah Aktif",
          content: "Fasilitas riset dan pengayaan uranium telah selesai dibangun. Negara kini memiliki otoritas penuh untuk mengembangkan hulu ledak nuklir dan sistem ICBM.",
          time: gameDate.toLocaleDateString('id-ID'),
          priority: 'high'
        });
      }
    }

    // 2. ACTIVE PROGRAM LOGIC (Daily Operations)
    if (data.status === 'active') {
       data.lastProcessedDate = gameDate.toISOString();
       
       if (data.isEnriching) {
          let innovationMultiplier = 1;
          try {
            const { ideologyStorage } = require("../../../6_sosial_budaya/2_ideologi/ideologyStorage");
            const { KOMUNISME_INNOVATION_PENALTY } = require("../../../6_sosial_budaya/2_ideologi/logic/2_komunisme/2_minus/minus");
            const session = gameStorage.getSession() as any;
            const currentIdeology = ideologyStorage.getCurrentIdeology(session?.country || "Indonesia");
            if (currentIdeology === "Komunisme") innovationMultiplier = KOMUNISME_INNOVATION_PENALTY;
          } catch (e) {
            console.error("Ideology check failed in nuclearStorage", e);
          }

          // Enrichment Speed (scaled by Lab Level & Ideology)
          const gainPerDay = (0.1 * data.labLevel) * innovationMultiplier; 
          data.uraniumPurity = Math.min(100, data.uraniumPurity + gainPerDay);
          
          // Waste Generation
          data.wasteAmount += 0.5; // KG per day
          
          // Cost (Electricity representation)
          const maintenanceCost = 50000 * data.labLevel; 
          import("@/app/game/components/1_navbar/3_kas_negara").then(m => {
            m.budgetStorage.updateBudget(-maintenanceCost);
          });
       }
    }

    nuclearStorage.saveData(data);
  },

  getStatus: () => nuclearStorage.getData().status,
  getDaysRemaining: () => nuclearStorage.getData().daysRemaining
};
