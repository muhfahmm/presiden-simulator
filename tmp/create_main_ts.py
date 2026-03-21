import os
import re

base_dir = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\data"
countries_ts_path = os.path.join(base_dir, "countries.ts")
main_ts_path = os.path.join(base_dir, "countries", "main.ts")

with open(countries_ts_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract imports and array items
match = re.search(r'(import { CountryData } from "./types";\s*)(.*?)(\s*export const countries: CountryData\[\] = \[\s*)(.*?)(\s*\];)', content, re.DOTALL)

if not match:
    print("Failed to parse countries.ts layout.")
    exit()

imports = match.group(2).strip()
array_items = match.group(4).strip()

# Adjust paths for main.ts (nested under countries folder)
# From "./countries/asia/_index" to "./asia/_index"
adjusted_imports = imports.replace('./countries/', './')

main_content = f"""import {{ CountryData }} from "../types";

{adjusted_imports}

export const allCountries: CountryData[] = [
  {array_items}
];
"""

# 1. Write main.ts
with open(main_ts_path, 'w', encoding='utf-8') as f:
    f.write(main_content)

print("Created data/countries/main.ts.")

# 2. Re-write countries.ts to be minimal
new_index_content = """import { CountryData } from "./types";
import { allCountries } from "./countries/main";

export const countries: CountryData[] = allCountries;
"""

with open(countries_ts_path, 'w', encoding='utf-8') as f:
    f.write(new_index_content)

print("Simplified countries.ts dataset header.")
