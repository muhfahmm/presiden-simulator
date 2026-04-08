import sys
import json

def get_recommendations(data):
    country_data = data.get('country', {})
    session = data.get('session', {})
    
    religion = session.get('religion', 'Islam')
    ideology = session.get('ideology', 'Demokrasi')
    cash = session.get('cash', 0)
    approval_rating = session.get('approval_rating', 50)
    
    # Extract more granular stats
    gdp = int(country_data.get('pendapatan_nasional', 0))
    security_index = country_data.get('sektor_sosial', {}).get('hukum', {}).get('indeks_keamanan', 70)
    crime_rate = 100 - security_index
    corruption_index = country_data.get('sektor_sosial', {}).get('hukum', {}).get('indeks_korupsi', 50)
    population = int(country_data.get('jumlah_penduduk', 0))
    
    recommendations = []
    
    # 1. INDUSTRI (Target: ID 1, 19, 26, 27)
    if gdp < 40000:
        recommendations.append({"lawId": 19, "reason": "Hilirisasi dibutuhkan untuk meningkatkan nilai tambah komoditas ekspor dan membangun kemandirian ekonomi."})
    elif ideology == "Komunisme":
        recommendations.append({"lawId": 1, "reason": "Otomasi industri akan mempercepat target produksi nasional tanpa bergantung pada gejolak pasar buruh."})
    else:
        recommendations.append({"lawId": 26, "reason": "Sertifikasi TKDN akan memperkuat rantai pasok dalam negeri dan mengurangi ketergantungan impor suku cadang."})

    # 2. KEAMANAN (Target: ID 4, 24, 28, 29)
    if crime_rate > 30:
        recommendations.append({"lawId": 28, "reason": "Ancaman siber meningkat. Satuan Polisi Siber diperlukan untuk menjaga kestabilan data nasional."})
    elif ideology in ["Otoriter", "Monarki"]:
        recommendations.append({"lawId": 4, "reason": "Sensor informasi penting untuk menjaga stabilitas ideologi negara dari pengaruh asing yang destruktif."})
    else:
        recommendations.append({"lawId": 29, "reason": "Digital ID akan mempermudah birokrasi dan pelacakan pelaku kejahatan secara akurat dan efisien."})

    # 3. EKONOMI (Target: ID 20, 30, 31, 32)
    if cash < 1000000:
        recommendations.append({"lawId": 30, "reason": "Nasionalisasi aset strategis akan mengalihkan keuntungan sektor vital langsung ke kas negara."})
    elif ideology == "Demokrasi":
        recommendations.append({"lawId": 31, "reason": "Subsidi UMKM Digital akan memperkuat ekonomi kerakyatan dan menciptakan lapangan kerja baru."})
    else:
        recommendations.append({"lawId": 20, "reason": "Pajak Kekayaan akan mendanai proyek infrastruktur raksasa dengan mengambil surplus dari kelas atas."})

    # 4. MILITER & PERTAHANAN (Target: ID 6, 7, 33, 34, 35)
    if ideology == "Nasionalisme":
        recommendations.append({"lawId": 6, "reason": "Doktrin Pertahanan Mandiri akan membangkitkan kebanggaan nasional melalui alutsista buatan anak bangsa."})
    elif security_index < 50:
        recommendations.append({"lawId": 33, "reason": "Pertahanan Rudal Jauh adalah tameng mutlak untuk melindungi kedaulatan dari ancaman serangan udara asing."})
    else:
        recommendations.append({"lawId": 35, "reason": "Satelit Militer memberikan keunggulan intelijen real-time bagi komando pusat keamanan."})

    # 5. SOSIAL (Target: ID 9, 23, 25, 36)
    if religion in ["Islam", "Katolik", "Protestan"]:
        recommendations.append({"lawId": 9, "reason": f"Sesuai ajaran {religion}, Jaminan Sosial Semesta adalah bentuk nyata kepedulian negara terhadap rakyat miskin."})
    elif religion == "Ateisme":
        recommendations.append({"lawId": 23, "reason": "Fokus pada rasionalitas menuntut percepatan Infrastruktur Pendidikan Digital untuk menciptakan SDM unggul."})
    else:
        recommendations.append({"lawId": 25, "reason": "Kesehatan mental warga yang terjaga akan meningkatkan produktivitas nasional dan kebahagiaan publik."})

    # 6. ENERGI & LINGKUNGAN (Target: ID 10, 11, 12, 13, 22)
    if ideology in ["Komunisme", "Sosialisme"]:
        recommendations.append({"lawId": 11, "reason": "Monopoli Energi Negara memastikan rakyat mendapatkan tarif listrik termurah tanpa intervensi pasar swasta."})
    elif gdp > 100000:
        recommendations.append({"lawId": 10, "reason": "Transisi Hijau akan membersihkan polusi dan menarik investor teknologi ramah lingkungan ke tanah air."})
    else:
        recommendations.append({"lawId": 22, "reason": "Biofuel Mandatori mendukung ketahanan energi nasional sekaligus menyejahterakan petani komoditas energi."})

    # 7. HUKUM & KETERTIBAN (Target: ID 14, 15, 16, 21, 37)
    if ideology == "Demokrasi":
        recommendations.append({"lawId": 21, "reason": "Transparansi adalah roh demokrasi. Audit Pejabat diperlukan untuk membersihkan birokrasi dari praktik korupsi."})
    elif ideology in ["Otoriter", "Monarki"]:
        recommendations.append({"lawId": 15, "reason": "Pengawasan Biometrik Massal adalah investasi terbaik untuk memastikan ketertiban wilayah terjamin 24 jam."})
    else:
        recommendations.append({"lawId": 14, "reason": "Hukuman mati bagi gembong narkoba akan memberikan shock therapy yang efektif bagi pelaku kriminal."})

    # 8. HUBUNGAN INTERNASIONAL (Target: ID 17, 18, 38, 39, 40)
    if ideology == "Liberalisme":
        recommendations.append({"lawId": 18, "reason": "Zona Perdagangan Bebas akan mendongkrak devisa melalui arus barang yang tak terhambat oleh tarif."})
    elif approval_rating > 70:
        recommendations.append({"lawId": 39, "reason": "Pertukaran Budaya Global akan memperluas Soft Power kita di mata dunia sebagai negara yang maju dan beradab."})
    else:
        recommendations.append({"lawId": 38, "reason": "Pakta Pertahanan Regional akan menghemat anggaran militer melalui sistem keamanan kolektif antar negara tetangga."})

    return recommendations

if __name__ == "__main__":
    try:
        if len(sys.argv) > 1:
            input_data = json.loads(sys.argv[1])
        else:
            input_data = json.load(sys.stdin)
        
        results = get_recommendations(input_data)
        print(json.dumps(results))
    except Exception as e:
        print(json.dumps([{"lawId": 1, "reason": f"Error in AI Engine: {str(e)}"}]), file=sys.stderr)
        sys.exit(1)
