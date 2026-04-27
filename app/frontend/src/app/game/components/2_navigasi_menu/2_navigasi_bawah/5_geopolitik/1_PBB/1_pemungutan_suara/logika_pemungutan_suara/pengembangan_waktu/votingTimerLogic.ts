
import { timeStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage";
import { unVotingStorage, ActiveVoting } from "../unVotingStorage";
import { simulateUNVote } from "../votingLogic";
import { terapkanPenaltiDiterima } from "../dampak_hubungan/penaltiDiterima";
import { terapkanPenaltiDitolak } from "../dampak_hubungan/penaltiDitolak";
import { relationStorage } from "@/app/game/components/modals/2_diplomasi_hubungan/1_kedutaan/logic/relationStorage";

/**
 * Logika Pengembang Waktu Pemungutan Suara (30 Hari)
 * Memonitor setiap perubahan tanggal di in-game navbar.
 */
export const initVotingTimer = (userCountry: string) => {
  if (typeof window === 'undefined') return;

  // Berlangganan ke perubahan waktu game
  timeStorage.subscribe((currentDate, isPaused) => {
    if (isPaused) return; // Berhenti jika game di-pause

    // Cek apakah perlu memicu resolusi AI bulanan
    unVotingStorage.checkMonthlyAiResolution(new Date(currentDate));

    let currentState = unVotingStorage.getData();
    const activeVotings = currentState.activeVotings;
    
    if (activeVotings.length === 0) return;

    let hasChanges = false;
    const updatedActiveVotings: ActiveVoting[] = [];

    activeVotings.forEach((vote: ActiveVoting) => {
      const start = new Date(vote.startDate);
      const end = new Date(vote.endDate);
      const now = new Date(currentDate);

      const totalDuration = end.getTime() - start.getTime();
      const elapsed = now.getTime() - start.getTime();
      const newProgress = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));
      
      if (newProgress !== vote.progress) {
        vote.progress = newProgress;
        hasChanges = true;
      }

      if (now >= end) {
        hasChanges = true;
        
        // Gunakan hasil AI yang sudah disimpan + suara user
        const aiResults = vote.finalResults || { yes: 0, no: 0, abstain: 0 };
        const finalYes = aiResults.yes + (vote.userVote === 'SETUJU' ? 1 : 0);
        const finalNo = aiResults.no + (vote.userVote === 'TOLAK' ? 1 : 0);
        const finalAbstain = 207 - (finalYes + finalNo);

        const REQUIRED_VOTES = 138;
        const isPassed = finalYes >= REQUIRED_VOTES;

        // Hitung End Date berdasarkan durasi yang dipilih
        const startDateStr = now.toISOString();
        const effectEndDate = new Date(now);
        const durationLabel = (vote.resolutionDuration || "6 BULAN").toUpperCase();

        if (durationLabel.includes("6 BULAN")) effectEndDate.setMonth(effectEndDate.getMonth() + 6);
        else if (durationLabel.includes("9 BULAN")) effectEndDate.setMonth(effectEndDate.getMonth() + 9);
        else if (durationLabel.includes("1 TAHUN")) effectEndDate.setFullYear(effectEndDate.getFullYear() + 1);
        else if (durationLabel.includes("2 TAHUN")) effectEndDate.setFullYear(effectEndDate.getFullYear() + 2);
        else if (durationLabel.includes("3 TAHUN")) effectEndDate.setFullYear(effectEndDate.getFullYear() + 3);
        else if (durationLabel.includes("5 TAHUN")) effectEndDate.setFullYear(effectEndDate.getFullYear() + 5);

        const effectEndDateStr = effectEndDate.toISOString();

        // Tambahkan ke Histori via storage method
        unVotingStorage.addHistoryItem({
          category: vote.category,
          name: vote.name,
          description: vote.description,
          effect: vote.effect,
          durationLabel: vote.durationLabel,
          targetCountry: vote.targetCountry,
          status: isPassed ? 'DITERIMA' : 'DITOLAK',
          startDate: startDateStr,
          endDate: effectEndDateStr,
          results: {
            yes: finalYes,
            no: finalNo,
            abstain: finalAbstain
          }
        });

        console.log(`[PBB] Berhasil memindahkan "${vote.name}" ke histori.`);

        const isAiResolution = vote.proposer && vote.proposer !== userCountry;

        if (isAiResolution) {
          if (vote.userVote === 'TOLAK') {
            // User menolak resolusi AI -> Membela target
            // Hubungan target naik +10
            relationStorage.updateRelationScore(vote.targetCountry, 10, 50, userCountry);
            // Hubungan dengan perancang (AI) turun -10
            relationStorage.updateRelationScore(vote.proposer!, -10, 50, userCountry);
            
            console.log(`[PBB AI] User menolak resolusi ${vote.proposer} terhadap ${vote.targetCountry}. Efek: Target +10, Proposer -10.`);
          } else if (vote.userVote === 'SETUJU') {
            // User mendukung resolusi AI
            if (isPassed) {
              terapkanPenaltiDiterima(vote.targetCountry, userCountry);
            } else {
              terapkanPenaltiDitolak(vote.targetCountry, userCountry);
            }
          }
        } else {
          // User yang mengusulkan
          if (isPassed) {
            terapkanPenaltiDiterima(vote.targetCountry, userCountry);
          } else {
            terapkanPenaltiDitolak(vote.targetCountry, userCountry);
          }
        }

        const isSanctionOrEmbargo = vote.category.includes("Sanksi") || vote.category.includes("Embargo");

        const loadNews = async () => {
          try {
            const { newsStorage } = await import("@/app/game/components/sidemenu/1_berita/newsStorage");
            
            // 1. Notifikasi Diplomasi (General)
            newsStorage.addNews({
              source: "Sekretariat PBB",
              subject: `HASIL SIDANG: ${vote.name.toUpperCase()}`,
              content: `Sidang Umum PBB telah selesai. Resolusi dinyatakan ${isPassed ? 'DITERIMA' : 'DITOLAK'}. \n\nDetail Suara: \n- Mendukung: ${finalYes} \n- Menentang: ${finalNo} \n- Abstain: ${finalAbstain} \n\n${isPassed ? 'Dampak strategis dan perubahan hubungan diplomatik telah diterapkan.' : 'Hubungan diplomatik sedikit menurun karena kegagalan resolusi.'}`,
              priority: isPassed ? 'high' : 'medium',
              category: 'diplomacy',
              time: currentDate.toLocaleDateString('id-ID')
            });

            // 2. Notifikasi Keuangan (Jika Passed & Sanksi/Embargo)
            if (isPassed && isSanctionOrEmbargo) {
              newsStorage.addNews({
                source: "Departemen Ekonomi PBB",
                subject: `IMPLEMENTASI ${vote.name.toUpperCase()}`,
                content: `Pemberlakuan ${vote.name.toLowerCase()} terhadap ${vote.targetCountry} resmi dimulai hari ini. Sesuai resolusi, pembatasan akan berlaku selama ${vote.durationLabel}. ${vote.effect}`,
                priority: 'high',
                category: 'finance',
                time: currentDate.toLocaleDateString('id-ID')
              });
            }
          } catch (e) {}
        };
        loadNews();
      } else {
        updatedActiveVotings.push(vote);
      }
    });

    if (hasChanges) {
      const latestState = unVotingStorage.getData();
      unVotingStorage.saveData({
        ...latestState,
        activeVotings: updatedActiveVotings
      });
    }
  });
};
