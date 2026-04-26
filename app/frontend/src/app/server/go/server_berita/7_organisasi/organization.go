package organisasi

import (
	"fmt"
	"strings"
	"emserver/core"
)

// ═══════════════════════════════════════════════════════════════════════
// ORGANIZATION NEWS ENGINE
// Generates 3 types of news:
//   1. Keanggotaan PBB   → source: "Global Diplomacy News"
//   2. Keanggotaan Regional → source: "Regional Watch Intelligence"
//   3. Hasil Sidang & Voting → source: "Perserikatan Bangsa-Bangsa"
//
// RULES:
//   - Membership news checks the actual database before generating
//   - Countries already IN an org → can only "leave" or "update status"
//   - Countries NOT in an org → can only "join" or "apply"
//   - Geographic eligibility is enforced (no "Indonesia joins NATO")
//   - Voting keywords MUST NOT appear in membership news templates
// ═══════════════════════════════════════════════════════════════════════

// --- PBB MEMBERSHIP TEMPLATES ---

type newsTemplate struct {
	Subject string
	Content string
}

// Templates for countries NOT yet in the PBB org (applying/joining)
var pbbJoinTemplates = []newsTemplate{
	{
		"Keanggotaan PBB: %s Mengajukan Permohonan Anggota Baru",
		"Pemerintah %s telah secara resmi mengajukan permohonan keanggotaan ke Perserikatan Bangsa-Bangsa. Proses aplikasi ini akan ditinjau oleh Komite Penerimaan Anggota dalam beberapa bulan mendatang.",
	},
	{
		"Keanggotaan PBB: %s Diterima Sebagai Anggota Pengamat",
		"Status keanggotaan %s di PBB telah ditingkatkan menjadi anggota pengamat. Dengan status baru ini, negara tersebut dapat menghadiri forum internasional tanpa hak suara penuh.",
	},
	{
		"Keanggotaan PBB: Permohonan %s Masih Dipertimbangkan",
		"Permohonan keanggotaan %s di PBB masih dalam tahap evaluasi oleh Komite Penerimaan. Beberapa negara anggota meminta klarifikasi terkait persyaratan yang belum dipenuhi.",
	},
}

// Templates for countries ALREADY in the PBB org (leaving/updating)
var pbbLeaveTemplates = []newsTemplate{
	{
		"Keanggotaan PBB: %s Mengundurkan Diri",
		"Pemerintah %s mengumumkan pengunduran diri dari keanggotaan PBB. Keputusan kontroversial ini menuai beragam reaksi dari komunitas internasional.",
	},
	{
		"Keanggotaan PBB: %s Memperbarui Status Keanggotaan",
		"Delegasi %s telah menyelesaikan proses pembaruan status keanggotaan di PBB. Pembaruan ini mencakup kontribusi finansial dan komitmen pada piagam organisasi.",
	},
	{
		"Keanggotaan PBB: %s Tingkatkan Kontribusi Tahunan",
		"Negara %s mengumumkan peningkatan kontribusi tahunan kepada PBB sebesar 15%%. Langkah ini memperkuat komitmen negara tersebut terhadap multilateralisme global.",
	},
}

// --- REGIONAL MEMBERSHIP TEMPLATES ---

// Templates for countries NOT yet in the regional org (joining)
var regionalJoinTemplates = []newsTemplate{
	{
		"Blok Regional: %s Bergabung Dengan %s",
		"Dalam langkah strategis, %s secara resmi bergabung dengan %s. Keanggotaan baru ini diharapkan membuka peluang kerjasama ekonomi dan keamanan yang lebih luas bagi negara tersebut.",
	},
	{
		"Blok Regional: %s Diterima Sebagai Anggota %s",
		"Permohonan keanggotaan %s di %s telah disetujui secara aklamasi oleh seluruh anggota. Penerimaan ini memperluas jangkauan dan pengaruh organisasi di kawasan.",
	},
	{
		"Blok Regional: Permohonan %s ke %s Ditolak",
		"Permohonan keanggotaan %s untuk masuk ke %s tidak mendapatkan persetujuan. Beberapa negara anggota memiliki keberatan terkait syarat dan ketentuan organisasi.",
	},
}

// Templates for countries ALREADY in the regional org (leaving/status change)
var regionalLeaveTemplates = []newsTemplate{
	{
		"Blok Regional: %s Keluar Dari %s",
		"Pemerintah %s mengumumkan keputusan untuk keluar dari %s. Langkah ini mencerminkan pergeseran arah kebijakan luar negeri dan prioritas geopolitik negara tersebut.",
	},
	{
		"Blok Regional: %s Mengundurkan Diri Dari %s",
		"Secara mengejutkan, %s memutuskan untuk mengundurkan diri dari keanggotaan %s. Keputusan ini akan mempengaruhi dinamika geopolitik dan perdagangan kawasan.",
	},
	{
		"Blok Regional: %s Perkuat Posisi di %s",
		"Delegasi %s mengumumkan peningkatan kontribusi dan partisipasi aktif di dalam %s. Negara ini diharapkan memainkan peran lebih besar dalam pengambilan keputusan organisasi.",
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
		nationLower := strings.ToLower(strings.TrimSpace(nation))

		if roll < 20 {
			// ═══ 1. PBB MEMBERSHIP NEWS (20%) ═══
			generatePBBMembershipNews(nation, nationLower, dateStr)

		} else if roll < 40 {
			// ═══ 2. REGIONAL MEMBERSHIP NEWS (20%) ═══
			generateRegionalMembershipNews(nation, nationLower, dateStr)

		} else {
			// ═══ 3. VOTING & RESOLUTION NEWS (60%) ═══
			generateVotingNews(nation, dateStr)
		}
	}
}

func generatePBBMembershipNews(nation, nationLower, dateStr string) {
	isMember := IsMemberOfPBBOrg(nationLower)

	var t newsTemplate
	if isMember {
		// Already a member → can leave or update status (rare: 10% chance to leave)
		if core.Rng.Intn(100) < 10 {
			t = pbbLeaveTemplates[0] // "mengundurkan diri"
		} else {
			// Update status or increase contribution
			t = pbbLeaveTemplates[1+core.Rng.Intn(len(pbbLeaveTemplates)-1)]
		}
	} else {
		// Not a member → can apply or join
		t = pbbJoinTemplates[core.Rng.Intn(len(pbbJoinTemplates))]
	}

	subj := fmt.Sprintf(t.Subject, nation)
	content := fmt.Sprintf(t.Content, nation)
	core.AddNewsItemLocked("Global Diplomacy News", subj, content, "organizations", "high", dateStr)
}

func generateRegionalMembershipNews(nation, nationLower, dateStr string) {
	// Try up to 5 times to find a valid org-country combination
	for attempt := 0; attempt < 5; attempt++ {
		org := RegionalOrgList[core.Rng.Intn(len(RegionalOrgList))]
		isMember := IsMemberOfRegionalOrg(nationLower, org)
		isEligible := IsEligibleForOrg(nationLower, org)

		if isMember {
			// Already a member → can leave or strengthen position
			var t newsTemplate
			if core.Rng.Intn(100) < 15 {
				t = regionalLeaveTemplates[core.Rng.Intn(2)] // leave/resign
			} else {
				t = regionalLeaveTemplates[2] // strengthen position
			}

			subj := fmt.Sprintf(t.Subject, nation, org)
			content := fmt.Sprintf(t.Content, nation, org)
			core.AddNewsItemLocked("Regional Watch Intelligence", subj, content, "organizations", "medium", dateStr)
			return
		}

		if !isMember && isEligible {
			// Not a member but eligible → can apply or join
			t := regionalJoinTemplates[core.Rng.Intn(len(regionalJoinTemplates))]
			subj := fmt.Sprintf(t.Subject, nation, org)
			content := fmt.Sprintf(t.Content, nation, org)
			core.AddNewsItemLocked("Regional Watch Intelligence", subj, content, "organizations", "medium", dateStr)
			return
		}

		// Not eligible → try another org
	}

	// Fallback: If no valid combination found after 5 attempts,
	// just use an org where the country IS already a member
	for _, org := range RegionalOrgList {
		if IsMemberOfRegionalOrg(nationLower, org) {
			t := regionalLeaveTemplates[2] // "perkuat posisi"
			subj := fmt.Sprintf(t.Subject, nation, org)
			content := fmt.Sprintf(t.Content, nation, org)
			core.AddNewsItemLocked("Regional Watch Intelligence", subj, content, "organizations", "medium", dateStr)
			return
		}
	}
}

func generateVotingNews(nation, dateStr string) {
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
