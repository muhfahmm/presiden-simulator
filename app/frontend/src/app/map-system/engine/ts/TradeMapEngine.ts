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

  constructor(ctx: CanvasRenderingContext2D, width: number, height: number, tacticalCtx: CanvasRenderingContext2D) {
    super(ctx, width, height, tacticalCtx);
    
    // Subscribe to time storage for animation sync
    timeStorage.subscribe((date, paused, speed) => {
      const oldDate = this.gameState.gameDate;
      this.gameState = { gameDate: date, isPaused: paused, speed: speed };
      
      const now = performance.now();
      const prevUpdate = (this as any)._lastUpdateRealTime;
      
      if (oldDate && date.getTime() !== oldDate.getTime() && prevUpdate) {
        // Measure how long it actually took for the game clock to advance
        const realDelta = now - prevUpdate;
        const gameDelta = date.getTime() - oldDate.getTime();
        const daysAdvanced = gameDelta / (24 * 60 * 60 * 1000);
        
        if (daysAdvanced > 0 && speed > 0) {
          // Estimate real-time ms per 1 game day at 1x speed
          const estimate = (realDelta / daysAdvanced) * speed;
          if (estimate > 1000 && estimate < 60000) {
            (this as any)._realMsPerDay = estimate;
          }
        }
      }

      (this as any)._lastUpdateRealTime = now;
      this.requestRender(); 
    });
  }

  public clear() {
    this.activeTransactions = [];
    this.activeRoutesCache = {};
    this.requestRender();
  }

  public setTransactions(transactions: any[]) {
    this.activeTransactions = transactions;
    if (transactions.length === 0) {
      this.clear();
    }
    this.requestRender();
  }

  protected drawBackground(ctx: CanvasRenderingContext2D): void {
    // Ocean Background - Tactical Blue (Standardized)
    ctx.fillStyle = '#1e3a8a';
    ctx.fillRect(0, 0, this.width, this.height);
  }

  protected drawFeature(feature: GeoJsonFeature, ctx: CanvasRenderingContext2D): void {
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

    const path = this.getPathForFeature(feature);
    if (!path) return;

    ctx.fillStyle = color;
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = lineWidth;

    ctx.fill(path);
    ctx.stroke(path);
  }

  protected drawOverlays(): void {
    const ctx = this.tacticalCtx;
    
    // 1. Draw Hubs
    internationalHubs.forEach(h => {
      const { x, y } = this.projector.project(h.lon, h.lat);
      ctx.beginPath();
      ctx.arc(x, y, 3 / this.scale, 0, Math.PI * 2);
      ctx.fillStyle = h.fill || "#ffffff";
      ctx.fill();
    });

    // 2. Update time for animations
    const now = performance.now();
    const deltaTime = this.lastTimestamp === 0 ? 0 : now - this.lastTimestamp;
    this.lastTimestamp = now;

    if ((this as any)._lastW !== this.width || (this as any)._lastH !== this.height) {
        this.activeRoutesCache = {};
        (this as any)._lastW = this.width;
        (this as any)._lastH = this.height;
    }

    if (!this.gameState.isPaused) {
      this.requestRender();
    }

    // 3. Draw Routes and Planes
    const parseSafe = (d: any) => {
      if (!d) return 0;
      const dt = new Date(d);
      if (!isNaN(dt.getTime())) {
        dt.setHours(0, 0, 0, 0);
        return dt.getTime();
      }
      return 0;
    };

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
      ctx.beginPath();
      ctx.moveTo(data.pixels[0].x, data.pixels[0].y);
      for (let i = 1; i < data.pixels.length; i++) ctx.lineTo(data.pixels[i].x, data.pixels[i].y);
      ctx.lineWidth = 2 / this.scale;
      ctx.strokeStyle = tx.type === 'buy' ? "rgba(239, 68, 68, 0.3)" : "rgba(16, 185, 129, 0.3)";
      ctx.stroke();

      // Physics/Animation
      const totalDays = Number(tx.totalDays) || 10;
      const MS_PER_DAY = 24 * 60 * 60 * 1000;
      const totalGameMs = totalDays * MS_PER_DAY;
      
      const gameStart = parseSafe(tx.startDate || tx.timestamp);
      const gameNowDt = new Date(this.gameState.gameDate);
      gameNowDt.setHours(0, 0, 0, 0);
      const gameNow = gameNowDt.getTime();
      
      const targetProgress = Math.min(1, Math.max(0, (gameNow - gameStart) / totalGameMs));
      if ((tx as any)._visualProgress === undefined) {
        (tx as any)._visualProgress = targetProgress;
      }

      const diff = targetProgress - ((tx as any)._visualProgress || 0);

      if (!this.gameState.isPaused) {
        const frameRateFactor = (deltaTime || 16.6) / 16.6;
        const dayInRealMs = 12000; 
        const nominalVelocity = ((deltaTime || 16.6) / dayInRealMs) * (1 / totalDays) * this.gameState.speed;
        (tx as any)._visualProgress += nominalVelocity;
        
        const threshold = (1 / totalDays) * 0.1; 
        if (Math.abs(diff) > threshold) {
          (tx as any)._visualProgress += diff * 0.02 * frameRateFactor;
        }
      } else if (diff < -0.1) {
        (tx as any)._visualProgress = targetProgress;
      }

      const progress = Math.min(1, Math.max(0, (tx as any)._visualProgress));
      
      if (progress >= 1 && !(tx as any)._cleanupRequested) {
        (tx as any)._cleanupRequested = true;
        setTimeout(() => {
          tradeStorage.removeTransaction(tx.id);
        }, 1000); 
      }

      const { pixels } = data;
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
      
      let targetAngle = 0;
      const lookAhead = 5;
      if (targetDist + lookAhead <= totalLen) {
        const pAhead = getPointAtDist(targetDist + lookAhead);
        targetAngle = Math.atan2(pAhead.y - pos.y, pAhead.x - pos.x);
      } else {
        const pBehind = getPointAtDist(Math.max(0, targetDist - lookAhead));
        targetAngle = Math.atan2(pos.y - pBehind.y, pos.x - pBehind.x);
      }

      if ((tx as any)._prevAngle === undefined) (tx as any)._prevAngle = targetAngle;
      let angleDiff = targetAngle - (tx as any)._prevAngle;
      while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
      while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
      
      const frameFactor = Math.max(0.1, (deltaTime || 16.6) / 16.6);
      const lerpFactor = Math.min(1, 0.15 * frameFactor); 
      const smoothedAngle = (tx as any)._prevAngle + angleDiff * lerpFactor;
      (tx as any)._prevAngle = smoothedAngle;

      ctx.save();
      ctx.translate(pos.x, pos.y);
      ctx.rotate(smoothedAngle);
      ctx.fillStyle = "#ffffff";
      ctx.shadowBlur = 4 / this.scale;
      ctx.shadowColor = "rgba(0,0,0,0.5)";
      ctx.shadowOffsetY = 2 / this.scale;
      this.drawPlaneIcon(ctx);
      ctx.restore();
    });

    if (!this.gameState.isPaused && this.activeTransactions.length > 0) {
      this.requestRender();
    }
  }

  private drawPlaneIcon(ctx: CanvasRenderingContext2D) {
    const s = 1 / this.scale;
    ctx.beginPath();
    ctx.moveTo(8 * s, 0);
    ctx.lineTo(1 * s, -1.5 * s);
    ctx.lineTo(0, -6 * s);
    ctx.lineTo(-1.5 * s, -6 * s);
    ctx.lineTo(-1 * s, -1.5 * s);
    ctx.lineTo(-5 * s, -1.5 * s);
    ctx.lineTo(-6.5 * s, -3.5 * s);
    ctx.lineTo(-7 * s, -3.5 * s);
    ctx.lineTo(-7 * s, 3.5 * s);
    ctx.lineTo(-6.5 * s, 3.5 * s);
    ctx.lineTo(-5 * s, 1.5 * s);
    ctx.lineTo(-1 * s, 1.5 * s);
    ctx.lineTo(-1.5 * s, 6 * s);
    ctx.lineTo(0, 6 * s);
    ctx.lineTo(1 * s, 1.5 * s);
    ctx.closePath();
    ctx.fill();
  }
}
