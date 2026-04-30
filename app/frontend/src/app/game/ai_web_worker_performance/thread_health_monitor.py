import time

"""
ThreadHealthMonitor (PYTHON)
Analyzes the performance and health of the AI background threads.
Detects bottlenecks and provides recommendations for worker scaling.
"""

class ThreadHealthMonitor:
    def __init__(self):
        self.history = []

    def log_cycle_time(self, worker_id, time_ms):
        """
        Logs the time taken by a worker to complete one AI tick.
        Target: < 16ms (60FPS equivalent).
        """
        self.history.append({
            "worker": worker_id,
            "time": time_ms,
            "timestamp": time.time()
        })
        
        if time_ms > 50:
            print(f"[AI-Python] WARNING: Worker {worker_id} is lagging ({time_ms}ms)!")

    def detect_bottlenecks(self):
        """
        Analyzes the last 100 cycles to find persistent bottlenecks.
        """
        if not self.history:
            return "NO_DATA"
            
        avg_time = sum(h['time'] for h in self.history[-100:]) / min(len(self.history), 100)
        
        if avg_time > 16:
            return "CPU_CONGESTION"
        return "OPTIMAL"

if __name__ == "__main__":
    print("[AI-Python] Thread Health Monitor active.")
