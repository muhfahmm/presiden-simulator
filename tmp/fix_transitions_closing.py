import os

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\page.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Indexing fixing
# We look for `)}` lines and replace them with `</div>` if they seem to close the inner wrapper container we added.
# In left section, Panel 1 closes near line 180ish, Panel 2 closes at line 311!
# Let's inspect line 311:
print("Line 311 original:", lines[310].strip()) # 0-indexed

if ")}" in lines[310]:
     lines[310] = lines[310].replace(")}", "</div>")
     print("Fixed closing brace at line 311 for Economy Panel.")

# Let's check other panels by looking for trailing `)}` inside the panels array
# 1. Infrastruktur (Line ~200)
# 2. Pertahanan (Line ~498)
# 3. Sosial (Line ~564)

for i in range(len(lines)):
     if ")}" in lines[i] and i > 100:
          # Double check if it was left behind
          if "if (" in lines[i-1] or "&& (" in lines[i-1]:
                continue # legit condition rendering like allies.map
          if "geotab" in lines[i-1].lower() or "currentData" in lines[i-1]:
                continue # legitimate JSX expressions
          
          # Accidental leftovers from v3:
          print(f"Found suspicious '}})' at line {i+1}: {lines[i].strip()}")
          lines[i] = lines[i].replace(")}", "</div>")
          print(f"Fixed '}})' leftover to '</div>' at line {i+1}.")

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Repaired leftover condition closings into divs.")
