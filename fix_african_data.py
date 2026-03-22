import re
import os

directory = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\data\countries\afrika"

# Data map for realistic updates
# Pop: string, Budget: string, Income: string
# Sector stats to boost or nerf
country_fixes = {
    "afrika_selatan.ts": {
        "pop": "64M", "income": "Rp 6400 T", "budget": "Rp 1280 T",
        "updates": {
            "infrastructure": {"nuclear_plant": 10},  # Has Koeberg
            "sector_extraction": {"coal": 80, "gold": 75, "rare_earth": 60, "uranium": 40},
        }
    },
    "nigeria.ts": {
        "pop": "237M", "income": "Rp 4500 T", "budget": "Rp 900 T",
        "updates": {
            "sector_extraction": {"oil": 90, "gas": 85},
            "sector_agriculture": {"rice": 60, "corn": 50},
        }
    },
    "mesir.ts": {
        "pop": "118M", "income": "Rp 5600 T", "budget": "Rp 1120 T",
        "updates": {
            "sector_agriculture": {"wheat": 70, "vegetables": 60},
            "infrastructure": {"sea_port": 80}, # Suez
        }
    },
    "aljazair.ts": {
        "pop": "47M", "income": "Rp 3200 T", "budget": "Rp 640 T",
        "updates": {
            "sector_extraction": {"oil": 75, "gas": 80},
        }
    },
    "maroko.ts": {
        "pop": "38M", "income": "Rp 2240 T", "budget": "Rp 450 T",
        "updates": {
            "sector_agriculture": {"vegetables": 65},
            "geopolitics": {"allies": ['Amerika Serikat', 'Uni Eropa']},
        }
    },
    "ethiopia.ts": {
        "pop": "135M", "income": "Rp 2560 T", "budget": "Rp 510 T",
        "updates": {
            "sector_agriculture": {"coffee": 85, "corn": 60},
        }
    },
    "kenya.ts": {
        "pop": "57M", "income": "Rp 1760 T", "budget": "Rp 350 T",
        "updates": {
            "sector_agriculture": {"tea": 85, "coffee": 70},
            "infrastructure": {"internet_coverage": 85}, # Tech Hub
        }
    },
    "angola.ts": {
        "pop": "39M", "income": "Rp 1440 T", "budget": "Rp 280 T",
        "updates": {
            "sector_extraction": {"oil": 80, "rare_earth": 50}, # Diamonds
        }
    },
    "republik_demokratik_kongo.ts": {
        "pop": "112M", "income": "Rp 1120 T", "budget": "Rp 220 T",
        "updates": {
            "sector_extraction": {"copper": 90, "rare_earth": 85, "gold": 60}, # Cobalt
        }
    },
    "ghana.ts": {
        "pop": "35M", "income": "Rp 1280 T", "budget": "Rp 250 T",
        "updates": {
            "sector_extraction": {"gold": 65, "oil": 40},
            "sector_agriculture": {"cocoa": 80},
        }
    }
}

def update_scalars(content, fixes):
    for key in ["pop", "budget", "income"]:
        if key in fixes:
            pattern = r'("' + key + r'":\s*")([^"]*)(")'
            content = re.sub(pattern, rf'\g<1>{fixes[key]}\g<3>', content)
    return content

def update_nested(content, updates):
    for section, fields in updates.items():
        pattern = r'("' + section + r'":\s*\{)(.*?)(\s*\})'
        match = re.search(pattern, content, re.DOTALL)
        if match:
            prefix = match.group(1)
            body = match.group(2)
            suffix = match.group(3)
            
            # Update fields in body
            for field, val in fields.items():
                field_pattern = r'("' + field + r'":\s*)(\d+)'
                if re.search(field_pattern, body):
                    # Use \g<1> to specify group 1 and avoid ambiguity with numbers
                    body = re.sub(field_pattern, rf'\g<1>{val}', body)
            
            content = content[:match.start()] + prefix + body + suffix + content[match.end():]
    return content

count = 0
for filename, fixes in country_fixes.items():
    filepath = os.path.join(directory, filename)
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
        original = content
        content = update_scalars(content, fixes)
        if "updates" in fixes:
            content = update_nested(content, fixes["updates"])
            
        if content != original:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            count += 1

print(f"Updated {count} country files with realistic data")
