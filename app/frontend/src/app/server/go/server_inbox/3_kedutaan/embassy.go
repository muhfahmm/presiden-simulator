package embassy

import (
	"fmt"
	"time"
	"emserver/core"
)

func GenerateBatch(dateStr string, count int) {
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
		nation := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
		t := templates[core.Rng.Intn(len(templates))]
		subj := fmt.Sprintf(t.subjFmt, nation)
		content := fmt.Sprintf(t.contentFmt, nation)

		core.AddInboxItemLocked(
			fmt.Sprintf("Kemenlu (%s)", nation),
			subj, content, "embassy", "medium", true, "Proposal Kedutaan", dateStr,
		)
		time.Sleep(time.Microsecond)
	}
}
