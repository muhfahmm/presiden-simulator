import sys
import json

def decider_event_npc(data):
    """
    AI Decision Logic for Hosting Public Events.
    Evaluates budget vs satisfaction crisis.
    """
    negara = data.get('negara', 'Unknown')
    budget = data.get('budget', 0)
    happiness = data.get('happiness', 55.0)
    events = data.get('events', [])
    history = data.get('history', [])
    root_cause = data.get('root_cause', 'none')

    # 1. Criteria: Don't host events if happiness is already high (> 90%)
    if happiness > 90.0:
        return {"decision": "SKIP", "reason": "Kepuasan rakyat sudah sangat tinggi."}

    # 2. Criteria: Don't host events if budget is dangerously low
    if budget < 50000:
        return {"decision": "SKIP", "reason": "Anggaran terlalu terbatas untuk menyelenggarakan acara."}

    # 3. Filter affordable events and those not on cooldown
    affordable_events = []
    for event in events:
        if event['cost'] <= budget:
            # Check cooldown logic (approximated here based on history provided)
            # Logic: If event ID exists in history with recent date, skip.
            last_exec = next((h for h in reversed(history) if h['id'] == event['id']), None)
            
            # Simple cooldown check: if hosted within CD days, ignore.
            # (In a real scenario, we'd need current game date to calculate this perfectly)
            # For now, we assume the caller filtered out items strictly on cooldown, 
            # but we can add a secondary check here if needed.
            affordable_events.append(event)

    if not affordable_events:
        return {"decision": "SKIP", "reason": "Tidak ada acara yang terjangkau atau tersedia (Cooldown)."}

    # 4. Strategy Selection
    # If in CRITICAL zone (< 40%), prioritize high happiness boost regardless of cost-efficiency.
    if happiness < 40.0:
        # Sort by happinessBoost descending
        chosen = sorted(affordable_events, key=lambda x: x['happinessBoost'], reverse=True)[0]
        return {"decision": "EXECUTE", "event_id": chosen['id'], "reason": "Status KRISIS: Memilih acara dengan dampak kepuasan terbesar."}
    
    # NEW: Priority for Root Cause Mitigation (Warning Zone)
    if root_cause != "none" and happiness < 60.0:
        # Be more aggressive if there is a known cause pulling satisfaction down
        chosen = sorted(affordable_events, key=lambda x: x['happinessBoost'], reverse=True)[0]
        return {"decision": "EXECUTE", "event_id": chosen['id'], "reason": f"MITIGASI KRISIS: Menyelenggarakan acara untuk meredam dampak negatif dari {root_cause}."}
    
    # If in STABLE zone, prioritize most cost-effective (Boost / Cost ratio)
    # Factor: multiplier 1M to make the ratio readable
    chosen = sorted(affordable_events, key=lambda x: (x['happinessBoost'] * 1000000) / x['cost'], reverse=True)[0]
    
    # Extra check: Don't spend more than 20% of budget on a routine event if not in crisis
    if chosen['cost'] > (budget * 0.2):
        # Try a cheaper one
        cheaper_options = [e for e in affordable_events if e['cost'] <= (budget * 0.1)]
        if cheaper_options:
            chosen = sorted(cheaper_options, key=lambda x: x['happinessBoost'], reverse=True)[0]

    return {"decision": "EXECUTE", "event_id": chosen['id'], "reason": "Kebijakan rutin: Menambah kepuasan dengan opsi paling efisien."}

if __name__ == "__main__":
    try:
        input_data = sys.stdin.read()
        if not input_data:
            print(json.dumps({"error": "No input provided"}))
            sys.exit(0)
            
        data = json.loads(input_data)
        result = decider_event_npc(data)
        print(json.dumps(result))
        
    except Exception as e:
        print(json.dumps({"error": str(e)}))
