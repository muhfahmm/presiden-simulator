#include <iostream>
#include <string>
#include <algorithm>

/**
 * SISTEM NEGOSIASI PERDAMAIAN (C++)
 * Menghitung probabilitas musuh menerima perjanjian damai permanen.
 */

struct SkorDiplomasi {
    double exhaustion_pemain;
    double exhaustion_musuh;
    double poin_kemenangan; // 0-100 (seberapa jauh kita mendominasi)
    bool pernah_gencatan;
    int tawaran_sebelumnya;
};

class PeaceNegotiator {
public:
    static double hitung_peluang_damai(SkorDiplomasi skor) {
        double base_chance = 0.1; // Perdamaian permanen sangat sulit diawal
        
        // Poin Kemenangan adalah faktor utama
        double win_factor = (skor.poin_kemenangan / 100.0) * 0.6;
        
        // Exhaustion musuh membuat mereka lebih condong ke damai
        double exhaustion_factor = (skor.exhaustion_musuh / 100.0) * 0.3;
        
        // Jika pernah gencatan senjata, ada sedikit kepercayaan (trust)
        double trust_bonus = skor.pernah_gencatan ? 0.15 : 0.0;
        
        // Penalti jika terlalu sering menawar tapi ditolak
        double fatigue_penalty = skor.tawaran_sebelumnya * 0.05;

        double total = base_chance + win_factor + exhaustion_factor + trust_bonus - fatigue_penalty;
        
        return std::min(0.95, std::max(0.01, total));
    }
};
