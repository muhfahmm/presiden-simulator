package pact

import (
	"fmt"
	"time"
	"emserver/core"
)

func GenerateBatch(dateStr string, count int) {
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
		nation := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
		t := templates[core.Rng.Intn(len(templates))]
		subj := fmt.Sprintf(t.subjFmt, nation)
		content := fmt.Sprintf(t.contentFmt, nation)

		core.AddInboxItemLocked(
			fmt.Sprintf("Kemen. Pertahanan (%s)", nation),
			subj, content, "pact", "high", true, "Proposal Pakta", dateStr,
		)
		time.Sleep(time.Microsecond)
	}
}
