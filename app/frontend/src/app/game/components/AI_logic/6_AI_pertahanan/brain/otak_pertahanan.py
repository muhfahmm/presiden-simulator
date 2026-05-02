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
        if intel_options and self.budget > 1000000 and self.threat < 30:
            return self.create_decision(intel_options[0]["key"], "Strategi Jangka Panjang: Meningkatkan kemampuan intelijen negara.")

        # 4. ANALISIS STRATEGIS NUKLIR (High Budget & Strategic Priority)
        # AI hanya membangun nuklir jika budget melimpah (buffer > 2.5x biaya)
        # dan kondisi ekonomi negara stabil (budget > 125M)
        if self.budget > 125000000:
            nuklir_options = [o for o in self.options if o.get("groupId") == "nuklir"]
            if nuklir_options:
                # Prioritas 1: Program Nuklir (Fasilitas Dasar)
                program = next((o for o in nuklir_options if o["key"] == "program_nuklir"), None)
                current_nuklir = self.data.get("military", {}).get("program_nuklir", 0)
                
                if program and current_nuklir == 0 and self.budget >= (program.get("cost", 50000000) * 2.5):
                    return self.create_decision("program_nuklir", "Ambisi Strategis: Memulai program nuklir nasional. Negara memiliki cadangan devisa yang sangat kuat untuk mendukung proyek jangka panjang ini.")
                
                # Prioritas 2: ICBM (Hanya jika sudah memiliki fasilitas nuklir)
                if current_nuklir > 0:
                    icbm = next((o for o in nuklir_options if o["key"] == "misil_nuklir"), None)
                    current_icbm = self.data.get("military", {}).get("misil_nuklir", 0)
                    # AI akan membangun ICBM jika merasa terancam atau ingin mendominasi
                    if icbm and current_icbm < 12 and self.budget >= (icbm.get("cost", 25000000) * 2):
                        return self.create_decision("misil_nuklir", f"Deterrensi Nuklir: Menambah unit ICBM (Unit ke-{current_icbm + 1}). Memperkuat payung nuklir nasional sebagai respons terhadap dinamika keamanan global.")

        return {"decision": "SKIP", "reason": "Kondisi pertahanan saat ini stabil dan anggaran diprioritaskan untuk pemeliharaan rutin."}

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
