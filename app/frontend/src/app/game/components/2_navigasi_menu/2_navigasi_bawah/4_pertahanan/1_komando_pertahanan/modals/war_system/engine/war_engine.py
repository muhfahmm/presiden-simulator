import sys
import json
import random
import math

"""
Strategic War AI (Python)
=========================
Handles high-level unit coordination, targeting, and behavior states.
Processes battlefield state and outputs unit instructions.
"""

class TacticalAI:
    def __init__(self, battlefield):
        self.battlefield = battlefield
        self.enemy_units = battlefield.get("enemyUnits", [])
        self.user_units = battlefield.get("userUnits", [])
        self.tiles = battlefield.get("tiles", [])
        self.grid_cols = battlefield.get("gridCols", 40)
        self.grid_rows = battlefield.get("gridRows", 30)

    def select_targets(self):
        """Strategic targeting logic."""
        instructions = []
        alive_user_units = [u for u in self.user_units if u.get("isAlive")]
        
        for unit in self.enemy_units:
            if not unit.get("isAlive"):
                continue
            
            # 1. Check for immediate threats (user units in range)
            target = self.find_priority_target(unit, alive_user_units)
            
            if target:
                instructions.append({
                    "unitId": unit["id"],
                    "action": "attack",
                    "targetId": target["id"],
                    "priority": 1
                })
            else:
                # 2. Strategic movement: recapture lost tiles
                target_tile = self.find_recapture_tile(unit)
                if target_tile:
                    instructions.append({
                        "unitId": unit["id"],
                        "action": "move",
                        "targetTile": {"x": target_tile["gridX"], "y": target_tile["gridY"]},
                        "priority": 2
                    })

        return instructions

    def find_priority_target(self, unit, candidates):
        if not candidates:
            return None
        
        # Priority: lowest HP unit in range, or closest
        in_range = [c for c in candidates if self.dist(unit, c) <= unit["stats"]["range"]]
        if in_range:
            return min(in_range, key=lambda x: x["stats"]["hp"])
        
        # If no one in range, find closest
        return min(candidates, key=lambda x: self.dist(unit, x))

    def find_recapture_tile(self, unit):
        """Find the nearest tile occupied by user to recapture."""
        best_tile = None
        min_dist = float('inf')
        
        for row in self.tiles:
            for tile in row:
                if tile.get("status") == "user":
                    d = self.dist_tile(unit, tile)
                    if d < min_dist:
                        min_dist = d
                        best_tile = tile
        return best_tile

    def dist(self, u1, u2):
        return math.sqrt((u1["gridX"] - u2["gridX"])**2 + (u1["gridY"] - u2["gridY"])**2)

    def dist_tile(self, u, t):
        return math.sqrt((u["gridX"] - t["gridX"])**2 + (u["gridY"] - t["gridY"])**2)

def main():
    try:
        input_data = sys.stdin.read()
        if not input_data:
            print(json.dumps({"error": "No input"}))
            return
            
        battlefield = json.loads(input_data)
        ai = TacticalAI(battlefield)
        instructions = ai.select_targets()
        
        print(json.dumps({
            "status": "success",
            "instructions": instructions
        }))
    except Exception as e:
        print(json.dumps({"error": str(e)}))

if __name__ == "__main__":
    main()
