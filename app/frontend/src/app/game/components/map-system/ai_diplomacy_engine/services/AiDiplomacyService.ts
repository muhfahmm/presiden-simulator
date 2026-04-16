import { getGlobalRelationMatrix, saveGlobalRelationMatrix } from './MatrixHandler';
import { inboxStorage } from '@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage';
import { newsStorage } from '@/app/game/components/sidemenu/1_berita/newsStorage';
import { budgetStorage } from '@/app/game/components/1_navbar/3_kas_negara';
import { relationStorage } from '../../modals_detail_negara/2_diplomasi_hubungan/1_kedutaan/logic/relationStorage';
import { nonAggressionStorage } from '../../modals_detail_negara/2_diplomasi_hubungan/2_pakta_non_agresi/logic/nonAggressionStorage';
import { aliansiStorage } from '../../modals_detail_negara/2_diplomasi_hubungan/3_aliansi_pertahanan/logic/aliansiStorage';
import { embassyStorage } from '../../modals_detail_negara/2_diplomasi_hubungan/1_kedutaan/logic/embassyStorage';
import { tradeStorage } from '@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/TradeStorage';
import { timeStorage } from '@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage';
import { formatGameDate } from '@/app/game/components/1_navbar/5_navigasi_waktu/gameTime';

/**
 * AiDiplomacyService
 * Jembatan antara Frontend (TS) dan Otak AI (Python).
 */
export const AiDiplomacyService = {
    _isProcessing: false, // Internal lock to prevent overlap

    /**
     * Menjalankan simulasi harian masal untuk seluruh dunia.
     */
    async runDailyDrift(userCountry: string = "Indonesia") {
        // CEK 1: Jangan jalan jika game sedang PAUSE atau sedang proses lain
        if (timeStorage.getState().isPaused || this._isProcessing) return;

        this._isProcessing = true;
        const currentMatrix = getGlobalRelationMatrix();
        const normalizedUser = userCountry.toLowerCase().trim();
        
        try {
            // Ambil data negara untuk mencocokkan mitra dagang
            const { collectCountriesData } = await import('@/app/game/components/AI_logic/4_AI_Ekonomi/1_perdagangan/sistem_perdagangan_AI/services/AiTradeService');
            const countriesData = collectCountriesData() || {};

            const response = await fetch('/api/game/diplomacy/ai-global/drift', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    matrix: currentMatrix,
                    userCountry: userCountry,
                    countriesData: countriesData
                })
            });

            const data = await response.json();
            if (data.error) throw new Error(data.error);

            // CEK 2: Jika game di-pause saat sedang menunggu response dari Python, batalkan update UI
            if (timeStorage.getState().isPaused) {
                console.log("Game paused during diplomacy processing. Aborting updates.");
                return;
            }

            // 1. Sinkronisasi Data Matrix ke Seluruh Sistem UI (MASAL)
            if (data.matrix) {
                saveGlobalRelationMatrix(data.matrix);

                const updatedMatrix = data.matrix;
                const liveRelationData = relationStorage.getRelationData();
                let hasChanges = false;

                // Loop melalui SEMUA negara yang ada di Matrix hasil simulasi
                Object.keys(updatedMatrix).forEach(sourceId => {
                    const relations = updatedMatrix[sourceId];

                    // 1. Sinkronisasi SEMUA hubungan antar AI (NPC-to-NPC) dan PLAYER (User-to-NPC / NPC-to-User)
                    Object.keys(relations).forEach(targetId => {
                        const relData = relations[targetId];
                        const rawScore = relData.s;
                        const newScore = Math.round(rawScore * 10000) / 10000;

                        // Gunakan composite key format di localStorage agar tidak saling tindih
                        const compositeKey = `${sourceId}:${targetId}`;
                        
                        if (liveRelationData[compositeKey] !== newScore) {
                            liveRelationData[compositeKey] = newScore;
                            hasChanges = true;

                            // Jika source atau target adalah player, pancing UI untuk update
                            if (sourceId === normalizedUser || targetId === normalizedUser) {
                                window.dispatchEvent(new CustomEvent("relation_status_updated", { 
                                    detail: { 
                                        targetCountry: targetId, 
                                        sourceCountry: sourceId, 
                                        newScore 
                                    } 
                                }));
                            }
                        }

                        // KHUSUS logika sinkronisasi status (Embassy, Pact, Alliance, Trade) MENUJU PEMAIN
                        if (targetId === normalizedUser && sourceId !== normalizedUser) {
                           // b. Update Pakta Non-Agresi (p)
                           if (relData.p === 1 && nonAggressionStorage.getStatus(sourceId) !== 'active') {
                               nonAggressionStorage.updateStatus(sourceId, { status: 'active' });
                           }

                           // c. Update Aliansi Pertahanan (a)
                           if (relData.a === 1 && aliansiStorage.getStatus(sourceId) !== 'active') {
                               aliansiStorage.updateStatus(sourceId, { status: 'active' });
                           }

                           // d. Update Kerjasama Dagang (t)
                           if (relData.t === 1) {
                               const currentTrade = tradeStorage.getTrade(sourceId);
                               if (!currentTrade || currentTrade.status !== 'active') {
                                   tradeStorage.saveTrade(sourceId, { status: 'active', startDate: new Date().toISOString() });
                               }
                           }
                        }
                    });
                });

                if (hasChanges) {
                    // Simpan hasil update masal ke LocalStorage Utama
                    localStorage.setItem("em2_relation_scores", JSON.stringify(liveRelationData));
                    // Pancing UI (halaman Geopolitik & Map) agar Render Ulang
                    window.dispatchEvent(new Event("relation_storage_updated"));
                }
            }

            // 2. Berikan Notifikasi Event Global
            const gameDate = timeStorage.getState().gameDate;
            if (Array.isArray(data.events)) {
                data.events.forEach((event: any) => {
                    const type = event.type || "";
                    const isGlobalNews = type === 'GLOBAL_NEWS';
                    const isGrant = type === 'NPC_GRANT_TO_USER';
                    const isTrade = type === 'USER_TRADE_OFFER';
                    const isPact = type === 'USER_PACT_OFFER';
                    const isAlliance = type === 'USER_ALLIANCE_OFFER';
                    const isEmbassy = type === 'USER_EMBASSY_OFFER' || type === 'USER_EMBASSY_ACCEPTED' || type === 'USER_EMBASSY_REJECTED';
                    
                    if (isGlobalNews) {
                        const dateStr = formatGameDate(gameDate);
                        // Check Weekly Limit: Max 10 AI news per week
                        if (newsStorage.canAddWeekly('ai_global', gameDate) && newsStorage.canAddNews('global', dateStr)) {
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
                        // Check Weekly Limit: Max 2 per category per week
                        const category = isGrant ? 'finance' : 
                                         isTrade ? 'trade' : 
                                         isPact ? 'pact' :
                                         isAlliance ? 'alliance' : 
                                         isEmbassy ? 'embassy' : 'intelligence';

                        if (inboxStorage.canAddWeekly(category, gameDate)) {
                            const safeSource = (event.source || "Negara").toUpperCase();
                            inboxStorage.addMessage({
                                source: isGrant ? `Dinas Keuangan (${safeSource})` : 
                                        isTrade ? `Kementerian Perdagangan (${safeSource})` :
                                        isPact ? `Kementerian Pertahanan (${safeSource})` :
                                        isAlliance ? `Markas Besar Aliansi (${safeSource})` :
                                        isEmbassy ? `Kementerian Luar Negeri (${safeSource})` :
                                        `Intelijen (${safeSource})`,
                                category: category,
                                isProposal: isGrant || isTrade || isPact || isAlliance || isEmbassy,
                                subject: isEmbassy ? event.subject : `[DUNIA] ${event.subject}`,
                                content: event.content,
                                time: formatGameDate(gameDate),
                                priority: (isGrant || isPact || isAlliance || isEmbassy) ? 'high' : 'medium'
                            });
                        }
                    }
                });
            }

            // 3. Masukkan Hibah Dana (jika ada)
            if (data.budgetGain && data.budgetGain > 0) {
                budgetStorage.updateBudget(data.budgetGain);
            }
        } catch (error) {
            console.error("Critical Failure in AI Diplomacy Service:", error);
        } finally {
            this._isProcessing = false;
        }
    },

    /**
     * Mengajukan pembangunan Kedutaan Besar ke suatu negara.
     */
    async proposeEmbassy(proposedCountry: string) {
        const userCountry = (localStorage.getItem('selected_country') || "indonesia").toLowerCase();
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

            // Gunakan logika sinkronisasi yang sama dengan harian
            if (data.matrix) {
                saveGlobalRelationMatrix(data.matrix);

                // Update data untuk notifikasi instan
                if (Array.isArray(data.events)) {
                    data.events.forEach((event: any) => {
                        // SINKRONISASI KE STORAGE BANGUNAN JIKA DITERIMA
                        if (event.type === 'USER_EMBASSY_ACCEPTED') {
                            embassyStorage.updateEmbassyStatus(proposedCountry, 'completed');
                        }

                        const safeSource = (event.source || proposedCountry || "Negara").toUpperCase();
                        inboxStorage.addMessage({
                            source: `Kementerian Luar Negeri (${safeSource})`,
                            category: 'embassy', 
                            isProposal: false,
                            subject: event.subject,
                            content: event.content,
                            time: formatGameDate(timeStorage.getState().gameDate),
                            priority: 'high'
                        });
                    });
                }
            }
        } catch (error) {
            console.error("Failed to propose embassy:", error);
        }
    },

    /**
     * Menyelesaikan perjanjian (Aliansi/Pakta/Dagang/Kedubes) setelah disetujui User.
     */
    finalizeTreaty(targetCountry: string, type: 'pact' | 'alliance' | 'trade' | 'embassy') {
        const userCountryRaw = localStorage.getItem('selected_country') || "Indonesia";
        const matrix = getGlobalRelationMatrix();
        
        // Cari kunci negara
        const countryKey = Object.keys(matrix).find(k => k.toLowerCase() === targetCountry.toLowerCase()) || targetCountry;
        
        if (!matrix[countryKey]) matrix[countryKey] = {};
        const npcRelations = matrix[countryKey];
        
        // Cari entri pemain di dalam sub-objek NPC
        let playerKeyInNpc = Object.keys(npcRelations).find(k => k.toLowerCase() === userCountryRaw.toLowerCase());
        if (!playerKeyInNpc) {
            playerKeyInNpc = userCountryRaw;
            npcRelations[playerKeyInNpc] = { s: 50, e: 0, a: 0, p: 0, t: 0 };
        }

        const rel = npcRelations[playerKeyInNpc];

        if (type === 'embassy') {
            rel.e = 1;
            embassyStorage.updateEmbassyStatus(targetCountry, 'completed');
        } else if (type === 'pact') {
            rel.p = 1;
            nonAggressionStorage.updateSimpleStatus(targetCountry, 'active');
        } else if (type === 'alliance') {
            rel.a = 1;
            aliansiStorage.updateStatus(targetCountry, { status: 'active' });
        } else if (type === 'trade') {
            rel.t = 1;
        }

        saveGlobalRelationMatrix(matrix);
    }
};
