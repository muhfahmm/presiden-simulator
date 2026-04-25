import sys
import json

class PembangunanAI:
    def __init__(self, data):
        self.data = data
        self.budget = data.get("budget", 0)
        self.pop = data.get("pop", 0)
        self.buildings = data.get("buildings", {})
        self.stocks = data.get("stocks", {})
        self.options = data.get("options", [])

    def think(self):
        # 1. ANALISIS RANTAI PASOK (Prioritas Utama)
        # Jika stok semen atau baja sangat rendah, AI harus membangun pabriknya dulu
        if self.stocks.get("5_pabrik_semen", 0) < 1000:
            return self.create_decision("5_pabrik_semen", "Krisis Material: Memperkuat produksi semen untuk pembangunan masa depan.")
        
        if self.stocks.get("4_smelter", 0) < 500:
            return self.create_decision("4_smelter", "Krisis Material: Membangun Smelter untuk suplai baja.")

        # 2. ANALISIS HUNIAN (Prioritas Kedua)
        # Hitung kapasitas hunian vs populasi
        total_capacity = (self.buildings.get("rumah_subsidi", 0) * 5) + \
                         (self.buildings.get("apartemen", 0) * 6000) + \
                         (self.buildings.get("mansion", 0) * 10)
        
        if total_capacity < self.pop:
            shortage_ratio = (self.pop - total_capacity) / self.pop
            if shortage_ratio > 0.1: # Lebih dari 10% rakyat tidak punya rumah
                return self.create_decision("apartemen", "Krisis Hunian: Membangun apartemen massal untuk rakyat.")

        # 3. ANALISIS PRODUKSI (Prioritas Ketiga - Ekonomi)
        # Pilih sektor yang paling memberikan profit (simulasi: random industri)
        industries = [o for o in self.options if o.get("groupId") in ["manufaktur", "ekstraksi"]]
        if industries:
            chosen = industries[0] # Ambil yang pertama untuk efisiensi
            return self.create_decision(chosen["key"], f"Ekspansi Ekonomi: Meningkatkan kapasitas {chosen['label']}.")

        return {"decision": "SKIP", "reason": "Kondisi pembangunan saat ini sudah optimal."}

    def create_decision(self, key, reason):
        option = next((o for o in self.options if o["key"] == key), None)
        if not option or option.get("biaya_pembangunan", 999999999) > self.budget:
            return {"decision": "SKIP", "reason": f"Ingin membangun {key} tapi dana/data tidak cukup."}
        
        # Tentukan kuantitas (batching cerdas)
        qty = 1
        if self.budget > option["biaya_pembangunan"] * 10:
            qty = 5 if "pabrik" in key else 2 # Pabrik lebih banyak, apartemen secukupnya
            
        return {
            "decision": "EXECUTE",
            "building_key": key,
            "quantity": qty,
            "cost": option["biaya_pembangunan"] * qty,
            "reason": reason
        }

def main():
    try:
        data = json.load(sys.stdin)
        ai = PembangunanAI(data)
        print(json.dumps(ai.think()))
    except Exception as e:
        print(json.dumps({"decision": "SKIP", "error": str(e)}))

if __name__ == "__main__":
    main()
