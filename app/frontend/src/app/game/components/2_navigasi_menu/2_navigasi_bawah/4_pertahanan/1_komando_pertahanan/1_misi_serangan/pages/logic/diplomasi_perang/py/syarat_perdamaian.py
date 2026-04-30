# EVALUATOR SYARAT PERDAMAIAN (PYTHON)
# Menentukan tuntutan atau syarat yang diajukan musuh saat negosiasi damai.

import random

class PeaceTermsEvaluator:
    def __init__(self, target_country):
        self.target_country = target_country

    def generate_terms(self, victory_score):
        """
        Menghasilkan daftar syarat perdamaian berdasarkan dominasi pemain.
        victory_score: 0 - 100
        """
        terms = []
        
        if victory_score > 80:
            # Pemain menang telak
            terms = [
                f"Penyerahan kedaulatan militer {self.target_country} di bawah pengawasan kita.",
                f"Pembayaran reparasi perang sebesar 40% dari kas {self.target_country}.",
                f"Penyitaan aset teknologi pertahanan strategis milik {self.target_country}."
            ]
        elif victory_score > 50:
            # Pemain unggul
            terms = [
                f"Ganti rugi biaya operasional perang oleh {self.target_country}.",
                f"Pembentukan zona demiliterisasi (DMZ) di sepanjang perbatasan.",
                f"Pengakuan resmi atas supremasi pengaruh regional kita."
            ]
        else:
            # Perang berimbang / Stalemate
            terms = [
                f"Pengembalian status quo ante bellum (kembali ke kondisi sebelum perang).",
                f"Perjanjian non-agresi selama 10 tahun ke depan.",
                f"Pembukaan jalur perdagangan bebas antara kedua negara."
            ]
            
        return {
            "title": "Perjanjian Damai Permanen",
            "country": self.target_country,
            "terms": terms,
            "can_enforce": victory_score >= 50
        }

    def get_diplomatic_message(self, victory_score):
        if victory_score > 70:
            return f"Pemerintah {self.target_country} yang sedang terpojok memohon perdamaian dengan syarat apa pun."
        elif victory_score > 30:
            return f"Utusan {self.target_country} menawarkan jalan tengah untuk mengakhiri konflik ini."
        else:
            return f"{self.target_country} menuntut penghentian agresi segera dengan syarat-syarat yang berat."
