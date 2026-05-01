"use client"
import { storageSafety } from "@/app/game/utils/storageSafety";

export interface DebtOffer {
    id: string;
    type: 'NPC_OFFER' | 'NPC_REQUEST' | 'IMF_OFFER' | 'WB_OFFER';
    lender: string; // "IMF", "Bank Dunia", or Country Name
    amount: number;
    interestRate: number;
    tenorMonths: number;
    expiryDays: number;
    status: 'pending' | 'accepted' | 'rejected' | 'expired';
    dayCreated: number;
}

export interface ActiveDebt {
    id: string;
    provider: string; // Name of Country/Org
    type: 'BILATERAL' | 'IMF' | 'WORLD_BANK';
    direction: 'BORROWER' | 'LENDER';
    principal: number;
    remainingPrincipal: number;
    interestRate: number;
    tenorMonths: number;
    monthsRemaining: number;
    monthlyPayment: number;
    startDate: string; // Game date
    status: 'ACTIVE' | 'DEFAULT' | 'PAID';
}

class DebtAiStorage {
    private STORAGE_KEY = 'em_debt_ai_data';

    getData() {
        if (typeof window === 'undefined') return { offers: [], activeDebts: [] };
        const data = localStorage.getItem(this.STORAGE_KEY);
        return data ? JSON.parse(data) : { offers: [], activeDebts: [] };
    }

    saveData(data: { offers: DebtOffer[], activeDebts: ActiveDebt[] }) {
        if (typeof window === 'undefined') return;
        
        // CAP: Keep only last 50 offers and 100 active debts to save space
        const cappedData = {
            offers: data.offers.slice(-50),
            activeDebts: data.activeDebts.slice(-100)
        };

        try {
            storageSafety.setItem(this.STORAGE_KEY, JSON.stringify(cappedData));
            window.dispatchEvent(new Event('debt_storage_updated'));
        } catch (e) {
            console.warn("[DebtAiStorage] Quota exceeded, trimming further...");
            // Emergency trim: keep only 20 items
            const emergencyData = {
                offers: data.offers.slice(-20),
                activeDebts: data.activeDebts.slice(-30)
            };
            try {
                localStorage.setItem(this.STORAGE_KEY, JSON.stringify(emergencyData));
                window.dispatchEvent(new Event('debt_storage_updated'));
            } catch (err) {
                console.error("[DebtAiStorage] Critical: Storage full even after emergency trim");
            }
        }
    }

    // Offers
    addOffer(offer: DebtOffer) {
        const data = this.getData();
        data.offers.push(offer);
        this.saveData(data);
    }

    updateOfferStatus(id: string, status: DebtOffer['status']) {
        const data = this.getData();
        const offer = data.offers.find((o: DebtOffer) => o.id === id);
        if (offer) {
            offer.status = status;
            this.saveData(data);
        }
    }

    // Active Debts
    addActiveDebt(debt: ActiveDebt) {
        const data = this.getData();
        data.activeDebts.push(debt);
        this.saveData(data);
    }

    updateDebtProgress(id: string, paymentAmount: number) {
        const data = this.getData();
        const debt = data.activeDebts.find((d: ActiveDebt) => d.id === id);
        if (debt && debt.status === 'ACTIVE') {
            debt.remainingPrincipal -= paymentAmount;
            debt.monthsRemaining -= 1;
            if (debt.remainingPrincipal <= 0 || debt.monthsRemaining <= 0) {
                debt.status = 'PAID';
            }
            this.saveData(data);
        }
    }

    clearExpiredOffers(currentDay: number) {
        const data = this.getData();
        data.offers = data.offers.filter((o: DebtOffer) => {
            if (o.status !== 'pending') return true;
            return currentDay - o.dayCreated < o.expiryDays;
        });
        this.saveData(data);
    }
}

export const debtAiStorage = new DebtAiStorage();
