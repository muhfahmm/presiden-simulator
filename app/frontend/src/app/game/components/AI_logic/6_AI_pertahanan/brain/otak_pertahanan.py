import sys
import json

class PertahananAI:
    def __init__(self, data):
        self.data = data
        self.budget = data.get("budget", 0)
        self.threat = data.get("threat_level", 0)
        self.crime = data.get("crime_rate", 0)
        self.options = data.get("options", [])

    def think(self):
        # 1. ANALISIS KEAMANAN INTERNAL (Polisi)
        # Jika tingkat kejahatan tinggi, fokus ke Polisi dulu
        if self.crime > 30:
            polisi_options = [o for o in self.options if o.get("groupId") == "polisi"]
            if polisi_options:
                return self.create_decision(polisi_options[0]["key"], "Stabilitas Internal: Memperkuat armada polisi untuk menekan angka kriminalitas.")

        # 2. ANALISIS ANCAMAN EKSTERNAL (Militer)
        if self.threat > 50:
            # Cari unit tempur terkuat yang bisa dibeli
            militer_options = [o for o in self.options if o.get("groupId") in ["darat", "laut", "udara"]]
            if militer_options:
                # Pilih yang paling mahal (terkuat) tapi masih masuk budget
                affordable = [o for o in militer_options if o.get("cost", 999999999) <= self.budget]
                if affordable:
                    chosen = max(affordable, key=lambda x: x.get("cost", 0))
                    return self.create_decision(chosen["key"], f"Kesiagaan Tempur: Membeli {chosen['label']} karena ancaman eksternal meningkat.")

        # 3. ANALISIS INTELIJEN (Manajemen)
        # Jika semua aman, investasikan ke intelijen
        intel_options = [o for o in self.options if o.get("groupId") == "intelijen"]
        if intel_options and self.budget > 1000000:
            return self.create_decision(intel_options[0]["key"], "Strategi Jangka Panjang: Meningkatkan kemampuan intelijen negara.")

        return {"decision": "SKIP", "reason": "Kondisi pertahanan saat ini stabil."}

    def create_decision(self, key, reason):
        option = next((o for o in self.options if o["key"] == key), None)
        if not option: return {"decision": "SKIP", "reason": "Opsi unit tidak ditemukan."}
        
        cost = option.get("cost") or option.get("biaya_pembangunan") or 0
        if cost > self.budget:
            return {"decision": "SKIP", "reason": f"Dana tidak cukup untuk {key}."}

        return {
            "decision": "EXECUTE",
            "unit_key": key,
            "quantity": 1,
            "cost": cost,
            "reason": reason
        }

def main():
    try:
        data = json.load(sys.stdin)
        ai = PertahananAI(data)
        print(json.dumps(ai.think()))
    except Exception as e:
        print(json.dumps({"decision": "SKIP", "error": str(e)}))

if __name__ == "__main__":
    main()
