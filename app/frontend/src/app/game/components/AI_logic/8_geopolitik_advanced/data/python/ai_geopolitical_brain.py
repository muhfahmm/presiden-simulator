import os
import importlib.util
import sys
import random

try:
    from .countries_data import COUNTRIES
    from .initial_relations import RELATIONS
    from .organizations_data import ORGANIZATIONS
except ImportError:
    # Fallback for direct execution
    sys.path.append(os.path.dirname(__file__))
    from countries_data import COUNTRIES
    from initial_relations import RELATIONS
    from organizations_data import ORGANIZATIONS

class GeopoliticalLogic:
    def __init__(self):
        self.modules = []
        self.base_path = os.path.dirname(__file__)
        self._load_modules()

    def _load_modules(self):
        """Dynamically load all .py logic files from aliansi and konflik folders (including subfolders)."""
        self.conflict_pairs = []
        for subfolder in ["aliansi", "konflik"]:
            root_path = os.path.join(self.base_path, subfolder)
            if not os.path.exists(root_path): continue
            
            for root, dirs, files in os.walk(root_path):
                for filename in files:
                    if filename.endswith(".py") and not filename.startswith("__") and filename != "konfigurasi.py":
                        # Create a unique module name based on path
                        rel_dir = os.path.relpath(root, self.base_path).replace(os.sep, "_")
                        module_name = f"{rel_dir}_{filename[:-3]}"
                        file_path = os.path.join(root, filename)
                        
                        try:
                            spec = importlib.util.spec_from_file_location(module_name, file_path)
                            module = importlib.util.module_from_spec(spec)
                            spec.loader.exec_module(module)
                            self.modules.append(module)
                            
                            # Collect participants for generic logic
                            if hasattr(module, 'PARTICIPANTS'):
                                self.conflict_pairs.append(set(module.PARTICIPANTS))
                        except Exception as e:
                            print(f"Error loading module {filename} from {root}: {e}")
        
        print(f"Total Geopolitical modules loaded: {len(self.modules)}")

    def calculate_relation_shift(self, country_a, country_b, current_rel):
        shift = 0
        set_nama = {country_a['name'], country_b['name']}
        
        # Check if this pair is in a predefined conflict
        is_rival = False
        for pair in self.conflict_pairs:
            if pair.issubset(set_nama):
                is_rival = True
                break

        # 1. Apply Logic from Modular Subfolders
        for module in self.modules:
            if hasattr(module, 'apply_logic'):
                # Pass is_rival to generic logic modules
                shift += module.apply_logic(country_a, country_b, current_rel, ORGANIZATIONS, is_rival=is_rival)
        
        # 2. Base Ideological Friction (Always Active)
        if country_a['ideology'] != country_b['ideology']:
            # Democracy vs Autocracy friction
            if "Demokrasi" in country_a['ideology'] and ("Komunis" in country_b['ideology'] or "Monarki" in country_b['ideology']):
                shift -= 2
        
        # 3. Small Random Fluctuations
        shift += random.randint(-1, 1)

        return shift

    def export_state(self):
        """Export the current state (countries + relations) as a dictionary."""
        return {
            "countries": COUNTRIES,
            "relations": RELATIONS,
            "matrix_size": len(COUNTRIES)
        }

    def process_turn(self, all_countries, current_matrix):
        n = len(all_countries)
        new_matrix = list(current_matrix)
        
        print(f"Python AI Brain processing turn with {len(self.modules)} modules...")
        for i in range(n):
            for j in range(n):
                if i == j: continue
                idx = i * n + j
                change = self.calculate_relation_shift(all_countries[i], all_countries[j], new_matrix[idx])
                new_matrix[idx] = max(-100, min(100, new_matrix[idx] + change))
        
        return new_matrix

if __name__ == "__main__":
    import json
    import argparse

    parser = argparse.ArgumentParser()
    parser.add_argument("--export", action="store_true", help="Export initial state as JSON")
    args = parser.parse_args()

    if args.export:
        brain = GeopoliticalLogic()
        print(json.dumps(brain.export_state()))
    else:
        brain = GeopoliticalLogic()
        print("Geopolitical Engine Ready.")
