package organisasi

import (
	"fmt"
	"strings"
	"emserver/core"
)

// ═══════════════════════════════════════════════════════════
// ORGANIZATION NEWS ENGINE
// Generates 3 types of news:
//   1. Keanggotaan PBB   → source: "Global Diplomacy News"
//   2. Keanggotaan Regional → source: "Regional Watch Intelligence"
//   3. Hasil Sidang & Voting → source: "Perserikatan Bangsa-Bangsa"
//
// IMPORTANT: Membership news MUST NOT contain voting keywords
// (sidang umum, resolusi, pemungutan suara, dewan keamanan)
// or the frontend filter will steal them into the Voting tab.
// ═══════════════════════════════════════════════════════════

// --- PBB MEMBERSHIP TEMPLATES (NO voting keywords!) ---
var pbbMembershipTemplates = []struct {
	Action  string
	Subject string
	Content string
}{
	{
		"mengajukan permohonan keanggotaan PBB",
		"Keanggotaan PBB: %s Mengajukan Permohonan Anggota Baru",
		"Pemerintah %s telah secara resmi mengajukan permohonan keanggotaan ke Perserikatan Bangsa-Bangsa. Proses aplikasi ini akan ditinjau oleh Komite Penerimaan Anggota dalam beberapa bulan mendatang.",
	},
	{
		"diterima sebagai anggota pengamat PBB",
		"Keanggotaan PBB: %s Diterima Sebagai Anggota Pengamat",
		"Status keanggotaan %s di PBB telah ditingkatkan menjadi anggota pengamat. Dengan status baru ini, negara tersebut dapat menghadiri forum internasional tanpa hak suara penuh.",
	},
	{
		"resmi menjadi anggota penuh PBB",
		"Keanggotaan PBB: %s Resmi Bergabung Sebagai Anggota Penuh",
		"Dalam perkembangan diplomatik terbaru, %s secara resmi diterima sebagai anggota penuh PBB. Langkah bersejarah ini memperkuat posisi negara tersebut di panggung internasional.",
	},
	{
		"memperbarui status keanggotaan PBB",
		"Keanggotaan PBB: %s Memperbarui Status Keanggotaan",
		"Delegasi %s telah menyelesaikan proses pembaruan status keanggotaan di PBB. Pembaruan ini mencakup kontribusi finansial dan komitmen pada piagam organisasi.",
	},
	{
		"mengundurkan diri dari PBB",
		"Keanggotaan PBB: %s Mengundurkan Diri",
		"Pemerintah %s mengumumkan pengunduran diri dari keanggotaan PBB. Keputusan kontroversial ini menuai beragam reaksi dari komunitas internasional.",
	},
	{
		"ditolak permohonan keanggotaan PBB",
		"Keanggotaan PBB: Permohonan %s Ditolak",
		"Permohonan keanggotaan %s di PBB tidak mendapat persetujuan. Penolakan ini terkait dengan sejumlah persyaratan yang belum dipenuhi oleh negara tersebut.",
	},
}

// --- REGIONAL MEMBERSHIP TEMPLATES (NO voting keywords!) ---
var regionalOrgs = []string{"NATO", "ASEAN", "BRICS", "Uni Eropa", "G20", "G7", "APEC", "SCO", "OKI", "Uni Afrika", "Liga Arab", "OPEC", "GCC", "MERCOSUR", "Commonwealth", "OECD"}

var regionalMembershipTemplates = []struct {
	Action  string
	Subject string
	Content string
}{
	{
		"bergabung dengan",
		"Blok Regional: %s Bergabung Dengan %s",
		"Dalam langkah strategis, %s secara resmi bergabung dengan %s. Keanggotaan baru ini diharapkan membuka peluang kerjasama ekonomi dan keamanan yang lebih luas bagi negara tersebut.",
	},
	{
		"keluar dari",
		"Blok Regional: %s Keluar Dari %s",
		"Pemerintah %s mengumumkan keputusan untuk keluar dari %s. Langkah ini mencerminkan pergeseran arah kebijakan luar negeri dan prioritas geopolitik negara tersebut.",
	},
	{
		"diterima sebagai anggota",
		"Blok Regional: %s Diterima Sebagai Anggota %s",
		"Permohonan keanggotaan %s di %s telah disetujui secara aklamasi oleh seluruh anggota. Penerimaan ini memperluas jangkauan dan pengaruh organisasi di kawasan.",
	},
	{
		"ditolak permohonan",
		"Blok Regional: Permohonan %s ke %s Ditolak",
		"Permohonan keanggotaan %s untuk masuk ke %s tidak mendapatkan persetujuan. Beberapa negara anggota memiliki keberatan terkait syarat dan ketentuan organisasi.",
	},
	{
		"mengundurkan diri dari",
		"Blok Regional: %s Mengundurkan Diri Dari %s",
		"Secara mengejutkan, %s memutuskan untuk mengundurkan diri dari keanggotaan %s. Keputusan ini akan mempengaruhi dinamika geopolitik dan perdagangan kawasan.",
	},
}

func GenerateBatch(dateStr string, count int) {
	playerCountry := strings.ToLower(strings.TrimSpace(core.GlobalState.Player.Country))
	available := make([]string, 0)
	for _, n := range core.NpcNations {
		if strings.ToLower(strings.TrimSpace(n)) != playerCountry {
			available = append(available, n)
		}
	}

	if len(available) == 0 {
		return
	}

	for i := 0; i < count; i++ {
		roll := core.Rng.Intn(100)
		nation := available[core.Rng.Intn(len(available))]

		if roll < 20 {
			// ═══ 1. PBB MEMBERSHIP NEWS (20%) ═══
			t := pbbMembershipTemplates[core.Rng.Intn(len(pbbMembershipTemplates))]
			subj := fmt.Sprintf(t.Subject, nation)
			content := fmt.Sprintf(t.Content, nation)
			core.AddNewsItemLocked("Global Diplomacy News", subj, content, "organizations", "high", dateStr)

		} else if roll < 40 {
			// ═══ 2. REGIONAL MEMBERSHIP NEWS (20%) ═══
			org := regionalOrgs[core.Rng.Intn(len(regionalOrgs))]
			t := regionalMembershipTemplates[core.Rng.Intn(len(regionalMembershipTemplates))]
			subj := fmt.Sprintf(t.Subject, nation, org)
			content := fmt.Sprintf(t.Content, nation, org)
			core.AddNewsItemLocked("Regional Watch Intelligence", subj, content, "organizations", "medium", dateStr)

		} else {
			// ═══ 3. VOTING & RESOLUTION NEWS (60%) ═══
			topics := []string{
				"Resolusi Kemanusiaan",
				"Program Lingkungan Hidup",
				"Bantuan Pangan Dunia",
				"Resolusi Keamanan Global",
				"Laporan Hak Asasi Manusia",
				"Kerjasama Maritim Internasional",
				"Protokol Keamanan Siber UN",
			}
			topic := topics[core.Rng.Intn(len(topics))]

			subj := fmt.Sprintf("Sidang Umum PBB: %s (%s)", topic, nation)
			content := fmt.Sprintf("Delegasi dari %s memberikan suara terkait %s di Markas Besar PBB. Keputusan ini diharapkan akan memberikan dampak signifikan bagi stabilitas kawasan dan kerjasama internasional.", nation, topic)

			core.AddNewsItemLocked("Perserikatan Bangsa-Bangsa", subj, content, "organizations", "medium", dateStr)
		}
	}
}

