"""
AI Proposal Generator Service
Menghasilkan proposal dari negara AI berdasarkan kepentingan geopolitik
"""

from typing import List, Optional, Literal
from pydantic import BaseModel
from enum import Enum
import random
import json

# ==================== MODELS ====================

class ProposalType(str, Enum):
    RESOLUTION = "resolution"
    SANCTION = "sanction"
    EMBARGO = "embargo"

class CountryProfile(BaseModel):
    name: str
    continent: str
    gdp: float
    military_power: float
    diplomatic_standing: float
    alliance_bloc: Optional[str] = None
    economic_dependency: dict = {}
    political_ideology: str = "neutral"  # "western", "eastern", "neutral", "non_aligned"
    stability: float = 0.7

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

# ==================== PROPOSAL GENERATOR ====================

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
        """
        Generate proposal untuk satu negara
        """
        
        # Cek apakah negara sudah punya terlalu banyak proposal aktif
        if active_proposals_count >= self.max_active_proposals_per_country:
            return None
        
        # Tentukan tipe proposal
        proposal_type = self._select_proposal_type(country, global_tension)
        if not proposal_type:
            return None
        
        # Tentukan target negara (jika ada)
        target_country = self._select_target_country(country, all_countries, proposal_type)
        
        # Generate proposal details
        proposal = self._generate_proposal_details(
            country,
            proposal_type,
            target_country,
            all_countries,
            global_tension
        )
        
        return proposal
    
    def _select_proposal_type(
        self,
        country: CountryProfile,
        global_tension: float
    ) -> Optional[ProposalType]:
        """
        Tentukan tipe proposal berdasarkan kondisi negara
        """
        rand = random.random()
        
        # Negara dengan stabilitas rendah cenderung propose resolusi
        if country.stability < 0.4:
            return ProposalType.RESOLUTION if rand < 0.7 else (
                ProposalType.SANCTION if rand < 0.85 else ProposalType.EMBARGO
            )
        
        # Negara dengan military power tinggi cenderung propose sanksi/embargo
        if country.military_power > 0.7:
            return ProposalType.SANCTION if rand < 0.4 else (
                ProposalType.EMBARGO if rand < 0.7 else ProposalType.RESOLUTION
            )
        
        # Negara netral cenderung propose resolusi
        if country.political_ideology in ["neutral", "non_aligned"]:
            return ProposalType.RESOLUTION if rand < 0.6 else (
                ProposalType.SANCTION if rand < 0.8 else ProposalType.EMBARGO
            )
        
        # Default: random
        rand_type = random.random()
        if rand_type < 0.4:
            return ProposalType.RESOLUTION
        elif rand_type < 0.7:
            return ProposalType.SANCTION
        else:
            return ProposalType.EMBARGO
    
    def _select_target_country(
        self,
        country: CountryProfile,
        all_countries: List[CountryProfile],
        proposal_type: ProposalType
    ) -> Optional[CountryProfile]:
        """
        Pilih negara target untuk sanksi/embargo
        """
        if proposal_type == ProposalType.RESOLUTION:
            return None
        
        # Cari negara dengan hubungan buruk atau ideologi berbeda
        candidates = []
        for c in all_countries:
            if c.name == country.name:
                continue
            
            # Prioritas: ideologi berbeda, military power tinggi, atau stability rendah
            ideology_diff = 1 if country.political_ideology != c.political_ideology else 0
            military_threat = 1 if c.military_power > 0.6 else 0
            stability_risk = 1 if c.stability < 0.4 else 0
            
            score = ideology_diff + military_threat + stability_risk
            if score > 0:
                candidates.append((c, score))
        
        if not candidates:
            return None
        
        # Pilih random dari candidates (weighted by score)
        total_score = sum(score for _, score in candidates)
        rand_val = random.uniform(0, total_score)
        current = 0
        
        for candidate, score in candidates:
            current += score
            if rand_val <= current:
                return candidate
        
        return candidates[-1][0] if candidates else None
    
    def _generate_proposal_details(
        self,
        country: CountryProfile,
        proposal_type: ProposalType,
        target_country: Optional[CountryProfile],
        all_countries: List[CountryProfile],
        global_tension: float
    ) -> GeneratedProposal:
        """
        Generate detail proposal
        """
        templates = self._get_proposal_templates(proposal_type, country, target_country)
        template = random.choice(templates)
        
        # Hitung confidence
        confidence = self._calculate_confidence(
            country,
            proposal_type,
            target_country,
            all_countries
        )
        
        # Hitung priority
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
        self,
        proposal_type: ProposalType,
        country: CountryProfile,
        target_country: Optional[CountryProfile]
    ) -> List[dict]:
        """
        Template proposal untuk berbagai skenario
        """
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
                },
                {
                    "name": "Resolusi Hak Asasi Manusia",
                    "description": "Perlindungan universal hak asasi manusia dan kebebasan fundamental",
                    "duration": "45 hari",
                    "reasoning": "Hak asasi manusia adalah fondasi perdamaian dunia"
                }
            ]
        
        if proposal_type == ProposalType.SANCTION:
            target_name = target_country.name if target_country else "Negara Target"
            return [
                {
                    "name": f"Sanksi Ekonomi terhadap {target_name}",
                    "description": f"Membatasi perdagangan dan investasi dengan {target_name} karena pelanggaran hak asasi manusia",
                    "duration": "90 hari",
                    "reasoning": "Tekanan ekonomi untuk perubahan kebijakan"
                },
                {
                    "name": f"Embargo Senjata terhadap {target_name}",
                    "description": f"Melarang penjualan senjata dan teknologi militer ke {target_name}",
                    "duration": "180 hari",
                    "reasoning": "Mencegah eskalasi konflik regional"
                },
                {
                    "name": f"Pembekuan Aset terhadap {target_name}",
                    "description": f"Membekukan aset dan akun keuangan {target_name} di lembaga internasional",
                    "duration": "120 hari",
                    "reasoning": "Tekanan finansial untuk compliance dengan resolusi PBB"
                }
            ]
        
        # EMBARGO
        target_name = target_country.name if target_country else "Negara Target"
        return [
            {
                "name": f"Embargo Minyak terhadap {target_name}",
                "description": f"Melarang ekspor minyak dan produk energi dari {target_name}",
                "duration": "120 hari",
                "sub_item": "energi",
                "reasoning": "Tekanan untuk mengubah kebijakan luar negeri"
            },
            {
                "name": f"Embargo Teknologi terhadap {target_name}",
                "description": f"Melarang transfer teknologi dan akses ke pasar teknologi global",
                "duration": "180 hari",
                "sub_item": "teknologi",
                "reasoning": "Membatasi kemampuan militer dan ekonomi"
            },
            {
                "name": f"Embargo Pertanian terhadap {target_name}",
                "description": f"Melarang ekspor produk pertanian dan pangan dari {target_name}",
                "duration": "90 hari",
                "sub_item": "pertanian",
                "reasoning": "Tekanan ekonomi untuk perubahan kebijakan"
            }
        ]
    
    def _calculate_confidence(
        self,
        country: CountryProfile,
        proposal_type: ProposalType,
        target_country: Optional[CountryProfile],
        all_countries: List[CountryProfile]
    ) -> float:
        """
        Hitung confidence proposal
        """
        confidence = 0.5
        
        # Faktor 1: Diplomatic standing
        confidence += (country.diplomatic_standing / 100) * 0.2
        
        # Faktor 2: Ideologi alignment dengan negara lain
        aligned_countries = sum(
            1 for c in all_countries
            if c.political_ideology == country.political_ideology and c.name != country.name
        )
        confidence += (aligned_countries / len(all_countries)) * 0.2
        
        # Faktor 3: Untuk sanction/embargo, cek apakah target adalah musuh
        if proposal_type != ProposalType.RESOLUTION and target_country:
            is_enemy = target_country.political_ideology != country.political_ideology
            confidence += 0.15 if is_enemy else -0.1
        
        # Faktor 4: Military power (untuk sanction/embargo)
        if proposal_type != ProposalType.RESOLUTION:
            confidence += (country.military_power / 2) * 0.15
        
        return max(0.3, min(1.0, confidence))
    
    def _calculate_priority(
        self,
        country: CountryProfile,
        proposal_type: ProposalType,
        global_tension: float,
        confidence: float
    ) -> int:
        """
        Hitung priority proposal (1-10)
        """
        priority = 5
        
        # Tinggi jika confidence tinggi
        priority += confidence * 3
        
        # Tinggi jika global tension tinggi dan type adalah resolution
        if proposal_type == ProposalType.RESOLUTION and global_tension > 0.7:
            priority += 2
        
        # Tinggi jika negara punya military power tinggi dan type adalah sanction/embargo
        if proposal_type != ProposalType.RESOLUTION and country.military_power > 0.7:
            priority += 2
        
        return min(10, max(1, round(priority)))


# ==================== API ENDPOINTS ====================

from fastapi import APIRouter

router = APIRouter(prefix="/proposal", tags=["proposal"])
generator = AIProposalGenerator()

@router.post("/generate")
async def generate_proposal(request: ProposalGenerationRequest) -> ProposalGenerationResponse:
    """
    Generate proposal untuk satu negara
    """
    try:
        proposal = generator.generate_proposal(
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

@router.post("/generate-batch")
async def generate_batch_proposals(
    countries: List[CountryProfile],
    global_tension: float = 0.5,
    active_proposals_per_country: dict = {}
) -> dict:
    """
    Generate proposals untuk multiple negara
    """
    try:
        proposals = []
        
        for country in countries:
            if country.name == "Player":
                continue
            
            active_count = active_proposals_per_country.get(country.name, 0)
            proposal = generator.generate_proposal(
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
