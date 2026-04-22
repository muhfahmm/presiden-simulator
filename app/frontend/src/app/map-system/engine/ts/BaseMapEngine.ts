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
  protected ctx: CanvasRenderingContext2D;
  protected projector: Projector;
  protected data: GeoJsonData | null = null;
  protected countries: any[] = [];
  protected selectedCountryName: string | null = null;
  protected selectedCountryCode: string | null = null;
  protected needsUpdate: boolean = false;
  protected isLoopRunning: boolean = false;

  // Caching System
  private staticCache: HTMLCanvasElement | null = null;
  private staticCtx: CanvasRenderingContext2D | null = null;
  private isCacheDirty: boolean = true;

  // Transformation State
  protected scale: number = 1;
  protected offsetX: number = 0;
  protected offsetY: number = 0;
  protected relations: any[] = []; // ID-based relations
  protected width: number;
  protected height: number;
  private animationFrameId: number | null = null;

  constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.projector = new Projector(width, height);
    this.initCache();
    this.startRenderLoop();
  }

  private initCache() {
    if (typeof document === 'undefined') return;
    this.staticCache = document.createElement('canvas');
    this.staticCache.width = this.width;
    this.staticCache.height = this.height;
    this.staticCtx = this.staticCache.getContext('2d');
  }

  private startRenderLoop() {
    if (this.isLoopRunning) return;
    this.isLoopRunning = true;
    const loop = () => {
      if (this.needsUpdate) {
        this.needsUpdate = false;
        this.executeRender();
      }
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
    this.needsUpdate = true;
  }

  public invalidateCache() {
    this.isCacheDirty = true;
    this.requestRender();
  }

  public setData(data: GeoJsonData) {
    this.data = data;
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

  public setTransform(scale: number, offsetX: number, offsetY: number) {
    if (this.scale !== scale || this.offsetX !== offsetX || this.offsetY !== offsetY) {
        this.scale = scale;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.invalidateCache();
    }
  }

  public render() {
    this.requestRender();
  }

  protected executeRender() {
    if (!this.data) return;

    // 1. Update Static Cache if Dirty
    if (this.isCacheDirty || !this.staticCache || this.staticCache.width !== this.width || this.staticCache.height !== this.height) {
      this.renderToCache();
      this.isCacheDirty = false;
    }

    // 2. Clear Main Canvas
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.clearRect(0, 0, this.width, this.height);

    // 3. Draw Cached Background Map
    if (this.staticCache) {
      this.ctx.drawImage(this.staticCache, 0, 0);
    }

    // 4. Draw Specialized Overlays (Dynamic Layer)
    this.ctx.setTransform(this.scale, 0, 0, this.scale, this.offsetX, this.offsetY);
    this.drawOverlays();
  }

  private renderToCache() {
    if (!this.staticCtx || !this.data || !this.staticCache) return;
    
    const sctx = this.staticCtx;
    sctx.setTransform(1, 0, 0, 1, 0, 0);
    sctx.clearRect(0, 0, this.width, this.height);

    // Background
    sctx.fillStyle = '#070b14';
    sctx.fillRect(0, 0, this.width, this.height);

    // Custom Background (e.g. Ocean)
    const originalCtx = this.ctx;
    this.ctx = sctx; // Temporarily swap ctx for drawBackground/drawFeature
    this.drawBackground();

    // Map Transform
    sctx.setTransform(this.scale, 0, 0, this.scale, this.offsetX, this.offsetY);

    // Countries
    for (const feature of this.data.features) {
      this.drawFeature(feature);
    }

    this.ctx = originalCtx; // Restore original ctx
  }

  // Hook for subclasses to draw custom backgrounds (like ocean textures)
  protected abstract drawBackground(): void;

  // Hook for subclasses to draw custom feature styles
  protected abstract drawFeature(feature: GeoJsonFeature): void;

  // Hook for subclasses to draw things on top of land (Capitals, Routes, Icons)
  protected abstract drawOverlays(): void;

  protected drawPolygon(polygon: number[][][]) {
    const rings = polygon;
    for (let i = 0; i < rings.length; i++) {
        const ring = rings[i];
        if (ring.length === 0) continue;

        for (let j = 0; j < ring.length; j++) {
            const [lng, lat] = ring[j];
            const { x, y } = this.projector.project(lng, lat);
            if (j === 0) this.ctx.moveTo(x, y);
            else this.ctx.lineTo(x, y);
        }
    }
  }

  protected drawStar(cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number) {
    let rot = Math.PI / 2 * 3;
    let x = cx, y = cy;
    const step = Math.PI / spikes;
    this.ctx.beginPath();
    this.ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius; y = cy + Math.sin(rot) * outerRadius;
        this.ctx.lineTo(x, y); rot += step;
        x = cx + Math.cos(rot) * innerRadius; y = cy + Math.sin(rot) * innerRadius;
        this.ctx.lineTo(x, y); rot += step;
    }
    this.ctx.lineTo(cx, cy - outerRadius); this.ctx.closePath();
  }

  protected drawMicrostatePulse(feature: GeoJsonFeature) {
    const labelX = feature.properties.LABEL_X, labelY = feature.properties.LABEL_Y;
    if (labelX === undefined || labelY === undefined) return;
    const { x, y } = this.projector.project(labelX, labelY);
    this.ctx.beginPath();
    this.ctx.arc(x, y, 2 / this.scale, 0, Math.PI * 2);
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    this.ctx.fill();
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
    if (this.staticCache) {
      this.staticCache.width = width;
      this.staticCache.height = height;
    }
    this.projector.updateDimensions(width, height);
    this.invalidateCache();
  }
}
