import os

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\page.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Panel 1: Infrastruktur #
# From: {isInfraOpen && (\n            <div className="flex flex-col gap-3 overflow-y-auto max-h-[400px] no-scrollbar pr-1">
# To: <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isInfraOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0 pointer-events-none"}`}> \n <div className="... pr-1">
content = content.replace(
    '{isInfraOpen && (\n            <div className="flex flex-col gap-3 overflow-y-auto max-h-[400px] no-scrollbar pr-1">',
    '''<div className={`transition-all duration-300 ease-in-out overflow-hidden ${isInfraOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0 pointer-events-none"}`}>
            <div className="flex flex-col gap-3 overflow-y-auto max-h-[400px] no-scrollbar pr-1">'''
)
# Closing wrapper
content = content.replace(
    '</div>\n            )}\n          </div>\n\n          {/* 2. Sektor Produksi & Ekonomi Detailed */}',
    '</div>\n            </div>\n          </div>\n\n          {/* 2. Sektor Produksi & Ekonomi Detailed */}'
)

# 2. Panel 2: Ekonomi #
content = content.replace(
    '{isEconomyOpen && (\n            <div className="flex flex-col gap-4 overflow-y-auto max-h-[500px] no-scrollbar pr-1">',
    '''<div className={`transition-all duration-300 ease-in-out overflow-hidden ${isEconomyOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0 pointer-events-none"}`}>
            <div className="flex flex-col gap-4 overflow-y-auto max-h-[500px] no-scrollbar pr-1">'''
)
# Closing wrapper
content = content.replace(
    '</div>\n            )}\n          </div>\n        </div>\n\n        {/* --- RIGHT SIDE PANELS --- */}',
    '</div>\n            </div>\n          </div>\n        </div>\n\n        {/* --- RIGHT SIDE PANELS --- */}'
)

# 3. Panel 3: Pertahanan #
content = content.replace(
    '{isDefenseOpen && (\n            <div className="flex flex-col gap-4 overflow-y-auto max-h-[500px] no-scrollbar pr-1">',
    '''<div className={`transition-all duration-300 ease-in-out overflow-hidden ${isDefenseOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0 pointer-events-none"}`}>
            <div className="flex flex-col gap-4 overflow-y-auto max-h-[500px] no-scrollbar pr-1">'''
)
content = content.replace(
    '</div>\n            )}\n          </div>\n\n          {/* 4. Layanan Sosial & Publik Detailed */}',
    '</div>\n            </div>\n          </div>\n\n          {/* 4. Layanan Sosial & Publik Detailed */}'
)

# 4. Panel 4: Sosial #
content = content.replace(
    '{isSocialOpen && (\n            <div className="flex flex-col gap-4 overflow-y-auto max-h-[500px] no-scrollbar pr-1">',
    '''<div className={`transition-all duration-300 ease-in-out overflow-hidden ${isSocialOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0 pointer-events-none"}`}>
            <div className="flex flex-col gap-4 overflow-y-auto max-h-[500px] no-scrollbar pr-1">'''
)
content = content.replace(
    '</div>\n            )}\n          </div>\n        </div>',
    '</div>\n            </div>\n          </div>\n        </div>'
)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Applied panel transitions successfully across all 4 headers.")
