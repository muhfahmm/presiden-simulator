"use client"

import { countries } from '@/app/database/data/negara/benua/index';
import { OrganizationMembers } from '@/app/database/data/database_organisasi_internasional/index';
import { getGlobalRelationMatrix, initializeMatrixData } from '@/app/game/logic/ai/ai_diplomacy_engine/services/MatrixHandler';
import { debtAiStorage, DebtOffer, ActiveDebt } from '../storage/DebtAiStorage';
import { budgetStorage } from '@/app/game/components/1_navbar/3_kas_negara';
import { gameStorage } from '@/app/game/gamestorage';
import { inboxStorage } from '@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage';

export const DebtAiService = {
    /**
     * Mengecek apakah user anggota IMF/Bank Dunia
     */
    checkMembership(countryName: string) {
        const isImfMember = OrganizationMembers.imf.includes(countryName);
        const isWbMember = OrganizationMembers.world_bank.includes(countryName);
        return { isImfMember, isWbMember };
    },

    /**
     * Mendapatkan data ekonomi lengkap untuk dikirim ke Python
     */
    async collectDebtInput(countryName: string, dayTimestamp: number) {
        const countriesData: Record<string, any> = {};

        // 1. Collect data from countries
        countries.forEach(c => {
            const storedData = localStorage.getItem(`country_data_${c.name_en.toLowerCase()}`);
            if (storedData) {
                countriesData[c.name_en] = JSON.parse(storedData);
            } else {
                // Fallback ke data database jika data simulasi hari ini belum dibuat
                countriesData[c.name_en] = {
                    name: c.name_en,
                    anggaran: c.anggaran || 0,
                    pendapatan_nasional: c.pendapatan_nasional || 0,
                    score: 50 // Default score
                };
            }
        });

        // 2. Current Debt Stats & Membership
        const currentDebts = debtAiStorage.getData().activeDebts;
        const totalPrincipal = currentDebts.reduce((acc: number, d: any) => acc + (d.status === 'ACTIVE' ? d.remainingPrincipal : 0), 0);

        const { isImfMember } = this.checkMembership(countryName);
        let rawMatrix = getGlobalRelationMatrix();
        
        // Jika matriks kosong, coba inisialisasi ulang dari database
        if (!rawMatrix || Object.keys(rawMatrix).length === 0) {
            console.warn("[DebtAiService] Matrix empty, re-initializing...");
            initializeMatrixData();
            rawMatrix = getGlobalRelationMatrix();
        }

        const relationMatrix = (rawMatrix && typeof rawMatrix === 'object') ? rawMatrix : {};

        return {
            userCountry: countryName,
            userCash: budgetStorage.getData().anggaran,
            countriesData,
            matrix: relationMatrix, // Explicitly map to 'matrix' key
            currentDebt: totalPrincipal,
            isImfMember,
            dayTimestamp,
            _t: Date.now(), // Anti-cache timestamp
            scriptPath: 'app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/3-hutang/sistem_hutang_AI/brain/debt_engine.py'
        };
    },

    /**
     * Memanggil AI untuk memproses penawaran hutang baru
     */
    async processDailyDebt(dayTimestamp: number) {
        const session = gameStorage.getSession();
        if (!session) return;
        const countryName = session.country || 'Indonesia';

        const input = await this.collectDebtInput(countryName, dayTimestamp);
        
        // Debug log di sisi client
        console.log("[DebtAiService] Sending payload keys:", Object.keys(input));

        try {
            const response = await fetch('/api/game/trade/ai-global', { // Menggunakan route yang sudah ada untuk AI
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(input)
            });

            const result = await response.json();
            if (result.error) throw new Error(result.error);

            // Simpan penawaran baru
            if (result.newOffers) {
                result.newOffers.forEach((off: DebtOffer) => {
                    debtAiStorage.addOffer(off);
                });
            }

            // Tambahkan notifikasi inbox
            if (result.events) {
                result.events.forEach((ev: any) => {
                    inboxStorage.addMessage({
                        source: ev.source,
                        subject: ev.subject,
                        content: ev.content,
                        time: new Date().toLocaleDateString(), // Bisa diganti format game date
                        priority: ev.priority || 'medium'
                    });
                });
            }

            // Update credit score di suatu tempat jika perlu
            if (result.creditScore) {
                localStorage.setItem('em4_user_credit_score', result.creditScore.toString());
            }

        } catch (error) {
            console.error("Debt AI Error:", error);
        }

        // Jalankan Cicilan Otomatis
        this.processMortgagePayments();
    },

    /**
     * Menangani pembayaran cicilan hutang otomatis setiap bulan
     */
    processMortgagePayments() {
        const data = debtAiStorage.getData();
        const activeDebts = data.activeDebts.filter((d: ActiveDebt) => d.status === 'ACTIVE');

        activeDebts.forEach((debt: ActiveDebt) => {
            // Logika cicilan bulanan: jika hari ini adalah hari bayar (misal setiap tanggal 1 game)
            // Untuk penyederhanaan, kita bayar sedikit setiap hari atau sebulan sekali
            // Implementasi real bisa lebih kompleks
            
            // Bayar cicilan (Potong Anggaran)
            // budgetStorage.updateAnggaran(-debt.monthlyPayment);
            // debtAiStorage.updateDebtProgress(debt.id, debt.monthlyPayment);
        });
    },

    /**
     * Menerima pinjaman dari AI
     */
    acceptLoan(offerId: string) {
        const data = debtAiStorage.getData();
        const offer = data.offers.find((o: DebtOffer) => o.id === offerId);
        
        if (offer && offer.status === 'pending') {
            // 1. Tambahkan Dana ke Kas
            budgetStorage.updateBudget(offer.amount);

            // 2. Hitung Cicilan Bulanan (Anuitas sederhana)
            const monthlyInterest = (offer.interestRate / 100) / 12;
            const monthlyPayment = offer.amount / offer.tenorMonths + (offer.amount * (offer.interestRate / 100) / 12);

            // 3. Masukkan ke Active Debt
            const newDebt: ActiveDebt = {
                id: `debt_${Date.now()}`,
                provider: offer.lender,
                type: offer.type === 'NPC_OFFER' ? 'BILATERAL' : offer.type === 'IMF_OFFER' ? 'IMF' : 'WORLD_BANK',
                principal: offer.amount,
                remainingPrincipal: offer.amount,
                interestRate: offer.interestRate,
                tenorMonths: offer.tenorMonths,
                monthsRemaining: offer.tenorMonths,
                monthlyPayment: Math.round(monthlyPayment),
                startDate: new Date().toLocaleDateString(),
                status: 'ACTIVE'
            };

            debtAiStorage.addActiveDebt(newDebt);
            debtAiStorage.updateOfferStatus(offerId, 'accepted');
            return true;
        }
        return false;
    }
};
