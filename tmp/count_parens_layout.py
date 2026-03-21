import os

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\page.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

open_p = 0
close_p = 0
open_b = 0
close_b = 0

print("INTERVAL (218 - 320) BRACKET HEIGHTS:")
for i in range(215, 320):
    line = lines[i].split("//")[0]
    o_p = line.count("(")
    c_p = line.count(")")
    o_b = line.count("{")
    c_b = line.count("}")
    
    open_p += o_p
    close_p += c_p
    open_b += o_b
    close_b += c_b
    
    net_p = open_p - close_p
    net_b = open_b - close_b
    
    if o_p > 0 or c_p > 0 or o_b > 0 or c_b > 0:
        print(f"[{i+1}] Net P: {net_p} (Delta {o_p - c_p}), Net B: {net_b} (Delta {o_b - c_b}) | {lines[i].strip()}")

print("Finished scan.")
