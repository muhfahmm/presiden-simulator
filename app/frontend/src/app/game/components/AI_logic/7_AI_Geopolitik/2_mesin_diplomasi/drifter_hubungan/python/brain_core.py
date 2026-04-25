import sys
import json

class GeopolitikAI:
    def __init__(self, data):
        self.data = data
        self.budget = data.get("budget", 0)
        self.influence = data.get("global_influence", 50)
        self.options = data.get("options", [])

    def think(self):
        # 1. ANALISIS PENGARUH GLOBAL (PBB)
        # Jika pengaruh global rendah, prioritaskan PBB
        if self.influence < 40:
            pbb_options = [o for o in self.options if "pbb" in o.get("key", "").lower()]
            if pbb_options:
                return self.create_decision(pbb_options[0]["key"], "Diplomasi Global: Meningkatkan partisipasi di PBB untuk mendongkrak wibawa internasional.")

        # 2. ANALISIS REGIONAL
        # Jika pengaruh sudah cukup, perkuat aliansi regional (tetangga)
        regional_options = [o for o in self.options if "regional" in o.get("key", "").lower()]
        if regional_options:
            return self.create_decision(regional_options[0]["key"], "Stabilitas Kawasan: Memperkuat kerjasama regional untuk keamanan perbatasan.")

        # 3. LOBBYING & BANTUAN
        # Jika budget melimpah, berikan bantuan internasional
        if self.budget > 5000000:
            return {"decision": "EXECUTE_AID", "amount": self.budget * 0.1, "reason": "Filantropi Global: Memberikan bantuan kemanusiaan untuk meningkatkan citra negara."}

        return {"decision": "SKIP", "reason": "Posisi geopolitik saat ini sudah cukup kuat."}

    def create_decision(self, key, reason):
        option = next((o for o in self.options if o["key"] == key), None)
        if not option: return {"decision": "SKIP", "reason": "Opsi diplomasi tidak ditemukan."}
        
        cost = option.get("cost") or option.get("biaya_pembangunan") or 1000000
        if cost > self.budget:
            return {"decision": "SKIP", "reason": "Budget diplomasi tidak mencukupi."}

        return {
            "decision": "EXECUTE",
            "action_key": key,
            "cost": cost,
            "reason": reason
        }

def main():
    try:
        data = json.load(sys.stdin)
        ai = GeopolitikAI(data)
        print(json.dumps(ai.think()))
    except Exception as e:
        print(json.dumps({"decision": "SKIP", "error": str(e)}))

if __name__ == "__main__":
    main()
