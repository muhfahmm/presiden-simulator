import re

file_path = r"c:\fhm\EM4\app\frontend-desktop\src\app\game\trades\international\routes.ts"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

class RobustParser:
    def __init__(self, text):
        self.text = text
        self.idx = 0
        self.log = []
        
    def parse(self):
        start_idx = self.text.find('export const internationalRoutes')
        if start_idx == -1:
             self.log.append("Could not find internationalRoutes")
             return {}
        
        self.idx = self.text.find('{', start_idx) + 1
        self.log.append(f"Found structure, starting index: {self.idx}")
        return self._parse_obj()
        
    def _parse_obj(self):
        obj = {}
        while self.idx < len(self.text):
            self._skip_whitespace()
            if self.idx >= len(self.text): break
            
            if self.text[self.idx] == '}':
                self.idx += 1
                return obj
                
            key = self._read_key()
            self._skip_whitespace()
            
            if self.idx < len(self.text) and self.text[self.idx] == ':':
                self.idx += 1
                self._skip_whitespace()
                
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
         
         if self.text[self.idx] == '"' or self.text[self.idx] == "'":
             quote = self.text[self.idx]
             self.idx += 1
             start = self.idx
             while self.idx < len(self.text) and self.text[self.idx] != quote:
                 self.idx += 1
             key = self.text[start:self.idx]
             self.idx += 1 
             return key
         else:
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
         while self.idx < len(self.text):
             char = self.text[self.idx]
             if char.isspace():
                 self.idx += 1
             elif char == '/' and self.idx + 1 < len(self.text) and self.text[self.idx+1] == '/':
                 while self.idx < len(self.text) and self.text[self.idx] != '\n':
                     self.idx += 1
             else:
                 break

parser = RobustParser(content)
routes_data = parser.parse()

with open(r"c:\fhm\EM4\tmp\parsed_routes_debug_v2.txt", 'w', encoding='utf-8') as f:
    f.write(f"Parser Logs:\n")
    for log_item in parser.log:
         f.write(f"{log_item}\n")
    f.write(f"\nTop level keys: {list(routes_data.keys())}\n")

print("Done. Saved results.")
