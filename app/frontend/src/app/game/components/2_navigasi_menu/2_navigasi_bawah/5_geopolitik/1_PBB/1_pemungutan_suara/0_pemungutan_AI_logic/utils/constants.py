"""
Constants untuk AI Voting Logic
"""

from enum import Enum

# Voting Decisions
class VotingDecision(Enum):
    SUPPORT = "support"
    ABSTAIN = "abstain"
    OPPOSE = "oppose"


# Proposal Types
class ProposalType(Enum):
    RESOLUTION = "resolution"
    SANCTION = "sanction"
    EMBARGO = "embargo"


# Relationship Status
class RelationshipStatus(Enum):
    VERY_GOOD = "very_good"
    GOOD = "good"
    NEUTRAL = "neutral"
    BAD = "bad"
    VERY_BAD = "very_bad"
    ENEMY = "enemy"


# AI Personalities
class AIPersonality(Enum):
    AGGRESSIVE = "aggressive"
    DIPLOMATIC = "diplomatic"
    NEUTRAL = "neutral"
    DEFENSIVE = "defensive"


# Embargo Types
class EmbargoType(Enum):
    EKONOMI = "ekonomi"
    TEKNOLOGI = "teknologi"
    SUMBER_DAYA = "sumber_daya"
    SENJATA = "senjata"


# Scoring Ranges
SCORE_MIN = -100
SCORE_MAX = 100
CONFIDENCE_MIN = 0.0
CONFIDENCE_MAX = 1.0

# Thresholds
SUPPORT_THRESHOLD = 0.6
OPPOSE_THRESHOLD = 0.4
ABSTAIN_THRESHOLD = 0.5
