import sys
import json
from datetime import datetime

def generate_notification(event_type, target_country, extra_info=None):
    """
    Generate formal diplomatic notification content.
    """
    source = "Kementerian Luar Negeri"
    priority = "medium"
    subject = ""
    content = ""

    if event_type == "CONSTRUCTION_START":
        subject = f"Misi Diplomatik: Inisiasi Kedutaan di {target_country}"
        priority = "low"
        content = (
            f"Bapak Presiden, kami melaporkan bahwa tim arsitek dan diplomat kita telah tiba di {target_country}. "
            f"Proses pembangunan Kedutaan Besar Republik Indonesia telah resmi dimulai. "
            f"Langkah ini menandai awal dari penguatan pengaruh strategis kita di wilayah tersebut."
        )

    elif event_type == "CONSTRUCTION_FINISH":
        subject = f"RESMI: Kedutaan Besar di {target_country} Dibuka"
        priority = "medium"
        content = (
            f"Kabar gembira, Bapak Presiden. Pembangunan fasilitas diplomatik kita di {target_country} telah rampung. "
            f"Kedutaan Besar kini telah beroperasi penuh dan siap menjalankan tugas-tugas kenegaraan. "
            f"Hubungan bilateral kita dengan {target_country} kini memiliki fondasi yang kokoh."
        )

    elif event_type == "DESTRUCTION":
        subject = f"DARURAT: Pemutusan Hubungan Diplomatik ({target_country})"
        priority = "high"
        penalty = extra_info if extra_info else "signifikan"
        content = (
            f"Laporan mendesak, Bapak Presiden. Keputusan untuk menghancurkan Kedutaan Besar di {target_country} "
            f"telah memicu kemarahan diplomatik. Staf kita telah ditarik kembali ke tanah air. "
            f"Skor hubungan bilateral dengan {target_country} memburuk sebesar {penalty} poin. "
            f"Ketegangan regional diperkirakan akan meningkat dalam beberapa hari ke depan."
        )

    return {
        "source": source,
        "subject": subject,
        "priority": priority,
        "content": content
    }

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print(json.dumps({"error": "Missing arguments"}))
        sys.exit(1)

    event_type = sys.argv[1]
    target_country = sys.argv[2]
    extra_info = sys.argv[3] if len(sys.argv) > 3 else None

    result = generate_notification(event_type, target_country, extra_info)
    print(json.dumps(result))
