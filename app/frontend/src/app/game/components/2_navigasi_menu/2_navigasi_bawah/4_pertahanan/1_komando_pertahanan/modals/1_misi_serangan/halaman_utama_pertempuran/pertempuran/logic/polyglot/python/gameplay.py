# gameplay.py - Global Strategic Node Evaluator
# Exposed via REST / gRPC to feed off-screen reinforcements into TSX

class StrategicMind:
    def __init__(self):
        self.global_awareness_matrix = []

    def evaluate_offscreen_deployment(self, current_combat_zone, visible_units, total_units):
        """
        Spatial Awareness AI Component.
        The camera viewport only sees a small slice of the territory.
        This AI evaluates grid pressure and dispatches enemies from the 'Fog of War' (black edges).
        """
        reinforcements = []
        
        # Simulated analysis of off-screen flanking
        enemy_count_onscreen = len([u for u in visible_units if u['side'] == 'enemy'])
        enemy_count_total = len([u for u in total_units if u['side'] == 'enemy'])
        
        if enemy_count_onscreen < (enemy_count_total * 0.3):
           print("AI: User is pushing hard. Dispatching off-screen units to flank positions!")
           # Reinforce from beyond Top Left bounds
           reinforcements.append({ 'type': 'tank', 'pos': {'x': current_combat_zone['startX'] - 500, 'y': current_combat_zone['startY']} })
           
        return reinforcements

ai_engine = StrategicMind()
