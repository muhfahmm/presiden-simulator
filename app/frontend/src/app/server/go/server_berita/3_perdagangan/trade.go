package perdagangan

import (
	"fmt"
	"emserver/core"
)

func GenerateFlashNews(dateStr string) {
	if len(core.NpcNations) == 0 {
		return
	}
	nation := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
	
	subj := fmt.Sprintf("Kenaikan Harga Komoditas di %s", nation)
	content := fmt.Sprintf("Pasar komoditas di %s mengalami lonjakan harga akibat peningkatan permintaan industri manufaktur global. Para pelaku dagang mengantisipasi penguatan ekspor pada kuartal mendatang.", nation)
	
	core.AddNewsItemLocked("Berita Perdagangan Dunia", subj, content, "trade", "low", dateStr)
}

func GenerateBatch(dateStr string, count int) {
	for i := 0; i < count; i++ {
		roll := core.Rng.Intn(3)
		switch roll {
		case 0:
			GenerateFlashNews(dateStr)
		case 1:
			if len(core.NpcNations) > 0 {
				nation := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
				subj := fmt.Sprintf("Logistik Global: Jalur Dagang %s", nation)
				content := fmt.Sprintf("Otoritas pelabuhan %s melaporkan efisiensi bongkar muat yang lebih tinggi, meningkatkan frekuensi kapal dagang dan memperlancar arus barang internasional.", nation)
				core.AddNewsItemLocked("Logistik Dunia", subj, content, "trade", "low", dateStr)
			}
		case 2:
			if len(core.NpcNations) > 0 {
				nation := core.NpcNations[core.Rng.Intn(len(core.NpcNations))]
				subj := fmt.Sprintf("Update Tarif Ekspor %s", nation)
				content := fmt.Sprintf("Kementerian Perdagangan %s mengumumkan penyesuaian tarif untuk beberapa komoditas unggulan guna menyeimbangkan neraca perdagangan dan mendongkrak daya saing global.", nation)
				core.AddNewsItemLocked("Regulasi Dagang", subj, content, "trade", "medium", dateStr)
			}
		}
	}
}
