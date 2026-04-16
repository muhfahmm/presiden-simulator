package alliance

import (
	"fmt"
	"time"
	"emserver/core"
)

func GenerateBatch(dateStr string, count int) {
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
		nation := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
		t := templates[core.Rng.Intn(len(templates))]
		subj := fmt.Sprintf(t.subjFmt, nation)
		content := fmt.Sprintf(t.contentFmt, nation)

		core.AddInboxItemLocked(
			fmt.Sprintf("Kemen. Pertahanan (%s)", nation),
			subj, content, "alliance", "high", true, "Proposal Aliansi", dateStr,
		)
		time.Sleep(time.Microsecond)
	}
}
