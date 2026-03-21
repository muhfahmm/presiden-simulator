import os

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\page.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Restore `leftWidth` and `rightWidth`
content = content.replace("leftWidth</div>", "leftWidth)}")
content = content.replace("rightWidth</div>", "rightWidth)}")

# 2. Restore `.toString()` method closures
content = content.replace(".toString(</div>", ".toString()}`")
# wait, .toString() inside template?
# Let's read row 191 again: `value={currentData.infrastructure.nuclear_plant.toString(</div> />`
# It is NOT inside a template literal backtick!
# Originally it was: `value={currentData.infrastructure.nuclear_plant.toString()}`
# So `toString()}` became `toString(</div>` !!
# Because `)}` sequence was matched!
# So to reverse it: replace `toString(</div>` with `toString()}` !!

content = content.replace(".toString(</div>", ".toString()}")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Restored catastrophe layout structural edits from transition bug.")
