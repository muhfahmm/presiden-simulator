"""
AI Decision Maker - Membuat keputusan voting berdasarkan berbagai faktor
"""

from typing import Dict, Tuple
from enum import Enum
import logging

from config import AI_PERSONALITIES

logger = logging.getLogger(__name__)


class VotingDecision(Enum):
    """Enum untuk keputusan voting"""
    SUPPORT = "support"
    ABSTAIN = "abstain"
    OPPOSE = "oppose"


class AIDecisionMaker:
    """Membuat keputusan voting AI"""

    def __init__(self, personality: str = "diplomatic"):
        """
        Initialize Decision Maker
        
        Args:
            personality: Tipe personality (aggressive, diplomatic, neutral, defensive)
        """
        self.personality = personality
        self.personality_config = AI_PERSONALITIES.get(personality, AI_PERSONALITIES["diplomatic"])

    def make_decision(
        self,
        relationship_analysis: Dict,
        strategy_analysis: Dict,
        is_allied: bool,
        proposal_type: str
    ) -> Tuple[VotingDecision, float]:
        """
        Membuat keputusan voting
        
        Args:
            relationship_analysis: Hasil analisis hubungan
            strategy_analysis: Hasil analisis strategi
            is_allied: Apakah target adalah aliansi
            proposal_type: Tipe proposal
            
        Returns:
            Tuple (VotingDecision, confidence score 0-1)
        """
        
        # Calculate scores
        relationship_score = self._calculate_relationship_score(relationship_analysis)
        strategy_score = self._calculate_strategy_score(strategy_analysis)
        alliance_score = self._calculate_alliance_score(is_allied)
        
        # Weighted scoring
        total_score = (
            relationship_score * 0.3 +
            strategy_score * 0.35 +
            alliance_score * 0.35
        )
        
        # Apply personality bias
        total_score = self._apply_personality_bias(total_score, proposal_type)
        
        # Determine decision
        if total_score > 0.6:
            decision = VotingDecision.SUPPORT
            confidence = min(total_score, 1.0)
        elif total_score < 0.4:
            decision = VotingDecision.OPPOSE
            confidence = min(1.0 - total_score, 1.0)
        else:
            decision = VotingDecision.ABSTAIN
            confidence = 0.5
        
        logger.debug(
            f"Decision: {decision.value}, Score: {total_score:.2f}, "
            f"Confidence: {confidence:.2f}"
        )
        
        return decision, confidence

    def _calculate_relationship_score(self, relationship_analysis: Dict) -> float:
        """
        Hitung score berdasarkan hubungan
        
        Returns:
            Score 0-1 (0 = sangat buruk, 1 = sangat baik)
        """
        status = relationship_analysis.get("status", "neutral")
        score_map = {
            "very_good": 1.0,
            "good": 0.8,
            "neutral": 0.5,
            "bad": 0.2,
            "very_bad": 0.1,
            "enemy": 0.0,
        }
        
        return score_map.get(status, 0.5)

    def _calculate_strategy_score(self, strategy_analysis: Dict) -> float:
        """
        Hitung score berdasarkan dampak strategis
        
        Returns:
            Score 0-1
        """
        economic_impact = strategy_analysis.get("economic_impact", 0)
        strategic_impact = strategy_analysis.get("strategic_impact", 0)
        
        # Normalize impacts to 0-1 range
        economic_score = max(0, min(1, (economic_impact + 100) / 200))
        strategic_score = max(0, min(1, (strategic_impact + 100) / 200))
        
        return (economic_score + strategic_score) / 2

    def _calculate_alliance_score(self, is_allied: bool) -> float:
        """
        Hitung score berdasarkan aliansi
        
        Returns:
            Score 0-1
        """
        if is_allied:
            # Jika aliansi, cenderung support
            return 0.7
        else:
            # Jika bukan aliansi, neutral
            return 0.5

    def _apply_personality_bias(self, score: float, proposal_type: str) -> float:
        """
        Terapkan personality bias ke score
        
        Args:
            score: Score awal
            proposal_type: Tipe proposal
            
        Returns:
            Score yang sudah di-bias
        """
        voting_bias = self.personality_config.get("voting_bias", 0.5)
        
        # Aggressive personality cenderung support sanctions/embargoes
        if self.personality == "aggressive" and proposal_type in ["sanction", "embargo"]:
            score = score * 1.2
        
        # Diplomatic personality cenderung abstain
        if self.personality == "diplomatic":
            score = score * 0.9 + 0.05
        
        # Defensive personality cenderung oppose
        if self.personality == "defensive" and proposal_type in ["sanction", "embargo"]:
            score = score * 0.8
        
        # Clamp score to 0-1
        return max(0, min(1, score))
