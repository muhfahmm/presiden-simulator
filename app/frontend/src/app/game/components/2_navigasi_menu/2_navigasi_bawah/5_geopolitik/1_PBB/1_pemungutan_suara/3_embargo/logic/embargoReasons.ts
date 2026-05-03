
export interface AlasanVote {
  alasan: string;
  detail: string;
}

export const embargoReasons = {
  SETUJU: [
    { alasan: "Keamanan Regional", detail: "Mencegah penumpukan kekuatan militer yang dapat memicu perang besar di kawasan." },
    { alasan: "Penyebaran Senjata", detail: "Menghentikan aliran komponen militer ke negara yang sedang berkonflik." },
    { alasan: "Tekanan Maksimal", detail: "Langkah terakhir untuk memaksa target kembali ke meja perundingan." },
    { alasan: "Boikot Ekonomi", detail: "Solidaritas global untuk menghentikan pendanaan mesin perang target." }
  ],
  TOLAK: [
    { alasan: "Ketergantungan Energi", detail: "Sangat bergantung pada pasokan sumber daya dari target untuk kebutuhan domestik." },
    { alasan: "Kemitraan Strategis", detail: "Menjaga kontrak jangka panjang yang krusial bagi industri dalam negeri." },
    { alasan: "Prinsip Perdagangan Bebas", detail: "Menolak pembatasan perdagangan yang dianggap melanggar hukum ekonomi internasional." },
    { alasan: "Stabilitas Pasar", detail: "Mencegah lonjakan harga komoditas global akibat hilangnya suplai dari target." }
  ],
  ABSTAIN: [
    { alasan: "Evaluasi Dampak", detail: "Sedang mengkaji dampak jangka panjang terhadap ekonomi nasional sendiri." },
    { alasan: "Posisi Menunggu", detail: "Menunggu konsensus dari blok regional sebelum mengambil keputusan akhir." },
    { alasan: "Hubungan Tradisional", detail: "Menghormati sejarah hubungan baik tanpa mendukung tindakan target saat ini." }
  ]
};
