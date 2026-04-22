import { BaseMapEngine, GeoJsonFeature, CONTINENT_COLORS } from './BaseMapEngine';
import { calculateTradeRoute, Point, getHubForCountry } from '@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/jalur_perdagangan/2_rute/tradeRoutes';
import { internationalHubs } from '@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/jalur_perdagangan/3_hub/hubs';
import { timeStorage } from '@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage';
import { tradeStorage } from '@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/TradeStorage';

export class TradeMapEngine extends BaseMapEngine {
  public playerCountryName: string | null = null;
  public targetCountryName: string | null = null;
  public activeTransactions: any[] = [];
  
  private txAccumulatedTime: Record<number, number> = {};
  private lastTimestamp: number = 0;
  private activeRoutesCache: Record<number, { pts: Point[], pixels: { x: number, y: number }[] }> = {};
  private gameState = timeStorage.getState();

  constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
    super(ctx, width, height);
    
    // Subscribe to time storage for animation sync
    timeStorage.subscribe((date, paused, speed) => {
      this.gameState = { gameDate: date, isPaused: paused, speed: speed };
      (this as any)._lastUpdateRealTime = performance.now(); // Track when date was updated
      this.requestRender(); 
    });
  }

  public setTransactions(transactions: any[]) {
    this.activeTransactions = transactions;
    this.requestRender();
  }

  protected drawBackground(): void {
    // Ocean Background - Tactical Blue (Standardized)
    this.ctx.fillStyle = '#1e3a8a';
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  protected drawFeature(feature: GeoJsonFeature): void {
    const continent = feature.properties.CONTINENT || 'Unknown';
    const name = (feature.properties.NAME || '').toLowerCase();
    
    const isPlayer = this.playerCountryName && name === this.playerCountryName.toLowerCase();
    const isTarget = this.targetCountryName && name === this.targetCountryName.toLowerCase();

    let baseColor = CONTINENT_COLORS[continent] || '#475569';
    let color = baseColor;
    let borderColor = 'rgba(255, 255, 255, 0.6)';
    let lineWidth = Math.max(0.7 / this.scale, 0.4);

    if (isPlayer) {
      color = '#10b981';
      borderColor = '#34d399';
      lineWidth = Math.max(2 / this.scale, 1);
    } else if (isTarget) {
      color = '#f59e0b';
      borderColor = '#fbbf24';
      lineWidth = Math.max(2 / this.scale, 1);
    }

    this.ctx.beginPath();
    this.ctx.fillStyle = color;
    this.ctx.strokeStyle = borderColor;
    this.ctx.lineWidth = lineWidth;

    const { type, coordinates } = feature.geometry;
    if (type === 'Polygon') this.drawPolygon(coordinates);
    else if (type === 'MultiPolygon') {
      for (const polygon of coordinates) this.drawPolygon(polygon);
    }

    this.ctx.fill();
    this.ctx.stroke();
  }



  protected drawOverlays(): void {
    // 1. Draw Hubs
    internationalHubs.forEach(h => {
      const { x, y } = this.projector.project(h.lon, h.lat);
      this.ctx.beginPath();
      this.ctx.arc(x, y, 3 / this.scale, 0, Math.PI * 2);
      this.ctx.fillStyle = h.fill || "#ffffff";
      this.ctx.fill();
    });

    // 2. Update time for animations
    const now = performance.now();
    const deltaTime = this.lastTimestamp === 0 ? 0 : now - this.lastTimestamp;
    this.lastTimestamp = now;

    // Handle Resize Invalidation (If projector dimensions don't match cache, clear it)
    // We can just check if width/height changed since last draw
    if ((this as any)._lastW !== this.width || (this as any)._lastH !== this.height) {
        this.activeRoutesCache = {};
        (this as any)._lastW = this.width;
        (this as any)._lastH = this.height;
    }

    if (!this.gameState.isPaused) {
      // Just request render if not paused to keep smoothedAngle moving towards target
      this.requestRender();
    }

    // 3. Draw Routes and Planes
    this.activeTransactions.forEach(tx => {
      if (!this.activeRoutesCache[tx.id]) {
        const sHub = getHubForCountry(tx.source), dHub = getHubForCountry(tx.dest);
        if (sHub && dHub) {
          const pts = calculateTradeRoute({ lon: sHub.lon, lat: sHub.lat }, { lon: dHub.lon, lat: dHub.lat });
          this.activeRoutesCache[tx.id] = { pts, pixels: pts.map(p => this.projector.project(p.lon, p.lat)) };
        }
      }

      const data = this.activeRoutesCache[tx.id];
      if (!data) return;

      // Draw Route Line
      this.ctx.beginPath();
      this.ctx.moveTo(data.pixels[0].x, data.pixels[0].y);
      for (let i = 1; i < data.pixels.length; i++) this.ctx.lineTo(data.pixels[i].x, data.pixels[i].y);
      this.ctx.lineWidth = 2 / this.scale;
      this.ctx.strokeStyle = tx.type === 'buy' ? "rgba(239, 68, 68, 0.3)" : "rgba(16, 185, 129, 0.3)";
      this.ctx.stroke();

      // --- HIGH PRECISION GAME-TIME SYNCHRONIZED ANIMATION ---
      const totalDays = Number(tx.totalDays) || 10;
      const MS_PER_DAY = 24 * 60 * 60 * 1000;
      const totalGameMs = totalDays * MS_PER_DAY;
      
      const parseSafe = (d: any) => {
        if (!d) return 0;
        const dt = new Date(d);
        if (!isNaN(dt.getTime())) return dt.getTime();
        if (typeof d === 'string' && d.includes('-')) {
          const p = d.split('-');
          if (p.length === 3) {
            const dt2 = new Date(`${p[2]}-${p[1]}-${p[0]}`); 
            if (!isNaN(dt2.getTime())) return dt2.getTime();
          }
        }
        return 0;
      };

      const gameStart = parseSafe(tx.startDate || tx.timestamp);
      const gameNow = this.gameState.gameDate.getTime();
      
      // Interpolation logic: 1 game day = ~12 seconds at 1x speed
      const GAME_MS_PER_REAL_MS = (MS_PER_DAY / 12000) * this.gameState.speed;
      const realTimeSinceUpdate = performance.now() - ((this as any)._lastUpdateRealTime || performance.now());
      const interpolation = this.gameState.isPaused ? 0 : (realTimeSinceUpdate * GAME_MS_PER_REAL_MS);

      const elapsedGameMs = (gameNow - gameStart) + interpolation;
      const rawProgress = Math.min(1, Math.max(0, elapsedGameMs / totalGameMs));
      
      // Apply Cubic Ease-Out for smooth landing
      const progress = 1 - Math.pow(1 - rawProgress, 3);
      
      if (rawProgress >= 1) {
        // Automatically cleanup finished transactions from storage
        // We use setTimeout to avoid state updates during render
        setTimeout(() => {
          tradeStorage.removeTransaction(tx.id);
        }, 100);
        return;
      }

      const { pixels } = data;
      
      // Calculate distances once if not present in cache
      if (!(data as any).lengths) {
        (data as any).lengths = [];
        (data as any).totalLen = 0;
        for (let i = 0; i < pixels.length - 1; i++) {
          const d = Math.sqrt(Math.pow(pixels[i+1].x - pixels[i].x, 2) + Math.pow(pixels[i+1].y - pixels[i].y, 2));
          (data as any).lengths.push(d);
          (data as any).totalLen += d;
        }
      }

      const totalLen = (data as any).totalLen;
      const targetDist = progress * totalLen;
      
      // Helper to get point and angle at distance
      const getPointAtDist = (d: number) => {
        let curDist = 0;
        for (let i = 0; i < (data as any).lengths.length; i++) {
          const segLen = (data as any).lengths[i];
          if (curDist + segLen >= d || i === (data as any).lengths.length - 1) {
            const ratio = segLen > 0 ? (d - curDist) / segLen : 0;
            const p1 = pixels[i], p2 = pixels[i+1];
            return {
              x: p1.x + (p2.x - p1.x) * ratio,
              y: p1.y + (p2.y - p1.y) * ratio,
              idx: i
            };
          }
          curDist += segLen;
        }
        return { x: pixels[pixels.length-1].x, y: pixels[pixels.length-1].y, idx: pixels.length-2 };
      };

      const pos = getPointAtDist(targetDist);
      
      // Calculate Angle using Tangent (look ahead)
      const lookAhead = 5; // Further lookahead for smoother tangent
      const posAhead = getPointAtDist(Math.min(totalLen, targetDist + lookAhead));
      const targetAngle = Math.atan2(posAhead.y - pos.y, posAhead.x - pos.x);

      // SMOOTH ROTATION (Inertia)
      if ((tx as any)._prevAngle === undefined) (tx as any)._prevAngle = targetAngle;
      
      let diff = targetAngle - (tx as any)._prevAngle;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      
      // Lerp factor normalized to 60fps (0.15 at 60fps)
      const frameRateFactor = deltaTime / (1000 / 60);
      const lerpFactor = Math.min(1, 0.15 * (frameRateFactor || 1)); 
      const smoothedAngle = (tx as any)._prevAngle + diff * lerpFactor;
      (tx as any)._prevAngle = smoothedAngle;

      this.ctx.save();
      this.ctx.translate(pos.x, pos.y);
      this.ctx.rotate(smoothedAngle);
      this.ctx.fillStyle = "#ffffff";
      
      // Add a subtle drop shadow for depth
      this.ctx.shadowBlur = 4 / this.scale;
      this.ctx.shadowColor = "rgba(0,0,0,0.5)";
      this.ctx.shadowOffsetY = 2 / this.scale;
      
      this.drawPlaneIcon();
      this.ctx.restore();
    });

    // Keep animating if not paused and there are active transactions
    if (!this.gameState.isPaused && this.activeTransactions.length > 0) {
      this.requestRender();
    }
  }

  private drawPlaneIcon() {
    const s = 1 / this.scale;
    this.ctx.beginPath();
    this.ctx.moveTo(8 * s, 0);
    this.ctx.lineTo(1 * s, -1.5 * s);
    this.ctx.lineTo(0, -6 * s);
    this.ctx.lineTo(-1.5 * s, -6 * s);
    this.ctx.lineTo(-1 * s, -1.5 * s);
    this.ctx.lineTo(-5 * s, -1.5 * s);
    this.ctx.lineTo(-6.5 * s, -3.5 * s);
    this.ctx.lineTo(-7 * s, -3.5 * s);
    this.ctx.lineTo(-7 * s, 3.5 * s);
    this.ctx.lineTo(-6.5 * s, 3.5 * s);
    this.ctx.lineTo(-5 * s, 1.5 * s);
    this.ctx.lineTo(-1 * s, 1.5 * s);
    this.ctx.lineTo(-1.5 * s, 6 * s);
    this.ctx.lineTo(0, 6 * s);
    this.ctx.lineTo(1 * s, 1.5 * s);
    this.ctx.closePath();
    this.ctx.fill();
  }
}
