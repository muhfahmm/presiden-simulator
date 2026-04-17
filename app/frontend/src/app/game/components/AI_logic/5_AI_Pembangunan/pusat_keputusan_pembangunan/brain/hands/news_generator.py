import random

class NewsGenerator:
    """
    Generates dynamic and dramatic news narrations for AI construction.
    """
    def __init__(self, labels):
        self.labels = labels

    def generate_narration(self, country_id, label, quantity, total_cost, is_crisis):
        templates = [
            "Pemerintah {country} mengumumkan inisiasi proyek {label} sebanyak {qty} unit. Langkah ini diambil guna memperkuat daya dukung infrastruktur nasional.",
            "Dalam pidato kenegaraan terbaru, pemimpin {country} mengonfirmasi pembangunan {qty} proyek {label}. Sektor ini diprediksi akan menjadi tulang punggung kemajuan publik.",
            "Otoritas pembangunan di {country} merilis detail proyek {label} baru. Sebanyak {qty} unit akan segera dikerjakan dengan total nilai investasi mencapai {cost:,.0f} EM."
        ]
        
        crisis_templates = [
            "Merespons krisis yang sedang berlangsung, {country} melakukan percepatan pembangunan {qty} unit {label} demi menjamin kesejahteraan rakyat.",
            "Tindakan darurat: {country} mengalokasikan dana besar untuk menyelesaikan {qty} proyek {label} guna menstabilkan kondisi domestik.",
            "Di tengah tekanan populasi, {country} mengambil langkah berani dengan membangun {qty} unit {label} secara serentak."
        ]

        pool = crisis_templates if is_crisis else templates
        template = random.choice(pool)
        
        return template.format(
            country=country_id,
            label=label,
            qty=quantity,
            cost=total_cost
        )
