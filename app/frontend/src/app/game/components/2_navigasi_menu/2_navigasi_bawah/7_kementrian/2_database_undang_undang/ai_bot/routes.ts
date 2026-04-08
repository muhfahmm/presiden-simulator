import { MOCK_LAWS } from "../database_uu";

export const getAiRecommendations = (country: any, session: any) => {
  const recommendations: { lawId: number; reason: string }[] = [];
  const religion = session?.religion || "Islam";
  const ideology = session?.ideology || "Demokrasi";
  
  const gdp = parseInt(country.pendapatan_nasional || "0");
  const securityIndex = country.sektor_sosial?.hukum?.indeks_keamanan || 70;
  const crimeRate = 100 - securityIndex;
  const corruptionIndex = country.sektor_sosial?.hukum?.indeks_korupsi || 50;
  const approvalRating = session?.approval_rating || 50;
  const population = parseInt(country.jumlah_penduduk || "0");
  
  // 1. INDUSTRI
  if (gdp < 35000) {
    recommendations.push({
      lawId: 26,
      reason: "Kemandirian industri mendesak. TKDN Ketat akan memaksa pertumbuhan vendor lokal dan mengurangi ketergantungan impor."
    });
  } else if (gdp < 50000) {
    recommendations.push({
      lawId: 19,
      reason: "Hilirisasi adalah kunci. Kita harus berhenti mengekspor tanah air dan mulai mengekspor produk jadi."
    });
  } else {
    recommendations.push({
      lawId: 1,
      reason: "Guna menjaga daya saing global, Otomasi Industri berbasis AI harus segera diterapkan di pabrik utama."
    });
  }

  // 2. KEAMANAN
  if (crimeRate > 30) {
    recommendations.push({
      lawId: 28,
      reason: "Serangan siber meningkat drastis. Satuan Polisi Siber G20 harus dibentuk untuk mengamankan data perbankan."
    });
  } else if ((country.sektor_pertahanan?.pangkalan_udara || 0) < 50) {
    recommendations.push({
      lawId: 24,
      reason: "Kedaulatan udara kita rentan. Radar pengintai baru diperlukan untuk mendeteksi pesawat intelijen asing."
    });
  } else {
    recommendations.push({
      lawId: 29,
      reason: "Digital ID akan mempermudah pelacakan kriminalitas terorganisir dan efisiensi birokrasi keamanan."
    });
  }

  // 3. EKONOMI (IDEOLOGY BASED)
  if (ideology === "Komunisme" || ideology === "Sosialisme") {
    recommendations.push({
      lawId: 30,
      reason: `Sebagai negara ${ideology}, Nasionalisasi Strategis adalah langkah mutlak untuk memastikan kemandirian ekonomi dari cengkeraman modal asing.`
    });
  } else if (ideology === "Kapitalisme" || ideology === "Liberalisme") {
    recommendations.push({
      lawId: 18,
      reason: `Visi ${ideology} kita menuntut pasar yang terbuka. Zona Perdagangan Bebas akan mendongkrak devisa negara melalui ekspor-impor.`
    });
  } else if (parseInt(session?.cash || "0") < 20000) {
    recommendations.push({
      lawId: 30,
      reason: "Kas negara menipis. Nasionalisasi aset strategis akan mengalihkan 100% laba perusahaan vital ke anggaran negara."
    });
  } else {
    recommendations.push({
      lawId: 20,
      reason: "Pajak Kekayaan Ekstrim diperlukan untuk memperkecil jurang kesenjangan dan mendanai proyek infrastruktur."
    });
  }

  // 4. MILITER & PERTAHANAN
  if ((country.sektor_pertahanan?.radar || 0) < 50) {
    recommendations.push({
      lawId: 33,
      reason: "Sistem Rudal Jarak Jauh akan memberikan deterrence (efek getar) yang kuat terhadap agresi negara tetangga."
    });
  } else if ((country.sektor_pertahanan?.pelabuhan_militer || 0) < 50) {
    recommendations.push({
      lawId: 34,
      reason: "Sebagai negara kepulauan, armada laut yang modern adalah mutlak untuk menjaga ZEE dari pencurian ikan."
    });
  } else {
    recommendations.push({
      lawId: 35,
      reason: "Satelit Militer akan memberikan keunggulan informasi di medan perang secara real-time bagi komando pusat."
    });
  }

  // 5. SOSIAL & KEPENDUDUKAN (RELIGION BASED)
  if (religion === "Islam" || religion === "Katolik" || religion === "Protestan") {
    recommendations.push({
      lawId: 9,
      reason: `Nilai-nilai ${religion} kita menekankan kepedulian sosial. Jaminan Sosial Semesta akan menjamin kesejahteraan seluruh rakyat tanpa kecuali.`
    });
  } else if (religion === "Ateisme" || religion === "Shinto") {
    recommendations.push({
      lawId: 23,
      reason: `Fokus pada efisiensi dan pendidikan ${religion} menuntut Infrastruktur Pendidikan Digital yang mumpuni untuk masa depan bangsa.`
    });
  } else if (approvalRating < 60) {
    recommendations.push({
      lawId: 9,
      reason: "Jaminan Sosial Semesta akan menjamin loyalitas warga kelas bawah dan mencegah risiko demonstrasi massal."
    });
  } else {
    recommendations.push({
      lawId: 25,
      reason: "Mentalitas produktif warga adalah aset. Layanan kesehatan mental gratis akan meningkatkan output kerja nasional."
    });
  }

  // 6. ENERGI & LINGKUNGAN
  if ((country.sektor_energi?.emisi || 0) > 40) {
    recommendations.push({
      lawId: 10,
      reason: "Transisi Hijau Paksa akan membersihkan udara kota dan menarik investor teknologi masa depan."
    });
  } else if (ideology === "Komunisme") {
    recommendations.push({
      lawId: 11,
      reason: "Monopoli Energi Negara memastikan rakyat mendapatkan tarif listrik termurah demi kesejahteraan umum, sesuai prinsip sosialisme."
    });
  } else {
    recommendations.push({
      lawId: 22,
      reason: "Biofuel Mandatori akan menghemat devisa dengan mengurangi impor BBM dan mendukung kemandirian energi."
    });
  }

  // 7. HUKUM & KETERTIBAN (IDEOLOGY BASED)
  if (ideology === "Demokrasi") {
    recommendations.push({
      lawId: 21,
      reason: "Sebagai negara Demokrasi, transparansi adalah harga mati. Audit Pejabat diperlukan untuk menjaga integritas pemerintahan."
    });
  } else if (ideology === "Otoriter" || ideology === "Monarki") {
    recommendations.push({
      lawId: 15,
      reason: `Kestabilan pusat kekuasaan ${ideology} menuntut Pengawasan Biometrik Massal untuk mencegah infiltrasi dan menjaga ketertiban umum.`
    });
  } else if (corruptionIndex < 70) {
    recommendations.push({
      lawId: 21,
      reason: "Indeks korupsi rendah. Audit Transparansi Pejabat secara berkala akan membersihkan birokrasi dari tikus kantor."
    });
  } else {
    recommendations.push({
      lawId: 14,
      reason: "Hukuman Mati bagi pengedar narkoba dan teroris akan memberikan shock therapy bagi pelaku kriminal."
    });
  }

  // 8. HUBUNGAN INTERNASIONAL
  if (ideology === "Nasionalisme") {
    recommendations.push({
      lawId: 40,
      reason: "Kedaulatan hukum nasional harus ditegakkan. Perjanjian Ekstradisi akan memastikan tidak ada tempat aman bagi pengkhianat bangsa."
    });
  } else if (approvalRating > 80) {
    recommendations.push({
      lawId: 39,
      reason: "Dengan dukungan rakyat yang kuat, Pertukaran Budaya Global akan mendongkrak Soft Power kita di mata dunia."
    });
  } else {
    recommendations.push({
      lawId: 38,
      reason: "Bergabung dalam Pakta Pertahanan Regional akan menghemat anggaran militer dan memberikan rasa aman kolektif."
    });
  }

  return recommendations;
};
