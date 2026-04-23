import React, { useMemo, useState, useEffect } from "react";
import { getStoredGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { getDynamicPrice, getSeededNoise } from "./tradeData";
import { timeStorage } from "./timeStorage";
import { Maximize2, Minimize2, LineChart, BarChart3, TrendingUp } from "lucide-react";

interface TradePriceChartProps {
  selectedKey: string;
  selectedTimeframe: string;
  basePrice: number;
  type: "buy" | "sell";
  color?: string;
}

export const TradePriceChart: React.FC<TradePriceChartProps> = ({ 
  selectedKey, 
  selectedTimeframe, 
  basePrice,
  type,
  color = "#3b82f6"
}) => {
  const [hoverData, setHoverData] = useState<any>(null);

  const [tick, setTick] = useState(0);
  const [isPaused, setIsPaused] = useState(timeStorage.getState().isPaused);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [chartMode, setChartMode] = useState<'line' | 'bar'>('line');

  // Subscribe to game time/pause state
  useEffect(() => {
    const unsubscribe = timeStorage.subscribe((date, paused) => {
      setIsPaused(paused);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // ONLY update tick if not paused to freeze animations
      if (!isPaused) {
        setTick(t => t + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    setHoverData(null);
  }, [selectedKey, selectedTimeframe]);

  // Generate consistent chart data matching getDynamicPrice with fixed interval alignment

  const chartData = useMemo(() => {
    // interval config: how many points, what's each step in ms, and what's the label step
    const intervalConfigs: Record<string, { points: number, stepMs: number, labelType: string, fixedWindow?: boolean }> = {
      "1w": { points: 7, stepMs: 24 * 60 * 60 * 1000, labelType: "day", fixedWindow: true }, // Mon - Sun

      "1m": { points: 30, stepMs: 24 * 60 * 60 * 1000, labelType: "date", fixedWindow: true },
      "3m": { points: 46, stepMs: 2 * 24 * 60 * 60 * 1000, labelType: "month" },
      "6m": { points: 61, stepMs: 3 * 24 * 60 * 60 * 1000, labelType: "month", fixedWindow: true }, // Current Semester (Jan-Jun or Jul-Dec)
      "1y": { points: 53, stepMs: 7 * 24 * 60 * 60 * 1000, labelType: "month" },
      "5y": { points: 61, stepMs: 30 * 24 * 60 * 60 * 1000, labelType: "year" },
      "3y": { points: 79, stepMs: 14 * 24 * 60 * 60 * 1000, labelType: "year" }
    };

    
    const config = intervalConfigs[selectedTimeframe] || intervalConfigs["1w"];
    const points = config.points;
    const data: (number | null)[] = new Array(points);
    const currentDate = getStoredGameDate();
    const nowMs = currentDate.getTime();

    // Determine the baseline Start Time for fixed windows
    let startMs = nowMs - (points - 1) * config.stepMs;
    
    if (config.fixedWindow) {
      if (selectedTimeframe === "1w") {
        const d = new Date(currentDate);
        const day = d.getDay(); // 0 is Sun
        const diff = d.getDate() - (day === 0 ? 6 : day - 1);
        d.setDate(diff);
        d.setHours(0, 0, 0, 0);
        startMs = d.getTime();
      } else if (selectedTimeframe === "1m") {

        const d = new Date(currentDate);
        d.setDate(1);
        d.setHours(0, 0, 0, 0);
        startMs = d.getTime();
      } else if (selectedTimeframe === "6m") {
        const d = new Date(currentDate);
        const month = d.getMonth();
        if (month < 6) {
          d.setMonth(0, 1); // 1st Jan
        } else {
          d.setMonth(6, 1); // 1st Jul
        }
        d.setHours(0, 0, 0, 0);
        startMs = d.getTime();
      }
    }


    const realTimeSeed = Math.floor(Date.now() / 1000);
    
    const ohlcData: { open: number; high: number; low: number; close: number; pointDate: Date }[] = [];
    let lastClose = 0;

    for (let i = 0; i < points; i++) {
        const pointMs = startMs + (i * config.stepMs);
        const pointDate = new Date(pointMs);
        
        // Safety: Check if pointDate is valid
        if (isNaN(pointDate.getTime())) {
            ohlcData.push({ open: basePrice, high: basePrice, low: basePrice, close: basePrice, pointDate: new Date() });
            data[i] = basePrice;
            continue;
        }

        // FUTURE CLIPPING: Hide points that haven't happened yet in game time
        if (pointMs > nowMs + (config.stepMs * 0.4)) {
            data[i] = null;
            continue;
        }



        const isCurrentPoint = (pointMs <= nowMs && (pointMs + config.stepMs > nowMs));

        // 1. Get Base Dynamic Price (changes daily)
        let baseVal = getDynamicPrice(selectedKey, type, pointDate);
        if (isNaN(baseVal) || !isFinite(baseVal)) baseVal = basePrice;
        
        // 2. UNIVERSAL SEEDING
        const hourUnit = Math.floor(pointMs / (60 * 60 * 1000));
        const noise1 = getSeededNoise(`${selectedKey}-h1-${hourUnit}`) * 2 - 1;
        const noise2 = getSeededNoise(`${selectedKey}-h2-${pointMs}`) * 2 - 1;
        
        // Resulting 'Natural' Close price
        let close = baseVal * (1 + (noise1 * 0.05) + (noise2 * 0.02));

        // MARKET ANCHOR: The price at "Now" MUST match the basePrice from props
        if (isCurrentPoint) {
            close = basePrice;
        }



        if (isNaN(close) || !isFinite(close)) close = baseVal;
        
        // 3. Chained logic: Open of today = Close of yesterday
        let open = i === 0 ? close * (1 - (getSeededNoise(`${selectedKey}-init`) * 0.04)) : lastClose;
        if (isNaN(open) || !isFinite(open)) open = close;
        
        // 4. Intensity: Ensure the body is never TOO thin vertically
        const minBody = close * 0.01;
        if (Math.abs(open - close) < minBody) {
            const push = getSeededNoise(`${selectedKey}-push-${i}`) > 0.5 ? minBody : -minBody;
            open -= push;
        }

        // 5. High/Low: Must encompass Open & Close
        const shadowH = Math.abs(getSeededNoise(`${selectedKey}-shH-${i}`)) * (close * 0.03);
        const shadowL = Math.abs(getSeededNoise(`${selectedKey}-shL-${i}`)) * (close * 0.03);
        const high = Math.max(open, close) + (isCurrentPoint ? 0 : shadowH);
        const low = Math.min(open, close) - (isCurrentPoint ? 0 : shadowL);

        ohlcData[i] = { open, high, low, close, pointDate };
        lastClose = close;

        
        // For the line chart array
        const liveJitter = (Math.sin(realTimeSeed + i) * 1000) % 1;
        data[i] = close * (1 + (liveJitter * 0.0005));
    }





    const finalLabels: string[] = [];
    const labelIndices: number[] = [];

    for (let i = 0; i < points; i++) {
      const pointMs = startMs + (i * config.stepMs);
      const pointDate = new Date(pointMs);
      
      let shouldAddLabel = false;
      if (selectedTimeframe === "1w") {

        shouldAddLabel = true;
      } else if (selectedTimeframe === "1m") {
        if (i % 5 === 0 || i === points - 1) shouldAddLabel = true;
      } else if (selectedTimeframe === "6m" || selectedTimeframe === "1y") {
        // Add label when month changes or at boundaries
        const prevMs = startMs + ((i - 1) * config.stepMs);
        const prevDate = new Date(prevMs);
        if (i === 0 || i === points - 1 || pointDate.getMonth() !== prevDate.getMonth()) shouldAddLabel = true;
      } else if (selectedTimeframe === "3y" || selectedTimeframe === "5y") {
        const prevMs = startMs + ((i - 1) * config.stepMs);
        const prevDate = new Date(prevMs);
        if (i === 0 || i === points - 1 || pointDate.getFullYear() !== prevDate.getFullYear()) shouldAddLabel = true;
      } else {
        const labelInterval = Math.max(1, Math.floor(points / 6));
        if (i % labelInterval === 0 || i === points - 1) shouldAddLabel = true;
      }



      if (shouldAddLabel) {
        labelIndices.push(i);
        if (config.labelType === "hour") finalLabels.push(`${String(pointDate.getHours()).padStart(2, '0')}:00`);
        else if (config.labelType === "day") {
          const days = ["MIN", "SEN", "SEL", "RAB", "KAM", "JUM", "SAB"];
          finalLabels.push(days[pointDate.getDay()]);
        }
        else if (config.labelType === "date") finalLabels.push(`${pointDate.getDate()}`);
        else if (config.labelType === "month") finalLabels.push(["JAN", "FEB", "MAR", "APR", "MEI", "JUN", "JUL", "AGU", "SEP", "OKT", "NOV", "DES"][pointDate.getMonth()]);
        else if (config.labelType === "year") finalLabels.push(String(pointDate.getFullYear()));
      }
    }

    // Apply simple smoothing (3-point moving average, ignore nulls)
    const smoothedData = data.map((val, i) => {
      if (val === null) return null;
      const prev = data[i-1];
      const next = data[i+1];
      if (prev === null || next === null || prev === undefined || next === undefined) return val;
      return (prev + val + next) / 3;
    });

    const validPoints = smoothedData
      .map((val, i) => {
        if (val === null) return null;
        const ohlc = ohlcData[i];
        return { 
          val, 
          index: i,
          open: ohlc?.open || val,
          high: ohlc?.high || val,
          low: ohlc?.low || val,
          close: ohlc?.close || val,
          pointDate: ohlc?.pointDate || new Date()
        };

      })
      .filter(p => p !== null) as { val: number, index: number, open: number, high: number, low: number, close: number, pointDate: Date }[];



    if (validPoints.length === 0) return { 
      line: "", 
      area: "", 
      points: [], 
      labels: finalLabels, 
      labelIndices,
      min: basePrice,
      range: 1,
      totalPoints: points,
      horizontalPadding: 40,
      startMs: 0,
      stepMs: 1,
      nowMs: Date.now()
    };



    const width = 800;
    const height = 200;
    const horizontalPadding = 40; // Prevent edges from being cut off
    const step = (width - 2 * horizontalPadding) / (points - 1);
    
    const allHighs = validPoints.length > 0 ? validPoints.map(p => p.high) : [basePrice * 1.05];
    const allLows = validPoints.length > 0 ? validPoints.map(p => p.low) : [basePrice * 0.95];
    
    let actualMin = Math.min(...allLows);
    let actualMax = Math.max(...allHighs);
    
    // If range is too small, enforce at least a 20% spread around the current price
    let currentRange = actualMax - actualMin;
    if (currentRange < basePrice * 0.1) {
      actualMin = basePrice * 0.9;
      actualMax = basePrice * 1.1;
      currentRange = actualMax - actualMin;
    }
    
    const padding = currentRange * 0.15;
    const safeMin = actualMin - padding;
    const safeMax = actualMax + padding;
    const safeRange = (safeMax - safeMin) || (basePrice * 0.1);



    
    const pathPoints = smoothedData.map((val, i) => {
      if (val === null) return null;
      return {
        x: horizontalPadding + i * step,
        y: height - ((val - safeMin) / safeRange) * (height * 0.8) - (height * 0.1)
      };
    });
    
    const linePath = "M " + pathPoints
      .filter(p => p !== null)
      .map(p => `${p!.x},${p!.y}`)
      .join(" L ");
      
    const areaPath = linePath + ` L ${horizontalPadding + (points - 1) * step},${height} L ${horizontalPadding},${height} Z`;

    const definedPoints = validPoints.map(p => ({
      ...p,
      x: horizontalPadding + p.index * step,
      y: height - ((p.val - safeMin) / safeRange) * (height * 0.8) - (height * 0.1)
    }));
    
    return {
      line: linePath,
      area: areaPath,
      points: definedPoints,
      labels: finalLabels,
      labelIndices: labelIndices,
      totalPoints: points,
      horizontalPadding: horizontalPadding,
      min: safeMin,
      range: safeRange,
      startMs: startMs,
      stepMs: config.stepMs,
      nowMs: nowMs
    };



  }, [selectedKey, selectedTimeframe, basePrice, type, tick]);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>, isFull: boolean = false) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const viewBoxWidth = 800; // Fixed internal coordinate system
    const x = ((e.clientX - rect.left) / rect.width) * viewBoxWidth;

    
    // Account for padding in hover logic
    const hPadding = chartData.horizontalPadding || 40;
    const effectiveWidth = viewBoxWidth - (2 * hPadding);
    const step = effectiveWidth / ((chartData.totalPoints || 1) - 1);
    
    // Map x back to index
    const xInChart = x - hPadding;
    const index = Math.max(0, Math.min((chartData.totalPoints || 1) - 1, Math.round(xInChart / step)));
    
    // Find the point that corresponds to this index (search defined points)
    const point = chartData.points.find((p: any) => p.index === index) || chartData.points[0];
    
    if (point) {
      setHoverData({ ...point, index });
    }
  };


  const renderChartContent = (isFull: boolean = false) => {
    const viewBoxWidth = isFull ? 1200 : 800;
    const viewBoxHeight = isFull ? 400 : 200;
    const colorFinal = color;

    // Adjust paths for larger viewBox if needed, but the current logic is based on 800/200.
    // For simplicity, we can keep the 800/200 viewBox but scale the container.
    // However, for "Full Screen", we might want more detail.
    // Let's stick to 800/200 and let SVG scale it.

    return (
      <div className={`relative flex flex-col w-full h-full ${isFull ? 'p-12' : ''}`}>
        <div className="absolute top-6 right-6 z-20 flex items-center gap-2">
           <div className="flex items-center gap-1 bg-zinc-900/50 p-1 rounded-xl border border-zinc-800">
              <button 
                 onClick={() => setChartMode('line')}
                 className={`p-1.5 rounded-lg transition-all cursor-pointer ${chartMode === 'line' ? 'bg-blue-600 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                 <LineChart size={14} />
              </button>
              <button 
                 onClick={() => setChartMode('bar')}
                 className={`p-1.5 rounded-lg transition-all cursor-pointer ${chartMode === 'bar' ? 'bg-blue-600 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                 <BarChart3 size={14} />
              </button>
           </div>
           
           {!isFull && (
             <button 
               onClick={() => setIsFullscreen(true)}
               className="p-2 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-500 hover:text-white rounded-xl border border-zinc-800 transition-all cursor-pointer group/fs"
             >
               <Maximize2 size={16} className="group-hover/fs:scale-110 transition-transform" />
             </button>
           )}
        </div>

        {/* Grid Lines */}
        <div className={`absolute inset-0 flex flex-col justify-between ${isFull ? 'p-20' : 'p-8'} opacity-10 pointer-events-none`}>
          {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-[1px] w-full bg-zinc-800/50"></div>)}
        </div>

        <svg 
          className="flex-1 w-full overflow-visible cursor-crosshair relative z-10" 
          preserveAspectRatio="xMidYMid meet" 
          viewBox="0 0 800 200"
          onMouseMove={(e) => handleMouseMove(e, isFull)}
          onMouseLeave={() => setHoverData(null)}
        >
          <defs>
            <linearGradient id={`chartFill-${type}-${isFull ? 'full' : 'mini'}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={colorFinal} stopOpacity="0.2" />
              <stop offset="100%" stopColor={colorFinal} stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {chartMode === 'line' ? (
            <>
              <path d={chartData.area} fill={`url(#chartFill-${type}-${isFull ? 'full' : 'mini'})`} className="animate-in fade-in duration-1000" />
              <path d={chartData.line} fill="none" stroke={colorFinal} strokeWidth={isFull ? "2" : "3"} strokeLinecap="round" strokeLinejoin="round" style={{ filter: `drop-shadow(0 0 15px ${colorFinal}80)` }} />
            </>
          ) : (
            <g>
              {(() => {
                const internalHeight = 200;
                const getPY = (val: number) => internalHeight - ((val - chartData.min) / chartData.range) * (internalHeight * 0.8) - (internalHeight * 0.1);
                const step = (800 - 2 * chartData.horizontalPadding) / ((chartData.totalPoints || 1) - 1);
                const candleWidth = Math.min(60, step * 0.85);

                return chartData.points.map((p: any) => {
                  const yOpen = getPY(p.open);
                  const yClose = getPY(p.close);
                  const yHigh = getPY(p.high);
                  const yLow = getPY(p.low);
                  const isUp = p.close >= p.open;
                  const candleColor = isUp ? "#22c55e" : "#ef4444";

                  return (
                    <g key={p.index} className="animate-in fade-in duration-500">
                      <line 
                          x1={p.x} y1={yHigh} x2={p.x} y2={yLow} 
                          stroke={candleColor} strokeWidth="4"
                          strokeLinecap="round"
                      />
                      <rect 
                          x={p.x - candleWidth / 2} 
                          y={Math.min(yOpen, yClose)} 
                          width={candleWidth} 
                          height={Math.max(3, Math.abs(yOpen - yClose))} 
                          fill={candleColor} 
                          rx={2}
                          style={{ 
                            filter: `drop-shadow(0 0 10px ${candleColor}60)`,
                            stroke: 'rgba(255,255,255,0.1)',
                            strokeWidth: '0.5'
                          }}
                      />
                    </g>
                  );
                });
              })()}
            </g>
          )}

                    
          {/* Static Points (Only for line mode or very subtle) */}
          {chartMode === 'line' && chartData.points.map((p: any, i: number) => (
            <circle 
              key={i} cx={p.x} cy={p.y} r={isFull ? "1.5" : "2"} 
              fill={colorFinal} opacity="0.3" 
            />
          ))}

          {/* Hover Effects */}
          {hoverData && (
            <g>
              <line 
                x1={hoverData.x} y1="0" x2={hoverData.x} y2="200" 
                stroke={colorFinal} strokeWidth="1" strokeDasharray="4 4" opacity="0.5" 
              />
              <circle cx={hoverData.x} cy={hoverData.y} r={isFull ? "16" : "12"} fill={colorFinal} className="animate-pulse opacity-20" />
              <circle cx={hoverData.x} cy={hoverData.y} r={isFull ? "8" : "6"} fill={colorFinal} stroke="white" strokeWidth="2" style={{ filter: `drop-shadow(0 0 15px ${colorFinal})` }} />
              
              <g transform={`translate(${hoverData.x}, ${hoverData.y + (hoverData.y < 40 ? 40 : -25)})`}>
                 <rect 
                    x={hoverData.index > (chartData.points.length / 2) ? -120 : -5} 
                    y="-22" width="125" height="24" rx="12" 
                    fill={colorFinal} fillOpacity="0.95" 
                    className="drop-shadow-lg"
                 />
                 <text 
                    x={hoverData.index > (chartData.points.length / 2) ? -110 : 5} 
                    y="-5" fill="white" 
                    className={`${isFull ? 'text-[12px]' : 'text-[14px]'} font-black italic tracking-tighter`}
                    style={{ pointerEvents: 'none' }}
                 >
                    {Math.round(hoverData?.close || hoverData?.val || 0).toLocaleString('id-ID')}
                 </text>
              </g>
            </g>
          )}

          {(() => {
            if (hoverData) return null;
            // Find 'Now' point
            const nowPoint = chartData.points.find((p: any) => {
              const pNextMs = (chartData.startMs || 0) + (p.index + 1) * (chartData.stepMs || 1);
              return p.pointDate.getTime() <= (chartData.nowMs || Date.now()) && pNextMs > (chartData.nowMs || Date.now());
            }) || chartData.points[chartData.points.length - 1];



            if (!nowPoint) return null;

            return (
              <g>
                <line 
                  x1={nowPoint.x} y1="0" x2={nowPoint.x} y2="200" 
                  stroke={colorFinal} strokeWidth="1" strokeDasharray="4 4" opacity="0.3" 
                />
                <circle cx={nowPoint.x} cy={nowPoint.y} r="6" fill={colorFinal} className="animate-pulse" style={{ filter: `drop-shadow(0 0 20px ${colorFinal})` }}>
                   <animate attributeName="cy" values={`${nowPoint.y-5};${nowPoint.y+5};${nowPoint.y-5}`} dur="3s" repeatCount="indefinite" />
                </circle>
                
                {/* Fixed Label on the right for current price */}
                <g transform={`translate(730, ${(nowPoint?.y || 100) - 12})`}>
                  <rect x="0" y="0" width="65" height="24" rx="12" fill={colorFinal} fillOpacity="0.9" />
                  <text x="32.5" y="17" fill="white" textAnchor="middle" className="text-[12px] font-black italic tracking-tighter">
                    {Math.round(nowPoint?.close || nowPoint?.val || 0).toLocaleString('id-ID')}
                  </text>
                </g>

              </g>
            );
          })()}

        </svg>

        {/* Time Labels Indicator */}
        <div 
          className="relative z-10 border-t border-zinc-900/30 bg-zinc-900/10"
          style={{ paddingLeft: '5%', paddingRight: '5%' }}
        >
          <div className="flex items-center justify-between">
            {chartData.labels.map((label: string, i: number) => (
              <div key={i} className="flex flex-col items-center gap-2">
                 <div className="h-2 w-[1.5px]" style={{ backgroundColor: `${colorFinal}40` }}></div>
                 <span className={`${isFull ? 'text-[12px]' : 'text-[10px]'} font-black text-zinc-500 uppercase tracking-[0.2em]`}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="h-[320px] w-full bg-zinc-950/50 border border-zinc-900 rounded-[3rem] relative overflow-hidden group shadow-inner flex flex-col">
        {renderChartContent(false)}
      </div>

      {isFullscreen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-12 animate-in fade-in zoom-in-95 duration-300">
          <div className="absolute inset-0 bg-black/90" onClick={() => setIsFullscreen(false)}></div>
          
          <div className="relative w-full max-w-7xl h-[70vh] bg-zinc-950 border border-zinc-800 rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-8 border-b border-zinc-900">
               <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-widest italic leading-none">Analisis Harga Detail</h3>
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-2">Visualisasi Tren Pasar Komoditas {selectedKey.replace(/_/g, ' ')}</p>
               </div>
               <button 
                  onClick={() => setIsFullscreen(false)}
                  className="p-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-2xl border border-zinc-800 transition-all cursor-pointer active:scale-95"
               >
                  <Minimize2 size={24} />
               </button>
            </div>
            
            <div className="flex-1 relative">
               {renderChartContent(true)}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
