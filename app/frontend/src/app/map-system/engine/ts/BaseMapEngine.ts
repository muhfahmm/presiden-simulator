import { Projector } from './Projector';

export interface GeoJsonFeature {
  type: string;
  properties: any;
  geometry: {
    type: string;
    coordinates: any;
  };
}

export interface GeoJsonData {
  type: string;
  features: GeoJsonFeature[];
}

export const CONTINENT_COLORS: Record<string, string> = {
  'Asia': '#a855f7',          // Purple
  'Africa': '#eab308',         // Yellow
  'Europe': '#3b82f6',         // Blue
  'North America': '#22c55e',  // Green
  'South America': '#f97316',  // Orange
  'Oceania': '#ec4899',        // Pink
  'Antarctica': '#cbd5e1',     // Greyish Blue
  'Seven seas (open ocean)': '#1e40af'
};

export abstract class BaseMapEngine {
  protected ctx: CanvasRenderingContext2D; // Base Layer
  protected tacticalCtx: CanvasRenderingContext2D; // Dynamic Layer
  protected projector: Projector;
  protected data: GeoJsonData | null = null;
  protected countries: any[] = [];
  protected selectedCountryName: string | null = null;
  protected selectedCountryCode: string | null = null;
  protected needsBaseUpdate: boolean = true;
  protected needsTacticalUpdate: boolean = true;
  protected isLoopRunning: boolean = false;

  // Transformation State
  protected scale: number = 1;
  protected offsetX: number = 0;
  protected offsetY: number = 0;
  protected relations: any[] = [];
  protected width: number;
  protected height: number;
  private animationFrameId: number | null = null;

  protected offscreenCanvas: HTMLCanvasElement | null = null;
  protected offscreenCtx: CanvasRenderingContext2D | null = null;
  protected lastRenderedScale: number = -1;

  constructor(ctx: CanvasRenderingContext2D, width: number, height: number, tacticalCtx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.tacticalCtx = tacticalCtx;
    this.width = width;
    this.height = height;
    this.projector = new Projector(width, height);
    
    if (typeof document !== 'undefined') {
        this.offscreenCanvas = document.createElement('canvas');
        this.offscreenCanvas.width = width;
        this.offscreenCanvas.height = height;
        this.offscreenCtx = this.offscreenCanvas.getContext('2d', { alpha: false });
    }
    
    this.startRenderLoop();
  }

  private startRenderLoop() {
    if (this.isLoopRunning) return;
    this.isLoopRunning = true;
    const loop = () => {
      this.executeRender();
      this.animationFrameId = requestAnimationFrame(loop);
    };
    this.animationFrameId = requestAnimationFrame(loop);
  }

  public stopRenderLoop() {
    this.isLoopRunning = false;
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  public requestRender() {
    this.needsTacticalUpdate = true;
  }

  public invalidateCache() {
    this.needsBaseUpdate = true;
    this.requestRender();
  }

  public setData(data: GeoJsonData) {
    this.data = data;
    this.path2dCache.clear();
    this.invalidateCache();
  }

  public setCountries(countries: any[]) {
    this.countries = countries;
    this.invalidateCache();
  }

  public setRelations(relations: any[]) {
    this.relations = relations;
    this.invalidateCache();
  }

  public setSelectedCountry(name: string | null, code: string | null = null) {
    if (this.selectedCountryName !== name || this.selectedCountryCode !== code) {
        this.selectedCountryName = name;
        this.selectedCountryCode = code;
        this.invalidateCache();
    }
  }

  protected lastOffscreenX: number = 0;
  protected lastOffscreenY: number = 0;

  public setTransform(scale: number, offsetX: number, offsetY: number) {
    if (this.scale !== scale || this.offsetX !== offsetX || this.offsetY !== offsetY) {
        const scaleChanged = Math.abs(this.scale - scale) > 0.01;
        const distMoved = Math.sqrt(Math.pow(this.offsetX - offsetX, 2) + Math.pow(this.offsetY - offsetY, 2));
        
        // If scale changed or we moved too far, invalidate base
        if (scaleChanged || distMoved > this.width / 2) {
            this.needsBaseUpdate = true;
        }
        
        this.scale = scale;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.requestRender();
    }
  }

  protected executeRender() {
    if (!this.data) return;

    // 1. Update Base Cache (Offscreen Snapshot) if needed
    if (this.needsBaseUpdate || !this.offscreenCtx) {
      this.updateOffscreenCache();
      this.needsBaseUpdate = false;
    }

    // 2. Blit Snapshot to Main Canvas
    const ctx = this.ctx;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, this.width, this.height);
    
    if (this.offscreenCanvas) {
        // Calculate relative offset from where the offscreen was last captured
        const relX = this.offsetX - this.lastOffscreenX;
        const relY = this.offsetY - this.lastOffscreenY;
        ctx.drawImage(this.offscreenCanvas, relX, relY);
    }

    // 3. Update Tactical Layer
    this.renderTacticalLayer();
  }

  private updateOffscreenCache() {
    if (!this.offscreenCtx || !this.offscreenCanvas || !this.data) return;
    
    const ctx = this.offscreenCtx;
    const scale = this.scale;
    const offX = this.offsetX;
    const offY = this.offsetY;
    
    // Snapshot the CURRENT view
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = '#0f172a'; 
    ctx.fillRect(0, 0, this.width, this.height);

    this.drawBackground(ctx);

    // Draw with current scale and offsets
    ctx.setTransform(scale, 0, 0, scale, offX, offY);
    
    for (const feature of this.data.features) {
      this.drawFeature(feature, ctx);
    }
    
    // Remember where we took this snapshot
    this.lastOffscreenX = offX;
    this.lastOffscreenY = offY;
    this.lastRenderedScale = scale;
  }

  private renderTacticalLayer() {
    const tctx = this.tacticalCtx;
    tctx.setTransform(1, 0, 0, 1, 0, 0);
    tctx.clearRect(0, 0, this.width, this.height);
    
    tctx.setTransform(this.scale, 0, 0, this.scale, this.offsetX, this.offsetY);
    this.drawOverlays();
  }

  protected abstract drawBackground(ctx: CanvasRenderingContext2D): void;
  protected abstract drawFeature(feature: GeoJsonFeature, ctx: CanvasRenderingContext2D): void;
  protected abstract drawOverlays(): void;

  protected path2dCache: Map<string, Path2D> = new Map();
  protected getPathForFeature(feature: GeoJsonFeature): Path2D | null {
    const id = feature.properties.ADM0_A3 || feature.properties.NAME || JSON.stringify(feature.properties);
    if (this.path2dCache.has(id)) return this.path2dCache.get(id) || null;

    const path = new Path2D();
    const { type, coordinates } = feature.geometry;

    if (type === 'Polygon') {
        this.drawPolygon(coordinates, path);
    } else if (type === 'MultiPolygon') {
        for (const polygon of coordinates) {
            this.drawPolygon(polygon, path);
        }
    }

    this.path2dCache.set(id, path);
    return path;
  }

  protected drawPolygon(polygon: number[][][], path: Path2D) {
    const rings = polygon;
    for (let i = 0; i < rings.length; i++) {
        const ring = rings[i];
        if (ring.length === 0) continue;

        for (let j = 0; j < ring.length; j++) {
            const [lng, lat] = ring[j];
            const { x, y } = this.projector.project(lng, lat);
            if (j === 0) path.moveTo(x, y);
            else path.lineTo(x, y);
        }
    }
  }

  protected drawStar(ctx: CanvasRenderingContext2D, cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number) {
    let rot = Math.PI / 2 * 3;
    let x = cx, y = cy;
    const step = Math.PI / spikes;
    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius; y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y); rot += step;
        x = cx + Math.cos(rot) * innerRadius; y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y); rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius); ctx.closePath();
  }

  protected drawMicrostatePulse(feature: GeoJsonFeature, ctx: CanvasRenderingContext2D) {
    const labelX = feature.properties.LABEL_X, labelY = feature.properties.LABEL_Y;
    if (labelX === undefined || labelY === undefined) return;
    const { x, y } = this.projector.project(labelX, labelY);
    
    // Ensure we have a valid context
    const drawCtx = ctx || this.ctx;
    if (!drawCtx) return;

    drawCtx.beginPath();
    drawCtx.arc(x, y, 2 / this.scale, 0, Math.PI * 2);
    drawCtx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    drawCtx.fill();
  }

  public getCountryAt(mouseX: number, mouseY: number): any | null {
    if (!this.countries || this.countries.length === 0) return null;
    const hitThreshold = 15;

    for (const country of this.countries) {
        const lat = country.lat !== undefined ? country.lat : country.latitude;
        const lon = country.lon !== undefined ? country.lon : country.longitude;
        if (lat === undefined || lon === undefined) continue;
        
        const { x, y } = this.projector.project(Number(lon), Number(lat));
        const screenX = x * this.scale + this.offsetX;
        const screenY = y * this.scale + this.offsetY;
        const dx = mouseX - screenX;
        const dy = mouseY - screenY;
        if (Math.sqrt(dx * dx + dy * dy) <= hitThreshold) return country;
    }
    return null;
  }

  public resize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.projector.updateDimensions(width, height);
    this.invalidateCache();
  }
}
