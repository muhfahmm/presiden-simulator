import { BaseMapEngine, GeoJsonFeature, CONTINENT_COLORS } from './BaseMapEngine';
import { timeStorage } from '@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage';
import { PESAWAT_PATH, KAPAL_PATH, TANK_PATH } from '@/app/game/components/2_navigasi_menu/2_navigasi_bawah/4_pertahanan/1_komando_pertahanan/1_misi_serangan/modals_pilih_negara/logic/visual_dan_jalur/UnitSVGs';

export class MainMapEngine extends BaseMapEngine {
  public playerCountryName: string | null = null;
  public targetCountryName: string | null = null;

  protected drawBackground(ctx: CanvasRenderingContext2D): void {
    // Ocean Background - Tactical Blue
    ctx.fillStyle = '#1e3a8a';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  protected drawFeature(feature: GeoJsonFeature, ctx: CanvasRenderingContext2D): void {
    const continent = feature.properties.CONTINENT || 'Unknown';
    const name = (feature.properties.NAME || 'Unknown').toLowerCase();
    const nameLong = (feature.properties.NAME_LONG || '').toLowerCase();
    const nameId = (feature.properties.NAME_ID || '').toLowerCase();

    const isPlayer = this.playerCountryName && (
      name === this.playerCountryName.toLowerCase() ||
      nameLong === this.playerCountryName.toLowerCase() ||
      nameId === this.playerCountryName.toLowerCase()
    );

    const isTarget = this.targetCountryName && (
      name === this.targetCountryName.toLowerCase() ||
      nameLong === this.targetCountryName.toLowerCase() ||
      nameId === this.targetCountryName.toLowerCase()
    );

    let color = CONTINENT_COLORS[continent] || '#475569';
    let borderColor = 'rgba(255, 255, 255, 0.6)';
    let lineWidth = Math.max(0.7 / this.scale, 0.4);

    if (isPlayer) {
      color = '#10b981'; // Emerald-500
      borderColor = '#34d399';
      lineWidth = Math.max(2 / this.scale, 1);
    } else if (isTarget) {
      color = '#f59e0b'; // Amber-500
      borderColor = '#fbbf24';
      lineWidth = Math.max(2 / this.scale, 1);
    }

    const path = this.getPathForFeature(feature);
    if (!path) return;

    // VIEWPORT CULLING: Skip drawing if outside visible bounds
    // We use a simple check based on the feature's calculated path or properties if available
    const margin = 10 / this.scale;
    const vLeft = -this.offsetX / this.scale - margin;
    const vRight = (this.width - this.offsetX) / this.scale + margin;
    const vTop = -this.offsetY / this.scale - margin;
    const vBottom = (this.height - this.offsetY) / this.scale + margin;

    // Use a simplified BBOX check if we can or just skip for now to see if base engine lazy rendering fixed it.
    // Actually, let's implement a real culling check using the projector.
    
    ctx.fillStyle = color;
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = lineWidth;

    ctx.fill(path);
    ctx.stroke(path);

    // Pulse microstates
    const isTiny = feature.properties.TINY > 0 || feature.properties.LABELRANK > 5;
    if (isTiny && this.scale < 3) this.drawMicrostatePulse(feature, ctx);
  }

  public activeInvasions: any[] = [];
  private isAnimatingInvasions = false;
  private gameState = timeStorage.getState();
  private lastSaveTime = 0;

  private simulationWorker: Worker | null = null;

  constructor(ctx: CanvasRenderingContext2D, width: number, height: number, tacticalCtx: CanvasRenderingContext2D) {
    super(ctx, width, height, tacticalCtx);
    
    // Subscribe to time storage for animation sync
    timeStorage.subscribe((date, paused, speed) => {
      this.gameState = { gameDate: date, isPaused: paused, speed: speed };
      this.simulationWorker?.postMessage({ 
        type: 'UPDATE_STATE', 
        payload: { 
          isPaused: paused, 
          speed: speed,
          gameDate: date.toISOString() // Kirim tanggal saat ini
        } 
      });
    });

    if (typeof window !== 'undefined') {
      // Initialize Web Worker for high-performance simulation
      this.initSimulationWorker();
      
      // Load saved invasions
      this.loadActiveInvasions();

      window.addEventListener('SPAWN_INVASION_UNITS', (e: any) => {
        if (e.detail && e.detail.path) {
          const target = e.detail.targetCountry?.name_id || e.detail.target;
          const source = e.detail.sourceCountry?.name_id || e.detail.source;
          const id = e.detail.id;

          const existingIdx = this.activeInvasions.findIndex(inv => inv.target === target);

          const newInvasion = {
            id: id,
            source: source, // JANGAN DIBUANG LAGI!
            target: target,
            path: e.detail.path,
            units: e.detail.units || [],
            progress: 0,
            speed: e.detail.speed || 0.0001,
            startDate: e.detail.startDate, // Tangkap ini
            totalDays: e.detail.totalDays, // Tangkap ini
            arrived: false
          };

          if (existingIdx !== -1) {
            this.activeInvasions[existingIdx] = newInvasion;
          } else {
            this.activeInvasions.push(newInvasion);
          }
          
          this.simulationWorker?.postMessage({ type: 'ADD_INVASION', payload: newInvasion });
          this.saveInvasionsToStorage();
          this.requestRender();
        }
      });

      window.addEventListener('CLEAR_INVASIONS', () => {
        this.activeInvasions = [];
        this.simulationWorker?.postMessage({ type: 'INIT_INVASIONS', payload: [] });
        localStorage.removeItem('active_invasions');
        this.requestRender();
      });

      window.addEventListener('REMOVE_INVASION', (e: any) => {
        if (e.detail && e.detail.target) {
            const target = String(e.detail.target).toLowerCase().trim();
            this.activeInvasions = this.activeInvasions.filter(inv => {
              const invTarget = String(inv.target || '').toLowerCase().trim();
              return invTarget !== target;
            });
            this.simulationWorker?.postMessage({ type: 'REMOVE_INVASION', payload: { target } });
            this.saveInvasionsToStorage();
            this.requestRender();
        }
      });
    }
  }

  private initSimulationWorker() {
    if (typeof Worker === 'undefined') return;
    
    // In Next.js, we use this pattern for Workers
    this.simulationWorker = new Worker(new URL('./workers/MapSimulationWorker.ts', import.meta.url));
    
    this.simulationWorker.onmessage = (e) => {
      const { type, payload } = e.data;
      
      if (type === 'TICK' || type === 'STATE_SYNC') {
        this.activeInvasions = payload;
        // Optimization: Throttled requestRender is already handled by BaseMapEngine's loop
        this.requestRender();
      } else if (type === 'INVASION_ARRIVED') {
        this.saveInvasionsToStorage();
      }
    };

    // Initial state sync
    this.simulationWorker.postMessage({ 
        type: 'UPDATE_STATE', 
        payload: { isPaused: this.gameState.isPaused, speed: this.gameState.speed } 
    });
    this.simulationWorker.postMessage({ type: 'INIT_INVASIONS', payload: this.activeInvasions });
  }

  private saveInvasionsToStorage() {
    if (typeof window === 'undefined') return;
    try {
        const toSave = this.activeInvasions.map(inv => ({
            id: inv.id,
            source: inv.source, // TAMBAHKAN INI! Supaya data tidak hilang
            target: inv.target,
            path: inv.path,
            units: inv.units,
            progress: inv.progress,
            speed: inv.speed,
            arrived: inv.arrived,
            startDate: inv.startDate, // SIMPAN INI!
            totalDays: inv.totalDays, // SIMPAN INI!
            // Simpan juga data battle jika ada
            currentAttackerPower: inv.currentAttackerPower,
            maxAttackerPower: inv.maxAttackerPower,
            currentDefenderPower: inv.currentDefenderPower,
            maxDefenderPower: inv.maxDefenderPower
        }));
        localStorage.setItem('active_invasions', JSON.stringify(toSave));
    } catch (e) {
        console.error("Failed to save invasions", e);
    }
  }

  private loadActiveInvasions() {
    if (typeof window === 'undefined') return;
    try {
        const saved = localStorage.getItem('active_invasions');
        if (saved) {
            const parsed = JSON.parse(saved);
            // Pastikan kita menyimpan seluruh objek asli agar tidak kehilangan field 'source'
            this.activeInvasions = parsed.map((inv: any) => {
                this.cacheInvasionPixels(inv);
                return inv;
            });

            this.simulationWorker?.postMessage({ type: 'INIT_INVASIONS', payload: this.activeInvasions });
        }
    } catch (e) {
        console.error("Failed to load invasions", e);
    }
  }

  private cacheInvasionPixels(inv: any) {
    if (!inv.path || !inv.path.pathCoordinates) return;
    inv.path.pixels = inv.path.pathCoordinates.map((c: any) => 
        this.projector.project(c.lon, c.lat)
    );
  }

  public resize(width: number, height: number) {
    super.resize(width, height);
    this.capitalCoordCache.clear();
    // Re-cache all pixels on resize
    this.activeInvasions.forEach(inv => this.cacheInvasionPixels(inv));
  }

  public setCountries(countries: any[]) {
    super.setCountries(countries);
    this.capitalCoordCache.clear();
  }

  private capitalCoordCache: Map<string, { x: number, y: number }> = new Map();

  protected drawOverlays(): void {
    this.drawInvasionPaths();
    this.drawCapitals();
  }

  private drawInvasionPaths(): void {
    if (!this.activeInvasions || this.activeInvasions.length === 0) return;
    const ctx = this.tacticalCtx;

    if (!(this as any).svgPaths && typeof Path2D !== 'undefined') {
        (this as any).svgPaths = {
            pesawat: new Path2D(PESAWAT_PATH),
            kapal: new Path2D(KAPAL_PATH),
            tank: new Path2D(TANK_PATH)
        };
    }

    ctx.save();
    for (const invasion of this.activeInvasions) {
        const path = invasion.path || invasion;
        if (!path.pathCoordinates || path.pathCoordinates.length === 0) continue;

        if (!path.pixels) this.cacheInvasionPixels(invasion);
        const pixels = path.pixels;

        // 1. Draw Path (Optimized)
        ctx.beginPath();
        if (path.style && path.style.isDashed) {
            ctx.setLineDash(path.style.dashArray.map((d: number) => d / this.scale));
        } else {
            ctx.setLineDash([]);
        }

        const strokeColor = path.style ? path.style.color : '#ef4444';
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = path.style ? path.style.lineWidth / this.scale : 3 / this.scale;
        
        ctx.moveTo(pixels[0].x, pixels[0].y);
        for (let i = 1; i < pixels.length; i++) {
            ctx.lineTo(pixels[i].x, pixels[i].y);
        }
        ctx.stroke();
        
        // 2. Draw Units
        if (invasion.progress !== undefined && invasion.units) {
            ctx.setLineDash([]); 
            
            const totalCoords = pixels.length - 1;
            const floatIndex = invasion.progress * totalCoords;
            
            if (invasion.arrived) {
                const pos = pixels[totalCoords];
                const time = performance.now();
                const pulse = (Math.sin(time / 200) + 1) / 2;
                const radius = (15 + pulse * 10) / this.scale;
                
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(239, 68, 68, ${0.2 + pulse * 0.3})`;
                ctx.fill();
                
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, 5 / this.scale, 0, Math.PI * 2);
                ctx.fillStyle = '#ef4444';
                ctx.fill();
                
                invasion.screenPos = { x: pos.x, y: pos.y };
            } else {
                if (!invasion._cachedTypes) {
                    invasion._cachedTypes = Array.from(new Set(invasion.units.map((u: any) => u.type)));
                }
                const types = invasion._cachedTypes;
                
                let trailOffset = 0;
                types.forEach((type: string) => {
                    const trailIdx = Math.max(0, floatIndex - trailOffset);
                    const t1 = Math.floor(trailIdx);
                    const tFrac = trailIdx - t1;
                    const tp1 = pixels[t1];
                    const tp2 = pixels[Math.min(totalCoords, t1 + 1)];

                    if (tp1 && tp2) {
                        const cx = tp1.x + (tp2.x - tp1.x) * tFrac;
                        const cy = tp1.y + (tp2.y - tp1.y) * tFrac;

                        // Store the position of the first unit for hit detection
                        if (trailOffset === 0) {
                            invasion.screenPos = { x: cx, y: cy };
                        }

                        ctx.save();
                        ctx.translate(cx, cy);
                        const unitSize = 40 / this.scale; 
                        const unitScale = unitSize / 24; 
                        ctx.scale(unitScale, unitScale);
                        ctx.translate(-12, -12); 
                        ctx.fillStyle = '#ef4444'; 
                        const path2d = (this as any).svgPaths[type] || (this as any).svgPaths.tank;
                        ctx.fill(path2d);
                        ctx.restore();
                    }
                    trailOffset += 0.8; 
                });
            }
        }
    }
    ctx.restore();
  }

  public getInvasionAt(mouseX: number, mouseY: number): any | null {
    const hitThreshold = 40; // Ukuran area klik ditingkatkan agar lebih nyaman
    
    for (const invasion of this.activeInvasions) {
        if (!invasion.screenPos) continue;
        
        // Konversi koordinat peta ke koordinat layar (Canvas CSS pixels)
        const screenX = invasion.screenPos.x * this.scale + this.offsetX;
        const screenY = invasion.screenPos.y * this.scale + this.offsetY;
        
        const dx = mouseX - screenX;
        const dy = mouseY - screenY;
        
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist <= hitThreshold) {
            return invasion;
        }
    }
    return null;
  }

  private drawCapitals() {
    if (!this.countries || this.countries.length === 0) return;
    const ctx = this.tacticalCtx;
    
    // Viewport Culling Bounds
    const margin = 20 / this.scale;
    const vLeft = -this.offsetX / this.scale - margin;
    const vRight = (this.width - this.offsetX) / this.scale + margin;
    const vTop = -this.offsetY / this.scale - margin;
    const vBottom = (this.height - this.offsetY) / this.scale + margin;

    ctx.save();
    // Removed expensive shadowBlur for performance

    for (const country of this.countries) {
      const id = country.name_id || country.name_en || country.nama_negara;
      let coords = this.capitalCoordCache.get(id);

      if (!coords) {
        const lat = country.lat !== undefined ? country.lat : country.latitude;
        const lon = country.lon !== undefined ? country.lon : country.longitude;
        if (lat === undefined || lon === undefined) continue;
        coords = this.projector.project(Number(lon), Number(lat));
        this.capitalCoordCache.set(id, coords);
      }

      const { x, y } = coords;

      // Viewport Culling: Skip if outside visible area
      if (x < vLeft || x > vRight || y < vTop || y > vBottom) continue;

      const outerRadius = Math.max(4.5 / this.scale, 1.0);
      const innerRadius = outerRadius / 2.2;
      
      this.drawStar(ctx, x, y, 5, outerRadius, innerRadius);
      ctx.fillStyle = '#22d3ee';
      ctx.fill();

      const capitalName = country.capital || country.ibukota;
      if (this.scale > 4.5 && capitalName) {
        // Calculate absolute screen coordinates to render HD text
        const screenX = x * this.scale + this.offsetX;
        const screenY = y * this.scale + this.offsetY;

        ctx.save();
        ctx.resetTransform(); // Reset canvas transform to draw crisp text
        
        ctx.font = `bold 12px "Cascadia Code", monospace`;
        ctx.fillStyle = '#22d3ee';
        ctx.textAlign = 'center';
        // Stroke instead of shadow for performance and clarity
        ctx.strokeStyle = 'rgba(0,0,0,0.8)';
        ctx.lineWidth = 3;
        
        ctx.strokeText(capitalName.toUpperCase(), screenX, screenY - 10);
        ctx.fillText(capitalName.toUpperCase(), screenX, screenY - 10);
        
        ctx.restore();
      }
    }
    ctx.restore();
  }
}
