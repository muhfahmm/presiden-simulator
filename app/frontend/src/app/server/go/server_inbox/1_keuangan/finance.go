package finance

import (
	"fmt"
	"time"
	"emserver/core"
)

func GenerateBatch(dateStr string, count int) {
	templates := []struct {
		sender, subj, content string
	}{
		{"IMF", "Laporan Outlook Ekonomi Bulanan", "Tim teknis IMF telah merampungkan tinjauan bulanan terhadap performa fiskal Anda. Data menunjukkan stabilitas yang cukup baik, namun kami merekomendasikan pemantauan ketat terhadap rasio belanja modal."},
		{"World Bank", "Proyeksi Pertumbuhan PDB", "Berdasarkan analisis terbaru kami, negara Anda diproyeksikan mengalami pertumbuhan stabil didorong sektor produksi domestik. Investasi infrastruktur menjadi kunci akselerasi ekonomi."},
		{"Kementerian Keuangan", "Laporan Neraca Perdagangan", "Defisit/surplus neraca perdagangan bulan ini menunjukkan dinamika yang perlu dicermati. Volume ekspor komoditas primer mengalami fluktuasi akibat perubahan harga pasar global."},
		{"Bank Sentral", "Update Kebijakan Moneter", "Bank Sentral memutuskan untuk mempertahankan suku bunga acuan. Keputusan ini bertujuan menjaga inflasi di koridor target sambil mendorong pertumbuhan kredit sektor produktif."},
		{"Kementerian Ekonomi", "Analisis Pasar Komoditas Minerba", "Fluktuasi harga pada pasar komoditas mineral kritis global berpotensi mempengaruhi nilai ekspor dalam waktu dekat. Pelaku industri disarankan mengantisipasi volatilitas."},
		{"Kementerian Ekonomi", "Update Indeks Kepercayaan Investor", "Indeks kepercayaan investor terhadap ekonomi nasional menunjukkan tren positif, dipicu kebijakan fiskal konsisten dan stabilitas politik yang terjaga."},
		{"BPS (Biro Pusat Statistik)", "Laporan Inflasi Bulanan", "Tingkat inflasi bulan ini tercatat dalam rentang terkendali. Harga bahan pokok relatif stabil meskipun terjadi kenaikan biaya energi di beberapa wilayah."},
		{"Kementerian BUMN", "Kinerja Perusahaan Negara", "Laba bersih gabungan perusahaan-perusahaan negara mengalami peningkatan dibandingkan kuartal sebelumnya. Sektor perbankan dan energi menjadi kontributor utama pertumbuhan."},
		{"Otoritas Jasa Keuangan", "Stabilitas Sistem Keuangan", "Rasio kecukupan modal perbankan nasional berada di atas ambang batas minimum. Likuiditas sektor keuangan dinilai masih memadai untuk mendukung ekspansi kredit."},
		{"IMF", "Rekomendasi Reformasi Fiskal", "Tim konsultan IMF menyarankan diversifikasi sumber pendapatan negara di luar komoditas. Penguatan basis pajak dan efisiensi belanja menjadi prioritas reformasi yang direkomendasikan."},
		{"World Bank", "Laporan Kemiskinan & Ketimpangan", "Indeks Gini menunjukkan perbaikan marginal dalam distribusi pendapatan. Program subsidi terarah dan perluasan jaminan sosial dinilai berkontribusi pada penurunan kesenjangan."},
		{"Kementerian Keuangan", "Realisasi APBN", "Realisasi pendapatan negara mencapai target yang ditetapkan. Belanja infrastruktur menyerap porsi terbesar, diikuti oleh belanja pendidikan dan kesehatan."},
	}

	for i := 0; i < count; i++ {
		t := templates[core.Rng.Intn(len(templates))]
		nation := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
		content := t.content
		if core.Rng.Intn(3) == 0 {
			content += fmt.Sprintf(" Catatan: Dinamika ekonomi %s juga ikut mempengaruhi proyeksi ini.", nation)
		}
		core.AddInboxItemLocked(t.sender, t.subj, content, "finance", "low", false, "", dateStr)
		time.Sleep(time.Microsecond)
	}
}
