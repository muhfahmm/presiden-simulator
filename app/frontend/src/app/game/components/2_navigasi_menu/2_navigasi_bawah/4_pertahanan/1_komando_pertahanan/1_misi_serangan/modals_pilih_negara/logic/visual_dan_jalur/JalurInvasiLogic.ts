/**
 * Logika Jalur Invasi
 * Digunakan untuk menghitung jalur (path) dari negara asal (player) ke negara target,
 * mirip dengan jalur perdagangan (trade routes) yang sudah ada di game.
 */

interface Coordinates {
    lat: number;
    lon: number;
}

export interface JalurResult {
    pathCoordinates: Coordinates[];
    distance: number; // in km
    estimatedTime: string;
    style: {
        color: string;
        isDashed: boolean;
        dashArray: number[]; // e.g., [10, 5] for 10px line, 5px space
        lineWidth: number;
    };
}

// Fungsi Haversine untuk menghitung jarak
function calculateDistance(coord1: Coordinates, coord2: Coordinates): number {
    const R = 6371; // Radius bumi dalam km
    const dLat = (coord2.lat - coord1.lat) * Math.PI / 180;
    const dLon = (coord2.lon - coord1.lon) * Math.PI / 180;
    const lat1 = (coord1.lat) * Math.PI / 180;
    const lat2 = (coord2.lat) * Math.PI / 180;

    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    return R * c;
}

// Menghitung jalur melengkung (Bezier Curve / Arc) untuk visual peta 3D/2D
export const hitungJalurInvasi = (origin: Coordinates, target: Coordinates): JalurResult => {
    const distance = calculateDistance(origin, target);
    
    // Generate titik-titik untuk membuat garis lengkung di peta
    const pathCoordinates: Coordinates[] = [];
    const segments = 50; // Jumlah titik lengkungan

    for (let i = 0; i <= segments; i++) {
        const fraction = i / segments;
        
        // Interpolasi linear dasar
        const lat = origin.lat + (target.lat - origin.lat) * fraction;
        const lon = origin.lon + (target.lon - origin.lon) * fraction;
        
        // Tambahkan efek lengkungan (arc) di tengah jalur untuk efek realistis
        // Berfungsi membedakan jalur serangan dengan jalur lurus biasa
        const arcHeight = Math.sin(fraction * Math.PI) * (distance * 0.02); // 2% dari jarak
        
        pathCoordinates.push({
            lat: lat + arcHeight,
            lon: lon
        });
    }

    // Estimasi waktu tempuh taktis (Asumsi gabungan logistik: 500 km/jam)
    const hours = distance / 500;
    const estimatedTime = hours < 24 ? `${Math.round(hours)} Jam` : `${Math.round(hours / 24)} Hari`;

    return {
        pathCoordinates,
        distance: Math.round(distance),
        estimatedTime,
        style: {
            color: '#ef4444', // Merah muda/merah terang (Tailwind red-500)
            isDashed: true,
            dashArray: [15, 10], // Panjang garis 15px, jarak kosong 10px
            lineWidth: 3
        }
    };
};
