import sys
import json
import random

def analisis_kependudukan():
    try:
        # Read from stdin
        input_data = json.load(sys.stdin)
        
        # Extract data
        metrics = input_data.get("metrics", {})
        country_data = input_data.get("country_data", {})
        budget = input_data.get("budget", 0)
        population = input_data.get("population", 0)
        
        # Current Metrics
        life_exp = metrics.get("lifeExpectancy", 0)
        security = metrics.get("securityLevel", 0)
        demographics = metrics.get("demographics", [])
        
        # Analysis results
        analysis = {
            "status": "STABIL",
            "health": {"score": life_exp, "status": "PRIMA", "issues": [], "recommendations": []},
            "security": {"score": security, "status": "AMAN", "issues": [], "recommendations": []},
            "social_gap": {"gini": 0, "status": "MERATA", "analysis": ""},
            "income_distribution": [],
            "critical_thinking": []
        }

        # 1. Health Analysis
        if life_exp < 70:
            analysis["health"]["status"] = "KRITIS"
            analysis["health"]["issues"].append("Tingkat harapan hidup sangat rendah di bawah standar keamanan global.")
            analysis["health"]["recommendations"].append("Segera bangun Rumah Sakit Besar untuk memperluas cakupan medis.")
        elif life_exp < 75:
            analysis["health"]["status"] = "WASPADA"
            analysis["health"]["issues"].append("Harapan hidup mulai menunjukkan tren penurunan.")
            analysis["health"]["recommendations"].append("Tingkatkan jumlah Pusat Diagnostik untuk deteksi dini penyakit.")
        
        # 2. Security Analysis
        if security < 60:
            analysis["security"]["status"] = "RAWAN"
            analysis["security"]["issues"].append("Tingkat kriminalitas tinggi terdeteksi di berbagai wilayah.")
            analysis["security"]["recommendations"].append("Mobilisasi armada kepolisian dan bangun Kantor Polisi baru.")
        elif security < 70:
            analysis["security"]["status"] = "WASPADA"
            analysis["security"]["issues"].append("Stabilitas keamanan nasional sedang terancam.")
            analysis["security"]["recommendations"].append("Perluas jangkauan Bantuan Hukum dan Kejaksaan.")

        # 3. Social Gap & Gini Index Analysis (Critical Thinking)
        base_gini = country_data.get("hukum", {}).get("kesenjangan_sosial", 38.0)
        ideology = country_data.get("ideology", "Netral")
        
        effective_gini = base_gini
        if ideology == "Kapitalisme":
            effective_gini *= 1.15 # Penalty for capitalism in this game's logic
        elif ideology == "Komunisme":
            effective_gini *= 0.75 # Bonus for communism
            
        analysis["social_gap"]["gini"] = round(effective_gini, 1)
        
        if effective_gini > 45:
            analysis["social_gap"]["status"] = "EXTREME INEQUALITY"
            analysis["social_gap"]["analysis"] = "Kesenjangan sosial sangat lebar. Kekayaan terkonsentrasi pada segelintir elit."
            analysis["critical_thinking"].append("AI menyarankan reformasi pajak progresif (Pajak Pendapatan) untuk mendistribusikan kekayaan elit ke kelas pekerja.")
        elif effective_gini > 40:
            analysis["social_gap"]["status"] = "TINGGI"
            analysis["social_gap"]["analysis"] = "Kesenjangan sosial di atas rata-rata. Potensi gesekan antar kelas sosial."
            analysis["critical_thinking"].append("AI menyarankan peningkatan subsidi harga kebutuhan pokok (Beras, Air, Listrik) untuk meringankan beban masyarakat miskin.")
        else:
            analysis["social_gap"]["status"] = "MODERAT"
            analysis["social_gap"]["analysis"] = "Distribusi pendapatan relatif stabil namun tetap memerlukan pemantauan."

        # 4. Critical Thinking on National Income Distribution
        if budget > 1000000000: # Example logic for high budget unused
            analysis["critical_thinking"].append("Budget nasional mencukupi. AI merekomendasikan investasi besar pada sektor Publik (Kesehatan/Hukum) daripada hanya menimbun kas.")
        
        # Final Decision status
        if analysis["health"]["status"] == "KRITIS" or analysis["security"]["status"] == "RAWAN":
            analysis["status"] = "KRITIS"
        elif analysis["health"]["status"] == "WASPADA" or analysis["security"]["status"] == "WASPADA":
            analysis["status"] = "WASPADA"

        return analysis

    except Exception as e:
        return {"error": str(e), "status": "ERROR"}

if __name__ == "__main__":
    result = analisis_kependudukan()
    print(json.dumps(result))
