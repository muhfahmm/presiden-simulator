import ctypes
import os
import numpy as np

class DriftManager:
    def __init__(self, lib_path=None):
        if lib_path is None:
            # Default to the same directory
            base_path = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
            lib_name = "drift_engine.so" if os.name != "nt" else "drift_engine.dll"
            lib_path = os.path.join(base_path, "engine_cpp", lib_name)
        
        self.lib_path = lib_path
        self.lib = None
        
    def _load_lib(self):
        if self.lib: return
        if not os.path.exists(self.lib_path):
            raise FileNotFoundError(f"C++ Engine library not found at {self.lib_path}. Please compile it first.")
        
        self.lib = ctypes.CDLL(self.lib_path)
        self.lib.calculate_drift_batch.argtypes = [
            ctypes.POINTER(ctypes.c_float), # scores
            ctypes.POINTER(ctypes.c_int),   # statuses
            ctypes.c_int,                  # count
            ctypes.c_float                 # user_drift_factor
        ]
        self.lib.calculate_drift_batch.restype = None

    def process_matrix(self, matrix_data, user_country="indonesia"):
        self._load_lib()
        
        # 1. Convert sparse matrix to dense arrays for C++
        countries = list(matrix_data.keys())
        country_to_idx = {c: i for i, c in enumerate(countries)}
        count = len(countries)
        
        # Initialize flat arrays
        scores = np.zeros(count * count, dtype=np.float32)
        statuses = np.zeros(count * count * 4, dtype=np.int32)
        
        for source, targets in matrix_data.items():
            s_idx = country_to_idx[source]
            for target, data in targets.items():
                if target not in country_to_idx: continue
                t_idx = country_to_idx[target]
                
                base_idx = s_idx * count + t_idx
                scores[base_idx] = data.get("s", 50.0)
                
                statuses[base_idx * 4 + 0] = data.get("e", 0) # embassy
                statuses[base_idx * 4 + 1] = data.get("p", 0) # pact
                statuses[base_idx * 4 + 2] = data.get("a", 0) # alliance
                statuses[base_idx * 4 + 3] = data.get("t", 0) # trade
        
        # 2. Call C++ Engine
        scores_ptr = scores.ctypes.data_as(ctypes.POINTER(ctypes.c_float))
        statuses_ptr = statuses.ctypes.data_as(ctypes.POINTER(ctypes.c_int))
        
        self.lib.calculate_drift_batch(scores_ptr, statuses_ptr, count, 1.0)
        
        # 3. Reconstruct sparse matrix
        updated_matrix = {}
        for i, source in enumerate(countries):
            updated_matrix[source] = {}
            for j, target in enumerate(countries):
                if i == j: continue
                
                idx = i * count + j
                # Small optimization: only store significant relations in the sparse output
                score = scores[idx]
                e, p, a, t = statuses[idx * 4 : idx * 4 + 4]
                
                is_user = source == user_country or target == user_country
                is_significant = score < 35 or score > 65 or e or p or a or t
                
                if is_user or is_significant:
                    updated_matrix[source][target] = {
                        "s": float(round(score, 4)),
                        "e": int(e), "p": int(p), "a": int(a), "t": int(t)
                    }
        
        return updated_matrix
