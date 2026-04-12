import sys
import json

def analyze_satisfaction(data):
    """
    Otak AI untuk menganalisis statistik kepuasan.
    Menerima data dari TypeScript dan menentukan tindakan strategis.
    """
    stats = data.get('statistik', {})
    satisfaction = stats.get('indeks_kepuasan', 50)
    tax_impact = stats.get('dampak_pajak', 0)
    price_impact = stats.get('dampak_harga', 0)
    
    thought = ""
    recommendations = []
    status = "STABLE"

    # Logika Pengambilan Keputusan
    if satisfaction < 40:
        status = "CRITICAL"
        thought = "Rakyat mulai tidak puas. Saya harus segera bertindak sebelum terjadi kerusuhan."
        
        # Cari penyebab utama
        if tax_impact < -0.3:
            recommendations.append({
                "action": "LOWER_TAX",
                "reason": "Beban pajak terlalu berat bagi masyarakat.",
                "target": "ppn"
            })
        
        if price_impact < -0.3:
            recommendations.append({
                "action": "MARKET_INTERVENTION",
                "reason": "Harga barang pokok melonjak drastis.",
                "target": "subsidi_pangan"
            })
    elif satisfaction < 60:
        status = "WARNING"
        thought = "Kondisi sosial cukup dinamis. Perlu pemantauan berkala pada sektor ekonomi."
    else:
        status = "STABLE"
        thought = "Masyarakat sangat puas dengan kepemimpinan saat ini. Kita bisa mempertimbangkan kenaikan pajak kecil untuk menambah kas negara jika diperlukan."

    return {
        "status": status,
        "thought": thought,
        "recommendations": recommendations,
        "metadata": {
            "satisfaction_level": satisfaction,
            "primary_concern": "tax" if abs(tax_impact) > abs(price_impact) else "price"
        }
    }

if __name__ == "__main__":
    try:
        # Membaca data dari TypeScript (stdin)
        input_data = sys.stdin.read()
        if not input_data:
            print(json.dumps({"error": "No input provided"}))
            sys.exit(0)
            
        data = json.loads(input_data)
        
        # Jalankan Analisis
        result = analyze_satisfaction(data)
        
        # Kembalikan hasil ke TypeScript (stdout)
        print(json.dumps(result))
        
    except Exception as e:
        print(json.dumps({"error": str(e)}))
