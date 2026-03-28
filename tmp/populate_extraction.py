import os
import re
import random

def populate_extraction():
    base_path = r"c:\fhm\EM\app\frontend\src\app\database\data\countries\region"
    
    # Keys from Bahrain data
    keys = [
        "emas", "uranium", "batu_bara", "minyak_bumi", "gas_alam", 
        "garam", "nikel", "litium", "tembaga", "aluminium", 
        "logam_tanah_jarang", "bijih_besi"
    ]
    
    # Regex to find empty or near-empty sektor_ekstraksi
    # Case 1: "sektor_ekstraksi": { },
    # Case 2: "sektor_ekstraksi": {},
    pattern = re.compile(r'("sektor_ekstraksi":\s*\{(?:\s*)\},?)', re.MULTILINE)

    count = 0
    for root, dirs, files in os.walk(base_path):
        for file in files:
            if file.endswith(".ts") and file != "index.ts":
                file_path = os.path.join(root, file)
                
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()
                
                if '"sektor_ekstraksi": {' in content:
                    # Check if it's empty
                    match = pattern.search(content)
                    if match:
                        # Generate randomized values
                        new_values = []
                        for key in keys:
                            # 60% chance of 0, 40% chance of 1-100
                            # But some like oil/gas might be more common? 
                            # Let's just keep it simple but somewhat diverse.
                            if random.random() < 0.6:
                                val = 0
                            else:
                                val = random.randint(1, 100)
                            
                            new_values.append(f'    "{key}": {val}')
                        
                        replacement = '"sektor_ekstraksi": {\n' + ",\n".join(new_values) + "\n  },"
                        
                        new_content = content[:match.start()] + replacement + content[match.end():]
                        
                        with open(file_path, "w", encoding="utf-8") as f:
                            f.write(new_content)
                        
                        print(f"Updated: {file_path}")
                        count += 1
                    else:
                        print(f"Skipped (not empty): {file_path}")

    print(f"\nTotal files updated: {count}")

if __name__ == "__main__":
    populate_extraction()
