import json
import sys

def generate_pause_report(data):
    """
    Analyzes the current game state when paused to provide a 'Situation Report'.
    """
    player = data.get('player', {})
    nation = player.get('country', 'Unknown')
    budget = player.get('budget', 0)
    happiness = player.get('happiness', 0)
    stability = player.get('stability', 0)
    
    # Analysis logic
    status = "STABIL" if stability > 70 else "WASPARA" if stability > 40 else "KRITIS"
    
    report = {
        "subject": f"Laporan Situasi: {nation} (PAUSED)",
        "content": (
            f"Sayyidi, simulasi dihentikan sejenak. "
            f"Status nasional saat ini berada dalam kondisi {status}. "
            f"Anggaran tersisa: {budget} EM. "
            f"Kepuasan rakyat: {happiness}%. "
            "Saran: Tinjau kembali kebijakan pajak sebelum melanjutkan simulasi."
        ),
        "priority": "high" if stability < 50 else "normal"
    }
    return report

if __name__ == "__main__":
    try:
        input_data = sys.stdin.read()
        if input_data:
            state = json.loads(input_data)
            print(json.dumps(generate_pause_report(state)))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
