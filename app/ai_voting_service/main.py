"""
AI Voting Service untuk Simulasi Pemungutan Suara PBB
Menggunakan FastAPI sebagai microservice
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Optional, Literal
import json
from datetime import datetime

app = FastAPI(title="UN Voting AI Service", version="1.0.0")

# CORS untuk komunikasi dengan frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==================== MODELS ====================

class CountryProfile(BaseModel):
    name: str
    continent: str
    gdp: float
    military_power: float
    diplomatic_standing: float
    alliance_bloc: Optional[str] = None
    economic_dependency: Dict[str, float] = {}  # {country_name: dependency_score}
    political_ideology: str = "neutral"  # "western", "eastern", "neutral", "non_aligned"
    stability: float = 0.7  # 0-1

class Resolution(BaseModel):
    type: Literal["resolution", "sanction", "embargo"]
    name: str
    description: str
    proposer_country: str
    target_country: Optional[str] = None
    duration: str
    sub_item: Optional[str] = None
    global_tension: float = 0.5  # 0-1

class VotingRequest(BaseModel):
    resolution: Resolution
    voting_country: CountryProfile
    all_countries: List[CountryProfile]
    player_reputation: float = 0.5  # 0-1

class VotingResponse(BaseModel):
    vote: Literal["agree", "abstain", "disagree"]
    reasoning: str
    confidence: float  # 0-1
    tension_impact: float  # -1 to 1

class BatchVotingRequest(BaseModel):
    resolution: Resolution
    voting_countries: List[CountryProfile]
    player_country: str
    player_reputation: float = 0.5

class BatchVotingResponse(BaseModel):
    votes: Dict[str, VotingResponse]
    summary: Dict[str, int]  # {"agree": X, "abstain": Y, "disagree": Z}

# ==================== CORE AI LOGIC ====================

class VotingAI:
    """
    Utility-based AI untuk pengambilan keputusan voting
    """
    
    def __init__(self):
        self.weights = {
            "diplomatic_relation": 0.35,
            "economic_interest": 0.25,
            "geopolitical_alignment": 0.20,
            "domestic_stability": 0.10,
            "global_tension": 0.10
        }
    
    def calculate_vote(
        self,
        resolution: Resolution,
        voting_country: CountryProfile,
        all_countries: List[CountryProfile],
        player_reputation: float
    ) -> VotingResponse:
        """
        Menghitung keputusan voting berdasarkan utility function
        """
        
        # 1. Diplomatic Relation Score
        diplomatic_score = self._calculate_diplomatic_score(
            voting_country, resolution.proposer_country, player_reputation
        )
        
        # 2. Economic Interest Score
        economic_score = self._calculate_economic_score(
            voting_country, resolution, all_countries
        )
        
        # 3. Geopolitical Alignment Score
        geopolitical_score = self._calculate_geopolitical_score(
            voting_country, resolution
        )
        
        # 4. Domestic Stability Impact
        stability_score = self._calculate_stability_impact(
            voting_country, resolution
        )
        
        # 5. Global Tension Impact
        tension_score = self._calculate_tension_impact(
            resolution.global_tension, voting_country
        )
        
        # Weighted Decision Score
        decision_score = (
            self.weights["diplomatic_relation"] * diplomatic_score +
            self.weights["economic_interest"] * economic_score +
            self.weights["geopolitical_alignment"] * geopolitical_score +
            self.weights["domestic_stability"] * stability_score +
            self.weights["global_tension"] * tension_score
        )
        
        # Determine vote based on score
        vote, reasoning = self._determine_vote(
            decision_score, voting_country, resolution
        )
        
        # Calculate confidence and tension impact
        confidence = abs(decision_score)
        tension_impact = self._calculate_tension_change(vote, resolution)
        
        return VotingResponse(
            vote=vote,
            reasoning=reasoning,
            confidence=min(confidence, 1.0),
            tension_impact=tension_impact
        )
    
    def _calculate_diplomatic_score(
        self, country: CountryProfile, proposer: str, player_rep: float
    ) -> float:
        """
        Skor berdasarkan hubungan diplomatik
        """
        # Normalize diplomatic standing (-100 to 100) to (-1 to 1)
        base_score = country.diplomatic_standing / 100.0
        
        # Adjust based on player reputation
        if proposer == "player":
            base_score *= player_rep
        
        return base_score
    
    def _calculate_economic_score(
        self, country: CountryProfile, resolution: Resolution, all_countries: List[CountryProfile]
    ) -> float:
        """
        Skor berdasarkan kepentingan ekonomi
        """
        if not resolution.target_country:
            return 0.0
        
        # Check economic dependency
        dependency = country.economic_dependency.get(resolution.target_country, 0.0)
        
        # Sanksi/embargo akan merugikan jika ada dependency tinggi
        if resolution.type in ["sanction", "embargo"]:
            return -dependency
        
        return 0.0
    
    def _calculate_geopolitical_score(
        self, country: CountryProfile, resolution: Resolution
    ) -> float:
        """
        Skor berdasarkan alignment geopolitik
        """
        ideology_map = {
            "western": {"western": 0.8, "eastern": -0.6, "neutral": 0.2, "non_aligned": 0.0},
            "eastern": {"western": -0.6, "eastern": 0.8, "neutral": 0.2, "non_aligned": 0.0},
            "neutral": {"western": 0.3, "eastern": 0.3, "neutral": 0.5, "non_aligned": 0.4},
            "non_aligned": {"western": 0.0, "eastern": 0.0, "neutral": 0.4, "non_aligned": 0.6}
        }
        
        # Simplified: assume proposer ideology based on resolution type
        if resolution.type == "resolution" and "Larangan Perang" in resolution.name:
            # Peace resolution favored by neutral/non-aligned
            return ideology_map.get(country.political_ideology, {}).get("neutral", 0.0)
        
        return 0.0
    
    def _calculate_stability_impact(
        self, country: CountryProfile, resolution: Resolution
    ) -> float:
        """
        Skor berdasarkan dampak terhadap stabilitas domestik
        """
        # Negara dengan stabilitas rendah cenderung abstain
        if country.stability < 0.4:
            return -0.3
        
        return 0.0
    
    def _calculate_tension_impact(
        self, global_tension: float, country: CountryProfile
    ) -> float:
        """
        Skor berdasarkan ketegangan global
        """
        # Negara kecil takut dengan ketegangan tinggi
        if country.military_power < 50 and global_tension > 0.7:
            return -0.4
        
        return 0.0
    
    def _determine_vote(
        self, score: float, country: CountryProfile, resolution: Resolution
    ) -> tuple[str, str]:
        """
        Menentukan vote berdasarkan decision score
        """
        # Thresholds
        AGREE_THRESHOLD = 0.3
        DISAGREE_THRESHOLD = -0.3
        
        if score > AGREE_THRESHOLD:
            reasoning = f"{country.name} mendukung resolusi ini karena sejalan dengan kepentingan nasional dan hubungan diplomatik yang baik."
            return "agree", reasoning
        elif score < DISAGREE_THRESHOLD:
            reasoning = f"{country.name} menolak resolusi ini karena bertentangan dengan kepentingan ekonomi dan posisi geopolitik."
            return "disagree", reasoning
        else:
            reasoning = f"{country.name} memilih abstain karena resolusi ini tidak berdampak signifikan terhadap kepentingan nasional."
            return "abstain", reasoning
    
    def _calculate_tension_change(
        self, vote: str, resolution: Resolution
    ) -> float:
        """
        Menghitung perubahan ketegangan berdasarkan vote
        """
        if resolution.type == "resolution" and "Larangan Perang" in resolution.name:
            return -0.1 if vote == "agree" else 0.05
        elif resolution.type in ["sanction", "embargo"]:
            return 0.15 if vote == "agree" else -0.05
        
        return 0.0

# ==================== GLOBAL INSTANCE ====================

voting_ai = VotingAI()

# ==================== API ENDPOINTS ====================

@app.get("/")
async def root():
    return {
        "service": "UN Voting AI Service",
        "version": "1.0.0",
        "status": "running"
    }

@app.post("/vote/single", response_model=VotingResponse)
async def calculate_single_vote(request: VotingRequest):
    """
    Menghitung vote untuk satu negara
    """
    try:
        result = voting_ai.calculate_vote(
            request.resolution,
            request.voting_country,
            request.all_countries,
            request.player_reputation
        )
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/vote/batch", response_model=BatchVotingResponse)
async def calculate_batch_votes(request: BatchVotingRequest):
    """
    Menghitung vote untuk banyak negara sekaligus (lebih efisien)
    """
    try:
        votes = {}
        summary = {"agree": 0, "abstain": 0, "disagree": 0}
        
        for country in request.voting_countries:
            result = voting_ai.calculate_vote(
                request.resolution,
                country,
                request.voting_countries,
                request.player_reputation
            )
            votes[country.name] = result
            summary[result.vote] += 1
        
        return BatchVotingResponse(votes=votes, summary=summary)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now().isoformat()}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
