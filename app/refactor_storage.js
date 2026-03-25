const fs = require('fs');
const path = require('path');

const basePath = 'c:/fhm/EM4/app/frontend-desktop/src/app/game';

// 1. Inject clear() into individual storages
const storageFiles = [
  { 
    file: 'components/navbar/stats/happines/happinessStorage.ts', 
    obj: 'happinessStorage', 
    replaceStr: '  clear: () => {\n    if (typeof window !== "undefined") {\n      localStorage.removeItem("em4_happiness_stats_v2");\n      localStorage.removeItem("em4_happiness_stats");\n      localStorage.removeItem("em4_last_month_budget");\n    }\n  },' 
  },
  { 
    file: 'components/ekonomi/8-pasar-domestik/priceStorage.ts', 
    obj: 'priceStorage', 
    replaceStr: '  clear: () => {\n    if (typeof window !== "undefined") localStorage.removeItem("em4_price_data_v3");\n  },' 
  },
  { 
    file: 'components/ekonomi/4-pemasukkanpengeluaran/pengeluaran/ExpenseStorage.ts', 
    obj: 'expenseStorage', 
    replaceStr: '  clear: () => {\n    if (typeof window !== "undefined") localStorage.removeItem("em4_expense_data");\n  },' 
  },
  { 
    file: 'components/ekonomi/4-pemasukkanpengeluaran/pemasukkan/IncomeStorage.ts', 
    obj: 'incomeStorage', 
    replaceStr: '  clear: () => {\n    if (typeof window !== "undefined") localStorage.removeItem("em4_income_data");\n  },' 
  },
  { 
    file: 'components/ekonomi/2-pajak/TaxStorage.ts', 
    obj: 'taxStorage', 
    replaceStr: '  clear: () => {\n    if (typeof window !== "undefined") localStorage.removeItem("game_taxes");\n  },' 
  },
  { 
    file: 'components/ekonomi/1-perdagangan/TradeStorage.ts', 
    obj: 'tradeStorage', 
    replaceStr: '  clear: () => {\n    if (typeof window !== "undefined") {\n      localStorage.removeItem("game_trades");\n      const countriesList = ["Indonesia", "Amerika Serikat", "Singapura", "Rusia", "Cina", "Arab Saudi"];\n      countriesList.forEach(c => localStorage.removeItem(`em4_trade_agreements_${c}`));\n    }\n  },' 
  },
  { 
    file: 'components/pembangunan/buildingStorage.ts', 
    obj: 'buildingStorage', 
    replaceStr: '  clear: () => {\n    if (typeof window !== "undefined") localStorage.removeItem("em4_building_data");\n  },' 
  },
  { 
    file: 'components/inbox/inboxStorage.ts', 
    obj: 'inboxStorage', 
    replaceStr: '  clear: () => {\n    if (typeof window !== "undefined") localStorage.removeItem("em4_inbox_data");\n  },' 
  },
  { 
    file: 'components/navbar/stats/budget/index.ts', 
    obj: 'budgetStorage', 
    replaceStr: '  clear: () => {\n    if (typeof window !== "undefined") localStorage.removeItem("em4_budget_data");\n  },' 
  }
];

storageFiles.forEach(sf => {
  const p = path.join(basePath, sf.file);
  if (!fs.existsSync(p)) return;
  let content = fs.readFileSync(p, 'utf-8');
  if (content.includes('clear: () =>')) {
    console.log(`Skipped ${sf.file} (already has clear)`);
    return;
  }
  const regex = new RegExp(`(export const ${sf.obj} = \\{\n|export const ${sf.obj} = \\{)`);
  if (regex.test(content)) {
    content = content.replace(regex, `$1${sf.replaceStr}\n`);
    fs.writeFileSync(p, content);
    console.log(`Injected clear() into ${sf.file}`);
  }
});

// 2. Rewrite gameStorage.ts to use these
const gsPath = path.join(basePath, 'gamestorage.ts');
let gsContent = fs.readFileSync(gsPath, 'utf-8');

const importsToAdd = `
import { happinessStorage } from "./components/navbar/stats/happines/happinessStorage";
import { priceStorage } from "./components/ekonomi/8-pasar-domestik/priceStorage";
import { expenseStorage } from "./components/ekonomi/4-pemasukkanpengeluaran/pengeluaran/ExpenseStorage";
import { incomeStorage } from "./components/ekonomi/4-pemasukkanpengeluaran/pemasukkan/IncomeStorage";
import { taxStorage } from "./components/ekonomi/2-pajak/TaxStorage";
import { tradeStorage } from "./components/ekonomi/1-perdagangan/TradeStorage";
import { buildingStorage } from "./components/pembangunan/buildingStorage";
import { inboxStorage } from "./components/inbox/inboxStorage";
import { budgetStorage } from "./components/navbar/stats/budget";
`;

if (!gsContent.includes('happinessStorage.clear')) {
    // add imports
    gsContent = importsToAdd + gsContent;

    const cleanupCode = `
    // Modular cleanup
    happinessStorage.clear();
    priceStorage.clear();
    expenseStorage.clear();
    incomeStorage.clear();
    taxStorage.clear();
    tradeStorage.clear();
    buildingStorage.clear();
    inboxStorage.clear();
    budgetStorage.clear();
    `;

    // Replace in saveSession
    gsContent = gsContent.replace(
        /localStorage\.removeItem\("em4_game_date"\);[\s\S]*?countriesList\.forEach[^\n]+;/m,
        'localStorage.removeItem("em4_game_date");\n' + cleanupCode
    );

    // Replace in clearSession
    gsContent = gsContent.replace(
        /localStorage\.removeItem\("em4_game_date"\);[\s\S]*?countries\.forEach[^\n]+;/m,
        'localStorage.removeItem("em4_game_date");\n' + cleanupCode
    );

    fs.writeFileSync(gsPath, gsContent);
    console.log('Refactored gameStorage.ts');
} else {
    console.log('gameStorage.ts already uses modular clears');
}
