export const mainTradeRoutes = [
  // 1. Jalur Utama Selat Malaka - Laut Jawa (Aceh - Singapura - Jakarta - Surabaya)
  [
    { lon: 95.5, lat: 5.5 },     // Pintu Masuk Selat Malaka (Aceh)
    { lon: 98.0, lat: 4.0 },     // Selat Malaka Tengah (Medan)
    { lon: 101.5, lat: 2.2 },    // Dumai / Pekanbaru Outer
    { lon: 103.8, lat: 1.25 },   // Singapura (Hub Utama)
    { lon: 104.5, lat: -0.5 },   // Selat Riau / Batam
    { lon: 106.3, lat: -3.0 },   // Laut Natuna Selatan
    { lon: 106.8, lat: -5.8 },   // Laut Jawa (Dekat Jakarta)
    { lon: 110.0, lat: -6.3 },   // Laut Jawa Tengah (Semarang)
    { lon: 112.7, lat: -6.8 },   // Laut Jawa Timur (Surabaya)
    { lon: 114.5, lat: -8.0 },   // Selat Bali
    { lon: 116.0, lat: -8.5 }    // Keluar ke Samudra Hindia (Lombok)
  ],
  // 2. Sirip Selat Sunda (Samudra Hindia ke Jakarta)
  [
    { lon: 104.5, lat: -7.5 },   // Samudra Hindia (Barat Daya Lampung)
    { lon: 105.8, lat: -6.0 },   // Selat Sunda
    { lon: 106.8, lat: -5.8 }    // Bertemu di Laut Jawa (Jakarta)
  ],
  // 3. Jalur Logistik Selat Makassar (Filipina - Kalimantan - Jawa)
  [
    { lon: 120.0, lat: 4.5 },    // Laut Sulawesi (Sulu Sea Connection)
    { lon: 118.5, lat: 2.0 },    // Tarakan / Sangkulirang Outer
    { lon: 118.5, lat: -1.0 },   // Selat Makassar Tengah
    { lon: 117.0, lat: -4.0 },   // Balikpapan / Banjarmasin exit
    { lon: 115.5, lat: -5.5 },   // Laut Jawa Utara
    { lon: 112.7, lat: -6.8 }    // Bertemu di Surabaya
  ],
  // 4. Sirip Laut Flores - Banda (Surabaya ke Maluku)
  [
    { lon: 112.7, lat: -6.8 },   // Surabaya
    { lon: 119.5, lat: -7.5 },   // Laut Flores
    { lon: 121.5, lat: -5.5 },   // Laut Banda (Buton/Wakatobi)
    { lon: 126.0, lat: -3.5 },   // Pulau Buru / Ambon Node
    { lon: 131.0, lat: -1.0 }    // Sorong (Papua)
  ]
];
LinePlaceholder: true
