import os

base_dir = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\data\countries"
main_ts_path = os.path.join(base_dir, "main.ts")
index_ts_path = os.path.join(base_dir, "index.ts")

if not os.path.exists(main_ts_path):
    print("main.ts not found.")
    exit()

with open(main_ts_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace allCountries with countries
new_content = content.replace('export const allCountries: CountryData[] = [', 'export const countries: CountryData[] = [')

with open(index_ts_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Merged main.ts into index.ts.")

# Delete main.ts
os.remove(main_ts_path)
print("Deleted main.ts.")
