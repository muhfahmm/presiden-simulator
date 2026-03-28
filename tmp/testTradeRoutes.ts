import { calculateTradeRoute, SHIPPING_WAYPOINTS } from '../app/frontend/src/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/jalur_perdagangan/2_rute/TradeRoutes';

const testRoutes = [
  { start: { lon: 106.82, lat: -6.17 }, end: { lon: -0.12, lat: 51.50 }, name: "Jakarta to London" },
  { start: { lon: 106.82, lat: -6.17 }, end: { lon: -74, lat: 40.71 }, name: "Jakarta to New York" },
];

testRoutes.forEach(r => {
  console.log(`Route for ${r.name}:`);
  const path = calculateTradeRoute(r.start, r.end);
  path.forEach((p, i) => console.log(`  Step ${i}: ${p.name} (${p.lon}, ${p.lat})`));
});
