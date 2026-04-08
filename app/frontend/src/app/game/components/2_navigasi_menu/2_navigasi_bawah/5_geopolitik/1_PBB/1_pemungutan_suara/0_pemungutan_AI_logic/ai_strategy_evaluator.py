"""
AI Strategy Evaluator - Mengevaluasi dampak strategis proposal
"""

from typing import Dict
import logging

logger = logging.getLogger(__name__)


class StrategyEvaluator:
    """Mengevaluasi dampak strategis proposal"""

    def evaluate(
        self,
        proposal_type: str,
        target_country: str,
        game_state: Dict,
        ai_country: str
    ) -> Dict:
        """
        Evaluasi dampak strategis proposal
        
        Args:
            proposal_type: Tipe proposal (resolution, sanction, embargo)
            target_country: Negara target
            game_state: State game
            ai_country: Negara AI
            
        Returns:
            Dict dengan hasil evaluasi
        """
        
        # Evaluate economic impact
        economic_impact = self._evaluate_economic_impact(
            proposal_type,
            target_country,
            game_state,
            ai_country
        )
        
        # Evaluate strategic impact
        strategic_impact = self._evaluate_strategic_impact(
            proposal_type,
            target_country,
            game_state,
            ai_country
        )
        
        # Evaluate military impact
        military_impact = self._evaluate_military_impact(
            proposal_type,
            target_country,
            game_state
        )
        
        # Calculate overall impact
        overall_impact = (economic_impact + strategic_impact + military_impact) / 3
        
        evaluation = {
            "proposal_type": proposal_type,
            "target_country": target_country,
            "economic_impact": economic_impact,
            "strategic_impact": strategic_impact,
            "military_impact": military_impact,
            "overall_impact": overall_impact,
            "recommendation": self._get_recommendation(overall_impact),
        }
        
        logger.debug(f"Strategy evaluation: {evaluation}")
        
        return evaluation

    def _evaluate_economic_impact(
        self,
        proposal_type: str,
        target_country: str,
        game_state: Dict,
        ai_country: str
    ) -> float:
        """
        Evaluasi dampak ekonomi
        
        Returns:
            Score -100 to 100
        """
        
        if proposal_type == "sanction":
            # Sanksi ekonomi merugikan target
            # Menguntungkan AI jika target adalah kompetitor
            return 30
        
        elif proposal_type == "embargo":
            # Embargo merugikan target lebih besar
            return 50
        
        elif proposal_type == "resolution":
            # Resolusi bisa menguntungkan atau merugikan
            return 0
        
        return 0

    def _evaluate_strategic_impact(
        self,
        proposal_type: str,
        target_country: str,
        game_state: Dict,
        ai_country: str
    ) -> float:
        """
        Evaluasi dampak strategis
        
        Returns:
            Score -100 to 100
        """
        
        if proposal_type == "sanction":
            # Melemahkan target secara ekonomi
            return 20
        
        elif proposal_type == "embargo":
            # Melemahkan target secara signifikan
            return 40
        
        elif proposal_type == "resolution":
            # Tergantung isi resolusi
            return 0
        
        return 0

    def _evaluate_military_impact(
        self,
        proposal_type: str,
        target_country: str,
        game_state: Dict
    ) -> float:
        """
        Evaluasi dampak militer
        
        Returns:
            Score -100 to 100
        """
        
        if proposal_type == "embargo":
            # Embargo senjata melemahkan militer target
            return 30
        
        elif proposal_type == "sanction":
            # Sanksi ekonomi bisa mempengaruhi kemampuan militer
            return 10
        
        return 0

    def _get_recommendation(self, overall_impact: float) -> str:
        """
        Dapatkan rekomendasi berdasarkan overall impact
        
        Args:
            overall_impact: Overall impact score
            
        Returns:
            Rekomendasi (support, abstain, oppose)
        """
        
        if overall_impact > 20:
            return "support"
        elif overall_impact < -20:
            return "oppose"
        else:
            return "abstain"

    def calculate_trade_impact(
        self,
        ai_country: str,
        target_country: str,
        embargo_type: str,
        game_state: Dict
    ) -> Dict:
        """
        Hitung dampak embargo terhadap perdagangan
        
        Args:
            ai_country: Negara AI
            target_country: Negara target
            embargo_type: Tipe embargo (ekonomi, teknologi, sumber_daya, senjata)
            game_state: State game
            
        Returns:
            Dict dengan dampak perdagangan
        """
        
        # Get trade volume between countries
        trade_volume = game_state.get("trade", {}).get(
            f"{ai_country}_{target_country}", 0
        )
        
        # Calculate impact based on embargo type
        impact_multiplier = {
            "ekonomi": 0.8,
            "teknologi": 0.5,
            "sumber_daya": 0.6,
            "senjata": 0.3,
        }.get(embargo_type, 0.5)
        
        revenue_loss = int(trade_volume * impact_multiplier)
        
        return {
            "trade_volume": trade_volume,
            "embargo_type": embargo_type,
            "revenue_loss": revenue_loss,
            "impact_percentage": impact_multiplier * 100,
        }
