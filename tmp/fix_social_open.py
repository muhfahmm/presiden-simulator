import os

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\page.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 1. Remove `{isSocialOpen && (` from line 329
# Line 329 (1-indexed) is lines[328] in 0-indexed list!
# Let's verify line content first
print("Line 328:", lines[327].strip()) 
print("Line 329:", lines[328].strip()) 

if "{isSocialOpen && (" in lines[328]:
    lines[328] = "" # Delete line
    print("Deleted duplicate nested index at line 329.")

# 2. Add `{isSocialOpen && (` at line 511
# Let's find index where line starts with `<div className="flex flex-col gap-4 overflow-y-auto max-h-[500px]"` AFTER line 500!
target_idx = -1
for i in range(500, len(lines)):
     if '<div className="flex flex-col gap-4 overflow-y-auto max-h-[500px] no-scrollbar pr-1">' in lines[i]:
         target_idx = i
         break

if target_idx != -1:
     lines[target_idx] = "            {isSocialOpen && (\n" + lines[target_idx]
     print(f"Added opening brace at line {target_idx + 1}.")
     
     # 3. Add closing brace `)}` before the END of that panel.
     # Panel #4 container is <div style={{ width: `${rightWidth}px` }} ... group/panel">
     # We need to find next `</div>` closing panel, or the next panel header `Mineral Kritis` which is panel #6!
     # Mineral Kritis starts with `<div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 p-4 rounded-2xl shadow-2xl flex flex-col gap-4 w-72 pointer-events-auto">`
     # Let's look for `Mineral Kritis & Strategis`
     close_spot = -1
     for j in range(target_idx, len(lines)):
          if 'Mineral Kritis & Strategis' in lines[j]:
               # It must be inserted before the closing </div> of previous panel
               # Previous panel ends right before the mineral div container starts!
               # Backtrack to find closing </div> of previous panel
               k = j - 1
               while k > target_idx:
                    if '</div>' in lines[k]:
                         close_spot = k
                         # We want to insert `)}` right before or after that div depending on depth
                         break
                    k -= 1
               break

     if close_spot != -1:
          lines[close_spot] = "            )}\n" + lines[close_spot]
          print(f"Added closing brace at line {close_spot + 1}.")

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print("Repaired conditional nested render setup.")
