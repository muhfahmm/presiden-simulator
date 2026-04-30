#include <iostream>
#include <string>
#include <map>

/**
 * MATRIKS EFEKTIVITAS UNIT (C++)
 * Menentukan pengali kerusakan berdasarkan tipe unit penyerang vs tipe unit bertahan.
 * Logika ini memastikan pertempuran tidak hanya ditentukan oleh angka, tapi juga jenis senjata.
 */

enum class TipeUnit {
    INFANTERI,
    TANK,
    ARTILERI,
    SAM,
    JET,
    KAPAL,
    DRONE,
    UNKNOWN
};

TipeUnit stringKeTipe(std::string nama) {
    if (nama.find("Infanteri") != std::string::npos) return TipeUnit::INFANTERI;
    if (nama.find("Tank") != std::string::npos) return TipeUnit::TANK;
    if (nama.find("Artileri") != std::string::npos) return TipeUnit::ARTILERI;
    if (nama.find("SAM") != std::string::npos) return TipeUnit::SAM;
    if (nama.find("Jet") != std::string::npos) return TipeUnit::JET;
    if (nama.find("Kapal") != std::string::npos) return TipeUnit::KAPAL;
    if (nama.find("Drone") != std::string::npos) return TipeUnit::DRONE;
    return TipeUnit::UNKNOWN;
}

/**
 * MENDAPATKAN PENGALI EFEKTIVITAS
 * @param penyerang Tipe unit yang melakukan serangan
 * @param bertahan Tipe unit yang menerima serangan
 * @return double Pengali kerusakan (0.1 - 5.0)
 */
double dapatkan_pengali_efektivitas(std::string penyerang, std::string bertahan) {
    TipeUnit tipeP = stringKeTipe(penyerang);
    TipeUnit tipeB = stringKeTipe(bertahan);

    // LOGIKA SPESIFIK (REALISTIS)
    
    // Infanteri vs ...
    if (tipeP == TipeUnit::INFANTERI) {
        if (tipeB == TipeUnit::TANK) return 0.2; // Sangat tidak efektif melawan baja berat
        if (tipeB == TipeUnit::JET) return 0.05; // Hampir mustahil mengenai jet
        if (tipeB == TipeUnit::INFANTERI) return 1.0; 
        return 0.5;
    }

    // Tank vs ...
    if (tipeP == TipeUnit::TANK) {
        if (tipeB == TipeUnit::INFANTERI) return 4.0; // Sangat efektif membasmi infantri
        if (tipeB == TipeUnit::ARTILERI) return 2.0; // Tank bisa mendekat dan menghancurkan artileri
        if (tipeB == TipeUnit::SAM) return 3.0;
        return 1.2;
    }

    // SAM (Surface-to-Air Missile) vs ...
    if (tipeP == TipeUnit::SAM) {
        if (tipeB == TipeUnit::JET) return 6.0; // Counter utama pesawat
        if (tipeB == TipeUnit::DRONE) return 4.0;
        return 0.1; // SAM tidak berguna untuk target darat/laut
    }

    // Artileri vs ...
    if (tipeP == TipeUnit::ARTILERI) {
        if (tipeB == TipeUnit::INFANTERI) return 2.5;
        if (tipeB == TipeUnit::TANK) return 1.5; // Bisa menembus baja dengan tembakan langsung
        return 1.0;
    }

    // Jet vs ...
    if (tipeP == TipeUnit::JET) {
        if (tipeB == TipeUnit::KAPAL) return 2.5; // Serangan udara ke laut sangat kuat
        if (tipeB == TipeUnit::TANK) return 2.0;
        return 1.5;
    }

    return 1.0; // Default jika tidak ada kecocokan khusus
}

int main() {
    // Contoh penggunaan
    std::cout << "Efektivitas Tank vs Infanteri: " << dapatkan_pengali_efektivitas("Main Battle Tank", "Pasukan Infanteri") << "x" << std::endl;
    return 0;
}
