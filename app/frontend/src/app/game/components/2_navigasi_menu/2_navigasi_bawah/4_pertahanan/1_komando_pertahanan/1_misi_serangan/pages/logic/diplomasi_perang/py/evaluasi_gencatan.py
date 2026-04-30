# EVALUATOR DIPLOMASI PERANG (PYTHON)
# Mengambil keputusan apakah musuh akan menawarkan gencatan senjata.

import random

class CeasefireEvaluator:
    def __init__(self, target_country):
        self.target_country = target_country

    def should_enemy_offer_ceasefire(self, enemy_casualties, player_casualties, war_days):
        """
        Logika untuk menentukan apakah negara lawan ingin menghentikan perang sementara.
        """
        reasons = []
        
        # Kriteria 1: Korban terlalu besar (Humanitarian Pressure)
        if enemy_casualties > 5000:
            reasons.append(f"Tekanan publik di {self.target_country} meningkat akibat tingginya korban jiwa.")
            
        # Kriteria 2: Perang terlalu lama (Economic Strain)
        if war_days > 7:
            reasons.append(f"Ekonomi {self.target_country} mulai goyah akibat embargo dan biaya perang.")
            
        # Kriteria 3: Kehilangan momentum
        if enemy_casualties > player_casualties * 2:
            reasons.append(f"Militer {self.target_country} kehilangan kepercayaan diri setelah kekalahan beruntun.")

        if len(reasons) >= 2:
            return {
                "offer": True,
                "message": f"Pemerintah {self.target_country} mengirimkan utusan diplomatik untuk merundingkan gencatan senjata sementara.",
                "reasons": reasons
            }
        
        return {"offer": False}

    def generate_ceasefire_narration(self, initiator="player"):
        if initiator == "player":
            return [
                "Utusan diplomatik kita telah menyeberangi garis depan untuk menyampaikan tawaran damai.",
                "Pemerintah kita mengusulkan penghentian tembak-menembak untuk evakuasi warga sipil.",
                "Permintaan gencatan senjata sedang diproses oleh markas besar lawan."
            ]
        else:
            return [
                "Lawan mengibarkan bendera putih di beberapa sektor untuk memulai negosiasi.",
                "Pemerintah lawan mengusulkan gencatan senjata selama 48 jam.",
                "Utusan musuh menawarkan pertukaran tawanan sebagai syarat perdamaian."
            ]

# Contoh penggunaan
if __name__ == "__main__":
    evaluator = CeasefireEvaluator("Singapura")
    result = evaluator.should_enemy_offer_ceasefire(6000, 2000, 10)
    if result["offer"]:
        print(f"STATUS: {result['message']}")
        for r in result["reasons"]:
            print(f"- {r}")
