"use client"

import { aiBudgetStorage } from "@/app/game/components/modals/1_info_strategis/5_Keuangan/AIBudgetStorage";
import { aiHappinessStorage } from "@/app/game/components/modals/1_info_strategis/6_Kepuasan/AIHappinessStorage";
import { DATA_ACARA } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/1_kepuasan/acara/acaraStorage";
import { aiPublicEventStorage } from "../antarmuka_data_acara/AIPublicEventStorage";
import { aiRootCauseStorage } from "../../../../modals/1_info_strategis/6_Kepuasan/socialDiagnosisStorage";
import { EksekutorAcaraNasional } from "../sistem_tindakan_respon/EksekutorAcaraNasional";
import { timeStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage";

export class PusatKeputusanAcara {
  /**
   * Main thinking cycle for AI events.
   */
  static async pikiurkan(countryNameEn: string) {
    const gameDate = timeStorage.getState().gameDate;
    const budget = aiBudgetStorage.getBudget(countryNameEn);
    const happiness = aiHappinessStorage.getSatisfaction(countryNameEn);
    const history = aiPublicEventStorage.getCountryHistory(countryNameEn);
    const socialDiagnosis = aiRootCauseStorage.getLatest(countryNameEn);

    // Filter out events that are currently on cooldown
    const availableEvents = DATA_ACARA.filter(acara => {
      const { diffDays } = aiPublicEventStorage.getCooldownStatus(countryNameEn, acara.id, gameDate);
      return diffDays === undefined || diffDays >= acara.cooldownDays;
    });

    if (availableEvents.length === 0) return;

    // Prepare packet for Python
    const body = {
      negara: countryNameEn,
      budget: budget,
      happiness: happiness,
      events: availableEvents,
      history: history,
      root_cause: socialDiagnosis.root_cause
    };

    try {
      const response = await fetch("/game/components/AI_logic/1_AI_Kepuasan/routes/2_naikkan_kepuasan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      const result = await response.json();

      if (result.decision === "EXECUTE") {
        console.log(`[AI Event Decision] ${countryNameEn} DECIDED: ${result.event_id}. Reason: ${result.reason}`);
        await EksekutorAcaraNasional.laksanakan(countryNameEn, result.event_id, gameDate);
      } else {
        // console.log(`[AI Event Decision] ${countryNameEn} skipped: ${result.reason}`);
      }
    } catch (err) {
      console.error(`[AI Event Decision] Error for ${countryNameEn}:`, err);
    }
  }
}

