import sys
import json
import subprocess
import os

def run_sector_script(script_name, buildings):
    try:
        current_dir = os.path.dirname(os.path.abspath(__file__))
        script_path = os.path.join(current_dir, "production_scripts", script_name)
        
        process = subprocess.Popen(
            [sys.executable, script_path],
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True
        )
        
        stdout, stderr = process.communicate(input=json.dumps({"buildings": buildings}))
        
        if stderr:
            return {"error": stderr}
            
        return json.loads(stdout)
    except Exception as e:
        return {"error": str(e)}

def master_production():
    try:
        input_data = json.load(sys.stdin)
        buildings = input_data.get("buildings", {})
        
        scripts = [
            "1_sektor_listrik.py",
            "2_sektor_mineral.py",
            "3_sektor_manufaktur.py",
            "4_sektor_peternakan.py",
            "5_sektor_agrikultur.py",
            "6_sektor_perikanan.py",
            "7_sektor_olahan_pangan.py",
            "8_sektor_farmasi.py"
        ]
        
        total_deltas = {}
        total_mw = 0
        
        for script in scripts:
            result = run_sector_script(script, buildings)
            
            if "error" in result:
                continue
                
            if "total_mw" in result:
                total_mw = result["total_mw"]
            
            if "deltas" in result:
                total_deltas.update(result["deltas"])
                
        return {
            "status": "success",
            "production_deltas": total_deltas,
            "total_mw": total_mw
        }
    except Exception as e:
        return {"status": "error", "message": str(e)}

if __name__ == "__main__":
    print(json.dumps(master_production()))
