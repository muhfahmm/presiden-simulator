import random

def get_alasan_abstain(country_name, proposer, target, relation_proposer, relation_target):
    reasons = [
        f"Memilih posisi netral untuk menjaga hubungan baik dengan {proposer} dan {target}.",
        f"Tidak ingin terlibat dalam ketegangan geopolitik antar kekuatan besar.",
        f"Memerlukan waktu lebih untuk melakukan peninjauan mendalam terhadap dampak resolusi.",
        f"Menganggap masalah ini sebagai urusan internal yang harus diselesaikan lewat dialog.",
        f"Menilai bahwa data yang diajukan {proposer} belum cukup kuat untuk mengambil keputusan.",
        f"Menjaga prinsip politik luar negeri yang bebas dan aktif."
    ]
    
    # Logic-based selection (Dilema Adu Domba)
    if relation_proposer > 60 and relation_target > 60:
        return reasons[0]
        
    return random.choice(reasons)
