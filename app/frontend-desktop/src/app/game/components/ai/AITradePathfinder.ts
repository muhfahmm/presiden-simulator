export class AITradePathfinder {
  private grid: boolean[][]; // false = water (navigable), true = land (obstacle)
  private width: number;
  private height: number;
  private pathCache: Record<string, {x: number, y: number}[]> = {};

  constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
      this.grid = Array(height).fill(null).map(() => Array(width).fill(false));
  }

  public buildNavMeshFromCanvas(ctx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D) {
      const imageData = ctx.getImageData(0, 0, this.width, this.height);
      const data = imageData.data;
      for (let y = 0; y < this.height; y++) {
          for (let x = 0; x < this.width; x++) {
              const idx = (y * this.width + x) * 4;
              // If red channel is high (>128), it's drawn white representing land.
              this.grid[y][x] = data[idx] > 128;
          }
      }
      // Force unblock global strategic canals so AI can route through them cleanly
      this.openCanal(this.lonToX(-79.5), this.latToY(9.0), 3); // Panama Canal
      this.openCanal(this.lonToX(32.3), this.latToY(30.6), 3); // Suez Canal
      this.openCanal(this.lonToX(26.2), this.latToY(40.2), 2); // Dardanelles / Bosporus
      this.openCanal(this.lonToX(43.3), this.latToY(12.6), 2); // Bab el-Mandab
      this.openCanal(this.lonToX(100.0), this.latToY(3.0), 3); // Strait of Malacca
      this.openCanal(this.lonToX(-5.6), this.latToY(36.0), 3); // Strait of Gibraltar
      this.openCanal(this.lonToX(1.0), this.latToY(51.0), 4); // English Channel
      this.openCanal(this.lonToX(11.0), this.latToY(56.0), 4); // Danish Straits (Baltic Access)
      this.openCanal(this.lonToX(56.0), this.latToY(26.0), 3); // Strait of Hormuz
      this.openCanal(this.lonToX(105.0), this.latToY(-6.0), 3); // Sunda Strait
      this.openCanal(this.lonToX(-80.0), this.latToY(25.0), 3); // Florida Strait

      // Flood fill the Global Ocean to cull inaccessible inland lakes
      const isOcean = Array(this.height).fill(null).map(() => new Uint8Array(this.width));
      const qX = new Int16Array(this.width * this.height);
      const qY = new Int16Array(this.width * this.height);
      let head = 0, tail = 0;
      
      // Start flood fill from Gulf of Guinea (0,0 lat/lon) which is definitely deep ocean
      const oceanStartX = Math.floor(this.width / 2);
      const oceanStartY = Math.floor(this.height / 2);
      
      if (!this.grid[oceanStartY][oceanStartX]) {
          isOcean[oceanStartY][oceanStartX] = 1;
          qX[tail] = oceanStartX; qY[tail++] = oceanStartY;
      }
      
      const dX = [0, 1, 0, -1];
      const dY = [1, 0, -1, 0];

      while (head < tail) {
          const cx = qX[head], cy = qY[head++];
          for (let i = 0; i < 4; i++) {
              let nx = cx + dX[i], ny = cy + dY[i];
              if (nx < 0) nx += this.width;
              else if (nx >= this.width) nx -= this.width;
              
              if (ny >= 0 && ny < this.height) {
                  if (!this.grid[ny][nx] && isOcean[ny][nx] === 0) {
                      isOcean[ny][nx] = 1;
                      qX[tail] = nx; qY[tail++] = ny;
                  }
              }
          }
      }

      // Any water that is NOT ocean becomes Land (to prevent inland lake trapping)
      for (let y = 0; y < this.height; y++) {
          for (let x = 0; x < this.width; x++) {
              if (isOcean[y][x] === 0) {
                  this.grid[y][x] = true;
              }
          }
      }
  }

  private lonToX(lon: number) { return Math.max(0, Math.min(this.width - 1, Math.floor(((lon + 180) / 360) * this.width))); }
  private latToY(lat: number) { return Math.max(0, Math.min(this.height - 1, Math.floor(((90 - lat) / 180) * this.height))); }

  private openCanal(cx: number, cy: number, size: number) {
      for(let dy=-size; dy<=size; dy++){
          for(let dx=-size; dx<=size; dx++){
              if (cy+dy >= 0 && cy+dy < this.height && cx+dx >= 0 && cx+dx < this.width) {
                  this.grid[cy+dy][cx+dx] = false;
              }
          }
      }
  }

  private getClosestWater(x: number, y: number): {x: number, y: number} {
      if (!this.grid[y][x]) return {x, y}; // Already sitting in water

      const visited = new Uint8Array(this.width * this.height);
      const qX = new Int16Array(this.width * this.height);
      const qY = new Int16Array(this.width * this.height);
      let head = 0, tail = 0;
      
      qX[tail] = x; qY[tail++] = y;
      visited[y * this.width + x] = 1;

      while (head < tail) {
          const cx = qX[head], cy = qY[head++];
          if (!this.grid[cy][cx]) return {x: cx, y: cy}; // Found global ocean water!
          
          const dirs = [[0,1], [1,0], [0,-1], [-1,0], [1,1], [-1,-1], [1,-1], [-1,1]];
          for (let d of dirs) {
              const nx = cx + d[0], ny = cy + d[1];
              if (nx >= 0 && nx < this.width && ny >= 0 && ny < this.height) {
                  const idx = ny * this.width + nx;
                  if (visited[idx] === 0) {
                      visited[idx] = 1;
                      qX[tail] = nx; qY[tail++] = ny;
                  }
              }
          }
          if (head > 80000) break; // Give it an absolutely massive search radius for inland countries
      }
      
      console.log(`[A* Navigation] Warning: Exhausted coastal search for (${x},${y}). Falling back to land coordinates!`);
      return {x, y}; // Fallback
  }

  // A* pathfinding algorithm implementation
  public findPath(startLon: number, startLat: number, endLon: number, endLat: number): {x: number, y: number}[] {
      const cacheKey = `${startLon.toFixed(1)},${startLat.toFixed(1)}->${endLon.toFixed(1)},${endLat.toFixed(1)}`;
      if (this.pathCache[cacheKey]) return this.pathCache[cacheKey];

      console.log(`[A*] Starting path from ${startLon},${startLat} to ${endLon},${endLat}`);

      const sX = this.lonToX(startLon);
      const sY = this.latToY(startLat);
      const eX = this.lonToX(endLon);
      const eY = this.latToY(endLat);

      const startNode = this.getClosestWater(sX, sY);
      const endNode = this.getClosestWater(eX, eY);
      
      console.log(`[A*] Closest water: Start(${startNode.x},${startNode.y}), End(${endNode.x},${endNode.y})`);

      // Binary Min-Heap Priority Queue for extremely fast routing
      const openSet: Node[] = [];
      const insertNode = (node: Node) => {
          let i = openSet.length;
          openSet.push(node);
          while (i > 0) {
              const p = Math.floor((i - 1) / 2);
              if (openSet[p].f <= openSet[i].f) break;
              [openSet[p], openSet[i]] = [openSet[i], openSet[p]];
              i = p;
          }
      };
      const popNode = (): Node | undefined => {
          if (openSet.length === 0) return undefined;
          const min = openSet[0];
          const last = openSet.pop()!;
          if (openSet.length > 0) {
              openSet[0] = last;
              let i = 0;
              while (true) {
                  let left = 2 * i + 1, right = 2 * i + 2, smallest = i;
                  if (left < openSet.length && openSet[left].f < openSet[smallest].f) smallest = left;
                  if (right < openSet.length && openSet[right].f < openSet[smallest].f) smallest = right;
                  if (smallest === i) break;
                  [openSet[i], openSet[smallest]] = [openSet[smallest], openSet[i]];
                  i = smallest;
              }
          }
          return min;
      };

      const mapSize = this.width * this.height;
      const gScore = new Float32Array(mapSize).fill(Infinity);
      const cameFromX = new Int16Array(mapSize).fill(-1);
      const cameFromY = new Int16Array(mapSize).fill(-1);
      const closedSet = new Uint8Array(mapSize);

      const nodeIdx = (x: number, y: number) => y * this.width + x;
      const heuristic = (x: number, y: number) => {
          // Wrap-around distance logic across the pacific
          let dx = Math.abs(x - endNode.x);
          if (dx > this.width / 2) dx = this.width - dx; 
          let dy = Math.abs(y - endNode.y);
          return Math.sqrt(dx*dx + dy*dy);
      };

      gScore[nodeIdx(startNode.x, startNode.y)] = 0;
      insertNode({ x: startNode.x, y: startNode.y, f: heuristic(startNode.x, startNode.y) });

      const dirs = [[0,1], [1,0], [0,-1], [-1,0], [1,1], [-1,-1], [1,-1], [-1,1]];

      let pathFound = false;
      let iterations = 0;

      while (openSet.length > 0) {
          iterations++;
          const current = popNode()!;
          const cIdx = nodeIdx(current.x, current.y);

          if (closedSet[cIdx]) continue;
          closedSet[cIdx] = 1;

          if (current.x === endNode.x && current.y === endNode.y) {
              pathFound = true;
              break;
          }

          // Safety killswitch
          if (iterations > 1500000) break;

          const currentG = gScore[cIdx];

          for (let d of dirs) {
              let nx = current.x + d[0];
              const ny = current.y + d[1];
              
              // Handle geographic wrapping across map boundaries
              if (nx < 0) nx += this.width;
              if (nx >= this.width) nx -= this.width;
              
              if (ny >= 0 && ny < this.height) {
                  if (this.grid[ny][nx]) continue; // Hit land, skip!

                  const tG = currentG + (d[0] !== 0 && d[1] !== 0 ? 1.414 : 1);
                  const nIdx = nodeIdx(nx, ny);

                  if (tG < gScore[nIdx]) {
                      cameFromX[nIdx] = current.x;
                      cameFromY[nIdx] = current.y;
                      gScore[nIdx] = tG;
                      insertNode({ x: nx, y: ny, f: tG + heuristic(nx, ny) });
                  }
              }
          }
      }

      console.log(`[A*] Done. Found=${pathFound}, iterations=${iterations}`);

      if (pathFound) {
          const path: {x: number, y: number}[] = [];
          let cx = endNode.x, cy = endNode.y;
          while (cx !== startNode.x || cy !== startNode.y) {
              path.push({x: cx, y: cy});
              const idx = nodeIdx(cx, cy);
              const pX = cameFromX[idx];
              const pY = cameFromY[idx];
              cx = pX; cy = pY;
          }
          path.push({x: startNode.x, y: startNode.y});
          path.reverse();
          this.pathCache[cacheKey] = path;
          return path;
      }

      // No path found (isolated inland lake or blocked resolution), fallback to simple arc
      return [];
  }

  // Convert map coordinates to world coordinates ratio
  public normalizeGridPath(path: {x: number, y: number}[]): {rtX: number, rtY: number}[] {
      return path.map(p => ({
          rtX: p.x / this.width,
          rtY: p.y / this.height
      }));
  }
}

interface Node {
    x: number;
    y: number;
    f: number;
}
