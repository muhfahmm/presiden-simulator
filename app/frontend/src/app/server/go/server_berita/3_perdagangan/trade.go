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
	
	core.AddNewsItemLocked("Berita Perdagangan Dunia", subj, content, "economy", "low", dateStr)
}
