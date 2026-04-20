import { AiDiplomacyService } from './services/AiDiplomacyService';
import { initializeMatrixData } from './services/MatrixHandler';
import { gameStorage } from '@/app/game/gamestorage';

/**
 * AI Global Diplomacy Engine
 * Logic untuk simulasi hubungan antar negara AI (NPC-to-NPC) dan AI-to-User.
 */

export const initAiDiplomacy = () => {
  console.log("AI Global Diplomacy Engine Initialized...");
  initializeMatrixData();
};

export const processGlobalAiRelations = async () => {
    const session = gameStorage.getSession();
    const userCountry = session?.country || "Indonesia";
    
    console.log(`Processing global NPC diplomacy (User: ${userCountry})...`);
    await AiDiplomacyService.runDailyDrift(userCountry);
};
