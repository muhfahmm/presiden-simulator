/**
 * Menghitung dampak ketidakpuasan sosial (unrest) terhadap stabilitas.
 */
export function calculateSocialUnrestImpact(happiness: number, stability: number): number {
    let delta = 0;

    // Jika kepuasan sangat rendah (< 30), terjadi degradasi stabilitas parah (Protes/Kerusuhan)
    if (happiness < 30) {
        delta -= 0.3;
    } else if (happiness < 50) {
        delta -= 0.1;
    }

    // Jika stabilitas sudah rendah, unrest lebih mudah terjadi (efek bola salju)
    if (stability < 30 && happiness < 50) {
        delta -= 0.1;
    }

    return delta;
}
