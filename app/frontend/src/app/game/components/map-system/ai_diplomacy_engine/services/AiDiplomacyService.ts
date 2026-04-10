import { getGlobalRelationMatrix, saveGlobalRelationMatrix } from './MatrixHandler';
import { inboxStorage } from '@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage';
import { budgetStorage } from '@/app/game/components/1_navbar/3_kas_negara';
import { relationStorage } from '../../modals_detail_negara/2_diplomasi_hubungan/1_kedutaan/logic/relationStorage';
import { nonAggressionStorage } from '../../modals_detail_negara/2_diplomasi_hubungan/2_pakta_non_agresi/logic/nonAggressionStorage';
import { aliansiStorage } from '../../modals_detail_negara/2_diplomasi_hubungan/3_aliansi_pertahanan/logic/aliansiStorage';
import { tradeStorage } from '@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/TradeStorage';

/**
 * AiDiplomacyService
 * Jembatan antara Frontend (TS) dan Otak AI (Python).
 */
export const AiDiplomacyService = {
    /**
     * Menjalankan simulasi harian masal untuk seluruh dunia.
     */
    async runDailyDrift(userCountry: string = "Indonesia") {
        const currentMatrix = getGlobalRelationMatrix();
        const normalizedUser = userCountry.toLowerCase().trim();
        
        try {
            const response = await fetch('/api/game/diplomacy/ai-global/drift', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    matrix: currentMatrix,
                    userCountry: userCountry
                })
            });

            const data = await response.json();
            if (data.error) throw new Error(data.error);

            // 1. Sinkronisasi Data Matrix ke Seluruh Sistem UI (MASAL)
            if (data.matrix) {
                saveGlobalRelationMatrix(data.matrix);

                const updatedMatrix = data.matrix;
                const liveRelationData = relationStorage.getRelationData();
                let hasChanges = false;

                // Loop melalui SEMUA negara yang ada di Matrix hasil simulasi
                Object.keys(updatedMatrix).forEach(sourceId => {
                    const relations = updatedMatrix[sourceId];

                    // JIKA source adalah USER, update hubungan ke semua negara NPC (Perspektif Pemain)
                    if (sourceId === normalizedUser) {
                        Object.keys(relations).forEach(targetId => {
                            const relFromUser = relations[targetId];
                            const rawScore = relFromUser.s;
                            const newScore = Math.round(rawScore * 100) / 100;

                            if (liveRelationData[targetId] !== newScore) {
                                liveRelationData[targetId] = newScore;
                                hasChanges = true;

                                // Kirim event agar baris di halaman Geopolitik ter-update
                                window.dispatchEvent(new CustomEvent("relation_status_updated", { 
                                    detail: { targetCountry: targetId, newScore } 
                                }));
                            }
                        });
                    }

                    // JIKA source adalah NPC, update hubungan MENUJU pemain (Perspektif Lawan)
                    const relToUser = relations[normalizedUser];
                    if (relToUser && sourceId !== normalizedUser) {
                        // a. Update Skor Hubungan (%)
                        const rawScore = relToUser.s;
                        const newScore = Math.round(rawScore * 100) / 100;
                        
                        if (liveRelationData[sourceId] !== newScore) {
                            liveRelationData[sourceId] = newScore;
                            hasChanges = true;
                            
                            window.dispatchEvent(new CustomEvent("relation_status_updated", { 
                                detail: { targetCountry: sourceId, newScore } 
                            }));
                        }

                        // b. Update Pakta Non-Agresi (p)
                        if (relToUser.p === 1 && nonAggressionStorage.getStatus(sourceId) !== 'active') {
                            nonAggressionStorage.updateStatus(sourceId, { status: 'active' });
                        }

                        // c. Update Aliansi Pertahanan (a)
                        if (relToUser.a === 1 && aliansiStorage.getStatus(sourceId) !== 'active') {
                            aliansiStorage.updateStatus(sourceId, { status: 'active' });
                        }

                        // d. Update Kerjasama Dagang (t)
                        if (relToUser.t === 1) {
                            const currentTrade = tradeStorage.getTrade(sourceId);
                            if (!currentTrade || currentTrade.status !== 'active') {
                                tradeStorage.saveTrade(sourceId, { status: 'active', startDate: new Date().toISOString() });
                            }
                        }
                    }
                });

                if (hasChanges) {
                    // Simpan hasil update masal ke LocalStorage Utama
                    localStorage.setItem("em2_relation_scores", JSON.stringify(liveRelationData));
                    // Pancing UI (halaman Geopolitik & Map) agar Render Ulang
                    window.dispatchEvent(new Event("relation_storage_updated"));
                }
            }

            // 2. Berikan Notifikasi Event Global
            if (Array.isArray(data.events)) {
                data.events.forEach((event: any) => {
                    const isFromDonor = event.type === 'NPC_GRANT_TO_USER';
                    const isMilitary = event.type.includes('OFFER');
                    
                    inboxStorage.addMessage({
                        source: isFromDonor ? `Dinas Keuangan (${event.source.toUpperCase()})` : 
                                isMilitary ? `Kementerian Pertahanan (${event.source.toUpperCase()})` :
                                "Dinas Intelijen Luar Negeri",
                        subject: `[DUNIA] ${event.subject}`,
                        content: event.content,
                        time: "HARI INI",
                        priority: event.priority || 'medium'
                    });
                });
            }

            // 3. Masukkan Hibah Dana (jika ada)
            if (data.budgetGain && data.budgetGain > 0) {
                budgetStorage.updateBudget(data.budgetGain);
            }

        } catch (error) {
            console.error("Critical Failure in AI Diplomacy Service:", error);
        }
    }
};
