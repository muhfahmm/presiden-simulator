import random

def get_alasan_setelah_suap(country_name, proposer, target_side="supporters"):
    """
    country_name: Negara yang disuap
    proposer: Negara yang melakukan lobi (briber)
    target_side: 'supporters' atau 'opponents'
    """
    if target_side == "supporters":
        reasons = [
            f"Menerima paket bantuan ekonomi strategis dari {proposer}.",
            f"Menandatangani nota kesepahaman (MoU) investasi infrastruktur baru dengan {proposer}.",
            f"Mendapatkan insentif perdagangan bilateral yang menguntungkan dari blok {proposer}.",
            f"Menjalin kemitraan energi jangka panjang dengan pihak pengusul ({proposer}).",
            f"Mendukung resolusi demi stabilitas ekonomi nasional yang dijamin oleh {proposer}."
        ]
    else:
        reasons = [
            f"Menerima jaminan perlindungan diplomatik dari {proposer} untuk menentang resolusi.",
            f"Menyepakati aliansi pertahanan baru dengan {proposer} sebagai imbalan penolakan.",
            f"Mendapatkan keringanan utang luar negeri dari konsorsium yang dipimpin {proposer}.",
            f"Tergiur oleh tawaran teknologi militer canggih dari {proposer} untuk menjaga kedaulatan.",
            f"Memutuskan untuk menjaga solidaritas regional bersama {proposer} dengan menolak usulan ini."
        ]
        
    return random.choice(reasons)
