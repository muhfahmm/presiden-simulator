"""
AI Voting Engine - Engine utama untuk voting logic AI
"""

from typing import Dict, List, Optional, Tuple
from dataclasses import dataclass
from enum import Enum
import logging

from config import AI_CONFIG, VOTING_PENALTIES
from ai_decision_maker import AIDecisionMaker
from ai_relationship_analyzer import RelationshipAnalyzer
from ai_strategy_evaluator import StrategyEvaluator

logger = logging.getLogger(__name__)


class VotingDecision(Enum):
    """Enum untuk keputusan voting"""
    SUPPORT = "support"
    ABSTAIN = "abstain"
    OPPOSE = "oppose"


@dataclass
class VotingResult:
    """Hasil voting AI"""
    country_name: str
    decision: VotingDecision
    confidence: float  # 0-1
    reasoning: str
    relationship_impact: int
    economic_impact: float
    strategic_impact: float


class AIVotingEngine:
    """Engine utama untuk AI voting"""

    def __init__(self, country_name: str, personality: str = "diplomatic"):
        """
        Initialize AI Voting Engine
        
        Args:
            country_name: Nama negara AI
            personality: Tipe personality AI (aggressive, diplomatic, neutral, defensive)
        """
        self.country_name = country_name
        self.personality = personality
        
        self.decision_maker = AIDecisionMaker(personality)
        self.relationship_analyzer = RelationshipAnalyzer()
        self.strategy_evaluator = StrategyEvaluator()
        
        logger.info(f"AI Voting Engine initialized for {country_name} ({personality})")

    def decide_vote(
        self,
        proposal_type: str,  # "resolution", "sanction", "embargo"
        target_country: str,
        game_state: Dict,
        current_relationships: Dict[str, int],
        alliances: List[str],
    ) -> VotingResult:
        """
        Membuat keputusan voting berdasarkan berbagai faktor
        
        Args:
            proposal_type: Tipe proposal (resolution, sanction, embargo)
            target_country: Negara target proposal
            game_state: State game saat ini
            current_relationships: Dict hubungan dengan negara lain
            alliances: List aliansi negara AI
            
        Returns:
            VotingResult dengan keputusan dan reasoning
        """
        
        # 1. Analisis hubungan dengan target country
        relationship_score = current_relationships.get(target_country, 0)
        relationship_analysis = self.relationship_analyzer.analyze(
            self.country_name,
            target_country,
            relationship_score,
            proposal_type
        )
        
        # 2. Evaluasi dampak strategis
        strategy_analysis = self.strategy_evaluator.evaluate(
            proposal_type,
            target_country,
            game_state,
            self.country_name
        )
        
        # 3. Cek aliansi
        is_allied = target_country in alliances
        
        # 4. Buat keputusan
        decision, confidence = self.decision_maker.make_decision(
            relationship_analysis,
            strategy_analysis,
            is_allied,
            proposal_type
        )
        
        # 5. Hitung dampak
        relationship_impact = VOTING_PENALTIES.get(proposal_type, -30)
        economic_impact = strategy_analysis.get("economic_impact", 0)
        strategic_impact = strategy_analysis.get("strategic_impact", 0)
        
        # 6. Generate reasoning
        reasoning = self._generate_reasoning(
            decision,
            relationship_analysis,
            strategy_analysis,
            is_allied
        )
        
        result = VotingResult(
            country_name=self.country_name,
            decision=decision,
            confidence=confidence,
            reasoning=reasoning,
            relationship_impact=relationship_impact,
            economic_impact=economic_impact,
            strategic_impact=strategic_impact
        )
        
        logger.info(f"Vote decision for {self.country_name}: {decision.value} (confidence: {confidence:.2f})")
        
        return result

    def batch_vote(
        self,
        proposals: List[Dict],
        game_state: Dict,
        current_relationships: Dict[str, int],
        alliances: List[str],
    ) -> List[VotingResult]:
        """
        Membuat keputusan voting untuk multiple proposals
        
        Args:
            proposals: List proposal dengan format {type, target_country}
            game_state: State game
            current_relationships: Dict hubungan
            alliances: List aliansi
            
        Returns:
            List VotingResult
        """
        results = []
        for proposal in proposals:
            result = self.decide_vote(
                proposal["type"],
                proposal["target_country"],
                game_state,
                current_relationships,
                alliances
            )
            results.append(result)
        
        return results

    def _generate_reasoning(
        self,
        decision: VotingDecision,
        relationship_analysis: Dict,
        strategy_analysis: Dict,
        is_allied: bool
    ) -> str:
        """Generate reasoning untuk keputusan voting"""
        
        reasons = []
        
        # Relationship reasoning
        rel_status = relationship_analysis.get("status", "neutral")
        reasons.append(f"Hubungan: {rel_status}")
        
        # Strategic reasoning
        if strategy_analysis.get("strategic_impact", 0) > 0:
            reasons.append("Dampak strategis positif")
        elif strategy_analysis.get("strategic_impact", 0) < 0:
            reasons.append("Dampak strategis negatif")
        
        # Alliance reasoning
        if is_allied:
            reasons.append("Aliansi mempengaruhi keputusan")
        
        # Economic reasoning
        if strategy_analysis.get("economic_impact", 0) > 0:
            reasons.append("Dampak ekonomi positif")
        elif strategy_analysis.get("economic_impact", 0) < 0:
            reasons.append("Dampak ekonomi negatif")
        
        return " | ".join(reasons)

    def get_voting_history(self) -> Dict:
        """Dapatkan history voting AI"""
        return {
            "country": self.country_name,
            "personality": self.personality,
            "total_votes": 0,  # Will be updated from database
            "support_count": 0,
            "abstain_count": 0,
            "oppose_count": 0,
        }
