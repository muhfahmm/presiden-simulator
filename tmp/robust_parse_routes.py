import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Tokenise into strings, symbols, numbers, and brackets.
# Standard structure:
# export const internationalRoutes = {
#   "Origin": {
#      "Destination": {
#         color: "...",
#         coords: [ { lon: X, lat: Y }, ... ]
#      }
#   }
# };

# Regex to find dictionary keys: `"Name": {` or `"Name":\s*\{`
# We can just iterate through tokens using a simple state machine.

# Let's simplify: split by non-alphanumeric/quote break points.
# But counting braces is better done line by line if structure allows, 
# or just character by character.

class RobustParser:
    def __init__(self, text):
        self.text = text
        self.idx = 0
        self.routes_data = {}
        
    def parse(self):
        # Find brace start
        start_idx = self.text.find('export const internationalRoutes')
        if start_idx == -1:
            print("Could not find internationalRoutes declaration.")
            return {}
        
        self.idx = self.text.find('{', start_idx) + 1
        return self._parse_obj()
        
    def _parse_obj(self):
        # We are inside a bracket {
        obj = {}
        while self.idx < len(self.text):
            self._skip_whitespace()
            if self.idx >= len(self.text): break
            
            # Check for closing bracket
            if self.text[self.idx] == '}':
                self.idx += 1
                return obj
                
            # Read Key
            key = self._read_key()
            self._skip_whitespace()
            
            # Expect colon :
            if self.idx < len(self.text) and self.text[self.idx] == ':':
                self.idx += 1
                self._skip_whitespace()
            else:
                # might be a short-hand or bug
                pass
                
            # Read Value
            val = self._read_value()
            if key:
                obj[key] = val
                
            self._skip_whitespace()
            if self.idx < len(self.text) and self.text[self.idx] == ',':
                 self.idx += 1
                 
        return obj

    def _read_key(self):
         self._skip_whitespace()
         if self.idx >= len(self.text): return None
         
         # key is usually quoted or unquoted
         if self.text[self.idx] == '"' or self.text[self.idx] == "'":
             quote = self.text[self.idx]
             self.idx += 1
             start = self.idx
             while self.idx < len(self.text) and self.text[self.idx] != quote:
                 self.idx += 1
             key = self.text[start:self.idx]
             self.idx += 1 # skip ending quote
             return key
         else:
             # Unquoted key (like `color`, `coords`)
             start = self.idx
             while self.idx < len(self.text) and self.text[self.idx].isalnum():
                 self.idx += 1
             key = self.text[start:self.idx]
             return key

    def _read_value(self):
         self._skip_whitespace()
         if self.idx >= len(self.text): return None
         
         char = self.text[self.idx]
         if char == '{':
             self.idx += 1
             return self._parse_obj()
         elif char == '[':
             self.idx += 1
             return self._parse_array()
         elif char == '"' or char == "'":
             quote = char
             self.idx += 1
             start = self.idx
             while self.idx < len(self.text) and self.text[self.idx] != quote:
                  self.idx += 1
             val = self.text[start:self.idx]
             self.idx += 1
             return val
         else:
             # Boolean or Number or literal
             start = self.idx
             while self.idx < len(self.text) and self.text[self.idx] not in [',', '}', ']']:
                 self.idx += 1
             val = self.text[start:self.idx].strip()
             return val

    def _parse_array(self):
         arr = []
         while self.idx < len(self.text):
             self._skip_whitespace()
             if self.idx >= len(self.text): break
             
             if self.text[self.idx] == ']':
                 self.idx += 1
                 return arr
                 
             val = self._read_value()
             if val is not None:
                 arr.append(val)
                 
             self._skip_whitespace()
             if self.idx < len(self.text) and self.text[self.idx] == ',':
                 self.idx += 1
         return arr

    def _skip_whitespace(self):
         # Skip space and comments
         while self.idx < len(self.text):
             char = self.text[self.idx]
             if char.isspace():
                 self.idx += 1
             elif char == '/' and self.idx + 1 < len(self.text) and self.text[self.idx+1] == '/':
                 # Line comment
                 while self.idx < len(self.text) and self.text[self.idx] != '\n':
                     self.idx += 1
             else:
                 break

parser = RobustParser(content)
routes_data = parser.parse()

with open(r"c:\fhm\EM4\tmp\parsed_routes_debug.txt", 'w', encoding='utf-8') as f:
    if "Kuwait" in routes_data:
        f.write("Kuwait routes found:\n")
        f.write(f"Destinations: {list(routes_data['Kuwait'].keys())}\n")
        
        for dest, data in routes_data["Kuwait"].items():
            f.write(f"\n--- {dest} ---\n")
            # data is dict with color and coords
            if 'coords' in data:
                 f.write(f"Coords Count: {len(data['coords'])}\n")
                 # coords is list of dicts { 'lon': X, 'lat': Y }
                 for c in data['coords']:
                      f.write(f"  {c}\n")

print("Done. Saved results.")
