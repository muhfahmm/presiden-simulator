# AI Proposal Generator - Backend Implementation

## Overview

Backend Python service yang menghasilkan proposal dari 206 negara AI untuk sistem voting PBB. Terintegrasi dengan FastAPI voting service yang sudah ada.

## Files

### Core Files
- **`main.py`** - FastAPI service dengan voting + proposal generation
- **`ai_proposal_generator.py`** - Standalone proposal generator (optional)
- **`PROPOSAL_GENERATOR_API.md`** - API documentation

### Configuration
- **`requirements.txt`** - Python dependencies
- **`.env.example`** - Environment variables

## Installation

### 1. Install Dependencies
```bash
cd app/ai_voting_service
pip install -r requirements.txt
```

### 2. Run Service
```bash
python main.py
```

Service akan berjalan di `http://localhost:8000`

### 3. Verify Service
```bash
curl http://localhost:8000/health
```

Expected response:
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T12:00:00"
}
```

## Architecture

### Components

#### 1. AIProposalGenerator Class
Menghasilkan proposal untuk negara AI:
- Selects proposal type (resolution/sanction/embargo)
- Selects target country (for sanction/embargo)
- Generates proposal details
- Calculates confidence score
- Calculates priority (1-10)

#### 2. VotingAI Class
Existing voting system (unchanged):
- Calculates votes for proposals
- Uses weighted decision scoring
- Handles diplomatic relations, economic interests, etc.

#### 3. FastAPI Service
REST API endpoints:
- `/proposal/generate` - Generate single proposal
- `/proposal/generate-batch` - Generate multiple proposals
- `/vote/single` - Vote on single proposal
- `/vote/batch` - Vote on multiple proposals
- `/health` - Health check

## API Endpoints

### Generate Proposal
```
POST /proposal/generate
Content-Type: application/json

{
  "country": CountryProfile,
  "all_countries": List[CountryProfile],
  "global_tension": float,
  "active_proposals_count": int
}

Response:
{
  "proposal": GeneratedProposal | null,
  "reason": string
}
```

### Generate Batch Proposals
```
POST /proposal/generate-batch
Content-Type: application/json

{
  "countries": List[CountryProfile],
  "global_tension": float,
  "active_proposals_per_country": Dict[str, int]
}

Response:
{
  "success": bool,
  "proposals": List[GeneratedProposal],
  "count": int
}
```

## Data Models

### CountryProfile
```python
{
  "name": str,
  "continent": str,
  "gdp": float,
  "military_power": float,
  "diplomatic_standing": float,
  "alliance_bloc": str | None,
  "economic_dependency": Dict[str, float],
  "political_ideology": str,  # "western", "eastern", "neutral", "non_aligned"
  "stability": float  # 0-1
}
```

### GeneratedProposal
```python
{
  "type": str,  # "resolution", "sanction", "embargo"
  "proposer_country": str,
  "target_country": str | None,
  "proposal_name": str,
  "description": str,
  "duration": str,
  "sub_item": str | None,
  "reasoning": str,
  "confidence": float,  # 0-1
  "priority": int  # 1-10
}
```

## Decision Logic

### Proposal Type Selection
```
if stability < 0.4:
  70% Resolution, 15% Sanction, 15% Embargo
elif military_power > 0.7:
  40% Sanction, 30% Embargo, 30% Resolution
elif ideology in [neutral, non_aligned]:
  60% Resolution, 20% Sanction, 20% Embargo
else:
  40% Resolution, 30% Sanction, 30% Embargo
```

### Target Country Selection
For Sanction/Embargo:
1. Filter countries with different ideology OR high military power OR low stability
2. Weight by score (ideology diff + military threat + stability risk)
3. Select randomly weighted by score

### Confidence Calculation
```
Base: 0.5
+ Diplomatic Standing: 20%
+ Ideological Alignment: 20%
+ Military Power (sanction/embargo): 15%
+ Enemy Status (sanction/embargo): 15%

Min: 0.3, Max: 1.0
Threshold to Submit: 0.6
```

### Priority Calculation
```
Base: 5
+ Confidence * 3
+ (Global Tension > 0.7 for resolution): +2
+ (Military Power > 0.7 for sanction/embargo): +2

Min: 1, Max: 10
```

## Integration with Frontend

### Flow
```
Frontend Hook (useAIProposalGeneration)
  ↓
Call POST /proposal/generate-batch
  ↓
Backend: AIProposalGenerator.generate_proposal()
  ├─ Select type
  ├─ Select target
  ├─ Generate details
  ├─ Calculate confidence
  └─ Calculate priority
  ↓
Return GeneratedProposal[]
  ↓
Frontend: Convert to GlobalProposal
  ↓
Frontend: Trigger AI voting
  ↓
Call POST /vote/batch
  ↓
Backend: VotingAI.calculate_vote()
  ↓
Return votes
```

## Configuration

### Scheduler Settings (Frontend)
```typescript
{
  proposalFrequency: 7,              // Days between proposals
  minConfidence: 0.6,                // Minimum confidence
  maxActiveProposalsPerCountry: 2    // Max concurrent proposals
}
```

### Check Interval (Frontend)
```typescript
{
  enabled: true,
  checkInterval: 60000  // Check every 60 seconds
}
```

## Customization

### Add Custom Proposal Templates
Edit `_get_proposal_templates()` in `AIProposalGenerator`:

```python
def _get_proposal_templates(self, proposal_type, country, target_country):
    if proposal_type == ProposalType.RESOLUTION:
        return [
            {
                "name": "Your Custom Resolution",
                "description": "Description here",
                "duration": "30 hari",
                "reasoning": "Reasoning here"
            },
            # Add more templates
        ]
```

### Adjust Decision Weights
Edit confidence calculation:

```python
def _calculate_confidence(self, country, proposal_type, target_country, all_countries):
    confidence = 0.5
    
    # Adjust these weights
    confidence += (country.diplomatic_standing / 100) * 0.25  # Was 0.2
    confidence += (aligned_countries / len(all_countries)) * 0.25  # Was 0.2
    
    return max(0.3, min(1.0, confidence))
```

### Adjust Priority Weights
Edit priority calculation:

```python
def _calculate_priority(self, country, proposal_type, global_tension, confidence):
    priority = 5
    
    # Adjust these weights
    priority += confidence * 4  # Was 3
    priority += 3 if proposal_type == ProposalType.RESOLUTION and global_tension > 0.7 else 0
    
    return min(10, max(1, round(priority)))
```

## Performance

### Single Proposal
- Time: ~10-50ms
- Memory: ~1MB

### Batch (206 countries)
- Time: ~500-800ms
- Memory: ~10-20MB

### Optimization Tips
1. Use batch endpoint instead of single
2. Cache country profiles
3. Increase check interval on frontend
4. Use connection pooling

## Monitoring

### Health Check
```bash
curl http://localhost:8000/health
```

### Service Info
```bash
curl http://localhost:8000/
```

### Logs
```bash
# Run with verbose logging
python main.py --log-level debug
```

## Troubleshooting

### Service Won't Start
```bash
# Check if port 8000 is in use
lsof -i :8000

# Kill existing process
kill -9 <PID>

# Try different port
uvicorn main:app --port 8001
```

### CORS Errors
Check `CORSMiddleware` in `main.py`:
```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Timeout Errors
Increase timeout in frontend config:
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

### Memory Issues
- Reduce batch size
- Increase check interval
- Monitor with `top` or `htop`

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
    "all_countries": [],
    "global_tension": 0.6,
    "active_proposals_count": 0
  }'
```

### Test Batch Proposals
```bash
curl -X POST http://localhost:8000/proposal/generate-batch \
  -H "Content-Type: application/json" \
  -d '{
    "countries": [
      {
        "name": "China",
        "continent": "Asia",
        "gdp": 17700000000000,
        "military_power": 0.85,
        "diplomatic_standing": 45,
        "political_ideology": "eastern",
        "stability": 0.8
      }
    ],
    "global_tension": 0.6,
    "active_proposals_per_country": {}
  }'
```

## Deployment

### Development
```bash
python main.py
```

### Production
```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --workers 4
```

### Docker
```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY main.py .

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

## Future Enhancements

1. **Proposal Negotiation**: Countries negotiate before voting
2. **Coalition Building**: Countries form coalitions
3. **Proposal Amendments**: Modify proposals before voting
4. **Veto Power**: Permanent members can veto
5. **Emergency Sessions**: Fast-track proposals
6. **Conditional Voting**: Vote based on other proposals
7. **Machine Learning**: Learn from voting patterns
8. **Sentiment Analysis**: Analyze proposal sentiment

## References

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Pydantic Documentation](https://docs.pydantic.dev/)
- [Frontend Integration Guide](../frontend/src/app/game/components/.../INTEGRATION_GUIDE.md)
- [API Documentation](./PROPOSAL_GENERATOR_API.md)

## Support

For issues or questions:
1. Check logs: `python main.py`
2. Test endpoints with curl
3. Check CORS configuration
4. Verify country profiles are valid
5. Monitor performance with `top`

## License

Same as main project
