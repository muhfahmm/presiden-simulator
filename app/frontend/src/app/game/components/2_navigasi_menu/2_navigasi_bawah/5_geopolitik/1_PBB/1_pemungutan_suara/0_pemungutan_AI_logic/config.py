"""
Configuration untuk AI Voting Logic
"""

import os
from dotenv import load_dotenv

load_dotenv()

# Environment
DEBUG = os.getenv("DEBUG", "False").lower() == "true"
ENVIRONMENT = os.getenv("ENVIRONMENT", "development")

# AI Configuration
AI_CONFIG = {
    "voting_threshold": 0.5,  # Threshold untuk voting (0-1)
    "relationship_weight": 0.3,  # Bobot hubungan diplomatik
    "economic_weight": 0.25,  # Bobot dampak ekonomi
    "strategic_weight": 0.25,  # Bobot dampak strategis
    "alliance_weight": 0.2,  # Bobot aliansi
}

# Relationship Scoring
RELATIONSHIP_SCORES = {
    "very_good": 80,      # Sangat Baik
    "good": 60,           # Baik
    "neutral": 40,        # Netral
    "bad": 20,            # Buruk
    "very_bad": 0,        # Sangat Buruk
    "enemy": -100,        # Musuh
}

# Voting Penalties
VOTING_PENALTIES = {
    "sanction": -50,      # Penurunan hubungan untuk Sanksi
    "embargo": -50,       # Penurunan hubungan untuk Embargo
    "resolution": -30,    # Penurunan hubungan untuk Resolusi
}

# AI Personality Types
AI_PERSONALITIES = {
    "aggressive": {
        "voting_bias": 0.7,
        "relationship_sensitivity": 0.5,
        "alliance_loyalty": 0.6,
    },
    "diplomatic": {
        "voting_bias": 0.5,
        "relationship_sensitivity": 0.8,
        "alliance_loyalty": 0.8,
    },
    "neutral": {
        "voting_bias": 0.5,
        "relationship_sensitivity": 0.5,
        "alliance_loyalty": 0.5,
    },
    "defensive": {
        "voting_bias": 0.4,
        "relationship_sensitivity": 0.7,
        "alliance_loyalty": 0.7,
    },
}

# Logging
LOG_LEVEL = os.getenv("LOG_LEVEL", "INFO")
LOG_FILE = os.getenv("LOG_FILE", "ai_voting.log")

# API Configuration
API_BASE_URL = os.getenv("API_BASE_URL", "http://localhost:4000")
API_TIMEOUT = int(os.getenv("API_TIMEOUT", "30"))
