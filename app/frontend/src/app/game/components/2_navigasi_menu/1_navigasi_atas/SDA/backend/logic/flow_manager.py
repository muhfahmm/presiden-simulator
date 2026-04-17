import ctypes
import os
import numpy as np

class FlowManager:
    def __init__(self, lib_path=None):
        if lib_path is None:
            base_path = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
            lib_name = "flow_engine.so" if os.name != "nt" else "flow_engine.dll"
            lib_path = os.path.join(base_path, "engine_cpp", lib_name)
        
        self.lib_path = lib_path
        self.lib = None
        
    def _load_lib(self):
        if self.lib: return
        if not os.path.exists(self.lib_path):
            raise FileNotFoundError(f"C++ Flow Engine library not found at {self.lib_path}.")
        
        self.lib = ctypes.CDLL(self.lib_path)
        self.lib.calculate_flow_batch.argtypes = [
            ctypes.POINTER(ctypes.c_float), # production
            ctypes.POINTER(ctypes.c_float), # population
            ctypes.POINTER(ctypes.c_float), # consumption_ratios
            ctypes.POINTER(ctypes.c_float), # results_net
            ctypes.c_int,                  # country_count
            ctypes.c_int                   # commodity_count
        ]
        self.lib.calculate_flow_batch.restype = None

    def process_flow(self, countries_data, commodities):
        self._load_lib()
        
        country_names = list(countries_data.keys())
        commodity_names = list(commodities.keys())
        
        c_count = len(country_names)
        m_count = len(commodity_names)
        
        # Prepare arrays
        production = np.zeros(c_count * m_count, dtype=np.float32)
        population = np.zeros(c_count, dtype=np.float32)
        cons_ratios = np.array([commodities[m]["base_consumption"] for m in commodity_names], dtype=np.float32)
        results_net = np.zeros(c_count * m_count, dtype=np.float32)
        
        for i, c_name in enumerate(country_names):
            data = countries_data[c_name]
            population[i] = data.get("populasi", 50000000)
            for j, m_name in enumerate(commodity_names):
                # Look into sectoral data (sektor_ekstraksi etc)
                sector = commodities[m_name]["sector"]
                sector_data = data.get(sector, {})
                production[i * m_count + j] = sector_data.get(m_name, 0)

        # Call C++
        prod_ptr = production.ctypes.data_as(ctypes.POINTER(ctypes.c_float))
        pop_ptr = population.ctypes.data_as(ctypes.POINTER(ctypes.c_float))
        cons_ptr = cons_ratios.ctypes.data_as(ctypes.POINTER(ctypes.c_float))
        res_ptr = results_net.ctypes.data_as(ctypes.POINTER(ctypes.c_float))
        
        self.lib.calculate_flow_batch(prod_ptr, pop_ptr, cons_ptr, res_ptr, c_count, m_count)
        
        # Format results
        results = {}
        for i, c_name in enumerate(country_names):
            results[c_name] = {}
            for j, m_name in enumerate(commodity_names):
                net = results_net[i * m_count + j]
                results[c_name][m_name] = {
                    "net": float(round(net, 2)),
                    "status": "surplus" if net > 0 else "deficit"
                }
        return results
