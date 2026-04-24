/**
 * Menghitung pemulihan alami stabilitas nasional (Natural Recovery).
 * Stabilitas memiliki kecenderungan untuk kembali ke titik ekuilibrium (baseline).
 */
export function calculateStabilityRecovery(currentStability: number, totalNegativeImpact: number): number {
    let delta = 0;
    const baseline = 50;

    // Jika tidak ada tekanan negatif yang besar, stabilitas perlahan kembali ke baseline
    if (totalNegativeImpact > -0.1) {
        if (currentStability < baseline) {
            // Pemulihan lebih cepat jika sangat rendah
            delta += 0.05;
        } else if (currentStability > baseline) {
            // Penurunan perlahan jika di atas baseline (menjaga tantangan)
            delta -= 0.02;
        }
    }

    return delta;
}
