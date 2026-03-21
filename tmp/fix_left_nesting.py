import os

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\page.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 1. Insert </div> before Economy Panel to CLOSE Infrastruktur border
# Target is around row 219 (Line 220 is comment)
# Let's find index where line contains {/* 2. Sektor Produksi
target_index = -1
for i, line in enumerate(lines):
    if "Sektor Produksi & Ekonomi Detailed" in line:
        target_index = i
        break

if target_index != -1:
    # Insert </div> right before the comment
    lines.insert(target_index, "          </div>\n")
    print(f"Inserted </div> at row {target_index + 1}")
    
    # 2. Since we closed Infrastruktur early, we must REMOVE ONE </div> at the end of Economy
    # Look for the last closes before RIGHT SIDE PANELS Starts
    # Line 311-314ish
    bottom_index = -1
    for i in range(target_index, len(lines)):
         if "RIGHT SIDE PANELS" in lines[i]:
              bottom_index = i
              break
              
    if bottom_index != -1:
         # Lines above bottom_index are closing tags
         # Remove the one right above the comment to accommodate the shift
         # Standard index is bottom_index - 1
         # Print what we are removing to be safe
         print(f"Removing tag at row {bottom_index}: {lines[bottom_index - 1].strip()}")
         lines.pop(bottom_index - 1)
         
    with open(file_path, 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print("Nesting fixed successfully.")
else:
    print("Economy comment not found.")
