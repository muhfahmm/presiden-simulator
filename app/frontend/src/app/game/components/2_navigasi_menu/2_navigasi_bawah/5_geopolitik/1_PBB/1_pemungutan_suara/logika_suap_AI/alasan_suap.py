import random

def get_alasan_setelah_suap(country_name, proposer):
    reasons = [
        f"Menerima paket bantuan ekonomi strategis dari {proposer}.",
        f"Menandatangani nota kesepahaman (MoU) investasi infrastruktur baru.",
        f"Mendapatkan insentif perdagangan bilateral yang menguntungkan.",
        f"Menjalin kemitraan energi jangka panjang dengan pihak pengusul.",
        f"Mendukung resolusi demi stabilitas ekonomi nasional yang dijanjikan."
    ]
    return random.choice(reasons)
