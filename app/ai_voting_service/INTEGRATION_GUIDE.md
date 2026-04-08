# Panduan Integrasi AI Voting System

## Overview

Sistem AI Voting menggunakan arsitektur microservice dengan Python FastAPI sebagai backend AI dan Next.js sebagai frontend. AI menggunakan **Utility-Based Decision Making** untuk mensimulasikan keputusan voting yang realistis dari 200+ negara.

## Arsitektur

```
┌─────────────────┐         HTTP/REST API        ┌──────────────────┐
│                 │ ◄──────────────────────────► │                  │
│  Next.js        │                               │  Python FastAPI  │
│  Frontend       │   JSON Request/Response       │  AI Service      │
│                 │                               │                  │
└─────────────────┘                               └──────────────────┘
        │                                                  │
        │                                                  │
        ▼                                                  ▼
┌─────────────────┐                               ┌──────────────────┐
│  Game Storage   │                               │  Utility AI      │
│  (LocalStorage) │                               │  Engine          │
└─────────────────┘                               └──────────────────┘
```

## Setup & Installation

### 1. Install Python Service

```bash
cd app/ai_voting_service
pip install -r requirements.txt
```

### 2. Start AI Service

**Windows:**
```bash
start.bat
```

**Linux/Mac:**
```bash
python main.py
```

Service akan berjalan di `http://localhost:8000`

### 3. Verify Installation

Buka browser: `http://localhost:8000/docs`

Anda akan melihat Swagger UI dengan dokumentasi API interaktif.

## Integrasi ke Frontend

### Step 1: Configure Environment Variable

Tambahkan ke `app/frontend/.env.local`:

```env
NEXT_PUBLIC_AI_SERVICE_URL=http://localhost:8000
```

### Step 2: Import Hook di Component

```typescript
import { useAIVoting } from './hooks/useAIVoting';

function VotingComponent() {
  const { 
    simulateVoting, 
    isProcessing, 
    progress, 
    results 
  } = useAIVoting();

  const handleSimulate = async () => {
    const updatedProposal = await simulateVoting(
      proposal,
      allCountries,
      playerCountry,
      gameState
    );
    
    // Update UI dengan hasil voting
    console.log(updatedProposal);
  };

  return (
    <button onClick={handleSimulate}>
      Simulate AI Voting
    </button>
  );
}
```

### Step 3: Display Results

```typescript
import { AIVotingPanel } from './components/AIVotingPanel';

<AIVotingPanel
  results={results}
  isProcessing={isProcessing}
  progress={progress}
  error={error}
  isServiceAvailable={isServiceAvailable}
/>
```

## Cara Kerja AI

### Utility Function

AI menghitung **Decision Score** untuk setiap negara:

```
Decision Score = 
  (0.35 × Diplomatic Relation) +
  (0.25 × Economic Interest) +
  (0.20 × Geopolitical Alignment) +
  (0.10 × Domestic Stability) +
  (0.10 × Global Tension)
```

### Decision Thresholds

- **Score > 0.3**: Vote "Agree" ✅
- **Score < -0.3**: Vote "Disagree" ❌
- **-0.3 ≤ Score ≤ 0.3**: Vote "Abstain" ⚪

### Faktor-Faktor Keputusan

#### 1. Diplomatic Relation (35%)
- Hubungan diplomatik dengan proposer
- Player reputation
- Historical interactions

#### 2. Economic Interest (25%)
- Trade dependency
- Economic sanctions impact
- Resource access

#### 3. Geopolitical Alignment (20%)
- Political ideology (Western/Eastern/Neutral/Non-Aligned)
- Alliance membership
- Regional interests

#### 4. Domestic Stability (10%)
- Internal political stability
- Economic health
- Public opinion

#### 5. Global Tension (10%)
- Current world tension level
- Active conflicts
- Nuclear threats

## Contoh Skenario

### Skenario 1: Larangan Perang (Anti-War Resolution)

**Input:**
```json
{
  "resolution": {
    "type": "resolution",
    "name": "Larangan Perang (Anti-War)",
    "proposer_country": "Indonesia",
    "global_tension": 0.8
  }
}
```

**Expected Behavior:**
- Negara Non-Aligned (Indonesia, India): **Agree** (high confidence)
- Negara Neutral (Swiss, Austria): **Agree** (medium confidence)
- Negara dengan konflik aktif: **Disagree** atau **Abstain**
- Negara kecil dengan ketegangan tinggi: **Agree** (fear-based)

### Skenario 2: Sanksi Ekonomi

**Input:**
```json
{
  "resolution": {
    "type": "sanction",
    "name": "Sanksi Ekonomi",
    "target_country": "Rusia",
    "proposer_country": "Amerika Serikat"
  }
}
```

**Expected Behavior:**
- Negara Western Bloc: **Agree**
- Negara dengan trade dependency tinggi ke Rusia: **Disagree**
- Negara Eastern Bloc: **Disagree**
- Negara Neutral: **Abstain**

## Fallback Mode

Jika AI service tidak tersedia (offline), sistem otomatis menggunakan **Fallback Logic** yang lebih sederhana tapi tetap fungsional.

### Kapan Fallback Aktif?
- Service tidak running
- Network error
- Timeout (> 2 detik)

### Fallback Logic
Menggunakan simplified utility function dengan bobot yang sama tapi kalkulasi lebih cepat.

## Customization

### Mengubah Bobot Faktor

Edit `app/ai_voting_service/main.py`:

```python
self.weights = {
    "diplomatic_relation": 0.35,  # Ubah nilai ini
    "economic_interest": 0.25,
    "geopolitical_alignment": 0.20,
    "domestic_stability": 0.10,
    "global_tension": 0.10
}
```

### Mengubah Threshold

```python
AGREE_THRESHOLD = 0.3      # Ubah untuk lebih mudah/sulit setuju
DISAGREE_THRESHOLD = -0.3  # Ubah untuk lebih mudah/sulit tolak
```

### Menambah Faktor Baru

1. Tambahkan method baru di class `VotingAI`:

```python
def _calculate_new_factor(self, country, resolution):
    # Your logic here
    return score
```

2. Tambahkan ke `calculate_vote()`:

```python
new_score = self._calculate_new_factor(voting_country, resolution)
decision_score += self.weights["new_factor"] * new_score
```

3. Update weights:

```python
self.weights = {
    # ... existing weights
    "new_factor": 0.05
}
```

## Performance

### Benchmarks

- **Single Vote**: ~5-10ms
- **Batch Vote (200 countries)**: ~500-800ms
- **Memory Usage**: ~50MB

### Optimization Tips

1. **Gunakan Batch API** untuk voting banyak negara sekaligus
2. **Cache country profiles** jika data tidak berubah
3. **Parallel processing** untuk multiple proposals

## Troubleshooting

### Service tidak bisa start

**Error:** `ModuleNotFoundError: No module named 'fastapi'`

**Solution:**
```bash
pip install -r requirements.txt
```

### Frontend tidak bisa connect

**Error:** `Failed to fetch`

**Solution:**
1. Pastikan AI service running di port 8000
2. Check CORS configuration di `main.py`
3. Verify `NEXT_PUBLIC_AI_SERVICE_URL` di `.env.local`

### Hasil voting tidak realistis

**Solution:**
1. Check country profile data (GDP, military power, etc.)
2. Verify diplomatic relations mapping
3. Adjust weights di AI service
4. Review ideology classification

## Future Enhancements

### Phase 2: LLM Integration

Untuk keputusan yang lebih kompleks dan natural language reasoning:

```python
# Tambahkan ke requirements.txt
openai==1.12.0
langchain==0.1.0

# Implementasi di main.py
from openai import OpenAI

class LLMVotingAI(VotingAI):
    def __init__(self):
        super().__init__()
        self.client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
    
    def calculate_vote_with_llm(self, ...):
        prompt = f"""
        Anda adalah diplomat dari {country.name}.
        Evaluasi resolusi: {resolution.name}
        
        Profil negara:
        - GDP: ${country.gdp}
        - Ideology: {country.political_ideology}
        - Stability: {country.stability}
        
        Berikan vote (agree/abstain/disagree) dan reasoning.
        """
        
        response = self.client.chat.completions.create(
            model="gpt-4",
            messages=[{"role": "user", "content": prompt}]
        )
        
        # Parse response
        return self._parse_llm_response(response)
```

### Phase 3: Learning AI

AI yang belajar dari keputusan player:

```python
# Machine Learning untuk pattern recognition
from sklearn.ensemble import RandomForestClassifier

class LearningVotingAI(VotingAI):
    def __init__(self):
        super().__init__()
        self.model = RandomForestClassifier()
        self.training_data = []
    
    def learn_from_history(self, historical_votes):
        # Train model dari voting history
        X = self._prepare_features(historical_votes)
        y = self._prepare_labels(historical_votes)
        self.model.fit(X, y)
```

## Support

Untuk pertanyaan atau issue:
1. Check dokumentasi API: `http://localhost:8000/docs`
2. Review logs di console
3. Test dengan Swagger UI untuk debugging

## License

MIT License - Free to use and modify
