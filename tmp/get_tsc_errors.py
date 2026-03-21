import subprocess

cmd = [
    'npx', 'tsc', 
    r'c:\fhm\EM4\app\frontend-desktop\src\app\select-country\page.tsx', 
    '--noEmit', '--target', 'esnext', '--module', 'commonjs', '--jsx', 'react-jsx'
]

result = subprocess.run(cmd, cwd=r'c:\fhm\EM4\app\frontend-desktop', capture_output=True, text=True)

with open(r'c:\fhm\EM4\tmp\tsc_errors.txt', 'w', encoding='utf-8') as f:
    f.write("STDOUT:\n")
    f.write(result.stdout)
    f.write("\n\nSTDERR:\n")
    f.write(result.stderr)

print("Captured full tsc log errors.")
