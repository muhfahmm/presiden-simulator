/**
 * Road Generator - Rust Implementation
 * Membuat tekstur jalan berwarna hitam dengan garis putus-putus putih
 */

use serde::{Deserialize, Serialize};
use std::env;

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
struct RoadConfig {
    #[serde(default = "default_width")]
    width: usize,
    #[serde(default = "default_height")]
    height: usize,
    #[serde(default = "default_road_width")]
    road_width: usize,
    #[serde(default = "default_dash_length")]
    dash_length: usize,
    #[serde(default = "default_dash_gap")]
    dash_gap: usize,
    #[serde(default = "default_road_color")]
    road_color: String,
    #[serde(default = "default_dash_color")]
    dash_color: String,
}

fn default_width() -> usize { 512 }
fn default_height() -> usize { 512 }
fn default_road_width() -> usize { 50 }
fn default_dash_length() -> usize { 20 }
fn default_dash_gap() -> usize { 10 }
fn default_road_color() -> String { "#000000".to_string() }
fn default_dash_color() -> String { "#FFFFFF".to_string() }

#[derive(Debug, Serialize)]
struct RoadResult {
    #[serde(rename = "imageData")]
    image_data: Vec<u8>,
    width: usize,
    height: usize,
}

#[derive(Debug, Clone, Copy)]
struct Color {
    r: u8,
    g: u8,
    b: u8,
}

impl Color {
    fn from_hex(hex: &str) -> Result<Self, String> {
        let hex = hex.trim_start_matches('#');
        if hex.len() != 6 {
            return Err("Invalid hex color".to_string());
        }

        let r = u8::from_str_radix(&hex[0..2], 16)
            .map_err(|_| "Invalid red component")?;
        let g = u8::from_str_radix(&hex[2..4], 16)
            .map_err(|_| "Invalid green component")?;
        let b = u8::from_str_radix(&hex[4..6], 16)
            .map_err(|_| "Invalid blue component")?;

        Ok(Color { r, g, b })
    }
}

struct RoadGenerator {
    config: RoadConfig,
    image_data: Vec<u8>,
}

impl RoadGenerator {
    fn new(config: RoadConfig) -> Self {
        let size = config.width * config.height * 3;
        let image_data = vec![0; size];
        
        RoadGenerator {
            config,
            image_data,
        }
    }

    fn set_pixel(&mut self, x: usize, y: usize, color: Color) {
        if x < self.config.width && y < self.config.height {
            let index = (y * self.config.width + x) * 3;
            self.image_data[index] = color.r;
            self.image_data[index + 1] = color.g;
            self.image_data[index + 2] = color.b;
        }
    }

    fn generate(&mut self) -> Result<(), String> {
        let road_color = Color::from_hex(&self.config.road_color)?;
        let dash_color = Color::from_hex(&self.config.dash_color)?;

        // Fill dengan warna jalan (hitam)
        for y in 0..self.config.height {
            for x in 0..self.config.width {
                self.set_pixel(x, y, road_color);
            }
        }

        // Gambar garis putus-putus di tengah
        let center_x = self.config.width / 2;
        let dash_width = 4;
        let mut y_pos = 0;

        while y_pos < self.config.height {
            let y_end = (y_pos + self.config.dash_length).min(self.config.height);
            let x_start = center_x.saturating_sub(dash_width / 2);
            let x_end = (center_x + dash_width / 2).min(self.config.width);

            // Gambar dash
            for y in y_pos..y_end {
                for x in x_start..x_end {
                    self.set_pixel(x, y, dash_color);
                }
            }

            y_pos += self.config.dash_length + self.config.dash_gap;
        }

        Ok(())
    }

    fn to_result(self) -> RoadResult {
        RoadResult {
            image_data: self.image_data,
            width: self.config.width,
            height: self.config.height,
        }
    }
}

fn main() {
    let args: Vec<String> = env::args().collect();
    
    if args.len() < 2 {
        eprintln!(r#"{{"error":"No configuration provided"}}"#);
        std::process::exit(1);
    }

    let config_str = &args[1];
    
    match serde_json::from_str::<RoadConfig>(config_str) {
        Ok(config) => {
            let mut generator = RoadGenerator::new(config);
            
            match generator.generate() {
                Ok(_) => {
                    let result = generator.to_result();
                    match serde_json::to_string(&result) {
                        Ok(json) => println!("{}", json),
                        Err(e) => {
                            eprintln!(r#"{{"error":"JSON serialization failed: {}"}}"#, e);
                            std::process::exit(1);
                        }
                    }
                }
                Err(e) => {
                    eprintln!(r#"{{"error":"Generation failed: {}"}}"#, e);
                    std::process::exit(1);
                }
            }
        }
        Err(e) => {
            eprintln!(r#"{{"error":"Config parsing failed: {}"}}"#, e);
            std::process::exit(1);
        }
    }
}
