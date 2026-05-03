
export interface AlasanVote {
  alasan: string;
  detail: string;
}

export const sanksiReasons = {
  SETUJU: [
    { alasan: "Pelanggaran HAM", detail: "Merespon laporan serius mengenai pelanggaran hak asasi manusia yang sistematis." },
    { alasan: "Agresi Militer", detail: "Hukuman atas tindakan agresi militer yang tidak diprovokasi terhadap kedaulatan negara lain." },
    { alasan: "Uji Coba Nuklir", detail: "Menentang pengembangan senjata pemusnah massal yang mengancam stabilitas global." },
    { alasan: "Pelanggaran Perbatasan", detail: "Menanggapi provokasi perbatasan yang berulang kali terjadi." },
    { alasan: "Dukungan Terorisme", detail: "Diduga kuat mendanai kelompok radikal yang mengancam keamanan internasional." }
  ],
  TOLAK: [
    { alasan: "Kedaulatan Negara", detail: "Menjunjung tinggi prinsip non-intervensi terhadap urusan domestik negara berdaulat." },
    { alasan: "Beban Kemanusiaan", detail: "Khawatir sanksi ekonomi akan menyengsarakan rakyat sipil yang tidak bersalah." },
    { alasan: "Ketidakadilan Politik", detail: "Menganggap resolusi ini hanya alat politik negara besar untuk menekan rivalnya." },
    { alasan: "Efek Samping Ekonomi", detail: "Khawatir akan gangguan pada rantai pasokan global yang merugikan banyak negara." },
    { alasan: "Dialog Diplomatik", detail: "Lebih mengutamakan dialog bilateral daripada tindakan koersif sepihak." }
  ],
  ABSTAIN: [
    { alasan: "Netralitas Aktif", detail: "Memilih untuk tidak memihak demi menjaga peran sebagai mediator di masa depan." },
    { alasan: "Kurang Bukti", detail: "Menilai data dan bukti yang diajukan belum cukup kuat untuk mengambil tindakan drastis." },
    { alasan: "Kepentingan Ganda", detail: "Memiliki hubungan strategis dengan kedua belah pihak sehingga menghindari konflik kepentingan." },
    { alasan: "Peninjauan Internal", detail: "Masih melakukan koordinasi internal untuk menentukan posisi yang paling menguntungkan." }
  ]
};
