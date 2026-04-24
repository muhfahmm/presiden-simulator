/**
 * Menghitung bonus stabilitas dari tingkat kepuasan rakyat yang tinggi.
 */
export function calculateHappinessStabilityBonus(happiness: number): number {
    let delta = 0;

    // Rakyat yang sangat puas (> 80) memberikan pondasi stabilitas yang kuat
    if (happiness > 80) {
        delta += 0.15;
    } else if (happiness > 70) {
        delta += 0.05;
    }

    return delta;
}
