import os
import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\page.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update Imports
if 'ChevronLeft, ChevronRight,' in content:
     content = content.replace('ChevronLeft, ChevronRight,', 'ChevronLeft, ChevronRight, Eye, EyeOff,')
elif 'ChevronLeft, ChevronRight' in content:
     content = content.replace('ChevronLeft, ChevronRight', 'ChevronLeft, ChevronRight, Eye, EyeOff')

# 2. Insert States
state_anchor = "const [rightWidth, setRightWidth] = useState(360);"
state_insert = """
  const [isInfraOpen, setIsInfraOpen] = useState(true);
  const [isEconomyOpen, setIsEconomyOpen] = useState(true);
  const [isDefenseOpen, setIsDefenseOpen] = useState(true);
  const [isSocialOpen, setIsSocialOpen] = useState(true);"""

if state_anchor in content:
     content = content.replace(state_anchor, state_anchor + state_insert)

# 3. Split sections
parts = content.split('{/* --- RIGHT SIDE PANELS --- */}')
if len(parts) != 2:
     print("Right side panel marker not found.")
     exit()

left_section = parts[0]
right_section = parts[1]

# Panel 1: Infrastruktur
left_section = re.sub(
    r'<h3 className="text-xs font-black text-amber-500 uppercase tracking-\[0.2em\] mb-1">Infrastruktur & Logistik</h3>',
    r'''<h3 className="text-xs font-black text-amber-500 uppercase tracking-[0.2em] mb-1 flex items-center justify-between w-full">
              <span>Infrastruktur & Logistik</span>
              <button onClick={() => setIsInfraOpen(!isInfraOpen)} className="p-1 hover:bg-zinc-800 rounded-md cursor-pointer pointer-events-auto">
                {isInfraOpen ? <Eye size={12} className="text-amber-500"/> : <EyeOff size={12} className="text-zinc-500"/>}
              </button>
            </h3>''',
    left_section
)

left_section = left_section.replace(
    '<div className="flex flex-col gap-3 overflow-y-auto max-h-[400px] no-scrollbar pr-1">',
    '{isInfraOpen && (\n            <div className="flex flex-col gap-3 overflow-y-auto max-h-[400px] no-scrollbar pr-1">',
    1
)
left_section = left_section.replace(
    '</div>\n          </div>\n\n          {/* 2. Sektor Produksi & Ekonomi Detailed */}',
    '</div>\n            )}\n          </div>\n\n          {/* 2. Sektor Produksi & Ekonomi Detailed */}',
    1
)

# Panel 2: Ekonomi
left_section = re.sub(
    r'<h3 className="text-xs font-black text-emerald-500 uppercase tracking-\[0.2em\] mb-1">Produksi & Ekonomi Nasional</h3>',
    r'''<h3 className="text-xs font-black text-emerald-500 uppercase tracking-[0.2em] mb-1 flex items-center justify-between w-full">
              <span>Produksi & Ekonomi Nasional</span>
              <button onClick={() => setIsEconomyOpen(!isEconomyOpen)} className="p-1 hover:bg-zinc-800 rounded-md cursor-pointer pointer-events-auto">
                {isEconomyOpen ? <Eye size={12} className="text-emerald-500"/> : <EyeOff size={12} className="text-zinc-500"/>}
              </button>
            </h3>''',
    left_section
)

left_section = left_section.replace(
    '<div className="flex flex-col gap-4 overflow-y-auto max-h-[500px] no-scrollbar pr-1">',
    '{isEconomyOpen && (\n            <div className="flex flex-col gap-4 overflow-y-auto max-h-[500px] no-scrollbar pr-1">',
    1
)
# Closing ekonomi
left_section = left_section.replace(
    '</div>\n          </div>\n        </div>',
    '</div>\n            )}\n          </div>\n        </div>',
    1
)

# Panel 3: Pertahanan
right_section = re.sub(
    r'<h3 className="text-xs font-black text-red-500 uppercase tracking-\[0.2em\] mb-1">Pertahanan & Strategis</h3>',
    r'''<h3 className="text-xs font-black text-red-500 uppercase tracking-[0.2em] mb-1 flex items-center justify-between w-full">
              <span>Pertahanan & Strategis</span>
              <button onClick={() => setIsDefenseOpen(!isDefenseOpen)} className="p-1 hover:bg-zinc-800 rounded-md cursor-pointer pointer-events-auto">
                {isDefenseOpen ? <Eye size={12} className="text-red-500"/> : <EyeOff size={12} className="text-zinc-500"/>}
              </button>
            </h3>''',
    right_section
)

right_section = right_section.replace(
    '<div className="flex flex-col gap-4 overflow-y-auto max-h-[500px] no-scrollbar pr-1">',
    '{isDefenseOpen && (\n            <div className="flex flex-col gap-4 overflow-y-auto max-h-[500px] no-scrollbar pr-1">',
    1
)
right_section = right_section.replace(
    '</div>\n          </div>\n\n          {/* 4. Layanan Sosial & Publik Detailed */}',
    '</div>\n            )}\n          </div>\n\n          {/* 4. Layanan Sosial & Publik Detailed */}',
    1
)

# Panel 4: Sosial
right_section = re.sub(
    r'<h3 className="text-xs font-black text-cyan-500 uppercase tracking-\[0.2em\] mb-1">Layanan Sosial & Publik</h3>',
    r'''<h3 className="text-xs font-black text-cyan-500 uppercase tracking-[0.2em] mb-1 flex items-center justify-between w-full">
              <span>Layanan Sosial & Publik</span>
              <button onClick={() => setIsSocialOpen(!isSocialOpen)} className="p-1 hover:bg-zinc-800 rounded-md cursor-pointer pointer-events-auto">
                {isSocialOpen ? <Eye size={12} className="text-cyan-500"/> : <EyeOff size={12} className="text-zinc-500"/>}
              </button>
            </h3>''',
    right_section
)

right_section = right_section.replace(
    '<div className="flex flex-col gap-4 overflow-y-auto max-h-[500px] no-scrollbar pr-1">',
    '{isSocialOpen && (\n            <div className="flex flex-col gap-4 overflow-y-auto max-h-[500px] no-scrollbar pr-1">',
    1
)
right_section = right_section.replace(
    '</div>\n          </div>\n        </div>',
    '</div>\n            )}\n          </div>\n        </div>',
    1
)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(left_section + '{/* --- RIGHT SIDE PANELS --- */}' + right_section)

print("Applied side panels collapsible layout with precise replacement ranges.")
