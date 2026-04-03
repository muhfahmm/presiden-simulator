// warMap.cpp - High-Performance Map Rendering Engine (C++ / WebAssembly)
// Menyempurnakan CanvasMapWar.ts dengan kalkulasi rendering berat di-offload ke WASM.
// Menangani: Frustum Culling Grid, LOD Terrain, Tile Visibility, Overlay Compositing.

#include <vector>
#include <cmath>
#include <algorithm>

constexpr float THEATER_LIMIT = 15000.0f;
constexpr float SEA_LEVEL_Y = -6000.0f;
constexpr int   BIOME_GRID_SIZE = 2500;
constexpr int   TILE_SIZE = 500;
constexpr int   GRID_DIM = static_cast<int>((THEATER_LIMIT * 2) / TILE_SIZE);

struct Vec2 { float x, y; };
struct Camera { float x, y, zoom; };
struct ViewportBounds { float worldStartX, worldStartY, worldEndX, worldEndY; };

struct TileInfo {
    int col, row;
    float worldX, worldY;
    int biomeIndex;
    float elevation;
    bool isSea, isCoastal;
    int lodLevel;
};

struct BiomeBlob {
    float centerX, centerY, radius;
    int biomeIndex;
    float alpha;
};

struct InfluenceOverlay {
    int col, row;
    float value, alpha;
};

struct BoundaryLine {
    float startX, startY, endX, endY;
    float lineWidth;
    bool isDashed;
    float dashLen, gapLen;
};

// Sinkron dengan getSeed() di CanvasMapWar.ts
inline float getSeed(float x, float y) {
    float h = std::sin(x * 12.9898f + y * 78.233f) * 43758.5453f;
    return h - std::floor(h);
}

class WarMapEngine {
    bool m_hasSea;
public:
    WarMapEngine(bool hasSea = false) : m_hasSea(hasSea) {}

    ViewportBounds calcBounds(const Camera& cam, float w, float h) const {
        ViewportBounds b;
        b.worldStartX = -cam.x / cam.zoom;
        b.worldStartY = -cam.y / cam.zoom;
        b.worldEndX = b.worldStartX + w / cam.zoom;
        b.worldEndY = b.worldStartY + h / cam.zoom;
        return b;
    }

    // Frustum Tile Culling + LOD: hanya tile terlihat yang dikembalikan
    std::vector<TileInfo> getVisibleTiles(const Camera& cam, float vpW, float vpH) {
        auto vp = calcBounds(cam, vpW, vpH);
        std::vector<TileInfo> vis;

        int cS = std::max(0, (int)((vp.worldStartX + THEATER_LIMIT) / TILE_SIZE) - 1);
        int cE = std::min(GRID_DIM - 1, (int)((vp.worldEndX + THEATER_LIMIT) / TILE_SIZE) + 1);
        int rS = std::max(0, (int)((vp.worldStartY + THEATER_LIMIT) / TILE_SIZE) - 1);
        int rE = std::min(GRID_DIM - 1, (int)((vp.worldEndY + THEATER_LIMIT) / TILE_SIZE) + 1);

        int count = (cE - cS + 1) * (rE - rS + 1);
        int step = count > 2000 ? 4 : (count > 800 ? 2 : 1);
        float vcx = (vp.worldStartX + vp.worldEndX) / 2.0f;
        float vcy = (vp.worldStartY + vp.worldEndY) / 2.0f;

        for (int r = rS; r <= rE; r += step) {
            for (int c = cS; c <= cE; c += step) {
                TileInfo t;
                t.col = c; t.row = r;
                t.worldX = c * TILE_SIZE - THEATER_LIMIT;
                t.worldY = r * TILE_SIZE - THEATER_LIMIT;
                t.biomeIndex = (int)(getSeed(t.worldX, t.worldY) * 4) % 4;
                t.elevation = getSeed(t.worldX * 0.001f, t.worldY * 0.001f) * 100.0f;
                t.isSea = m_hasSea && (t.worldY < SEA_LEVEL_Y);
                t.isCoastal = m_hasSea && (t.worldY >= SEA_LEVEL_Y - 800 && t.worldY <= SEA_LEVEL_Y + 800);

                float dx = t.worldX + TILE_SIZE / 2.0f - vcx;
                float dy = t.worldY + TILE_SIZE / 2.0f - vcy;
                float dist = std::sqrt(dx * dx + dy * dy);
                t.lodLevel = dist < 3000 ? 0 : (dist < 6000 ? 1 : (dist < 10000 ? 2 : 3));

                vis.push_back(t);
            }
        }
        return vis;
    }

    // Pre-compute biome blobs (identik dgn loop di CanvasMapWar.ts)
    std::vector<BiomeBlob> genBiomeBlobs(const ViewportBounds& vp) const {
        std::vector<BiomeBlob> blobs;
        float landY = m_hasSea ? SEA_LEVEL_Y : -THEATER_LIMIT;
        for (float gx = -THEATER_LIMIT; gx < THEATER_LIMIT; gx += BIOME_GRID_SIZE) {
            for (float gy = landY; gy < THEATER_LIMIT; gy += BIOME_GRID_SIZE) {
                if (gx + BIOME_GRID_SIZE < vp.worldStartX || gx > vp.worldEndX ||
                    gy + BIOME_GRID_SIZE < vp.worldStartY || gy > vp.worldEndY) continue;
                int biome = (int)(getSeed(gx, gy) * 4) % 4;
                for (int i = 0; i < 3; i++) {
                    BiomeBlob b;
                    b.centerX = gx + getSeed(gx + i, gy) * BIOME_GRID_SIZE;
                    b.centerY = gy + getSeed(gx, gy + i) * BIOME_GRID_SIZE;
                    b.radius = m_hasSea ? (600 + getSeed(b.centerX, b.centerY) * 1200)
                                        : (700 + getSeed(b.centerX, b.centerY) * 1400);
                    b.biomeIndex = biome;
                    b.alpha = 0.4f;
                    blobs.push_back(b);
                }
            }
        }
        return blobs;
    }

    // Influence overlay mapper: konversi grid Python ke format Canvas GPU
    std::vector<InfluenceOverlay> mapInfluence(
        const std::vector<std::vector<float>>& grid, const ViewportBounds& vp
    ) const {
        std::vector<InfluenceOverlay> ov;
        int rows = (int)grid.size();
        if (rows == 0) return ov;
        int cols = (int)grid[0].size();
        float cell = (THEATER_LIMIT * 2.0f) / cols;
        int cS = std::max(0, (int)((vp.worldStartX + THEATER_LIMIT) / cell) - 1);
        int cE = std::min(cols - 1, (int)((vp.worldEndX + THEATER_LIMIT) / cell) + 1);
        int rS = std::max(0, (int)((vp.worldStartY + THEATER_LIMIT) / cell) - 1);
        int rE = std::min(rows - 1, (int)((vp.worldEndY + THEATER_LIMIT) / cell) + 1);
        for (int r = rS; r <= rE; r++) {
            for (int c = cS; c <= cE; c++) {
                float v = grid[r][c];
                if (std::abs(v) < 1.0f) continue;
                ov.push_back({ c, r, v, std::min(0.35f, std::max(0.05f, std::abs(v) / 100.0f)) });
            }
        }
        return ov;
    }

    // Boundary lines calculator sinkron dgn CanvasMapWar.ts
    std::vector<BoundaryLine> calcBoundaries(float zoom) const {
        std::vector<BoundaryLine> lines;
        float lw = 10.0f / zoom;
        lines.push_back({-THEATER_LIMIT, -THEATER_LIMIT, THEATER_LIMIT, -THEATER_LIMIT, lw, false, 0, 0});
        lines.push_back({-THEATER_LIMIT, THEATER_LIMIT, THEATER_LIMIT, THEATER_LIMIT, lw, false, 0, 0});
        lines.push_back({-THEATER_LIMIT, -THEATER_LIMIT, -THEATER_LIMIT, THEATER_LIMIT, lw, false, 0, 0});
        lines.push_back({THEATER_LIMIT, -THEATER_LIMIT, THEATER_LIMIT, THEATER_LIMIT, lw, false, 0, 0});
        lines.push_back({0, -THEATER_LIMIT, 0, THEATER_LIMIT, 4.0f/zoom, true, 100.0f/zoom, 60.0f/zoom});
        if (m_hasSea)
            lines.push_back({-THEATER_LIMIT, SEA_LEVEL_Y, THEATER_LIMIT, SEA_LEVEL_Y, 20.0f/zoom, false, 0, 0});
        return lines;
    }
};


// ============================================================
// 3D MESH PROJECTOR (Potential Field Surface Renderer)
//    Projects 3D grid vertices (x, y, z) to 2D canvas (sx, sy).
//    Computes color gradient: Blue(-) → White(0) → Red(+).
//    Ref: potential field surface mesh + topographic contour overlay.
// ============================================================

struct MeshVertex {
    float worldX, worldY;  // grid position in world space
    float z;               // potential height
    float screenX, screenY; // projected 2D
    float r, g, b, a;      // RGBA color
};

struct MeshEdge {
    int fromIdx, toIdx;
    float alpha;
};

class MeshProjector {
    int m_gridRes;
    float m_cellSize;
    float m_zScale;       // How much Z height affects visual displacement
    float m_perspective;  // Oblique projection angle factor

public:
    MeshProjector(int gridRes = 60, float zScale = 3.0f, float perspective = 0.35f)
        : m_gridRes(gridRes)
        , m_cellSize((THEATER_LIMIT * 2.0f) / gridRes)
        , m_zScale(zScale)
        , m_perspective(perspective) {}

    /**
     * Project a single world+Z point to 2D screen coords.
     * Uses oblique projection: screenY is displaced upward by Z * scale.
     * This creates the "3D surface" illusion on a 2D Canvas.
     */
    void project(float worldX, float worldY, float z,
                 float camX, float camY, float camZoom,
                 float& outSX, float& outSY) const {
        // Z displacement (higher Z → screen goes upward)
        float zOffset = z * m_zScale * m_perspective;
        
        // Standard camera transform (sinkron dgn gameplay.tsx)
        outSX = worldX * camZoom + camX;
        outSY = (worldY - zOffset) * camZoom + camY;
    }

    /**
     * Compute RGBA color based on Z height.
     * Negative Z → Blue (Enemy valley)
     * Zero Z → White (Neutral flat)
     * Positive Z → Red (User peak)
     */
    void zToColor(float z, float zMin, float zMax,
                  float& r, float& g, float& b, float& a) const {
        float range = std::max(0.01f, std::max(std::abs(zMin), std::abs(zMax)));
        float t = z / range; // normalized to [-1, 1]
        t = std::max(-1.0f, std::min(1.0f, t));
        
        if (t > 0.0f) {
            // Positive: White → Red (user peak)
            r = 1.0f;
            g = 1.0f - t * 0.8f;
            b = 1.0f - t * 0.9f;
        } else {
            // Negative: White → Blue (enemy valley)
            float nt = -t;
            r = 1.0f - nt * 0.9f;
            g = 1.0f - nt * 0.7f;
            b = 1.0f;
        }
        
        // Alpha: stronger at extremes, faint at center
        a = 0.15f + 0.6f * std::abs(t);
    }

    /**
     * Generate all mesh vertices for the current potential field.
     * Input: flat Z array [gridRes*gridRes] from Rust/Python.
     * Output: projected vertices with colors.
     */
    std::vector<MeshVertex> generateMeshVertices(
        const std::vector<float>& zData,
        float camX, float camY, float camZoom,
        float zMin, float zMax
    ) const {
        std::vector<MeshVertex> verts;
        int total = m_gridRes * m_gridRes;
        if ((int)zData.size() < total) return verts;
        verts.reserve(total);

        for (int r = 0; r < m_gridRes; r++) {
            for (int c = 0; c < m_gridRes; c++) {
                MeshVertex v;
                v.worldX = -THEATER_LIMIT + (c + 0.5f) * m_cellSize;
                v.worldY = -THEATER_LIMIT + (r + 0.5f) * m_cellSize;
                v.z = zData[r * m_gridRes + c];
                
                project(v.worldX, v.worldY, v.z, camX, camY, camZoom,
                        v.screenX, v.screenY);
                
                zToColor(v.z, zMin, zMax, v.r, v.g, v.b, v.a);
                
                verts.push_back(v);
            }
        }
        return verts;
    }

    /**
     * Generate mesh edges (horizontal + vertical grid lines).
     * Only includes edges within viewport for performance.
     */
    std::vector<MeshEdge> generateMeshEdges(
        const ViewportBounds& vp, int step = 1
    ) const {
        std::vector<MeshEdge> edges;
        
        for (int r = 0; r < m_gridRes; r += step) {
            for (int c = 0; c < m_gridRes - 1; c += step) {
                // Horizontal edge: (r,c) → (r,c+step)
                int nextC = std::min(c + step, m_gridRes - 1);
                edges.push_back({ r * m_gridRes + c, r * m_gridRes + nextC, 0.4f });
            }
        }
        for (int c = 0; c < m_gridRes; c += step) {
            for (int r = 0; r < m_gridRes - 1; r += step) {
                // Vertical edge: (r,c) → (r+step,c)
                int nextR = std::min(r + step, m_gridRes - 1);
                edges.push_back({ r * m_gridRes + c, nextR * m_gridRes + c, 0.4f });
            }
        }
        return edges;
    }

    int gridRes() const { return m_gridRes; }
    float cellSize() const { return m_cellSize; }
};


// WASM Export Interface
extern "C" {
    static WarMapEngine* g_engine = nullptr;
    static MeshProjector* g_projector = nullptr;

    void warmap_init(bool hasSea) {
        delete g_engine; g_engine = new WarMapEngine(hasSea);
        delete g_projector; g_projector = new MeshProjector(60, 3.0f, 0.35f);
    }
    int warmap_visible_count(float cx, float cy, float z, float w, float h) {
        if (!g_engine) return 0;
        return (int)g_engine->getVisibleTiles({cx, cy, z}, w, h).size();
    }
    int warmap_mesh_grid_res() {
        return g_projector ? g_projector->gridRes() : 0;
    }
    void warmap_cleanup() {
        delete g_engine; g_engine = nullptr;
        delete g_projector; g_projector = nullptr;
    }
}

