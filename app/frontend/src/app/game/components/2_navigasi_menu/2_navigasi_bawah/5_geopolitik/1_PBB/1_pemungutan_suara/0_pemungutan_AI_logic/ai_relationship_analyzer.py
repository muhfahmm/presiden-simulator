"""
AI Relationship Analyzer - Menganalisis hubungan diplomatik
"""

from typing import Dict
import logging

from config import RELATIONSHIP_SCORES

logger = logging.getLogger(__name__)


class RelationshipAnalyzer:
    """Menganalisis hubungan diplomatik untuk voting"""

    def analyze(
        self,
        ai_country: str,
        target_country: str,
        relationship_score: int,
        proposal_type: str
    ) -> Dict:
        """
        Analisis hubungan diplomatik
        
        Args:
            ai_country: Negara AI
            target_country: Negara target
            relationship_score: Score hubungan (-100 to 100)
            proposal_type: Tipe proposal (resolution, sanction, embargo)
            
        Returns:
            Dict dengan hasil analisis
        """
        
        # Determine relationship status
        status = self._get_relationship_status(relationship_score)
        
        # Calculate impact
        impact = self._calculate_impact(status, proposal_type)
        
        # Predict reaction
        reaction = self._predict_reaction(status, proposal_type)
        
        analysis = {
            "ai_country": ai_country,
            "target_country": target_country,
            "relationship_score": relationship_score,
            "status": status,
            "impact": impact,
            "reaction": reaction,
            "voting_tendency": self._get_voting_tendency(status, proposal_type),
        }
        
        logger.debug(f"Relationship analysis: {analysis}")
        
        return analysis

    def _get_relationship_status(self, score: int) -> str:
        """
        Dapatkan status hubungan berdasarkan score
        
        Args:
            score: Relationship score (-100 to 100)
            
        Returns:
            Status string
        """
        if score >= 80:
            return "very_good"
        elif score >= 60:
            return "good"
        elif score >= 40:
            return "neutral"
        elif score >= 20:
            return "bad"
        elif score >= 0:
            return "very_bad"
        else:
            return "enemy"

    def _calculate_impact(self, status: str, proposal_type: str) -> Dict:
        """
        Hitung dampak proposal terhadap hubungan
        
        Args:
            status: Status hubungan
            proposal_type: Tipe proposal
            
        Returns:
            Dict dengan dampak
        """
        
        # Base impact berdasarkan proposal type
        base_impact = {
            "resolution": -30,
            "sanction": -50,
            "embargo": -50,
        }.get(proposal_type, -30)
        
        # Modifier berdasarkan status hubungan
        # Hubungan baik = dampak lebih besar
        # Hubungan buruk = dampak lebih kecil (sudah buruk)
        status_modifier = {
            "very_good": 1.5,
            "good": 1.2,
            "neutral": 1.0,
            "bad": 0.8,
            "very_bad": 0.5,
            "enemy": 0.3,
        }.get(status, 1.0)
        
        final_impact = int(base_impact * status_modifier)
        
        return {
            "base_impact": base_impact,
            "status_modifier": status_modifier,
            "final_impact": final_impact,
        }

    def _predict_reaction(self, status: str, proposal_type: str) -> str:
        """
        Prediksi reaksi negara target
        
        Args:
            status: Status hubungan
            proposal_type: Tipe proposal
            
        Returns:
            Prediksi reaksi
        """
        
        if proposal_type == "resolution":
            if status in ["very_good", "good"]:
                return "Akan mendukung"
            elif status == "neutral":
                return "Akan abstain"
            else:
                return "Akan menolak"
        
        elif proposal_type in ["sanction", "embargo"]:
            if status in ["very_good", "good"]:
                return "Akan marah dan mengurangi hubungan"
            elif status == "neutral":
                return "Akan mempertimbangkan"
            else:
                return "Akan menolak dengan keras"
        
        return "Tidak dapat diprediksi"

    def _get_voting_tendency(self, status: str, proposal_type: str) -> str:
        """
        Dapatkan kecenderungan voting
        
        Args:
            status: Status hubungan
            proposal_type: Tipe proposal
            
        Returns:
            Kecenderungan voting (support, abstain, oppose)
        """
        
        if proposal_type == "resolution":
            if status in ["very_good", "good"]:
                return "support"
            elif status == "neutral":
                return "abstain"
            else:
                return "oppose"
        
        elif proposal_type in ["sanction", "embargo"]:
            # Jika target adalah negara yang hubungannya baik, akan menolak
            if status in ["very_good", "good"]:
                return "oppose"
            elif status == "neutral":
                return "abstain"
            else:
                return "support"
        
        return "abstain"

    def calculate_relationship_change(
        self,
        current_score: int,
        proposal_type: str,
        voted_for: bool
    ) -> int:
        """
        Hitung perubahan hubungan berdasarkan voting
        
        Args:
            current_score: Score hubungan saat ini
            proposal_type: Tipe proposal
            voted_for: Apakah voting mendukung proposal
            
        Returns:
            Perubahan score
        """
        
        # Jika voting mendukung proposal yang merugikan target
        if voted_for and proposal_type in ["sanction", "embargo"]:
            return -50
        
        # Jika voting menolak proposal yang menguntungkan target
        if not voted_for and proposal_type == "resolution":
            return -30
        
        return 0
