"use client"

import { gameStorage } from "../../../../../gamestorage";
import { formatGameDate } from "../../../../../data/time/gameTime";
import { budgetStorage } from "../../budget";
import { inboxStorage } from "../../../../inbox/inboxStorage";

export interface Acara {
  id: string;
  name: string;
  description: string;
  cost: number;
  happinessBoost: number;
  durationDays: number; // New
  cooldownDays: number;
  icon: string;
  category: "Budaya" | "Olahraga" | "Sosial" | "Militer";
}

export const DATA_ACARA: Acara[] = [
  {
    id: "konser",
    name: "Konser Musik Nasional",
    description: "Menyelenggarakan konser musik besar yang menampilkan artis papan atas untuk hiburan rakyat.",
    cost: 10000,
    happinessBoost: 1,
    durationDays: 1,
    cooldownDays: 30,
    icon: "🎸",
    category: "Budaya"
  },
  {
    id: "karnaval",
    name: "Karnaval Rakyat & Budaya",
    description: "Parade jalanan yang meriah dengan kostum dan kendaraan hias dari berbagai daerah.",
    cost: 25000,
    happinessBoost: 5,
    durationDays: 5,
    cooldownDays: 60,
    icon: "👺",
    category: "Budaya"
  },
  {
    id: "rugbi",
    name: "Kejuaraan Rugbi Internasional",
    description: "Tuan rumah turnamen rugbi bergengsi untuk membangkitkan semangat sportivitas.",
    cost: 75000,
    happinessBoost: 10,
    durationDays: 40,
    cooldownDays: 120,
    icon: "🏉",
    category: "Olahraga"
  },
  {
    id: "olimpiade",
    name: "Penyelenggaraan Olimpiade",
    description: "Menjadi tuan rumah pesta olahraga terbesar di dunia. Membutuhkan biaya besar namun dampak prestise sangat tinggi.",
    cost: 200000,
    happinessBoost: 15,
    durationDays: 20,
    cooldownDays: 1460,
    icon: "🏆",
    category: "Olahraga"
  },
  {
    id: "parade_militer",
    name: "Parade Militer Strategis",
    description: "Unjuk kekuatan pertahanan dan alutsista pada hari nasional untuk memperkuat rasa bangga.",
    cost: 500000,
    happinessBoost: 20,
    durationDays: 7,
    cooldownDays: 180,
    icon: "🎖️",
    category: "Militer"
  },
  {
    id: "fifa_world_cup",
    name: "Piala Dunia FIFA",
    description: "Menyelenggarakan turnamen sepak bola paling bergengsi di planet bumi.",
    cost: 2500000,
    happinessBoost: 100,
    durationDays: 30,
    cooldownDays: 1460,
    icon: "⚽",
    category: "Olahraga"
  }
];

const STORAGE_KEY = "em4_acara_history";

export interface AcaraHistory {
  acaraId: string;
  executedAt: number; // Timestamp
  gameDate: string;
}

export const acaraStorage = {
  getHistory: (): AcaraHistory[] => {
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  },

  saveHistory: (history: AcaraHistory[]) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    window.dispatchEvent(new Event('acara_updated'));
  },

  executeAcara: (acaraId: string, gameDate: Date): boolean => {
    const acara = DATA_ACARA.find(a => a.id === acaraId);
    if (!acara) return false;

    // Check budget
    const currentBudget = budgetStorage.getBudget();
    if (currentBudget < acara.cost) return false;

    // Save history
    const history = acaraStorage.getHistory();
    history.push({
      acaraId,
      executedAt: Date.now(),
      gameDate: formatGameDate(gameDate)
    });
    acaraStorage.saveHistory(history);

    // Deduct budget
    budgetStorage.updateBudget(-acara.cost);

    // Send Inbox Message
    inboxStorage.addMessage({
      source: "Kementerian Koordinator Bidang Pembangunan Manusia dan Kebudayaan",
      subject: `Penyelenggaraan ${acara.name}`,
      priority: 'high',
      time: formatGameDate(gameDate),
      content: `Penyelenggaraan ${acara.name} telah resmi dimulai. Acara ini dijadwalkan berlangsung selama ${acara.durationDays} hari dan diharapkan dapat meningkatkan kepuasan rakyat sebesar ${acara.happinessBoost}%. Biaya penyelenggaraan sebesar ${acara.cost.toLocaleString('id-ID')} telah dipotong dari anggaran negara.`
    });

    return true;
  },

  getActiveStatus: (acaraId: string, currentGameDate: Date): { isActive: boolean; daysLeft: number; progress: number } => {
    const history = acaraStorage.getHistory();
    const lastExecution = [...history].reverse().find(h => h.acaraId === acaraId);
    
    if (!lastExecution) return { isActive: false, daysLeft: 0, progress: 0 };

    const acara = DATA_ACARA.find(a => a.id === acaraId);
    if (!acara) return { isActive: false, daysLeft: 0, progress: 0 };

    const [day, month, year] = lastExecution.gameDate.split('-').map(Number);
    const startDate = new Date(year, month - 1, day);
    
    const diffTime = currentGameDate.getTime() - startDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    const isActive = diffDays < acara.durationDays;
    const progress = Math.min(100, Math.max(0, (diffDays / acara.durationDays) * 100));
    const daysLeft = Math.max(0, acara.durationDays - diffDays);

    return { isActive, daysLeft, progress };
  },

  getCooldownStatus: (acaraId: string, currentGameDate: Date): { onCooldown: boolean; daysRemaining: number } => {
    const history = acaraStorage.getHistory();
    const lastExecution = [...history].reverse().find(h => h.acaraId === acaraId);
    
    if (!lastExecution) return { onCooldown: false, daysRemaining: 0 };

    const acara = DATA_ACARA.find(a => a.id === acaraId);
    if (!acara) return { onCooldown: false, daysRemaining: 0 };

    // Approximation: actual game date logic depends on how it's stored
    // For now, let's use a simple date diff if possible, or just a rough estimate
    // Ideally we should parse lastExecution.gameDate
    const [day, month, year] = lastExecution.gameDate.split('-').map(Number);
    const lastDate = new Date(year, month - 1, day);
    
    const diffTime = currentGameDate.getTime() - lastDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    const remaining = acara.cooldownDays - diffDays;
    return {
      onCooldown: remaining > 0,
      daysRemaining: Math.max(0, remaining)
    };
  },

  getEndDate: (executedGameDate: string, durationDays: number): string => {
    const [day, month, year] = executedGameDate.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + durationDays);
    return formatGameDate(date);
  }
};
