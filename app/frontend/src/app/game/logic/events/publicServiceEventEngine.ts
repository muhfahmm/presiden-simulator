import { healthEventScenarios } from "@/app/game/data/layanan_publik/kesehatan/event/healthEventScenarios";
import { securityEventScenarios } from "@/app/game/data/layanan_publik/keamanan/event/securityEventScenarios";
import { eventStorage } from "./eventStorage";
import { inboxStorage } from "@/app/game/components/sidemenu/2_kotak_masuk/inboxStorage";
import { formatGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";

export const publicServiceEventEngine = {
  processDailyEvents: (gameDate: Date, stats: { healthImpact: number; securityLevel: number }) => {
    // 1. Tick existing events (reduce duration)
    eventStorage.tickEvents();

    // 2. HEALTH EVENTS (Daily Probability Check)
    const activeEvents = eventStorage.getActiveEvents();
    const hasActiveHealth = activeEvents.some(e => e.type === 'health');
    
    if (!hasActiveHealth) {
      // Chance base 1.5% daily, increased if health impact is low
      const healthThreshold = 10; // 10% protection baseline
      const dangerGap = Math.max(0, healthThreshold - stats.healthImpact);
      const healthChance = 0.015 + (dangerGap * 0.005); 

      if (Math.random() < healthChance) {
        const scenarios = Object.values(healthEventScenarios);
        const randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
        
        eventStorage.addEvent({
          id: randomScenario.id,
          type: 'health',
          severity: randomScenario.severity,
          startTime: gameDate.getTime(),
          remainingDays: randomScenario.durationInDays,
          penalty: {
            lifeExpectancy: randomScenario.lifeExpectancyPenalty,
            budget: randomScenario.dailyBudgetCost,
            populationDelta: -Math.floor(Math.random() * (randomScenario.mortalityRange.max - randomScenario.mortalityRange.min + 1) + randomScenario.mortalityRange.min)
          }
        });

        inboxStorage.addMessage({
          source: "Kementerian Kesehatan",
          subject: randomScenario.inboxTemplate.subject,
          content: randomScenario.inboxTemplate.content,
          time: formatGameDate(gameDate),
          priority: randomScenario.inboxTemplate.priority,
          category: 'general'
        });
      }
    }

    // 3. SECURITY EVENTS (Monthly Trigger: 1st day of month)
    if (gameDate.getDate() === 1) {
      const hasActiveSecurity = activeEvents.some(e => e.type === 'security');
      if (!hasActiveSecurity) {
        // Trigger 1-2 events monthly
        const eventCount = Math.random() < 0.5 ? 2 : 1;
        const allSecurityScenarios = Object.values(securityEventScenarios);
        
        // Filter based on security level
        // High level (>80) -> only medium/low severity
        // Low level (<50) -> can trigger Crisis/High severity
        const availableScenarios = allSecurityScenarios.filter(s => {
          if (stats.securityLevel > 80) return s.severity !== 'Crisis';
          if (stats.securityLevel < 50) return true; // everything possible
          return s.severity !== 'Crisis' || Math.random() < 0.2; // slight chance of crisis
        });

        for (let i = 0; i < eventCount; i++) {
          if (availableScenarios.length === 0) break;
          const randomIndex = Math.floor(Math.random() * availableScenarios.length);
          const scenario = availableScenarios.splice(randomIndex, 1)[0];

          eventStorage.addEvent({
            id: scenario.id,
            type: 'security',
            severity: scenario.severity,
            startTime: gameDate.getTime(),
            remainingDays: scenario.durationInDays,
            penalty: {
              securityLevel: scenario.securityScorePenalty,
              stabilitiy: scenario.stabilityPenalty,
              budget: scenario.economicLoss / scenario.durationInDays // spread budget loss
            }
          });

          inboxStorage.addMessage({
            source: "Markas Besar Kepolisian",
            subject: scenario.inboxTemplate.subject,
            content: scenario.inboxTemplate.content,
            time: formatGameDate(gameDate),
            priority: scenario.inboxTemplate.priority,
            category: 'defense'
          });
        }
      }
    }
  }
};
