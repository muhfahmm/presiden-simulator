import re

txt_path = r"c:\fhm\EM4\daftar-menu\7.DAFTAR NEGARA.txt"

try:
    with open(txt_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace [x] with [ ]
    updated_content = content.replace('[x]', '[ ]')

    with open(txt_path, 'w', encoding='utf-8') as f_out:
        f_out.write(updated_content)
        
    print(f"Successfully unchecked all items.")

except Exception as e:
    print(f"Error unchecking items: {e}")
