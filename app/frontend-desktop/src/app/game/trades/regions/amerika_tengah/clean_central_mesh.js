const fs = require('fs');
const path = require('path');

const routesMap = {
  'panama': { 
    'Costa Rica': ['Panama', 'Costa Rica'],
    'Kosta Rika': ['Panama', 'Costa Rica']
  },
  'kostarika': { 
    'Panama': ['Costa Rica', 'Panama'], 
    'Nicaragua': ['Costa Rica', 'Nicaragua'],
    'Nikaragua': ['Costa Rica', 'Nicaragua']
  },
  'nikaragua': { 
    'Costa Rica': ['Nicaragua', 'Costa Rica'], 
    'Kosta Rika': ['Nicaragua', 'Costa Rica'],
    'Honduras': ['Nicaragua', 'Honduras'] 
  },
  'honduras': { 
    'Nicaragua': ['Honduras', 'Nicaragua'], 
    'Nikaragua': ['Honduras', 'Nicaragua'],
    'El Salvador': ['Honduras', 'El Salvador'], 
    'Guatemala': ['Honduras', 'Guatemala'] 
  },
  'guatemala': { 
    'Honduras': ['Guatemala', 'Honduras'], 
    'Mexico': ['Guatemala', 'Mexico'], 
    'Meksiko': ['Guatemala', 'Mexico'], 
    'Belize': ['Guatemala', 'Belize'] 
  },
  'belize': { 
    'Guatemala': ['Belize', 'Guatemala'], 
    'Mexico': ['Belize', 'Mexico'],
    'Meksiko': ['Belize', 'Mexico']
  },
  'elsalvador': { 
    'Honduras': ['El Salvador', 'Honduras'] 
  },
  
  'republikdominika': { 
    'Haiti': ['Dominican Republic', 'Haiti'] 
  },
  'haiti': { 
    'Dominican Republic': ['Haiti', 'Dominican Republic'], 
    'Jamaica': ['Haiti', 'Jamaica'],
    'Jamaika': ['Haiti', 'Jamaica']
  },
  'jamaika': { 
    'Haiti': ['Jamaica', 'Haiti'], 
    'Cuba': ['Jamaica', 'Cuba'],
    'Kuba': ['Jamaica', 'Cuba']
  },
  'bahamas': { 
    'Steer Florida': ['Bahamas', 'Steer Florida'] 
  }
};

const dir = __dirname;
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (!file.endsWith('.ts') || file === '_index.ts' || file === '_steering.ts') return;

  const key = file.replace('.ts', '').toLowerCase();
  const allowed = routesMap[key];
  if (!allowed) return;

  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, 'utf-8');

  const routesMatch = content.match(/export const (\w+Routes) = (\{[\s\S]*?\});/);
  if (!routesMatch) return;

  const varName = routesMatch[1];
  const wpMatch = content.match(/export const (\w+Waypoints) = (\{[\s\S]*?\});/);

  const finalRoutes = JSON.stringify(allowed, null, 2);
  const wpText = wpMatch ? `export const ${wpMatch[1]} = ${wpMatch[2]};` : `export const ${varName.replace('Routes', 'Waypoints')} = {};`;

  const finalContent = `export const ${varName} = ${finalRoutes};\n\n${wpText}\n`;
  fs.writeFileSync(filePath, finalContent);
  console.log(`Successfully cleaned ${file}`);
});
LinePlaceholder: true
