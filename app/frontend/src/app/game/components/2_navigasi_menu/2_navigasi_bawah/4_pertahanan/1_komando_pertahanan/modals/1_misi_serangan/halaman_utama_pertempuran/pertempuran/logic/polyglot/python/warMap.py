# warMap.py - Strategic Map Intelligence & Influence Heatmap Processor
# Menyempurnakan CanvasMapWar.ts dengan data analisa AI untuk overlay peta taktis.
# Exposed via REST/gRPC → TSX mengkonsumsi data ini untuk menggambar heatmap di Canvas.

import math
from typing import List, Dict, Tuple, Optional


# ============================================================
# CONSTANTS - Sinkronisasi dengan CanvasMapWar.ts (THEATER_LIMIT)
# ============================================================
THEATER_LIMIT = 15000
GRID_RESOLUTION = 500      # Setiap sel heatmap berukuran 500x500 unit dunia
SEA_LEVEL_Y = -6000         # Garis pantai (sinkron dengan CanvasMapWar.ts)
INFLUENCE_RADIUS = 2000     # Radius pengaruh maksimum sebuah unit
INFLUENCE_DECAY = 0.002     # Decay rate pengaruh per unit jarak


class WarMapIntelligence:
    """
    Modul AI untuk menghasilkan data overlay peta perang:
    1. Influence Heatmap (Zone of Control / ZoC)
    2. Fog of War Grid
    3. Strategic Chokepoint Detection
    4. Territory Dominance Percentage

    TSX CanvasMapWar.ts menggambar terrain biome dan boundary,
    sedangkan modul ini menyediakan DATA OVERLAY yang digambar di atasnya.
    """

    def __init__(self, has_sea: bool = False):
        self.has_sea = has_sea
        self.grid_cols = int((THEATER_LIMIT * 2) / GRID_RESOLUTION)
        self.grid_rows = int((THEATER_LIMIT * 2) / GRID_RESOLUTION)
        self.influence_grid: List[List[float]] = []
        self.fog_of_war_grid: List[List[bool]] = []
        self._initialize_grids()

    def _initialize_grids(self):
        """Inisialisasi grid kosong untuk influence dan fog of war."""
        self.influence_grid = [
            [0.0 for _ in range(self.grid_cols)]
            for _ in range(self.grid_rows)
        ]
        self.fog_of_war_grid = [
            [True for _ in range(self.grid_cols)]  # True = tersembunyi (fog)
            for _ in range(self.grid_rows)
        ]

    def _world_to_grid(self, world_x: float, world_y: float) -> Tuple[int, int]:
        """Konversi koordinat dunia [-15000,15000] ke indeks grid [0, grid_size]."""
        col = int((world_x + THEATER_LIMIT) / GRID_RESOLUTION)
        row = int((world_y + THEATER_LIMIT) / GRID_RESOLUTION)
        col = max(0, min(self.grid_cols - 1, col))
        row = max(0, min(self.grid_rows - 1, row))
        return row, col

    def _grid_to_world(self, row: int, col: int) -> Tuple[float, float]:
        """Konversi indeks grid ke koordinat pusat sel di dunia."""
        world_x = (col * GRID_RESOLUTION) - THEATER_LIMIT + (GRID_RESOLUTION / 2)
        world_y = (row * GRID_RESOLUTION) - THEATER_LIMIT + (GRID_RESOLUTION / 2)
        return world_x, world_y

    # ===========================================================
    # 1. INFLUENCE HEATMAP (Zone of Control)
    #    Menghasilkan matriks pengaruh: positif = user dominan, negatif = enemy dominan.
    #    TSX menerjemahkan ini menjadi overlay warna gradien di atas Canvas.
    # ===========================================================
    def calculate_influence_heatmap(self, units: List[Dict]) -> List[List[float]]:
        """
        Menghitung influence map berdasarkan posisi semua unit aktif.

        Args:
            units: List[Dict] dengan format:
                   { 'id': str, 'side': 'user'|'enemy', 'pos': {'x': float, 'y': float},
                     'type': str, 'influence': float }

        Returns:
            Grid 2D [rows][cols] dengan nilai float:
            - Positif (+) = dominasi user (merah)
            - Negatif (-) = dominasi enemy (abu-abu)
            - Nol (0) = zona netral (contested)
        """
        # Reset grid sebelum kalkulasi
        self.influence_grid = [
            [0.0 for _ in range(self.grid_cols)]
            for _ in range(self.grid_rows)
        ]

        for unit in units:
            side_multiplier = 1.0 if unit['side'] == 'user' else -1.0
            unit_influence = unit.get('influence', 50.0)
            ux, uy = unit['pos']['x'], unit['pos']['y']

            # Hitung batas pengaruh dalam grid coords
            min_row, min_col = self._world_to_grid(
                ux - INFLUENCE_RADIUS, uy - INFLUENCE_RADIUS
            )
            max_row, max_col = self._world_to_grid(
                ux + INFLUENCE_RADIUS, uy + INFLUENCE_RADIUS
            )

            for r in range(min_row, max_row + 1):
                for c in range(min_col, max_col + 1):
                    cell_x, cell_y = self._grid_to_world(r, c)
                    dist = math.sqrt((cell_x - ux) ** 2 + (cell_y - uy) ** 2)

                    if dist > INFLUENCE_RADIUS:
                        continue

                    # Inverse-square falloff (sinkron dengan polyglot-router.ts calculateInfluenceAt)
                    impact = side_multiplier * (unit_influence / (1 + (dist * INFLUENCE_DECAY) ** 2))

                    # Bonus terrain: unit di zona laut (has_sea) mendapat modifier
                    if self.has_sea and cell_y < SEA_LEVEL_Y:
                        unit_type = unit.get('type', '').lower()
                        if 'kapal' in unit_type or 'destroyer' in unit_type or 'selam' in unit_type:
                            impact *= 1.3  # Bonus naval dominance
                        else:
                            impact *= 0.5  # Penalti non-naval di laut

                    self.influence_grid[r][c] += impact

        return self.influence_grid

    # ===========================================================
    # 2. FOG OF WAR PROCESSOR
    #    Menentukan sel mana yang terlihat oleh user berdasarkan jarak pandang unit.
    #    TSX menggunakan data ini untuk menggambar overlay gelap di Canvas.
    # ===========================================================
    def update_fog_of_war(self, user_units: List[Dict], sight_range: float = 1500.0) -> List[List[bool]]:
        """
        Memperbarui fog of war grid berdasarkan posisi unit pemain.
        Sel yang berada dalam jarak pandang unit user akan terungkap (False).

        Args:
            user_units: Hanya unit milik 'user'
            sight_range: Radius visibilitas (default 1500 unit dunia)

        Returns:
            Grid 2D [rows][cols] dengan boolean:
            - True = tertutup kabut (fog, gelap)
            - False = terlihat (cleared, terang)
        """
        # Reset seluruh fog
        self.fog_of_war_grid = [
            [True for _ in range(self.grid_cols)]
            for _ in range(self.grid_rows)
        ]

        for unit in user_units:
            ux, uy = unit['pos']['x'], unit['pos']['y']

            # Hitung unit type visibility modifier
            unit_type = unit.get('type', '').lower()
            effective_range = sight_range

            # UAV dan drone memiliki penglihatan yang lebih luas
            if 'uav' in unit_type or 'intai' in unit_type or 'drone' in unit_type:
                effective_range *= 2.0
            # Kapal selam memiliki penglihatan terbatas
            elif 'selam' in unit_type:
                effective_range *= 0.6

            min_row, min_col = self._world_to_grid(ux - effective_range, uy - effective_range)
            max_row, max_col = self._world_to_grid(ux + effective_range, uy + effective_range)

            for r in range(min_row, max_row + 1):
                for c in range(min_col, max_col + 1):
                    cell_x, cell_y = self._grid_to_world(r, c)
                    dist = math.sqrt((cell_x - ux) ** 2 + (cell_y - uy) ** 2)

                    if dist <= effective_range:
                        self.fog_of_war_grid[r][c] = False

        return self.fog_of_war_grid

    # ===========================================================
    # 3. STRATEGIC CHOKEPOINT & OBJECTIVE DETECTOR
    #    Mendeteksi titik-titik strategis berdasarkan topologi influence.
    # ===========================================================
    def detect_strategic_zones(self, influence_grid: Optional[List[List[float]]] = None) -> List[Dict]:
        """
        Menganalisa influence grid untuk menemukan:
        - Chokepoints: zona sempit di mana kedua belah pihak hampir seimbang (contested)
        - Strongholds: zona di mana satu pihak mendominasi secara absolut
        - Frontlines: garis batas antara zona user dan enemy

        Returns:
            List of strategic zone dicts:
            { 'type': 'chokepoint'|'stronghold'|'frontline',
              'world_x': float, 'world_y': float,
              'intensity': float, 'side': 'user'|'enemy'|'contested' }
        """
        grid = influence_grid or self.influence_grid
        zones: List[Dict] = []

        CONTESTED_THRESHOLD = 5.0    # Jika abs(influence) < threshold → contested
        STRONGHOLD_THRESHOLD = 50.0  # Jika abs(influence) > threshold → stronghold

        for r in range(1, self.grid_rows - 1):
            for c in range(1, self.grid_cols - 1):
                val = grid[r][c]
                world_x, world_y = self._grid_to_world(r, c)

                # Deteksi Frontline: perubahan tanda antara sel bertetangga
                neighbors = [grid[r-1][c], grid[r+1][c], grid[r][c-1], grid[r][c+1]]
                sign_changes = sum(1 for n in neighbors if (n > 0) != (val > 0) and abs(n) > 1.0)

                if sign_changes >= 2:
                    zones.append({
                        'type': 'frontline',
                        'world_x': world_x,
                        'world_y': world_y,
                        'intensity': abs(val),
                        'side': 'contested'
                    })

                # Deteksi Chokepoint: contested zone yang dikelilingi high-influence
                elif abs(val) < CONTESTED_THRESHOLD:
                    neighbor_intensity = sum(abs(n) for n in neighbors) / 4
                    if neighbor_intensity > STRONGHOLD_THRESHOLD * 0.5:
                        zones.append({
                            'type': 'chokepoint',
                            'world_x': world_x,
                            'world_y': world_y,
                            'intensity': neighbor_intensity,
                            'side': 'contested'
                        })

                # Deteksi Stronghold: dominasi absolut
                elif abs(val) > STRONGHOLD_THRESHOLD:
                    zones.append({
                        'type': 'stronghold',
                        'world_x': world_x,
                        'world_y': world_y,
                        'intensity': abs(val),
                        'side': 'user' if val > 0 else 'enemy'
                    })

        return zones

    # ===========================================================
    # 4. TERRITORY DOMINANCE CALCULATOR
    #    Menghitung persentase wilayah yang dikuasai masing-masing pihak.
    #    TSX menampilkan ini sebagai progress bar di UI.
    # ===========================================================
    def calculate_territory_dominance(self, influence_grid: Optional[List[List[float]]] = None) -> Dict:
        """
        Menghitung persentase penguasaan wilayah secara keseluruhan.

        Returns:
            {
                'user_percent': float,       # Persentase wilayah user
                'enemy_percent': float,      # Persentase wilayah musuh
                'contested_percent': float,  # Persentase wilayah diperebutkan
                'total_cells': int,
                'user_cells': int,
                'enemy_cells': int,
                'contested_cells': int
            }
        """
        grid = influence_grid or self.influence_grid
        total_cells = 0
        user_cells = 0
        enemy_cells = 0
        contested_cells = 0

        for r in range(self.grid_rows):
            for c in range(self.grid_cols):
                # Skip sel laut jika has_sea (wilayah laut tidak dihitung dominasi)
                if self.has_sea:
                    _, world_y = self._grid_to_world(r, c)
                    if world_y < SEA_LEVEL_Y:
                        continue

                total_cells += 1
                val = grid[r][c]

                if val > 3.0:
                    user_cells += 1
                elif val < -3.0:
                    enemy_cells += 1
                else:
                    contested_cells += 1

        total = max(total_cells, 1)  # Hindari division by zero

        return {
            'user_percent': round((user_cells / total) * 100, 2),
            'enemy_percent': round((enemy_cells / total) * 100, 2),
            'contested_percent': round((contested_cells / total) * 100, 2),
            'total_cells': total_cells,
            'user_cells': user_cells,
            'enemy_cells': enemy_cells,
            'contested_cells': contested_cells
        }


# ============================================================
# 6. POTENTIAL FIELD MESH GENERATOR (3D Terrain Surface)
#    Menghasilkan grid ketinggian Z berdasarkan "gaya" (Force)
#    dari setiap unit: User → Puncak (+), Enemy → Lembah (-).
#    Gambar referensi: potential field surface mesh.
# ============================================================
class PotentialFieldProcessor:
    """
    Menghitung Potential Field (medan gaya) untuk visualisasi 3D mesh.
    
    Setiap unit memancarkan "gaya" Gaussian:
      Z(x,y) = Σ  side * amplitude * exp(−dist² / (2σ²))
    
    Hasilnya berupa grid [rows][cols] dari float Z-values.
    TSX menggambar ini sebagai wireframe mesh isometrik.
    """

    def __init__(self, grid_res: int = 60, sigma: float = 2500.0):
        self.grid_res = grid_res
        self.sigma = sigma
        self.cell_size = (THEATER_LIMIT * 2) / grid_res
        self.z_grid: List[List[float]] = []

    def calculate_potential_field(self, units: List[Dict]) -> List[List[float]]:
        """
        Menghitung medan potensial untuk semua unit.
        Returns: Grid 2D [grid_res][grid_res] float (+ = user peak, - = enemy valley)
        """
        self.z_grid = [
            [0.0 for _ in range(self.grid_res)]
            for _ in range(self.grid_res)
        ]

        sigma_sq_2 = 2.0 * (self.sigma ** 2)

        for unit in units:
            side = 1.0 if unit['side'] == 'user' else -1.0
            amplitude = unit.get('influence', 50.0) * side
            ux, uy = unit['pos']['x'], unit['pos']['y']

            for r in range(self.grid_res):
                wy = -THEATER_LIMIT + (r + 0.5) * self.cell_size
                dy_sq = (wy - uy) ** 2
                if dy_sq > (self.sigma * 4) ** 2:
                    continue

                for c in range(self.grid_res):
                    wx = -THEATER_LIMIT + (c + 0.5) * self.cell_size
                    dx_sq = (wx - ux) ** 2
                    dist_sq = dx_sq + dy_sq
                    z_contribution = amplitude * math.exp(-dist_sq / sigma_sq_2)
                    self.z_grid[r][c] += z_contribution

        return self.z_grid

    def get_contour_levels(self, num_levels: int = 8) -> List[float]:
        """Mengembalikan level iso-kontur yang merata antara Z_min dan Z_max."""
        if not self.z_grid:
            return []
        z_min = min(min(row) for row in self.z_grid)
        z_max = max(max(row) for row in self.z_grid)
        if abs(z_max - z_min) < 0.1:
            return [0.0]
        step = (z_max - z_min) / (num_levels + 1)
        return [z_min + step * (i + 1) for i in range(num_levels)]

    def get_z_range(self) -> Tuple[float, float]:
        """Mengembalikan Z_min dan Z_max untuk normalisasi warna di frontend."""
        if not self.z_grid:
            return (0.0, 0.0)
        z_min = min(min(row) for row in self.z_grid)
        z_max = max(max(row) for row in self.z_grid)
        return (z_min, z_max)


# ============================================================
# SINGLETON INSTANCES (Digunakan oleh REST endpoint)
# ============================================================
war_map_intelligence = WarMapIntelligence(has_sea=False)
potential_field = PotentialFieldProcessor(grid_res=60, sigma=2500.0)


# ============================================================
# CLI TEST ENTRY POINT
# ============================================================
if __name__ == "__main__":
    print("[WarMap:Python] Initializing Strategic Map Intelligence Engine...")

    test_units = [
        {'id': 'u1', 'side': 'user', 'pos': {'x': 2000, 'y': 3000}, 'type': 'tank_tempur', 'influence': 80},
        {'id': 'u2', 'side': 'user', 'pos': {'x': 3000, 'y': 2500}, 'type': 'artileri', 'influence': 60},
        {'id': 'u3', 'side': 'user', 'pos': {'x': -1000, 'y': -8000}, 'type': 'kapal_destroyer', 'influence': 70},
        {'id': 'e1', 'side': 'enemy', 'pos': {'x': -3000, 'y': -2000}, 'type': 'tank_tempur', 'influence': 75},
        {'id': 'e2', 'side': 'enemy', 'pos': {'x': -4000, 'y': -3500}, 'type': 'sam', 'influence': 50},
    ]

    engine = WarMapIntelligence(has_sea=True)

    influence = engine.calculate_influence_heatmap(test_units)
    print(f"  ✓ Influence grid computed: {len(influence)}x{len(influence[0])} cells")

    user_units = [u for u in test_units if u['side'] == 'user']
    fog = engine.update_fog_of_war(user_units)
    visible_cells = sum(1 for row in fog for cell in row if not cell)
    print(f"  ✓ Fog of War updated: {visible_cells} cells revealed")

    zones = engine.detect_strategic_zones()
    zone_types = {}
    for z in zones:
        zone_types[z['type']] = zone_types.get(z['type'], 0) + 1
    print(f"  ✓ Strategic zones detected: {zone_types}")

    dominance = engine.calculate_territory_dominance()
    print(f"  ✓ Territory: User {dominance['user_percent']}% | Enemy {dominance['enemy_percent']}% | Contested {dominance['contested_percent']}%")

    # 5. Potential Field
    pf = PotentialFieldProcessor(grid_res=30, sigma=2000.0)
    z_grid = pf.calculate_potential_field(test_units)
    z_min, z_max = pf.get_z_range()
    print(f"  ✓ Potential Field computed: {len(z_grid)}x{len(z_grid[0])} | Z range: [{z_min:.2f}, {z_max:.2f}]")

    contours = pf.get_contour_levels(6)
    print(f"  ✓ Contour levels: {[f'{c:.2f}' for c in contours]}")

    print("[WarMap:Python] Engine ready. Awaiting TSX Canvas mesh requests.")

