# AI Proposal Generator API Documentation

## Overview

Backend Python service untuk generate proposal dari negara AI. Terintegrasi dengan FastAPI voting service.

## Endpoints

### 1. Generate Single Proposal

**Endpoint**: `POST /proposal/generate`

**Request**:
```json
{
  "country": {
    "name": "China",
    "continent": "Asia",
    "gdp": 17700000000000,
    "military_power": 0.85,
    "diplomatic_standing": 45,
    "alliance_bloc": "BRICS",
    "economic_dependency": {
      "USA": 0.3,
      "Japan": 0.2
    },
    "political_ideology": "eastern",
    "stability": 0.8
  },
  "all_countries": [...],
  "global_tension": 0.6,
  "active_proposals_count": 1
}
```

**Response**:
```json
{
  "proposal": {
    "type": "sanction",
    "proposer_country": "China",
    "target_country": "USA",
    "proposal_name": "Sanksi Ekonomi terhadap USA",
    "description": "Membatasi perdagangan dengan USA",
    "duration": "90 hari",
    "sub_item": null,
    "reasoning": "Tekanan ekonomi untuk perubahan kebijakan",
    "confidence": 0.72,
    "priority": 8
  },
  "reason": "Proposal generated successfully"
}
```

### 2. Generate Batch Proposals

**Endpoint**: `POST /proposal/generate-batch`

**Request**:
```json
{
  "countries": [
    { "name": "China", ... },
    { "name": "Russia", ... },
    { "name": "India", ... }
  ],
  "global_tension": 0.6,
  "active_proposals_per_country": {
    "China": 1,
    "Russia": 0,
    "India": 1
  }
}
```

**Response**:
```json
{
  "success": true,
  "proposals": [
    {
      "type": "sanction",
      "proposer_country": "China",
      "target_country": "USA",
      "proposal_name": "Sanksi Ekonomi terhadap USA",
      "description": "Membatasi perdagangan dengan USA",
      "duration": "90 hari",
      "sub_item": null,
      "reasoning": "Tekanan ekonomi untuk perubahan kebijakan",
      "confidence": 0.72,
      "priority": 8
    },
    {
      "type": "resolution",
      "proposer_country": "India",
      "target_country": null,
      "proposal_name": "Resolusi Perdamaian Global",
      "description": "Mendorong dialog internasional dan penyelesaian konflik secara damai",
      "duration": "30 hari",
      "sub_item": null,
      "reasoning": "Stabilitas global diperlukan untuk pertumbuhan ekonomi",
      "confidence": 0.65,
      "priority": 6
    }
  ],
  "count": 2
}
```

## Proposal Types

### 1. Resolution (Resolusi)
- **Target**: None (global)
- **Duration**: 30-60 hari
- **Proposers**: Typically neutral/non-aligned countries
- **Examples**:
  - Resolusi Perdamaian Global
  - Resolusi Perlindungan Lingkungan
  - Resolusi Kerjasama Ekonomi

### 2. Sanction (Sanksi)
- **Target**: Required
- **Duration**: 90-180 hari
- **Proposers**: Countries with military power or ideological opposition
- **Examples**:
  - Sanksi Ekonomi terhadap [Country]
  - Embargo Senjata terhadap [Country]
  - Pembekuan Aset terhadap [Country]

### 3. Embargo (Embargo)
- **Target**: Required
- **Sub-items**: energi, teknologi, pertanian
- **Duration**: 90-180 hari
- **Proposers**: Countries with economic leverage
- **Examples**:
  - Embargo Minyak terhadap [Country]
  - Embargo Teknologi terhadap [Country]
  - Embargo Pertanian terhadap [Country]

## Decision Factors

### Proposal Type Selection
```
Stability < 0.4:
  - 70% Resolution
  - 15% Sanction
  - 15% Embargo

Military Power > 0.7:
  - 40% Sanction
  - 30% Embargo
  - 30% Resolution

Neutral/Non-aligned:
  - 60% Resolution
  - 20% Sanction
  - 20% Embargo
```

### Target Country Selection
For Sanction/Embargo, target is selected based on:
1. **Ideological Opposition** (different political ideology)
2. **Military Threat** (military power > 0.6)
3. **Stability Risk** (stability < 0.4)

### Confidence Calculation
```
Base: 0.5

+ Diplomatic Standing: 20%
+ Ideological Alignment: 20%
+ Military Power (for sanction/embargo): 15%
+ Enemy Status (for sanction/embargo): 15%

Range: 0.3 - 1.0
Minimum to Submit: 0.6
```

### Priority Calculation
```
Base: 5

+ Confidence * 3 (0-3 points)
+ Global Tension > 0.7 (for resolution): +2
+ Military Power > 0.7 (for sanction/embargo): +2

Range: 1-10
```

## Configuration

### Scheduler Settings
```python
max_active_proposals_per_country = 2
min_confidence = 0.6
```

### Proposal Frequency
Managed by frontend scheduler:
- Default: 7 days between proposals
- Configurable: 5-14 days

## Integration with Frontend

### Flow
```
1. Frontend: useAIProposalGeneration Hook
   ↓
2. Frontend: Call /proposal/generate-batch
   ↓
3. Backend: AIProposalGenerator.generate_proposal()
   ├─ Select proposal type
   ├─ Select target country
   ├─ Generate details
   ├─ Calculate confidence
   └─ Calculate priority
   ↓
4. Backend: Return GeneratedProposal[]
   ↓
5. Frontend: aiProposalScheduler.submitGeneratedProposals()
   ├─ Convert to GlobalProposal
   ├─ Add to activeProposals
   └─ Trigger AI voting
```

## Error Handling

### Errors
```json
{
  "success": false,
  "error": "Error message",
  "proposals": [],
  "count": 0
}
```

### Common Errors
- Country already has max active proposals
- Confidence score too low
- Invalid country profile
- Missing required fields

## Performance

### Single Proposal Generation
- Time: ~10-50ms
- Memory: ~1MB

### Batch Proposal Generation (206 countries)
- Time: ~500-800ms
- Memory: ~10-20MB

## Testing

### Test Single Proposal
```bash
curl -X POST http://localhost:8000/proposal/generate \
  -H "Content-Type: application/json" \
  -d '{
    "country": {
      "name": "China",
      "continent": "Asia",
      "gdp": 17700000000000,
      "military_power": 0.85,
      "diplomatic_standing": 45,
      "political_ideology": "eastern",
      "stability": 0.8
    },
    "all_countries": [...],
    "global_tension": 0.6,
    "active_proposals_count": 0
  }'
```

### Test Batch Proposals
```bash
curl -X POST http://localhost:8000/proposal/generate-batch \
  -H "Content-Type: application/json" \
  -d '{
    "countries": [...],
    "global_tension": 0.6,
    "active_proposals_per_country": {}
  }'
```

## Customization

### Add Custom Proposal Templates
Edit `_get_proposal_templates()` in `AIProposalGenerator`:

```python
def _get_proposal_templates(self, proposal_type, country, target_country):
    if proposal_type == ProposalType.RESOLUTION:
        return [
            {
                "name": "Custom Resolution Name",
                "description": "Custom description",
                "duration": "30 hari",
                "reasoning": "Custom reasoning"
            },
            # ... more templates
        ]
```

### Adjust Confidence Weights
Edit `_calculate_confidence()`:

```python
def _calculate_confidence(self, country, proposal_type, target_country, all_countries):
    confidence = 0.5
    
    # Adjust weights here
    confidence += (country.diplomatic_standing / 100) * 0.3  # Increased from 0.2
    confidence += (aligned_countries / len(all_countries)) * 0.25  # Increased from 0.2
    
    return max(0.3, min(1.0, confidence))
```

### Adjust Priority Weights
Edit `_calculate_priority()`:

```python
def _calculate_priority(self, country, proposal_type, global_tension, confidence):
    priority = 5
    
    # Adjust weights here
    priority += confidence * 4  # Increased from 3
    priority += 3 if proposal_type == ProposalType.RESOLUTION and global_tension > 0.7 else 0
    
    return min(10, max(1, round(priority)))
```

## Monitoring

### Health Check
```bash
curl http://localhost:8000/health
```

### Service Info
```bash
curl http://localhost:8000/
```

## Troubleshooting

### Service Not Running
```bash
python app/ai_voting_service/main.py
```

### CORS Issues
Check `CORSMiddleware` configuration in `main.py`:
```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Timeout Issues
Increase timeout in frontend:
```typescript
const aiServiceConfig = {
  baseURL: 'http://localhost:8000',
  timeout: 5000,  // Increase from 2000
  endpoints: {
    health: '/health',
    vote: '/vote/batch',
    proposal: '/proposal/generate-batch'
  }
};
```

## Future Enhancements

1. **Proposal Negotiation**: Countries negotiate before voting
2. **Coalition Building**: Countries form coalitions
3. **Proposal Amendments**: Modify proposals before voting
4. **Veto Power**: Permanent members can veto
5. **Emergency Sessions**: Fast-track proposals
6. **Conditional Voting**: Vote based on other proposals

## References

- [AI Voting Service](./main.py)
- [Frontend Integration](../frontend/src/app/game/components/.../INTEGRATION_GUIDE.md)
- [Proposal Generator Service](./ai_proposal_generator.py)
