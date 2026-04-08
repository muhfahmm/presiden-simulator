# AI Voting Logic untuk PBB

Folder ini berisi logika Python untuk AI negara dalam sistem pemungutan suara PBB.

## Struktur Folder

```
0_pemungutan_AI_logic/
├── README.md (file ini)
├── requirements.txt
├── config.py
├── ai_voting_engine.py
├── ai_decision_maker.py
├── ai_relationship_analyzer.py
├── ai_strategy_evaluator.py
└── utils/
    ├── __init__.py
    ├── data_processor.py
    ├── logger.py
    └── constants.py
```

## Deskripsi File

### Core Files
- **ai_voting_engine.py** - Engine utama untuk voting logic AI
- **ai_decision_maker.py** - Membuat keputusan voting berdasarkan berbagai faktor
- **ai_relationship_analyzer.py** - Menganalisis hubungan diplomatik
- **ai_strategy_evaluator.py** - Mengevaluasi strategi voting

### Configuration
- **config.py** - Konfigurasi global untuk AI
- **requirements.txt** - Dependencies Python

### Utilities
- **utils/data_processor.py** - Memproses data dari game
- **utils/logger.py** - Logging untuk debugging
- **utils/constants.py** - Konstanta dan enum

## Fitur AI yang Akan Diimplementasikan

1. **Voting Decision Logic**
   - Analisis hubungan diplomatik dengan negara target
   - Evaluasi dampak ekonomi/strategis
   - Pertimbangan aliansi dan pakta

2. **Relationship Impact**
   - Menghitung perubahan hubungan berdasarkan voting
   - Prediksi reaksi negara lain

3. **Strategy Evaluation**
   - Mengevaluasi pro/kontra voting untuk/menolak
   - Scoring system untuk keputusan optimal

4. **Voting Patterns**
   - Konsistensi voting berdasarkan ideologi
   - Adaptasi strategi berdasarkan voting history

## Integrasi dengan Frontend

AI logic akan dipanggil dari:
- `VoteVisualization.tsx` - Untuk menampilkan voting AI
- `PemungutanSuaraTab.tsx` - Untuk trigger AI voting

## API Endpoints (akan dibuat)

- `POST /api/game/ai-voting/decide` - Dapatkan keputusan voting AI
- `GET /api/game/ai-voting/analysis` - Analisis voting AI
- `POST /api/game/ai-voting/execute` - Eksekusi voting AI

## Development Notes

- Gunakan Python 3.8+
- Implementasi dengan modular design
- Setiap AI negara memiliki personality/strategy sendiri
- Logging untuk tracking AI decisions
