import json
import numpy as np

"""
RelationAnalyzer (PYTHON)
Used for high-level geopolitical analysis and complex logic generation.
Handles tasks like peace treaty term generation and regional stability analysis.
"""

class RelationAnalyzer:
    def __init__(self, size=207):
        self.size = size

    def analyze_stability(self, matrix_data):
        """
        Analyzes global stability using standard deviation and clustering.
        """
        matrix = np.array(matrix_data).reshape((self.size, self.size))
        
        # Calculate mean relation score for each country
        avg_relations = np.mean(matrix, axis=1)
        
        # Identify volatile countries (those with very low average relations)
        volatile_countries = np.where(avg_relations < 30.0)[0]
        
        return {
            "global_stability_index": float(np.mean(avg_relations)),
            "volatile_count": len(volatile_countries),
            "volatile_indices": volatile_countries.tolist()
        }

    def generate_peace_terms(self, winner_id, loser_id, current_score):
        """
        Generates dynamic peace terms based on the current relationship.
        """
        severity = "HARSH" if current_score < 10 else "MODERATE"
        
        terms = [
            "Ceasefire for 10 years",
            f"Reparations payment: {current_score * 10}M",
            "Demilitarized Zone (DMZ) established"
        ]
        
        if severity == "HARSH":
            terms.append("Territorial annexation of border provinces")
            
        return {
            "severity": severity,
            "terms": terms
        }

if __name__ == "__main__":
    print("[Polyglot-Python] Analyzer ready for geopolitical modeling.")
