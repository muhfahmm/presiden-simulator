import sys
import json
import math

def calculate_geodesic_path(start_lon, start_lat, end_lon, end_lat, segments=50):
    """
    Calculates a series of points along a curved path between two coordinates.
    Uses a simple spherical linear interpolation (SLERP) approximation.
    """
    path = []
    
    # Convert to radians
    phi1, lambda1 = math.radians(start_lat), math.radians(start_lon)
    phi2, lambda2 = math.radians(end_lat), math.radians(end_lon)
    
    # Angular distance between points
    d = 2 * math.asin(math.sqrt(math.sin((phi2 - phi1) / 2)**2 + 
                                  math.cos(phi1) * math.cos(phi2) * math.sin((lambda2 - lambda1) / 2)**2))
    
    for i in range(segments + 1):
        f = i / segments
        # Spherical interpolation logic
        A = math.sin((1 - f) * d) / math.sin(d) if d > 0 else 1 - f
        B = math.sin(f * d) / math.sin(d) if d > 0 else f
        
        x = A * math.cos(phi1) * math.cos(lambda1) + B * math.cos(phi2) * math.cos(lambda2)
        y = A * math.cos(phi1) * math.sin(lambda1) + B * math.cos(phi2) * math.sin(lambda2)
        z = A * math.sin(phi1) + B * math.sin(phi2)
        
        lat = math.atan2(z, math.sqrt(x**2 + y**2))
        lon = math.atan2(y, x)
        
        path.append({"lon": math.degrees(lon), "lat": math.degrees(lat)})
        
    return path

if __name__ == "__main__":
    if len(sys.argv) < 5:
        print(json.dumps({"error": "Insufficient arguments"}))
        sys.exit(1)
        
    try:
        s_lon, s_lat, e_lon, e_lat = map(float, sys.argv[1:5])
        result = calculate_geodesic_path(s_lon, s_lat, e_lon, e_lat)
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
