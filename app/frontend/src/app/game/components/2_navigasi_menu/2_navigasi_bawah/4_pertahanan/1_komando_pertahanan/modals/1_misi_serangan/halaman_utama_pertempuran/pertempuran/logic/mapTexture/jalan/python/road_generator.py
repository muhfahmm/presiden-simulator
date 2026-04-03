#!/usr/bin/env python3
"""
Road Generator - Python Implementation
Membuat tekstur jalan berwarna hitam dengan garis putus-putus putih
"""

import sys
import json
import numpy as np
from typing import Dict, Any


class RoadGenerator:
    def __init__(self, config: Dict[str, Any]):
        self.width = config.get('width', 512)
        self.height = config.get('height', 512)
        self.road_width = config.get('roadWidth', 50)
        self.dash_length = config.get('dashLength', 20)
        self.dash_gap = config.get('dashGap', 10)
        self.road_color = self._parse_color(config.get('roadColor', '#000000'))
        self.dash_color = self._parse_color(config.get('dashColor', '#FFFFFF'))

    def _parse_color(self, color_str: str) -> tuple:
        """Parse hex color string to RGB tuple"""
        color_str = color_str.lstrip('#')
        return tuple(int(color_str[i:i+2], 16) for i in (0, 2, 4))

    def generate(self) -> np.ndarray:
        """Generate road texture"""
        # Buat canvas hitam (jalan)
        image = np.zeros((self.height, self.width, 3), dtype=np.uint8)
        image[:, :] = self.road_color

        # Hitung posisi tengah untuk garis putus-putus
        center_x = self.width // 2
        dash_width = 4  # Lebar garis putus-putus

        # Gambar garis putus-putus vertikal di tengah
        y_pos = 0
        while y_pos < self.height:
            # Gambar dash
            y_end = min(y_pos + self.dash_length, self.height)
            x_start = center_x - dash_width // 2
            x_end = center_x + dash_width // 2
            
            image[y_pos:y_end, x_start:x_end] = self.dash_color
            
            # Pindah ke posisi dash berikutnya
            y_pos += self.dash_length + self.dash_gap

        return image

    def to_json_output(self, image: np.ndarray) -> str:
        """Convert image to JSON output format"""
        result = {
            'imageData': image.flatten().tolist(),
            'width': self.width,
            'height': self.height
        }
        return json.dumps(result)


def main():
    if len(sys.argv) < 2:
        print(json.dumps({'error': 'No configuration provided'}))
        sys.exit(1)

    try:
        config = json.loads(sys.argv[1])
        generator = RoadGenerator(config)
        image = generator.generate()
        output = generator.to_json_output(image)
        print(output)
    except Exception as e:
        print(json.dumps({'error': str(e)}))
        sys.exit(1)


if __name__ == '__main__':
    main()
