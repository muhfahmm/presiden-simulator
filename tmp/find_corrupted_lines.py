import os

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\page.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

print("SUSPICIOUS LINES WITH UNCLOSED PARENS:")
for i, line in enumerate(lines):
    clean = line.split("//")[0]
    o = clean.count("(")
    c = clean.count(")")
    if o > c:
        # Filter out map / arrow functions / console logs / setStates that might span lines
        if "map" not in clean and "=>" not in clean and "useState" not in clean and "useEffect" not in clean:
             # Look for expressions like math, toString, getGridCols
             if "Math." in clean or "currentData" in clean or "grid" in clean or "DetailStat" in clean:
                  print(f"[{i+1}] ({o} vs {c}): {line.strip()}")

print("\nFinished scan.")
