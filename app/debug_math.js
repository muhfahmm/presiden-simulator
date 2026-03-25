const fs = require('fs');
const path = require('path');

// Mock data based on Indonesia.ts
const indonesiaTaxes = {
    vat: { rate: 27, satisfaction: 67, revenue: 532 },
    corporate: { rate: 15, satisfaction: 52, revenue: 220 },
    income: { rate: 34, satisfaction: 61, revenue: 1159 },
    customs: { rate: 40, satisfaction: 86, revenue: 1343 },
    environment: { rate: 29, satisfaction: 88, revenue: 1060 },
    transit_allied: { rate: 5, satisfaction: 85, revenue: 70 },
    transit_non_allied: { rate: 15, satisfaction: 75, revenue: 208 },
    other: { rate: 19, satisfaction: 93, revenue: 724 }
};

const domesticTaxes = [
  { key: "vat" },
  { key: "corporate" },
  { key: "income" },
  { key: "environment" },
  { key: "other" }
];

// Test case 1: Initial state
let managedTaxes = JSON.parse(JSON.stringify(indonesiaTaxes));
let avgSat1 = domesticTaxes.reduce((sum, item) => sum + (managedTaxes[item.key]?.satisfaction || 50), 0) / domesticTaxes.length;
let impact1 = avgSat1 >= 50 ? ((avgSat1 - 50) / 50) * 5 : ((avgSat1 - 50) / 50) * 10;

// Test case 2: One tax slid to 100
managedTaxes.vat.satisfaction = 100;
let avgSat2 = domesticTaxes.reduce((sum, item) => sum + (managedTaxes[item.key]?.satisfaction || 50), 0) / domesticTaxes.length;
let impact2 = avgSat2 >= 50 ? ((avgSat2 - 50) / 50) * 5 : ((avgSat2 - 50) / 50) * 10;

// Test case 3: ALL taxes slid to 100
managedTaxes.corporate.satisfaction = 100;
managedTaxes.income.satisfaction = 100;
managedTaxes.environment.satisfaction = 100;
managedTaxes.other.satisfaction = 100;
let avgSat3 = domesticTaxes.reduce((sum, item) => sum + (managedTaxes[item.key]?.satisfaction || 50), 0) / domesticTaxes.length;
let impact3 = avgSat3 >= 50 ? ((avgSat3 - 50) / 50) * 5 : ((avgSat3 - 50) / 50) * 10;

// Test case 4: What if managedTaxes has no satisfaction fields?
let emptyTaxes = {
    vat: { rate: 27, revenue: 532 },
    corporate: { rate: 15, revenue: 220 },
    income: { rate: 34, revenue: 1159 }
};
let avgSat4 = domesticTaxes.reduce((sum, item) => sum + (emptyTaxes[item.key]?.satisfaction || 50), 0) / domesticTaxes.length;
let impact4 = avgSat4 >= 50 ? ((avgSat4 - 50) / 50) * 5 : ((avgSat4 - 50) / 50) * 10;

console.log(JSON.stringify({
  initial: impact1.toFixed(1),
  oneTaxMax: impact2.toFixed(1),
  allTaxMax: impact3.toFixed(1),
  missingFields: impact4.toFixed(1)
}, null, 2));
