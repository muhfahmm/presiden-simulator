#include <iostream>
#include <algorithm>

/**
 * SISTEM PROBABILITAS DIPLOMASI (C++)
 * Menghitung peluang keberhasilan negosiasi gencatan senjata.
 */

struct KondisiPerang {
    double skor_kekuatan_player;
    double skor_kekuatan_musuh;
    double kekuatan_maksimal_musuh; // Tambahkan daya maksimal untuk hitung persentase
    double korban_jiwa_player;
    double korban_jiwa_musuh;
    int hari_berlalu;
};

class DiplomasiEngine {
public:
    static double hitung_peluang_gencatan(KondisiPerang kondisi) {
        double final_chance = 0.3; // Base chance

        // LOGIKA KHUSUS: Skala keputusasaan AI (20% - 5%)
        double persentase_power_musuh = (kondisi.skor_kekuatan_musuh / kondisi.kekuatan_maksimal_musuh) * 100.0;
        
        if (persentase_power_musuh <= 5.0) {
            final_chance = 0.95; // 95% jika sudah di ambang kehancuran (5%)
        } else if (persentase_power_musuh <= 10.0) {
            final_chance = 0.85; // 85% jika sisa 10%
        } else if (persentase_power_musuh <= 20.0) {
            final_chance = 0.70; // 70% jika sisa 20%
        } else {
            // Logika Normal
            double exhaustion_musuh = kondisi.korban_jiwa_musuh / 100000.0;
            double durasi_bonus = std::min(0.4, kondisi.hari_berlalu / 30.0 * 0.1);
            final_chance += (exhaustion_musuh * 0.5) + durasi_bonus;
        }

        return std::min(0.95, std::max(0.05, final_chance));
    }
};

int main() {
    // Simulasi: Musuh sisa 2000 power dari 10000 (20%)
    KondisiPerang data = { 5000.0, 2000.0, 10000.0, 1500.0, 3000.0, 14 };
    double peluang = DiplomasiEngine::hitung_peluang_gencatan(data);
    
    std::cout << "Persentase Power Musuh: " << (data.skor_kekuatan_musuh / data.kekuatan_maksimal_musuh) * 100 << "%" << std::endl;
    std::cout << "Peluang Gencatan Senjata: " << peluang * 100 << "%" << std::endl;
    
    return 0;
}
