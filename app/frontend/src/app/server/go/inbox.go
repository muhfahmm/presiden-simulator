package main

import (
	"fmt"
	"time"
)

// ═══════════════════════════════════════════════════════════
// INBOX ENGINE — Server-Authoritative Notification System
// Generates 10 messages per category every 7 game days
// Categories: finance, trade, embassy, pact, alliance
// ═══════════════════════════════════════════════════════════

// Commodities pool for trade offers
var tradeCommodities = []struct {
	name, unit string
	basePrice  int
}{
	{"Nikel", "Ton", 18500}, {"Tembaga", "Ton", 9200}, {"Bauksit", "Ton", 5400},
	{"Batu Bara", "Ton", 3100}, {"Minyak Sawit", "Ton", 7800}, {"Karet Alam", "Ton", 6200},
	{"Beras", "Ton", 4500}, {"Gandum", "Ton", 3800}, {"Kopi", "Ton", 12000},
	{"Kakao", "Ton", 8900}, {"Gula Tebu", "Ton", 5100}, {"Teh", "Ton", 7400},
	{"Mie Instan", "Karton", 2800}, {"Semen", "Ton", 1900}, {"Baja", "Ton", 8500},
	{"Tekstil", "Bal", 4200}, {"Elektronik", "Unit", 15000}, {"Pupuk", "Ton", 3500},
	{"Ikan Tuna", "Ton", 11000}, {"Udang", "Ton", 14500}, {"Rumput Laut", "Ton", 3200},
	{"Obat-obatan", "Palet", 22000}, {"Kayu Olahan", "m³", 6800}, {"Kelapa Sawit", "Ton", 7200},
	{"Lithium", "Ton", 42000}, {"Kobalt", "Ton", 35000}, {"Timah", "Ton", 25000},
	{"Aluminium", "Ton", 12500}, {"Serat Optik", "Km", 8000}, {"Komponen Chip", "Lot", 38000},
}

func processInboxDay(date time.Time) {
	dateStr := date.Format("02 Jan 2006")

	// Weekly batch: Every 7 game days, generate notifications per category
	if state.DayCounter > 0 && state.DayCounter%7 == 0 {
		weekNum := state.DayCounter / 7
		fmt.Printf("[INBOX] Week %d — Generating 70 notifications\n", weekNum)

		generateFinanceBatch(dateStr, 10)          // 10 Keuangan
		generateTradeImportBatch(dateStr, 10)      // 10 Tawaran Impor (AI jual ke user)
		generateTradeExportBatch(dateStr, 10)      // 10 Permintaan Ekspor (AI beli dari user)
		generateTradeContractBatch(dateStr, 10)    // 10 Kontrak Jangka Panjang
		generateTradeRouteBatch(dateStr, 10)       // 10 Perluasan Jalur Dagang
		generateEmbassyBatch(dateStr, 10)          // 10 Kedutaan
		generatePactBatch(dateStr, 10)             // 10 Pakta
		generateAllianceBatch(dateStr, 10)         // 10 Aliansi
	}
}

// addInboxItem adds a new message to the global simulation state
// IMPORTANT: Caller must already hold state.mu lock
func addInboxItem(sender, subject, content, category, priority string, isProposal bool, dateStr string) {
	newItem := InboxItem{
		ID:         fmt.Sprintf("isv-%d-%d", time.Now().UnixNano(), rng.Intn(99999)),
		Sender:     sender,
		Subject:    subject,
		Content:    content,
		Timestamp:  time.Now().UnixMilli(),
		Priority:   priority,
		Category:   category,
		IsProposal: isProposal,
		Read:       false,
		Time:       dateStr,
	}

	state.Inbox = append([]InboxItem{newItem}, state.Inbox...)

	// Keep max 200 messages to accommodate batch generation
	if len(state.Inbox) > 200 {
		state.Inbox = state.Inbox[:200]
	}
}

// ═══════════════════════════════════════════════════════════
// KEUANGAN (Finance) — 10 per week
// ═══════════════════════════════════════════════════════════

func generateFinanceBatch(dateStr string, count int) {
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
		t := templates[rng.Intn(len(templates))]
		nation := npcNations[rng.Intn(len(npcNations))]
		// Add variety by sometimes mentioning specific nations
		content := t.content
		if rng.Intn(3) == 0 {
			content += fmt.Sprintf(" Catatan: Dinamika ekonomi %s juga ikut mempengaruhi proyeksi ini.", nation)
		}
		addInboxItem(t.sender, t.subj, content, "finance", "low", false, dateStr)
		time.Sleep(time.Microsecond) // Ensure unique timestamps
	}
}

// ═══════════════════════════════════════════════════════════
// [1/4] TAWARAN IMPOR — AI menawarkan komoditas surplus ke user
// "Kami punya surplus, mau beli dari kami?" (10 per week)
// ═══════════════════════════════════════════════════════════

func generateTradeImportBatch(dateStr string, count int) {
	for i := 0; i < count; i++ {
		nation := npcNations[rng.Intn(len(npcNations))]
		c := tradeCommodities[rng.Intn(len(tradeCommodities))]

		vol := (rng.Intn(80) + 10) * 100
		disc := rng.Intn(25) + 5
		price := c.basePrice * (100 - disc) / 100
		total := price * vol
		expiry := rng.Intn(10) + 5

		var subj, content string
		switch rng.Intn(10) {
		case 0:
			subj = fmt.Sprintf("Penawaran Impor %s dari %s — Diskon %d%%", c.name, nation, disc)
			content = fmt.Sprintf("Pemerintah %s menawarkan %d %s %s dengan harga spesial %d EM/unit (diskon %d%% dari harga pasar %d EM/unit). Total: %d EM. Berlaku %d hari.", nation, vol, c.unit, c.name, price, disc, c.basePrice, total, expiry)
		case 1:
			subj = fmt.Sprintf("Flash Sale: %s Obral %s — Diskon %d%%", nation, c.name, disc)
			content = fmt.Sprintf("URGENT: Gudang komoditas %s di %s kelebihan stok. Ditawarkan %d %s %s dengan potongan %d%% (hanya %d EM/unit). Total: %d EM. Berakhir dalam %d hari.", c.name, nation, vol, c.unit, c.name, disc, price, total, expiry)
		case 2:
			subj = fmt.Sprintf("Paket Impor Premium %s — %s", c.name, nation)
			content = fmt.Sprintf("Kementerian Perdagangan %s menyusun paket impor premium %s. Volume: %d %s | Harga: %d EM/unit (hemat %d%%) | Total: %d EM. Termasuk sertifikasi internasional.", nation, c.name, vol, c.unit, price, disc, total)
		case 3:
			subj = fmt.Sprintf("Kerjasama Impor Bilateral: %s Tawarkan %s", nation, c.name)
			content = fmt.Sprintf("Dalam rangka kerjasama bilateral, %s menawarkan %d %s %s dengan tarif preferensial %d EM/unit (diskon mitra %d%%). Total: %d EM.", nation, vol, c.unit, c.name, price, disc, total)
		case 4:
			subj = fmt.Sprintf("Lelang Komoditas %s — %s", c.name, nation)
			content = fmt.Sprintf("Badan Perdagangan %s menggelar lelang %d %s %s. Harga pembukaan: %d EM/unit (di bawah pasar %d EM/unit). Total: %d EM. Anda mendapat prioritas.", nation, vol, c.unit, c.name, price, c.basePrice, total)
		case 5:
			subj = fmt.Sprintf("Subsidi Impor %s dari %s", c.name, nation)
			content = fmt.Sprintf("Pemerintah %s mengalokasikan subsidi ekspor. %d %s %s ditawarkan %d EM/unit (potongan %d%% dari %d EM). Total: %d EM. Berlaku %d hari.", nation, vol, c.unit, c.name, price, disc, c.basePrice, total, expiry)
		case 6:
			subj = fmt.Sprintf("Penawaran Eksklusif: %s Premium dari %s", c.name, nation)
			content = fmt.Sprintf("Produsen terkemuka %s menawarkan %s premium grade. Volume: %d %s | Harga mitra: %d EM/unit (diskon %d%%) | Total: %d EM. Sertifikasi ISO.", nation, c.name, vol, c.unit, price, disc, total)
		case 7:
			subj = fmt.Sprintf("Clearance Sale %s — %s", c.name, nation)
			content = fmt.Sprintf("%s melakukan clearance stok %s. %d %s ditawarkan %d EM/unit (potongan %d%%). Total: %d EM. Kesempatan langka harga terendah.", nation, c.name, vol, c.unit, price, disc, total)
		case 8:
			subj = fmt.Sprintf("Pra-Order %s Musim Panen — %s", c.name, nation)
			content = fmt.Sprintf("Kementerian Pertanian %s membuka pra-order %s. Kuota: %d %s | Harga terkunci: %d EM/unit (di bawah spot %d EM). Total: %d EM.", nation, c.name, vol, c.unit, price, c.basePrice, total)
		default:
			subj = fmt.Sprintf("Tawaran Komoditas Strategis %s — %s", c.name, nation)
			content = fmt.Sprintf("Badan Cadangan %s melepas cadangan %s ke mitra terpilih. Volume: %d %s | Harga: %d EM/unit | Diskon: %d%% | Total: %d EM.", nation, c.name, vol, c.unit, price, disc, total)
		}

		addInboxItem(fmt.Sprintf("Kemen. Perdagangan (%s)", nation), subj, content, "trade", "medium", true, dateStr)
		time.Sleep(time.Microsecond)
	}
}

// ═══════════════════════════════════════════════════════════
// [2/4] PERMINTAAN EKSPOR — AI minta beli komoditas dari user
// "Kami butuh komoditas Anda, mau jual ke kami?" (10 per week)
// ═══════════════════════════════════════════════════════════

func generateTradeExportBatch(dateStr string, count int) {
	for i := 0; i < count; i++ {
		nation := npcNations[rng.Intn(len(npcNations))]
		c := tradeCommodities[rng.Intn(len(tradeCommodities))]

		vol := (rng.Intn(60) + 5) * 100
		prem := rng.Intn(20) + 5
		buyP := c.basePrice * (100 + prem) / 100
		rev := buyP * vol
		days := rng.Intn(8) + 3

		var subj, content string
		switch rng.Intn(10) {
		case 0:
			subj = fmt.Sprintf("Permintaan Ekspor %s ke %s — Premium %d%%", c.name, nation, prem)
			content = fmt.Sprintf("%s membutuhkan %d %s %s, bersedia bayar %d EM/unit (+%d%% premium dari pasar %d EM). Pendapatan: +%d EM.", nation, vol, c.unit, c.name, buyP, prem, c.basePrice, rev)
		case 1:
			subj = fmt.Sprintf("URGENT: %s Butuh %s Segera", nation, c.name)
			content = fmt.Sprintf("DARURAT: %s krisis ketersediaan %s. Butuh %d %s segera, harga darurat %d EM/unit (premium %d%%). Pendapatan: +%d EM. Batas waktu: %d hari.", nation, c.name, vol, c.unit, buyP, prem, rev, days)
		case 2:
			subj = fmt.Sprintf("Tender Pengadaan %s oleh %s", c.name, nation)
			content = fmt.Sprintf("Pemerintah %s buka tender pengadaan %s. Kuota: %d %s | Harga: %d EM/unit (+%d%%) | Total: +%d EM. Akses prioritas mitra dagang.", nation, c.name, vol, c.unit, buyP, prem, rev)
		case 3:
			subj = fmt.Sprintf("Peluang Ekspor: %s Cari Pemasok %s", nation, c.name)
			content = fmt.Sprintf("Kemen. Perdagangan %s mencari pemasok tetap %s. Kebutuhan: %d %s | Harga: %d EM/unit (premium %d%%) | Pendapatan: +%d EM.", nation, c.name, vol, c.unit, buyP, prem, rev)
		case 4:
			subj = fmt.Sprintf("Permintaan Massal: %s Pesan %s", nation, c.name)
			content = fmt.Sprintf("Industri %s butuh %d %s %s untuk produksi massal. Harga beli: %d EM/unit (+%d%% premium). Total: +%d EM. Pengambilan dalam %d hari.", nation, vol, c.unit, c.name, buyP, prem, rev, days)
		case 5:
			subj = fmt.Sprintf("Program Impor Strategis %s — %s", c.name, nation)
			content = fmt.Sprintf("Badan Pengadaan %s mencanangkan impor strategis %s. Volume: %d %s | Harga premium: %d EM/unit (+%d%%) | Total: +%d EM.", nation, c.name, vol, c.unit, buyP, prem, rev)
		case 6:
			subj = fmt.Sprintf("Bantuan Kemanusiaan: %s Butuh %s", nation, c.name)
			content = fmt.Sprintf("Badan Penanggulangan %s butuh bantuan %s pasca bencana. Volume: %d %s | Harga: %d EM/unit. Pendapatan: +%d EM. Deadline: %d hari.", nation, c.name, vol, c.unit, buyP, rev, days)
		case 7:
			subj = fmt.Sprintf("Restocking Militer: %s Minta %s", nation, c.name)
			content = fmt.Sprintf("Kemen. Pertahanan %s restocking %s untuk logistik militer. Volume: %d %s | Harga: %d EM/unit (+%d%% premium). Total: +%d EM.", nation, c.name, vol, c.unit, buyP, prem, rev)
		case 8:
			subj = fmt.Sprintf("Festival Dagang: %s Butuh %s", nation, c.name)
			content = fmt.Sprintf("Pemerintah %s gelar festival dagang internasional, butuh %s. Kuota: %d %s | Harga: %d EM/unit (bonus %d%%). Total: +%d EM.", nation, c.name, vol, c.unit, buyP, prem, rev)
		default:
			subj = fmt.Sprintf("Cadangan Strategis: %s Isi Ulang %s", nation, c.name)
			content = fmt.Sprintf("Badan Cadangan %s isi ulang stok %s. Volume: %d %s | Budget: %d EM/unit (+%d%%). Total: +%d EM.", nation, c.name, vol, c.unit, buyP, prem, rev)
		}

		addInboxItem(fmt.Sprintf("Kemen. Perdagangan (%s)", nation), subj, content, "trade", "medium", true, dateStr)
		time.Sleep(time.Microsecond)
	}
}

// ═══════════════════════════════════════════════════════════
// [3/4] KONTRAK JANGKA PANJANG — AI tawarkan kontrak bulanan (10 per week)
// ═══════════════════════════════════════════════════════════

func generateTradeContractBatch(dateStr string, count int) {
	for i := 0; i < count; i++ {
		nation := npcNations[rng.Intn(len(npcNations))]
		c := tradeCommodities[rng.Intn(len(tradeCommodities))]

		months := rng.Intn(9) + 3
		mVol := (rng.Intn(30) + 5) * 100
		cPrice := c.basePrice * (100 - rng.Intn(10)) / 100

		var subj, content string
		switch rng.Intn(10) {
		case 0:
			subj = fmt.Sprintf("Kontrak Dagang %s — %d Bulan (%s)", c.name, months, nation)
			content = fmt.Sprintf("%s mengusulkan kontrak %s selama %d bulan. Volume: %d %s/bulan | Harga: %d EM/unit. Menjamin pasokan stabil.", nation, c.name, months, mVol, c.unit, cPrice)
		case 1:
			subj = fmt.Sprintf("Perjanjian Pembelian Terjadwal %s — %s", c.name, nation)
			content = fmt.Sprintf("Kemen. Perdagangan %s usulkan pembelian terjadwal %s. Durasi: %d bulan | Volume: %d %s/bulan | Harga tetap: %d EM/unit.", nation, c.name, months, mVol, c.unit, cPrice)
		case 2:
			subj = fmt.Sprintf("Kontrak Eksklusif %s — Mitra %s", c.name, nation)
			content = fmt.Sprintf("%s tawarkan kontrak eksklusif %s. Durasi: %d bulan | Volume: %d %s/bulan | Harga mitra: %d EM/unit. Klausul perpanjangan otomatis.", nation, c.name, months, mVol, c.unit, cPrice)
		case 3:
			subj = fmt.Sprintf("Framework Agreement %s — %s", c.name, nation)
			content = fmt.Sprintf("Pemerintah %s usulkan Framework Agreement %s. Periode: %d bulan | Komitmen: %d %s/bulan | Harga: %d EM/unit.", nation, c.name, months, mVol, c.unit, cPrice)
		case 4:
			subj = fmt.Sprintf("MoU Perdagangan %s — %s", c.name, nation)
			content = fmt.Sprintf("Kedutaan %s serahkan draft MoU %s. Jangka: %d bulan | Target: %d %s/bulan | Harga referensi: %d EM/unit.", nation, c.name, months, mVol, c.unit, cPrice)
		case 5:
			subj = fmt.Sprintf("Kontrak Supply Chain %s — %s", c.name, nation)
			content = fmt.Sprintf("Perusahaan logistik %s tawarkan kontrak supply chain %s. Durasi: %d bulan | Kapasitas: %d %s/bulan | Harga DDP: %d EM/unit.", nation, c.name, months, mVol, c.unit, cPrice)
		case 6:
			subj = fmt.Sprintf("Aliansi Dagang %s — %s", c.name, nation)
			content = fmt.Sprintf("Kamar Dagang %s usulkan aliansi komoditas %s. Kontrak: %d bulan | Pertukaran: %d %s/bulan | Harga aliansi: %d EM/unit.", nation, c.name, months, mVol, c.unit, cPrice)
		case 7:
			subj = fmt.Sprintf("Perjanjian Barter %s — %s", c.name, nation)
			content = fmt.Sprintf("Pemerintah %s tawarkan barter %s. Durasi: %d bulan | Volume: %d %s/bulan | Valuasi: %d EM/unit.", nation, c.name, months, mVol, c.unit, cPrice)
		case 8:
			subj = fmt.Sprintf("Kontrak Futures %s — %s", c.name, nation)
			content = fmt.Sprintf("Bursa Komoditas %s tawarkan futures %s. Jatuh tempo: %d bulan | Lot: %d %s | Harga strike: %d EM/unit.", nation, c.name, months, mVol, c.unit, cPrice)
		default:
			subj = fmt.Sprintf("Supply Agreement %s — %s", c.name, nation)
			content = fmt.Sprintf("Konsorsium industri %s usulkan pasokan jangka panjang %s. Durasi: %d bulan | Kebutuhan: %d %s/bulan | Harga: %d EM/unit.", nation, c.name, months, mVol, c.unit, cPrice)
		}

		addInboxItem(fmt.Sprintf("Kemen. Perdagangan (%s)", nation), subj, content, "trade", "high", true, dateStr)
		time.Sleep(time.Microsecond)
	}
}

// ═══════════════════════════════════════════════════════════
// [4/4] PERLUASAN JALUR DAGANG — Rute baru & infrastruktur (10 per week)
// ═══════════════════════════════════════════════════════════

func generateTradeRouteBatch(dateStr string, count int) {
	for i := 0; i < count; i++ {
		nation := npcNations[rng.Intn(len(npcNations))]
		c := tradeCommodities[rng.Intn(len(tradeCommodities))]

		eff := rng.Intn(30) + 10
		cap := (rng.Intn(100) + 20) * 1000

		var subj, content string
		switch rng.Intn(10) {
		case 0:
			subj = fmt.Sprintf("Jalur Dagang Baru %s — %s", c.name, nation)
			content = fmt.Sprintf("Kemen. Logistik %s usulkan jalur dagang baru untuk %s. Hemat biaya %d%%, kapasitas %d %s/tahun.", nation, c.name, eff, cap, c.unit)
		case 1:
			subj = fmt.Sprintf("Pelabuhan Bebas Bea — %s (%s)", nation, c.name)
			content = fmt.Sprintf("%s tawarkan akses pelabuhan bebas bea untuk %s. Hemat %d%% logistik. Throughput: %d %s/tahun.", nation, c.name, eff, cap, c.unit)
		case 2:
			subj = fmt.Sprintf("Koridor Ekonomi Bersama — %s (%s)", nation, c.name)
			content = fmt.Sprintf("Pemerintah %s usulkan koridor ekonomi bersama untuk %s. Efisiensi naik %d%%. Kapasitas: %d %s/tahun.", nation, c.name, eff, cap, c.unit)
		case 3:
			subj = fmt.Sprintf("Jalur Kereta Kargo — %s (%s)", nation, c.name)
			content = fmt.Sprintf("%s rencanakan kereta kargo lintas negara untuk %s. Pengiriman %d%% lebih cepat. Kapasitas: %d %s/tahun.", nation, c.name, eff, cap, c.unit)
		case 4:
			subj = fmt.Sprintf("Open Skies Kargo — %s (%s)", nation, c.name)
			content = fmt.Sprintf("Otoritas penerbangan %s ajukan Open Skies Kargo untuk %s. Transit %d%% lebih cepat. Kapasitas udara: %d %s/tahun.", nation, c.name, eff, cap, c.unit)
		case 5:
			subj = fmt.Sprintf("Hub Logistik Regional — %s (%s)", nation, c.name)
			content = fmt.Sprintf("%s usulkan hub logistik regional untuk distribusi %s. Efisiensi naik %d%%. Volume: %d %s/tahun.", nation, c.name, eff, cap, c.unit)
		case 6:
			subj = fmt.Sprintf("Zona Perdagangan Bebas — %s (%s)", nation, c.name)
			content = fmt.Sprintf("Pemerintah %s usulkan Zona Perdagangan Bebas untuk %s. Tarif dihapus %d%%. Volume bebas bea: %d %s/tahun.", nation, c.name, eff, cap, c.unit)
		case 7:
			subj = fmt.Sprintf("Digitalisasi Rantai Pasok — %s (%s)", nation, c.name)
			content = fmt.Sprintf("%s tawarkan integrasi digital rantai pasok %s. Transparansi naik %d%%. Kapasitas terkelola: %d %s/tahun.", nation, c.name, eff, cap, c.unit)
		case 8:
			subj = fmt.Sprintf("Perjanjian Transit Kapal — %s (%s)", nation, c.name)
			content = fmt.Sprintf("Otoritas pelabuhan %s ajukan transit kapal preferensial untuk %s. Dwell time turun %d%%. Throughput: %d %s/tahun.", nation, c.name, eff, cap, c.unit)
		default:
			subj = fmt.Sprintf("Ekspansi Gudang Berikat — %s (%s)", nation, c.name)
			content = fmt.Sprintf("%s usulkan gudang berikat bersama untuk stok %s. Biaya penyimpanan turun %d%%. Kapasitas: %d %s.", nation, c.name, eff, cap, c.unit)
		}

		addInboxItem(fmt.Sprintf("Kemen. Logistik (%s)", nation), subj, content, "trade", "low", true, dateStr)
		time.Sleep(time.Microsecond)
	}
}

// ═══════════════════════════════════════════════════════════
// KEDUTAAN (Embassy) — 10 per week
// ═══════════════════════════════════════════════════════════

func generateEmbassyBatch(dateStr string, count int) {
	templates := []struct {
		subjFmt, contentFmt string
	}{
		{"Permohonan Pembukaan Kedutaan Besar (%s)", "Pemerintah %s secara resmi mengajukan permohonan untuk membuka Kedutaan Besar di ibu kota Anda. Inisiatif ini bertujuan mempererat hubungan diplomatik bilateral."},
		{"Upgrade Status Diplomatik (%s)", "Perwakilan Tetap %s mengusulkan peningkatan status hubungan diplomatik dari level konsuler ke level duta besar penuh untuk memperdalam kerjasama."},
		{"Undangan Kunjungan Kenegaraan (%s)", "Kepala Negara %s mengundang Anda untuk melakukan kunjungan kenegaraan resmi. Agenda meliputi pembahasan kerjasama ekonomi, pertahanan, dan pertukaran budaya."},
		{"Rotasi Diplomat — Perkenalan Duta Besar Baru (%s)", "Kementerian Luar Negeri %s menginformasikan penunjukan Duta Besar baru untuk negara Anda. Diplomat baru ini membawa pengalaman luas di bidang ekonomi internasional."},
		{"Pembukaan Konsulat Kehormatan (%s)", "%s mengusulkan pembukaan Konsulat Kehormatan di kota-kota strategis untuk mempermudah layanan kekonsuleran bagi warga kedua negara."},
		{"Kerjasama Akademik Diplomatik (%s)", "Akademi Diplomatik %s menawarkan program pertukaran diplomat muda untuk memperkuat kapasitas diplomatik kedua negara."},
		{"Forum Diplomatik Bilateral (%s)", "%s mengusulkan pembentukan Forum Diplomatik Bilateral tahunan untuk membahas isu-isu strategis bersama secara berkala dan terstruktur."},
		{"Perjanjian Visa Diplomatik (%s)", "Kementerian Luar Negeri %s mengajukan penandatanganan perjanjian pembebasan visa diplomatik untuk memperlancar mobilitas pejabat kedua negara."},
		{"Pembentukan Komisi Bersama (%s)", "%s mengusulkan pembentukan Komisi Bersama (Joint Commission) untuk mengkoordinasikan kerjasama di berbagai bidang strategis."},
		{"Dialog Strategis Tingkat Menteri (%s)", "Menteri Luar Negeri %s secara resmi mengundang counterpart untuk mengadakan Dialog Strategis membahas arsitektur keamanan regional dan kerjasama multilateral."},
	}

	for i := 0; i < count; i++ {
		nation := npcNations[rng.Intn(len(npcNations))]
		t := templates[rng.Intn(len(templates))]
		subj := fmt.Sprintf(t.subjFmt, nation)
		content := fmt.Sprintf(t.contentFmt, nation)

		addInboxItem(
			fmt.Sprintf("Kemenlu (%s)", nation),
			subj, content, "embassy", "medium", true, dateStr,
		)
		time.Sleep(time.Microsecond)
	}
}

// ═══════════════════════════════════════════════════════════
// PAKTA (Pact) — 10 per week
// ═══════════════════════════════════════════════════════════

func generatePactBatch(dateStr string, count int) {
	templates := []struct {
		subjFmt, contentFmt string
	}{
		{"Proposal Pakta Non-Agresi (%s)", "Otoritas %s mengusulkan penandatanganan Pakta Non-Agresi bilateral untuk menjamin penyelesaian sengketa secara damai."},
		{"Pakta Keamanan Maritim (%s)", "%s mengajukan pakta keamanan maritim bersama untuk mengamankan jalur pelayaran strategis dan menekan aktivitas ilegal di perairan perbatasan."},
		{"Perjanjian Patroli Perbatasan Bersama (%s)", "Kementerian Pertahanan %s mengusulkan perjanjian patroli perbatasan bersama untuk meningkatkan pengawasan di zona demiliterisasi."},
		{"Pakta Berbagi Intelijen (%s)", "Badan Intelijen %s menawarkan perjanjian berbagi informasi intelijen terkait ancaman terorisme dan kejahatan transnasional."},
		{"Deklarasi Zona Perdamaian (%s)", "%s mengusulkan deklarasi bersama untuk menjadikan wilayah perbatasan sebagai Zona Perdamaian dan Kerjasama Regional."},
		{"Pakta Bantuan Kemanusiaan (%s)", "Badan Penanggulangan Bencana %s mengajukan pakta bantuan kemanusiaan timbal balik untuk mempercepat respons bencana alam."},
		{"Perjanjian Pengendalian Senjata (%s)", "%s mengusulkan perjanjian pengendalian senjata konvensional di kawasan untuk mengurangi ketegangan militer dan mengalihkan anggaran ke sektor produktif."},
		{"Pakta Siber Non-Agresi (%s)", "Dewan Keamanan Siber %s menawarkan pakta non-agresi di ranah siber, termasuk komitmen untuk tidak melancarkan serangan siber terhadap infrastruktur kritis."},
		{"Kesepakatan Deeskalasi Militer (%s)", "Komando Militer %s mengusulkan kesepakatan deeskalasi bertahap di wilayah perbatasan, termasuk pengurangan garnisun dan demobilisasi parsial."},
		{"Protokol Komunikasi Krisis (%s)", "%s mengajukan pembentukan Protokol Komunikasi Krisis (Hotline) antar komando militer untuk mencegah eskalasi akibat kesalahpahaman."},
	}

	for i := 0; i < count; i++ {
		nation := npcNations[rng.Intn(len(npcNations))]
		t := templates[rng.Intn(len(templates))]
		subj := fmt.Sprintf(t.subjFmt, nation)
		content := fmt.Sprintf(t.contentFmt, nation)

		addInboxItem(
			fmt.Sprintf("Kemen. Pertahanan (%s)", nation),
			subj, content, "pact", "high", true, dateStr,
		)
		time.Sleep(time.Microsecond)
	}
}

// ═══════════════════════════════════════════════════════════
// ALIANSI (Alliance) — 10 per week
// ═══════════════════════════════════════════════════════════

func generateAllianceBatch(dateStr string, count int) {
	templates := []struct {
		subjFmt, contentFmt string
	}{
		{"Inisiasi Aliansi Pertahanan Bersama (%s)", "%s menawarkan pembentukan aliansi pertahanan strategis. Kerjasama militer yang lebih erat akan menjamin kedaulatan kedua negara dari ancaman eksternal."},
		{"Aliansi Ekonomi Strategis (%s)", "Pemerintah %s mengusulkan pembentukan Aliansi Ekonomi Strategis untuk integrasi pasar, penghapusan tarif, dan pengembangan rantai pasok bersama."},
		{"Koalisi Pertahanan Maritim (%s)", "Angkatan Laut %s mengajukan pembentukan Koalisi Pertahanan Maritim Gabungan untuk melindungi jalur laut vital dan melakukan latihan bersama secara rutin."},
		{"Aliansi Riset & Teknologi (%s)", "Kementerian Riset %s menawarkan aliansi pengembangan teknologi bersama, termasuk transfer knowledge di bidang AI, bioteknologi, dan energi terbarukan."},
		{"Blok Pertahanan Regional (%s)", "%s mengusulkan pembentukan Blok Pertahanan Regional yang mencakup mekanisme pertahanan kolektif dan respons bersama terhadap ancaman keamanan."},
		{"Aliansi Energi Terbarukan (%s)", "Kementerian Energi %s menawarkan kemitraan strategis di sektor energi terbarukan, termasuk proyek pembangkit listrik dan jaringan transmisi antar-negara."},
		{"Pakta Pertahanan Udara Terpadu (%s)", "Komando Udara %s mengusulkan integrasi sistem pertahanan udara terpadu untuk meningkatkan kemampuan deteksi dan intersepsi ancaman bersama."},
		{"Aliansi Anti-Terorisme (%s)", "Dewan Keamanan Nasional %s mengajukan aliansi anti-terorisme yang mencakup operasi gabungan, berbagi intelijen, dan harmonisasi kerangka hukum."},
		{"Kolaborasi Industri Pertahanan (%s)", "%s menawarkan program kolaborasi industri pertahanan untuk pengembangan dan produksi bersama alutsista generasi baru dengan transfer teknologi penuh."},
		{"Aliansi Keamanan Pangan (%s)", "Kementerian Pertanian %s mengusulkan aliansi keamanan pangan strategis, termasuk cadangan pangan bersama dan mekanisme stabilisasi harga komoditas pokok."},
	}

	for i := 0; i < count; i++ {
		nation := npcNations[rng.Intn(len(npcNations))]
		t := templates[rng.Intn(len(templates))]
		subj := fmt.Sprintf(t.subjFmt, nation)
		content := fmt.Sprintf(t.contentFmt, nation)

		addInboxItem(
			fmt.Sprintf("Kemen. Pertahanan (%s)", nation),
			subj, content, "alliance", "high", true, dateStr,
		)
		time.Sleep(time.Microsecond)
	}
}
