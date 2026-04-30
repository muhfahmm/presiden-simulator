import { BaseMapEngine, GeoJsonFeature, CONTINENT_COLORS } from './BaseMapEngine';
import { timeStorage } from '@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage';
import { PESAWAT_PATH, KAPAL_PATH, TANK_PATH } from '@/app/game/components/2_navigasi_menu/2_navigasi_bawah/4_pertahanan/1_komando_pertahanan/1_misi_serangan/modals_pilih_negara/logic/visual_dan_jalur/UnitSVGs';

export class MainMapEngine extends BaseMapEngine {
  public playerCountryName: string | null = null;
  public targetCountryName: string | null = null;

  protected drawBackground(): void {
    // Ocean Background - Tactical Blue
    this.ctx.fillStyle = '#1e3a8a';
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  protected drawFeature(feature: GeoJsonFeature): void {
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

    // Pulse microstates
    const isTiny = feature.properties.TINY > 0 || feature.properties.LABELRANK > 5;
    if (isTiny && this.scale < 3) this.drawMicrostatePulse(feature);
  }

  public activeInvasions: any[] = [];
  private isAnimatingInvasions = false;
  private gameState = timeStorage.getState();
  private lastSaveTime = 0;

  constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
    super(ctx, width, height);
    
    // Subscribe to time storage for animation sync
    timeStorage.subscribe((date, paused, speed) => {
      this.gameState = { gameDate: date, isPaused: paused, speed: speed };
    });

    if (typeof window !== 'undefined') {
      // Load saved invasions
      this.loadInvasionsFromStorage();

      window.addEventListener('SPAWN_INVASION_UNITS', (e: any) => {
        if (e.detail && e.detail.path) {
          const target = e.detail.targetCountry?.name_id || e.detail.target;
          const existingIdx = this.activeInvasions.findIndex(inv => inv.target === target);

          const newInvasion = {
            path: e.detail.path,
            units: e.detail.units || [],
            target: target,
            progress: 0,
            speed: 0.001 + (Math.random() * 0.001),
            arrived: false
          };

          if (existingIdx !== -1) {
            this.activeInvasions[existingIdx] = newInvasion;
          } else {
            this.activeInvasions.push(newInvasion);
          }
          
          this.saveInvasionsToStorage();

          if (!this.isAnimatingInvasions) {
            this.isAnimatingInvasions = true;
            this.animateInvasions();
          }
          this.requestRender();
        }
      });

      window.addEventListener('CLEAR_INVASIONS', () => {
        this.activeInvasions = [];
        localStorage.removeItem('active_invasions');
        this.requestRender();
      });

      window.addEventListener('REMOVE_INVASION', (e: any) => {
        if (e.detail && e.detail.target) {
            const target = String(e.detail.target).toLowerCase().trim();
            const originalCount = this.activeInvasions.length;
            
            this.activeInvasions = this.activeInvasions.filter(inv => {
              const invTarget = String(inv.target || '').toLowerCase().trim();
              return invTarget !== target;
            });

            // If nothing changed but we expect it to, or just to be safe for player peace
            if (this.activeInvasions.length === originalCount && originalCount > 0) {
                // Fallback: Clear everything if it's likely the player's primary invasion
                this.activeInvasions = [];
            }

            this.saveInvasionsToStorage();
            this.requestRender();
        }
      });
    }
  }

  private saveInvasionsToStorage() {
    if (typeof window === 'undefined') return;
    try {
        // Serialized without screenPos as it's computed every frame
        const toSave = this.activeInvasions.map(inv => ({
            path: inv.path,
            units: inv.units,
            target: inv.target,
            progress: inv.progress,
            speed: inv.speed,
            arrived: inv.arrived
        }));
        localStorage.setItem('active_invasions', JSON.stringify(toSave));
    } catch (e) {
        console.error("Failed to save invasions", e);
    }
  }

  private loadInvasionsFromStorage() {
    if (typeof window === 'undefined') return;
    try {
        const saved = localStorage.getItem('active_invasions');
        if (saved) {
            const parsed = JSON.parse(saved);
            this.activeInvasions = parsed;
            
            // Rebuild Path2D for each loaded invasion
            this.activeInvasions.forEach(inv => {
                if (inv.path && inv.path.pathCoordinates) {
                    // Create path2d using raw coordinates
                    const path2d = new Path2D();
                    inv.path.pathCoordinates.forEach((c: any, idx: number) => {
                        const p = this.projector.project(c.lon, c.lat);
                        if (idx === 0) path2d.moveTo(p.x, p.y);
                        else path2d.lineTo(p.x, p.y);
                    });
                    // Store the generated path2d back (though it's not serialized)
                    // We need a place to store it. In drawInvasionPaths, we use path.path2d.
                    // But path is the object from localStorage, it doesn't have the path2d property yet.
                    inv.path.path2d = path2d;
                }
            });

            if (this.activeInvasions.length > 0 && !this.isAnimatingInvasions) {
                this.isAnimatingInvasions = true;
                this.animateInvasions();
            }
        }
    } catch (e) {
        console.error("Failed to load invasions", e);
    }
  }

  private animateInvasions = () => {
    let active = false;
    for (let i = this.activeInvasions.length - 1; i >= 0; i--) {
        const inv = this.activeInvasions[i];
        
        if (!this.gameState.isPaused) {
            inv.progress += inv.speed * (this.gameState.speed || 1);
        }
        
        if (inv.progress > 1) {
            // Mark as arrived instead of removing
            if (!inv.arrived) {
                inv.progress = 1;
                inv.arrived = true;
                this.saveInvasionsToStorage(); // Save state when arrived
            }
            active = true; // Keep animating for the pulse effect
        } else {
            active = true;
        }
    }
    
    this.requestRender();
    
    // Periodically save progress (every 2 seconds)
    const now = performance.now();
    if (now - this.lastSaveTime > 2000) {
        this.saveInvasionsToStorage();
        this.lastSaveTime = now;
    }
    
    if (active) {
        requestAnimationFrame(this.animateInvasions);
    } else {
        this.isAnimatingInvasions = false;
    }
  }

  protected drawOverlays(): void {
    this.drawInvasionPaths();
    this.drawCapitals();
  }

  private drawInvasionPaths(): void {
    if (!this.activeInvasions || this.activeInvasions.length === 0) return;

    // Cache Path2D objects
    if (!(this as any).svgPaths && typeof Path2D !== 'undefined') {
        (this as any).svgPaths = {
            pesawat: new Path2D(PESAWAT_PATH),
            kapal: new Path2D(KAPAL_PATH),
            tank: new Path2D(TANK_PATH)
        };
    }

    this.ctx.save();
    for (const invasion of this.activeInvasions) {
        // Fallback for old data structure if needed
        const path = invasion.path || invasion;
        
        if (!path.pathCoordinates || path.pathCoordinates.length === 0) continue;

        // 1. Draw Path
        this.ctx.beginPath();
        if (path.style && path.style.isDashed) {
            this.ctx.setLineDash(path.style.dashArray.map((d: number) => d / this.scale));
        } else {
            this.ctx.setLineDash([]);
        }

        const strokeColor = path.style ? path.style.color : '#ef4444';
        this.ctx.strokeStyle = strokeColor;
        this.ctx.lineWidth = path.style ? path.style.lineWidth / this.scale : 3 / this.scale;
        
        this.ctx.shadowBlur = 10 / this.scale;
        this.ctx.shadowColor = strokeColor;

        const p0 = this.projector.project(path.pathCoordinates[0].lon, path.pathCoordinates[0].lat);
        this.ctx.moveTo(p0.x, p0.y);

        for (let i = 1; i < path.pathCoordinates.length; i++) {
            const p = this.projector.project(path.pathCoordinates[i].lon, path.pathCoordinates[i].lat);
            this.ctx.lineTo(p.x, p.y);
        }

        this.ctx.stroke();
        
        // 2. Draw Units along the path if it's an animating object
        if (invasion.progress !== undefined && invasion.units) {
            this.ctx.setLineDash([]); // Reset line dash for icons
            
            // Get current coordinate based on progress
            const totalCoords = path.pathCoordinates.length - 1;
            const floatIndex = invasion.progress * totalCoords;
            let index = Math.floor(floatIndex);
            
            // Clamp index to prevent out of bounds
            if (index >= totalCoords) index = totalCoords - 1;

            if (index >= 0 && index < path.pathCoordinates.length - 1) {
                const fraction = floatIndex - index;
                const c1 = path.pathCoordinates[index];
                const c2 = path.pathCoordinates[index + 1];
                
                // If progress is exactly 1, use the destination coordinate
                const currentLon = invasion.progress >= 1 ? path.pathCoordinates[totalCoords].lon : c1.lon + (c2.lon - c1.lon) * fraction;
                const currentLat = invasion.progress >= 1 ? path.pathCoordinates[totalCoords].lat : c1.lat + (c2.lat - c1.lat) * fraction;
                
                const pos = this.projector.project(currentLon, currentLat);
                
                // If arrived, draw pulsing battlefield marker
                if (invasion.arrived) {
                    const pulse = (Math.sin(performance.now() / 200) + 1) / 2; // 0 to 1
                    const radius = (15 + pulse * 10) / this.scale;
                    
                    this.ctx.beginPath();
                    this.ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
                    this.ctx.fillStyle = `rgba(239, 68, 68, ${0.3 + pulse * 0.4})`;
                    this.ctx.fill();
                    
                    this.ctx.beginPath();
                    this.ctx.arc(pos.x, pos.y, 5 / this.scale, 0, Math.PI * 2);
                    this.ctx.fillStyle = '#ef4444';
                    this.ctx.fill();
                    
                    // Store projected pos for hit detection
                    invasion.screenPos = { x: pos.x, y: pos.y };
                } else {
                    // Calculate rotation angle to point unit towards destination
                    const nextPos = this.projector.project(c2.lon, c2.lat);
                    const angle = Math.atan2(nextPos.y - pos.y, nextPos.x - pos.x);

                    // Draw unique icons based on deployed units
                    const types = Array.from(new Set(invasion.units.map((u: any) => u.type)));
                    
                    this.ctx.save();
                    this.ctx.translate(pos.x, pos.y);
                    
                    this.ctx.shadowBlur = 10 / this.scale;
                    this.ctx.shadowColor = 'rgba(0, 0, 0, 0.8)'; 
                    
                    let offsetX = 0;
                    
                    types.forEach((type: any) => {
                        this.ctx.save();
                        
                        const offsetPosLon = currentLon - (c2.lon - c1.lon) * offsetX;
                        const offsetPosLat = currentLat - (c2.lat - c1.lat) * offsetX;
                        const cPos = this.projector.project(offsetPosLon, offsetPosLat);
                        
                        this.ctx.translate(cPos.x - pos.x, cPos.y - pos.y);
                        
                        const unitSize = 40 / this.scale; 
                        const unitScale = unitSize / 24; 
                        this.ctx.scale(unitScale, unitScale);
                        this.ctx.translate(-12, -12); 
                        
                        this.ctx.fillStyle = '#ef4444'; 
                        
                        const path2d = (this as any).svgPaths[type] || (this as any).svgPaths.tank;
                        this.ctx.fill(path2d);
                        
                        this.ctx.restore();
                        offsetX += 0.8; 
                    });
                    
                    this.ctx.restore();
                }
            }
        }
    }
    this.ctx.restore();
  }

  public getInvasionAt(mouseX: number, mouseY: number): any | null {
    const hitThreshold = 35; // Ukuran area klik lebih besar agar mudah
    
    for (const invasion of this.activeInvasions) {
        if (!invasion.arrived || !invasion.screenPos) continue;
        
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
    this.ctx.save();
    this.ctx.shadowBlur = 4 / this.scale;
    this.ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';

    for (const country of this.countries) {
      const lat = country.lat !== undefined ? country.lat : country.latitude;
      const lon = country.lon !== undefined ? country.lon : country.longitude;
      const capitalName = country.capital || country.ibukota;
      
      if (lat === undefined || lon === undefined) continue;
      const { x, y } = this.projector.project(Number(lon), Number(lat));

      // Draw Capital Star
      const outerRadius = Math.max(3.5 / this.scale, 0.8);
      const innerRadius = outerRadius / 2.5;
      this.drawStar(x, y, 5, outerRadius, innerRadius);
      this.ctx.fillStyle = '#22d3ee';
      this.ctx.fill();

      // Labels at high zoom
      if (this.scale > 4.5 && capitalName) {
        this.ctx.font = `bold ${10 / this.scale}px "Cascadia Code", monospace`;
        this.ctx.fillStyle = '#22d3ee';
        this.ctx.textAlign = 'center';
        this.ctx.shadowBlur = 2 / this.scale;
        this.ctx.fillText(capitalName.toUpperCase(), x, y - (6 / this.scale));
      }
    }
    this.ctx.restore();
  }
}
