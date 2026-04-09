"""
AI Voting Service untuk Simulasi Pemungutan Suara PBB
Menggunakan FastAPI sebagai microservice
Includes: Voting AI + Proposal Generator
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Optional, Literal
import json
from datetime import datetime
from enum import Enum
import random

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

# ==================== PROPOSAL MODELS ====================

class ProposalType(str, Enum):
    RESOLUTION = "resolution"
    SANCTION = "sanction"
    EMBARGO = "embargo"

class GeneratedProposal(BaseModel):
    type: ProposalType
    proposer_country: str
    target_country: Optional[str] = None
    proposal_name: str
    description: str
    duration: str
    sub_item: Optional[str] = None
    reasoning: str
    confidence: float
    priority: int  # 1-10

class ProposalGenerationRequest(BaseModel):
    country: CountryProfile
    all_countries: List[CountryProfile]
    global_tension: float = 0.5
    active_proposals_count: int = 0

class ProposalGenerationResponse(BaseModel):
    proposal: Optional[GeneratedProposal] = None
    reason: str = ""

# ==================== CORE AI LOGIC ====================

class AIProposalGenerator:
    """
    Menghasilkan proposal untuk negara AI
    """
    
    def __init__(self):
        self.max_active_proposals_per_country = 2
        self.min_confidence = 0.6
    
    def generate_proposal(
        self,
        country: CountryProfile,
        all_countries: List[CountryProfile],
        global_tension: float,
        active_proposals_count: int = 0
    ) -> Optional[GeneratedProposal]:
        """Generate proposal untuk satu negara"""
        
        if active_proposals_count >= self.max_active_proposals_per_country:
            return None
        
        proposal_type = self._select_proposal_type(country, global_tension)
        if not proposal_type:
            return None
        
        target_country = self._select_target_country(country, all_countries, proposal_type)
        proposal = self._generate_proposal_details(
            country, proposal_type, target_country, all_countries, global_tension
        )
        
        return proposal
    
    def _select_proposal_type(
        self, country: CountryProfile, global_tension: float
    ) -> Optional[ProposalType]:
        """Tentukan tipe proposal berdasarkan kondisi negara"""
        rand = random.random()
        
        if country.stability < 0.4:
            return ProposalType.RESOLUTION if rand < 0.7 else (
                ProposalType.SANCTION if rand < 0.85 else ProposalType.EMBARGO
            )
        
        if country.military_power > 0.7:
            return ProposalType.SANCTION if rand < 0.4 else (
                ProposalType.EMBARGO if rand < 0.7 else ProposalType.RESOLUTION
            )
        
        if country.political_ideology in ["neutral", "non_aligned"]:
            return ProposalType.RESOLUTION if rand < 0.6 else (
                ProposalType.SANCTION if rand < 0.8 else ProposalType.EMBARGO
            )
        
        rand_type = random.random()
        if rand_type < 0.4:
            return ProposalType.RESOLUTION
        elif rand_type < 0.7:
            return ProposalType.SANCTION
        else:
            return ProposalType.EMBARGO
    
    def _select_target_country(
        self, country: CountryProfile, all_countries: List[CountryProfile],
        proposal_type: ProposalType
    ) -> Optional[CountryProfile]:
        """Pilih negara target untuk sanksi/embargo"""
        if proposal_type == ProposalType.RESOLUTION:
            return None
        
        candidates = []
        for c in all_countries:
            if c.name == country.name:
                continue
            
            ideology_diff = 1 if country.political_ideology != c.political_ideology else 0
            military_threat = 1 if c.military_power > 0.6 else 0
            stability_risk = 1 if c.stability < 0.4 else 0
            
            score = ideology_diff + military_threat + stability_risk
            if score > 0:
                candidates.append((c, score))
        
        if not candidates:
            return None
        
        total_score = sum(score for _, score in candidates)
        rand_val = random.uniform(0, total_score)
        current = 0
        
        for candidate, score in candidates:
            current += score
            if rand_val <= current:
                return candidate
        
        return candidates[-1][0] if candidates else None
    
    def _generate_proposal_details(
        self, country: CountryProfile, proposal_type: ProposalType,
        target_country: Optional[CountryProfile], all_countries: List[CountryProfile],
        global_tension: float
    ) -> GeneratedProposal:
        """Generate detail proposal"""
        templates = self._get_proposal_templates(proposal_type, country, target_country)
        template = random.choice(templates)
        
        confidence = self._calculate_confidence(
            country, proposal_type, target_country, all_countries
        )
        priority = self._calculate_priority(country, proposal_type, global_tension, confidence)
        
        return GeneratedProposal(
            type=proposal_type,
            proposer_country=country.name,
            target_country=target_country.name if target_country else None,
            proposal_name=template["name"],
            description=template["description"],
            duration=template["duration"],
            sub_item=template.get("sub_item"),
            reasoning=template["reasoning"],
            confidence=confidence,
            priority=priority
        )
    
    def _get_proposal_templates(
        self, proposal_type: ProposalType, country: CountryProfile,
        target_country: Optional[CountryProfile]
    ) -> List[dict]:
        """Template proposal untuk berbagai skenario"""
        if proposal_type == ProposalType.RESOLUTION:
            return [
                {
                    "name": "Resolusi Perdamaian Global",
                    "description": "Mendorong dialog internasional dan penyelesaian konflik secara damai",
                    "duration": "30 hari",
                    "reasoning": "Stabilitas global diperlukan untuk pertumbuhan ekonomi"
                },
                {
                    "name": "Resolusi Perlindungan Lingkungan",
                    "description": "Komitmen bersama untuk mengurangi emisi karbon dan melindungi ekosistem",
                    "duration": "60 hari",
                    "reasoning": "Perubahan iklim mempengaruhi semua negara"
                },
                {
                    "name": "Resolusi Kerjasama Ekonomi",
                    "description": "Meningkatkan perdagangan dan investasi antar negara",
                    "duration": "30 hari",
                    "reasoning": "Pertumbuhan ekonomi bersama menguntungkan semua pihak"
                }
            ]
        
        if proposal_type == ProposalType.SANCTION:
            target_name = target_country.name if target_country else "Negara Target"
            return [
                {
                    "name": f"Sanksi Ekonomi terhadap {target_name}",
                    "description": f"Membatasi perdagangan dengan {target_name}",
                    "duration": "90 hari",
                    "reasoning": "Tekanan ekonomi untuk perubahan kebijakan"
                },
                {
                    "name": f"Embargo Senjata terhadap {target_name}",
                    "description": f"Melarang penjualan senjata ke {target_name}",
                    "duration": "180 hari",
                    "reasoning": "Mencegah eskalasi konflik regional"
                }
            ]
        
        target_name = target_country.name if target_country else "Negara Target"
        return [
            {
                "name": f"Embargo Minyak terhadap {target_name}",
                "description": f"Melarang ekspor minyak dari {target_name}",
                "duration": "120 hari",
                "sub_item": "energi",
                "reasoning": "Tekanan untuk mengubah kebijakan luar negeri"
            },
            {
                "name": f"Embargo Teknologi terhadap {target_name}",
                "description": f"Melarang transfer teknologi ke {target_name}",
                "duration": "180 hari",
                "sub_item": "teknologi",
                "reasoning": "Membatasi kemampuan militer dan ekonomi"
            }
        ]
    
    def _calculate_confidence(
        self, country: CountryProfile, proposal_type: ProposalType,
        target_country: Optional[CountryProfile], all_countries: List[CountryProfile]
    ) -> float:
        """Hitung confidence proposal"""
        confidence = 0.5
        confidence += (country.diplomatic_standing / 100) * 0.2
        
        aligned_countries = sum(
            1 for c in all_countries
            if c.political_ideology == country.political_ideology and c.name != country.name
        )
        confidence += (aligned_countries / len(all_countries)) * 0.2
        
        if proposal_type != ProposalType.RESOLUTION and target_country:
            is_enemy = target_country.political_ideology != country.political_ideology
            confidence += 0.15 if is_enemy else -0.1
        
        if proposal_type != ProposalType.RESOLUTION:
            confidence += (country.military_power / 2) * 0.15
        
        return max(0.3, min(1.0, confidence))
    
    def _calculate_priority(
        self, country: CountryProfile, proposal_type: ProposalType,
        global_tension: float, confidence: float
    ) -> int:
        """Hitung priority proposal (1-10)"""
        priority = 5
        priority += confidence * 3
        
        if proposal_type == ProposalType.RESOLUTION and global_tension > 0.7:
            priority += 2
        
        if proposal_type != ProposalType.RESOLUTION and country.military_power > 0.7:
            priority += 2
        
        return min(10, max(1, round(priority)))

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

# ==================== GLOBAL INSTANCES ====================

voting_ai = VotingAI()
proposal_generator = AIProposalGenerator()

# ==================== API ENDPOINTS ====================

@app.get("/")
async def root():
    return {
        "service": "UN Voting AI Service",
        "version": "1.0.0",
        "status": "running",
        "features": ["voting", "proposal_generation"]
    }

@app.post("/proposal/generate", response_model=ProposalGenerationResponse)
async def generate_proposal(request: ProposalGenerationRequest):
    """Generate proposal untuk satu negara"""
    try:
        proposal = proposal_generator.generate_proposal(
            request.country,
            request.all_countries,
            request.global_tension,
            request.active_proposals_count
        )
        
        if proposal:
            return ProposalGenerationResponse(
                proposal=proposal,
                reason="Proposal generated successfully"
            )
        else:
            return ProposalGenerationResponse(
                proposal=None,
                reason="Country already has max active proposals or confidence too low"
            )
    except Exception as e:
        return ProposalGenerationResponse(
            proposal=None,
            reason=f"Error generating proposal: {str(e)}"
        )

@app.post("/proposal/generate-batch")
async def generate_batch_proposals(
    countries: List[CountryProfile],
    global_tension: float = 0.5,
    active_proposals_per_country: Dict[str, int] = {}
):
    """Generate proposals untuk multiple negara"""
    try:
        proposals = []
        
        for country in countries:
            if country.name == "Player":
                continue
            
            active_count = active_proposals_per_country.get(country.name, 0)
            proposal = proposal_generator.generate_proposal(
                country,
                countries,
                global_tension,
                active_count
            )
            
            if proposal:
                proposals.append(proposal)
        
        return {
            "success": True,
            "proposals": proposals,
            "count": len(proposals)
        }
    except Exception as e:
        return {
            "success": False,
            "error": str(e),
            "proposals": [],
            "count": 0
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
