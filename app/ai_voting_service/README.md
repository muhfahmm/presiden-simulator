# UN Voting AI Service

Microservice Python untuk simulasi pemungutan suara PBB menggunakan AI.

## Fitur

- **Utility-Based Decision Making**: Setiap negara membuat keputusan berdasarkan kepentingan nasional
- **Realistic Voting Behavior**: Mempertimbangkan hubungan diplomatik, ekonomi, dan geopolitik
- **Fast Performance**: Dapat memproses 200+ negara dalam hitungan detik
- **RESTful API**: Mudah diintegrasikan dengan frontend Next.js

## Instalasi

### 1. Install Python Dependencies

```bash
cd app/ai_voting_service
pip install -r requirements.txt
```

### 2. Jalankan Service

```bash
python main.py
```

Service akan berjalan di `http://localhost:8000`

### 3. Test API

Buka browser: `http://localhost:8000/docs` untuk melihat interactive API documentation (Swagger UI)

## API Endpoints

### POST /vote/single

Menghitung vote untuk satu negara.

**Request Body:**
```json
{
  "resolution": {
    "type": "resolution",
    "name": "Larangan Perang (Anti-War)",
    "description": "Kesepakatan kolektif untuk menghentikan agresi militer",
    "proposer_country": "Indonesia",
    "target_country": null,
    "duration": "1 Tahun",
    "global_tension": 0.6
  },
  "voting_country": {
    "name": "Jepang",
    "continent": "Asia",
    "gdp": 5000000000000,
    "military_power": 75,
    "diplomatic_standing": 80,
    "political_ideology": "western",
    "stability": 0.9,
    "economic_dependency": {
      "Indonesia": 0.3
    }
  },
  "all_countries": [],
  "player_reputation": 0.7
}
```

**Response:**
```json
{
  "vote": "agree",
  "reasoning": "Jepang mendukung resolusi ini karena sejalan dengan kepentingan nasional dan hubungan diplomatik yang baik.",
  "confidence": 0.85,
  "tension_impact": -0.1
}
```

### POST /vote/batch

Menghitung vote untuk banyak negara sekaligus (lebih efisien).

**Request Body:**
```json
{
  "resolution": { ... },
  "voting_countries": [ ... ],
  "player_country": "Indonesia",
  "player_reputation": 0.7
}
```

**Response:**
```json
{
  "votes": {
    "Jepang": { "vote": "agree", ... },
    "China": { "vote": "disagree", ... }
  },
  "summary": {
    "agree": 120,
    "abstain": 45,
    "disagree": 42
  }
}
```

## Integrasi dengan Frontend

Lihat file `app/frontend/src/app/game/services/aiVotingService.ts` untuk contoh integrasi.

## Cara Kerja AI

AI menggunakan **Utility Function** untuk menghitung decision score:

```
Decision Score = 
  (0.35 × Diplomatic Relation) +
  (0.25 × Economic Interest) +
  (0.20 × Geopolitical Alignment) +
  (0.10 × Domestic Stability) +
  (0.10 × Global Tension)
```

- **Score > 0.3**: Vote "Agree"
- **Score < -0.3**: Vote "Disagree"
- **-0.3 ≤ Score ≤ 0.3**: Vote "Abstain"

## Customization

Edit `main.py` untuk mengubah:
- **Weights**: Bobot setiap faktor dalam `self.weights`
- **Thresholds**: Ambang batas keputusan dalam `_determine_vote()`
- **Logic**: Tambahkan faktor baru dalam `calculate_vote()`

## Production Deployment

Untuk production, gunakan:

```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --workers 4
```

Atau gunakan Docker (lihat `Dockerfile`).
