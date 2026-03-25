import random
import json

def calculate_happiness(current_val, budget_delta, avg_salary, avg_subsidy, infra_score=85):
    """
    Realistic Happiness Calculation Logic
    Returns: (new_happiness_value, reasoning_message)
    """
    
    # 1. Economic Sentiment (Budget Delta)
    econ_impact = 0
    if budget_delta > 0:
        econ_impact = 2 # Positive growth
        reasoning = "Ekonomi stabil dan bertumbuh."
    elif budget_delta < -500:
        econ_impact = -5 # Major deficit
        reasoning = "Kekhawatiran terhadap defisit anggaran negara."
    else:
        econ_impact = -1 # Slight pressure
        reasoning = "Anggaran negara sedang dalam pantauan."

    # 2. Social Policy (Salaries & Subsidies)
    # Weights: Salary 40 points, Subsidy 35 points, Infra 15 points
    salary_score = avg_salary * 40
    subsidy_score = avg_subsidy * 0.35
    infra_score_val = 15
    
    # 3. Delta calculation (Tendency to move towards policy score)
    target = min(95, salary_score + subsidy_score + infra_score_val + econ_impact)
    diff = target - current_val
    
    # Natural resistance (slow change)
    change = diff * 0.05 # Move 5% towards target each month
    
    # 4. Random Events / Realism
    noise = random.uniform(-1.5, 1.5)
    
    final_val = round(current_val + change + noise, 1)
    final_val = max(0, min(100, final_val))

    # --- CRITICAL & GAME OVER CHECK ---
    if final_val == 0:
        print("GAME OVER: Rakyat telah melakukan kudeta!")
    elif final_val <= 10:
        print("PERINGATAN KRITIS: Segera laksanakan Program Kesejahteraan!")
    # -----------------------------------

    # Determine message based on change
    if final_val > current_val + 1:
        detail = f"Meningkat karena {reasoning.lower()}"
    elif final_val < current_val - 1:
        detail = f"Menurun karena {reasoning.lower()}"
    else:
        detail = "Kepuasan rakyat relatif stabil."

    return final_val, detail

if __name__ == "__main__":
    # Example Simulation for Jan -> Feb
    # Values: Curr Happ, Budget Delta, Avg Sal, Avg Sub
    new_val, msg = calculate_happiness(65, 120, 80, 75)
    print(f"Simulation Result: {new_val}% - {msg}")
