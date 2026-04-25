import { getGlobalRelationMatrix, saveGlobalRelationMatrix, getNormalizedUser, normalizeId } from "./RelationMatrix";
import { dispatchRelationUpdate } from "./RelationEvents";
import { timeStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage";
import { embassyStorage } from '@/app/game/components/modals/2_diplomasi_hubungan/1_kedutaan/logic/embassyStorage';
import { inboxStorage } from '@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage';
import { nonAggressionStorage } from '@/app/game/components/modals/2_diplomasi_hubungan/2_pakta_non_agresi/logic/nonAggressionStorage';
import { aliansiStorage } from '@/app/game/components/modals/2_diplomasi_hubungan/3_aliansi_pertahanan/logic/aliansiStorage';
import { newsStorage } from '@/app/game/components/sidemenu/1_berita/newsStorage';
import { formatGameDate } from '@/app/game/components/1_navbar/5_navigasi_waktu/gameTime';
// import { runGeopoliticalDrift } from '@/app/game/components/AI_logic/7_AI_Geopolitik/2_mesin_diplomasi/drifter_hubungan';

export const RelationEngine = {
    _isProcessing: false,

    /**
     * Memicu simulasi harian (Daily Drift)
     */
    async processDailyUpdate(userCountry: string = "Indonesia") {
        if (timeStorage.getState().isPaused || this._isProcessing) return;

        // Run Client-Side Geopolitical AI Drift
        // runGeopoliticalDrift();

        this._isProcessing = true;
        const currentMatrix = getGlobalRelationMatrix();
        
        try {
            const gameDate = new Date(timeStorage.getState().gameDate);
            const isMonday = gameDate.getDay() === 1;

            console.log(`[RELATION-ENGINE] Running ${isMonday ? 'Full Cycle' : 'Daily Drift'}...`);

            const response = await fetch('/api/game/diplomacy/ai-global/drift', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    matrix: currentMatrix,
                    userCountry: userCountry,
                    fullCycle: isMonday 
                })
            });

            const data = await response.json();
            if (data.error) throw new Error(data.error);

            if (data.matrix) {
                saveGlobalRelationMatrix(data.matrix);
                
                // Process events returned by AI (Notifications, Pacts, etc.)
                if (Array.isArray(data.events) && data.events.length > 0) {
                    this._handleAiEvents(data.events, gameDate);
                }
            }

            console.log("[RELATION-ENGINE] Daily Simulation Success.");
        } catch (error) {
            console.error("[RELATION-ENGINE] Brain Simulation Failed:", error);
        } finally {
            this._isProcessing = false;
        }
    },

    /**
     * Mengajukan pembangunan Kedutaan Besar ke suatu negara.
     */
    async proposeEmbassy(proposedCountry: string) {
        const userCountry = getNormalizedUser();
        const currentMatrix = getGlobalRelationMatrix();
        
        try {
            const response = await fetch('/api/game/diplomacy/ai-global/propose-embassy', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    matrix: currentMatrix,
                    userCountry: userCountry,
                    proposedCountry: proposedCountry
                })
            });

            const data = await response.json();
            if (data.error) throw new Error(data.error);

            if (data.matrix) {
                saveGlobalRelationMatrix(data.matrix);
                if (Array.isArray(data.events)) {
                    this._handleAiEvents(data.events, new Date(timeStorage.getState().gameDate));
                }
            }
        } catch (error) {
            console.error("[RELATION-ENGINE] Failed to propose embassy:", error);
        }
    },

    /**
     * Menyelesaikan perjanjian (Aliansi/Pakta/Dagang/Kedubes) setelah disetujui User.
     */
    finalizeTreaty(targetCountry: string, type: 'pact' | 'alliance' | 'trade' | 'embassy', durationYears: number = 5) {
        const matrix = getGlobalRelationMatrix();
        const normalizedTarget = normalizeId(targetCountry);
        const userCountry = getNormalizedUser();
        
        if (!matrix[normalizedTarget]) matrix[normalizedTarget] = {};
        const npcRelations = matrix[normalizedTarget];
        
        if (!npcRelations[userCountry]) {
            npcRelations[userCountry] = { s: 50, e: 0, a: 0, p: 0, t: 0 };
        }

        const rel = npcRelations[userCountry];
        const gameDate = timeStorage.getState().gameDate;
        const startDate = new Date(gameDate).toISOString();
        const endDate = new Date(gameDate);
        endDate.setFullYear(endDate.getFullYear() + durationYears);
        const endDateStr = endDate.toISOString();

        if (type === 'embassy') {
            rel.e = 1;
            embassyStorage.updateEmbassyStatus(normalizedTarget, 'completed');
        } else if (type === 'pact') {
            rel.p = 1;
            nonAggressionStorage.updateStatus(normalizedTarget, { 
                status: 'active', startDate, endDate: endDateStr, durationYears,
                rules: { ceasefire: true, dmz: true }
            });
        } else if (type === 'alliance') {
            rel.a = 1;
            aliansiStorage.updateStatus(normalizedTarget, { 
                status: 'active', startDate, endDate: endDateStr, durationYears,
                perks: { militaryAid: true, jointExercise: true, intelSharing: true }
            });
        } else if (type === 'trade') {
            rel.t = 1;
        }

        saveGlobalRelationMatrix(matrix);
    },

    /**
     * Menangani event yang dikirim oleh AI Brain
     */
    _handleAiEvents(events: any[], gameDate: Date) {
        events.forEach(event => {
            const type = event.type || "";
            const isGlobalNews = type === 'GLOBAL_NEWS';
            const dateStr = formatGameDate(gameDate);

            if (isGlobalNews) {
                if (newsStorage.canAddWeekly('ai_global', gameDate)) {
                    newsStorage.addNews({
                        source: event.source || "Intelijen",
                        category: 'global',
                        subject: event.subject,
                        content: event.content,
                        time: dateStr,
                        priority: 'low'
                    });
                }
            } else {
                // Handle inbox notifications for proposals
                const category = type.toLowerCase().includes('trade') ? 'trade' :
                                 type.toLowerCase().includes('pact') ? 'pact' :
                                 type.toLowerCase().includes('alliance') ? 'alliance' :
                                 type.toLowerCase().includes('embassy') ? 'embassy' : 'intelligence';

                if (inboxStorage.canAddWeekly(category, gameDate)) {
                    inboxStorage.addMessage({
                        source: `${category.toUpperCase()} (${event.source || "Dunia"})`,
                        category: category,
                        isProposal: type.includes('OFFER') || type.includes('PROPOSAL'),
                        subject: event.subject,
                        content: event.content,
                        time: dateStr,
                        priority: 'high',
                        metadata: { id: event.source, type: category }
                    });
                }
            }
        });
    }
};
