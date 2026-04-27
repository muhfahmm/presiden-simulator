import random

class VoterLogic:
    def __init__(self, country_data):
        self.country = country_data
        self.name = country_data['name']
        self.ideology = country_data['ideology']
        self.alignment = country_data['alignment']
        self.tendency = country_data['tendency']

    def decide_vote(self, resolution):
        """
        Logic for deciding a vote: Setuju, Tolak, or Abstain.
        resolution: { "id": 1, "theme": "Military", "proposer": "Player", "description": "..." }
        """
        # 0. Check for Special Resolution Logic (e.g. Larangan Perang)
        try:
            from larangan_perang import apply_larangan_perang_logic
            special_vote = apply_larangan_perang_logic(self.country, resolution)
            if special_vote:
                return special_vote
        except Exception as e:
            pass # Fallback to standard logic if special fails
            
        score = 0
        
        # 1. Alignment with proposer
        proposer = resolution.get('proposer', 'Global')
        alignment_score = self.alignment.get(proposer, 50)
        score += (alignment_score - 50) * 0.5
        
        # 2. Theme vs Priorities
        if resolution.get('theme') in self.country['priorities']:
            score += 20
            
        # 3. Ideology logic
        if self.ideology == "Demokrasi" and resolution.get('theme') == "Human Rights":
            score += 30
        elif self.ideology == "Otoriter" and resolution.get('theme') == "Human Rights":
            score -= 30
            
        # 4. Tendency logic
        if self.tendency == "Isolationist":
            # Isolationists tend to abstain or reject global intervention
            score -= 10
            
        # Random factor (Noise)
        score += random.randint(-15, 15)
        
        # Final Decision
        if score > 15:
            return "Setuju"
        elif score < -15:
            return "Tolak"
        else:
            return "Abstain"
