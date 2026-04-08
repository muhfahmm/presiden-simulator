"""
Data Processor - Memproses data dari game
"""

from typing import Dict, List, Optional
import logging

logger = logging.getLogger(__name__)


class DataProcessor:
    """Memproses data game untuk AI voting"""

    @staticmethod
    def extract_country_data(game_state: Dict, country_name: str) -> Dict:
        """
        Extract data negara dari game state
        
        Args:
            game_state: State game
            country_name: Nama negara
            
        Returns:
            Dict dengan data negara
        """
        
        countries = game_state.get("countries", {})
        country_data = countries.get(country_name, {})
        
        return {
            "name": country_name,
            "gdp": country_data.get("gdp", 0),
            "military_strength": country_data.get("military_strength", 0),
            "population": country_data.get("population", 0),
            "technology_level": country_data.get("technology_level", 0),
            "relationship_score": country_data.get("relationship_score", 0),
            "alliances": country_data.get("alliances", []),
            "resources": country_data.get("resources", {}),
        }

    @staticmethod
    def extract_relationships(game_state: Dict, country_name: str) -> Dict[str, int]:
        """
        Extract hubungan negara dengan negara lain
        
        Args:
            game_state: State game
            country_name: Nama negara
            
        Returns:
            Dict dengan hubungan (country_name -> score)
        """
        
        relationships = game_state.get("relationships", {})
        country_relationships = relationships.get(country_name, {})
        
        return country_relationships

    @staticmethod
    def extract_alliances(game_state: Dict, country_name: str) -> List[str]:
        """
        Extract aliansi negara
        
        Args:
            game_state: State game
            country_name: Nama negara
            
        Returns:
            List nama negara yang bealiansi
        """
        
        countries = game_state.get("countries", {})
        country_data = countries.get(country_name, {})
        
        return country_data.get("alliances", [])

    @staticmethod
    def extract_trade_data(game_state: Dict, country_name: str) -> Dict:
        """
        Extract data perdagangan negara
        
        Args:
            game_state: State game
            country_name: Nama negara
            
        Returns:
            Dict dengan data perdagangan
        """
        
        trade = game_state.get("trade", {})
        country_trade = {}
        
        for key, value in trade.items():
            if country_name in key:
                country_trade[key] = value
        
        return country_trade

    @staticmethod
    def calculate_country_strength(country_data: Dict) -> float:
        """
        Hitung kekuatan negara (0-100)
        
        Args:
            country_data: Data negara
            
        Returns:
            Score kekuatan
        """
        
        gdp_score = min(country_data.get("gdp", 0) / 1000, 30)
        military_score = min(country_data.get("military_strength", 0) / 100, 30)
        tech_score = min(country_data.get("technology_level", 0) / 10, 20)
        population_score = min(country_data.get("population", 0) / 100000000, 20)
        
        total_score = gdp_score + military_score + tech_score + population_score
        
        return min(total_score, 100)

    @staticmethod
    def normalize_score(score: float, min_val: float = -100, max_val: float = 100) -> float:
        """
        Normalize score ke range 0-1
        
        Args:
            score: Score asli
            min_val: Nilai minimum
            max_val: Nilai maksimum
            
        Returns:
            Score normalized (0-1)
        """
        
        normalized = (score - min_val) / (max_val - min_val)
        return max(0, min(1, normalized))

    @staticmethod
    def format_voting_result(result: Dict) -> Dict:
        """
        Format hasil voting untuk API response
        
        Args:
            result: Hasil voting
            
        Returns:
            Dict formatted
        """
        
        return {
            "country": result.get("country_name"),
            "decision": result.get("decision").value if hasattr(result.get("decision"), "value") else str(result.get("decision")),
            "confidence": round(result.get("confidence", 0), 2),
            "reasoning": result.get("reasoning"),
            "relationship_impact": result.get("relationship_impact"),
            "economic_impact": round(result.get("economic_impact", 0), 2),
            "strategic_impact": round(result.get("strategic_impact", 0), 2),
        }
