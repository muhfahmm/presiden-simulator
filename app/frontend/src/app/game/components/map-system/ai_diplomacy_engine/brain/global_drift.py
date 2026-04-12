import sys
import json
import random

def calculate_daily_drift(matrix_data):
    """
    Simulasi perubahan hubungan harian antar AI (NPC-to-NPC) dan AI-to-User.
    """
    raw_matrix = matrix_data.get("matrix", {})
    user_country = matrix_data.get("userCountry", "indonesia").lower().strip()
    
    # NORMALISASI KUNCI (Mencegah Case-Sensitivity mismatch)
    matrix = {k.lower().strip(): v for k, v in raw_matrix.items()}
    
    new_matrix = {}
    events = []

    # Peluang harian global (25% peluang hari ini ada kegiatan diplomasi dunia)
    global_event_chance = 0.25 
    can_generate_event = random.random() < global_event_chance
    max_events_today = random.randint(1, 4) if can_generate_event else 0
    generated_today = 0

    source_countries = list(matrix.keys())
    random.shuffle(source_countries)

    for source in source_countries:
        # Gunakan dataset all_countries untuk memastikan setiap source punya hubungan ke SETIAP negara lain
        # (Beberapa target mungkin terhapus di TS untuk hemat memori)
        new_matrix[source] = {}
        
        # Ambil data target yang ada
        source_targets = {k.lower().strip(): v for k, v in matrix[source].items()}
        
        # Kita iterasi ke SEMUA negara yang ada di sistem (source_countries adalah daftar lengkap 207 negara)
        for target in source_countries:
            if source == target: continue
            
            # Jika target tidak ada di data source (karena sparse matrix), gunakan default
            data = source_targets.get(target, {"s": 50, "e": 0, "p": 0, "a": 0, "t": 0})
            
            score = data.get("s", 50)
            statuses = {
                "e": data.get("e", 0),
                "p": data.get("p", 0),
                "a": data.get("a", 0),
                "t": data.get("t", 0)
            }

            is_user_target = (target == user_country)

            # --- TINGKAT 1: PERHITUNGAN DRIFT CERDAS ---
            # Drift dasar
            drift = random.uniform(-0.8, 0.8)
            
            # Pengaruh Perjanjian (Stability)
            if statuses["a"]: drift += 0.25  # Aliansi itu sangat stabil
            elif statuses["p"]: drift += 0.15 # Pakta itu stabil
            elif statuses["t"]: drift += 0.1  # Dagang itu cukup stabil
            elif statuses["e"]: drift += 0.05 # Kedubes itu sedikit stabil

            # Pengaruh Triad Alignment (Sinergi Hubungan)
            # Konsep: "Teman dari temanku adalah pikiranku juga"
            # Kita ambil sampel 5 negara lain secara acak untuk simulasi pengaruh pihak ketiga (efisiensi)
            sample_countries = random.sample(source_countries, min(5, len(source_countries)))
            for third_party in sample_countries:
                if third_party == source or third_party == target: continue
                
                # Jika Source berteman dengan pihak ketiga, dan Pihak Ketiga berteman dengan Target
                third_party_data = source_targets.get(third_party, {"s": 50})
                src_to_third = third_party_data.get("s", 50)
                
                # Kita perlu data Pihak Ketiga ke Target (estimasi dari matrix global)
                third_to_target_rel = matrix.get(third_party, {}).get(target, {"s": 50})
                third_to_target = third_to_target_rel.get("s", 50)
                
                if src_to_third > 70 and third_to_target > 70:
                    drift += 0.05 # Sinergi positif
                elif src_to_third > 70 and third_to_target < 30:
                    drift -= 0.05 # Ketegangan karena teman kita musuh dia
            
            # Event langka: Krisis/Rejeki Mendadak
            if random.random() < 0.003: 
                drift -= random.uniform(15.0, 30.0) # Krisis besar
            elif random.random() < 0.002:
                drift += random.uniform(5.0, 15.0) # Terobosan besar

            new_score = round(max(0, min(100, score + drift)), 2)
            
            # --- TINGKAT 2: LOGIKA PENGKHIANATAN & PEMUTUSAN (BETRAYAL) ---
            # Jika hubungan memburuk melewati batas kritis, perjanjian batal!
            breaking_news = None
            
            if statuses["a"] and new_score < 60:
                statuses["a"] = 0
                statuses["p"] = 0 # Aliansi pecah biasanya pakta juga hilang
                breaking_news = {
                    "type": "GLOBAL_NEWS",
                    "source": source, "target": target,
                    "subject": f"SKANDAL: Aliansi {source.capitalize()} & {target.capitalize()} Runtuh",
                    "content": f"Berita besar hari ini! Aliansi militer antara {source.capitalize()} dan {target.capitalize()} resmi dibubarkan. Kedua negara dilaporkan mengalami kebuntuan diplomatik yang tidak dapat didamaikan kembali."
                }
            elif statuses["p"] and new_score < 40:
                statuses["p"] = 0
                breaking_news = {
                    "type": "GLOBAL_NEWS",
                    "source": source, "target": target,
                    "subject": f"Peringatan: {source.capitalize()} Putus Pakta Non-Agresi",
                    "content": f"Pemerintah {source.capitalize()} secara sepihak membatalkan Pakta Non-Agresi dengan {target.capitalize()}. Ketidakpercayaan yang mendalam antara kedua belah pihak memicu kekhawatiran akan stabilitas regional."
                }
            elif statuses["e"] and new_score < 30:
                statuses["e"] = 0
                breaking_news = {
                    "type": "GLOBAL_NEWS",
                    "source": source, "target": target,
                    "subject": f"Kedutaan Ditutup: {source.capitalize()} & {target.capitalize()}",
                    "content": f"Insiden diplomatik serius memaksa penutupan kantor kedutaan besar antara {source.capitalize()} dan {target.capitalize()}. Hubungan formal kini berada di titik nadir."
                }

            if breaking_news:
                events.append(breaking_news)
                generated_today += 1

            # --- TINGKAT 3: LOGIKA PROAKTIF (HUBUNGAN POSITIF) ---
            if not breaking_news and generated_today < max_events_today:
                # a. PEMULIHAN: Dana Hibah (Wacana jika untuk User)
                if 15 < new_score < 45 and random.random() < 0.06:
                    boost = random.uniform(15.0, 25.0)
                    if is_user_target:
                        events.append({
                            "type": "GLOBAL_NEWS",
                            "source": source, "target": target,
                            "subject": f"Wacana: {source.capitalize()} Berencana Memberi Hibah ke {target.capitalize()}",
                            "content": f"Isu bantuan ekonomi sedang hangat dibicarakan di kementerian {source.capitalize()}. Mereka kabarnya berencana mengucurkan hibah diplomatik kepada {target.capitalize()}."
                        })
                        events.append({
                            "type": "NPC_GRANT_TO_USER", 
                            "source": source,
                            "subject": f"Tawaran Hibah Diplomatik",
                            "content": f"Salam. Kami ingin memulihkan hubungan dengan {target.capitalize()} dan menawarkan bantuan dana hibah sebesar unit yang signifikan.",
                            "budgetGain": random.randint(100, 500) * 1000000
                        })
                    else:
                        new_score = round(min(80, new_score + boost), 2)
                        events.append({
                            "type": "GLOBAL_NEWS",
                            "source": source, "target": target,
                            "subject": f"Normalisasi: {source.capitalize()} Kucurkan Hibah ke {target.capitalize()}",
                            "content": f"Dalam langkah mengejutkan untuk menstabilkan kawasan, pemerintah {source.capitalize()} resmi mengucurkan dana hibah diplomatik kepada {target.capitalize()}. Inisiatif ini menandai dimulainya babak baru pemulihan hubungan."
                        })
                    generated_today += 1

                # b. ALIANSI STRATEGIS (Butuh Kedutaan & Pakta & Hubungan > 80)
                elif new_score > 80 and statuses["e"] and statuses["p"] and not statuses["a"] and random.random() < 0.08:
                    if is_user_target:
                        events.append({
                            "type": "GLOBAL_NEWS",
                            "source": source, "target": target,
                            "subject": f"Rencana Aliansi: {source.capitalize()} Ingin Bersatu dengan {target.capitalize()}",
                            "content": f"Beredar kabar bahwa {source.capitalize()} tengah menyusun draft aliansi pertahanan jangka panjang dengan {target.capitalize()}."
                        })
                        events.append({
                            "type": "USER_ALLIANCE_OFFER",
                            "source": source,
                            "subject": "Tawaran Aliansi Pertahanan",
                            "content": f"Demi keamanan bersama, kami mengusulkan pembentukan aliansi militer formal dengan {target.capitalize()}."
                        })
                    else:
                        statuses["a"] = 1
                        events.append({
                            "type": "GLOBAL_NEWS",
                            "source": source, "target": target,
                            "subject": f"Aliansi Strategis: {source.capitalize()} - {target.capitalize()} Bersatu",
                            "content": f"Dunia menyaksikan pergeseran kekuatan saat {source.capitalize()} dan {target.capitalize()} resmi mendeklarasikan aliansi pertahanan. Pakta militer ini mewajibkan kedua negara untuk saling membela."
                        })
                    generated_today += 1

                # c. PAKTA PERDAMAIAN (Butuh Kedutaan & Hubungan > 65)
                elif new_score > 65 and statuses["e"] and not statuses["p"] and random.random() < 0.12:
                    if is_user_target:
                        events.append({
                            "type": "GLOBAL_NEWS",
                            "source": source, "target": target,
                            "subject": f"Wacana Damai: {source.capitalize()} Kaji Pakta dengan {target.capitalize()}",
                            "content": f"Kementerian luar negeri {source.capitalize()} dikabarkan sedang mengkaji penandatanganan Pakta Non-Agresi dengan {target.capitalize()}."
                        })
                        events.append({
                            "type": "USER_PACT_OFFER",
                            "source": source,
                            "subject": "Usulan Pakta Non-Agresi",
                            "content": f"Kami ingin menjamin perdamaian di perbatasan kita melalui Pakta Non-Agresi yang formal."
                        })
                    else:
                        statuses["p"] = 1
                        events.append({
                            "type": "GLOBAL_NEWS",
                            "source": source, "target": target,
                            "subject": f"Pakta Perdamaian: {source.capitalize()} & {target.capitalize()} Sepakat Damai",
                            "content": f"Melalui negosiasi intensif, {source.capitalize()} dan {target.capitalize()} telah menandatangani Pakta Non-Agresi untuk menurunkan risiko konflik bersenjata."
                        })
                    generated_today += 1

                # d. INTEGRASI EKONOMI (Butuh Kedutaan & Hubungan > 60)
                elif new_score > 60 and statuses["e"] and not statuses["t"] and random.random() < 0.15:
                    if is_user_target:
                        events.append({
                            "type": "GLOBAL_NEWS",
                            "source": source, "target": target,
                            "subject": f"Isu Ekonomi: Kerjasama {source.capitalize()} & {target.capitalize()}",
                            "content": f"Rencana pembukaan pasar antara {source.capitalize()} dan {target.capitalize()} mulai masuk ke agenda kementerian ekonomi."
                        })
                        events.append({
                            "type": "USER_TRADE_OFFER",
                            "source": source,
                            "subject": "Tawaran Kerjasama Dagang",
                            "content": f"Kami mengusulkan penghapusan hambatan tarif untuk meningkatkan volume perdagangan antara kedua negara."
                        })
                    else:
                        statuses["t"] = 1
                        events.append({
                            "type": "GLOBAL_NEWS",
                            "source": source, "target": target,
                            "subject": f"Integrasi Ekonomi: {source.capitalize()} - {target.capitalize()} Buka Pasar",
                            "content": f"Terobosan ekonomi tercapai hari ini setelah {source.capitalize()} dan {target.capitalize()} menandatangani perjanjian perdagangan bebas untuk menghapus hambatan tarif."
                        })
                    generated_today += 1

                # e. KEANGGOTAAN KEDUTAAN (Butuh Hubungan > 55)
                elif new_score > 55 and not statuses["e"] and random.random() < 0.2:
                    if is_user_target:
                        events.append({
                            "type": "GLOBAL_NEWS",
                            "source": source, "target": target,
                            "subject": f"Wacana Diplomatik: {source.capitalize()} Berencana Membuka Kedutaan di {target.capitalize()}",
                            "content": f"{source.capitalize()} mengutarakan rencana untuk menunjuk duta besar baru dan membuka kantor perwakilan di {target.capitalize()}."
                        })
                        events.append({
                            "type": "USER_EMBASSY_OFFER",
                            "source": source,
                            "subject": "Permohonan Pembukaan Kedutaan",
                            "content": f"Kami ingin meningkatkan level hubungan diplomatik formal melalui pembukaan kantor kedutaan besar."
                        })
                    else:
                        statuses["e"] = 1
                        boost_score = random.uniform(67.0, 72.0)
                        if new_score < boost_score: new_score = boost_score
                        events.append({
                            "type": "GLOBAL_NEWS",
                            "source": source, "target": target,
                            "subject": f"Kedutaan Baru: {source.capitalize()} di {target.capitalize()}",
                            "content": f"{source.capitalize()} dan {target.capitalize()} telah membuka kedutaan besar secara permanen."
                        })
                    generated_today += 1

                # f. BERITA KRISIS/TEGANG (Jika tidak ada event positif lain)
                elif new_score < 25 and score >= 25 and random.random() < 0.3:
                    events.append({
                        "type": "GLOBAL_NEWS",
                        "source": source, "target": target,
                        "subject": f"Krisis: Hubungan {source.capitalize()} & {target.capitalize()} Memburuk Tajam",
                        "content": f"Saluran komunikasi diplomatik antara {source.capitalize()} dan {target.capitalize()} terputus total. Analis memperingatkan risiko isolasi ekonomi."
                    })
                    generated_today += 1
                elif new_score < 40 and score >= 40 and random.random() < 0.2:
                    events.append({
                        "type": "GLOBAL_NEWS",
                        "source": source, "target": target,
                        "subject": f"Ketegangan: Hubungan {source.capitalize()} & {target.capitalize()} Memanas",
                        "content": f"Titik api baru muncul di panggung geopolitik saat {source.capitalize()} melayangkan protes keras terhadap kebijakan {target.capitalize()}."
                    })
                    generated_today += 1

            new_matrix[source][target] = {
                "s": new_score,
                **statuses
            }

    return {
        "matrix": new_matrix,
        "events": events
    }

if __name__ == "__main__":
    try:
        input_data = sys.stdin.read()
        if not input_data:
            sys.exit(0)
            
        data = json.loads(input_data)
        result = calculate_daily_drift(data)
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)
