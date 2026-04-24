import os
import json
import re

def scan_user_membership(user_country, base_path):
    """
    Scans the database directories to find organizations where the user's country is a default member.
    """
    found_orgs = []
    
    # Path to organization categories
    categories = ['1_organisasi_PBB', '2_organisasi_regional']
    
    for cat in categories:
        cat_path = os.path.join(base_path, cat)
        if not os.path.exists(cat_path):
            continue
            
        for org_folder in os.listdir(cat_path):
            org_path = os.path.join(cat_path, org_folder)
            if not os.path.isdir(org_path):
                continue
                
            # Look for member files (*.ts)
            for file in os.listdir(org_path):
                if file.startswith('member') and file.endswith('.ts'):
                    file_path = os.path.join(org_path, file)
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read().lower()
                        # Clean country name for search
                        target = user_country.lower()
                        
                        # Use regex to find the country in the members array
                        # Matches "country name" or 'country name'
                        if re.search(f'["\']{re.escape(target)}["\']', content):
                            found_orgs.append({
                                "id": org_folder,
                                "category": cat,
                                "file": file
                            })
                            
    return found_orgs

if __name__ == "__main__":
    # Example usage: Change this to the user's country or pass as argument
    import sys
    target_country = sys.argv[1] if len(sys.argv) > 1 else ""
    
    # Path relative to the script location
    script_dir = os.path.dirname(os.path.abspath(__file__))
    # Adjust path to reach src/app/pilih_negara/data/database_organisasi_internasional
    # Current location: app/frontend/src/app/game/components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/2_organisasi_internasional/1_organisasi_PBB/logic
    # Target: src/app/pilih_negara/data/database_organisasi_internasional
    db_path = os.path.abspath(os.path.join(script_dir, "../../../../../../../../pilih_negara/data/database_organisasi_internasional"))
    
    print(f"Scanning for: {target_country}")
    print(f"Database Path: {db_path}")
    
    results = scan_user_membership(target_country, db_path)
    
    print("\n[SCAN RESULTS]")
    if not results:
        print("No default memberships found.")
    else:
        for res in results:
            print(f"- {res['id']} ({res['category']})")
            
    # Output as JSON for potential bridge usage
    with open(os.path.join(script_dir, "last_scan_result.json"), "w") as f:
        json.dump(results, f, indent=2)
