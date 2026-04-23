import random
import json
import os

class ResolutionGenerator:
    def __init__(self, data_path=None):
        if data_path is None:
            data_path = os.path.join(os.path.dirname(__file__), "../data_simulator/mock_countries_207.json")
        with open(data_path, 'r') as f:
            self.countries = json.load(f)
        
        self.themes = ["Military", "Economy", "Human Rights", "Environment", "Stability", "Technology"]
        self.templates = {
            "Military": ["Pengurangan Senjata Nuklir", "Latihan Militer Gabungan", "Gencatan Senjata Regional"],
            "Economy": ["Bantuan Ekonomi Berkembang", "Penghapusan Tarif Dagang", "Investasi Infrastruktur Global"],
            "Human Rights": ["Perlindungan Hak Pengungsi", "Investigasi Kejahatan War", "Program Kesetaraan Gender"],
            "Environment": ["Target Emisi Karbon Baru", "Dana Restorasi Hutan Tropis", "Larangan Sampah Plastik Laut"],
            "Stability": ["Misi Perdamaian di Wilayah Konflik", "Bantuan Bencana Alam Global", "Mediasi Krisis Diplomatik"],
            "Technology": ["Standarisasi AI Global", "Akses Internet untuk Semua", "Kerjasama Eksplorasi Luar Angkasa"]
        }

    def generate_random_resolution(self):
        proposer = random.choice(self.countries)
        theme = random.choice(self.themes)
        title = random.choice(self.templates[theme])
        
        return {
            "id": random.randint(1000, 9999),
            "title": f"[{proposer['name']}] {title}",
            "theme": theme,
            "proposer": proposer['name'],
            "proposer_iso": proposer.get('iso', 'UN'),
            "description": f"Resolusi ini diajukan oleh {proposer['name']} untuk membahas {title} demi kepentingan stabilitas global.",
            "status": "Aktif",
            "daysRemaining": 30
        }

if __name__ == "__main__":
    # Test generation
    gen = ResolutionGenerator()
    print(json.dumps(gen.generate_random_resolution(), indent=2))
