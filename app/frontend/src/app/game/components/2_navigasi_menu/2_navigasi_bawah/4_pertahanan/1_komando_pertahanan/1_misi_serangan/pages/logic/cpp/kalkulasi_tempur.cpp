#include <iostream>
#include <vector>
#include <string>
#include <cmath>
#include <algorithm>

/**
 * STRUKTUR DATA UNIT MILITER
 * Digunakan untuk menyimpan informasi kekuatan dan jumlah pasukan.
 */
struct UnitMiliter {
    std::string nama;
    int jumlah;
    double kekuatan_dasar;
    double efisiensi_tempur;
};

/**
 * LOGIKA UTAMA PENGHITUNGAN ATRIBUSI TEMPUR (C++)
 * Menghitung pengurangan pasukan berdasarkan intensitas pertempuran dan keunggulan taktis.
 * 
 * @param jumlah_pasukan Jumlah pasukan saat ini
 * @param kekuatan_lawan Total kekuatan musuh yang dihadapi
 * @param faktor_pertahanan Bonus pertahanan wilayah (0.0 - 1.0)
 * @return int Jumlah pasukan yang gugur
 */
int hitung_kerugian_pasukan(int jumlah_pasukan, double kekuatan_lawan, double faktor_pertahanan) {
    if (jumlah_pasukan <= 0) return 0;

    // Rumus Lanchester Linear: Kerugian proporsional terhadap kekuatan lawan
    // dikurangi oleh faktor efektivitas pertahanan.
    double rasio_atrisi = 0.05; // Dasar 5% per siklus tempur
    double penalti_kekuatan = (kekuatan_lawan / 100000.0) * 2.0;
    
    double kerugian_raw = (jumlah_pasukan * rasio_atrisi) + penalti_kekuatan;
    
    // Mitigasi oleh pertahanan (makin tinggi faktor, makin sedikit yang gugur)
    double kerugian_final = kerugian_raw * (1.0 - (faktor_pertahanan * 0.5));

    // Pastikan tidak melebihi jumlah pasukan yang ada
    return std::min(jumlah_pasukan, (int)std::round(kerugian_final));
}

/**
 * FUNGSI SIMULASI REALISTIS
 * Mengiterasi seluruh kategori unit untuk menghitung status terbaru setelah kontak senjata.
 */
void simulasi_kontak_senjata() {
    // Contoh implementasi logika untuk integrasi WASM nantinya
    std::cout << "Kalkulator Tempur C++ Aktif: Menghitung parameter atrisi..." << std::endl;
}
