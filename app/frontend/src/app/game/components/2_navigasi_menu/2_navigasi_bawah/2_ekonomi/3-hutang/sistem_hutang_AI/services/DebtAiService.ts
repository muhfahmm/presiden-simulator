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
                localStorage.setItem('em_user_credit_score', result.creditScore.toString());
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
     * Generate penawaran bilateral secara acak (maksimal 10 negara)
     */
    seedInitialOffers(force: boolean = false) {
        const data = debtAiStorage.getData();
        const pendingOffers = data.offers.filter((o: DebtOffer) => o.status === 'pending');
        
        // Generate jika dipaksa (update bulanan) atau market benar-benar kosong (< 3)
        if (force || pendingOffers.length < 3) {
            const session = gameStorage.getSession();
            const userCountry = session?.country || "Indonesia";
            
            // Ambil daftar negara secara acak, kecualikan negara user
            const otherCountries = countries
                .filter(c => c.name_id !== userCountry && c.name_en !== userCountry)
                .sort(() => 0.5 - Math.random())
                .slice(0, 10); // Ambil maksimal 10

            const newSeeds: DebtOffer[] = otherCountries.map((c, idx) => {
                const isRequest = Math.random() > 0.4; // 60% kemungkinan meminta dana, 40% menawarkan
                const baseAmount = isRequest ? 10000000 : 50000000;
                const multiplier = Math.floor(Math.random() * 20) + 1;
                
                return {
                    id: `seed_${c.name_id.toLowerCase().replace(/\s+/g, '_')}_${Date.now()}_${idx}`,
                    type: isRequest ? 'NPC_REQUEST' : 'NPC_OFFER',
                    lender: c.name_id,
                    amount: baseAmount * multiplier,
                    interestRate: parseFloat((Math.random() * (5.0 - 1.0) + 1.0).toFixed(1)),
                    tenorMonths: [6, 12, 24, 36, 48, 60][Math.floor(Math.random() * 6)],
                    expiryDays: 30,
                    status: 'pending',
                    dayCreated: 1
                };
            });

            // Simpan penawaran baru (bersihkan seed lama yang masih pending agar tidak menumpuk)
            const nonSeedOffers = data.offers.filter((o: DebtOffer) => !o.id.startsWith('seed_') || o.status !== 'pending');
            
            debtAiStorage.saveData({
                offers: [...nonSeedOffers, ...newSeeds],
                activeDebts: data.activeDebts
            });
            return true;
        }
        return false;
    },

    /**
     * Mengecek apakah bulan sudah berganti untuk melakukan update market bilateral
     */
    checkMonthlyUpdate() {
        if (typeof window === 'undefined') return;
        
        const gameDateStr = localStorage.getItem('em_game_date') || "01-01-2026";
        const currentMonth = gameDateStr.split("-")[1]; // Mengambil bagian bulan dari DD-MM-YYYY
        const lastUpdateMonth = localStorage.getItem('em_last_bilateral_update_month');
        
        if (currentMonth !== lastUpdateMonth) {
            console.log(`[DebtAiService] Month changed (${lastUpdateMonth} -> ${currentMonth}), refreshing market...`);
            this.seedInitialOffers(true); // Paksa refresh market
            localStorage.setItem('em_last_bilateral_update_month', currentMonth);
        }
    },

    /**
     * Menangani aksi terhadap penawaran (Terima Pinjaman atau Beri Bantuan)
     */
    acceptLoan(offerId: string) {
        const data = debtAiStorage.getData();
        const offer = data.offers.find((o: DebtOffer) => o.id === offerId);
        
        if (offer && offer.status === 'pending') {
            const isRequest = offer.type === 'NPC_REQUEST';

            if (isRequest) {
                // Player MEMBERI pinjaman/bantuan
                const currentBudget = budgetStorage.getBudget();
                if (currentBudget < offer.amount) {
                    if (typeof window !== 'undefined') {
                        alert("Kas Negara tidak mencukupi untuk memberikan dana bantuan ini!");
                    }
                    return false;
                }
                // 1. Potong Dana dari Kas
                budgetStorage.updateBudget(-offer.amount);
                
                // 2. Hitung Cicilan Bulanan yang akan diterima (Anuitas sederhana)
                const monthlyPayment = offer.amount / offer.tenorMonths + (offer.amount * (offer.interestRate / 100) / 12);

                // 3. Masukkan ke Active Debt sebagai PIUTANG (LENDER)
                const newReceivable: ActiveDebt = {
                    id: `debt_${Date.now()}`,
                    provider: offer.lender,
                    type: 'BILATERAL',
                    direction: 'LENDER',
                    principal: offer.amount,
                    remainingPrincipal: offer.amount,
                    interestRate: offer.interestRate,
                    tenorMonths: offer.tenorMonths,
                    monthsRemaining: offer.tenorMonths,
                    monthlyPayment: Math.round(monthlyPayment),
                    startDate: new Date().toLocaleDateString(),
                    status: 'ACTIVE'
                };

                debtAiStorage.addActiveDebt(newReceivable);
            } else {
                // Player MENERIMA pinjaman
                // 1. Tambahkan Dana ke Kas
                budgetStorage.updateBudget(offer.amount);

                // 2. Hitung Cicilan Bulanan (Anuitas sederhana)
                const monthlyPayment = offer.amount / offer.tenorMonths + (offer.amount * (offer.interestRate / 100) / 12);

                // 3. Masukkan ke Active Debt sebagai HUTANG (BORROWER)
                const newDebt: ActiveDebt = {
                    id: `debt_${Date.now()}`,
                    provider: offer.lender,
                    type: offer.type === 'NPC_OFFER' ? 'BILATERAL' : offer.type === 'IMF_OFFER' ? 'IMF' : 'WORLD_BANK',
                    direction: 'BORROWER',
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
            }

            debtAiStorage.updateOfferStatus(offerId, 'accepted');
            return true;
        }
        return false;
    }
};
