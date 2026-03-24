const fs = require('fs');
const path = 'c:\\fhm\\EM4\\app\\frontend-desktop\\src\\app\\game\\components\\ekonomi\\3-pemasukkanpengeluaran\\PemasukkanPengeluaranModal.tsx';

let content = fs.readFileSync(path, 'utf8');
const lines = content.split('\n');

const sIdx = lines.findIndex(l => l.trim().includes('.sector_defense?.military_fleet?.udara'));

if (sIdx !== -1) {
    console.log("Found target insert bound at index:", sIdx);
    lines[sIdx] = `                                 ...(initialCountry as any).sector_defense?.military_fleet?.udara,`;
    lines.splice(sIdx+1, 0, 
`                                 ...(initialCountry as any).sector_social?.law?.police_fleet?.patroli_lantas,`,
`                                 ...(initialCountry as any).sector_social?.law?.police_fleet?.taktis_khusus,`,
`                                 ...(initialCountry as any).sector_social?.law?.police_fleet?.pusat_komando,`
    );
    fs.writeFileSync(path, lines.join('\n'), 'utf8');
    console.log('Update success');
} else {
    console.log('Target line anchor fail');
}
