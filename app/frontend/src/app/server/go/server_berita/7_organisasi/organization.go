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
// Subject format: "{Country} Bergabung ke {Org}" (direct, no prefix)
// ═══════════════════════════════════════════════════════════════════════

type newsTemplate struct {
	Subject string // Two %s: nation, org
	Content string // Two %s: nation, org
}

// PBB sub-organization names for variety
var pbbSubOrgs = []string{"PBB", "UNESCO", "WHO", "IMF", "WTO", "FAO", "ILO", "ICAO", "IMO", "ITU", "WMO", "Bank Dunia", "Interpol"}

// --- PBB MEMBERSHIP TEMPLATES (subject: {country} {action} {org}) ---

var pbbJoinTemplates = []newsTemplate{
	{
		"%s Bergabung ke %s",
		"Pemerintah %s telah secara resmi bergabung dengan organisasi %s. Langkah diplomatik ini menandai babak baru dalam partisipasi internasional negara tersebut.",
	},
	{
		"%s Mengajukan Permohonan ke %s",
		"Pemerintah %s mengajukan permohonan keanggotaan resmi ke %s. Proses aplikasi ini akan ditinjau oleh Komite Penerimaan dalam beberapa bulan mendatang.",
	},
	{
		"%s Diterima Sebagai Anggota Pengamat %s",
		"Status %s di %s telah ditingkatkan menjadi anggota pengamat. Dengan status baru ini, negara tersebut dapat menghadiri forum internasional tanpa hak suara penuh.",
	},
}

var pbbLeaveTemplates = []newsTemplate{
	{
		"%s Mengundurkan Diri dari %s",
		"Pemerintah %s mengumumkan pengunduran diri dari keanggotaan %s. Keputusan kontroversial ini menuai beragam reaksi dari komunitas internasional.",
	},
	{
		"%s Memperbarui Status di %s",
		"Delegasi %s telah menyelesaikan proses pembaruan status keanggotaan di %s. Pembaruan ini mencakup kontribusi finansial dan komitmen pada piagam organisasi.",
	},
	{
		"%s Tingkatkan Kontribusi ke %s",
		"Negara %s mengumumkan peningkatan kontribusi tahunan kepada %s sebesar 15%%. Langkah ini memperkuat komitmen negara tersebut terhadap multilateralisme global.",
	},
}

// --- REGIONAL MEMBERSHIP TEMPLATES (subject: {country} {action} {org}) ---

var regionalJoinTemplates = []newsTemplate{
	{
		"%s Bergabung Dengan %s",
		"Dalam langkah strategis, %s secara resmi bergabung dengan %s. Keanggotaan baru ini diharapkan membuka peluang kerjasama ekonomi dan keamanan yang lebih luas bagi negara tersebut.",
	},
	{
		"%s Diterima Sebagai Anggota %s",
		"Permohonan keanggotaan %s di %s telah disetujui secara aklamasi oleh seluruh anggota. Penerimaan ini memperluas jangkauan dan pengaruh organisasi di kawasan.",
	},
	{
		"Permohonan %s ke %s Ditolak",
		"Permohonan keanggotaan %s untuk masuk ke %s tidak mendapatkan persetujuan. Beberapa negara anggota memiliki keberatan terkait syarat dan ketentuan organisasi.",
	},
}

var regionalLeaveTemplates = []newsTemplate{
	{
		"%s Keluar Dari %s",
		"Pemerintah %s mengumumkan keputusan untuk keluar dari %s. Langkah ini mencerminkan pergeseran arah kebijakan luar negeri dan prioritas geopolitik negara tersebut.",
	},
	{
		"%s Mengundurkan Diri Dari %s",
		"Secara mengejutkan, %s memutuskan untuk mengundurkan diri dari keanggotaan %s. Keputusan ini akan mempengaruhi dinamika geopolitik dan perdagangan kawasan.",
	},
	{
		"%s Perkuat Posisi di %s",
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
			generatePBBMembershipNews(nation, nationLower, dateStr)
		} else if roll < 40 {
			generateRegionalMembershipNews(nation, nationLower, dateStr)
		} else {
			generateVotingNews(nation, dateStr)
		}
	}
}

func generatePBBMembershipNews(nation, nationLower, dateStr string) {
	isMember := IsMemberOfPBBOrg(nationLower)
	org := pbbSubOrgs[core.Rng.Intn(len(pbbSubOrgs))]

	var t newsTemplate
	if isMember {
		if core.Rng.Intn(100) < 10 {
			t = pbbLeaveTemplates[0]
		} else {
			t = pbbLeaveTemplates[1+core.Rng.Intn(len(pbbLeaveTemplates)-1)]
		}
	} else {
		t = pbbJoinTemplates[core.Rng.Intn(len(pbbJoinTemplates))]
	}

	subj := fmt.Sprintf(t.Subject, nation, org)
	content := fmt.Sprintf(t.Content, nation, org)
	core.AddNewsItemLocked("Global Diplomacy News", subj, content, "organizations", "high", dateStr)
}

func generateRegionalMembershipNews(nation, nationLower, dateStr string) {
	for attempt := 0; attempt < 5; attempt++ {
		org := RegionalOrgList[core.Rng.Intn(len(RegionalOrgList))]
		isMember := IsMemberOfRegionalOrg(nationLower, org)
		isEligible := IsEligibleForOrg(nationLower, org)

		if isMember {
			var t newsTemplate
			if core.Rng.Intn(100) < 15 {
				t = regionalLeaveTemplates[core.Rng.Intn(2)]
			} else {
				t = regionalLeaveTemplates[2]
			}
			subj := fmt.Sprintf(t.Subject, nation, org)
			content := fmt.Sprintf(t.Content, nation, org)
			core.AddNewsItemLocked("Regional Watch Intelligence", subj, content, "organizations", "medium", dateStr)
			return
		}

		if !isMember && isEligible {
			t := regionalJoinTemplates[core.Rng.Intn(len(regionalJoinTemplates))]
			subj := fmt.Sprintf(t.Subject, nation, org)
			content := fmt.Sprintf(t.Content, nation, org)
			core.AddNewsItemLocked("Regional Watch Intelligence", subj, content, "organizations", "medium", dateStr)
			return
		}
	}

	for _, org := range RegionalOrgList {
		if IsMemberOfRegionalOrg(nationLower, org) {
			t := regionalLeaveTemplates[2]
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
