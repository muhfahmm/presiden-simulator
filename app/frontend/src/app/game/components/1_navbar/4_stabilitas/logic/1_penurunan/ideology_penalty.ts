import { LIBERALISME_STABILITY_PENALTY } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/2_ideologi/logic/5_liberalisme/2_minus/minus";
import { MONARKI_REVOLUTION_RISK_MODIFIER } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/2_ideologi/logic/8_monarki/2_minus/minus";

/**
 * Menghitung dampak ideologi terhadap stabilitas.
 */
export function calculateIdeologyStabilityImpact(ideology: string, happiness: number): number {
    let delta = 0;

    // Liberalisme: Penalti konstan karena kebebasan individu yang tinggi sering berujung protes
    if (ideology === "Liberalisme") {
        delta += LIBERALISME_STABILITY_PENALTY; // -0.2
    }

    // Monarki: Stabil jika raja populer, tapi risiko revolusi tinggi jika rakyat tidak puas
    if (ideology === "Monarki" && happiness < 40) {
        // Penalti dasar diperberat oleh multiplier risiko revolusi
        const basePenalty = -0.1;
        delta += (basePenalty * MONARKI_REVOLUTION_RISK_MODIFIER); // -0.15
    }

    // Komunisme: Biasanya sangat stabil karena kontrol ketat (Bonus 0.05)
    if (ideology === "Komunisme") {
        delta += 0.05;
    }

    return delta;
}
