import sys

try:
    with open(r'c:\fhm\EM4\tmp\tsc_output_2.txt', 'r', encoding='utf-16le') as f:
        lines = f.readlines()
        
    filtered = []
    for line in lines:
        if 'select-country' in line and '.ts(' in line:
            filtered.append(line.strip())
            
    print(f"Total filtered errors: {len(filtered)}")
    for f in filtered[:50]: # Show top 50
        print(f)
        
    # Save as UTF-8
    with open(r'c:\fhm\EM4\tmp\filtered_tsc.txt', 'w', encoding='utf-8') as f:
        f.write('\n'.join(filtered))
        
except Exception as e:
    print(f"Error: {e}")
