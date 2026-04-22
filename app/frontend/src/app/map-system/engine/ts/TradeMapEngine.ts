import { BaseMapEngine, GeoJsonFeature, CONTINENT_COLORS } from './BaseMapEngine';
import { calculateTradeRoute, Point, getHubForCountry } from '@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/jalur_perdagangan/2_rute/tradeRoutes';
import { internationalHubs } from '@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/jalur_perdagangan/3_hub/hubs';
import { timeStorage } from '@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage';

export class TradeMapEngine extends BaseMapEngine {
  public playerCountryName: string | null = null;
  public targetCountryName: string | null = null;
  public activeTransactions: any[] = [];
  
  private txAccumulatedTime: Record<number, number> = {};
  private lastTimestamp: number = Date.now();
  private activeRoutesCache: Record<number, { pts: Point[], pixels: { x: number, y: number }[] }> = {};
  private gameState = timeStorage.getState();

  constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
    super(ctx, width, height);
    
    // Subscribe to time storage for animation sync
    timeStorage.subscribe((date, paused, speed) => {
      this.gameState = { gameDate: date, isPaused: paused, speed: speed };
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
    const now = Date.now();
    const deltaTime = now - this.lastTimestamp;
    this.lastTimestamp = now;

    if (!this.gameState.isPaused) {
      this.activeTransactions.forEach(tx => {
        const current = this.txAccumulatedTime[tx.id] || 0;
        this.txAccumulatedTime[tx.id] = current + (deltaTime * this.gameState.speed);
      });
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

      // --- NEW SMOOTH ANIMATION LOGIC ---
      const duration = 45000; // 45 seconds total flight at 1x speed
      const elapsed = this.txAccumulatedTime[tx.id] || 0;
      const progress = Math.min(1, Math.max(0, elapsed / duration));
      
      if (elapsed >= duration) {
        delete this.txAccumulatedTime[tx.id];
        return;
      }

      const { pixels } = data;
      
      // 1. Calculate distances for constant speed movement
      let segmentDistances: number[] = [];
      let totalDistance = 0;
      for (let i = 0; i < pixels.length - 1; i++) {
        const d = Math.sqrt(Math.pow(pixels[i+1].x - pixels[i].x, 2) + Math.pow(pixels[i+1].y - pixels[i].y, 2));
        segmentDistances.push(d);
        totalDistance += d;
      }

      // 2. Find current position based on total distance progress
      const targetDistance = progress * totalDistance;
      let currentDistance = 0;
      let curSeg = 0;
      
      for (let i = 0; i < segmentDistances.length; i++) {
        if (currentDistance + segmentDistances[i] >= targetDistance) {
          curSeg = i;
          break;
        }
        currentDistance += segmentDistances[i];
      }

      const segProg = segmentDistances[curSeg] > 0 
        ? (targetDistance - currentDistance) / segmentDistances[curSeg]
        : 0;

      const p1 = pixels[curSeg], p2 = pixels[curSeg + 1];
      const curX = p1.x + (p2.x - p1.x) * segProg;
      const curY = p1.y + (p2.y - p1.y) * segProg;

      // 3. Smooth Rotation Interpolation
      // We look at the current segment angle and the next one (if exists)
      const currentAngle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
      let targetAngle = currentAngle;

      // If we are nearing the end of the segment, start rotating towards the next segment
      const ROTATION_SMOOTH_THRESHOLD = 0.8; // Start turning at 80% of segment
      if (segProg > ROTATION_SMOOTH_THRESHOLD && curSeg < segmentDistances.length - 1) {
        const p3 = pixels[curSeg + 2];
        const nextAngle = Math.atan2(p3.y - p2.y, p3.x - p2.x);
        
        // Find shortest path between angles
        let diff = nextAngle - currentAngle;
        while (diff > Math.PI) diff -= Math.PI * 2;
        while (diff < -Math.PI) diff += Math.PI * 2;
        
        const rotationProg = (segProg - ROTATION_SMOOTH_THRESHOLD) / (1 - ROTATION_SMOOTH_THRESHOLD);
        targetAngle = currentAngle + diff * rotationProg;
      }

      this.ctx.save();
      this.ctx.translate(curX, curY);
      this.ctx.rotate(targetAngle);
      this.ctx.fillStyle = "#ffffff";
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
