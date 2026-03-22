with open(r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\data\countries\asia\afganistan.ts", 'r', encoding='utf-8') as f:
    afg = f.readlines()

with open(r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\data\countries\afrika\aljazair.ts", 'r', encoding='utf-8') as f:
    alj = f.readlines()

import difflib
diff = difflib.unified_diff(afg, alj, fromfile='afganistan.ts', tofile='aljazair.ts')
print("".join(diff))
