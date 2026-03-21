import os
import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\select-country\page.tsx"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Insert State & Event Handlers
state_anchor = """  const [selectedCountry, setSelectedCountry] = useState("");
  const [isCentered, setIsCentered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [geoTab, setGeoTab] = useState<"overview" | "orgs" | "agreements">("overview");
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});"""

state_insert = """
  const [leftWidth, setLeftWidth] = useState(360);
  const [rightWidth, setRightWidth] = useState(360);

  const getGridCols = (w: number) => {
    if (w > 490) return "grid-cols-4";
    if (w > 420) return "grid-cols-3";
    return "grid-cols-2";
  };

  const startResizeLeft = (e: React.MouseEvent) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = leftWidth;
    const onMouseMove = (e: MouseEvent) => {
      const newWidth = Math.max(340, Math.min(600, startWidth + (e.clientX - startX)));
      setLeftWidth(newWidth);
    };
    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const startResizeRight = (e: React.MouseEvent) => {
    e.preventDefault();
    const startX = e.clientX;
    const startWidth = rightWidth;
    const onMouseMove = (e: MouseEvent) => {
      const newWidth = Math.max(340, Math.min(600, startWidth - (e.clientX - startX)));
      setRightWidth(newWidth);
    };
    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };"""

if state_anchor in content:
     content = content.replace(state_anchor, state_anchor + state_insert)
else:
     print("State anchor not found.")
     exit()

parts = content.split('{/* --- RIGHT SIDE PANELS --- */}')
if len(parts) != 2:
     print("Right side panel marker not found.")
     exit()

left_section = parts[0]
right_section = parts[1]

# 2. Update Left Panels containers
left_panel_regex = r'<div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 p-4 rounded-2xl shadow-2xl flex flex-col gap-4 w-\[360px\] pointer-events-auto">'
left_panel_replace = r'''<div style={{ width: `${leftWidth}px` }} className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 p-4 rounded-2xl shadow-2xl flex flex-col gap-4 pointer-events-auto relative group/panel">
            <div onMouseDown={startResizeLeft} className="absolute inset-y-0 -right-1 w-2 cursor-col-resize hover:bg-cyan-500/20 active:bg-cyan-400/40 transition-all z-30 flex items-center justify-center"><div className="w-0.5 h-8 bg-zinc-700/40 rounded-full group-hover/panel:bg-cyan-500/60" /></div>'''

left_section = re.sub(left_panel_regex, left_panel_replace, left_section)

# Replace all `grid-cols-2` inside left_section with dynamic class
# Match `className="grid grid-cols-2 [REST_OF_CLASSES]"`
left_section = re.sub(r'className="grid grid-cols-2\s+([^"]+)"', r'className={`grid ${getGridCols(leftWidth)} \1`}', left_section)

# 3. Update Right Panels containers
right_panel_regex = r'<div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 p-4 rounded-2xl shadow-2xl flex flex-col gap-4 w-\[360px\] pointer-events-auto">'
right_panel_replace = r'''<div style={{ width: `${rightWidth}px` }} className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 p-4 rounded-2xl shadow-2xl flex flex-col gap-4 pointer-events-auto relative group/panel">
            <div onMouseDown={startResizeRight} className="absolute inset-y-0 -left-1 w-2 cursor-col-resize hover:bg-cyan-500/20 active:bg-cyan-400/40 transition-all z-30 flex items-center justify-center"><div className="w-0.5 h-8 bg-zinc-700/40 rounded-full group-hover/panel:bg-cyan-500/60" /></div>'''

right_section = re.sub(right_panel_regex, right_panel_replace, right_section)
right_section = re.sub(r'className="grid grid-cols-2\s+([^"]+)"', r'className={`grid ${getGridCols(rightWidth)} \1`}', right_section)

# Combine back
new_content = left_section + '{/* --- RIGHT SIDE PANELS --- */}' + right_section

# 4. Fix Decimals for strength printouts
new_content = re.sub(r'\{currentData\.(\w+?)\.strength\}%', r'{Math.floor(currentData.\1.strength)}%', new_content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Applied side panels resizable layout & fixed decimals setup via regex successfully.")
