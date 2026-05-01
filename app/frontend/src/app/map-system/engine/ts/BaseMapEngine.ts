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
  protected isInteracting: boolean = false;
  protected interactionTimer: NodeJS.Timeout | null = null;

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
        
        // LOAD CAMERA STATE
        try {
            const savedState = sessionStorage.getItem('map_camera_state');
            if (savedState) {
                const { scale, offsetX, offsetY } = JSON.parse(savedState);
                this.scale = scale || 1;
                this.offsetX = offsetX || 0;
                this.offsetY = offsetY || 0;
                this.needsBaseUpdate = true;
            }
        } catch (e) {}
    }
    
    this.startRenderLoop();
  }

  private startRenderLoop() {
    if (this.isLoopRunning) return;
    this.isLoopRunning = true;
    const loop = () => {
      if (this.isLoopRunning) {
        if (this.needsBaseUpdate || this.needsTacticalUpdate) {
          this.executeRender();
        }
        this.animationFrameId = requestAnimationFrame(loop);
      }
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
    this.bboxCache.clear();
    
    // Pre-calculate BBOX for all features for fast culling
    if (this.data && this.data.features) {
        for (const feature of this.data.features) {
            this.calculateAndCacheBBox(feature);
        }
    }
    
    this.invalidateCache();
  }

  private bboxCache: Map<string, { minX: number, minY: number, maxX: number, maxY: number }> = new Map();
  private calculateAndCacheBBox(feature: GeoJsonFeature) {
    const id = this.getFeatureId(feature);
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    
    const processRings = (rings: number[][][]) => {
        for (const ring of rings) {
            for (const [lng, lat] of ring) {
                const { x, y } = this.projector.project(lng, lat);
                if (x < minX) minX = x; if (x > maxX) maxX = x;
                if (y < minY) minY = y; if (y > maxY) maxY = y;
            }
        }
    };

    if (feature.geometry.type === 'Polygon') {
        processRings(feature.geometry.coordinates);
    } else if (feature.geometry.type === 'MultiPolygon') {
        for (const poly of feature.geometry.coordinates) processRings(poly);
    }
    
    this.bboxCache.set(id, { minX, minY, maxX, maxY });
  }

  private getFeatureId(feature: GeoJsonFeature): string {
    return feature.properties.ADM0_A3 || feature.properties.NAME || JSON.stringify(feature.properties);
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
        this.scale = scale;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        
        // Mark as interacting to enable high-speed bitmap scaling
        this.isInteracting = true;
        
        // Debounce: Wait for 150ms of stillness before a high-quality vector redraw
        if (this.interactionTimer) clearTimeout(this.interactionTimer);
        this.interactionTimer = setTimeout(() => {
            this.isInteracting = false;
            this.needsBaseUpdate = true;
            this.requestRender();
        }, 150);

        this.requestRender();

        // SAVE CAMERA STATE
        try {
            sessionStorage.setItem('map_camera_state', JSON.stringify({
                scale: this.scale,
                offsetX: this.offsetX,
                offsetY: this.offsetY
            }));
        } catch (e) {}
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
        if (this.isInteracting && this.lastRenderedScale > 0) {
            // BITMAP INTERPOLATION: Scale the last high-quality snapshot
            // This is hardware accelerated and extremely fast.
            const s = this.scale / this.lastRenderedScale;
            const dx = this.offsetX - (this.lastOffscreenX * s);
            const dy = this.offsetY - (this.lastOffscreenY * s);
            const dw = this.width * s;
            const dh = this.height * s;
            ctx.drawImage(this.offscreenCanvas, dx, dy, dw, dh);
        } else {
            // Static Blit
            const relX = this.offsetX - this.lastOffscreenX;
            const relY = this.offsetY - this.lastOffscreenY;
            ctx.drawImage(this.offscreenCanvas, relX, relY);
        }
    }

    // 3. Update Tactical Layer
    this.renderTacticalLayer();
    this.needsTacticalUpdate = false;
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
    
    // Viewport Culling Bounds
    const margin = 50 / scale; // Buffer to prevent flickering at edges
    const vLeft = -offX / scale - margin;
    const vRight = (this.width - offX) / scale + margin;
    const vTop = -offY / scale - margin;
    const vBottom = (this.height - offY) / scale + margin;
    
    // Draw with current scale and offsets
    ctx.setTransform(scale, 0, 0, scale, offX, offY);
    
    for (const feature of this.data.features) {
      const id = this.getFeatureId(feature);
      const bbox = this.bboxCache.get(id);
      
      // CULLING LOGIC: Skip if country's bounding box is entirely outside viewport
      if (bbox) {
          if (bbox.maxX < vLeft || bbox.minX > vRight || bbox.maxY < vTop || bbox.minY > vBottom) {
              continue;
          }
      }
      
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
        x = cx + Math.cos(rot) * outerRadius; 
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y); 
        rot += step;
        x = cx + Math.cos(rot) * innerRadius; 
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y); 
        rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius); 
    ctx.closePath();
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

  public updateContexts(ctx: CanvasRenderingContext2D, tacticalCtx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.tacticalCtx = tacticalCtx;
    this.needsBaseUpdate = true;
    this.requestRender();
  }

  public resize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.projector.updateDimensions(width, height);
    this.invalidateCache();
  }
}
