/**
 * AiDiplomacyService.ts (PROXY)
 */
import { RelationEngine } from "@/app/game/components/modals/1_info_strategis/8_Hubungan/RelationEngine";

export const AiDiplomacyService = {
    runDailyDrift: (userCountry?: string) => RelationEngine.processDailyUpdate(userCountry),
    proposeEmbassy: (proposedCountry: string) => RelationEngine.proposeEmbassy(proposedCountry),
    finalizeTreaty: (targetCountry: string, type: 'pact' | 'alliance' | 'trade' | 'embassy', durationYears?: number) => 
        RelationEngine.finalizeTreaty(targetCountry, type, durationYears)
};

export const processGlobalAiRelations = (userCountry?: string) => RelationEngine.processDailyUpdate(userCountry);
