package trade

import (
	"fmt"
	"time"
	"emserver/core"
)

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

func GenerateAgreementBatch(dateStr string, count int) {
	templates := []struct {
		subjFmt, contentFmt string
	}{
		{"Proposal Perjanjian Dagang dari %s", "Pemerintah %s secara resmi mengajukan proposal Perjanjian Kerjasama Perdagangan bilateral. Kesepakatan ini akan membuka akses pasar kedua negara dan memungkinkan pertukaran komoditas strategis. Jika disetujui, %s akan menjadi mitra dagang resmi Anda."},
		{"Undangan Kerjasama Ekonomi — %s", "Kementerian Perdagangan %s mengundang negara Anda untuk menandatangani nota kesepakatan perdagangan. Perjanjian ini akan mencakup penghapusan tarif parsial dan kuota impor preferensial. Terima untuk menjadikan %s mitra dagang."},
		{"Inisiasi Hubungan Dagang — %s", "Delegasi ekonomi %s tiba di ibu kota untuk membicarakan potensi kerjasama perdagangan. Mereka membawa proposal komprehensif yang mencakup pertukaran komoditas, investasi, dan transfer teknologi. Setujui untuk membuka jalur perdagangan dengan %s."},
		{"Peluang Pasar Baru: %s Tawarkan Kemitraan Dagang", "Analisis pasar menunjukkan bahwa %s memiliki komoditas komplementer yang sangat dibutuhkan ekonomi Anda. Pemerintah mereka mengusulkan pembentukan perjanjian dagang bilateral untuk saling menguntungkan kedua negara."},
		{"Misi Dagang Resmi dari %s", "Misi dagang resmi dari %s telah tiba dan menyampaikan keinginan untuk membentuk kerjasama perdagangan formal. Proposal mereka mencakup akses pasar produk unggulan kedua negara serta fasilitas perdagangan bebas bea."},
	}

	for i := 0; i < count; i++ {
		nation := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
		t := templates[core.Rng.Intn(len(templates))]
		subj := fmt.Sprintf(t.subjFmt, nation)
		content := fmt.Sprintf(t.contentFmt, nation, nation)

		core.AddInboxItemLocked(
			fmt.Sprintf("Kemen. Perdagangan (%s)", nation),
			subj, content, "trade", "high", true, "Proposal Kemitraan", dateStr,
		)
		time.Sleep(time.Microsecond)
	}
}

func GenerateImportBatch(dateStr string, count int) {
	for i := 0; i < count; i++ {
		nation := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
		c := tradeCommodities[core.Rng.Intn(len(tradeCommodities))]

		vol := (core.Rng.Intn(80) + 10) * 100
		disc := core.Rng.Intn(25) + 5
		price := c.basePrice * (100 - disc) / 100
		total := price * vol
		expiry := core.Rng.Intn(10) + 5

		var subj, content string
		switch core.Rng.Intn(10) {
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

		core.AddInboxItemLocked(fmt.Sprintf("Kemen. Perdagangan (%s)", nation), subj, content, "trade", "medium", true, "Proposal Tawaran Produk", dateStr)
		time.Sleep(time.Microsecond)
	}
}

func GenerateExportBatch(dateStr string, count int) {
	for i := 0; i < count; i++ {
		nation := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
		c := tradeCommodities[core.Rng.Intn(len(tradeCommodities))]

		vol := (core.Rng.Intn(60) + 5) * 100
		prem := core.Rng.Intn(20) + 5
		buyP := c.basePrice * (100 + prem) / 100
		rev := buyP * vol
		days := core.Rng.Intn(8) + 3

		var subj, content string
		switch core.Rng.Intn(10) {
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

		core.AddInboxItemLocked(fmt.Sprintf("Kemen. Perdagangan (%s)", nation), subj, content, "trade", "medium", true, "Proposal Permintaan Beli", dateStr)
		time.Sleep(time.Microsecond)
	}
}

func GenerateContractBatch(dateStr string, count int) {
	for i := 0; i < count; i++ {
		nation := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
		c := tradeCommodities[core.Rng.Intn(len(tradeCommodities))]

		months := core.Rng.Intn(9) + 3
		mVol := (core.Rng.Intn(30) + 5) * 100
		cPrice := c.basePrice * (100 - core.Rng.Intn(10)) / 100

		var subj, content string
		switch core.Rng.Intn(10) {
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

		core.AddInboxItemLocked(fmt.Sprintf("Kemen. Perdagangan (%s)", nation), subj, content, "trade", "high", true, "Proposal Kontrak Perdagangan", dateStr)
		time.Sleep(time.Microsecond)
	}
}

func GenerateRouteBatch(dateStr string, count int) {
	for i := 0; i < count; i++ {
		nation := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
		c := tradeCommodities[core.Rng.Intn(len(tradeCommodities))]

		eff := core.Rng.Intn(30) + 10
		cap := (core.Rng.Intn(100) + 20) * 1000

		var subj, content string
		switch core.Rng.Intn(10) {
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

		core.AddInboxItemLocked(fmt.Sprintf("Kemen. Logistik (%s)", nation), subj, content, "trade", "low", true, "Proposal Infrastruktur", dateStr)
		time.Sleep(time.Microsecond)
	}
}
