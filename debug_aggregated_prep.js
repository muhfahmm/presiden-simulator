const fs = require('fs');
const path = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\game\\components\\ekonomi\\3-pemasukkanpengeluaran\\PemasukkanPengeluaranModal.tsx';

let content = fs.readFileSync(path, 'utf8');

// We will inject a console.log right after aggregated is filled!
const target = `aggregated[cat].push({
                                       name: metadata.label || metadata.name || key,
                                       count: count,
                                       maintenance: metadata.maintenanceCost || metadata.maintenance || 0
                                    });
                                 }
                              });
                           });`;

const replacement = `aggregated[cat].push({
                                       name: metadata.label || metadata.name || key,
                                       count: count,
                                       maintenance: metadata.maintenanceCost || metadata.maintenance || 0
                                    });
                                 }
                              });
                           });
                           console.log("DEBUG AGGREGATED KEYS:", Object.keys(aggregated));
                           if (aggregated["Ekstraksi"]) {
                              console.log("DEBUG EKSTRAKSI ITEMS:", aggregated["Ekstraksi"].map(i => i.name));
                           }`;

if (content.includes(target)) {
    console.log("Target found for debug injection");
    // Wait, running code in production requires full app runner! 
    // better to write a separate index.js mimicking absolute layout setup nodes lookup layouts!
} else {
    console.log("Target full injection failed");
}
