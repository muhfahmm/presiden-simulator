/**
 * AI Trade Service
 * Jembatan antara Frontend (TypeScript) dan Otak AI (Python).
 * Dipanggil setiap hari game dari timeStorage.
 */
import { getGlobalRelationMatrix } from '@/app/game/components/map-system/ai_diplomacy_engine/services/MatrixHandler';
import { inboxStorage } from '@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage';
import { newsStorage as globalNewsStorage } from '@/app/game/components/sidemenu/1_berita/newsStorage';
import { budgetStorage } from '@/app/game/components/1_navbar/3_kas_negara';
import { tradeStorage } from '../../TradeStorage';
import { timeStorage } from '../../timeStorage';
import { gameStorage } from '@/app/game/gamestorage';
import { formatGameDate } from '@/app/game/components/1_navbar/5_navigasi_waktu/gameTime';
import { countries } from '@/app/database/data/negara/benua/index';
import { aiTradeOfferStorage, AiTradeOffer } from '../storage/aiTradeOfferStorage';
import { tradeContractStorage, TradeContract } from '../storage/tradeContractStorage';
import { historiImportStorage } from '../../ekspor_impor/impor/HistoriImportStorage';
import { historiEksporStorage } from '../../ekspor_impor/ekspor/HistoriEksporStorage';
import { getInitialAgreements } from '@/app/database/data/database_mitra_perdagangan/agreementsRegistry';
import { aiProductionStorage } from '@/app/game/components/AI_logic/5_AI_Pembangunan/antarmuka_data_pembangunan/AIProductionStorage';
import { aggregateStocksForTrade, TradeToBuildingKeyMap } from '@/app/game/components/AI_logic/5_AI_Pembangunan/antarmuka_data_pembangunan/AIProductionMapping';

import {
    produkIndustriRate,
    mineralKritisRate,
    komoditasPanganRate
} from "@/app/database/data/semua_fitur_negara";
import { militerRate } from "@/app/database/data/semua_fitur_negara/1_pembangunan/2_produksi_militer";
import { baseKeyMapping } from '../../tradeData';

/**
 * Mengumpulkan data produksi semua negara untuk dikirim ke Python.
 */
export function collectCountriesData(): Record<string, any> {
    const data: Record<string, any> = {};
    for (const country of countries) {
        const key = (country.name_id || country.name_en || '').toLowerCase().trim();
        if (!key) continue;

        const rawStocks = aiProductionStorage.getStocks(country.name_en || '');
        const tradedStocks = aggregateStocksForTrade(rawStocks);
        const explicitPartners = getInitialAgreements(country.name_en, country.name_id).map((p: any) => p.mitra.toLowerCase());

        data[key] = {
            populasi: (country as any).populasi || 50000000,
            sektor_ekstraksi: (country as any).sektor_ekstraksi || {},
            sektor_manufaktur: (country as any).sektor_manufaktur || {},
            sektor_olahan_pangan: (country as any).sektor_olahan_pangan || {},
            sektor_farmasi: (country as any).sektor_farmasi || {},
            sektor_peternakan: (country as any).sektor_peternakan || {},
            sektor_perikanan: (country as any).sektor_perikanan || {},
            sektor_agrikultur: (country as any).sektor_agrikultur || {},
            pabrik_militer: (country as any).pabrik_militer || {},
            ekonomi: (country as any).ekonomi || {},
            traded_stocks: tradedStocks,
            trade_partners: explicitPartners
        };
    }
    return data;
}

/**
 * Mengumpulkan stok produksi user saat ini.
 */
function collectUserStock(): Record<string, number> {
    const budgetData = budgetStorage.getData();
    return budgetData.cumulativeProduction || {};
}

/**
 * Menghitung day timestamp (hari sejak epoch) dari game date.
 */
function getDayTimestamp(date: Date): number {
    return Math.floor(date.getTime() / (1000 * 60 * 60 * 24));
}

/**
 * Mencari satuan (unit) komoditas berdasarkan key.
 */
function getCommodityUnit(key: string): string {
    // 1. Check Mineral
    const minRate = (mineralKritisRate as any)[Object.keys(mineralKritisRate).find(k => (mineralKritisRate as any)[k].dataKey === key) || ""];
    if (minRate) return minRate.satuan ?? "Unit";

    // 2. Check Manufacturing
    const mfgKey = Object.keys(baseKeyMapping).find(k => baseKeyMapping[k] === key) || key;
    const mfgRate = (produkIndustriRate as any)[mfgKey] || (produkIndustriRate as any)[key] || (produkIndustriRate as any)[key + "_factory"];
    if (mfgRate) return mfgRate.satuan ?? "Unit";

    // 3. Check Pangan (Peternakan, Agrikultur, Perikanan)
    const foodRate = (komoditasPanganRate as any)[key];
    if (foodRate) return foodRate.satuan ?? "Unit";

    // 4. Check Military
    const milRate = (militerRate as any)[key] || Object.values(militerRate).find((r: any) => r.dataKey === key);
    if (milRate) return (milRate as any).satuan || (milRate as any).unit || "Unit";

    return "Unit";
}

export const AiTradeService = {
    _isProcessing: false, // Internal lock to prevent overlap

    /**
     * Proses perdagangan AI harian. Dipanggil setiap hari game.
     */
    async processDaily() {
        // Jangan jalankan jika game sedang PAUSE atau sedang proses lain
        if (timeStorage.getState().isPaused || this._isProcessing) return;

        this._isProcessing = true;

        const session = gameStorage.getSession();
        const userCountry = session?.country || 'Indonesia';
        const gameDate = timeStorage.getState().gameDate;
        const dayTimestamp = getDayTimestamp(gameDate);

        const matrix = getGlobalRelationMatrix();
        const countriesData = collectCountriesData();
        const userStock = collectUserStock();

        const existingOffers = aiTradeOfferStorage.getPendingOffers();
        const existingContracts = tradeContractStorage.getContracts();

        try {
            const response = await fetch('/api/game/trade/ai-global', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    matrix,
                    userCountry,
                    countriesData,
                    userStock,
                    dayTimestamp,
                    existingOffers,
                    existingRequests: existingOffers.filter(o => o.type === 'purchase_request'),
                    existingContracts
                })
            });

            const data = await response.json();
            if (data.error) {
                console.error('AI Trade Engine error:', data.error);
                return;
            }

            // Jika game di-pause saat menunggu response, batalkan
            if (timeStorage.getState().isPaused) return;

            // 1. Simpan tawaran produk baru
            if (data.offers?.length > 0) {
                aiTradeOfferStorage.addOffers(data.offers);
            }

            // 2. Simpan permintaan pembelian baru
            if (data.requests?.length > 0) {
                aiTradeOfferStorage.addOffers(data.requests);
            }

            // 3. Simpan kontrak baru
            if (data.contracts?.length > 0) {
                tradeContractStorage.addContracts(data.contracts);
            }

            // 4. Expire tawaran yang sudah lewat
            if (data.expiredOffers?.length > 0) {
                aiTradeOfferStorage.expireOffers(data.expiredOffers);
            }
            if (data.expiredRequests?.length > 0) {
                aiTradeOfferStorage.expireOffers(data.expiredRequests);
            }

            // 5. Kirim notifikasi events
            if (Array.isArray(data.events)) {
                data.events.forEach((event: any) => {
                    const isGlobalNews = event.type === 'GLOBAL_NEWS';
                    const dateStr = formatGameDate(gameDate);

                    if (isGlobalNews) {
                        // Check Weekly Global AI News Limit (10 per week)
                        if (globalNewsStorage.canAddWeekly('ai_global', gameDate) && globalNewsStorage.canAddNews(event.category || 'economy', dateStr)) {
                            globalNewsStorage.addNews({
                                source: event.source || 'Global Trade Monitor',
                                category: event.category || 'economy',
                                subject: event.subject,
                                content: event.content,
                                time: dateStr,
                                priority: event.priority || 'low'
                            });
                        }
                    } else {
                        // Check Weekly Inbox Limit (2 per week for trade category)
                        if (inboxStorage.canAddWeekly('trade', gameDate)) {
                            // Tawaran/request ke user → masuk Inbox
                            const safeSource = (event.source || 'Negara').toUpperCase();
                            inboxStorage.addMessage({
                                source: `Kementerian Perdagangan (${safeSource})`,
                                category: 'trade',
                                isProposal: true,
                                subject: event.subject,
                                content: event.content,
                                time: formatGameDate(gameDate),
                                priority: event.priority || 'medium'
                            });
                        }
                    }
                });
            }

            // 6. Tambahkan transaksi NPC ke visualisasi peta
            if (data.npcTransactions?.length > 0) {
                data.npcTransactions.forEach((tx: any) => {
                    tradeStorage.addTransaction({
                        source: tx.seller,
                        dest: tx.buyer,
                        type: 'sell',
                        commodity: tx.commodity,
                        amount: tx.volume
                    });
                });
            }

        } catch (error) {
            console.error('AI Trade Service failed:', error);
        } finally {
            this._isProcessing = false;
        }
    },

    /**
     * User menerima tawaran produk dari AI.
     * AI menjual komoditas ke user → uang user berkurang, stok bertambah.
     */
    acceptProductOffer(offerId: string) {
        const offers = aiTradeOfferStorage.getOffers();
        const offer = offers.find(o => o.id === offerId && o.type === 'product_offer');
        if (!offer || offer.status !== 'pending') return false;

        const totalCost = offer.amount * offer.pricePerUnit;
        const currentBudget = budgetStorage.getBudget();

        if (totalCost > currentBudget) return false;

        // --- NPC STOCK DEDUCTION ---
        // Find which building key to deduct from
        const buildingKeys = TradeToBuildingKeyMap[offer.commodity];
        if (buildingKeys && buildingKeys.length > 0) {
            // Find NPC english name
            const countryEntry = countries.find(c => c.name_id?.toLowerCase() === offer.country.toLowerCase() || c.name_en?.toLowerCase() === offer.country.toLowerCase());
            if (countryEntry && countryEntry.name_en) {
               const npcName = countryEntry.name_en;
               const currentStocks = aiProductionStorage.getStocks(npcName);
               let amountToDeduct = offer.amount;
               const deductionRecord: Record<string, number> = {};
               
               for (const bKey of buildingKeys) {
                   const available = currentStocks[bKey] || 0;
                   if (available > 0) {
                       const deduct = Math.min(available, amountToDeduct);
                       deductionRecord[bKey] = deduct;
                       amountToDeduct -= deduct;
                   }
                   if (amountToDeduct <= 0) break;
               }

               if (amountToDeduct <= 0) {
                   aiProductionStorage.deductStocks(npcName, deductionRecord);
                   console.log(`[Trade] Deducted ${offer.amount} of ${offer.commodity} from ${npcName}`);
               } else {
                   console.warn(`[Trade] NPC ${npcName} does not have enough physical stock of ${offer.commodity} to fulfill offer! Proceeding anyway...`);
                   // In a realistic scenario, we should prevent the trade, but for robust simulation we allow it and just drain what we can
                   aiProductionStorage.deductStocks(npcName, deductionRecord);
               }
            }
        }

        // Kurangi uang user
        budgetStorage.updateBudget(-totalCost);

        // Update status
        aiTradeOfferStorage.updateStatus(offerId, 'accepted');

        // Tambahkan animasi transaksi di peta
        const session = gameStorage.getSession();
        tradeStorage.addTransaction({
            source: offer.country,
            dest: session?.country || 'Indonesia',
            type: 'buy',
            commodity: offer.commodityLabel,
            amount: offer.amount
        });

        // Kirim notifikasi
        inboxStorage.addMessage({
            source: 'Kementerian Perdagangan',
            subject: `Impor ${offer.commodityLabel} dari ${offer.countryLabel} — DITERIMA`,
            content: `Anda telah menerima tawaran impor ${offer.amount.toLocaleString('id-ID')} unit ${offer.commodityLabel} dari ${offer.countryLabel} dengan total biaya ${totalCost.toLocaleString('id-ID')}.`,
            time: formatGameDate(timeStorage.getState().gameDate),
            priority: 'medium'
        });

        // Masukkan ke Histori Import
        historiImportStorage.saveImport({
            commodityKey: offer.commodity,
            commodityName: offer.commodityLabel,
            amount: offer.amount,
            unit: getCommodityUnit(offer.commodity),
            pricePerUnit: offer.pricePerUnit,
            totalPrice: totalCost,
            partner: offer.countryLabel,
            shippingTime: "5-15 Hari"
        });

        return true;
    },

    /**
     * User menerima permintaan pembelian dari AI.
     * AI membeli komoditas dari user → uang user bertambah, stok berkurang.
     */
    acceptPurchaseRequest(requestId: string) {
        const offers = aiTradeOfferStorage.getOffers();
        const request = offers.find(o => o.id === requestId && o.type === 'purchase_request');
        if (!request || request.status !== 'pending') return false;

        const totalRevenue = request.amount * request.pricePerUnit;

        // Tambah uang user
        budgetStorage.updateBudget(totalRevenue);

        // Kurangi stok user (jika ada tracking)
        // budgetStorage.updateCumulativeProduction({ [stockKey]: -request.amount });

        // Update status
        aiTradeOfferStorage.updateStatus(requestId, 'accepted');

        // Tambahkan animasi transaksi di peta
        const session = gameStorage.getSession();
        tradeStorage.addTransaction({
            source: session?.country || 'Indonesia',
            dest: request.country,
            type: 'sell',
            commodity: request.commodityLabel,
            amount: request.amount
        });

        // Kirim notifikasi
        inboxStorage.addMessage({
            source: 'Kementerian Perdagangan',
            subject: `Ekspor ${request.commodityLabel} ke ${request.countryLabel} — BERHASIL`,
            content: `Anda telah menjual ${request.amount.toLocaleString('id-ID')} unit ${request.commodityLabel} ke ${request.countryLabel} dengan pendapatan +${totalRevenue.toLocaleString('id-ID')}.`,
            time: formatGameDate(timeStorage.getState().gameDate),
            priority: 'medium'
        });

        // Masukkan ke Histori Ekspor
        historiEksporStorage.saveExport({
            commodityKey: request.commodity,
            commodityName: request.commodityLabel,
            amount: request.amount,
            unit: getCommodityUnit(request.commodity),
            pricePerUnit: request.pricePerUnit,
            totalPrice: totalRevenue,
            partner: request.countryLabel,
            shippingTime: "Instan (AI Pickup)"
        });

        return true;
    },

    /**
     * User menolak tawaran/request.
     */
    rejectOffer(offerId: string) {
        aiTradeOfferStorage.updateStatus(offerId, 'rejected');
    },

    /**
     * User menerima kontrak dagang jangka panjang.
     */
    acceptContract(contractId: string) {
        tradeContractStorage.updateStatus(contractId, 'active');

        const contracts = tradeContractStorage.getContracts();
        const contract = contracts.find(c => c.id === contractId);
        if (contract) {
            inboxStorage.addMessage({
                source: 'Kementerian Perdagangan',
                subject: `Kontrak Dagang dengan ${contract.countryLabel} — AKTIF`,
                content: `Kontrak perdagangan ${contract.commodityLabel} dengan ${contract.countryLabel} telah diaktifkan. ${contract.amountPerMonth.toLocaleString('id-ID')} unit/bulan selama ${contract.durationMonths} bulan.`,
                time: formatGameDate(timeStorage.getState().gameDate),
                priority: 'high'
            });
        }
    },

    /**
     * User menolak kontrak.
     */
    rejectContract(contractId: string) {
        tradeContractStorage.updateStatus(contractId, 'rejected');
    }
};
