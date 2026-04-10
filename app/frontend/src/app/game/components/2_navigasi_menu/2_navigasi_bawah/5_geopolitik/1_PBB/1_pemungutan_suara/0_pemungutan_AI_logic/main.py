"""
AI Voting Service - Main Entry Point
Integrated with specialized AI Voting Engine
"""

from fastapi import FastAPI, HTTPException, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Optional, Literal
import json
from datetime import datetime
from enum import Enum
import random

# Import specialized logic
from ai_voting_engine import AIVotingEngine
from ai_decision_maker import VotingDecision

app = FastAPI(title="UN Voting AI Service", version="1.1.0")

# CORS untuk komunikasi dengan frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In development, allow all. In production, restrict to localhost:3000/3001
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
    economic_dependency: Dict[str, float] = {}
    political_ideology: str = "neutral"
    stability: float = 0.7
    personality: str = "diplomatic" # Added to support specialized personalities

class Resolution(BaseModel):
    type: str # "resolution", "sanction", "embargo"
    name: str
    description: str
    proposer_country: str
    target_country: Optional[str] = None
    duration: str
    sub_item: Optional[str] = None
    global_tension: float = 0.5

class VotingRequest(BaseModel):
    resolution: Resolution
    voting_country: CountryProfile
    all_countries: List[CountryProfile]
    player_reputation: float = 0.5
    game_state: Optional[Dict] = {} # Optional game state for strategy evaluator

class VotingResponse(BaseModel):
    vote: Literal["agree", "abstain", "disagree"]
    reasoning: str
    confidence: float
    details: Optional[Dict] = {} # For relationship/strategic impact details

class BatchVotingRequest(BaseModel):
    resolution: Resolution
    voting_countries: List[CountryProfile]
    player_country: str
    player_reputation: float = 0.5
    game_state: Optional[Dict] = {}

class BatchVotingResponse(BaseModel):
    votes: Dict[str, VotingResponse]
    summary: Dict[str, int]

# ==================== BRIDGE LOGIC ====================

def get_voting_result(request: VotingRequest) -> VotingResponse:
    """
    Bridge between FastAPI request and AIVotingEngine
    """
    # Instantiate engine for this specific country
    engine = AIVotingEngine(
        country_name=request.voting_country.name,
        personality=request.voting_country.personality
    )
    
    # Prepare data for the engine
    # Map economic_dependency to current_relationships format (Dict[str, int])
    # Note: AIVotingEngine expects -100 to 100, but main.py used 0 to 1 scores.
    # We'll normalize if necessary or just pass through.
    current_relationships = {k: int(v * 100) for k, v in request.voting_country.economic_dependency.items()}
    
    # Add diplomatic standing as a base relationship if not present
    if request.resolution.proposer_country not in current_relationships:
        current_relationships[request.resolution.proposer_country] = int(request.voting_country.diplomatic_standing)

    # Alliances list
    alliances = [request.voting_country.alliance_bloc] if request.voting_country.alliance_bloc else []
    
    # Decide vote
    result = engine.decide_vote(
        proposal_type=request.resolution.type,
        target_country=request.resolution.target_country or "None",
        game_state=request.game_state or {},
        current_relationships=current_relationships,
        alliances=alliances
    )
    
    # Map engine decision to API response
    vote_map = {
        VotingDecision.SUPPORT: "agree",
        VotingDecision.ABSTAIN: "abstain",
        VotingDecision.OPPOSE: "disagree"
    }
    
    return VotingResponse(
        vote=vote_map.get(result.decision, "abstain"),
        reasoning=result.reasoning,
        confidence=result.confidence,
        details={
            "relationship_impact": result.relationship_impact,
            "economic_impact": result.economic_impact,
            "strategic_impact": result.strategic_impact
        }
    )

# ==================== API ENDPOINTS ====================

@app.get("/")
async def root():
    return {
        "service": "UN Voting AI Service (Integrated)",
        "version": "1.1.0",
        "status": "running"
    }

@app.post("/vote/single", response_model=VotingResponse)
async def calculate_single_vote(request: VotingRequest):
    """
    Menghitung vote untuk satu negara menggunakan engine terspesialisasi
    """
    try:
        return get_voting_result(request)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/vote/batch", response_model=BatchVotingResponse)
async def calculate_batch_votes(request: BatchVotingRequest):
    """
    Menghitung vote untuk banyak negara sekaligus
    """
    try:
        votes = {}
        summary = {"agree": 0, "abstain": 0, "disagree": 0}
        
        for country in request.voting_countries:
            # Create a single request object for the bridge
            single_req = VotingRequest(
                resolution=request.resolution,
                voting_country=country,
                all_countries=request.voting_countries,
                player_reputation=request.player_reputation,
                game_state=request.game_state
            )
            
            result = get_voting_result(single_req)
            votes[country.name] = result
            summary[result.vote] += 1
        
        return BatchVotingResponse(votes=votes, summary=summary)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Include Proposal Generator router
from ai_proposal_generator import router as proposal_router
app.include_router(proposal_router)

@app.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now().isoformat()}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
